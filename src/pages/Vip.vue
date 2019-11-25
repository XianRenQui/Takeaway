<template>
    <div class="box">
        <huiyuan1></huiyuan1>
        <lhHYzq></lhHYzq>
        <sandatequan></sandatequan>
        <MineFooter class="footer"></MineFooter>
    </div>
</template>
<script>
import huiyuan1 from '../components/huiyuan1';
import lhHYzq from '../components/lhHYzq';
import sandatequan from '../components/sandatequan';
import MineFooter from '../components/MineFooter';
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      huiyuan1,MineFooter,lhHYzq,sandatequan
  }
}
</script>

<style scoped>
 	.footer{
 		position: sticky;
 		bottom: 0;
 	}
</style>
