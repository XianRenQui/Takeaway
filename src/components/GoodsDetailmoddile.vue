<!--
 * @Descripttion: 商品详情
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-14 16:03:24
 * @version: v1.0.0
 -->
<template>
    <div class="GoodsDetail" >
        <div class="Detail">
            <ul class="nav">
                <li style="margin-left:0;color:#333;border-bottom:1px solid #ffcf5c;">详情</li>
                <li>评价</li>
                <li>搭配</li>
            </ul>
            <div class="description">
                <span>掌柜描述：</span>
                <p>只有肥瘦，纯瘦清点优质夹馍</p>
            </div>
        </div>
        <div class="comment">
            <div class="commentTop">
                <h6>外卖评价</h6>
                <span>(100%好评)</span>
                <i class="el-icon-arrow-right"></i>
                <span style="float:right;">242评论</span>
            </div>
            <ul class="GoodsDlist">
                <li>有图5</li>
                <li>
                    <img src="../assets/img/like.png" alt="">214
                </li>
                <li style="background:#f1f1f1;">
                    <img src="../assets/img/despise.png" alt="">12
                </li>
                <li>100%人认为与图片相符</li>
                <li>88%人认为分量适中</li>
                <li>100%人认为食料新鲜</li>
                <li>88%人认为口味满意</li>
                <li>100%人认为干净卫生</li>
            </ul>
            <ul class="CustomerReviews">
                <li>
                    <img src="../assets/img/ad_1.jpg" alt="">
                    <div class="content">
                        <p style="font-size:.12rem;color:#999;line-height:.15rem;">ajew1694223685</p>
                        <p>速度挺快的，而且味道也不错</p>
                    </div>
                    <span>2019.11.11</span>
                </li>
                 <li>
                    <img src="../assets/img/ad_1.jpg" alt="">
                    <div class="content">
                        <p style="font-size:.12rem;color:#999;line-height:.15rem;">ajew1694223685</p>
                        <p>速度挺快的，而且味道也不错</p>
                    </div>
                    <span>2019.11.11</span>
                </li>
                 <li>
                    <img src="../assets/img/ad_1.jpg" alt="">
                    <div class="content">
                        <p style="font-size:.12rem;color:#999;line-height:.15rem;">ajew1694223685</p>
                        <p>速度挺快的，而且味道也不错</p>
                    </div>
                    <span>2019.11.11</span>
                </li>
                <p>
                    242条外卖评价
                    <i class="el-icon-arrow-right"></i>
                </p>       
            </ul>
        </div>
        <div class="Match">
            <h6>优惠搭配</h6>
            <ul>
                <li>
                    <div class="MatchTop">
                         <div class="MatchLeft">
                            <img src="../assets/img/product5.jpg" alt="">
                            <p>肉夹馍（肥瘦）</p>
                            <span>￥12</span>
                        </div>
                        <div class="MatchRight">
                            <img src="../assets/img/product5.jpg" alt="">
                            <p>肉夹馍（肥瘦）</p>
                            <span>￥12</span>
                        </div>
                    </div>
                    <ul class="MatchBottom">
                        <li style="line-height: .45rem;">1人套餐</li>
                        <li>实付
                            <p>￥28</p>
                            <span>立即购买</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="MatchTop">
                         <div class="MatchLeft">
                            <img src="../assets/img/product5.jpg" alt="">
                            <p>肉夹馍（肥瘦）</p>
                            <span>￥12</span>
                        </div>
                        <div class="MatchRight">
                            <img src="../assets/img/product5.jpg" alt="">
                            <p>肉夹馍（肥瘦）</p>
                            <span>￥12</span>
                        </div>
                    </div>
                    <ul class="MatchBottom">
                        <li style="line-height: .45rem;">1人套餐</li>
                        <li>实付
                            <p>￥28</p>
                            <span>立即购买</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"GoodsDetailTop",
    data(){
        return{
            
        }
    },
     methods:{
     
    }
}
</script>
  
