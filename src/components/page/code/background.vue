<style lang="scss">
  .code-background {
    .bg1 {
      position: relative;
      height: 16em;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 2000%;
        height: 1000%;
        background-size: 25% 50%;
        background-image: radial-gradient(ellipse,#fc605d, #fc605d, #fdbc40, #34c849, #d08ce0, #51baf2);
        animation: slantMove 60s cubic-bezier(.5, .3, .5, .6) infinite;
        opacity: .3;
        z-index: -1;
      }
    }
    .mask {
      position: relative;
      width: 100%;
      height: 100%;
      text {
        font-family: cursive, sans-serif;
        font-weight: 900;
        text-anchor: middle;
        dominant-baseline: central;
      }
    }
  }
  @keyframes slantMove {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-5%, -50%, 0);}
    50% {transform: translate3d(-30%, -65%, 0);}
    75% {transform: translate3d(-55%, -35%, 0);}
    100% {transform: translate3d(-75%, -50%, 0);}
  }
</style>

<template>
  <div class="code-background">
    <h2><span>Background</span> <span class="chinese"></span></h2>
    <div class="preview clearfix">
      <div class="bg1"></div>
    </div>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_bg1" class="kakushi code-control-ck">
      <div class="code-scss full">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_bg1">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss1"></o-code>
      </div>
    </div>
    <div class="preview clearfix">
      <div class="bg1">
        <svg xmlns="http://www.w3.org/2000/svg" class="mask" preserveAspectRatio="xMidYMid meet">
          <defs>
            <mask id="mask1" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
              <text x="50%" y="50%" style="font-size: 160px;">临渊羡鱼</text>
             </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="#fafafa" style="mask: url(#mask1);"/>
        </svg>
      </div>
    </div>
    <div class="code-wrapper clearfix">
      <input type="checkbox" id="code_bg2" class="kakushi code-control-ck" v-model="ck2">
      <div class="code-html">
        <p class="code-head html"><o-svg type="html"></o-svg> HTML <label class="code-control" for="code_bg2">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="html" :code="html2" class="m"></o-code>
      </div>
      <input type="checkbox" id="code_bg3" class="kakushi code-control-ck" v-model="ck2">
      <div class="code-scss">
        <p class="code-head scss"><o-svg type="sass"></o-svg> SCSS <label class="code-control" for="code_bg3">&lt;<span>/</span>&gt;</label></p>
        <o-code lang="scss" :code="scss2" class="m"></o-code>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scss1: '.bg {\n  position: relative;\n  overflow: hidden;\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0; left: 0;\n    width: 2000%;\n    height: 1000%;\n    background-size: 25% 50%;\n    background-image: radial-gradient(ellipse,#fc605d, #fc605d, #fdbc40, #34c849, #d08ce0, #51baf2);\n    animation: slantMove 60s cubic-bezier(.5, .3, .5, .6) infinite;\n    opacity: .3;\n    z-index: -1;\n  }\n}\n@keyframes slantMove {\n  0% {transform: translate3d(0, 0, 0);}\n  25% {transform: translate3d(-5%, -50%, 0);}\n  50% {transform: translate3d(-30%, -65%, 0);}\n  75% {transform: translate3d(-55%, -35%, 0);}\n  100% {transform: translate3d(-75%, -50%, 0);}\n}',
        ck2: false,
        html2: '<div class="bg1">\n  <svg xmlns="http://www.w3.org/2000/svg" class="mask" preserveAspectRatio="xMidYMid meet">\n    <defs>\n      <mask id="mask1" x="0" y="0" width="100%" height="100%">\n        <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>\n        <text x="50%" y="50%" style="font-size: 160px;">临渊羡鱼</text>\n       </mask>\n    </defs>\n    <rect x="0" y="0" width="100%" height="100%" fill="#fafafa" style="mask: url(#mask1);"/>\n  </svg>\n</div>',
        scss2: '.mask {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text {\n    font-family: cursive, sans-serif;\n    font-weight: 900;\n    text-anchor: middle;\n    dominant-baseline: central;\n  }\n}'
      };
    },
    methods: {
    },
    computed: {
    }
  }
</script>
