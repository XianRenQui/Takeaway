/*
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-05 10:39:50
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-14 19:47:03
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './font/iconfont.css';
import Axios from 'axios';


Axios.defaults.baseURL = '/api/'
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
