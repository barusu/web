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
        <o-input v-model="t" placeholder="基本"></o-input>
      </div>
      <div class="item">
        <o-select v-model="t" :data="data" placeholder="基本"></o-select>
      </div>
      <div class="item">
        <o-input v-model="t" label="带文字"></o-input>
      </div>
      <div class="item">
        <o-select v-model="t" :data="data" placeholder="基本"  label="带文字"></o-select>
      </div>
      <div class="item">
        <o-input v-model="t" type="single" label="单线条型"></o-input>
      </div>
      <div class="item">
        <o-select v-model="t" type="single" :data="data" placeholder="基本"  label="单线条型"></o-select>
      </div>
    </div>
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
        t: ''
      };
    },
    methods: {
    }
  }
</script>
