<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-11 19:51:42
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
            msg:"虾米东西龙虾饭 满20减16"
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
    width:3.08rem;
    height: .32rem;
    background: red;
    position: relative;
}
.search input{
    width:3.08rem;
    height: .32rem;
    border:none;
    outline: none;
    text-indent: .4rem;
    background: #f3f2f7;
    color:#ccccce;
}
.search .icon{
    display: inline-block;
    position: absolute;
    left: .16rem;
    top: .05rem;
}
.search .icon i{
    font-size: .2rem;
}

</style>