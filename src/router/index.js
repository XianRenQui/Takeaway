/*
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-07 16:55:52
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-15 10:33:55
 * @version: v1.0.0
 */
import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import GoodsListPage from '@/pages/GoodsListPage'
// import GoodsLista from '@/pages/GoodsLista'
import SecSearch from '@/pages/SecSearch'
import ShoppingCar from '@/pages/ShoppingCar'
import Address from '@/pages/Address'
import NewAddress from '@/pages/NewAddress'
import GoodsDetail from '@/pages/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/GoodsListPage',
      name: 'GoodsListPage',
      component: GoodsListPage
    },
    // {
    //   path: '/GoodsLista',
    //   name: 'GoodsLista',
    //   component: GoodsLista
    // },
    {
      path: '/SecSearch',
      name: 'SecSearch',
      component: SecSearch
    },
    {
      path: '/ShoppingCar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/NewAddress',
      name: 'NewAddress',
      component: NewAddress
    },
    {
      path: '/GoodsDetail/:gid',
      name: 'GoodsDetail',
      component: GoodsDetail
    }
  ]
})
