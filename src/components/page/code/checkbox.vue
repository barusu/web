<style lang="scss">
  .code-checkbox {
    .checkbox {
      display: inline-block;
      font-size: 14px;
      user-select: none;
      cursor: pointer;
      .ck {
        position: relative;
        display: inline-block;
        width: 1em;
        height: 1em;
        border: 1px solid #ddd;
        border-radius: 2px;
        box-sizing: content-box;
        vertical-align: middle;
        transition: all .34s linear;
        background: #fff;
        &::after {
          content: "";
          position: absolute;
          top: 50%; left: 2px;
          display: block;
          width: 10px;
          height: 2px;
          border: 1px solid #fff;
          border-radius: 1px;
          transform: translate3D(0,-50%,0);
          transition: transform 170ms cubic-bezier(0.12, 0.4, 0.29, 1.46);
        }
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: -1px; left: -1px;
          bottom: -1px; right: -1px;
          border-radius: inherit;
          opacity: 0;
          box-shadow: 0 0 0 0;
          color: #50bfff;
          transition: all .4s linear;
          z-index: -1;
        }
        &:hover {
          border-color: #50bfff;
        }
        &:active {
          &::before {
            transition: all 1ms linear;
            box-shadow: 0 0 0 0 !important;
            opacity: 0.618;
          }
        }
      }
      &.indeterminate {
        .ck {
          border-color: #50bfff;
          background: #50bfff;
        }
      }
      &.disabled {
        cursor: not-allowed;
        .ck {
          filter: grayscale(100%);
          &:active::before {
            opacity: 0;
          }
        }
      }
      .text {
        padding: 0 .5em 0 2px;
        vertical-align: middle;
        user-select: text;
      }
      input.control-ck:checked + .ck {
        border-color: #50bfff;
        background: #50bfff;
        &::after {
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 1px;
          height: 5px;
          transform: translate3D(0,-60%,0) rotate(-45deg);
        }
        &::before {
          box-shadow: 0 0 0 6px;
        }
      }
      // 自定义颜色
      &.forgive {
        filter: hue-rotate(260deg);
      }
      &.warn {
        filter: hue-rotate(180deg);
      }
    }
    .checkbox-cricle {
      display: inline-block;
      font-size: 14px;
      user-select: none;
      cursor: pointer;
      .ck {
        position: relative;
        display: inline-block;
        width: 1em;
        height: 1em;
        border: 1px solid #ddd;
        border-radius: 50%;
        box-sizing: content-box;
        vertical-align: middle;
        transition: all .34s linear;
        background: #fff;
        &::after {
          content: "";
          position: absolute;
          top: 50%; left: 2px;
          display: block;
          width: 10px;
          height: 2px;
          border: 1px solid #fff;
          border-radius: 1px;
          transform: translate3D(0,-50%,0);
          transition: transform 170ms cubic-bezier(0.12, 0.4, 0.29, 1.46);
        }
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: -1px; left: -1px;
          bottom: -1px; right: -1px;
          border-radius: inherit;
          opacity: 0;
          box-shadow: 0 0 0 0;
          color: #50bfff;
          transition: all .4s linear;
          z-index: -1;
        }
        &:hover {
          border-color: #50bfff;
        }
        &:active {
          &::before {
            transition: all 1ms linear;
            box-shadow: 0 0 0 0 !important;
            opacity: 0.618;
          }
        }
      }
      &.indeterminate {
        .ck {
          border-color: #50bfff;
          background: #50bfff;
        }
      }
      &.disabled {
        cursor: not-allowed;
        .ck {
          filter: grayscale(100%);
          &:active::before {
            opacity: 0;
          }
        }
      }
      .text {
        padding: 0 .5em 0 2px;
        vertical-align: middle;
        user-select: text;
      }
      input.control-ck:checked + .ck {
        border-color: #50bfff;
        background: #50bfff;
        &::after {
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 1px;
          height: 5px;
          transform: translate3D(0,-60%,0) rotate(-45deg);
        }
        &::before {
          box-shadow: 0 0 0 6px;
        }
      }
      // 自定义颜色
      &.forgive {
        filter: hue-rotate(260deg);
      }
      &.warn {
        filter: hue-rotate(180deg);
      }
    }
    .checkbox-switch {
      display: inline-block;
      font-size: 14px;
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      user-select: none;
      .ck {
        position: relative;
        display: inline-block;
        width: 3em;
        height: 1.5em;
        border-radius: .75em;
        vertical-align: sub;
        background: #50bfff;
        filter: grayscale(100%);
        transition: all .35s;
        &::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          display: block;
          width: 1.5em;
          height: 1.5em;
          border: 3px solid transparent;
          border-radius: 50%;
          background: #fff no-repeat center / contain;
          background-clip: content-box;
          transition: all .35s cubic-bezier(.78,.14,.15,.86);
        }
        &:active::before {width: 1.7em; }
      }
      input.control-ck:checked + .ck {
        filter: grayscale(0%);
        &::before {left: 50%; }
        &:active::before {left: 1.3em; }
      }
      .text {
        padding: 0 .5em 0 2px;
        vertical-align: text-top;
        user-select: text;
      }
      &.disabled {
        cursor: not-allowed;
        .ck {
          background: #ccc;
          &::before {
            background-color: #fafafa;
          }
        }
      }
      // 自定义颜色
      &.forgive {
        filter: hue-rotate(260deg);
      }
      &.warn {
        filter: hue-rotate(180deg);
      }
    }
  }
