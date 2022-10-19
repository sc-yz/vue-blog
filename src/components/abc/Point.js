/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-09 14:56:59
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-09 15:34:23
 * @FilePath: /vue-blog-github/src/components/abc/Point.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Random from 'random';
export const Point = function Point(x, y) {
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

export const Particle = function Particle(x, y) {
  this.startPos = new Point(x, y);

  /**
   * Movement variables
   */
  this.v = new Point();
  this.a = new Point();

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
    ctx.fillRect(this.x, this.y, 1, 1);
  },

  /**
   * Calculate particle movement
   */
  physics: function () {
    this.a.x = (random() - 0.5) * 0.8;
    this.a.y = (random() - 0.5) * 0.8;

    this.v.add(this.a);
    this.v.multiply(FRICT);

    this.x += this.v.x;
    this.y += this.v.y;

    this.x = Math.round(this.x * 10) / 10;
    this.y = Math.round(this.y * 10) / 10;
  },
};
