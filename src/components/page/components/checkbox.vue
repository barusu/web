<style lang="scss">
  .checkbox {
    .item {
      padding: 0 1em;
      margin: 0 .05rem .1rem;
      font-size: .14rem;
    }
  }
</style>

<template>
  <div class="checkbox">
    <h2><span>Checkbox</span> <span class="chinese">多选框</span></h2>
    <p>多选框.</p>
    <p>Safari下transition蜜汁卡顿,transform-origin的默认50% 50% 0都不能实时计算出来,会出现抖动的情况,点击的扩散更是有着近1s的延迟.</p>
    <p>测试设备: MacBook Pro (Retina, 13-inch, Early 2015) Safari Version 11.0.2</p>
    <div class="clearfix">
      <div class="item">
        <o-checkbox disabled>disabled</o-checkbox>
        <o-checkbox>test</o-checkbox>
        <o-checkbox indeterminate>indeterminate</o-checkbox>
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
        doc: [
          {property: 'disabled', description: '是否禁用', type: 'Boolean', default: 'false'},
          {property: 'indeterminate', description: '是否不定的(设定后当值是false时为部分选择的样式)', type: 'Boolean', default: 'false'}
        ],
        eventsDoc: [
          {eventName: 'v-model', description: '双向绑定(语法糖value&input可拆分使用)', callbackParamet: ''}
        ]
      };
    },
    methods: {
    }
  }
</script>
