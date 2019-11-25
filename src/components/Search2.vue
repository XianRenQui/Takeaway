<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-11 15:23:12
 -->
<template>
    <div class="search">
        <input type="text" :placeholder="msg">
        <div class="icon">
            <i class="el-icon-search"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:"Back",
    data(){
        return {
            msg:"请输入商家、商品名称"
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
.search{
    width:2.78rem;
    height: .32rem;
    background: red;
    position: relative;
}
.search input{
    width:2.78rem;
    height: .32rem;
    border:none;
    outline: none;
    text-indent: .4rem;
    background: #fe9c53;
    color:#fff;

}
input::-webkit-input-placeholder{
    color: #fff;
}
.search .icon{
    display: inline-block;
    position: absolute;
    left: .1rem;
    top: .06rem;
}
.search .icon i{
    font-size: .2rem;
    color:#fff;
}

</style>