<!--
 * @Descripttion: 商品详情
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-14 16:13:15
 * @version: v1.0.0
 -->
<template>
    <div class="contact">
        <span>
            <img src="../assets/img/ContactMerchant.png" alt="">
            <p>联系商家</p> 
        </span>
        <p>
            <img src="../assets/img/TakeawayAvatar.png" alt="">
            另需配送费￥ 4
            <span style="margin-left:.6rem;background:none;">￥20起送</span>
        </p>
    </div>
</template>

<script>
export default {
    name:"GoodsDetailTop",
    data(){
        return{
            
        }
    },
     methods:{
     
    }
}
</script>
  
<style scoped>
    .contact{
        width: 90%;
        height: .5rem;
    }
    .contact span{
        width: 22%;
        height: 100%;
        display: block;
        background: #010101;
        margin-right: 3px;
        text-align: center;
        border-radius: .25rem 0 0 .25rem;
        float: left;
    }
    .contact span>img{
        width: .17rem;
        height: .17rem;
        margin: 10px auto 0;
    }
    .contact span>p{
        font-size: .12rem;
        color: #ffd35d;
        line-height: .13rem;
    }
    .contact>p{
        width: 75%;
        height: 100%;
        display: block;
        background: #010101;
        margin-right: 3px;
        border-radius: 0 .25rem .25rem 0;
        float: right;
        line-height: .5rem;
        font-size: .12rem;
        color: #fff5d2;
        display: flex;
    }
    .contact>p>img{
        width: .6rem;
        height: .6rem;
        margin : -10px 5px 0 5px;
    }
</style>