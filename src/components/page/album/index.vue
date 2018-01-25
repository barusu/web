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
    <div class="upload-wrapper" @drop="drop">
      <input type="file">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      drop(e) {
        console.log(e);
      }
    }
  }
</script>
