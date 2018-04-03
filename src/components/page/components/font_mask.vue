<style lang="scss">
  .font-mask {
    .demo {
      position: relative;
      display: block;
      width: 100%;
      padding-bottom: 50%;
      background: url(../../../assets/demo0.jpg) no-repeat center / cover;
    }
  }
</style>

<template>
  <div class="font-mask">
    <h2><span>Font Mask</span></h2>
    <p>文字蒙版效果,不包含背景图.</p>
    <p>
      <span class="demo">
        <font-mask text="Fire" color="#ffffff" :h="70" :scale="1.4" :opacity="[50, 20]"></font-mask>
      </span>
    </p>
    <h3><span>API</span></h3>
    <o-doc :list="doc"></o-doc>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        doc: [
          {property: 'text', description: '显示的文字', type: 'String', default: ''},
          {property: 'color', description: '蒙版层颜色,合法的颜色值都可以(未设置转换,传入的就是最终使用的颜色值)', type: 'Color', default: '#d3d3d3'},
          {property: 'h', description: '显示文字的区域高度上的占比(0-100)', type: 'Number', default: '70'},
          {property: 'fz', description: '不设置时根据当前实际显示区域自动调整字体大小,可以传值设定成固定字体大小(需附带单位)', type: 'String', default: 'auto'},
          {property: 'scale', description: '文字的缩放,只在未设置 fz 时生效,在自适应的字体大小上添加额外的缩放比例调整实际字体大小', type: 'Number', default: '1'},
          {property: 'opacity', description: '蒙版的透明度设置,可以单设中间部分蒙版的不透明度,分别为中间与上下的不透明度', type: 'Array / Number', default: '[80, 60]'}
        ],
      };
    },
    methods: {},
    mounted() {}
  }
</script>
