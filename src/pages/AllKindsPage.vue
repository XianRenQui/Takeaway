<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 10:00:03
 -->
<template>
    <div class="all_box">
        <div class="all_header">
            <Back class="box"></Back>
            <KindSearch></KindSearch>
        </div>
        <div class="all_content">
            <Classify class="classify"></Classify>
        </div>
        <MineFooter class="MineFooter"></MineFooter>
    </div>
</template>

<script>
import Back from '../components/Back';
import KindSearch from '../components/KindSearch';
import Classify from '../components/Classify';
import MineFooter from '../components/MineFooter';

export default {
    name: 'AllKindsPage',
    data () {
        return {
        
        }
    },
    components:{
        Back,KindSearch,Classify,MineFooter
    }
    }
</script>

<style scoped>
.all_box{
    height:100%;
}
.all_header{
    width:100%;
    height: .45rem;
    background: #fff;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:1px solid #e0e0e0;
    position: fixed;
    top:0;
    left: 0;;
}
.all_content{
    margin-top:.45rem;
    background: #f4f4f4;
    overflow-y: auto;
    min-height: 5.6rem;
}
.MineFooter{
    width:100%;
    position: sticky;
    bottom: 0;
    border-top: 1px solid #e0e0e0;
}

</style>
