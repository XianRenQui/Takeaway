<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 14:30:51
 -->
<template>
<div class="orderNavBox">
    <div class="order_content">
        <img src="../assets/img/pic055.jpg" alt="">
        <p class="listfirst">没有待评价的订单哦~</p>
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
.order_content{
    width: 100%;
    min-height: 5.2rem;
    padding-top:.02rem;
    border-bottom: .01rem solid #e4e4e4;
    background: #f2f2f2;
    display:flex;
    justify-content:flex-start;
    flex-direction: column;
    align-items: center;
}
.order_content img{
    width: 1.98rem;
    height: 1.6rem;
    margin-top: .5rem;
    margin-bottom: .2rem;
}
</style>