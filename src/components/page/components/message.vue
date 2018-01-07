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
        <o-button effect="spread" type="primary">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="info" @click="showMessage">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="warning">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="error">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="success">Spread</o-button>
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
      showMessage() {
        this.$msg("info");
      }
    }
  }
</script>
