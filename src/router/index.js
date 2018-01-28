import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/Test'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      component: Test
    }
  ]
})
