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
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      showMessage(msg) {
        this.$msg(msg);
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
      }
    }
  }
</script>
