import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
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

const apppp = new Vue({
  router,
  store,
  render: (h) => h(App),
});

setTimeout(() => {
  apppp.$mount('#app');
}, 5000);
