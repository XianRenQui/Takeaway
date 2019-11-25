<!--
 * @Descripttion: 商品列表_头部
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-08 21:35:27
 * @version: v1.0.0
 -->
<template>
    <div class="box">
        <img class="img_01" src="../assets/img/cakes.png" alt="">
        <span class="cakes">热销</span>
        <span>热销</span>
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
     
     }
}
</script>
  
<style scoped>
  .img_01{
      width: .18rem;
      height: .18rem;
      float:left;
      display: block;
      margin:10px 5px 10px 14px;
  }
  span{
      font-size: 10px;
      float:left;
      margin:10px 14px;
      display: block;
  }
  .cakes{
      margin-left: 0;
  }
</style>