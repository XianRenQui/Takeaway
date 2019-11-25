<!--
 * @Descripttion: 商品列表_点名
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 17:33:43
 * @version: v1.0.0
 -->
<template>
       <div class="Goods_right">
           <ul>
                <li v-for="(item,i) in list" :key='i'>
                    <!-- <router-link class="link" :to='{path:"/GoodsDetail",query:{id:item.id}}'> -->
                    <router-link class="link"  :to='"/GoodsDetail/"+item.sid' :id="sid">
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
import axios from 'axios';

export default {
    name:"Goodsflex",
    props:['id'],
    data(){
        return{
            list:[]
        }
    },
     created() {
     console.log(this.id);
     console.log(item.sid);
     //从后端获取数据
     var params = {'gid':1}; 
     axios.get('/goods/selectAll?id='+this.id)
     .then(res=>{ 
         console.log(res.data);
         this.list = res.data;
     })
     .catch(err=>{
         console.log(err);
     });
  },
    
    
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