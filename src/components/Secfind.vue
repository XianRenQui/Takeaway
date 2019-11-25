<!--
 * @Descripttion: 发现
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 10:29:19
 * @version: v1.0.0
 -->
<template>
    <div class="box">
       <div class="find">
           <span class="s_left">搜索发现</span>
           <img src="../assets/img/refresh.png" alt="">
           <span class="s_right">换一批</span>
       </div>
       <div class="s_mibot">
           <span v-for="(val,i) in tagList" :key="i">{{val.name}}</span>
       </div>
    </div>
</template>

<script>
export default {
    name:"Secfind",
    data(){
        return{
            tagList:[{'name':'魏家凉皮','id':'1'},{'name':'魏家凉皮','id':'1'},{'name':'魏家凉皮','id':'1'},{'name':'魏家凉皮','id':'1'},
            {'name':'魏家凉皮','id':'1'},{'name':'魏家凉皮','id':'1'},{'name':'魏家凉皮','id':'1'},{'name':'魏家凉皮','id':'1'}]
        }
    }
}
</script>

<style scoped>
   .find{
       width: 92%;
       height: .14rem;
       margin:  .22rem auto 7px;
   }
   .find>span{
       font-size: 14px;
       color: #505050;
       line-height: 14px;
   }
   .s_left{
       float: left;
   }
   .s_right{
       float: right;
   }
   .find>img{
       width: .13rem;
       height: .13rem;
       float: right;
       margin-left: 4px;
   }
   .s_mibot{
       width: 94%;
       height: 1.3rem;
       margin: 0 auto;
   }
   .s_mibot>span{
       display:block; 
       float: left;   
       font-size: 14px;
       background: #f4f4f4; 
       border: 5px solid #f5f5f5;
       margin: 7px;
   }
</style>