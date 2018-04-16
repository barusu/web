<style lang="scss">
  .canvas-index {
  }
</style>

<template>
  <div class="component-index">
    <h2><span>Canvas</span> <span class="chinese"></span></h2>
    <p>做些小作品学习下Canvas.</p>
    <h3><span>Update</span></h3>
    <o-log :log="log"></o-log>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        log: [
          {
            date: '2018-04-13',
            log: [
              {status: '', text: '创建Canvas板块.'}
            ]
          }
        ]
      };
    }
  }
</script>
