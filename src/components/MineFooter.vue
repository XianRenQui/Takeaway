<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 17:19:07
 -->
<template>
<div class="MineFooterBox">
    <ul class="Mine_footer_uls">
    	<li>
        	<router-link to='/'>
	            <img src="../assets/img/pic047.jpg" alt="">
	            <span>首页</span>
            </router-link>
        </li>
         <li>
         	<router-link to='/Vip'>
	            <img src="../assets/img/pic048.jpg" alt="">
	            <span>会员</span>
            </router-link>
        </li>
         <li>
            <router-link to='/orderPage'>
                <img src="../assets/img/pic049.jpg" alt="">
                <span>订单</span>
            </router-link>
        </li>
         <li>
            <router-link to='/MinePage'>
                <img src="../assets/img/pic046.jpg" alt="">
                <span>我的</span>
            </router-link>
        </li>
    </ul>
</div>
   
</template>

<script>
export default {
    name:"orderHeader",
    data(){
        return {
        }
    }

}
</script>

<style scoped>
.Mine_footer_uls{
    display: flex;
    height: .56rem;
    background: #fbfcff;
    justify-content: space-around;
    align-items: center;
}
.Mine_footer_uls li{
    text-align: center;
}
li img{
    width:.26rem;
    height: .26rem;
    margin-bottom: .05rem;
}
span{
    font-size: .12rem;
    color:#9a9b9d;
}
</style>