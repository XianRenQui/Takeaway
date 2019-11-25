<!--
 * @Descripttion: 发现
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-09 23:03:19
 * @version: v1.0.0
 -->
<template>
    <div class="box">
       <div class="find">
           <span class="s_left">历史搜索</span>
           <img @click="deleteStorage()" src="../assets/img/delete.png" alt="">
       </div>
       <div class="s_mibot">
           <span v-for="(val,i) in histotyList" :key="i">魏家凉皮</span>
       </div>
    </div>
</template>

<script>
export default {
    name:"Secfind",
    data(){
        return{
            histotyList:['dayu']
        }
    },
    created(){
      var arr = localStorage.getItem('tag') ;
      this.histotyList = arr.item;
      console.log(arr)
    },
    methods:{
        deleteStorage(){
            localStorage.removeItem('tag');
            console.log('移除历史记录')
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
       height: .85rem;
       margin: 0 auto .05rem;
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