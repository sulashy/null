import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Rem from './utils/rem'
import './assets/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Rem.rem()
