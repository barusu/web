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
    <div class="clearfix">
      <div class="item">
        <o-checkbox disabled>test</o-checkbox>
        <o-checkbox>test1</o-checkbox>
        <o-checkbox indeterminate>test2</o-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>
