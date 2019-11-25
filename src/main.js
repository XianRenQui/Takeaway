// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './font/iconfont.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
//Vue.prototype.$http = axios;

//Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(ElementUI);

Axios.defaults.baseURL = '/api/';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
