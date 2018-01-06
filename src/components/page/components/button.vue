<style lang="scss">
  .button {
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
  <div class="button">
    <h2><span>Button</span> <span class="chinese">按钮</span></h2>
    <p>普通的按钮.</p>
    <p class="tip">动画与disabled的样式需浏览器对 <a class="keyword" href="https://caniuse.com/#search=filter" target="blank">filter</a> 的支持.</p>
    <h3><span>基础的纯css按钮.</span></h3>
    <p>原料.</p>
    <div class="clearfix">
      <div class="item">
        <o-button width="6.5em" :type="baseDisabled ? 'error' : 'success'" @click="baseDisabled = !baseDisabled">{{baseDisabled ? 'Disabled' : 'Enable'}}</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled">Default</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="dashed">Dashed</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="dotted">Dotted</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="primary">Primary</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="info">Info</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="warning">Warning</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="error">Error</o-button>
      </div>
      <div class="item">
        <o-button :disabled="baseDisabled" type="success">Success</o-button>
      </div>
    </div>
    <p>撒点特效.</p>
    <div class="clearfix">
      <div class="item">
        <o-button effect="spread" type="info" icon="bilibili" loading="true">Rectangle</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" loading="true">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="dashed">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="dotted">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="primary">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="info">Spread</o-button>
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
    <p>再加点图标.</p>
    <div class="clearfix">
      <div class="item">
        <o-button effect="spread"><o-svg type="bilibili"></o-svg><span>Spread</span></o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="dashed">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="dotted">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="primary">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="info" icon="bilibili">Spread</o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="warning"><o-svg type="warn"></o-svg><span>Spread</span></o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="error"><span>Spread</span><o-svg type="error"></o-svg></o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="success"><span>Spread</span><o-svg type="ok"></o-svg></o-button>
      </div>
    </div>
    <p>捏点新造型.</p>
    <div class="clearfix">
      <div class="item">
        <o-button effect="spread" shape="circle" icon="bilibili"></o-button>
      </div>
      <div class="item">
        <o-button effect="spread" type="dashed" shape="circle" icon="pic"></o-button>
      </div>
      <div class="item">
        <o-button effect="spread" shape="rectangle" type="info" icon="bilibili">Rectangle</o-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        baseDisabled: false
      };
    },
    methods: {
    }
  }
</script>
