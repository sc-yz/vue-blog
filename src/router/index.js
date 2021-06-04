import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from 'vue-auto-routing';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/vue-blog',
  mode: 'history',
  routes,
});

export default router;
