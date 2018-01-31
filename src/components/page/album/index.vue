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
