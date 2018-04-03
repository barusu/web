<style lang="scss">
  .color {
    .preview {
      > div {
        float: left;
        width: 23%;
        padding: .5em 1em;
        margin: 0 1% 5px;
        box-shadow: 0 0 0 2px inset;
        p {
          margin: 0;
          line-height: 2;
          color: inherit;
          &.white {
            color: #fff;
          }
          &.black {
            color: #000;
          }
        }
      }
      label {
        margin-top: .5em;
        max-width: 400px;
        vertical-align: bottom;
        font-size: 12px;
        .label {
          line-height: 1;
          cursor: pointer;
        }
        svg {
          width: 14px;
        }
      }
      .slider {
        margin-top: .5em;
        font-size: 12px;
        vertical-align: bottom;
      }
      p {
        margin: 0;
      }
    }
    .tip {
      margin: 12px 5px 0;
    }
    .colors {
      position: relative;
      margin-top: .5em;
      padding: .5em 0;
      border-radius: 4px;
      background-size: 200%;
      // background-image: radial-gradient(ellipse, rgba(252,96,93,0.3), rgba(253,188,64,0.3), rgba(52,200,73,0.3) , rgba(81,186,242,0.3), rgba(208,140,224,0.3));
      // animation: moveBG 20s ease-in-out infinite;
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
      > .group {
        font-size: .2rem;
        > .type {
          float: left;
          width: 5em;
          text-align: center;
          line-height: 2;
          margin: .25em 0;
        }
        > .items {
          overflow: hidden;
        }
      }
      .item {
        position: relative;
        float: left;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        margin: .25em;
        cursor: pointer;
        input {
          position: absolute;
          top: 40%; left: 40%;
          background: transparent;
          color: transparent;
          z-index: -1;
          font-size: 12px;
          width: 1em;
        }
      }
    }
  }
</style>

