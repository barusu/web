<template>
  <span class="o-text" :class="[type, {'tooltip': title, 'hidden': Hidden, 'transparent': Transparent, 'conceal': Conceal}]" :data-title="title"><slot></slot></span>
</template>

<script>
  export default {
    props: ['title', 'hidden', 'transparent', 'conceal', 'type'],
    computed: {
      Hidden() {
        // eslint-disable-next-line
        return this.hidden !== undefined;
      },
      Transparent() {
        // eslint-disable-next-line
        return this.transparent !== undefined;
      },
      Conceal() {
        // eslint-disable-next-line
        return this.conceal !== undefined;
      }
    }
  };
</script>

<style lang="scss">
  .o-text {
    position: relative;
    &.key {
      color: #f56c6c;
    }
    &.tag {
      color: #eb7ce3;
    }
    &.title {
      color: #409eff;
      font-size: 120%;
    }
    &.tooltip {
      cursor: default;
      &::after {
        content: attr(data-title);
        position: absolute;
        left: 0; top: -1em;
        display: block;
        padding: 2px .5em;
        line-height: 1.5;
        transform: translate(0, -100%) scale(.5);
        background: rgba(0,0,0,.7);
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        min-width: 3em;
        opacity: 0;
        transform-origin: 0% 100%;
        transition: all .34s .3s;
      }
      &::before {
        content: '';
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
      }
      &:hover {
        &::before {
          left: 1em;
          transform: scale(1);
          opacity: 1;
        }
        &::after {
          transform: translate(0, -100%) scale(1);
          opacity: 1;
        }
      }
    }
    &.hidden {
      background: #000;
      color: #000;
      &::selection {
        background: #000;
        color: #000;
        &::after {
          content: ''
        }
      }
    }
    &.transparent {
      background: transparent;
      color: transparent;
      &::selection {
        background: transparent;
        color: transparent;
        &::after {
          content: ''
        }
      }
    }
    &.conceal {
      background: #000;
      color: #000;
      transition: color .34s;
      &:hover,
      &::selection {
        background: #000;
        color: #fff;
      }
      &::after {
        content: '你知道的太多了';
        position: absolute;
        left: 0; top: -8px;
        display: block;
        padding: 2px .5em;
        line-height: 1.5;
        transform: translate(0, -100%) scale(.5);
        background: rgba(0,0,0,.7);
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        min-width: 3em;
        opacity: 0;
        transform-origin: 0% 100%;
        transition: all .34s .1s;
      }
      &::before {
        content: '';
        position: absolute;
        left: .25em; top: -8px;
        border: 0 solid transparent;
        border-width: 7px 6px 0px;
        border-top-color: rgba(0,0,0,.7);
        font-size: 12px;
        opacity: 0;
        transform: scale(.5);
        transform-origin: 50% 0%;
        transition: all .34s .1s;
      }
      &:hover {
        &::before {
          left: 1em;
          transform: scale(1);
          opacity: 1;
        }
        &::after {
          transform: translate(0, -100%) scale(1);
          opacity: 1;
        }
      }
    }
  }
</style>