<style lang="scss">
  .album-index {
  }
  .upload-wrapper {
    height: 100px;
    background: #eee;
  }
</style>

<template>
  <div class="album-index">
    <h2><span>Upload</span> <span class="chinese">上传</span></h2>
    <div class="">
      <o-upload prefix="xx"></o-upload>
    </div>
    <p><o-button type="info" @click="upload">上传</o-button></p>
    <div class="upload-wrapper" @drop="drop" @dragover="dragover">
      <input type="file" name="file" accept="image/*">
    </div>
    <img :src="i" v-for="i in imgs" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null,
        imgs: []
      };
    },
    methods: {
      upload() {
        console.log(this.file);
        // $.post('qiniu/upload', {
        //   prefix: 'album',
        //   file: this.file
        // }, data => {
        //   console.log(data);
        // });
      },
      dragover(e) {
        e.preventDefault();
      },
      drop(e) {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        this.file = file;
        if(file.type.indexOf('image/') === 0 && file.size < 10000000) {
          var reader = new FileReader();
          var that = this;
          reader.onload = function() {
            that.imgs.push(this.result);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }
</script>
