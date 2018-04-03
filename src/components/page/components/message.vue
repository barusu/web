<style lang="scss">
  .message {
    .item {
      float: left;
      margin: 0 .05rem .1rem;
      font-size: .14rem;
      line-height: 2.5;
      border-radius: 4px;
      color: #fff;
    }
    .list {
      font-size: 14px;
      font-family: monospace;
    }
  }
</style>

<template>
  <div class="message">
    <h2><span>Message</span> <span class="chinese">消息提示</span></h2>
    <p>显示操作反馈信息.</p>
    <div class="clearfix">
      <div class="item">
        <o-button effect="spread" type="primary" @click="showMessage('This is a normal message')">Primary</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="info" @click="showInfoMessage('This is a info message')">Info</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="warning" @click="showWarnMessage('This is a warning message')">Warning</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="error" @click="showErrorMessage('This is a error message')">Error</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="success" @click="showSuccessMessage('This is a success message')">Success</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" @click="showMessage('10 second real man', 10000)">10 second</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="info" @click="showIconMessage('This is a info message', 'bilibili')">Icon</o-button>
      </div>
    </div>
    <h3><span>Dependencies</span><span class="chinese">依赖</span></h3>
    <p><o-text type="code" title="base/svg.vue">SVG</o-text> 按钮中的图表全都是使用的SVG图标,不需要图标删除template里的标签即可.</p>
    <h3><span>API</span></h3>
    <p>组件提供了一些方法来打开消息提示.</p>
    <o-list :list="list" class="border list" type="diamond"></o-list>
    <o-doc :list="doc"></o-doc>
    <p>Option</p>
    <o-doc :list="optionDoc"></o-doc>
    <h3><span>Update</span></h3>
    <o-log :log="log"></o-log>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          'this.$msg(option, [duration]);',
          'this.$msg.info(option, [duration]);',
          'this.$msg.success(option, [duration]);',
          'this.$msg.warning(option, [duration]);',
          'this.$msg.error(option, [duration]);'
        ],
        doc: [
          {property: 'option', description: '提示文字正文或配置信息(配置细节看下表)', type: 'String / Object', default: ''},
          {property: 'duration', description: '自动关闭的延时, 单位毫秒', type: 'Integer', default: '3000'}
        ],
        optionDoc: [
          {property: 'message', description: '提示文字正文', type: 'String', default: ''},
          {property: 'type', description: '提示框类型: info/success/warning/error, 如未设置icon会附加对应图标', type: 'String', default: ''},
          {property: 'closed', description: '关闭时触发的回调函数', type: 'Function', default: ''},
          {property: 'duration', description: '自动关闭的延时, 单位毫秒', type: 'Integer', default: '3000'},
          {property: 'icon', description: '附加图标, 值为o-svg支持的所有值', type: 'String', default: ''}
        ],
        log: [
          {
            date: '2018-02-05',
            log: [
              {text: 'info图标还没有', status: 'error'},
              {text: '已有的三个图标不成套,需替换', status: 'error'}
            ]
          }
        ]
      };
    },
    methods: {
      showMessage(msg, duration) {
        this.$msg(msg, duration);
      },
      showInfoMessage(msg) {
        this.$msg.info(msg);
      },
      showWarnMessage(msg) {
        this.$msg.warning(msg);
      },
      showSuccessMessage(msg) {
        this.$msg.success(msg);
      },
      showErrorMessage(msg) {
        this.$msg.error(msg);
      },
      showIconMessage(msg, icon) {
        this.$msg({
          message: msg,
          icon: icon
        });
      }
    }
  }
</script>
