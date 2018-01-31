import './assets/css/bootstrap.min.css'
import './assets/font-awesome/4.5.0/css/font-awesome.min.css'
import './assets/css/fonts.googleapis.com.css'
import './assets/css/ace.min.css'
import './assets/css/ace-rtl.min.css'
import './assets/js/bootstrap.min'
import './assets/js/jquery-ui.custom.min'
import './assets/js/jquery.ui.touch-punch.min'
import './assets/js/jquery.easypiechart.min'
import './assets/js/jquery.flot.min'
import './assets/js/jquery.flot.pie.min'
import './assets/js/jquery.flot.resize.min'
import './assets/js/ace-elements.min'
import './assets/js/ace.min'
import './assets/js/ace-extra.min'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router'
import store from './store'
import Index from './Index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'body',
  router,
  store,
  render: h => h(Index)
})
