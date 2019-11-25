import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Vip from '@/pages/Vip'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FindPass from '@/pages/FindPass'
import Collection from '@/pages/Collection'
import AccountEdit from '@/pages/AccountEdit'
import AllKindsPage from '@/pages/AllKindsPage'
import ShopListPage from '@/pages/ShopListPage'
import MinePage from '@/pages/MinePage'
import orderPage from '@/pages/orderPage'
import OrderNullPage from '@/pages/OrderNullPage'
import GoodsListPage from '@/pages/GoodsListPage'
import SecSearch from '@/pages/SecSearch'
import ShoppingCar from '@/pages/ShoppingCar'
import Address from '@/pages/Address'
import NewAddress from '@/pages/NewAddress'
import GoodsDetail from '@/pages/GoodsDetail'
import SearchA from '@/pages/SearchA'
import OrderContent1 from '../components/OrderContent1'
import OrderContent2 from '../components/OrderContent2'
import OrderContent3 from '../components/OrderContent3'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
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
      component: orderPage,
        children:[
          {
            path:"",
            redirect:"OrderContent1"
          },
          {
            path:"OrderContent1",
            component:OrderContent1

          },
          {
            path:"OrderContent2",
            component:OrderContent2

          },
          {
            path:"OrderContent3",
            component:OrderContent3

          }
        ]
    },
    {
      path: '/OrderNullPage',
      name: 'OrderNullPage',
      component: OrderNullPage
    },
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
      path: '/GoodsDetail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail,
      props:true
    },
    {
    	path: '/GoodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
    	path: '/SearchA',
      name: 'SearchA',
      component: SearchA
    },
    {
      path: '/ShopListPage/:miaoshu',
      name: 'ShopListPage',
      component: ShopListPage,
      props:true
    },
    {
      path: '/GoodsListPage/:id',
      name: 'GoodsListPage',
      component: GoodsListPage,
      props:true
    }
    
    
  ]
})
