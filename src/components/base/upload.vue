<template>
  <div class="o-upload clearfix" @drop="drop" @dragover="dragover" @dragenter="dragenter" @dragleave="dragleave">
    <transition-group name="list" tag="div" class="clearfix">
      <div class="item" v-for="(i, index) in imgs" :key="i.id">
        <img :src="i.src || i.base64" alt="">
        <div class="tool">
          <o-svg type="trash" @click="del(index)"></o-svg>
        </div>
      </div>
    </transition-group>
    <div class="add-item" v-if="!imgs.length" :class="{'ready': isReady}">
      <div class="add">
        <label class="add-icon"><input type="file" name="file" accept="image/*"><i></i></label>
      </div>
      <p class="memo">点击选择或将图片拖到这里</p>
    </div>
    <div class="operation" v-else>
      <o-button type="info" @click="upload">上传</o-button>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax';

  export default {
    data() {
      var canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 200;
      return {
        canvas: canvas,
        ctx: canvas.getContext("2d"),
        imgs: [],
        poi: 2,
        isReady: false
      };
    },
    methods: {
      upload() {
        $.post('qiniu/upload', {
          prefix: 'min_album',
          file: this.imgs[0].blob
        }, data => {
          console.log(data);
        });
      },
      del(index) {
        this.imgs.splice(index, 1);
      },
      dragenter() {
        this.isReady = true;
      },
      dragleave() {
        this.isReady = false;
      },
      dragover(e) {
        this.isReady = true;
        e.preventDefault();
      },
      drop(e) {
        e.preventDefault();
        if(e.dataTransfer.files.length) {
          for(var i = 0; i < e.dataTransfer.files.length; i++) {
            var img = {file: e.dataTransfer.files[i], base64: '', id: this.poi++};
            if(this.imgs.some(i => (i.file.size === img.file.size && i.file.name === img.file.name && i.file.lastModified === img.file.lastModified))) continue;
            if(img.file.type.indexOf('image/') === 0 && img.file.size < 10000000) {
              this.imgs.push(img);
            }
          }
          this.updateImgsBase64(0);
        }
      },
      updateImgsBase64(index) {
        if(this.imgs[index]) {
          if(this.imgs[index].base64) {
            this.updateImgsBase64(index + 1);
          }else {
            var img = document.createElement("img");
            var reader = new FileReader();
            img.onload = () => {
              var x = 0, y = 0, h = 200, w = 300;
              if(img.width * 2 / 3 > img.height) {
                w = img.width * h / img.height;
                x = (300 - w) / 2;
              }else {
                h = img.height * w / img.width;
                y = (200 - h) /2;
              }
              console.log(img.width);
              console.log(img.height);
              this.ctx.drawImage(img, x, y, w, h);
              this.imgs[index].base64 = this.canvas.toDataURL("image/png");
              this.imgs[index].blob = this.baseToBlob(this.imgs[index].base64);
              this.updateImgsBase64(index + 1);
            };
            reader.onload = () => {
              img.src = reader.result;
            };
            reader.readAsDataURL(this.imgs[index].file);
          }
        }
      },
      baseToBlob(base) {
        var bytes = window.atob(base.split(',')[1]);
        //处理异常,将ascii码小于0的转换为大于0
        // eslint-disable-next-line
        var ab = new ArrayBuffer(bytes.length);
        // eslint-disable-next-line
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], {type: 'image/png'});
      }
    }
  };
</script>

<style lang="scss">
  .o-upload {
    background: #fff;
    min-height: 2em;
    padding: 5px;
    border-radius: 4px;
    .operation {
      text-align: right;
      border-top: 1px solid #eee;
      margin-top: 5px;
      padding: 10px 5px 5px;
    }
    .tool {
      position: absolute;
      width: 100%;
      height: 2em;
      background: rgba(0,0,0,.5);
      font-size: 12px;
      top: -24px;
      left: 0;
      text-align: center;
      transition: .3s top;
      svg {
        height: 20px;
        margin: 2px;
        color: #fff;
        cursor: pointer;
        &:hover {
          color: #fc605d;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .item {
      position: relative;
      display: inline-block;
      float: left;
      width: 158px;
      height: 108px;
      border: 1px solid #eee;
      padding: 3px;
      margin: 5px;
      border-radius: 3px;
      overflow: hidden;
      transition: all 1s;
      &:hover {
        .tool {
          top: 0;
        }
      }
    }
    .add-item {
      height: 169px;
      border: 2px dashed #ccc;
      border-radius: 5px;
      &.ready {
        border-color: #aaa;
      }
      .memo {
        color: #ccc;
        font-size: 16px;
        text-align: center;
      }
    }
    .add {
      position: relative;
      width: 100px;
      height: 100px;
      margin: 10px auto 5px;
      background: #fff;
    }
    .add-icon {
      position: relative;
      display: inline-block;
      width: 80%;
      height: 80%;
      margin: 10%;
      box-shadow: -1px 1px 0 0 rgba(0,0,0,.1);
      border-radius: 50%;
      background-color: #eee;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: inline-block;
        background-color: #fff;
        box-shadow: -1px 1px 0 0 rgba(0,0,0,.1);
        border-radius: 10px;
        pointer-events: none;
      }
      &::before {
        top: 33px;
        left: 10px;
        width: 60px;
        height: 15px;
      }
      &::after {
        top: 10px;
        left: 33px;
        width: 15px;
        height: 60px;
      }
      > i {
        position: absolute;
        top: 33px;
        left: 10px;
        display: inline-block;
        z-index: 1;
        background-color: #fff;
        width: 60px;
        height: 15px;
        border-radius: 10px;
        pointer-events: none;
      }
      > input {
        position: absolute;
        clip: rect(0,0,0,0);
      }
    }
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: scale(.5);
    }
    .list-active,
    .list-leave-active {
      position: absolute;
    }
    .list-move {
      transition: transform 1s;
    }
  }
</style>