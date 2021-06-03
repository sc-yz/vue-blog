import Vue from 'vue';
const initTime = (i) => {
  return i.toFixed(2);
};

const allFiltters = {
  initTime,
};

Object.keys(allFiltters).forEach((key) => {
  Vue.filter(key, allFiltters[key]);
});
