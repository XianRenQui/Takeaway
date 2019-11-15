<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-13 11:01:40
 -->
<template>
    <div class="b_box">
        <i class="el-icon-arrow-left" @click="back()"></i>
    </div>
</template>

<script>
export default {
    name:"Back",
    data(){
        return {

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
i{
    font-size:.26rem;
}
</style>