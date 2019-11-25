<!--
 * @Descripttion: 发现
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-12 14:42:18
 * @version: v1.0.0
 -->
<template>
    <div class="box">
       <div class="find">
           <span class="s_left">猜你在线</span>
       </div>
       <div class="s_mibot">
           <ul>
               <li v-for="(item,i) in list" :key="i">
                    <img class="image" :src='item.imgval' alt="">
                    <p>{{item.name}}</p>
                    <img class="s_ahd" src="../assets/img/ahead.png" alt="">
               </li>
           </ul>
         
       </div>
    </div>
</template>

<script>
export default {
    name:"Secfind",
    data(){
        return{
            list:[{'id':1,'name':'魏家便利（陕商大厦店）','imgval':require("../assets/img/life-001.jpg")}]
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
       display: block;
       font-size: 14px;
       color: #505050;
       line-height: 14px;
   }
   .s_mibot{
       width: 94%;
       margin: 0 auto .05rem;
   }
   .s_mibot>ul{
       width: 100%;
   }
   .s_mibot>ul>li{
       width: 100%;
       height: .4rem;
       margin-top: 5px;
   }
   .image{
       width: 6%;
       height: 58%;
       display: block;
       float: left;
       margin-top: 8px;
   }
   .s_mibot>ul>li>p{
       font-size: 14px;
       float: left;
       line-height: .4rem;
       margin-left: 10px;
   }
   .s_ahd{
       width: 5%;
       float: right;
       margin-top:10px; 
   }
</style>