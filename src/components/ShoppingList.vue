<!--
 * @Descripttion: 购物车列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-14 19:18:10
 * @version: v1.0.0
 -->
<template>
    <div class="list">
        <ul>
             <li v-for="(item,i) in list" :key="i">
                <div class="sc_list_top">
                    <img class="img_01" @click="isCheck(item.checked,i)" :src="item.checked? require('../assets/img/change_col.png'):require('../assets/img/change.png')" alt="">
                    <p>{{item.name}}</p>
                    <img class="img_02" src="../assets/img/ahead.png" alt="">
                </div>
                <div class="sc_list_bottom">
                    <img class="img_01" @click="isCheck(item.checked,i)" :src="item.checked? require('../assets/img/change_col.png'):require('../assets/img/change.png')" alt="">
                     <div class="sc_list_right">
                        <img class="img_03" :src="item.imge" alt="">
                        <span class="Discount">折</span>
                        <h6>{{item.name}}</h6>
                        <p>规格：优质良品</p>
                        <span class="money">￥{{item.price}}</span>
                        <span class="Offer">￥{{item.num}}</span>
                        <p class="Delivery">配送费</p>
                        <span class="Shipping">￥{{item.peiPrice}}</span>
                        <div class="bottom">
                            <span :class="item.end<= item.sendPrice ?'pick isCheck':'pick'">￥5起送</span>
                            <span class="bot_mon">￥{{item.total}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
            list:[
            ]
        }
    },
     methods:{
         isCheck(bol,i){
             this.list[i].checked = (!bol);
             
         }
     },
     created(){
        fetch('http://localhost:3000/cart')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.list = data;
        })
        .catch(err=>{
        console.log(err);
        })
    }
}
</script>
  
<style scoped>
     .list{
            width: 100%;
            margin-top: .5rem;
        }
    .list ul{
        width: 100%;
        background: #f1f1f1;
        padding-top: 10px;
    }
    .list ul li{
        width: 95%;
        height: 2rem;
        margin:0 auto ;
        border-radius: 10px;
        margin-bottom:10px; 
    }
    .sc_list_top{
        width: 95%;
        height: 10%;
        background: #fafafa;
        padding:14px 10px;
        border-radius: 10px 10px 0 0;
    }
    .img_01 {
        display: block;
        width: .2rem;
        height: .2rem;
        opacity: 0.5;
        float: left;
    }
    .sc_list_top p{
        font-size: .15rem;
        float: left;
        margin: 0 14px 0 10px;
    }
    .img_02{
        display: block;
        width: .15rem;
        height: .15rem;
        float: left;
        margin: 1%;
    }
    .sc_list_bottom{
        width: 96%;
        height: 69%;
        background: #fff;
        border-radius: 0 0 10px 10px;
        padding: 2% 2%;
        clear: both;
    }
    .sc_list_bottom .img_01{
        margin: 8% 1%;
    }
    .sc_list_right{
        width: 90%;
        height: 98%;
        float: right;
        padding: 1%;
        position: relative;
    }
    .img_03{
        width: 20%;
        height: 43%;
        display: block;
        border-radius: 10px;
        border:2px solid #f2f1ef;
        float: left;
        margin-right:5px; 
    }
    .Discount{
        font-size: 12px;
        background: #fc716e;
        color: #fff;
        display: block;
        width: .18rem;
        height: .18rem;
        float: left;
        line-height: .18rem;
        text-align: center;
        border-radius: 5px;
    }
    .sc_list_right h6{
        font-size: 14px;
        margin-left: 5px;
    }
    .sc_list_right p{
        font-size: 12px;
        color: #9b9b9b;
        margin: 2px 0 14px 0;
    }
    .sc_list_right .Offer{
        font-size: .12rem;
        clear: both;
        float: right;
        position: absolute;
        bottom: 52%;
        right:16%;
        color: #999;
        text-decoration: line-through;
    }
    .sc_list_right .money{
        font-size: 14px;
        clear: both;
        position: absolute;
        bottom: 49%;
        right:2%;
        color: #333;
    }
    .Delivery{
        font-size: 12px;
        clear: both;
        position: absolute;
        bottom: 25%;
        left:2%;
        color: #333;
    }
    .Shipping{
        font-size: 14px;
        clear: both;
        position: absolute;
        bottom: 31%;
        right:2%;
        color: #333;
    }
    .bottom{
        width: 100%;
        height: 23%;
        clear: both;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top:1px solid #e4e4e4;
        padding:2% 0;
    }
    .bot_mon{
        display: block;
        font-size: .15rem;
        background: #fef6df;
        width: 15%;
        height: 93%;
        color: #f85045;
        line-height: .35rem;
        text-align: center;
        float: right;
        border-radius: 20px 0 0 20px;
    }
    .pick{
        display: block;
        font-size: .15rem;
        background: #cccccc;
        width: 28%;
        height: 93%;
        float: right;
        color: #fff;
        line-height: .35rem;
        text-align: center;
        border-radius: 0 20px 20px 0;
    }
    .isCheck{
        background: #f85045;
 }
</style>