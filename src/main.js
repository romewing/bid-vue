import 'normalize.css'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import iView from 'iview'
import router from './router'
import store from './store'
import App from './app'

Vue.use(VueI18n)
Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
