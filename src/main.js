/*
 * @Author: kian
 * @Date: 2021-05-05 09:20:18
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-01 11:06:59
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
import store from './store';

// 添加自定义过滤器
import './filtter';

// 添加自定义指令
import './directive';

// 代码高亮
import 'highlight.js/styles/github.css';

// 其他元素使用 github 的样式
import 'github-markdown-css';

// 引入自定义样式
import './assets/css/index.less';

Vue.config.productionTip = false;
import notify from './components';

Vue.use(notify);
const app = new Vue({
  router,

  store,

  render: (h) => h(App),
});
app.$mount('#app');