<style scoped>
    .GoodsDetail{
        background: #f1f1f1;
    }
    .Detail{
        width: 100%;
        background: #fff;
        margin-bottom: .1rem;
    }
    .nav{
        width: 96%;
        height: .35rem;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
    }
    .nav>li{
        height: 100%;
        font-size: .14rem;
        line-height: .4rem;
        margin: 0 .2rem;
        color: #666;
        display: block;
    }
    .description{
        width: 96%;
        margin: 0 auto;
        padding: 3% 0;
        display: flex;
        justify-content: flex-start;
        font-size: .13rem;
    }
    .description span{
        color: #999;
    }
    .description p{
        color: #333;
        margin-left: 14px;
    }
    .comment{
        width: 100%;
        background: #fff;
        padding-bottom: 10px;
    }
    .commentTop{
        width: 96%;
        height: .4rem;
        margin: 0 auto;
    }
    .commentTop h6{
        font-size: .2rem;
        font-family: "楷体";
        line-height: .4rem;
        display: inline-block;
        color: #333;
        margin-right: 5px;
    }
    .commentTop span{
        font-size: .15rem;
        line-height: .4rem;
        color: #666;
    }
    .el-icon-arrow-right{
        float: right; 
        font-size: .15rem;
        line-height: .4rem;
        color: #666;
        margin-left: 10px;
    }
    .GoodsDlist{
        width: 94%;
        height: .9rem;
        margin: 5px auto .3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-size: .13rem;
    }
    .GoodsDlist li{
        height: .23rem;
        background: #fed97a;
        display: inline-block;
        padding: 0 7px;
        border-radius: 4px;
        margin:3px;
        color: #444;
        line-height: .23rem;
    }
    .GoodsDlist li img{
        width: .15rem;
        height: .15rem;
    }
    .CustomerReviews{
        width: 94%;
        margin: 0 auto;
    }
    .CustomerReviews li{
        width: 100%;
        height: .7rem;
        display: flex;
        justify-content: flex-start;
    }
    .CustomerReviews li img{
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        border: 2px solid rgb(185, 185, 185);
    }
    .content{
        width: 65%;
        height: 100%;
        margin-left: 5px;
    }
    .content p{
        font-size: .13rem;
        color: #444;
        line-height: .35rem;
    }
    .CustomerReviews li span{
        font-size: .12rem;
        color: #999;
    }
    .CustomerReviews>p{
        width:100%;
        font-size:.13rem;
        color:#444;
        text-align: center;
        height: .4rem;
        background: #f1f1f1;
        line-height: .4rem;
    }
    .CustomerReviews>p>.el-icon-arrow-right{
        float: none;
    }
    .Match{
        width: 100%;
        background: #fff;
    }
    .Match h6{
        font-size: .22rem;
        font-family: "楷体";
        line-height: .4rem;
        color: #333; 
        width: 94%;
        margin: 10px auto 10px;
    }
    .Match>ul{
        width: 94%;
        margin: 10px auto;
    }
    .Match>ul>li{
        width: 100%;
        height: 1.8rem;
        margin-top: 10px;
    }
    .MatchTop{
        width: 100%;
        height: 75%;
        display: flex;
        justify-content: space-between;
    }
    .MatchLeft{
        width: 49%;
        height: 100%;
    }
    .MatchRight{
        width: 49%;
        height: 100%;
    }
    .Match>ul>li img{
        width: 100%;
        height: 75%;
        border-radius: 10px;
    }
    .Match>ul>li  p{
        font-size: .13rem;
        color: #666;
        line-height: .16rem;
    }
    .Match>ul>li span{
        font-size: .13rem;
        color: #333;
        line-height: .13rem;
    }
    .MatchBottom{
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-between;
    }
    .MatchBottom li{
        display: flex;
        justify-content: space-between;
        font-size: .13rem;
        line-height: .45rem;
    }
    .Match .MatchBottom li p{
        font-size: .15rem;
        line-height: .45rem;
        color: #ee535b;
        margin: 0 5px;
    }
    .Match .MatchBottom li span{
        font-size: .13rem;
        line-height: .45rem;
        color: #333;
        display: block;
        width: 1rem;
        height: 70%;
        background: #ffd06a;
        line-height: .31rem;
        text-align: center;
        margin-top: 3%;
        border-radius: .18rem;
    }
</style>