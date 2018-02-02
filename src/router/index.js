import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      component: () => import('../Test')
    },
    {
      path: '/info/biding',
      component: () => import('../Test2')
    }
  ]
})
