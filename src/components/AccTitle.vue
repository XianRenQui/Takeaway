<template>
	<div class="title">
		<i class="el-icon-back" @click="back()"></i>
		<span>我的账号</span>
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
	.title{
		height: .46rem;
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
</style>