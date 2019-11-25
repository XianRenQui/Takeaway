<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 14:41:21
 -->
<template>
    <div class="mine_content">
        <div class="mine_banner">
            <img src="../assets/img/banner4.jpg" alt="">
        </div>
        <div class="content_first">
            <div class="min_con_top">
                <p>我的资产</p>
            </div>
            <ul class="mine_uls">
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic023.jpg" alt="">
                        </li>
                        <li class="hongbao">红包</li>
                        <li class="use">0个未使用</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic022.jpg" alt="">
                        </li>
                        <li class="hongbao">红包</li>
                        <li class="use">0个未使用</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic021.jpg" alt="">
                        </li>
                        <li class="hongbao">红包</li>
                        <li class="use">0个未使用</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic023.jpg" alt="">
                        </li>
                        <li class="hongbao">红包</li>
                        <li class="use">0个未使用</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic024.jpg" alt="">
                        </li>
                        <li class="hongbao">红包</li>
                        <li class="use">0个未使用</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="content_first">
            <div class="min_con_top">
                <p>我的资产</p>
            </div>
            <ul class="mine_uls">
                <li class="ul_ge">
                    <ul>
                    	<router-link to='/Address'>
	                        <li>
	                            <img src="../assets/img/pic025.jpg" alt="">
	                        </li>
	                        <li class="hongbao">我的地址</li>
                        </router-link>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic026.jpg" alt="">
                        </li>
                        <li class="hongbao">我的足迹</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                    	<router-link to='/Collection'>
	                        <li>
	                            <img src="../assets/img/pic027.jpg" alt="">
	                        </li>
	                        <li class="hongbao">我的收藏</li>
                        </router-link>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic032.jpg" alt="">
                        </li>
                        <li class="hongbao">答谢记录</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic028.jpg" alt="">
                        </li>
                        <li class="hongbao">我的评价</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="content_first">
            <div class="min_con_top">
                <p>我的服务</p>
            </div>
            <ul class="mine_uls">
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic033.jpg" alt="">
                        </li>
                        <li class="hongbao">帮助与反馈</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic034.jpg" alt="">
                        </li>
                        <li class="hongbao">客服中心</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic035.jpg" alt="">
                        </li>
                        <li class="hongbao">分类助手</li>
                    </ul>
                </li>
            </ul>
        </div>
         <div class="content_first">
            <div class="min_con_top">
                <p>更多推荐</p>
            </div>
            <ul class="mine_uls">
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic025.jpg" alt="">
                        </li>
                        <li class="hongbao">邀请有奖</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic026.jpg" alt="">
                        </li>
                        <li class="hongbao">商家入驻</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic027.jpg" alt="">
                        </li>
                        <li class="hongbao">骑手招募</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic032.jpg" alt="">
                        </li>
                        <li class="hongbao">我要合作</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic028.jpg" alt="">
                        </li>
                        <li class="hongbao">美团公益</li>
                    </ul>
                </li>
                <li class="ul_ge">
                    <ul>
                        <li>
                            <img src="../assets/img/pic028.jpg" alt="">
                        </li>
                        <li class="hongbao">能量捐赠</li>
                    </ul>
                </li>
            </ul>
        </div>
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
.mine_banner{
    width: 3.5rem;
    margin:0 auto;
}
.mine_banner img{
    width: 100%;
    height: .7rem;
    margin-bottom: .16rem;

}
.content_first{
    width:95%;
    background: #fff;
    margin:0 auto;
    border-radius: .1rem;
    padding-left: .16rem;
    box-sizing: border-box;
}
.min_con_top{
    height: .53rem;
    line-height: .53rem;
}
.min_con_top span{
    font-size: .16rem;
    color:#32312d;
}
.mine_uls{
    display: -webkit-flex;
    justify-content:flex-start;
    flex-wrap: wrap;
}
.mine_uls img{
    width:.29rem;
    height: .29rem;
    margin-bottom: .16rem;
    margin: 0 auto;
}
.mine_uls .ul_ge{
    width: 25%;
    text-align: center;
    margin-bottom: .2rem;
}
.mine_uls li .hongbao{
    font-size: .12rem;
    color:#31322d;
    line-height: .12rem;
    margin-top: .14rem;
    margin-bottom: .14rem;
}
.mine_uls li .use{
    font-size: .12rem;
    color:#979692;
}
.content_first{
    margin-bottom: .16rem;
}

</style>