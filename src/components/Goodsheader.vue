<!--
 * @Descripttion: 商品列表_头部
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-09 10:50:29
 * @version: v1.0.0
 -->
<template>
    <div class="box">
        <div class="goods_head">
            <img class="image_1" src="../assets/img/return_w.png" alt="" @click="back()">
            <img class="image" src="../assets/img/more.png" alt="">
            <img @click="shoucang()" class="image" src="../assets/img/collection.png" alt="">
            <router-link to="/ShoppingCar"><img class="image_2" src="../assets/img/shoppcar.png" alt=""></router-link>
            <router-link to="/SecSearch"><img class="image_2" src="../assets/img/search_w.png" alt=""></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
            
        }
    },
     methods:{
      	back(){
          	this.$router.go(-1);
       	},
       shoucang(){
       		console.log(1);
       }
     }
}
</script>

<style scoped>
   .goods_head{
       background: linear-gradient(to right,#454141 , #837c7c);
       width: 100%;
       height: 1.5rem;
   }
   .goods_head img{
       width: .22rem;
       height: .22rem;
       display: block;
       float: right;
       margin:10PX 8PX;
   }
   .goods_head .image_1{
       float: left;
   }
   .goods_head .image_2{
       width: .18rem;
       height: .18rem;
       margin:12PX 8PX;
   }
</style>