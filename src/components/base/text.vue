<template>
  <span class="o-text" :class="{'tooltip': title, 'hidden': Hidden, 'transparent': Transparent}" :data-title="title"><slot></slot></span>
</template>

<script>
  export default {
    props: ['title', 'hidden', 'transparent'],
    computed: {
      Hidden() {
        // eslint-disable-next-line
        return this.hidden !== undefined;
      },
      Transparent() {
        // eslint-disable-next-line
        return this.transparent !== undefined;
      }
    }
  };
</script>

<style lang="scss">
  .o-text {
    position: relative;
    &.hidden {
      background: #000;
      color: #000;
      &::selection {
        background: #000;
        color: #fff;
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
    &.tooltip {
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
        transition: all .34s .4s;
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
        transition: all .34s .4s;
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