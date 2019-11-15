<template>
	<div class="box">
		<i class="el-icon-arrow-left" @click="back()"></i>
		<span>找回登录密码</span>
	</div>
</template>

<script>
	export default {
	  	name: 'PassTitle',
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
		width: 100%;
		height: .47rem;
	}
	i{
		color: #f9d273;
		font-size: .2rem;
		line-height: .47rem;
		margin-left: .17rem;
		
	}
	span{
		color: black;
		font-size: .15rem;
		line-height: .47rem;
		margin-left: 30%;
	}
</style>