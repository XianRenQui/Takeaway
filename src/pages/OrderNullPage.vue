<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 17:18:13
 -->
<template>
    <div class="order_null_box">
        <orderHeader class="orderHeader"></orderHeader>
        <OrderNullNav class="OrderNullNav"></OrderNullNav>
        <MineFooter class="MineFooter"></MineFooter>
    </div>
</template>

<script>
import orderHeader from '../components/orderHeader';
import OrderNullNav from '../components/OrderNullNav';
import MineFooter from '../components/MineFooter';


export default {
  name: 'orderPage',
  data () {
    return {
      
    }
  },
  components:{
    orderHeader,OrderNullNav,MineFooter
  }
}
</script>

<style scoped>
.mine_box{
    background: #f7f7f7;
}
.MineFooter{
    position: sticky;
    bottom:0;
}
.orderHeader{
    background: #fff;
    position:sticky;
    top:0;
}
</style>
