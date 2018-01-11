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
        <o-input v-model="t" type="single" label="单线条型"></o-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        t: ''
      };
    },
    methods: {
    }
  }
</script>
