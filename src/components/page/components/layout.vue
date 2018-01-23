<style lang="scss">
  .layout {
    .log {
      position: relative;
      padding-left: 6em;
      margin-bottom: .5em;
      font-size: 12px;
      .date {
        position: absolute;
        left: 0; top: 3px;
      }
      p {
        font-size: 12px;
        margin: 0;
        &::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          background: #777;
          transform: rotate(45deg);
          vertical-align: middle;
          margin-right: 5px;
          margin-top: -3px;
          border: 2px solid #777;
          border-color: #111 #444 #666 #999;
        }
      }
    }
  }
</style>

<template>
  <div class="layout">
    <h2><span>Layout</span> <span class="chinese">自定义布局</span></h2>
    <p>提供用户自定义页面布局.</p>
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
    <iframe src="/static/layout/index.html#index?id=02" frameborder="0" width="100%" :height="height" ref="iframe"></iframe>
    <h3><span>Update</span></h3>
    <div class="log" v-for="l in log">
      <o-text type="time" class="date">{{l.date}}</o-text>
      <o-list class="diamond" :list="l.log"></o-list>
    </div>
  </div>
</template>

<script>
  const log = [
    {
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