<template>
  <div class="color">
    <h2><span>Color</span> <span class="chinese">配色</span></h2>
    <p>非组件,只是方便在没有设计稿时选择配色用.(单击预览,双击复制)</p>
    <p>背景色与纯黑、五十度灰、纯白背景的效果预览.</p>
    <div class="preview clearfix">
      <div :style="{'background': Color}">
        <p class="white">花开生两面</p>
        <p class="black">人生佛魔间</p>
      </div>
      <div :style="{'color': Color, 'background': '#000'}">
        <p>一花一世界</p>
        <p>一叶一如来</p>
      </div>
      <div :style="{'color': Color, 'background': 'hsl(0,0%,50%)'}">
        <p>一砂一极乐</p>
        <p>一笑一尘埃</p>
      </div>
      <div :style="{'color': Color, 'background': '#fff'}">
        <p>回忆如墓</p>
        <p>淡薄如素</p>
      </div>
      <p>
        <label class="input-wrapper base">
          <span class="label" @click="copy"><o-svg type="copy"></o-svg></span>
          <input type="text" readonly :value="Color" ref="color">
        </label>
        <o-button :type="type == 'HEX' ? 'info' : ''" @click="type = 'HEX'">HEX</o-button>
        <o-button :type="type == 'RGB' ? 'info' : ''" @click="type = 'RGB'">RGB</o-button>
        <o-button :type="type == 'HSL' ? 'info' : ''" @click="type = 'HSL'">HSL</o-button>
        <o-button :type="Alpha ? 'info' : ''" @click="Alpha = !Alpha">Alpha</o-button>
        <o-slider class="slider" :max="255" v-model="alpha" :disabled="!Alpha"></o-slider>
      </p>
    </div>
    <p class="tip">带透明度的八位十六进制颜色目前兼容性很差,Sass都还不认识.(2018.03)</p>
    <div class="colors">
      <div class="group">
        <div class="type">Base</div>
        <div class="items">
          <div class="item" v-for="(c, index) in base" :style="{background: c}" @click="select(c)" @dblclick="copy(index, 'colorBase')"><input type="text" readonly :value="c" ref='colorBase'></div>
        </div>
      </div>
      <div class="group">
        <div class="type">Mac</div>
        <div class="items">
          <div class="item" v-for="(c, index) in mac" :style="{background: c}" @click="select(c)" @dblclick="copy(index, 'colorMac')"><input type="text" readonly :value="c" ref='colorMac'></div>
        </div>
      </div>
      <div class="group">
        <div class="type">Element</div>
        <div class="items">
          <div class="item" v-for="(c, index) in element" :style="{background: c}" @click="select(c)" @dblclick="copy(index, 'colorEle')"><input type="text" readonly :value="c" ref='colorEle'></div>
        </div>
      </div>
      <div class="group">
        <div class="type">China</div>
        <div class="items">
          <div class="item" v-for="(c, index) in china" :style="{background: c}" @click="select(c)" @dblclick="copy(index, 'colorChina')"><input type="text" readonly :value="c" ref='colorChina'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable indent */
  /* eslint-disable default-case */

  // 十六进制颜色转RGB颜色
  function hexToRGB(hex) {
    var alpha, tem, i;
    hex = hex.toLowerCase();
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
    if (hex && reg.test(hex)) {
      // 3位颜色数值转6位 (#000 to #000000)
      if(hex.length === 4) {
        tem = "#";
        for (i = 1; i < 4; i++) {
          tem += hex[i] + hex[i];
        }
        hex = tem;
      }else if(hex.length === 9) {
        alpha = hex.slice(7, 9);
        hex = hex.slice(0, 7);
      }
      // 十六进制转十进制数组
      tem = [];
      for (i = 1; i < 7; i += 2) {
        tem.push(parseInt(hex.slice(i, i + 2), 16));
      }
      if(alpha) {
        tem.push(Math.round(parseInt(alpha, 16) * 100 / 255) / 100);
        hex = "rgba(" + tem.join(",") + ")";
      }else {
        hex = "rgb(" + tem.join(",") + ")";
      }
    }
    return hex;
  }
  // 十六进制转HSL颜色
  function hexToHsl(hex) {
    var alpha, tem, i, r, g, b, h, s, l, max, min;
    hex = hex.toLowerCase();
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
    if (hex && reg.test(hex)) {
      // 3位颜色数值转6位 (#000 to #000000)
      if(hex.length === 4) {
        tem = "#";
        for (i = 1; i < 4; i++) {
          tem += hex[i] + hex[i];
        }
        hex = tem;
      }else if(hex.length === 9) {
        alpha = hex.slice(7, 9);
        hex = hex.slice(0, 7);
      }
      // 提取RGB数值
      r = parseInt(hex.slice(1, 3), 16) / 255;
      g = parseInt(hex.slice(3, 5), 16) / 255;
      b = parseInt(hex.slice(5, 7), 16) / 255;
      // 计算HSL数值
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = Math.round((max + min) * 100 / 2);
      if(max === min) {
        h = s = 0;
      }else {
        tem = max - min;
        s = l > 50 ? tem / (2 - max - min) : tem / (max + min);
        s = Math.round(s * 100);
        switch(max) {
          case r: h = (g - b) / tem + (g < b ? 6 : 0); break;
          case g: h = (b - r) / tem + 2; break;
          case b: h = (r - g) / tem + 4; break;
        }
        h = Math.round(h * 60);
      }
      if(alpha) {
        alpha = Math.round(parseInt(alpha, 16) * 100 / 255) / 100;
        hex = `hsla(${h},${s}%,${l}%,${alpha})`;
      }else {
        hex = `hsl(${h},${s}%,${l}%)`;
      }
    }
    return hex;
  }

  export default {
    data() {
      return {
        type: 'HEX',
        Alpha: false,
        alpha: 127,
        color: '#fdbc40',
        base: ['#000', '#333', '#666', '#999', '#ccc', '#fff'],
        mac: ['#fc605d', '#fdbc40', '#34c849', '#d08ce0', '#71ca58', '#f7a650', '#f4cd56', '#51baf2', '#fd6461', '#a5a5a5', '#c3c3c3'],
        element: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c', '#303133', '#606266', '#909399', '#c0c4cc', '#dcdfe6', '#e4e7ed', '#ebeef5', '#f2f6fc'],
        china: ["#f0f4f3", "#d9eaf1", "#d5f0e7", "#a1e3c7", "#b36a63", "#d6b311", "#c96527", "#ff3102", "#9c2833", '#f25500', '#f00']
      };
    },
    methods: {
      select(c) {
        this.color = c;
      },
      copy(index, eln) {
        try {
          if(eln) {
            this.$refs[eln][index].select();
          }else {
            this.$refs.color.select();
          }
          document.execCommand('copy');
        }catch(e) {console.log(e); }
      }
    },
    computed: {
      Color() {
        var color = this.color;
        if(this.Alpha) {
          if(color.length === 4) {
            var tem = "#";
            for (var i = 1; i < 4; i++) {
              tem += color[i] + color[i];
            }
            color = tem;
          }
          if(this.alpha < 16) color += '0';
          color += this.alpha.toString(16);
        }
        switch(this.type) {
          case 'HSL': return hexToHsl(color);
          case 'RGB': return hexToRGB(color);
          case 'HEX': return color;
          default: return color;
        }
      }
    }
  }
</script>
