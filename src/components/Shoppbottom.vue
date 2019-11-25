<!--
 * @Descripttion: 购物车列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 22:02:48
 * @version: v1.0.0
 -->
<template>
    <div class="sh_bottom">
        <div class="sh_bot_left">
            <img class="img_01" src="../assets/img/change.png" alt="">
            <span>全选</span>
        </div>
         <div class="sh_bot_right">
             <div class="total">
                  <p>合&nbsp;计<span>￥0</span></p>
                  <p style="font-size:12px;">总优惠<span>￥0</span></p>
             </div>
            <p class="Settlement">一键结算<span>0个商家</span></p>
        </div>
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
    .sh_bottom{
        width: 94%;
        height: .5rem;
        border-top: 2px solid #eee;
        margin: 0 auto;
        padding: 0 3%;
        display: flex;
        justify-content: space-between;
        background: #fff;
    }
    .sh_bot_left{
        width: 20%;
        height: 43%;
        padding: 4% 0;
    }
    .img_01 {
        display: block;
        width: .2rem;
        height: .2rem;
        opacity: 0.5;
        float: left;
        margin: 3px 5px 0 0;
    }
    .sh_bot_left span{
        font-size: .2rem;
        display: block;
        color: #353535;
    }
    .sh_bot_right{
        width: 55%;
        height: 84%;
        padding: 1% 0;
        display: flex;
        justify-content: space-between;
    } 
     .sh_bot_right .Settlement{
         width: 60%;
         height: 100%;
         background: #ccc;
         font-size: .18rem;
         color: #fff;
         text-align: center;
         border-radius: .3rem;
     }
     .sh_bot_right .Settlement span{
         font-size: .12rem;
         display: block;
     }
     .total{
         width: 40%;
         height: 100%;
         font-size: 14px;
         text-align: center;
         padding: 1% 0;
     }
     .total>p>span{
         color: #e67972;
     }
</style>