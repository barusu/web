<template>
  <div class="o-upload clearfix" @drop="drop" @dragover="dragover">
    <transition-group name="list" tag="div">
      <div class="item" v-for="(i, index) in imgs" :key="i.id">
        <img :src="i.src || i.base64" alt="">
        <div class="tool">
          <o-svg type="trash" @click="del(index)"></o-svg>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="add">
          <label class="add-icon"><input type="file" name="file" accept="image/*"><i></i></label>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import $ from '@/libs/ajax';

  export default {
    data() {
      return {
        imgs: [],
        poi: 2
      };
    },
    methods: {
      upload() {
        $.post('qiniu/upload', {
          prefix: 'album',
          file: this.file
        }, data => {
          console.log(data);
        });
      },
      del(index) {
        this.imgs.splice(index, 1);
      },
      dragover(e) {
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
              this.getBase64(img);
            }
          }
        }
      },
      getBase64(img) {
        var reader = new FileReader();
        reader.onload = function() {
          img.base64 = this.result;
        };
        reader.readAsDataURL(img.file);
      }
    }
  };
</script>

<style lang="scss">
  .o-upload .item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter, .list-leave-to
  /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-100%);
  }
  .list-leave-active {
    position: absolute;
  }
  .list-move {
    transition: transform 1s;
  }

  .o-upload {
    background: #fff;
    min-height: 2em;
    padding: 5px;
    border-radius: 4px;
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
      width: 108px;
      height: 108px;
      border: 1px solid #eee;
      padding: 3px;
      margin: 5px;
      border-radius: 3px;
      overflow: hidden;
      &:hover {
        .tool {
          top: 0;
        }
      }
    }
    .add {
      position: relative;
      width: 100%;
      height: 100%;
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
  }
</style>