</style>

<template>
  <div class="code-checkbox">
    <h2><span>Checkbox</span> <span class="chinese"></span></h2>
    <div class="preview clearfix">
      <label class="checkbox">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">ラーメン</span>
      </label>
      <label class="checkbox indeterminate">
        <input type="checkbox" class="kakushi control-ck">
        <span class="ck"></span>
        <span class="text">番茄炒蛋</span>
      </label>
      <label class="checkbox forgive">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">Ice cream</span>
      </label>
      <label class="checkbox warn">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">бифштекс</span>
      </label>
      <label class="checkbox warn disabled">
        <input type="checkbox" class="kakushi control-ck" checked="checked" disabled="disabled">
        <span class="ck"></span>
        <span class="text">Austern</span>
      </label>
    </div>
    <p class="tip">此动画效果兼容性不佳</p>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_ck1" class="kakushi code-control-ck" v-model="ck1">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_ck1">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html1"></o-code>
      </div>
      <input type="checkbox" id="code_ck2" class="kakushi code-control-ck" v-model="ck1">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_ck2">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss1"></o-code>
      </div>
    </div>
    <div class="preview clearfix">
      <label class="checkbox-cricle">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">ラーメン</span>
      </label>
      <label class="checkbox-cricle indeterminate">
        <input type="checkbox" class="kakushi control-ck">
        <span class="ck"></span>
        <span class="text">番茄炒蛋</span>
      </label>
      <label class="checkbox-cricle forgive">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">Ice cream</span>
      </label>
      <label class="checkbox-cricle warn">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">бифштекс</span>
      </label>
      <label class="checkbox-cricle warn disabled">
        <input type="checkbox" class="kakushi control-ck" checked="checked" disabled="disabled">
        <span class="ck"></span>
        <span class="text">Austern</span>
      </label>
    </div>
    <p class="tip">此动画效果兼容性不佳</p>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_ck3" class="kakushi code-control-ck" v-model="ck2">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_ck3">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html2"></o-code>
      </div>
      <input type="checkbox" id="code_ck4" class="kakushi code-control-ck" v-model="ck2">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_ck4">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss2"></o-code>
      </div>
    </div>
    <div class="preview clearfix">
      <label class="checkbox-switch">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">ラーメン</span>
      </label>
      <label class="checkbox-switch">
        <input type="checkbox" class="kakushi control-ck">
        <span class="ck"></span>
        <span class="text">番茄炒蛋</span>
      </label>
      <label class="checkbox-switch forgive">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">Ice cream</span>
      </label>
      <label class="checkbox-switch warn">
        <input type="checkbox" class="kakushi control-ck" checked="checked">
        <span class="ck"></span>
        <span class="text">бифштекс</span>
      </label>
      <label class="checkbox-switch warn disabled">
        <input type="checkbox" class="kakushi control-ck" checked="checked" disabled="disabled">
        <span class="ck"></span>
        <span class="text">Austern</span>
      </label>
    </div>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_ck5" class="kakushi code-control-ck" v-model="ck3">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_ck5">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html3"></o-code>
      </div>
      <input type="checkbox" id="code_ck6" class="kakushi code-control-ck" v-model="ck3">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_ck6">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss3"></o-code>
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
        html1: '<label class="checkbox">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">ラーメン</span>\n</label>\n<label class="checkbox indeterminate">\n  <input type="checkbox" class="kakushi control-ck">\n  <span class="ck"></span>\n  <span class="text">番茄炒蛋</span>\n</label>\n<label class="checkbox forgive">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">Ice cream</span>\n</label>\n<label class="checkbox warn">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">бифштекс</span>\n</label>\n<label class="checkbox warn disabled">\n  <input type="checkbox" class="kakushi control-ck" checked="checked" disabled="disabled">\n  <span class="ck"></span>\n  <span class="text">Austern</span>\n</label>',
        scss1: '.checkbox {\n  display: inline-block;\n  font-size: 14px;\n  user-select: none;\n  cursor: pointer;\n  .ck {\n    position: relative;\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    border: 1px solid #ddd;\n    border-radius: 2px;\n    box-sizing: content-box;\n    vertical-align: middle;\n    transition: all .34s linear;\n    background: #fff;\n    &::after {\n      content: "";\n      position: absolute;\n      top: 50%; left: 2px;\n      display: block;\n      width: 10px;\n      height: 2px;\n      border: 1px solid #fff;\n      border-radius: 1px;\n      transform: translate3D(0,-50%,0);\n      transition: transform 170ms cubic-bezier(0.12, 0.4, 0.29, 1.46);\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      display: block;\n      top: -1px; left: -1px;\n      bottom: -1px; right: -1px;\n      border-radius: inherit;\n      opacity: 0;\n      box-shadow: 0 0 0 0;\n      color: #50bfff;\n      transition: all .4s linear;\n      z-index: -1;\n    }\n    &:hover {\n      border-color: #50bfff;\n    }\n    &:active {\n      &::before {\n        transition: all 1ms linear;\n        box-shadow: 0 0 0 0 !important;\n        opacity: 0.618;\n      }\n    }\n  }\n  &.indeterminate {\n    .ck {\n      border-color: #50bfff;\n      background: #50bfff;\n    }\n  }\n  &.disabled {\n    cursor: not-allowed;\n    .ck {\n      filter: grayscale(100%);\n      &:active::before {\n        opacity: 0;\n      }\n    }\n  }\n  .text {\n    padding: 0 .5em 0 2px;\n    vertical-align: middle;\n    user-select: text;\n  }\n  input.control-ck:checked + .ck {\n    border-color: #50bfff;\n    background: #50bfff;\n    &::after {\n      border-width: 0 0 2px 2px;\n      border-radius: 0 0 0 1px;\n      height: 5px;\n      transform: translate3D(0,-60%,0) rotate(-45deg);\n    }\n    &::before {\n      box-shadow: 0 0 0 6px;\n    }\n  }\n  // 自定义颜色\n  &.forgive {\n    filter: hue-rotate(260deg);\n  }\n  &.warn {\n    filter: hue-rotate(180deg);\n  }\n}',
        ck2: false,
        html2: '<label class="checkbox">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">ラーメン</span>\n</label>\n<label class="checkbox indeterminate">\n  <input type="checkbox" class="kakushi control-ck">\n  <span class="ck"></span>\n  <span class="text">番茄炒蛋</span>\n</label>\n<label class="checkbox forgive">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">Ice cream</span>\n</label>\n<label class="checkbox warn">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">бифштекс</span>\n</label>\n<label class="checkbox warn disabled">\n  <input type="checkbox" class="kakushi control-ck" checked="checked" disabled="disabled">\n  <span class="ck"></span>\n  <span class="text">Austern</span>\n</label>',
        scss2: '.checkbox {\n  display: inline-block;\n  font-size: 14px;\n  user-select: none;\n  cursor: pointer;\n  .ck {\n    position: relative;\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    border: 1px solid #ddd;\n    border-radius: 50%;\n    box-sizing: content-box;\n    vertical-align: middle;\n    transition: all .34s linear;\n    background: #fff;\n    &::after {\n      content: "";\n      position: absolute;\n      top: 50%; left: 2px;\n      display: block;\n      width: 10px;\n      height: 2px;\n      border: 1px solid #fff;\n      border-radius: 1px;\n      transform: translate3D(0,-50%,0);\n      transition: transform 170ms cubic-bezier(0.12, 0.4, 0.29, 1.46);\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      display: block;\n      top: -1px; left: -1px;\n      bottom: -1px; right: -1px;\n      border-radius: inherit;\n      opacity: 0;\n      box-shadow: 0 0 0 0;\n      color: #50bfff;\n      transition: all .4s linear;\n      z-index: -1;\n    }\n    &:hover {\n      border-color: #50bfff;\n    }\n    &:active {\n      &::before {\n        transition: all 1ms linear;\n        box-shadow: 0 0 0 0 !important;\n        opacity: 0.618;\n      }\n    }\n  }\n  &.indeterminate {\n    .ck {\n      border-color: #50bfff;\n      background: #50bfff;\n    }\n  }\n  &.disabled {\n    cursor: not-allowed;\n    .ck {\n      filter: grayscale(100%);\n      &:active::before {\n        opacity: 0;\n      }\n    }\n  }\n  .text {\n    padding: 0 .5em 0 2px;\n    vertical-align: middle;\n    user-select: text;\n  }\n  input.control-ck:checked + .ck {\n    border-color: #50bfff;\n    background: #50bfff;\n    &::after {\n      border-width: 0 0 2px 2px;\n      border-radius: 0 0 0 1px;\n      height: 5px;\n      transform: translate3D(0,-60%,0) rotate(-45deg);\n    }\n    &::before {\n      box-shadow: 0 0 0 6px;\n    }\n  }\n  // 自定义颜色\n  &.forgive {\n    filter: hue-rotate(260deg);\n  }\n  &.warn {\n    filter: hue-rotate(180deg);\n  }\n}',
        ck3: false,
        html3: '<label class="checkbox">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">ラーメン</span>\n</label>\n<label class="checkbox">\n  <input type="checkbox" class="kakushi control-ck">\n  <span class="ck"></span>\n  <span class="text">番茄炒蛋</span>\n</label>\n<label class="checkbox forgive">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">Ice cream</span>\n</label>\n<label class="checkbox warn">\n  <input type="checkbox" class="kakushi control-ck" checked="checked">\n  <span class="ck"></span>\n  <span class="text">бифштекс</span>\n</label>\n<label class="checkbox warn disabled">\n  <input type="checkbox" class="kakushi control-ck" checked="checked" disabled="disabled">\n  <span class="ck"></span>\n  <span class="text">Austern</span>\n</label>',
        scss3: '.checkbox {\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n  line-height: 1;\n  vertical-align: middle;\n  user-select: none;\n  .ck {\n    position: relative;\n    display: inline-block;\n    width: 3em;\n    height: 1.5em;\n    border-radius: .75em;\n    vertical-align: sub;\n    background: #50bfff;\n    filter: grayscale(100%);\n    transition: all .35s;\n    &::before {\n      content: "";\n      position: absolute;\n      top: 0; left: 0;\n      display: block;\n      width: 1.5em;\n      height: 1.5em;\n      border: 3px solid transparent;\n      border-radius: 50%;\n      background: #fff no-repeat center / contain;\n      background-clip: content-box;\n      transition: all .35s cubic-bezier(.78,.14,.15,.86);\n    }\n    &:active::before {width: 1.7em; }\n  }\n  input.control-ck:checked + .ck {\n    filter: grayscale(0%);\n    &::before {left: 50%; }\n    &:active::before {left: 1.3em; }\n  }\n  .text {\n    padding: 0 .5em 0 2px;\n    vertical-align: text-top;\n    user-select: text;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    .ck {\n      background: #ccc;\n      &::before {\n        background-color: #fafafa;\n      }\n    }\n  }\n  // 自定义颜色\n  &.forgive {\n    filter: hue-rotate(260deg);\n  }\n  &.warn {\n    filter: hue-rotate(180deg);\n  }\n}'
      };
    },
    methods: {
    },
    computed: {
    }
  }
</script>
