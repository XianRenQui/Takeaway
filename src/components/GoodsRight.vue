<!--
 * @Descripttion: 商品列表_点名
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-15 10:00:53
 * @version: v1.0.0
 -->
<template>
       <div class="Goods_right">
           <ul>
                <li v-for="(item,i) in list" :key='i'>
                    <!-- <router-link class="link" :to='{path:"/GoodsDetail",query:{id:item.id}}'> -->
                    <router-link class="link"  :to='"/GoodsDetail/"+item.id'>
                        <img :src="item.img" alt="">
                        <div class="moll">
                                <h4>{{item.productname}}</h4>
                                <p>优选</p>
                                <p>月售<span>{{item.Monthlysale}} | </span>好评度100%</p>
                                <span class="mony">￥{{item.price}}</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
           </ul>
        </div>
</template>

<script>
export default {
    name:"Goodsflex",
    data(){
        return{
            list:{}
        }
    },
     methods:{
        
     },
     created(){  
         var that = this;
         var params = {'gid':1}; 
        //  that.$http.get('/api/goods/selectAll',params).then(function(res){
         that.$http.get('/api/Goodslist',params).then(function(res){
            var data  = res.data;
            console.log(data)
        
                  that.list = data;

        }).catch(function(err){
                console.log(err)
        })
    }
    
    
}
</script>
  
<style scoped>
   .Goods_right{
       width: 73%;
       height: 5rem;
       clear: both;
       padding-bottom: 1rem;
   }
   ul{
       width: 100%;
   }
   ul>li{
       width: 100%;
       height:1rem;
       display: flex;
       justify-content: space-between;
       margin-bottom: .3rem;
   }
   ul>li .link{
       width: 100%;
       height:1rem;
       display: flex;
       justify-content: space-between;
       margin-bottom: .3rem;
   }
   ul>li .link>img{
       width: 37%;
       height: 100%;
       margin-right: 10px;
   }
   ul>li>img{
       width: 37%;
       height: 100%;
   }
   .moll{
       width: 58%;
       height: 100%;
       padding-right:10px; 
   }
    .moll h4{
        font-size: .16rem;
        color: black;
        margin-bottom: 5px;
        line-height:  .28rem;
    }
    .moll p{
        font-size: .12rem;
        color: rgb(107, 105, 105);
        line-height:  .18rem;
    }
    .moll .mony{
        font-size: .16rem;
        display: block;
        color: red;
        margin-top: 8px;
        float: left;
    }
    .add{
        width: .2rem;
        height: .2rem;
        display: block;
        float: right;
        margin-top: 5px;
    }
</style>