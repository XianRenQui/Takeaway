<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-11-15 10:02:57
 -->
<template>
    <div class="co_box">      
        <div class="go_right">
            <div class="go_top">
                <div class="mei">
                    <span>{{typename}}</span>
                </div>
                <div class="pin">
                    <span>去频道</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="go_cotent">
                <ul>
                    <li v-for="(book,index) in books" :key="index" >
                        <router-link to="/ShopListPage">
                            <img :src="book.img" alt="">
                            <span class="tian">{{book.name}}</span> 
                            <span class="count">{{book.count}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"BookList",
    props:['typename'],
    data(){
        return {
            allBooks:[],
            books:[]
        }
    },
    created() {
        //从后端获取数据     
        // axios.get('/catalog2/selectC2ByC1')
        axios.get('http://localhost:3000/goods')
        .then(res=>{ 
            this.allBooks = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
            this.books = this.getBooksByType(this.allBooks);//内部数据，由于渲染到了页面，所以，触发了组件更新
        })
        .catch(err=>{
            console.log(err);
        });
    },
    beforeUpdate(){
        // console.log("数据更新了------------：");
        this.books = this.getBooksByType(this.allBooks);
    },
    methods:{
        getBooksByType(data){//根据类型获取数据
            let arr=[];
            for(let i in data){
                if(data[i].type==this.typename){
                    arr.push(data[i]);
                }
            }
            return arr;
        }
    }

}
</script>

<style scoped>
.co_box{
    background: #f4f4f4;
}


.go_top{
    height: .42rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.go_top .mei{
    font-size: .13rem;
    color:#32312c;
}
.go_top .pin{
    font-size: .13rem;
    color:#32312c;
}
.go_top i{
    font-size: .13rem;
}
.go_cotent{
    width:100%;
    background: #fff;
}
.go_cotent ul{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    flex-wrap: wrap;

}
.go_cotent ul li{
    width:33.3%;
    height: 1.25rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.go_cotent ul li img{
    width:.4rem;
    height: .4rem;
}
.go_cotent ul li .tian{
    font-size: .13rem;
    color:#32312c;
    display: block;
    margin-bottom: .07rem;
    margin-top: .15rem;

}
.go_cotent ul li .count{
    height:.15rem;
    background: #f6f6f6;
    border-radius: .05rem;
    font-size: .01rem;
    display: block;
    background: #f6f6f6;
    color:#9b9b9b;
}

</style>