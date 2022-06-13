<template>
  <div>
    <textarea v-model="text" class="text"></textarea>
    <div v-html="text" class="text-p"></div>
    <div class="text-div">{{ text }}</div>
    <div class="text-div-br">{{ brText }}</div>
    <div class="text-div-br-html" v-html="brText"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '123\n456',
    };
  },
  computed: {
    brText() {
      console.log(this.text.replace(/\n/gi, '<br>'));
      return this.text.replace(/\n/gi, '<br>');
    },
  },
  methods: {},
};
</script>
<style>
.text {
  width: 200px;
  height: 100px;
  margin: 20px auto;
}
.text-p {
  background: yellowgreen;
  font-size: 18px;
  margin: 20px auto;
}
.text-div {
  background: #fff;
  font-size: 18px;
  margin: 20 auto;
  white-space: pre-line;
}
.text-div-br {
  background: yellowgreen;
  font-size: 18px;
  margin: 50 auto;
}
.text-div-br-html {
  background: #fff;
  font-size: 18px;
  margin: 20 auto;
}
.text-div-br-html br {
  display: block;
  content: ' ';
  padding-top: 20px;
  background: red;
}
</style>
