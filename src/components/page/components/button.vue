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
    .tip {
      margin: 0 5px 0;
    }
  }
</style>

<template>
  <div class="button">
    <h2><span>Button</span> <span class="chinese">按钮</span></h2>
    <p>基础的操作按钮,只监听了点击事件,其它事件需使用.native来监听或自行添加.</p>
    <p class="tip">动画与disabled的样式需浏览器对 <a class="keyword" href="https://caniuse.com/#search=filter" target="blank">filter</a> 的支持.</p>
    <h3><span>Dependencies</span><span class="chinese">依赖</span></h3>
    <p><o-text type="code" title="base/svg.vue">SVG</o-text> 按钮中的图表全都是使用的SVG图标,不需要图标删除template里的标签即可.</p>
    <h3><span class="chinese">基础的纯css按钮.</span></h3>
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
        <o-button effect="spread" type="info" icon="bilibili" :loading="loading" @click="loading = !loading">Spread</o-button>
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
    <h3><span>API</span></h3>
    <o-doc :list="doc"></o-doc>
    <h3><span>Events</span></h3>
    <o-doc :list="eventsDoc" type="event"></o-doc>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        baseDisabled: false,
        loading: false,
        doc: [
          {property: 'type', description: '情景色: primary/info/success/warning/error; 边框类型: dashed/dotted 多个时优先级递增', type: 'String', default: ''},
          {property: 'disabled', description: '是否禁用,禁用后会变成黑白模式同时鼠标hover时会有禁用样式, 屏蔽事件', type: 'Boolean', default: 'false'},
          {property: 'width', description: '设定按钮最小宽度,支持auto/inherit以及px、em、%等单位的数值', type: 'Length', default: 'auto'},
          {property: 'effect', description: '附加动画效果, spread: 波纹扩散', type: 'String', default: ''},
          {property: 'shape', description: '形状,可能的值: circle/rectangle, circle需要与icon搭配使用来制作图标按钮', type: 'String', default: ''},
          {property: 'icon', description: '附加图标, 值为o-svg支持的所有值, 默认位置在左边如需在特定位置添加请直接在文字中使用o-svg添加', type: 'String', default: ''},
          {property: 'for', description: '外壳使用的label能直接继承for属性', type: 'String', default: ''},
          {property: 'loading', description: '加载状态, 添加loading icon 如已有icon属性生成的图标会替换掉原有图标, 同disabled一样会屏蔽事件', type: 'Boolean', default: 'false'}
        ],
        eventsDoc: [
          {eventName: 'click', description: '点击事件的回调', callbackParamet: ''}
        ]
      };
    },
    methods: {
    }
  }
</script>
