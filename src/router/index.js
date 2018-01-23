import Vue from 'vue'
import Router from 'vue-router'

import Admin from '@/pages/Admin'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Sos from '@/pages/Sos'
import Team from '@/pages/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/sos',
      name: 'sos',
      component: Sos
    },
    {
      path: '/*',
      name: 'notfound',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
