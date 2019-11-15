<template>
	<div class="box">
		<h2>欢迎登录美团</h2>
		<form>
			<div class="con">
				<span class="qian">+86</span>
				<i class="el-icon-arrow-right"></i>
				<input type="text" v-model="shoujihao" maxlength="11" placeholder="请输入手机号" />
			</div>
			<div class="con mmcon">
				<input class="mima" v-bind:type="type" v-model="mimaval" placeholder="请输入密码" />
				<img v-show="isShow" @click="changeDisplay" src="../assets/img/lo_yincang.png" />
				<img v-show="!isShow" @click="changeDisplay" src="../assets/img/lo_xianshi.png" />
			</div>
			<span class="tishi">{{msg}}</span>
			<router-link v-bind:to='dizhi'><div @click="panduan"" class="dl">登录</div></router-link>
			<div class="conbottom">
				<router-link to='/Register'><span>立即注册</span></router-link>
				<router-link to='/FindPass'><span class="right">忘记密码</span></router-link>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
	  	name: 'LoginCon',
	  	data () {
	    	return {
	        	isShow:true,
	        	type:"password",
	        	shoujihao:"",
	        	mimaval:"",
	        	dizhi:"",
	        	msg:""
	    	}
	 	},
		methods:{
	     	changeDisplay:function(){
	     		if(this.isShow){
	     			this.isShow = !this.isShow;
	            	this.type = "text";
	     		}else{
	     			this.isShow = !this.isShow;
	            	this.type = "password";
	     		}
	            
	       	},
	     	panduan:function(){
	     		console.log(this.shoujihao);
	     		var r=/^1(3|4|5|7|8)\d{9}$/;
	     		if(this.shoujihao.length==0 || this.mimaval.length==0){
	     			this.msg="手机号或密码不能为空！";
	     			this.dizhi="";
	     		}else if(r.test(this.shoujihao)){
			  		fetch('api/User/login/'+this.mimaval+'/'+this.shoujihao)
			      	.then(res=>{
			       	 	return res.json();
			    	})
			      	.then(data=>{
			      		console.log(data);
			      		if(data==1){
			      			this.msg="登录成功！";
			      			this.dizhi="/";
			      		}else if(data==0){
			      			this.msg="手机号或密码输入不正确！";
			      			this.dizhi="";
			      		}else{
			      			this.msg="服务器错误！";
			      			this.dizhi="";
			      		}
			     	})
			     	.catch(err=>{
			     		console.log(err);
			     	})
			     	
	     		}else{
	     			this.msg="手机号或密码格式不正确！";
	     			this.dizhi="";
	     		}
	     	}
	  	}
	}
</script>

<style scoped="scoped">
	.box{
		width: 2.81rem;
		overflow: hidden;
		margin: 0 auto;
	}
	h2{
		color: #414244;
		font-size: .24rem;
		font-weight: normal;
		padding-left: .06rem;
		padding-bottom: .55rem;
	}
	.con{
		width: 2.74rem;
		height: .6rem;
		/*background: skyblue;*/
		margin: 0 auto;
		border-bottom: 1px solid #b6b6b6;
		line-height: .6rem;
	}
	.qian{
		color: #fbd071;
		font-size: .1rem;
	}
	i{
		font-size: .1rem;
	}
	input{
		color: #999999;
		font-size: .16rem;
		border: none;
		outline: none;
		line-height: .21rem;
		height: .21rem;
		caret-color: #e8d299;
		padding-left: .03rem;
	}
	.mmcon{
		line-height: .7rem;
		position: relative;
	}
	.dl{
		width: 2.8rem;
		height: .45rem;
		color: white;
		font-size: .14rem;
		line-height: .45rem;
		text-align: center;
		border-radius: .225rem;
		background: #cccccc;
		margin-top: .48rem;
		margin-bottom: .26rem;
	}
	.conbottom a{
		color: #fbd071;
		font-size: .11rem;
	}
	.right{
		float: right;
	}
	img{
		width: .22rem;
		height: .15rem;
		position: absolute;
		right: 4%;
		bottom: 26%;
	}
	form{
		position: relative;
	}
	.tishi{
		color: grey;
		font-size: .1rem;
		position: absolute;
		bottom: 44%;
		left: .1rem;
	}
</style>