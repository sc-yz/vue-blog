import Vue from 'vue';
import click from './click';

const allDirective = {
  click,
};

Object.keys(allDirective).forEach((key) => {
  Vue.directive(key, allDirective[key]);
});
