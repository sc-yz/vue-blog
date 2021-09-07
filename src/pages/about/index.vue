<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <p ref="message" id="message">{{ message }}</p>
    <p>{{ name.sex }}{{ name.age }}</p>
    <p>${names}</p>
    <button @click="changeArr">修改数组</button>
    <button @click="changeArr2">修改数组$set</button>
    <button @click="conso">打印数组</button>
    <button @click="changeMessage">修改Mesage</button>
    <button @click="addNameAge">添加name的age</button>
    <button @click.once="onceClick">修饰符once</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  delimiters: ['${', '}'],
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6],
      message: 654321,
      name: {
        sex: 'male',
      },
      timer: null,
    };
  },
  computed: {
    names() {
      return this.name.sex + this.name.age;
    },
  },
  methods: {
    changeArr() {
      this.arr[0] = 100;
    },
    changeArr2() {
      this.$set(this.arr, 8, 200);
      console.log(this.arr);
    },
    conso() {
      console.log(this.arr);
    },
    changeMessage() {
      this.message = 123456;
      console.log(this.$refs.message.textContent);
    },
    addNameAge() {
      this.name.age = 18;
      console.log(this.name);
      this.$set(this.name, 'age', 12);
      console.log(this.name);
    },
    onceClick() {
      console.log('onceClick');
    },
    promiseAll(promises) {
      if (!Array.isArray(promises)) {
        throw new Error('参数期望是一个数组');
      }

      const len = promises.length;
      let result = new Array(len);
      let count = 0;
      return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
          Promise.resolve(promise).then(
            (res) => {
              result[index] = res;
              count++;
              if (count === len) {
                return resolve(result);
              }
            },
            (err) => {
              return reject(err);
            }
          );
        });
      });
    },
  },
  created() {
    const dom = document.getElementById('messgae');
    console.log('message-dom: ', dom);
    this.$nextTick(() => {
      const dom1 = document.getElementById('messgae');
      console.log('message-dom1: ', dom1, this);
    });

    // 设置定时器
    // this.timer = setInterval(() => {
    //   console.log('123');
    // }, 1000);
  },
  async mounted() {
    const result = await this.promiseAll([
      axios.get('/api/live-channels/all/lives?limit=20'),
      axios.get('/api/chatroom/1/message/v1'),
    ]);
    console.log(result);
  },
};
</script>
