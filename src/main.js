import Vue from 'vue'
import App from './App.vue'

import VueLodash from '../lib/index'

Vue.config.productionTip = false

Vue.use(VueLodash)
new Vue({
  render: h => h(App),
}).$mount('#app')
