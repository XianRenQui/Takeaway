<template>
	<div class="ziqu">
		<div class="title">
			<h3>到店自取</h3>
			<span>急速取餐，同享优惠</span>
		</div>
		<ul>
			<li>
				<a href="#">
					<img src="../assets/img/in_zq01.jpg" />
					<div class="right">
						<div class="tt">喜糖精制水饺（好好吃的）</div>
						<div class="juli">
							<span class="jl">710米</span>
							<span class="psf">省 3￥配送费</span>
						</div>
						<div class="youhui">
							<span class="yh">减</span>
							<span class="yh">折</span>
							<span class="yh">返</span>
							<span class="yh">赠</span>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_zq02.jpg" />
					<div class="right">
						<div class="tt">米谷优食（好好吃的）</div>
						<div class="juli">
							<span class="jl">558米</span>
							<span class="psf">省 3￥配送费</span>
						</div>
						<div class="youhui">
							<span class="yh">减</span>
							<span class="yh">折</span>
							<span class="yh">返</span>
							<span class="yh">赠</span>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_zq01.jpg" />
					<div class="right">
						<div class="tt">喜糖精制水饺（好好吃的）</div>
						<div class="juli">
							<span class="jl">710米</span>
							<span class="psf">省 3￥配送费</span>
						</div>
						<div class="youhui">
							<span class="yh">减</span>
							<span class="yh">折</span>
							<span class="yh">返</span>
							<span class="yh">赠</span>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.ziqu{
		width: 92%;
		overflow: hidden;
		margin: 0 auto;
	}
	.title{
		padding-bottom: .2rem;
	}
	h3{
		color: #363636;
		font-size: .18rem;
		font-weight: normal;
		display: inline-block;
	}
	span{
		color: #969696;
		font-size: .1rem;
		margin-left: .13rem;
	}
	ul{
		display: flex;
		overflow-x: auto;
	}
	li{
		width: 2.18rem;
		overflow: hidden;
		margin-right: .2rem;
		flex-shrink: 0;
	}
	img{
		width: .75rem;
		height: .75rem;
		float: left;
	}
	.right{
		width: 1.34rem;
		overflow: hidden;
		float: right;
		padding-left: .08rem;
	}
	.tt{
		color: #323232;
		font-size: .14rem;
		line-height: .3rem;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.jl{
		display: inline-block;
		width: .4rem;
		height: .16rem;
		background: #ffd35c;
		color: #563600;
		font-size: .09rem;
		line-height: .16rem;
		text-align: center;
		margin-left: 0;
		border-radius: 4px;
	}
	.psf{
		display: inline-block;
		width: .74rem;
		height: .16rem;
		background: #fdf8f2;
		color: #d6ae32;
		font-size: .09rem;
		line-height: .16rem;
		text-align: center;
		margin-left: 0;
		border-radius: 4px;	
	}
	.youhui{
		margin-top: 4px;
	}
	.yh{
		display: inline-block;
		width: .15rem;
		height: .15rem;
		background: #ff6c6b;
		color: #ffece5;
		font-size: .1rem;
		line-height: .15rem;
		text-align: center;
		border-radius: 4px;
		margin-left: 0;
	}
</style>