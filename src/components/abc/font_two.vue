<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-09 14:20:12
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-09 16:02:44
 * @FilePath: /vue-blog-github/src/components/abc/font_two.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <canvas class="canvas"></canvas>
</template>

<script>
// import { Point, Particle } from './Point';
import Random from 'random';
export default {
  data() {
    return {
      particles: [],
      particlesLength: 0,
      currentText: 'A',
      FRICT: null,
      ctx: null,
      Point: null,
      canvas: null,
      Particle: null,
      Point: null,
    };
  },
  mounted() {
    this.initPoint();
    this.FRICT = new this.Point(0.98);
    this.initParticle();
    this.init();

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    console.log(1, this.canvas.width, this.canvas.height);
    window.onresize = function () {
      this.onresize();
    };
  },
  methods: {
    onresize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      console.log(2, this.canvas.width, this.canvas.height);
    },
    initPoint() {
      const Point = function Point(x, y) {
        this.set(x, y);
      };

      Point.prototype = {
        set: function (x, y) {
          x = x || 0;
          y = y || x || 0;

          /**
           * x start pointer
           * @type {*|number}
           * @private
           */
          this._sX = x;

          /**
           * y start pointer
           * @type {*|number}
           * @private
           */
          this._sY = y;

          /**
           * Call reset
           */
          this.reset();
        },

        /**
         * add one point to another
         * @param point
         */
        add: function (point) {
          this.x += point.x;
          this.y += point.y;
        },

        /**
         * multiply two points
         * @param point
         */
        multiply: function (point) {
          this.x *= point.x;
          this.y *= point.y;
        },

        /**
         * Reset point
         */
        reset: function () {
          /**
           * x pointer
           * @type {*|number}
           */
          this.x = this._sX;

          /**
           * y pointer
           * @type {*|number}
           */
          this.y = this._sY;

          return this;
        },
      };
      this.Point = Point;
    },
    initParticle() {
      var self = this;
      const Particle = function Particle(x, y) {
        this.startPos = new self.Point(x, y);

        /**
         * Movement variables
         */
        this.v = new self.Point();
        this.a = new self.Point();

        /**
         * First init reset
         */
        this.reset();
      };

      Particle.prototype = {
        /**
         * Reset particle
         */
        reset: function () {
          this.x = this.startPos.x;
          this.y = this.startPos.y;

          this.life = Math.round(Math.abs(Random.normal()()) * 300);
          this.isActive = true;

          /**
           * Movement variables
           */
          this.v.reset();
          this.a.reset();
        },
        /**
         * Particle tick
         */
        tick: function () {
          if (!this.isActive) return;

          this.physics();
          this.checkLife();

          this.draw();

          return this.isActive;
        },
        /**
         * Calculate life
         */
        checkLife: function () {
          this.life -= 1;

          this.isActive = !(this.life < 1);
        },

        /**
         * Draw particle
         */
        draw: function () {
          self.ctx.fillRect(this.x, this.y, 1, 1);
        },

        /**
         * Calculate particle movement
         */
        physics: function () {
          this.a.x = (Random.normal()() - 0.5) * 0.8;
          this.a.y = (Random.normal()() - 0.5) * 0.8;

          this.v.add(this.a);
          this.v.multiply(self.FRICT);

          this.x += this.v.x;
          this.y += this.v.y;

          this.x = Math.round(this.x * 10) / 10;
          this.y = Math.round(this.y * 10) / 10;
        },
      };
      this.Particle = Particle;
    },
    init() {
      const canvas = document.getElementsByClassName('canvas')[0];
      this.canvas = canvas;

      const ctx = canvas.getContext('2d');

      ctx.font = 'bold 200px "Arial"';
      ctx.textBaseline = 'center';
      ctx.fillStyle = '#000';

      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;
      }
      this.ctx = ctx;
      this.createParticles();
      setTimeout(() => {
        this.animLoop();
      }, 1000);
    },
    createParticle(x, y) {
      this.particles.push(new this.Particle(x, y));
    },
    createParticles() {
      var textSize = this.ctx.measureText(this.currentText);
      this.ctx.fillText(
        this.currentText,
        Math.round(this.canvas.width / 2 - textSize.width / 2),
        Math.round(this.canvas.height / 2)
      );

      var imageData = this.ctx.getImageData(
        1,
        1,
        this.canvas.width,
        this.canvas.height
      );
      var pixels = imageData.data;
      var dataLength = imageData.width * imageData.height;

      //Loop through all pixels
      for (var i = 0; i < dataLength; i++) {
        var currentRow = Math.floor(i / imageData.width);
        var currentColumn = i - Math.floor(i / imageData.height);

        if (currentRow % 2 || currentColumn % 2) {
          continue;
        }

        //If alpha channel is greater than 0
        if (this.checkAlpha(pixels, i)) {
          var cy = ~~(i / imageData.width);
          var cx = ~~(i - cy * imageData.width);

          this.createParticle(cx, cy);
        }
      }

      this.particlesLength = this.particles.length;
    },

    checkAlpha(pixels, i) {
      return pixels[i * 4 + 3] > 0;
    },
    clearCanvas() {
      this.ctx.fillStyle = 'rgba(0,0,0,0.2)';

      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clearLoop() {
      const self = this;
      /**
       * Do clearing
       */
      this.clearCanvas();

      /**
       * next loop
       */
      window.requestAnimationFrame(self.clearLoop);
    },
    animLoop() {
      const self = this;
      this.ctx.fillStyle = '#2c87c4';
      var isAlive = false;

      /**
       * Loop particles
       */
      for (var i = 0; i < this.particlesLength; i++) {
        /**
         * If particle is active
         */
        if (this.particles[i].tick()) isAlive = true;
      }

      if (!isAlive) {
        this.resetParticles();

        setTimeout(() => {
          window.requestAnimationFrame(self.animLoop);
        }, 500);

        return;
      }

      /**
       * next loop
       */
      window.requestAnimationFrame(self.animLoop);
    },
    resetParticles() {
      for (var i = 0; i < this.particlesLength; i++) {
        this.particles[i].reset();
      }
    },
  },
};
</script>

<style scoped lang="less">
.canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
