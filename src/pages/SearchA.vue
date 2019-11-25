<!--
 * @Descripttion: 搜索
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 10:22:49
 * @version: v1.0.0
 -->
<template>
    <div>
        <Searchtop></Searchtop>
        <Secfind></Secfind>
        <Sechistory></Sechistory>
        <Secguess></Secguess>
    </div>
</template>

<script>
import Searchtop from '../components/Searchtop';
import Secfind from '../components/Secfind';
import Sechistory from '../components/Sechistory';
import Secguess from '../components/Secguess';
export default {
    name:"Search",
    data(){
        return{
            
        }
    },
    components:{
        Searchtop,Secfind,Sechistory,Secguess
    }
}
</script>

<style scoped>
  
</style>