<style lang="scss">
  .canvas-music {
    .demo0 {
      position: relative;
      padding-bottom: 60%;
    }
    canvas {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="canvas-music">
    <h2>Music Player</h2>
    <p>播放音乐时显示频谱.</p>
    <div class="demo0">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
  var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

  export default {
    data() {
      return {
        AC: new AudioContext(),
        analyser: null,
        gainnode: null,
        Au: document.createElement("audio"),
        ctx: null
      };
    },
    methods: {
      play(src) {
        this.Au.src = src;
        this.Au.load();
        this.Au.play();
        var AS = this.AC.createMediaElementSource(this.Au);
        AS.connect(this.analyser);
        this.analyser.connect(this.gainnode);
        this.gainnode.connect(this.AC.destination);
      }
    },
    mounted() {
      this.analyser = this.AC.createAnalyser();
      this.gainnode = this.AC.createGain();
      this.gainnode.gain.value = 1;
      this.$nextTick(() => {
        this.ctx = this.$refs.canvas.getContext('2d');
        this.play('static/demo0.mp3');
      });
    }
  };
</script>