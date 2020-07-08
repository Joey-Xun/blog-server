import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {rem,startLoad} from 'common/utils'
import 'normalize.css/normalize.css'

rem();
startLoad();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
