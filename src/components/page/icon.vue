<template>
  <main class="icon-wrapper">
    <div class="type-switch">
      <span class="bgc" :style="{'transform': 'translate3d(' + (index * 100) + '%, 0, 0)'}"></span>
      <span @click="index = 0" :class="{'select': index == 0}">Unicode</span>
      <span @click="index = 1" :class="{'select': index == 1}">Font class</span>
      <span @click="index = 2" :class="{'select': index == 2}">Symbol</span>
    </div>
    <iframe :src="['/static/demo_unicode.html', '/static/demo_fontclass.html', '/static/demo_symbol.html'][index]" frameborder="0" ref="iframe" @load="resize"></iframe>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        index: 1
      }
    },
    methods: {
      resize() {
        var ifw = this.$refs.iframe.contentWindow || this.$refs.iframe.contentDocument.parentWindow;
        if (ifw.document.body) {
          this.$refs.iframe.height = ifw.document.documentElement.scrollHeight || ifw.document.body.scrollHeight;
        }
      }
    }
  }
</script>

<style lang="scss">
  .icon-wrapper {
    position: relative;
    padding: .2rem 5% .1rem;
    iframe {
      width: 100%;
    }
    .type-switch {
      position: absolute;
      top: .2rem;
      right: 10%;
      font-size: 12px;
      height: 2.5em;
      width: 21em;
      background: #eee;
      border-radius: 1.25em;
      > span {
        position: relative;
        display: block;
        float: left;
        width: 33.3333%;
        line-height: 2.5;
        text-align: center;
        cursor: pointer;
        z-index: 1;
        transition: color .2s ease-in-out;
        &.select {
          color: #fff;
        }
        &.bgc {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          background-color: #f56c6c;
          border-radius: 1.25em;
          transition: transform .2s ease-in-out;
        }
      }
    }
  }
</style>