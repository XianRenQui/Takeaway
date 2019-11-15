<template>
	<div class="box">
		<i class="el-icon-close" @click="back()"></i>
		<span>帮助</span>
	</div>
</template>

<script>
	export default {
	  	name: 'TuiChu',
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
		margin-top: .15rem;
	}
	i{
		color: #ffd364;
		font-size: .24rem;
		margin-left: 4%;
	}
	span{
		color: #ffdb6f;
		font-size: .14rem;
		float: right;
		margin-right: 4%;
	}
</style>