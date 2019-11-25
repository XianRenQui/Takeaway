<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 14:04:58
 -->
<template>
    <div class="shop_box">   
        <div class="top">
            <Back class="backL"></Back>
            <img src="../assets/img/pic015.jpg" alt="">
            <Search2 class="shop_Search"></Search2>
        </div>
        <div class="header">
            <img src="../assets/img/banner.jpg" alt="">
            <p>新品尝鲜土豆猪肘</p>
            <div class="banListBox">
                <div class="banList">
                    <img src="../assets/img/pic001.jpg" alt="">
                    <p>酱烧鸡腿饭</p>
                    <span>￥12.99</span>
                    <del>￥25.49</del>
                </div>
                <div class="banList">
                    <img src="../assets/img/pic001.jpg" alt="">
                    <p>酱烧鸡腿饭</p>
                    <span>￥12.99</span>
                    <del>￥25.49</del>
                </div>
                <div class="banList">
                    <img src="../assets/img/pic001.jpg" alt="">
                    <p>酱烧鸡腿饭</p>
                    <span>￥12.99</span>
                    <del>￥25.49</del>
                </div>
            </div>
            
        </div>
        <div class="tuiJ">
            <span class="today">今日套餐推荐</span>
            <div class="todoL">
                <span>60个</span>
                <span>
                    <i class="el-icon-arrow-right" @click="back()"></i>
                </span>
            </div>
            
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="tuiDetil">
                        <img src="../assets/img/pic003.jpg" alt="">
                        <div class="detil">
                            <p>双拼套饭（黑椒嫩排+香辣鸡排）</p>
                            <div class="niupai">
                                <img src="../assets/img/pic016.jpg" alt="">
                                <p class="yueshang">约尚臻品 牛排饭</p>
                            </div>
                            <div class="priceLe">
                                <span class="yueshang">实付</span>
                                <span class="xianPri">￥17.9</span>
                                <del class="yueshang">￥30.4</del>
                            </div>
                            <input type="button" value="下单">
                        </div>
                    
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tuiDetil">
                        <img src="../assets/img/pic003.jpg" alt="">
                        <div class="detil">
                            <p>双拼套饭（黑椒嫩排+香辣鸡排）</p>
                            <div class="niupai">
                                <img src="../assets/img/pic016.jpg" alt="">
                                <p class="yueshang">约尚臻品 牛排饭</p>
                            </div>
                            <div class="priceLe">
                                <span class="yueshang">实付</span>
                                <span class="xianPri">￥17.9</span>
                                <del class="yueshang">￥30.4</del>
                            </div>
                            <input type="button" value="下单">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tuiDetil">
                        <img src="../assets/img/pic003.jpg" alt="">
                        <div class="detil">
                            <p>双拼套饭（黑椒嫩排+香辣鸡排）</p>
                            <div class="niupai">
                                <img src="../assets/img/pic016.jpg" alt="">
                                <p class="yueshang">约尚臻品 牛排饭</p>
                            </div>
                            <div class="priceLe">
                                <span class="yueshang">实付</span>
                                <span class="xianPri">￥17.9</span>
                                <del class="yueshang">￥30.4</del>
                            </div>
                            <input type="button" value="下单">
                        </div>
                    
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tuiDetil">
                        <img src="../assets/img/pic003.jpg" alt="">
                        <div class="detil">
                            <p>双拼套饭（黑椒嫩排+香辣鸡排）</p>
                            <div class="niupai">
                                <img src="../assets/img/pic016.jpg" alt="">
                                <p class="yueshang">约尚臻品 牛排饭</p>
                            </div>
                            <div class="priceLe">
                                <span class="yueshang">实付</span>
                                <span class="xianPri">￥17.9</span>
                                <del class="yueshang">￥30.4</del>
                            </div>
                            <input type="button" value="下单">
                        </div>
                    
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tuiDetil">
                        <img src="../assets/img/pic003.jpg" alt="">
                        <div class="detil">
                            <p>双拼套饭（黑椒嫩排+香辣鸡排）</p>
                            <div class="niupai">
                                <img src="../assets/img/pic016.jpg" alt="">
                                <p class="yueshang">约尚臻品 牛排饭</p>
                            </div>
                            <div class="priceLe">
                                <span class="yueshang">实付</span>
                                <span class="xianPri">￥17.9</span>
                                <del class="yueshang">￥30.4</del>
                            </div>
                            <input type="button" value="下单">
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        <ul class="shop_uls">
            <li>
                <img src="../assets/img/pic011.jpg" alt="">
                <span>汉堡薯条</span>
            </li>
            <li>
                <img src="../assets/img/pic012.jpg" alt="">
                <span>暖胃粉丝汤</span>
            </li>
            <li>
                <img src="../assets/img/pic013.jpg" alt="">
                <span>意面披萨</span>
            </li>
            <li>
                <img src="../assets/img/pic010.jpg" alt="">
                <span>地方菜系</span>
            </li>
            <li>
                <img src="../assets/img/pic010.jpg" alt="">
                <span>地方菜系</span>
            </li>
            <li>
                <img src="../assets/img/pic010.jpg" alt="">
                <span>地方菜系</span>
            </li>
            <li>
                <img src="../assets/img/pic010.jpg" alt="">
                <span>地方菜系</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios';
