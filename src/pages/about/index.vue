<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-09 14:03:43
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-01 11:26:28
 * @FilePath: /vue-blog-github/src/pages/about/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="draw-lots">
    <div>{{ showSound ? '录音ing' : '录音' }}</div>

    <div @click="startMp3">录音开始</div>

    <div @click="stopRecorder">结束录音</div>

    <div @click="playRecorder">录音播放</div>

    <div class="context" v-html="final_spanInnerHTML"></div>

    <div @click="speak">点击说话</div>
    <div v-if="speaking">说话中...</div>
    <div @click="stop">停止说话</div>
    <!-- <audio
      src="https://glhtest.oss-cn-hangzhou.aliyuncs.com/peppaPig.mp3"
    ></audio> -->
  </div>
</template>

<script>
import Recorder from 'js-audio-recorder';
import lamejs from 'lamejs';
export default {
  data() {
    return {
      showSound: false,
      recorder: null,
      final_transcript: '',
      recognition: null,
      final_spanInnerHTML: '',
      interim_spanInnerHTML: '',
      speaking: false,
    };
  },

  methods: {
    startMp3() {
      this.showSound = true;
      this.recorder.start().then(
        (res) => {
          console.log(res);
        },
        (error) => {
          // 出错了
          console.log(`${error.name} : ${error.message}`);
        }
      );
    },
    // 结束录音
    stopRecorder() {
      this.showSound = false;
      this.recorder.stop();
      // this.recorder.destroy().then(function () {});
    },
    // 录音播放
    playRecorder() {
      this.recorder.play();
      // let wav = recorder.getWAVBlob(); //获取 WAV 数据
      // this.showSound = false;
      // const mp3Blob = this.convertToMp3(recorder.getWAV());
      // console.log('录音', mp3Blob);
      // this.uploadVoice(mp3Blob);
    },
    //转wav为MP3格式
    convertToMp3(wavDataView) {
      // 获取wav头信息
      const wav = lamejs.WavHeader.readHeader(wavDataView); // 此处其实可以不用去读wav头信息，毕竟有对应的config配置
      const { channels, sampleRate } = wav;
      const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
      // 获取左右通道数据
      const result = this.recorder.getChannelData();
      const buffer = [];

      const leftData =
        result.left &&
        new Int16Array(result.left.buffer, 0, result.left.byteLength / 2);
      const rightData =
        result.right &&
        new Int16Array(result.right.buffer, 0, result.right.byteLength / 2);
      const remaining = leftData.length + (rightData ? rightData.length : 0);

      const maxSamples = 1152;
      for (let i = 0; i < remaining; i += maxSamples) {
        const left = leftData.subarray(i, i + maxSamples);
        let right = null;
        let mp3buf = null;

        if (channels === 2) {
          right = rightData.subarray(i, i + maxSamples);
          mp3buf = mp3enc.encodeBuffer(left, right);
        } else {
          mp3buf = mp3enc.encodeBuffer(left);
        }

        if (mp3buf.length > 0) {
          buffer.push(mp3buf);
        }
      }

      const enc = mp3enc.flush();

      if (enc.length > 0) {
        buffer.push(enc);
      }

      return new Blob(buffer, { type: 'audio/mp3' });
    },
    initSpeech() {
      if (!('webkitSpeechRecognition' in window)) {
        // upgrade();
        console.log('需要升级');
      } else {
        var recognition = new window.webkitSpeechRecognition();
        const self = this;
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function (e) {
          console.log('onstart', e);
        };
        recognition.onresult = function (event) {
          console.log('onresult', event);
          var interim_transcript = '';

          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              self.final_transcript += event.results[i][0].transcript;
            } else {
              self.interim_transcript += event.results[i][0].transcript;
            }
          }
          self.final_transcript = self.capitalize(self.final_transcript);
          self.final_spanInnerHTML = self.linebreak(self.final_transcript);
          self.interim_spanInnerHTML = self.linebreak(interim_transcript);
        };
        recognition.onerror = function (event) {
          console.log('onerror', event);
        };
        recognition.onend = function (e) {
          console.log('onend', e);
        };
        this.recognition = recognition;
      }
    },
    speak() {
      this.recognition.interimResults = true;
      this.recognition.lang = 'cmn-Hans-CN';
      this.recognition.start();
      this.speaking = true;
    },
    stop() {
      this.recognition.stop();
      this.speaking = false;
    },

    linebreak(s) {
      var two_line = /\n\n/g;
      var one_line = /\n/g;
      return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
    },

    capitalize(s) {
      var first_char = /\S/;
      return s.replace(first_char, function (m) {
        return m.toUpperCase();
      });
    },
  },
  mounted() {
    this.initSpeech();
    this.recorder = new Recorder({
      sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
      sampleRate: 48000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
      numChannels: 1, // 声道，支持 1 或 2， 默认是1
      // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
    });
  },
};
</script>

<style scoped lang="less">
.draw-lots {
  div {
    text-align: center;
    margin-top: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
