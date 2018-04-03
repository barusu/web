<style>
  .mask {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
  }
  .mask text {
    font-family: Biko, sans-serif;
    font-weight: 700;
    text-anchor: middle;
    dominant-baseline: central;
  }
  /*.mask mask rect {
    fill: #f7f7f7;
  }
  .mask mask .b {
    fill: #bbb;
  }*/
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="mask" preserveAspectRatio="xMidYMid meet" ref="svg">
    <defs>
      <mask :id="id" x="0" y="0" width="100%" height="100%" >
        <rect x="0" y="0" width="100%" :height="bh + '%'" :fill="c1" />
        <rect x="0" :y="(100 - bh) + '%'" width="100%" :height="bh + '%'" :fill="c1" />
        <rect x="0" :y="bh + '%'" width="100%" :height="h + '%'" :fill="c2" />
        <text x="50%"  y="50%" v-html="text" :style="textStyle"></text>
       </mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" :style="maskStyle" />
  </svg>
</template>

<script>
  let poi = 1;

  export default {
    data() {
      return {
        id: 'mask' + poi,
        svgWidth: 0,
        svgHeight: 0
      };
    },
    props: {
      text: String,
      color: {
        type: String,
        default: "#d3d3d3"
      },
      h: {
        type: Number,
        default: 70
      },
      fz: {
        type: String
      },
      scale: {
        type: Number,
        default: 1
      },
      opacity: {
        type: [Number, Array],
        default() {
          return [80, 60];
        }
      }
    },
    methods: {
      resize() {
        this.svgWidth = this.$refs.svg.clientWidth;
        this.svgHeight = this.$refs.svg.clientHeight;
      }
    },
    computed: {
      c1() {
        var t = Math.round(this.Opacity[1] * 2.55).toString(16);
        if(t.length === 1) t = '0' + t;
        return '#' + t + t + t;
      },
      c2() {
        var t = Math.round(this.Opacity[0] * 2.55).toString(16);
        if(t.length === 1) t = '0' + t;
        return '#' + t + t + t;
      },
      Opacity() {
        var tem = [80, 60];
        if(isNaN(this.opacity)) {
          if(Array.isArray(this.opacity)) {
            tem[0] = this.opacity[0] || 0;
            tem[1] = this.opacity[1] || 0;
          }
        }else {
          tem[0] = this.opacity;
        }
        return tem;
      },
      bh() {
        return (100 - this.h) / 2;
      },
      autoFZ() {
        if( this.text && this.svgWidth) {
          return Math.min((this.svgWidth / (this.text.length || 1) * .9 >> 0), this.svgHeight * this.h / 150 >> 0) * this.scale >> 0 + 'px';
        }else {
          return '4rem';
        }
      },
      maskStyle() {
        return {
          mask: 'url(#' + this.id + ')',
          fill: this.color
        };
      },
      textStyle() {
        return {
          fontSize: this.fz || this.autoFZ
        };
      }
    },
    mounted() {
      poi++;
      this.$nextTick(() => {
        this.resize();
        // this.svgWidth = this.$refs.svg.clientWidth;
        // this.svgHeight = this.$refs.svg.clientHeight;
      });
      window.addEventListener('resize', this.resize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize);
    }
  };
</script>