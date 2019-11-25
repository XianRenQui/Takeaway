<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-16 08:49:35
 -->
<template>
    <div class="all_box">
        <ShopList></ShopList>
        <ShopListContent1 :miaoshu="miaoshu"></ShopListContent1>
    </div>
</template>

<script>
import ShopList from '../components/ShopList';
import ShopListContent1 from '../components/ShopListContent1';


export default {
  name: 'ShopListPage',
  props:['miaoshu'],
  data () {
    return {
      
    }
  },
  components:{
    ShopList,ShopListContent1
  },
  created(){
  	console.log(this.miaoshu);
  }
}
</script>

<style scoped>
/* .all_box{
    width:100%;
    height: 2rem;
    background: red;
} */

</style>
