<style lang="scss">
  .layout {
  }
</style>

<template>
  <div class="layout">
    <h2><span>Color</span> <span class="chinese">自定义布局</span></h2>
    <p>提供用户自定义页面布局.</p>
    <h3><span>Use</span></h3>
    <p>此类组件需使用iframe形式来嵌入页面内.</p>
    <p>&lt;<o-text type="tag">iframe</o-text> src="/static/index.html#index?id=<o-text type="key" title="用户ID之类的唯一标识">Identification</o-text>" frameborder="0" width="100%" <o-text type="key" title="自适应高度需在调用页做额外处理">height="500"</o-text>&gt;&lt;/<o-text type="tag">iframe</o-text>&gt;</p>
    <p><o-text type="title">调整</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,在图表边缘按下鼠标可拖动调整位置,调整大小需使用右下角的缩放手柄.</p>
    <p><o-text type="title">添加</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,顶部操作栏选择添加图表.</p>
    <p><o-text type="title">修改</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,双击需要编辑的图表进入编辑界面.<o-text type="key">修改了位置需先保存,编辑操作会丢弃之前的位置修改记录</o-text></p>
    <p><o-text type="title">删除</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,点击需要删除的图表右上角的红色叉叉.<o-text type="key">此操作不可逆,恢复需重新添加</o-text></p>
    <iframe src="/static/index.html#index?id=02" frameborder="0" width="100%" :height="height" ref="iframe"></iframe>
    <h3><span>Update</span></h3>
    <p></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        height: 500
      };
    },
    methods: {
      resize() {
        if(this.$refs.iframe) {
          this.height = this.$refs.iframe.contentDocument.body.clientHeight || this.$refs.iframe.contentDocument.documentElement.scrollHeight;
        }
        setTimeout(this.resize, 500);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.resize();
      });
    }
  }
</script>
