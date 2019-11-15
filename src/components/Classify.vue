<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-11 09:53:58
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 09:49:27
 -->
<template>
    <div class="box">
        <div class="co_left">
            <div class="co_left_bottom">
                <ul>
                    <li v-for="(type,index) in rows" :key="index"  @click="changetype(type.name)">
                        <span class="tian">{{type.name}}</span> 
                        <span class="count">{{type.count}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contentBox">
            <GoodList :typename="currtype"></GoodList>
        </div>
    </div>  
</template>

<script>
import GoodList from './GoodList';
import axios from 'axios';

export default {
  name: 'Classify',
  data () {
    return {
       rows:[],
       currtype:""
    }
  },
  components:{
      GoodList
  },
  created(){
    // axios.get('/catalog1/selectC1')
     axios.get('http://localhost:3000/types')
    .then((response)=> {
        console.log(response.data);
        this.rows = response.data;
        this.currtype = this.rows[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename){
          console.log(typename);
          this.currtype = typename;
      }
  }
}
</script>

<style scoped>
.co_left{
    float: left;
    width:.82rem;
    margin-right:.12rem;
}
.co_left_bottom{
    border-top-right-radius: .05rem;
    background:#fff;
    overflow-y: auto;
}
.co_left_bottom ul{
    width:100%;
}
.co_left_bottom ul li{
    width:100%;
    height: .62rem;
    text-align: center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.co_left_bottom .tian{
    font-size: .13rem;
    color:#32312c;
    display: block;
    margin-bottom: .07rem;

}
.contentBox{
    width:2.7rem;
    float: left;
}

.co_left_bottom .count{
    width:.28rem;
    height:.15rem;
    background: #f6f6f6;
    border-radius: .05rem;
    font-size: .01rem;
    display: block;
    background: #f6f6f6;
    color:#9b9b9b;
}
</style>
