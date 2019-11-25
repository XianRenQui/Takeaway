<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 17:18:46
 -->
<template>
    <div class="order_box">
      <div class="orderHeader">
        <orderHeader class="orderHeader"></orderHeader>
        <orderNav></orderNav>
      </div>
        <router-view></router-view>
        <MineFooter class="MineFooter"></MineFooter>
    </div>
</template>

<script>
import orderHeader from '../components/orderHeader';
import orderNav from '../components/orderNav';
import MineFooter from '../components/MineFooter';


export default {
  name: 'orderPage',
  data () {
    return {
      
    }
  },
  components:{
    orderHeader,orderNav,MineFooter
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
