<style lang="scss">
  .oo-slider {
    display: inline-block;
    min-width: 200px;
    height: 30px;
    &.disabled {
      filter: grayscale(100%);
      .oo-slider-ball {
        > span {
          transform: translate3d(-50%, -50%, 0);
          cursor: not-allowed;
        }
      }
      .oo-slider-content {
        cursor: not-allowed;
      }
    }
  }
  .oo-slider-content {
    position: relative;
    background: #eee;
    height: 6px;
    margin: 12px 6px;
    border-radius: 3px;
    box-shadow: 0 0 3px #bbb inset;
    cursor: pointer;
  }
  .oo-slider-ball {
    position: absolute;
    top: 50%;
    width: 0;
    transition: left 10ms;
    > span {
      display: block;
      background: #fff;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      box-shadow: -1px -1px 6px 4px #409eff inset;
      transform: translate3d(-50%, -50%, 0);
      transition: transform .1s;
      cursor: pointer;
      &.hover,
      &:hover {
        transform: translate3d(-50%, -50%, 0) scale(1.2);
      }
    }
  }
  .oo-slider-bar {
    height: 100%;
    border-radius: 3px;
    background: rgba(64,158,255,0.25);
    box-shadow: 1px 0 3px 2px #409eff inset;
    transition: width 10ms;
  }
</style>

<template>
  <div class="oo-slider" :class="{'disabled': disabled}">
    <div class="oo-slider-content" ref="content" @click="to">
      <div class="oo-slider-bar" :style="{width: per + '%'}"></div>
      <div class="oo-slider-ball" :style="{left: per + '%'}"><span @mousedown.self="down" :class="{'hover': isMove}" ondragstart="return false"></span></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isMove: false,
        width: 0,
        x: 0
      };
    },
    props: {
      value: Number,
      max: {
        type: Number,
        default: 100
      },
      min: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      to(event) {
        var e = event ? event: window.event;
        this.per = Math.round(e.offsetX * 10000 / this.$refs.content.clientWidth) / 100;
      },
      dragstart() {
        return false;
      },
      down(event) {
        if(this.disabled) return;
        this.isMove = true;
        var e = event ? event: window.event;
        this.x = e.clientX;
        this.width = this.$refs.content.clientWidth;
        this._per = this.per;
        window.addEventListener('mousemove', this.move);
        window.addEventListener('mouseup', this.over);
      },
      move(event) {
        var e = event ? event: window.event;
        var per = Math.round(((e.clientX - this.x) * 100 / this.width + this._per) * 100) / 100;
        per = Math.max(0, Math.min(100, per));
        this.per = per;
      },
      over() {
        window.removeEventListener('mousemove', this.move);
        window.removeEventListener('mouseup', this.over);
        this.isMove = false;
      }
    },
    computed: {
      per: {
        set(v) {
          this.$emit('input', Math.round(v * (this.max - this.min) / 100) + this.min);
        },
        get() {
          return this.value * 100 / (this.max - this.min);
        }
      }
    },
    mounted() {},
    beforeDestroy() {
      if(this.isMove) {
        window.removeEventListener('mousemove', this.move);
        window.removeEventListener('mouseup', this.over);
      }
    }
  };
</script>