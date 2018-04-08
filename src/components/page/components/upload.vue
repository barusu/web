<style lang="scss">
  .upload {
  }
</style>

<template>
  <div class="upload">
    <h2><span>Upload</span> <span class="chinese">图片上传</span></h2>
    <p>上传的地址直接写在组件内部了,这东西在一般一个项目确定后是不会变的,改动频率极低,有需要的提取成参数自行自行处理.</p>
    <p>上传需要后台支持上传部分每个项目都是要重写的,其它项目使用需重写内部upload方法.</p>
    <h3><span>Dependencies</span><span class="chinese">依赖</span></h3>
    <p><o-text type="code" title="components/base/svg.vue">SVG</o-text> 对项目的操作里需要用到一些图标,为了方便这边都是使用svg组件来绘制图标.</p>
    <p><o-text type="code" title="libs/ajax.js">Ajax</o-text> 上传依赖ajax,upload这块是要针对项目重写upload的,这里也就不需要说什么了.</p>
    <o-upload prefix="xx"></o-upload>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
    }
  }
</script>
