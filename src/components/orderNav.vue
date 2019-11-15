<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-14 19:10:45
 -->
<template>
<div class="orderNavBox">
    <div class="order_nav">
        <ul class="order_uls">
            <li class="dingdan">
                全部订单
            </li>
            <li>
                待评价
            </li>
            <li>
                退款
            </li>
        </ul>
    </div>
    <div class="order_content">
        <div class="order_con_first">
            <ul class="order_conR">
                <li class="con_first_li">
                    <div class="con_fTop">
                        <img src="../assets/img/pic062.jpg" alt="">
                        <div>
                            <span class="order_name">东北八福水饺（高新店）</span>
                            <i class="el-icon-arrow-right"></i> 
                        </div>
                    </div>
                    
                    <span class="quxiao">已取消</span>
                </li>
                <li class="order_conM">
                    <img src="../assets/img/pic061.jpg" alt="">
                    <span>莲菜大肉饺子30只+蘸料</span>
                </li>
                <li class="fukuan">
                    共1件
                    <span>￥11.9</span>
                </li>
                 <li class="order_but">
                    <input type="button" value="再来一单">
                </li>
            </ul>
        </div>
        <div class="order_con_first">
            <ul class="order_conR">
                <li class="con_first_li">
                    <div class="con_fTop">
                        <img src="../assets/img/pic063.jpg" alt="">
                        <div>
                            <span class="order_name">响当当烤肉饭（高新店）</span>
                            <i class="el-icon-arrow-right"></i> 
                        </div>
                    </div>
                    
                    <span class="quxiao">订单已完成</span>
                </li>
                <li class="order_conM">
                    <img src="../assets/img/pic058.jpg" alt="">
                    <span>莲菜大肉饺子30只+蘸料</span>
                </li>
                <li class="fukuan">
                    共1件
                    <span>￥11.9</span>
                </li>
                 <li class="order_but">
                    <input type="button" value="再来一单">
                </li>
            </ul>
        </div>
    </div>
</div>
   
</template>

<script>
export default {
    name:"orderNav",
    data(){
        return {
        }
    }

}
</script>

<style scoped>
.order_uls{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: .45rem;
    border-bottom: 1px solid #e4e4e4;
}
.order_uls .dingdan{
    font-size: .14rem;
    color:#f3b33e;
    font-weight: bolder;
}
.order_uls li{
    font-size: .14rem;
    color:#666666;
}
.order_content{
    width: 100%;
    min-height: 5.2rem;
    padding-top:.02rem;
    border-bottom: .01rem solid #e4e4e4;
    background: #f2f2f2;
}
.order_conR img{
    width:.42rem;
    height: .42rem;
}
.order_conR .con_fTop img{
    margin-right: .1rem;
}
.order_conL{
    float: left;
}
.order_conR{
    padding-left: .05rem;
    padding-right: .05rem;
    overflow: hidden;
}
.order_conR .order_name{
    font-size: .14rem;
    font-weight: 900;
    color:#333;
}
.order_con_first{
    width:95%;
    margin:.0 auto;
    background: #fff;
    border-radius: .05rem;
    margin-top: .05rem;
    padding-left:.1rem;
    padding-right:.1rem;
    box-sizing: border-box;
    padding-top: .1rem;
}
.con_first_li{
    height:.49rem;
    /* border-bottom: 1px solid #e4e4e4; */
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.con_first_li img{
    margin-right: .02rem;
}
.order_conR li{
    display: flex;
    justify-content: space-between;
    line-height: .25rem;
}
li span{
    font-size: .14rem;
    color:#666;
}
.order_conR .fukuan{
    font-size: .12rem;
    justify-content:flex-end;
    color:#666666;
}
.order_conR .fukuan span{
   color:#151515;
    font-weight: 800;
}
.order_conR .order_but{
    justify-content:flex-end;
    margin-top: .1rem;
    margin-bottom: .1rem;
}
.order_but input{
    width:.84rem;
    height: .35rem;
    border: none;
    background: #fff;
    color:#333333;
    border:1px solid #dedede;
    border-radius: .04rem;
}
.order_conR .order_conM{
    display: flex;
    justify-content:flex-start;
    margin-top: .1rem;
}
.order_conM{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order_conM img{
    width:.82rem;
    height: .62rem;
    margin-right: .1rem;
}
.quxiao{
    color:#242424;
}

.con_fTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>