// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由配置部分
import router from './router'
import 'styles/reset.css'
// 1像素边框
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
Vue.config.productionTip = false

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同，返回不同的内容
