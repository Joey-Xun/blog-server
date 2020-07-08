import Vue from 'vue'
import Vuex from 'vuex';

import 'normalize.css/normalize.css'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import {startLoad} from 'common/utils'



Vue.use(ElementUI);
Vue.use(Vuex);

// 将组件暴露在全局
startLoad();

Vue.config.productionTip = false

const store=new Vuex.Store({
  state: {
    username: ''
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
