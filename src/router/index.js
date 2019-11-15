import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Vip from '@/pages/Vip'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FindPass from '@/pages/FindPass'
import Collection from '@/pages/Collection'
import AccountEdit from '@/pages/AccountEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/FindPass',
      name: 'FindPass',
      component: FindPass
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/AccountEdit',
      name: 'AccountEdit',
      component: AccountEdit
    }
  ]
})
