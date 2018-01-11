<template>
  <div class="o-select" :class="type">
    <span v-if="label" v-html="label" class="label"></span>
    <select class="select" v-model="field" :class="{'placeholder': !field}">
      <option value="" v-html="placeholder" disabled></option>
      <option :value="i.value" v-for="i in data" v-html="i.label">test</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      value: [String, Number],
      placeholder: String,
      type: {
        type: String,
        default: 'base'
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    computed: {
      field: {
        set(v) {
          this.$emit('input', v);
        },
        get() {
          return this.value;
        }
      }
    }
  };
</script>

<style lang="scss">
  .o-select {
    width: 100%;
    font-size: .12rem;
    line-height: 1;
    .select {
      width: 100%;
      outline: none;
      vertical-align: middle;
      color: #333;
      transition: all .34s;
      &.placeholder {
        color: #777;
        font-size: .14rem;
      }
    }
    &.single {
      display: block;
      > span {
        display: block;
        line-height: 1.5;
      }
      .select {
        width: 100%;
        border: 0;
        line-height: 2;
        font-size: .14rem;
        color: #555;
        border-radius: 0;
        border-bottom: 1px solid #ddd;
        -webkit-appearance: button;
        &:hover {
          border-color: #999;
        }
        &:focus {
          border-color: #50bfff;
          color: #333;
        }
      }
    }
    &.base {
      display: inline-table;
      > * {
        display: table-cell;
      }
      .label {
        width: 1px;
        height: 2.5em;
        padding: 0 .1rem;
        border-radius: 4px 0 0 4px;
        border: 1px solid #bbb;
        border-right: 0;
        line-height: 2.4;
        white-space: nowrap;
        vertical-align: middle;
        + .select {
          -webkit-appearance: button;
          border-radius: 0 4px 4px 0;
        }
      }
      .select {
        height: 2.5em;
        border: 1px solid #bbb;
        padding: 0 .1rem;
        border-radius: 4px;
        line-height: 2.5;
        font-size: .12rem;
        background: #fff;
        &:hover {
          border-color: #999;
        }
        &:focus {
          border-color: #50bfff;
        }
      }
    }
  }
</style>