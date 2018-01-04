<template>
  <label class="oo-button" :class="[type, {'disabled': disabled}]">
    <span class="btn" @click="click" :style="style" :class="effect"><slot></slot></span>
  </label>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ['type', 'disabled', 'width', 'effect'],
    methods: {
      click() {
        if(this.disabled) return;
        this.$emit('click');
      }
    },
    computed: {
      style() {
        return {
          minWidth: this.width || 'auto'
        };
      }
    }
  };
</script>

<style lang="scss">
  $infoColor: #50bfff;
  .oo-button {
    display: inline-block;
    transition: filter .34s;
    &.disabled {
      filter: grayscale(100%);
      .btn {
        background: #ddd;
        cursor: not-allowed;
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
      filter: brightness(100%);
      user-select: none;
      cursor: pointer;
      transition: background .34s, border .34s, filter .34s;
      &:hover {
        border-color: #409eff;
        color: #409eff;
        filter: brightness(107%);
      }
      &:active {
        filter: brightness(93%);
      }
      &.spread {
        &::before {
          content: '';
          position: absolute;
          display: block;
          top: -1px; left: -1px;
          bottom: -1px; right: -1px;
          border-radius: inherit;
          opacity: 0;
          box-shadow: 0 0 0 6px;
          color: #50bfff;
          transition: all .4s linear;
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
    &.info {
      .btn {
        background-color: #50bfff;
        border-color: #50bfff;
        color: #fff;
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
    &.success {
      .btn {
        background-color: #34c849;
        border-color: #34c849;
        color: #fff;
        &::before {
          color: #34c849;
        }
      }
    }
    &.dashed {
      .btn {
        border-style: dashed;
      }
    }
    &.dotted {
      .btn {
        border-style: dotted;
      }
    }
  }
  @keyframes buttonEffectSpread {
    to {
      opacity: 0;
      border-shadow: 0 0 0 6px;
    }
  }
</style>