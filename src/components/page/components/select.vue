<style lang="scss">
  .select {
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
  <div class="select">
    <h2><span>Select</span> <span class="chinese">选择器</span></h2>
    <p>下拉选择器.</p>
    <div class="clearfix">
      <div class="item">
        <o-select v-model="t" :data="data" placeholder="基本"></o-select>
      </div>
      <div class="item">
        <o-select v-model="t" :data="data" placeholder="基本"  label="带文字"></o-select>
      </div>
      <div class="item">
        <o-select v-model="t" skin="single" :data="data" placeholder="基本"  label="单线条型"></o-select>
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
        data: [
          {value: 'sfa', label: 'asda'},
          {value: 'sfa2', label: 'as23da'},
          {value: 'sfa3', label: 'asd23a'},
          {value: 'sfa4', label: 'asdsda'},
          {value: 'sfa22', label: 'asdsda'},
          {value: 'sfa42', label: 'adssda'},
          {value: 'sfa32', label: 'afeda'}
        ],
        t: '',
        doc: [
          {property: 'label', description: '提示文本', type: 'String', default: ''},
          {property: 'placeholder', description: 'placeholder', type: 'String', default: ''},
          {property: 'readonly', description: '是否只读(属性存在未赋值同为true)', type: 'Boolean', default: 'false'},
          {property: 'skin', description: '自定义皮肤,目前已有base,single两种,会作为class附加在最外层上', type: 'String', default: 'base'}
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
