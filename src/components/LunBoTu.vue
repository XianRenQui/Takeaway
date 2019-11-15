<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(obj,index) in objs" :key="index"  >
                <a v-bind:href="obj.href"><img :src="obj.src" alt=""></a>
            </div>
        </div>  
        <div class="swiper-pagination"></div>
     </div>
    
</template>

<script>
	import Swiper from 'swiper'
	
	export default {
	    name:"LunBoTu",
	    data(){
	        return {
	            objs:[
	                {
	                    src:"static/img/banner01.jpg",
	                    href:"#"
	                },
	                {
	                    src:"static/img/banner02.jpg",
	                    href:"#"
	                },
	                {
	                    src:"static/img/banner3.png",
	                    href:"#"
	                },
	                {
	                    src:"static/img/banner4.png",
	                    href:"#"
	                },
	                {
	                    src:"static/img/banner5.png",
	                    href:"#"
	                },
	                {
	                    src:"static/img/banner6.png",
	                    href:"#"
	                }
	            ]
	        }
	    },
	    mounted:function(){
	        var mySwiper = new Swiper ('.swiper-container',{
	            autoplay:true,
	            speed:300,
	            grabCursor:true,
//	            pagination: {
//			      el: '.swiper-pagination',
//			    },
//	            paginationElement : 'li'
	        })  
	    }
	}
</script>

<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
	
	.swiper-container{
		width: 92%;
		height: .84rem;
		margin: 0 auto;
	}
	img{
		width: 100%;
		height: 100%;
		border-radius: 6px;
	}
	/*li{
		background: yellow;
	}*/
</style>

