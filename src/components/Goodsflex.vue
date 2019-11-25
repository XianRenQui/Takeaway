<!--
 * @Descripttion: 商品列表_点名
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-15 14:28:07
 * @version: v1.0.0
 -->
<template>
    <div class="box">
       <div class="Goods_flex">
            <h4>{{index.name}}</h4>
            <img class="img_01" :src="index.img" alt="">
            <img class="image" src="../assets/img/time.png" alt="">
            <span>&nbsp;配送约{{index.DeliveryTime}}分钟 &nbsp; |&nbsp;</span>
            <img class="image" src="../assets/img/review.png" alt="">
            <span>&nbsp;点评高分店铺 </span>
            <p>公告：本店不支持网络外卖发票，谢谢合作。</p>
            <span class="goods_less">首单减14</span>
            <img class="image_1" src="../assets/img/botton.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Goodsflex",
    
    data(){
        return{
            index:{}
        }
    },
     methods:{
     
     },
     created(){    
        fetch('api/GoodsFlex')
        .then(res=>{

            return res.json();
        })
        .then(data=>{
            this.Flex = data;
            this.index = this.Flex[0]
             console.log(this.Flex)
             console.log(this.index)
        })
        .catch(err=>{
        console.log(err);
        })
    }
}
</script>
  
<style scoped>
    .Goods_flex{
        width: 87%;
        height: 1.1rem;
        box-shadow: 2px 2px 2px #c7c3c3;
        border-radius: 10px;
        margin: 0 auto 10px;
        padding: 14px;
        position: relative;
        background: #fff;
    }
    .Goods_flex h4{
       font-size: .18rem;
       color: #0d0c0c;
    }
    .Goods_flex img{
        width: .13rem;
        height: .13rem;
        display: block;
        float: left;
        margin:8px 0 ;
    }
    .Goods_flex span{
       font-size: 12px;
        display: block;
        float: left;
        margin: 7px 0 ;
        color: #706c6c;
    }
    .Goods_flex p{
       font-size: 12px;
        color: #706c6c;
       clear: both;
    }
    .Goods_flex .goods_less{
        border: 1px solid #f72f2f;
        color: #f72f2f;
        font-size: 10px;
        display: block;
        width: .65rem;
        height: .17rem;
        line-height: .17rem;
        text-align: center;
        margin-top: .2rem;
    }
    .Goods_flex .image_1{
        width: .2rem;
        height: .2rem;
        position: absolute;
        bottom: 3%;
        right:5%;
    }
    .Goods_flex .img_01{
        width: .5rem;
        height: .5rem;
        position: absolute;
        top: -20%;
        right: 7%;
    }
</style>