<!--
 * @Descripttion: 商品列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-14 18:11:29
 * @version: v1.0.0
 -->
<template>
    <div class="GoodsList">
        <Goodsheader></Goodsheader>
        <Goodsflex class="Goodsfiex"></Goodsflex>
        <Goodsnev></Goodsnev>
        <Goodscakes></Goodscakes>
        <GoodsLeft :id="id" class="GoodsLeft"></GoodsLeft>
        <contact class="contact"></contact>
    </div>
</template>

<script>
import Goodsheader from '../components/Goodsheader';
import Goodsflex from '../components/Goodsflex';
import Goodsnev from '../components/Goodsnev';
import Goodscakes from '../components/Goodscakes';
import GoodsLeft from '../components/GoodsLeft';
import contact from '../components/contact';


export default {
    name:"Search",
    props:['id'],
    data(){
        return{
            
        }
    },
    components:{
        Goodsheader,Goodsflex,Goodsnev,Goodscakes,GoodsLeft,contact
    }
}
</script>

<style scoped>
    .GoodsList{
        position: relative;
    }
    
    .Goodsfiex{
        margin-top:-15%; 
    }
    .contact{
       position: fixed;
       left: .2rem;
       bottom: .2rem;
   }
</style>