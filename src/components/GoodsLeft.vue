<!--
 * @Descripttion: 商品列表_点名
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-14 16:24:27
 * @version: v1.0.0
 -->
<template>
    <div class="commt">
        <div class="Goods_left">
           <p>特色菜</p>
           <p>粥饮料类</p>
           <p>特色小吃类</p>
           <p>新品上市</p>
           <p>米饭类</p>
           <p>西餐类</p>
        </div>
        <GoodsRight></GoodsRight>
    </div>
       
</template>

<script>

import GoodsRight from '../components/GoodsRight';

export default {
    name:"Goodsflex",
    data(){
        return{
            
        }
    },
     methods:{
     
     },
     components:{
       GoodsRight
    }
}
</script>
  
<style scoped>
    .commt{
        width: 100%;
        clear: both;
        display: flex;
        justify-content: space-between;
    }
   .Goods_left{
       width: 19%;
       background: #f5f0f0;
       clear: both;
       padding:0 10px 1rem 10px;
   }
   .Goods_left p{
       font-size: .12rem;
       line-height: .6rem;
       color: rgb(83, 82, 82);
   }
</style>