import Search2 from './Search2';
import Back from './Back';

export default {
    name:"ShopList",
    data(){
        return {
        }
    },
    components:{
        Back,Search2
    },
    mounted(){
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 5,
            loop: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    }
}
</script>

<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);

.top{
    width:100%;
    height: .5rem;
    background: #ff882a;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.top img{
    width:.47rem;
    height:.22rem;
}
.shop_Search{
    width:2.78rem;
    background: #ff9d54;
}
.top .backL>i{
    font-size:.25rem;
    color:#fff;
}
.header{
    width:95%;
    margin:0 auto;
    margin-top: .18rem;
    box-shadow: 0 0 .08rem .05rem #f0efef;
}
.header img{
    width:100%;
}
.header p{
    margin-top:.11rem;
    margin-bottom:.1rem; 
    font-size: .16rem;
    color:#333333;
}
.banListBox{
    width:100%;
    display: -webkit-flex;
    justify-content: space-around;
}
.banList{
    width:1.04rem;
}
.banList img{
    width:1.04rem;
    height:.78rem;
}
.banList p{
    font-size: .12rem;
    color:#363531;
}
.banList span{
    color:#fc5147;
    font-size: .14rem;
    font-weight: bolder;
}
del{
    font-size:.12rem;
    color:#999;
}
.tuiJ{
    width:94%;
    margin:0 auto;
    margin-top:.07rem;
    height:.42rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tuiJ i{
    font-size:.18rem;
    vertical-align: middle;
}
.tuiJ .today{
    font-size: .16rem;
    color: #333333;
    font-weight: bolder;
}
.tuiDetil img{
    width: 100%;
}
.tuiDetil p{
    font-size: .12rem;
    color:#333;
    font-weight: bolder;
    line-height: .12rem;
    margin-bottom: .12rem;
    margin-top: .12rem;
}
.niupai img{
    width:.13rem;
    height:.12rem;
    float: left;
    margin-right:.08rem;
}
.niupai span{
    float: left;
}
.detil .yueshang{
    font-weight:normal;
    color:#999;
    font-size: .12rem;
}
.detil{
    /* text-indent: .1rem; */
    padding-left: .1rem;
}
.detil .xianPri{
    font-size: .16rem;
    color:#fb4f45;
    font-weight: bolder;
}
.priceLe{
    float: left;
}
input{
    float: right;
    background: #ffcb51;
    border:none;
    color:#333333;
    width: .38rem;
    height: .26rem;
}

.shop_uls{
    width: 100%;
    height:.88rem;
    border-bottom: 1px solid #f4f4f4;
    display: -webkit-flex;
    align-items: center;
    overflow-x:auto;
}
.shop_uls li{
    text-align: center;
    margin:0 .08rem;
    flex-shrink: 0;
}
.shop_uls li img{
    width:.46rem;
    height: .46rem;
}
.shop_uls li span{
    font-size: .12rem;
    color:#6e7176;
}

.swiper-container {
    width:100%;
}
.swiper-slide {
    width:2.18rem;
    margin:.02rem;
    
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
}
.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
}
</style>                          