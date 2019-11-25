<!--
 * @Descripttion: 购物车列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-14 19:08:49
 * @version: v1.0.0
 -->
<template>
    <div class="sh_guess">
        <h5>猜你喜欢</h5>
        <ul>
            <li v-for="(item,i) in guess" :key="i">
                <img :src="item.img" alt="">
                <h6>{{item.productName}}</h6>
                <span class="money">￥{{item.money}}</span>
                <span class="sale">月售{{item.Monthly}}</span>
                <div class="guess_but">
                    <img class="shopp" src="../assets/img/shopp.png" alt="">
                    <p class="name">{{item.StoreName}}</p>
                    <img class="shopp" src="../assets/img/ahead.png" alt="">
                    <p>{{item.time}}分钟&nbsp;&nbsp;|&nbsp;&nbsp;配送&nbsp;&nbsp;￥{{item.ShippingFee}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
             guess:[
            ]
        }
    },
     methods:{
     
     },
     created(){
        fetch('/api/guess')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.guess = data;
        })
        .catch(err=>{
        console.log(err);
        })
    }
}
</script>
  
<style scoped>
    .sh_guess{
    width: 96%;
    background: #f1f1f1;
    padding: .3rem 2% 0;
    }
    .sh_guess>h5{
        font-size: .2rem;
        text-align: center;
    }
    .sh_guess>ul{
        width: 100%;
        background: #f1f1f1;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .sh_guess>ul>li{
        width: 48%;
        height: 2.1rem;
        margin-top: 10px;
        display: inline-block;
        border-radius: 10px;
        background: #fff;
    }
    .sh_guess>ul>li>img{
        width: 100%;
        height: 40%;
        display: block;
        border-radius: 10px 10px 0 0 ;
    }
    .sh_guess>ul>li>h6{
        font-size: .16rem;
        color: #333;
        margin: 14px 5px 14px 10px;
    }
    .money{
        font-size: .16rem;
        color: #fb4f45;
        display: block;
        margin: 0 5px 5px 10px;
        float: left;
    }
    .sale{
        font-size: .12rem;
        color: #999;
        display: block;
        margin: 2px 5px 5px 10px;
        float: left;
    }
    .sh_guess>ul>li>p{
        font-size: .12rem;
        color: #999;
        margin: 2px 5px 14px 10px;
        display: block;
        clear: both;
    }
    .guess_but{
        width: 92%;
        height: 15%;
        clear: both;
        border-radius: 0 0 10px 10px;
        padding: 6px;
        border-top: 1px solid #e4e4e4;
    }
    .shopp{
        width: .18rem;
        height: .18rem;
        display: block;
        float: left;
    }
    .sh_guess .guess_but p{
        font-size: .12rem;
        color: #999;
        display: block;
        float: left;
        margin:2px 0 0 5px;
    }
    .name{
        font-size: .14rem;
        width: 1.16rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin:0 11px 0 5px;
    }
    .sh_guess ul li:nth-last-child(1){
        margin-bottom: .6rem;
    }
    .sh_guess ul li:nth-last-child(2){
        margin-bottom: .6rem;
    }
</style>