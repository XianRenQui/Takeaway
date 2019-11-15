<!--
 * @Descripttion: 我的地址_地址列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 15:56:11
 * @version: v1.0.0
 -->
<template>
    <div class="Address_list">
        <img src="../assets/img/address.jpg" alt="">
        <ul style="display:none">
            <li>
                <div class="left">
                    <div class="top">
                        <span>公司</span>
                        <b>立人科技园</b>
                        <b>C座1教室</b>
                    </div>
                    <div class="bottom">
                        <span>1908</span>
                        <span>先生</span>
                        <span>15095436319</span>
                    </div>
                </div>
                <router-link to="/NewAddress"> <i class="el-icon-edit-outline"></i></router-link>
            </li>
             <li>
                <div class="left">
                    <div class="top">
                        <span>公司</span>
                        <b>立人科技园</b>
                        <b>C座1教室</b>
                    </div>
                    <div class="bottom">
                        <span>1908</span>
                        <span>先生</span>
                        <span>15095436319</span>
                    </div>
                </div>
                <router-link to="/NewAddress"> <i class="el-icon-edit-outline"></i></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"AddressList",
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
    .Address_list{
        width: 96%;
        margin: 0 auto;
        padding-top: 14px;
    }
     .Address_list img{
         width: 100%;
         margin-top: 1rem;
     }
    .Address_list ul{
        width: 100%;
    }
    .Address_list ul li{
        width: 100%;
        height: .5rem;
        border-bottom:  2px solid #e4e4e4; 
        position: relative;
        padding-top: 14px;
    }
    .left{
        width: 90%;
        height: 100%;
    }
    .left .top{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: flex-start;
    }
    .left .top span{
        display: block;
        width: .3rem;
        height: .15rem;
        background: #e2eefb;
        color: #659be6;
        font-size: 12px;
        text-align: center;
        line-height: .15rem;
    }
    .left .top b{
        display: block;
        font-size: .14rem;
        line-height: .17rem;
        text-align: center;
        margin-left: 10px;
    }
     .left .bottom{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: flex-start;
    }
    .left .bottom span{
        display: block;
        font-size: .14rem;
        line-height: .17rem;
        text-align: center;
        margin-right: 10px;
    }
    .el-icon-edit-outline{
        font-size: .2rem;
        float: right;
        position: absolute;
        right: 1%;
        top:40%;
    }
</style>