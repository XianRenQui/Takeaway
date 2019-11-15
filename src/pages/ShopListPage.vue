<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-14 16:41:05
 -->
<template>
    <div class="all_box">
        <ShopList></ShopList>
        <ShopListContent></ShopListContent>
    </div>
</template>

<script>
import ShopList from '../components/ShopList';
import ShopListContent from '../components/ShopListContent';


export default {
  name: 'ShopListPage',
  data () {
    return {
      
    }
  },
  components:{
    ShopList,ShopListContent
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
