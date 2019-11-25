<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-12 16:29:49
 -->
<template>
<div class="mineBox">
    <div class="mine_header">
        <div class="touXiang">
            <router-link to='/Login'><img src="../assets/img/pic031.jpg" alt=""></router-link>
            <router-link to='/Login'><span>去登录</span></router-link>
        </div>
        <div class="news">
            <img class="newImg" src="../assets/img/pic029.jpg" alt="">
            <img src="../assets/img/pic030.jpg" alt="">
        </div>
    </div>
    <!-- <div class="mine_banner">
        <img src="../assets/img/banner4.jpg" alt="">
    </div> -->
</div>
   
</template>

<script>
export default {
    name:"MineHeader",
    data(){
        return {
        }
    }

}
</script>

<style scoped>
.mineBox{
    background: #fbfbfb;
    border-bottom-left-radius: .05rem;
    border-bottom-right-radius: .05rem;
}
.mine_header{
    width: 95%;
    height: 1.02rem;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.touXiang{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.touXiang img{
    width:.53rem;
    height: .53rem;
    margin-right: .12rem;
}
.touXiang span{
    font-size: .16rem;
    color:#333333;
}
.news img{
    width:.23rem;
    height: .23rem;
    float: left;
}
.news .newImg{
    margin-right: .27rem;
}


</style>