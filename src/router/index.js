/*
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 14:48:31
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 15:34:33
 */
import Vue from 'vue'
import Router from 'vue-router'
import AllKindsPage from '@/pages/AllKindsPage'
import ShopListPage from '@/pages/ShopListPage'
import MinePage from '@/pages/MinePage'
import orderPage from '@/pages/orderPage'
import OrderNullPage from '@/pages/OrderNullPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllKindsPage',
      component: AllKindsPage
    },
    {
      path: '/AllKindsPage',
      name: 'AllKindsPage',
      component: AllKindsPage
    },
    {
      path: '/ShopListPage',
      name: 'ShopListPage',
      component: ShopListPage
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage
    },
    {
      path: '/orderPage',
      name: 'orderPage',
      component: orderPage
    },
    {
      path: '/OrderNullPage',
      name: 'OrderNullPage',
      component: OrderNullPage
    }
  ]
})
