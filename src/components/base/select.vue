<template>
  <div class="o-select" :class="type">
    <span v-if="label" v-html="label"></span>
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
      height: 2em;
      font-size: .14rem;
      &.placeholder {
        color: #777;
        font-size: .14rem;
      }
    }
    &.single {
      display: block;
      border-bottom: 1px solid #ddd;
      > span {
        display: block;
        line-height: 1.5;
      }
      .select {
        width: 100%;
        border: 0;
        line-height: 2.4;
      }
    }
    &.base {
      display: inline-table;
      > * {
        display: table-cell;
      }
      .select {
        height: 2.5em;
        border: 1px solid #bbb;
        border-radius: 4px;
        line-height: 2.5;
        &:hover {
          border-color: #999;
        }
        &:focus {
          border-color: #09f;
        }
      }
    }
  }
</style>