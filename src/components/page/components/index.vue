<style lang="scss">
  .component-index {
  }
</style>

<template>
  <div class="component-index">
    <h2><span>Component</span> <span class="chinese">组件</span></h2>
    <p>整理了以前写过的一些组件.</p>
    <p>虽然是整理,但是代码基本全部重构了.</p>
    <h3><span>Css为主</span></h3>
    <p>除了必要的js,大多数的效果都是使用css来完成.</p>
    <p>因为大量效果是使用css3来完成,所以只兼容较新的浏览器,原则上对低版本浏览器或IE保障功能可用.</p>
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
            date: '2018-03-05',
            log: [
              {status: 'error', text: '在button组件内发现一个filter的渲染问题,使用了filter的brightness后边框左右边缘部分遭到不明原因的裁剪,裁剪约0.5px,暂未确认在普通屏幕上的情况'}
            ]
          }
        ]
      };
    }
  }
</script>
