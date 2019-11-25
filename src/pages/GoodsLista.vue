<!--
 * @Descripttion: 商品列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 21:48:45
 * @version: v1.0.0
 -->
<template>
    <div class="GoodsList">
        <!-- Goodsheader -->
         <div class="goods_head">
            <img class="image_1" src="../assets/img/return_w.png" alt="" @click="back()">
            <img class="image" src="../assets/img/more.png" alt="">
            <img class="image" src="../assets/img/collection.png" alt="">
            <router-link to="/ShoppingCar"><img class="image_2" src="../assets/img/shoppcar.png" alt=""></router-link>
            <router-link to="/Search"><img class="image_2" src="../assets/img/search_w.png" alt=""></router-link>
        </div>
        <!-- Goodsflex -->
        <Goodsflex class="Goodsfiex">
            <div class="Goods_flex">
                <h4>魏家凉皮（科技三路店）</h4>
                <img class="img_01" src="../assets/img/ad_1.jpg" alt="">
                <img class="image" src="../assets/img/time.png" alt="">
                <span>&nbsp;配送越30分钟 &nbsp; |&nbsp;</span>
                <img class="image" src="../assets/img/review.png" alt="">
                <span>&nbsp;点评高分店铺 </span>
                <p>公告：本店不支持网络外卖发票，谢谢合作。</p>
                <span class="goods_less">首单减14</span>
                <img class="image_1" src="../assets/img/botton.png" alt="">
            </div>
        </Goodsflex>
        <!-- Goodsnev -->
        <div class="nev">
            <p class="change">点菜</p>
            <p>评价<span>9999+</span></p>
            <p>商家</p>
            <p class="single">好友拼单</p>
        </div>
        <!-- Goodscakes -->
        <div class="Goodscakes">
            <img class="img_01" src="../assets/img/cakes.png" alt="">
            <span class="cakes">热销</span>
            <span>热销</span>
        </div>
    <div class="goods_fl">
        <!-- GoodsLeft -->
         <div class="Goods_left">
           <p>特色菜</p>
           <p>粥饮料类</p>
           <p>特色小吃类</p>
           <p>新品上市</p>
           <p>米饭类</p>
           <p>西餐类</p>
        </div>
        <!-- GoodsRight -->
         <div class="Goods_right">
           <ul>
                <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                 <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                 <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                 <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                 <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                 <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
                 <li>
                    <router-link class="link" to="/GoodsDetail">
                        <img src="../assets/img/ad_2.jpg" alt="">
                        <div class="moll">
                                <h4>肉夹馍（肥瘦）</h4>
                                <p>只有肥瘦，纯瘦请点优质夹馍</p>
                                <p>月售<span>1255 | </span>好评度100%</p>
                                <span class="mony">￥12</span>
                                <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
           </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"Search",
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
    .Goodsfiex{
        margin-top:-15%; 
    }
    .goods_fl{
       clear: both;
       display: flex;
       justify-content: space-between;
    }
    /* Goodsheader  */
    .goods_head{
       background: linear-gradient(to right,#454141 , #837c7c);
       width: 100%;
       height: 1.5rem;
   }
   .goods_head img{
       width: .22rem;
       height: .22rem;
       display: block;
       float: right;
       margin:10PX 8PX;
   }
   .goods_head .image_1{
       float: left;
   }
   .goods_head .image_2{
       width: .18rem;
       height: .18rem;
       margin:12PX 8PX;
   }
   /* Goodsflex */
   .Goods_flex{
        width: 87%;
        height: 1.1rem;
        box-shadow: 2px 2px 2px #c7c3c3;
        border-radius: 10px;
        margin: -0.55rem auto 10px;
        padding: 14px;
        position: relative;
        background: #fff;
    }
    .Goods_flex h4{
       font-size: .18rem;
       color: #0d0c0c;
    }
    .Goods_flex img{
        width: .13rem;
        height: .13rem;
        display: block;
        float: left;
        margin:8px 0 ;
    }
    .Goods_flex span{
       font-size: 12px;
        display: block;
        float: left;
        margin: 7px 0 ;
        color: #706c6c;
    }
    .Goods_flex p{
       font-size: 12px;
        color: #706c6c;
       clear: both;
    }
    .Goods_flex .goods_less{
        border: 1px solid #f72f2f;
        color: #f72f2f;
        font-size: 10px;
        display: block;
        width: .65rem;
        height: .17rem;
        line-height: .17rem;
        text-align: center;
        margin-top: .2rem;
    }
    .Goods_flex .image_1{
        width: .2rem;
        height: .2rem;
        position: absolute;
        bottom: 3%;
        right:5%;
    }
    .Goods_flex .img_01{
        width: .5rem;
        height: .5rem;
        position: absolute;
        top: -20%;
        right: 7%;
    }
    /* Goodsnev */
    .nev{
        width: 92%;
        height: .4rem;
        border-bottom: 1px solid #d9d5d5;
        display: flex;
        justify-content: space-between;
        padding: 0 14px;
    }
    .nev>p{
        font-size: 14px;
        line-height: .45rem;
        color: #72716e;
    }
    .nev .change{
        border-bottom: 2px solid #dfbe04;
        color: #1b1b1b;
    }
    .box .nev>p>span{
        font-size: .1rem;
        margin-left: 5px;
    }
    .nev .single{
        width: .7rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        font-size: 10px;
        color: #dfbe04;
        border: 1px solid #dfbe04;
        border-radius: 14px;
        margin-top:10px; 
    }
    /* Goodscakes */
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
    /* GoodsLeft */
     .Goods_left{
       width: 19%;
       height: 10rem;
       background: #f5f0f0;
       clear: both;
       padding:0 10px 0 10px;
    }
    .Goods_left p{
        font-size: .12rem;
        line-height: .6rem;
        color: rgb(83, 82, 82);
    }
    /* GoodsRight */
     .Goods_right{
       width: 73%;
       height: 10rem;
       clear: both;
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