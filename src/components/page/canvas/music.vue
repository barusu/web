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
      background: #000;
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
  var RAF = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  var outcanvas = document.createElement("canvas");
  var octx = null;
  //绘制音谱的参数
  var rt_array = [],  //用于存储柱形条对象
    rt_length = 128;    //规定有多少个柱形条

  var grd = null;
  // 音谱条对象
  function Retangle(w, h, x, y) {
    this.w = w;
    this.h = h; // 小红块高度
    this.x = x;
    this.y = y;
    this.jg = 1;
    this.power = 0;
    this.dy = y; // 小红块位置
    this.num = 0;
  }
  var Rp = Retangle.prototype;
  Rp.update = function(power) {
    this.power = power;
    this.num = ~~(this.power / this.h + 0.5);
    //更新小红块的位置，如果音频条长度高于红块位置，则红块位置则为音频条高度，否则让小红块下降
    var nh = this.dy + this.h;//小红块当前位置
    if (this.power >= this.y - nh) {
      this.dy = this.y - this.power - this.h - (this.power == 0 ? 0 : 1);
    } else if (nh > this.y) {
      this.dy = this.y - this.h;
    } else {
      this.dy += 1;
    }
    this.draw();
  };
  Rp.draw = function() {
    octx.fillStyle = grd;
    var h = (~~(this.power / (this.h + this.jg))) * (this.h + this.jg);
    octx.fillRect(this.x, this.y - h, this.w, h);
    for (var i = 0; i < this.num; i++) {
      var y = this.y - i * (this.h + this.jg);
      octx.clearRect(this.x - 1, y, this.w + 2, this.jg);
    }
    octx.fillStyle = "#950000";
    octx.fillRect(this.x, ~~this.dy, this.w, this.h);
  };

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
      },
      initAnimation() {
        //每个柱形条的宽度，及柱形条宽度+间隔
        var aw = this.$refs.canvas.width / rt_length;
        var w = aw - 1;

        for (var i = 0; i < rt_length; i++) {
          rt_array.push(new Retangle(w, 5, i * aw, this.$refs.canvas.height / 2))
        }

        this.animate();
      },
      animate() {
        this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        octx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);

        //出来的数组为8bit整型数组，即值为0~256，整个数组长度为1024，即会有1024个频率，只需要取部分进行显示
        var array_length = this.analyser.frequencyBinCount;
        // eslint-disable-next-line no-undef
        var array = new Uint8Array(array_length);
        this.analyser.getByteFrequencyData(array);  //将音频节点的数据拷贝到Uin8Array中

        //数组长度与画布宽度比例
        var bili = array_length / this.$refs.canvas.width;

        for (var i = 0; i < rt_array.length; i++) {
          var rt = rt_array[i];
          //根据比例计算应该获取第几个频率值，并且缓存起来减少计算
          rt.index = ('index' in rt) ? rt.index : ~~(rt.x * bili);
          rt.update(array[rt.index]);
        }

        this.draw();

        RAF(this.animate);
      },
      draw() {
        this.ctx.drawImage(outcanvas, 0, 0);
        this.ctx.save();
        this.ctx.translate(this.$refs.canvas.width / 2, this.$refs.canvas.height / 2);
        this.ctx.rotate(Math.PI);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(outcanvas, -this.$refs.canvas.width / 2, -this.$refs.canvas.height / 2);
        this.ctx.restore();
        this.ctx.fillStyle = 'rgba(0, 0, 0, .8)';
        this.ctx.fillRect(0, this.$refs.canvas.height / 2, this.$refs.canvas.width, this.$refs.canvas.height / 2);
      }
    },
    mounted() {
      this.analyser = this.AC.createAnalyser();
      this.gainnode = this.AC.createGain();
      this.gainnode.gain.value = 1;
      this.$nextTick(() => {
        this.$refs.canvas.width = this.$refs.canvas.clientWidth;
        this.$refs.canvas.height = this.$refs.canvas.clientHeight;
        this.ctx = this.$refs.canvas.getContext('2d');
        grd = this.ctx.createLinearGradient(0, 110, 0, 270);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.3, "yellow");
        grd.addColorStop(1, "#00E800");
        outcanvas.width = this.$refs.canvas.width;
        outcanvas.height = this.$refs.canvas.height / 2;
        octx = outcanvas.getContext('2d');
        this.initAnimation();
        console.log(this.$refs.canvas.width);
        console.log(this.$refs.canvas.height);
      });
      this.play('static/demo1.mp3');
    },
    beforeDestroy() {
      this.Au.stop();
    }
  };
</script>