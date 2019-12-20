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
      vertical-align: middle;
      cursor: pointer;
      transition: all 340ms;
      &::before {
        content: "";
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
      &:hover {
        border-color: #409eff;
        color: #409eff;
      }
      &:active {
        filter: brightness(86%);
        &::before {
          transition: box-shadow 1ms linear, opacity 1ms linear 2ms;
          box-shadow: 0 0 0 0;
          opacity: 0.618;
        }
      }
      &.disabled {
        filter: grayscale(100%);
        cursor: not-allowed;
        background: #ddd;
        &:active::before {
          opacity: 0;
        }
      }
      // 自定义颜色
      &.info {
        background-color: #50bfff;
        border-color: #50bfff;
        color: #fff;
        &:before {
          color: #50bfff;
        }
      }
      &.success {
        background-color: #34c849;
        border-color: #34c849;
        color: #fff;
        &::before {
          color: #34c849;
        }
      }
    }
    .o-button {
      display: inline-block;
      padding: 0 1px;
      margin: 0 -1px;
      border: none;
      vertical-align: middle;
      filter: brightness(100%);
      transition: filter .34s;
      &:hover {
        filter: brightness(107%);
      }
      &:active {
        filter: brightness(93%);
      }
      &.disabled {
        filter: grayscale(100%);
        cursor: not-allowed;
        .btn {
          background: #ddd;
          pointer-events: none;
        }
      }
      &.loading {
        cursor: wait;
        filter: opacity(66%);
        .btn {
          pointer-events: none;
        }
      }
      .btn {
        position: relative;
        display: inline-block;
        font-size: .14rem;
        padding: 0 1em;
        line-height: 2;
        border: 1px solid #999;
        border-radius: 4px;
        color: #444;
        text-align: center;
        user-select: none;
        cursor: pointer;
        transition: background .34s, border .34s, filter .34s, color .34s;
        &:hover {
          border-color: #409eff;
          color: #409eff;
        }
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: -1px; left: -1px;
          bottom: -1px; right: -1px;
          border-radius: inherit;
          opacity: 0;
          box-shadow: 0 0 0 6px;
          color: #50bfff;
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
      // 自定义颜色
      &.primary {
        .btn {
          background-color: #409eff;
          border-color: #409eff;
          color: #fff;
          &::before {
            color: #409eff;
          }
        }
      }
      &.warning {
        .btn {
          background-color: #fdbc40;
          border-color: #fdbc40;
          color: #fff;
          &::before {
            color: #fdbc40;
          }
        }
      }
      &.error {
        .btn {
          background-color: #fc605d;
          border-color: #fc605d;
          color: #fff;
          &::before {
            color: #fc605d;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="code-button">
    <h2><span>Button</span> <span class="chinese"></span></h2>
    <div class="preview clearfix">
      <button type="button" class="button">Base</button>
      <span class="button info">确认</span>
      <div class="button success">(•̀ω•́)✧</div>
      <button type="button" class="button disabled">じばく</button>
    </div>
    <p class="tip"><del>单标签的disabled效果不怎么好</del></p>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_btn1" class="kakushi code-control-ck" v-model="ck1">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_btn1">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html1"></o-code>
      </div>
      <input type="checkbox" id="code_btn2" class="kakushi code-control-ck" v-model="ck1">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_btn2">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss1"></o-code>
      </div>
    </div>
    <div class="preview clearfix">
      <button type="button" class="o-button primary">
        <span class="btn">Base</span>
      </button>
      <span class="o-button warning">
        <span class="btn">确认</span>
      </span>
      <div class="o-button error">
        <span class="btn">(•̀ω•́)✧</span>
      </div>
      <button type="button" class="o-button disabled">
        <span class="btn">じばく</span>
      </button>
    </div>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_btn3" class="kakushi code-control-ck" v-model="ck2">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_btn3">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html2"></o-code>
      </div>
      <input type="checkbox" id="code_btn4" class="kakushi code-control-ck" v-model="ck2">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_btn4">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss2"></o-code>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable indent */
  /* eslint-disable default-case */

  export default {
    data() {
      return {
        ck1: false,
        html1: '<button type="button" class="button">Base</button>\n<span class="button info">确认</span>\n<div class="button success">(•̀ω•́)✧</div>\n<button type="button" class="button disabled">じばく</button>',
        scss1: '.button {\n  position: relative;\n  display: inline-block;\n  font-size: .14rem;\n  padding: 0 1em;\n  line-height: 2;\n  border: 1px solid #999;\n  border-radius: 4px;\n  color: #444;\n  background-color: transparent;\n  text-align: center;\n  user-select: none;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: all 340ms;\n  &::before {\n    content: "";\n    position: absolute;\n    display: block;\n    top: -1px; left: -1px;\n    bottom: -1px; right: -1px;\n    border-radius: inherit;\n    opacity: 0;\n    box-shadow: 0 0 0 6px;\n    transition: all .4s linear;\n    z-index: -1;\n  }\n  &:hover {\n    border-color: #409eff;\n    color: #409eff;\n  }\n  &:active {\n    filter: brightness(86%);\n    &::before {\n      transition: box-shadow 1ms linear, opacity 1ms linear 2ms;\n      box-shadow: 0 0 0 0;\n      opacity: 0.618;\n    }\n  }\n  &.disabled {\n    filter: grayscale(100%);\n    cursor: not-allowed;\n    background: #ddd;\n    &:active::before {\n      opacity: 0;\n    }\n  }\n  // 自定义颜色\n  &.info {\n    background-color: #50bfff;\n    border-color: #50bfff;\n    color: #fff;\n    &:before {\n      color: #50bfff;\n    }\n  }\n  &.success {\n    background-color: #34c849;\n    border-color: #34c849;\n    color: #fff;\n    &::before {\n      color: #34c849;\n    }\n  }\n}',
        ck2: false,
        html2: '<button type="button" class="button primary">\n  <span class="btn">Base</span>\n</button>\n<span class="button warning">\n  <span class="btn">确认</span>\n</span>\n<div class="button error">\n  <span class="btn">(•̀ω•́)✧</span>\n</div>\n<button type="button" class="button disabled">\n  <span class="btn">じばく</span>\n</button>',
        scss2: '.button {\n  display: inline-block;\n  padding: 0 1px;\n  margin: 0 -1px;\n  border: none;\n  vertical-align: middle;\n  filter: brightness(100%);\n  transition: filter .34s;\n  &:hover {\n    filter: brightness(107%);\n  }\n  &:active {\n    filter: brightness(93%);\n  }\n  &.disabled {\n    filter: grayscale(100%);\n    cursor: not-allowed;\n    .btn {\n      background: #ddd;\n      pointer-events: none;\n    }\n  }\n  &.loading {\n    cursor: wait;\n    filter: opacity(66%);\n    .btn {\n      pointer-events: none;\n    }\n  }\n  .btn {\n    position: relative;\n    display: inline-block;\n    font-size: 14px;\n    padding: 0 1em;\n    line-height: 2;\n    border: 1px solid #999;\n    border-radius: 4px;\n    color: #444;\n    text-align: center;\n    user-select: none;\n    cursor: pointer;\n    transition: background .34s, border .34s, filter .34s, color .34s;\n    &:hover {\n      border-color: #409eff;\n      color: #409eff;\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      display: block;\n      top: -1px; left: -1px;\n      bottom: -1px; right: -1px;\n      border-radius: inherit;\n      opacity: 0;\n      box-shadow: 0 0 0 6px;\n      color: #50bfff;\n      transition: all .4s linear;\n      z-index: -1;\n    }\n    &:active {\n      &::before {\n        transition: all 1ms linear;\n        box-shadow: 0 0 0 0;\n        opacity: 0.618;\n      }\n    }\n  }\n  // 自定义颜色\n  &.primary {\n    .btn {\n      background-color: #409eff;\n      border-color: #409eff;\n      color: #fff;\n      &::before {\n        color: #409eff;\n      }\n    }\n  }\n  &.warning {\n    .btn {\n      background-color: #fdbc40;\n      border-color: #fdbc40;\n      color: #fff;\n      &::before {\n        color: #fdbc40;\n      }\n    }\n  }\n  &.error {\n    .btn {\n      background-color: #fc605d;\n      border-color: #fc605d;\n      color: #fff;\n      &::before {\n        color: #fc605d;\n      }\n    }\n  }\n}'
      };
    },
    methods: {
    },
    computed: {
    }
  }
</script>
