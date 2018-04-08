<style lang="scss">
  .input {
    .item {
      width: 60%;
      padding: 0;
      margin: 0 .05rem .1rem;
      font-size: .14rem;
      color: #333;
    }
  }
</style>

<template>
  <div class="input">
    <h2><span>Input</span> <span class="chinese">输入框</span></h2>
    <p>最基础的表单控件.</p>
    <div class="clearfix">
      <div class="item">
        <o-input v-model="t" placeholder="基本"></o-input>
      </div>
      <div class="item">
        <o-input v-model="t" label="带文字"></o-input>
      </div>
      <div class="item">
        <o-input v-model="t" skin="single" label="单线条型"></o-input>
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
        t: '',
        doc: [
          {property: 'label', description: '提示文本', type: 'String', default: ''},
          {property: 'placeholder', description: 'placeholder', type: 'String', default: ''},
          {property: 'readonly', description: '是否只读(属性存在未赋值同为true)', type: 'Boolean', default: 'false'},
          {property: 'skin', description: '自定义皮肤,目前已有base,single两种,会作为class附加在最外层上', type: 'String', default: 'base'}
        ],
        eventsDoc: [
          {eventName: 'v-model', description: '双向绑定(语法糖value&input可拆分使用)', callbackParamet: ''},
          {eventName: 'blur', description: '失焦事件', callbackParamet: ''}
        ]
      };
    },
    methods: {
    }
  }
</script>
