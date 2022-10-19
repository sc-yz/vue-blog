<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-13 16:00:04
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-13 17:17:08
 * @FilePath: /vue-blog-github/src/components/abc/font_four.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <div class="text">{{ ttt }}</div>
    <div class="animate-charcter">{{ ttt }}</div>
    <div class="plygon">
      <div>
        {{ ttt }}
      </div>
      <div>
        {{ ttt }}
      </div>
    </div>

    <div class="waviy">
      <span
        :style="'--i: ' + (index + 1)"
        v-for="(item, index) in ttt.split('')"
        >{{ item }}</span
      >
    </div>

    <h2 class="text_shadows">{{ ttt }}</h2>

    <div class="blob">
      <h1>
        <span>WEB<br />CSS3</span>
      </h1>

      <div class="blobs_1"></div>
      <div class="blobs_2"></div>
      <div class="blobs_3"></div>
      <div class="blobs_4"></div>
      <div class="blobs_5"></div>
      <div class="blobs_6"></div>
      <div class="blobs_7"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ttt: {
      type: String,
      default: 'AA',
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.ttt);
  },
  methods: {},
};
</script>

<style scoped lang="less">
.text {
  color: transparent;
  background-image: url('https://cdn.hk01.com/di/media/images/dw/20211207/544858758770069504123875.jpeg/17lLvT6NF_dZUiRD6HnXyEKv-k43ArXkvyhM4L8oTOA?v=w1280r16_9');
  background-size: 100% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 200px;
}
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.plygon {
  position: relative;
  font-size: 100px;
  div {
    color: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
    &:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 2px #03a9f4;
    }
    &:nth-child(2) {
      color: #03a9f4;
      animation: animate 4s ease-in-out infinite;
    }
  }
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

.waviy {
  position: relative;
  span {
    position: relative;
    display: inline-block;
    font-size: 40px;
    color: #fff;
    text-transform: uppercase;
    animation: flip 2s infinite;
    animation-delay: calc(0.2s * var(--i));
  }
}

@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}

.text_shadows {
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(2rem + 5vw);
  text-align: center;
  margin: 0;
  color: var(--color-primary);
  //color: transparent;
  //background-color: white;
  //background-clip: text;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  20% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
  }
  30% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  40% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  50% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  60% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  70% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  80% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
  }
  90% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.blob {
  position: absolute;
  h1 {
    background: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Titan One', cursive;
    font-size: 90px;
    font-weight: 700;
    flex-flow: row wrap;
    align-content: center;
    justify-content: center;
    span {
      width: 100%;
      position: relative;
      &:before {
        background: linear-gradient(45deg, #fc5c7d, #6a82fb, #fc5c7d);
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        content: '';
        mix-blend-mode: screen;
      }
    }
  }

  .blobs_1 {
    background: #ff1493;
    width: 60px;
    height: 60px;
    top: 90px;
    left: 210px;
  }

  .blobs_2 {
    background: #ff4500;
    width: 80px;
    height: 80px;
    top: 155px;
    left: 230px;
  }

  .blobs_3 {
    background: #00ff00;
    width: 60px;
    height: 60px;
    top: 145px;
    left: 20px;
  }

  .blobs_4 {
    background: #ff0000;
    width: 100px;
    height: 100px;
    top: 115px;
    left: 100px;
  }

  .blobs_5 {
    background: #ffff00;
    width: 50px;
    height: 50px;
    top: 55px;
    left: 70px;
  }

  .blobs_6 {
    background: #00ffff;
    width: 60px;
    height: 60px;
    top: 220px;
    left: 55px;
  }

  .blobs_7 {
    background: #ff8c00;
    width: 50px;
    height: 50px;
    top: 210px;
    left: 180px;
  }
}
@keyframes blobs {
  0% {
    border-radius: 26% 74% 61% 39% / 54% 67% 33% 46%;
  }
  10% {
    border-radius: 74% 26% 47% 53% / 68% 46% 54% 32%;
  }
  20% {
    border-radius: 48% 52% 30% 70% / 27% 37% 63% 73%;
  }
  30% {
    border-radius: 73% 27% 57% 43% / 28% 67% 33% 72%;
  }
  40% {
    border-radius: 63% 37% 56% 44% / 25% 28% 72% 75%;
  }
  50% {
    border-radius: 39% 61% 70% 30% / 61% 29% 71% 39%;
  }
  60% {
    border-radius: 27% 73% 29% 71% / 73% 51% 49% 27%;
  }
  70% {
    border-radius: 39% 61% 65% 35% / 74% 65% 35% 26%;
  }
  80% {
    border-radius: 55% 45% 37% 63% / 38% 30% 70% 62%;
  }
  90% {
    border-radius: 25% 75% 70% 30% / 39% 50% 50% 61%;
  }
  100% {
    border-radius: 66% 34% 33% 67% / 65% 73% 27% 35%;
  }
}
[class*='blobs'] {
  mix-blend-mode: color;
  animation: blobs 15s ease-in-out infinite alternate;
  position: absolute;
  display: block;
}
</style>
