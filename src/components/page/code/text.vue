<style lang="scss">
  .code-text {
    .tooltip {
      position: relative;
      cursor: default;
      &::after {
        content: attr(data-title);
        position: absolute;
        left: 0; top: -1em;
        display: block;
        padding: 2px .5em;
        line-height: 1.5;
        // white-space: nowrap;
        transform: translate(0, -100%) scale(.5);
        background: rgba(0,0,0,.7);
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        min-width: 3em;
        opacity: 0;
        transform-origin: 0% 100%;
        transition: all .34s .3s;
        pointer-events: none;
      }
      &::before {
        content: "";
        position: absolute;
        left: .25em; top: -1em;
        border: 0 solid transparent;
        border-width: 7px 6px 0px;
        border-top-color: rgba(0,0,0,.7);
        font-size: 12px;
        opacity: 0;
        transform: scale(.5);
        transform-origin: 50% 0%;
        transition: all .34s .3s;
        pointer-events: none;
      }
      &:hover {
        &::before {
          left: 1em;
          transform: scale(1);
          opacity: 1;
          pointer-events: all;
        }
        &::after {
          transform: translate(0, -100%) scale(1);
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }
</style>

<template>
  <div class="code-text">
    <h2><span>Text</span> <span class="chinese"></span></h2>
    <div class="preview clearfix">
      <span class="tooltip" data-title="I Love You">今夜は月が绮丽ですね</span>
      <div class="tooltip" data-title="how to make love">HTML</div>
      <a href="#" class="tooltip" data-title="吃柠檬">CNM</a>
    </div>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_text1" class="kakushi code-control-ck" v-model="ck1">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_text1">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html1"></o-code>
      </div>
      <input type="checkbox" id="code_text2" class="kakushi code-control-ck" v-model="ck1">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_text2">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss1"></o-code>
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
        html1: '<span class="tooltip" data-title="I Love You">今夜は月が绮丽ですね</span>\n<div class="tooltip" data-title="how to make love">HTML</div>\n<a href="#" class="tooltip" data-title="吃柠檬">CNM</a>',
        scss1: '.tooltip {\n  position: relative;\n  cursor: default;\n  &::after {\n    content: attr(data-title);\n    position: absolute;\n    left: 0; top: -1em;\n    display: block;\n    padding: 2px .5em;\n    line-height: 1.5;\n    // white-space: nowrap;\n    transform: translate(0, -100%) scale(.5);\n    background: rgba(0,0,0,.7);\n    color: #fff;\n    font-size: 12px;\n    border-radius: 4px;\n    min-width: 3em;\n    opacity: 0;\n    transform-origin: 0% 100%;\n    transition: all .34s .3s;\n    pointer-events: none;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    left: .25em; top: -1em;\n    border: 0 solid transparent;\n    border-width: 7px 6px 0px;\n    border-top-color: rgba(0,0,0,.7);\n    font-size: 12px;\n    opacity: 0;\n    transform: scale(.5);\n    transform-origin: 50% 0%;\n    transition: all .34s .3s;\n    pointer-events: none;\n  }\n  &:hover {\n    &::before {\n      left: 1em;\n      transform: scale(1);\n      opacity: 1;\n      pointer-events: all;\n    }\n    &::after {\n      transform: translate(0, -100%) scale(1);\n      opacity: 1;\n      pointer-events: all;\n    }\n  }\n}'
      };
    },
    methods: {
    },
    computed: {
    }
  }
</script>
