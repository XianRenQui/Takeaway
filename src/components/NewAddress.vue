<!--
 * @Descripttion: 我的地址_头部
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 14:28:19
 * @version: v1.0.0
 -->
<template>
    <div class="Big">
        <div class="Address_new">
            <img class="img_01" src="../assets/img/return.png" alt="" @click="back()">
            <b>新增收货地址</b>
        </div>
        <ul>
            <li>
                收货地址：<i class="el-icon-location-outline">&nbsp;点击选择</i>
                <i class="el-icon-arrow-right" style="float:right;"></i>
            </li>
              <li>
                门牌号：<input type="text" placeholder="【详细地址，例1层101室】">
            </li>
            <li>
                联系人：<input type="text" placeholder=" 请填写收货人的姓名">
            </li>
            <li style="text-align: center;">
               <input class="radio" type="radio" name="a" checked>先生
               <input style="margin-left:.3rem;" class="radio" type="radio" name="a">女士
            </li>
            <li>
                手机号：<input type="text" placeholder=" 请填写收货手机号码">
            </li>
            <li style="border:none;padding:10px;line-height: .55rem;">
                标签：<span style="margin-right:.8rem">学校</span><span>公司</span><span>家</span>
            </li>
            <el-button class="btn" type="warning">保存地址</el-button>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
            
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
    
    }
}
</script>
  
<style scoped>
   .Address_new{
       width: 96%;
       height: .3rem;
       background: #fafafa;
       margin:0 auto;
       padding: 3% 2%;
       z-index: 3;
       text-align: center;
   }
    .img_01{
        width: .3rem;
        height: .3rem;
       display: block;
       float: left;
   }
    .Address_new b{
        font-size: .18rem;
        line-height: .3rem;
    }
    ul{
        width: 96%;
        margin: 0 auto;
    }
    ul li{
        width: 100%;
        height: .5rem;
        display: block;
        font-size: .15rem;
        line-height: .4rem;
        border-bottom: 2px solid #e4e4e4;
        color:#333;
    }
    .el-icon-location-outline,.el-icon-arrow-right{
        font-size: .15rem;
        line-height: .5rem;
        color: #999;
        text-indent: .1rem;
    }
     ul li input{
        width: 83%;
        height: 100%;
        font-size: .15rem;
        line-height: .5rem;
        color:#333;
        border:none;
        outline: none;
        text-indent: .1rem;
    }
     ul li span{
        width: .55rem;
        height: 55%;
        font-size: .15rem;
        color:#333;
        border:1px solid #d6d6d6;
        display:block;
        line-height: .3rem;
        float: right;
        text-align: center;
        margin: .1rem .1rem;
    }
    .btn{
        width: 96%;
        margin:0 auto;
        color: #333;
        margin-top: .3rem;
    }
    ul>li .radio{
        width: .1rem;
        height: .1rem;
        margin: 0 5px;
    }
</style>