<!--
 * @Descripttion: 我的地址_头部
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 15:05:45
 * @version: v1.0.0
 -->
<template>
    <div class="Address_nev">
        <i class="el-icon-back" @click="back()"></i>
        <span>&nbsp; |&nbsp;&nbsp; 我的收货地址</span>
        <router-link to="/NewAddress"><span class="sc_edit">新增地址</span></router-link>
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
      }
    }
}
</script>
  
<style scoped>
   .Address_nev{
       width: 96%;
       height: .4rem;
       background: #f6f6f6;
       margin:0 auto;
       padding: 0 2%;
       background: #fff;
       z-index: 3;
   }
   .el-icon-back{
       font-size: .3rem;
       display: block;
       float: left;
       line-height: .4rem;
       font-weight: 100;
   }
   span{
       font-size: .15rem;
       display: block;
       float: left;
       line-height: .4rem;
       color: rgb(112, 112, 112);
   }
   .sc_edit{
       float: right;
   }
</style>