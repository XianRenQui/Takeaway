<template>
	<div class="box">
		<i class="el-icon-arrow-left" @click="back()"></i>
		<span>我的收藏</span>
		<p>当前区域商家</p>
	</div>
</template>

<script>
	export default {
	  	name: 'CollTitle',
	  	data () {
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

<style scoped="scoped">
	.box{
		/*width: 100%;*/
		/*height: .46rem;*/
		box-shadow: 0px 4px 10px #dbdbdb;
		background: white;
	}
	i{
		color: #f9d273;
		font-size: .17rem;
		line-height: .42rem;
		margin-left: .27rem;
		
	}
	span{
		color: black;
		font-size: .13rem;
		line-height: .42rem;
		margin-left: .2rem;
	}
	p{
		/*width: 100%;*/
		height: .27rem;
		color: #333333;
		font-size: .1rem;
		line-height: .27rem;
		padding-left: .16rem;
		background: #f4f4f4;
	}
</style>