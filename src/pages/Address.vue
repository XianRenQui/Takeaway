<!--
 * @Descripttion: 地址
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-15 17:23:59
 * @version: v1.0.0
 -->
<template>
    <div>
        <!-- AddressHead -->
        <div class="Address_nev">
            <i class="el-icon-back" @click="back()"></i>
            <span>&nbsp; |&nbsp;&nbsp; 我的收货地址</span>
            <router-link to="/NewAddress"><span class="sc_edit">新增地址</span></router-link>
        </div>
        <!-- AddressList -->
        <div class="Address_list">
            <img style="display:none" src="../assets/img/address.jpg" alt="">
            <ul>
                <li v-for="(addr,index) in address" :key="index">
                     
                    <div class="left">
                        <div class="top">
                            <span>公司</span>
                            <b>{{addr.addr}}</b>
                        </div>
                        <div class="bottom">
                            <span>{{addr.user}}</span>
                            <span>{{addr.sex}}</span>
                            <span>{{addr.atel}}</span>
                        </div>
                    </div>
                    <router-link to="/NewAddress"> <i class="el-icon-edit-outline"></i></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

// import AddressHead from '../components/AddressHead';
// import AddressList from '../components/AddressList';

export default {
    name:"Search",
    data(){
        return {
            address:[
                
            ]
        }
    },
    created(){
    // axios.get('/shop/selectAll')
    axios.get('/address')
    .then((response)=> {
        this.address = response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
  },
     methods:{
      back(){
          this.$router.go(-1);
      }
    }
}
</script>

<style scoped>
/* AddressHead */
  .Address_nev{
       width: 96%;
       height: .4rem;
       background: #f6f6f6;
       margin:0 auto;
       padding: 0 2%;
       background: #fff;
       z-index: 3;
   }
   .el-icon-back{
       font-size: .3rem;
       display: block;
       float: left;
       line-height: .4rem;
       font-weight: 100;
   }
   span{
       font-size: .15rem;
       display: block;
       float: left;
       line-height: .4rem;
       color: rgb(112, 112, 112);
   }
   .sc_edit{
       float: right;
   }
   /* AddressList */
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