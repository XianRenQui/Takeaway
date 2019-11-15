<template>
	<div class="box">
		<div class="imgs">
			<router-link to='/'><img src="../assets/img/weixin.png"/></router-link>
			<router-link to='/'><img src="../assets/img/qq.png"/></router-link>
		</div>
		<p>
			登录代表你已同意
			<router-link to='/'>美团用户协议</router-link>、
			<router-link to='/'><span>隐私政策</span></router-link>
		</p>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.imgs{
		width: 2.8rem;
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
	}
	img{
		width: .55rem;
		height: .55rem;
	}
	p{
		color: #7e7e7e;
		font-size: .12rem;
		text-align: center;
		margin-top: .25rem;
	}
	a{
		color: #fbd071;
		font-size: .12rem;
	}
</style>