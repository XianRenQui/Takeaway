<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 09:53:30
 -->
<template>
    <div class="mine_box">
        <MineHeader class="mineheader"></MineHeader>
        <MineContent class="minecontent"></MineContent>
        <MineFooter class="minefooter"></MineFooter>
    </div>
</template>

<script>
import MineHeader from '../components/MineHeader';
import MineContent from '../components/MineContent';
import MineFooter from '../components/MineFooter';

export default {
  name: 'MinePage',
  data () {
    return {
      
    }
  },
  components:{
    MineHeader,MineContent,MineFooter
  }
}
</script>

<style scoped>
.mine_box{
    background: #f7f7f7;
}
.mineheader{
    width:100%;
    position: fixed;
    top: 0;
}
.minecontent{
    margin-top:1.02rem;
    padding-bottom: .55rem;
    min-height: 4.82rem;
    overflow-y: auto;
}
.minefooter{
    width:100%;
    position: fixed;
    bottom: 0;
}
</style>
