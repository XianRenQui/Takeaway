<!--
 * @Descripttion: 搜索框
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-09 22:43:48
 * @version: v1.0.0
 -->
<template>
    <div class="box">
        <img class="s_ren" src="../assets/img/return.png" alt="" @click="back()">
        <input type="text" v-model="searchInput" :placeholder="tip">
        <img class="s_sec" src="../assets/img/search.png" alt="">
        <span @click="serch()">搜索</span>
    </div>
</template>

<script>
export default {
    name:"HelloWorld",
    data(){
        return{
            searchInput:'',
            tip:"轻食说 满35减15"
        }
    },
    methods:{
      back(){
          this.$router.go(-1);
      },
      serch(){
          console.log(this.searchInput);
          var tag = this.searchInput;
          var obj = {item:[]};
         var x = JSON.stringify(obj.item.push(tag));
          localStorage.setItem('tag',obj )
      }
  }
}
</script>

<style scoped>
    .box{
       width: 96%;
       height: .27rem;
       position: relative;
       display: flex;
       margin: 0 auto;
    }
    .s_ren{
        width: .2rem;
        height: .2rem;
        margin-left: 5px;
        margin-top: .03rem;
    }
    input{
        width: 70%;
        height: 100%;
        border-radius: 5px;
        background: #e7e7e7;
        border: none;
        font-size: .12rem;
        text-indent: .25rem;
        margin: 0 014px 0 .17rem;
        outline: none;
    }
    .s_sec{
        width: .13rem;
        height: .14rem;
        position: absolute;
        left: .45rem;
        top: 0.08rem;
    }
    span{
        width: .5rem;
        height: 100%;
        background: #ffd162;
        border-radius: 5px;
        display: inline-block;
        font-size: .12rem;
        line-height: .27rem;
        text-align: center;
    }
</style>