<template>
  <main class="icon-wrapper">
    <iframe src="/static/demo_symbol.html" frameborder="0" ref="iframe" @load="resize"></iframe>
  </main>
</template>

<script>
  export default {
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
    padding: .2rem 5% .1rem;
    iframe {
      width: 100%;
    }
  }
</style>