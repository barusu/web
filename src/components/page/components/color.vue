<style lang="scss">
  .color {
    .item {
      float: left;
      width: 9em;
      padding: 0 1em;
      margin: 0 .05rem .1rem;
      font-size: .14rem;
      line-height: 2.5;
      border-radius: 4px;
      color: #fff;
      border: 1px solid transparent;
      input {
        width: 100%;
        background: transparent;
      }
    }
    .preview {
      > div {
        float: left;
        width: 25%;
        padding: .5em 1em;
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
  }
</style>

<template>
  <div class="color">
    <h2><span>Color</span> <span class="chinese">配色</span></h2>
    <p>非组件,只是方便在没有设计稿时选择配色用.</p>
    <p>背景色与纯黑、五十度灰、纯白背景的效果预览.</p>
    <!-- <p class="tip">点击色块即可复制16进制颜色数值.</p> -->
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
          <span class="label"><o-svg type="copy"></o-svg></span>
          <input type="text" readonly :value="Color" ref="color">
        </label>
        <o-button :type="type == 'HEX' ? 'info' : ''" @click="type = 'HEX'">HEX</o-button>
        <o-button :type="type == 'RGB' ? 'info' : ''" @click="type = 'RGB'">RGB</o-button>
        <o-button :type="type == 'HSL' ? 'info' : ''" @click="type = 'HSL'">HSL</o-button>
        <o-button :type="Alpha ? 'info' : ''" @click="Alpha = !Alpha">Alpha</o-button>
        <o-slider class="slider" :max="255" v-model="alpha" :disabled="!Alpha"></o-slider>
      </p>
    </div>
    <h3><span>Base</span></h3>
    <div class="clearfix">
      <div class="item" v-for="(c, index) in colors1" :style="{background: c}" @click="copy(c, index, 'colorEl1')"><input type="text" readonly :value="c" ref='colorEl1'></div>
    </div>
    <div class="clearfix">
      <div class="item" v-for="(c, index) in colors1" :style="{color: c, borderColor: c}" @click="copy(c, index, 'colorEl1')" v-html="c"></div>
    </div>
    <h3><span>China</span></h3>
    <div class="clearfix">
      <div class="item" v-for="(c, index) in colors2" :style="{background: c}" @click="copy(c, index, 'colorEl2')"><input type="text" readonly :value="c" ref='colorEl2'></div>
    </div>
    <div class="clearfix">
      <div class="item" v-for="(c, index) in colors2" :style="{color: c, borderColor: c}" @click="copy(c, index, 'colorEl2')" v-html="c"></div>
    </div>
    <h3><span>Mac</span></h3>
    <div class="clearfix">
      <div class="item" v-for="(c, index) in colors3" :style="{background: c}" @click="copy(c, index, 'colorEl3')"><input type="text" readonly :value="c" ref='colorEl3'></div>
    </div>
    <div class="clearfix">
      <div class="item" v-for="(c, index) in colors3" :style="{color: c, borderColor: c}" @click="copy(c, index, 'colorEl3')" v-html="c"></div>
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
        hex = `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
      }else {
        hex = `hsl(${h}, ${s}%, ${l}%)`;
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
        color: '#fc605d',
        colors1: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c', '#bbb', 'rgba(255,255,255,.5)', 'rgba(0,0,0,.5)'],
        colors2: ["#f0f4f3", "#d9eaf1", "#d5f0e7", "#a1e3c7", "#b36a63", "#d6b311", "#c96527", "#ff3102", "#9c2833", '#f25500', '#f00'],
        colors3: ['#fc605d', '#fdbc40', '#34c849']
      };
    },
    methods: {
      copy(c, index, eln) {
        try {
          this.color = c;
          // this.$refs.color.select();
          this.$refs[eln][index].select();
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
