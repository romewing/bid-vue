import './assets/css/bootstrap.min.css'
import './assets/font-awesome/4.5.0/css/font-awesome.min.css'
import './assets/css/fonts.googleapis.com.css'
import './assets/css/ace.min.css'
import './assets/css/ace-rtl.min.css'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router'
import store from './store'
import App from './App'

Vue.use(VueI18n)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
