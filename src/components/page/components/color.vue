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
        .label {
          line-height: 1;
        }
        svg {
          width: 14px;
        }
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
    <p>方便在没有设计稿时选择配色.</p>
    <p>背景色与纯黑、五十度灰、纯白背景的效果预览.</p>
    <!-- <p class="tip">点击色块即可复制16进制颜色数值.</p> -->
    <div class="preview clearfix">
      <div :style="{'background': color}">
        <p class="white">花开生两面</p>
        <p class="black">人生佛魔间</p>
      </div>
      <div :style="{'color': color, 'background': '#000'}">
        <p>一花一世界</p>
        <p>一叶一如来</p>
      </div>
      <div :style="{'color': color, 'background': 'hsl(0,0%,50%)'}">
        <p>一砂一极乐</p>
        <p>一笑一尘埃</p>
      </div>
      <div :style="{'color': color, 'background': '#fff'}">
        <p>回忆如墓</p>
        <p>淡薄如素</p>
      </div>
      <p>
        <label class="input-wrapper base">
          <span class="label"><o-svg type="copy"></o-svg></span>
          <input type="text" readonly :value="color" ref="color">
        </label>
        <o-button class="">RGB</o-button>
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
  export default {
    data() {
      return {
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
          this.$refs.color.select();
          this.$nextTick(() => {
            document.execCommand('copy');
          });
          // this.$refs[eln][index].select();
          // document.execCommand('copy');
        }catch(e) {console.log(e); }
      }
    }
  }
</script>
