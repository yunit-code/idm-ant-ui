import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import Antd from 'idm-antv-ui';
import 'idm-antv-ui/style.js';

Vue.use(Antd);

new Vue({
  el: '#app',
  render: h => h(App),
});
