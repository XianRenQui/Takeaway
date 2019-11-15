<!--
 * @Descripttion: 商品列表_头部
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-12 14:57:30
 * @version: v1.0.0
 -->
<template>
    <div class="Shopp_nev">
        <i class="el-icon-back" @click="back()"></i>
        <span> |&nbsp;&nbsp; 购物车</span>
        <!-- <span class="sc_edit">编辑</span> -->
        <span style=""  @click="editPage(bol)" class="sc_edit">{{bol?'取消':'编辑'}}</span>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
           bol:true 
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      },
      editPage(bol){  
          this.bol = !bol;
        //   console.log(bol)
        this.$emit('lesionEvenet',this.bol)
      }
    }
}
</script>
  
<style scoped>
   .Shopp_nev{
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