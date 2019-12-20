<style lang="scss">
  .component-index {
  }
</style>

<template>
  <div class="component-index">
    <h2><span>Component</span> <span class="chinese">组件</span></h2>
    <p>整理了以前写过的一些组件.</p>
    <p>虽然是整理,但是代码基本全部重构了.</p>
    <p>为了方便,交互部分是用Vue完成的,需要Vue的支持才行,如果原生JS的需要稍微改改,转换下Vue的代码.</p>
    <p>暂时不支持移动端使用,后期计划是有移动端兼容的(有些组件本来就不需要做兼容,要做兼容的只是一小部分).</p>
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
            date: '2018-03-07',
            log: [
              {status: 'forgive', text: 'button组件的边缘裁剪的修正后额外加了负的margin来中和添加额外padding的影响'},
              {status: '', text: '在Color中搞了个纯Css的渐变动画背景,用的background-position做动画效果,不能开启硬件加速每次都重绘挺占资源的,掉帧很严重'},
              {status: '', text: '上面的动画只能小范围使用,像是按钮的背景之类的,代码已注释掉了,换成了伪元素::after用3D位移来实现类似效果'}
            ]
          },
          {
            date: '2018-03-06',
            log: [
              {status: 'forgive', text: 'button组件的边缘裁剪问题修正(加了个1px的横线内边距防止边框被裁剪,影响应该不大吧,有问题下次再调整吧~)'},
              {status: '', text: '我记得我写过slider的,可是怎么也找不到在哪里写过了,花了两个多小时重新撸了个出来=='}
            ]
          },
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
