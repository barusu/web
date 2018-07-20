<style lang="scss">
  .code-button {
    .button {
      position: relative;
      display: inline-block;
      font-size: .14rem;
      padding: 0 1em;
      line-height: 2;
      border: 1px solid #999;
      border-radius: 4px;
      color: #444;
      background-color: transparent;
      text-align: center;
      user-select: none;
      cursor: pointer;
      transition: background .34s, border .34s, filter .34s, color .34s;
      &:hover {
        border-color: #409eff;
        color: #409eff;
      }
      &:active {
        filter: brightness(86%);
      }
      &.disabled {
        filter: grayscale(100%);
        cursor: not-allowed;
        background: #ddd;
        pointer-events: none;
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: -1px; left: -1px;
        bottom: -1px; right: -1px;
        border-radius: inherit;
        opacity: 0;
        box-shadow: 0 0 0 6px;
        transition: all .4s linear;
        z-index: -1;
      }
      &:active {
        &::before {
          transition: all 1ms linear;
          box-shadow: 0 0 0 0;
          opacity: 0.618;
        }
      }
    }
  }
</style>

<template>
  <div class="code-button">
    <h2><span>Button</span> <span class="chinese"></span></h2>
    <div class="preview clearfix">
      <button type="button" class="button">不要点</button>
      <button type="button" class="button disabled">不要点</button>
    </div>
    <div class="code-wrapper">
      <div class="code-html">
        <o-code lang="xml" :code="html"></o-code>
      </div>
      <div class="code-scss"></div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable indent */
  /* eslint-disable default-case */

  export default {
    data() {
      return {
        html: '<button type="button" class="button">不要点</button>'
      };
    },
    methods: {
    },
    computed: {
    }
  }
</script>
