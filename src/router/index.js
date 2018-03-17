import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // hide /#/ from URL
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home')
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: () => import('@/components/Stocks')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/components/Portfolio')
    }
  ]
})
