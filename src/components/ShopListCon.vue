<template>
    <div class="sh_con_box">   
        <!--<div class="nav">
            <div class="navLe">
                <span class="paixu">综合排序</span>
                <i class="el-icon-arrow-down"></i>
            </div>
            <div class="paiBox">
                <div class="navMid">
                    <span>速度</span>
                    <i class="el-icon-arrow-down"></i>
                </div>
                <div class="navR">
                    <span>全部筛选</span>
                    <i class="el-icon-arrow-down"></i>
                </div>
            </div>
            
        </div>
        <div class="juan">
            <p>
                <img src="../assets/img/pic006.jpg" alt="">
            </p>
            <p>满减优惠</p>
            <p>减配送费</p>
            <p>津贴联盟</p>
        </div>-->
        <ul class="shop_content_uls">
            <li v-for="(shop,index) in shops" :key="index">
                <div class="imgBox">
                    <img :src="shop.img" alt="">
                </div>
                <div class="imgDetil">
                    <p class="iconP">
                        <span class="shopName">{{shop.name}}</span>
                        <span class="iconfont icon-gengduo"></span>
                
                    </p>
                    <div class="shouChu">
                        <div class="shouL">
                            <img src="../assets/img/pic017.jpg" alt="">
                            <span class="pingFen">{{shop.score}}</span>
                            <span>月售{{shop.monthSale}}</span>
                        </div>
                        <div class="shouR">
                            <span>{{shop.minutes}}分钟</span>
                            <span>{{shop.distance}}km</span> 
                        </div>
                        
                    </div>
                    <div class="shouChu">
                        <span>起送 ￥0</span>
                        <span>配送 ￥{{shop.delivery}}</span>
                        <span>人均 ￥{{shop.percost}}</span>
                    </div>
                    <ul class="manjian">
                        <li>60减8</li>
                        <li>89减25</li>
                        <li>4.96折起</li>
                        <li>首单减13</li>
                        <li>票</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"ShopListContent",
	    data(){
	        return {
	            shops:[
	                
	            ]
	        }
	    },
	    created(){
//		    axios.get('api/shops')
//		    .then((response)=> {
//		        console.log(response.data);
//		        this.shops = response.data;
//		    })
//		    .catch(function (error) {
//		        console.log(error);
//		    });
	  	},
	
	}
</script>

<style scoped>
	.sh_con_box{
	    width: 96%;
	    margin:0 auto;
	}
	.nav{
	    width: 100%;
	    height: .36rem;
	    margin-top: .12rem;
	    display:flex;
	    align-items: center;
	    justify-content: space-between;
	}
	.nav span{
	    font-size: .12rem;
	    color:#666;
	    margin-right: .1rem;
	}
	.nav .paixu{
	    font-weight: border;
	    color:#32312d;
	}
	.paiBox .navMid{
	    float: left;
	    margin-right: .34rem;
	}
	.paiBox .navR{
	    float: right;
	}
	.juan{
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.juan p,img{
	    width:.8rem;
	    height: .31rem;
	    font-size: .12rem;
	    color:#656460;
	    background: #f8f8f6;
	    border-radius: .05rem;
	    text-align: center;
	    line-height: .31rem;
	}
	.shop_content_uls{
	    width: 100%;
	    margin-top:.22rem;
	}
	.shop_content_uls>li{
	    margin-bottom: .34rem;
	}
	.shop_content_uls li .imgBox img{
	     width:.80rem;
	    height: .60rem;
	}
	.shopName{
	    font-size: .16rem;
	    color:#32312d;
	    font-weight: bolder;
	    float: left;
	}
	.imgBox{
	   
	    float: left;
	}
	.imgDetil{
	    overflow: hidden;
	    padding-left: .08rem;
	}
	.shopName{
	    float: left;
	}
	.iconfont{
	    float: right;
	    vertical-align: middle;
	
	}
	.shouChu{
	    clear: both;
	    padding:.08rem 0;
	}
	.shouChu img{
	    display: inline-block;
	    width:.15rem;
	    height: .15rem;
	}
	.pingFen{
	    font-size: .14rem;
	    color:#fea611;
	    margin-right: .1rem;
	}
	.shouChu span{
	    font-size: .12rem;
	    color:#757470;
	}
	.shouChu span:nth-child(2){
	    margin:0 .05rem;
	}
	.shouL{
	    float: left;
	}
	.shouR{
	    float: right;
	}
	.shouR span:first-child{
	    margin-right:.1rem;
	}
	.west img{
	    width:.14rem;
	    height: .14rem;
	    float: left;
	    margin-right: .05rem;
	}
	.west span{
	    font-size: .12rem;
	    color:#333333;
	    float: left;
	}
	.manjian{
	    width: 100%;
	    display:flex;
	    justify-content: space-around;
	    margin-bottom: .1rem;
	}
	.manjian li{
	    height: .16rem; 
	    border:1px solid #ead0cf;
	    text-align: center;
	    border-radius: .05rem;
	    line-height: .16rem;
	    padding:.02rem;
	    font-size: .1rem;
	    color:#f2544b;
	}
	.manjian li:last-child{
	    color:#646361;
	}
	.hui_uls{
	    display:flex;
	    overflow-x: auto;
	}
	.hui_uls li{
	    margin-right: .08rem;
	    text-align: center;
	}
	.hui_uls li img{
	    width:.78rem;
	    height: .78rem;
	    margin-bottom: .1rem;
	}
	.hui_uls li p{
	    font-size: .14rem;
	    color:#323232;
	}
	.hui_uls li span{
	    font-size: .14rem;
	    color:#fb4f45;
	    font-weight: bolder;
	}
</style>                          