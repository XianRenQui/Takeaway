<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 16:34:56
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
        <div class="order_img">
            <img src="../assets/img/pic055.jpg" alt="">
            <p class="listfirst">一个订单都没有哦~</p>
            <p class="listmid">给自己定一个小目标，先下一单。</p>
            <p class="third">去逛逛</p>
        </div>
        <div class="order__img_bottom">
            <p>继续拖动，查看三个月前订单</p>
        </div>
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
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}
.order_img img{
    width: 1.98rem;
    height: 1.6rem;
}
.listfirst{
    margin-top:.2rem;
    margin-bottom: .2rem;
    text-align: center;
    font-size: .12rem;
    color:#666666;
    letter-spacing:.01rem;
}
.listmid{
    font-size: .12rem;
    color:#999;
    text-align: center;
    margin-bottom:.2rem;
    letter-spacing:.01rem;
}
.third{
    width: 1.67rem;
    height: .32rem;
    background: #ffc130;
    text-align: center;
    line-height: .32rem;
    margin:0 auto;
    color:#3d331a;
    font-size: .14rem;
}
.order__img_bottom p{
    color:#666;
    font-size: .12rem;
    letter-spacing:.01rem;
}
</style>