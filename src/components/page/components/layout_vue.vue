<style lang="scss">
  .layout {
    p {
      svg {
        height: 1.5em;
        vertical-align: sub;
      }
      a {
        color: inherit;
      }
    }
  }
</style>

<template>
  <div class="layout">
    <h2><span>Layout</span> <span class="chinese">自定义布局</span></h2>
    <p>提供用户自定义页面布局.</p>
    <h3><span>Download</span></h3>
    <p><a href="https://github.com/barusu/web/tree/master/static/layout" target="blank"><o-svg type="github"></o-svg>GayHub</a></p>
    <h3><span>Tip</span></h3>
    <p>由于删除了登录系统这边的访问控制由接口来完成.</p>
    <p>这个是iframe的精简版,只保留了位置和大小的修改功能.</p>
    <h3><span>Use</span></h3>
    <p>此类组件需使用iframe形式来嵌入页面内.</p>
    <p>&lt;<o-text type="tag">iframe</o-text> src="/static/index.html#index?id=<o-text type="key" title="用户ID之类的唯一标识">Identification</o-text>" frameborder="0" width="100%" <o-text type="key" title="自适应高度需在调用页做额外处理">height="500"</o-text>&gt;&lt;/<o-text type="tag">iframe</o-text>&gt;</p>
    <p><o-text type="title">Host</o-text></p>
    <p>如需修改host去index.html中的&lt;head/&gt;中找到host变量替换即可.</p>
    <p><o-text type="title">调整</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,在图表边缘按下鼠标可拖动调整位置,调整大小需使用右下角的缩放手柄.</p>
    <p><o-text type="title">添加</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,顶部操作栏选择添加图表.</p>
    <p><o-text type="title">修改</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,双击需要编辑的图表进入编辑界面.<o-text type="key">修改了位置需先保存,编辑操作会丢弃之前的位置修改记录</o-text></p>
    <p><o-text type="title">删除</o-text></p>
    <p>页面内非iframe组件区域右键选择编辑进入编辑界面,点击需要删除的图表右上角的红色叉叉.<o-text type="key">此操作不可逆,恢复需重新添加</o-text></p>
    <o-layout id="test" :isEdit="true" :items="['vColor', 'vColor', 'vColor', 'vColor']" host="http://192.68.68.77:8888/rest/v1/"></o-layout>
    <!-- <iframe src="/static/layout/index.html#index?id=02" frameborder="0" width="100%" :height="height" ref="iframe"></iframe> -->
    <h3><span>Update</span></h3>
    <o-log :log="log"></o-log>
  </div>
</template>

<script>
  import oLayout from '@/components/page/components/layout.vue';
  import vColor from '@/components/page/components/color';

  const log = [
    {
      date: '2017-02-07',
      log: [
        {text: '修正内容块的宽度取整产生的积累性误差', status: 'forgive'}
      ]
    }, {
      date: '2017-01-24',
      log: [
        {text: '组件如使用base64的图片在编辑时浏览器会陷入卡死状态(应该是长度超过一定的程度导致的,具体原因未找到)', status: 'error'}
      ]
    }, {
      date: '2017-01-23',
      log: [
        {text: '编辑页添加小屏的支持(最小到宽度720px)', status: 'forgive'},
        {text: '编辑页添加返回按钮(仍可以使用浏览器自带的返回)', status: 'forgive'},
        {text: '删除Title属性(接口忘了让给加了,而且反正也没用就直接删掉吧)', status: 'forgive'}
      ]
    }, {
      date: '2017-01-22',
      log: [
        {text: '实装删除功能', status: 'forgive'},
        {text: '修正编辑时ID丢失导致编辑内容“消失”', status: 'forgive'},
        {text: '添加列表显示模式切换', status: 'forgive'}
      ]
    }, {
      date: '2017-01-18',
      log: [
        {text: '修正切换边框类型后内部高度没有重新计算', status: 'forgive'},
        {text: '修正编辑时切换边框类型内部组件自适应的基准为旧值', status: 'forgive'}
      ]
    }, {
      date: '2017-01-17', log: [
        {text: '添加边距控制开关,新增无边距模式', status: 'forgive'},
        {text: '调整编辑栏样式', status: 'forgive'},
        {text: '编辑功能在独立出去后会丢失ID,暂不可用', status: 'error'},
        {text: '删除功能未实装,删除只是从页面上删除了', status: 'error'}
      ]
    }
  ];

  export default {
    components: {oLayout, vColor},
    data() {
      return {
        height: 500,
        log: log
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
