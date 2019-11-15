<template>
	<div class="box">
		<h3>美 团 会 员</h3>
		<div class="yonghu">
			<img src="../assets/img/vip_touxiang.png"/>
			<p>
				157****2418
				<span>暂未开通美团会员</span>
			</p>
		</div>
		<div class="zunxiang">
			
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	.box{
		background: repeating-linear-gradient(to bottom,#393431 10%,#0f1410 20%);
		/*background: #282828;*/
		position: relative;
	}
	h3{
		width: 100%;
		height: .41rem;
		color: white;
		font-size: .14rem;
		line-height: .41rem;
		text-align: center;
		font-weight: normal;
	}
	.yonghu{
		width: 92%;
		overflow: hidden;
		margin: 0 auto;
		margin-top: .1rem;
		padding-bottom: 1rem;
	}
	img{
		width: .33rem;
		height: .33rem;
		float: left;
	}
	p{
		color: #d1d1d1;
		font-size: .12rem;
		float: left;
		line-height: .18rem;
		margin-left: .09rem;
	}
	span{
		display: block;
		color: #8b8784;
		font-size: .09rem;
		line-height: .09rem;
	}
	.zunxiang{
		width: 92%;
		height: 1.12rem;
		background: #ffe3ce;
		border-radius: .1rem;
		position: absolute;
		left: 4%;
		bottom: -.25rem;
	}
</style>