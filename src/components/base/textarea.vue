<template>
  <label class="textarea-wrapper" :class="type">
    <span v-if="label" v-html="label" class="label" @click="click"></span>
    <div class="textarea-wrapper">
      <pre>{{field}} </pre>
      <textarea v-model="field" @blur="blur" rows="1" :readonly="readOnly"></textarea>
    </div>
  </label>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      label: String,
      value: [String, Number],
      placeholder: String,
      type: {
        type: String,
        default: 'base'
      },
      readonly: null
    },
    methods: {
      click() {
        this.$emit('click');
      },
      blur() {
        this.$emit('blur');
      }
    },
    computed: {
      readOnly() {
        // eslint-disable-next-line
        return this.readonly !== undefined;
      },
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
  .textarea-wrapper {
    width: 100%;
    font-size: .12rem;
    line-height: 1;
    &.single {
      display: block;
      > span {
        display: block;
        line-height: 1.5;
      }
      .textarea-wrapper {
        position: relative;
        font-size: .14rem;
        pre {
          position: relative;
          z-index: -1;
          opacity: 0;
          display: block;
          width: 100%;
          margin: 0;
          line-height: 1.5;
          font-family: inherit;
          padding: 0 .2em 1px;
          white-space: pre-wrap;
          min-height: 2em;
          margin-top: 1px;
        }
      }
      textarea {
        position: absolute;
        top: 0; left: 0;
        display: block;
        width: 100%;
        height: 100%;
        min-height: 2em;
        padding: 0 .2em;
        border-bottom: 1px solid #ddd;
        line-height: 1.5;
        color: #555;
        background: transparent;
        resize: none;
        transition: all .34s;
        overflow: hidden;
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
        + input {
          border-radius: 0 4px 4px 0;
        }
      }
      textarea {
        width: 100%;
        height: 2.5em;
        padding: 0 .1rem;
        vertical-align: middle;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 4px;
        line-height: 2.5;
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