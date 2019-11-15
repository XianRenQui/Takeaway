<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 11:01:05
 -->
<template>
<div class="orderHeaderBox">
    <div class="or_top">
        <Back class="or_top_back"></Back>
        <p>订单</p>
        <img src="../assets/img/pic042.jpg" alt="">
    </div>
</div>
   
</template>

<script>
import Back from './Back';

export default {
    name:"orderHeader",
     data(){
        return {
        }
    },
    components:{
        Back
    }
}
</script>

<style scoped>
.or_top{
    width:100%;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    position: relative;
}
.or_top p{
    font-size: .14rem;
    font-weight: bolder;
    color:#000000;
}
.or_top img{
    width:.79rem;
    height: .29rem;
    position: absolute;
    right: .05rem;
    top:.05rem;
}
.or_top_back{
    position: absolute;
    left: 0;
    top: 0;
}
</style>