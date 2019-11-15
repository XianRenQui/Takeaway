<!--
 * @Descripttion: 商品详情_banner图
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-15 11:14:56
 * @version: v1.0.0
 -->
<template>
    <div class="Goods">
        <div class="GoodsDetail_head" :style="{ 'background-image':'url(' + Detali.img + ')'}">
            <i class="el-icon-arrow-down" @click="back()"></i>
            <img class="image" src="../assets/img/more.png" alt="">
            <router-link to="/ShoppingCar"><i class="el-icon-shopping-cart-2"></i></router-link>
            <div class="Evaluation">
                <span class="Praise">100%好评</span>
                <p>{{Detali.description}}</p>
                <span class="eva"> &nbsp;|&nbsp; 243条评论 </span>
                <i class="el-icon-arrow-down"></i>
            </div>
        </div>
        <div class="share">
            <h6>{{Detali.productname}}</h6>
            <img class="image_a" src="../assets/img/share.png" alt="">
            <p>月售{{Detali.Monthlysale}}</p>
            <span class="money">￥{{Detali.price}}</span>
            <span class="GoodsCar"> + 加入购物车</span>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"GoodsDetailTop",
    props:["gid"],
    data(){
        return{
            Detali:{}
        }
    },
    created(){
        var that = this;
        var gid = that.$route.query.gid;
        var params={'gid':gid}
        // that.$http.get('http://localhost:3000/GoodsDetali',params).then(function(res){
            // that.$http.get('/api/goods/selectOne',params).then(function(res){
            that.$http.get('/api/rows',params)
            .then(function(res){
            var data  = res.data;
            for(var i = 0;i<data.length;i++){
                console.log(data)
                if(data[i].gid == gid){
                  that.Detali = data[i];
                  console.log(params)
                }
            }
        })
        .catch(function(err){
                console.log(err)
        })
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
     }
     
}
</script>
  
<style scoped>
   .GoodsDetail_head{
       width: 100%;
       height: 2rem;
       margin: 0 auto;
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: relative;
   }
   .el-icon-arrow-down{
       font-size: .2rem;
       display: block;
       line-height: .5rem;
       color: #fff;
       float: left;
       margin-left: 10px;
   }
   .el-icon-shopping-cart-2{
       font-size: .2rem;
       display: block;
       line-height: .5rem;
       color: #fff;
       float: right;
       margin-right: 5px;
   }
   .image{
       width: .4rem;
       height: .5rem;
       display: block;
       float: right;
       margin-right: 10px;
   }
   .Evaluation{
       width: 90%;
       height: .3rem;
       background: #fff;
       position: absolute;
       bottom:8%;
       left: 2%;
       border-radius: 14px 14px 14px 0;
       display: flex;
       justify-content: flex-start;
   }
   .Evaluation .Praise{
       width: .75rem;
       display: block;
       color: #fdc45b;
       font-size: .12rem;
       line-height: .3rem;
       margin: 0 0 0 10px;
   }
    .Evaluation>p{
       width: 1.7rem;
       color: #343434;
       font-size: .12rem;
       line-height: .3rem;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
    }
    .eva{
       width: .8rem;
       color: #343434;
       font-size: .12rem;
       line-height: .3rem;
    }
    .Evaluation>.el-icon-arrow-down{
       font-size: .15rem;
       display: block;
       line-height: .32rem;
       color: #343434;
       float: left;
       margin:0 5px 0 5px; 
    }
    .share{
        width: 94%;
        padding: 14px 11px;
        background: #fff;
    }
    .share>h6{
        font-size: .15rem;
        color: #222;
        float: left;
    }
    .image_a{
       width: .15rem;
       height: .15rem;
       display: block;
       float: right;
       margin-right: 10px;
   }
   .share>p{
       font-size: .12rem;
       color: #999;
       clear: both;
       height: .3rem;
       line-height: .3rem;
   }
   .money{
       font-size: .2rem;
       color: #f34040;
   }
   .GoodsCar{
       font-size: .15rem;
       color: #222;
       text-align: center;
       height: .28rem;
       background: #ffd065;
       line-height: .28rem;
       display: block;
       width: 1.2rem;
       border-radius: 14px;
       float: right;
   }
</style>