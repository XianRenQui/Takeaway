<!--
 * @Descripttion: 商品详情
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-15 15:19:24
 * @version: v1.0.0
 -->
<template>
    <div class="Gd_GoodDetail">
        <GoodsDetailTop :id="id" class="de_GoodsDe"></GoodsDetailTop>
        <GoodsDetailmoddile class="GoodsDetailmoddile"></GoodsDetailmoddile>
        <contact class="contact"></contact>
    </div>
</template>

<script>
import GoodsDetailTop from '../components/GoodsDetailTop';
import GoodsDetailmoddile from '../components/GoodsDetailmoddile';
import contact from '../components/contact';

export default {
    name:"GoodsDetail",
    props:['id'],
    data(){
        return{
            
        }
    },
 
     methods:{
      back(){
          this.$router.go(-1);
      }
    },
     components:{
        GoodsDetailTop,GoodsDetailmoddile,contact
    }
}
</script>
  
<style scoped>
    .Gd_GoodDetail{
        background: #fff;
        position: relative;
       padding-bottom: .8rem;
    }
   .de_GoodsDe{
       margin-bottom: .1rem;
   }
   .contact{
       position: fixed;
       left: .2rem;
       bottom: .2rem;
   }
</style>