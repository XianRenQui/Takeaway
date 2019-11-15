<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 16:47:19
 -->
<template>
<div class="orderNavBox">
    <div class="order_nav">
        <ul class="order_uls">
            <li class="dingdan">全部订单</li>
            <li>待评价</li>
            <li>退款</li>
        </ul>
    </div>
    <div class="order_content">
        <img src="../assets/img/pic055.jpg" alt="">
    </div>
</div>
   
</template>

<script>
export default {
    name:"orderNav",
    data(){
        return {
        }
    }

}
</script>

<style scoped>
.order_uls{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: .45rem;
    border-bottom: 1px solid #e4e4e4;
}
.order_uls .dingdan{
    font-size: .14rem;
    color:#f3b33e;
    font-weight: bolder;
}
.order_uls li{
    font-size: .14rem;
    color:#666666;
}
.order_content{
    width: 100%;
    min-height: 5.3rem;
    border-bottom: .01rem solid #e4e4e4;
    background: #f2f2f2;
    display: flex;
    justify-content:center;
    align-items: center;
}
.order_content img{
    width: 1.98rem;
    height: 1.6rem;
}
</style>