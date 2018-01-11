<template>
  <label class="o-checkbox" :class="{'disabled': Disabled, 'indeterminate': Indeterminate}">
    <input class="checkbox" type="checkbox" :name="Name" v-model="field" :disabled="Disabled" :value="data">
    <span class="checkbox-wrapper"></span>
    <span class="text"><slot></slot></span>
  </label>
</template>

<script>
  var seq = 0;

  export default {
    data() {
      return {
        seq: 0
      };
    },
    props: ['value', 'data', 'disabled', 'name', 'indeterminate'],
    computed: {
      Indeterminate() {
        // eslint-disable-next-line
        return this.indeterminate !== undefined;
      },
      Disabled() {
        // eslint-disable-next-line
        return this.disabled !== undefined;
      },
      Name() {
        return this.name || `checkbox${this.seq}`;
      },
      field: {
        set(v) {
          this.$emit('input', v);
        },
        get() {
          return this.value;
        }
      }
    },
    created() {
      this.seq = ++seq;
    }
  };
</script>

<style lang="scss">
  .o-checkbox {
    display: inline-block;
    font-size: .14rem;
    user-select: none;
    cursor: pointer;
    input.checkbox {
      position: absolute;
      clip: rect(0,0,0,0);
      &:focus + .checkbox-wrapper {
        border-color: #50bfff;
      }
      &:checked + .checkbox-wrapper {
        border-color: #50bfff;
        background: #50bfff;
        &::after {
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 1px;
          height: 5px;
          transform: translate3D(0,-60%,0) rotate(-45deg);
        }
      }
    }
    .checkbox-wrapper {
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
        content: '';
        position: absolute;
        top: 50%; left: .02rem;
        display: block;
        width: .1rem;
        height: 0;
        border: 1px solid #fff;
        border-radius: 1px;
        transform: translate3D(0,-50%,0);
        transition: transform .17s cubic-bezier(0.12, 0.4, 0.29, 1.46);
      }
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
        z-index: -1;
      }
    }
    &.indeterminate {
      .checkbox-wrapper {
        border-color: #50bfff;
        background: #50bfff;
      }
    }
    .text {
      padding: 0 .05rem;
      vertical-align: middle;
      user-select: text;
    }
    &:hover {
      .checkbox-wrapper {
        border-color: #50bfff;
      }
    }
    &:active {
      .checkbox-wrapper::before {
        transition: all 1ms linear;
        box-shadow: 0 0 0 0;
        opacity: 0.618;
      }
    }
  }


  .radio-group-wrapper {
    display: inline-block;
    font-size: 0;
    cursor: pointer;
    line-height: 1;
    vertical-align: middle;
    user-select: none;
    &.s {
      .txt {
        font-size: 12px;
      }
    }
    &.kuro {
      .txt {
        border-color: #121212;
        background: transparent;
        box-shadow: 0 2px 3px rgba(255,255,255,.05) inset, 0 1px 0 rgba(255,255,255,.1);
      }
      .disabled {
        .txt {
          background: transparent;
          color: #999;
        }
      }
      .o-radio {
        &:first-child .txt {
          box-shadow: 0 2px 3px rgba(255,255,255,.05) inset, 0 1px 0 rgba(255,255,255,.1);
        }
      }
      .ck:checked + .txt {
        background: transparent;
        border-color: #121212;
        box-shadow: 0 2px 3px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.1);
      }
    }
    .txt {
      display: inline-block;
      font-size: .14rem;
      border-left-width: 0;
      padding: .5em 1em;
      vertical-align: middle;
      line-height: 1.3;
      cursor: pointer;
      background: #fff;
      transition: all .34s;
    }
    .disabled {
      .txt {
        background: #eee;
        filter: grayscale(100%);
        cursor: not-allowed;
      }
    }
    .ck {
      position: absolute;
      clip: rect(0,0,0,0);
      &:checked + .txt {
        background: #09f;
        color: #fff;
        border-color: #09f;
        box-shadow: -1px 0 0 0 #09f;
      }
    }
    .o-radio {
      &:first-child .txt {
        border-left-width: 1px;
        border-radius: 4px 0 0 4px;
        box-shadow: none;
      }
      &:last-child .txt {
        border-radius: 0 4px 4px 0;
      }
    }
  }
</style>