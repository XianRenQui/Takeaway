<template>
	<div class="box">
		<ul>
			<li>
				<a href="#">
					<img src="../assets/img/in_dafen01.jpg" alt="" />
					<span>美食</span>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_dafen02.jpg" alt="" />
					<span>甜点饮品</span>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_dafen03.jpg" alt="" />
					<span>超市便利</span>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_dafen04.jpg" alt="" />
					<span>蔬菜水果</span>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_dafen05.jpg" alt="" />
					<span>送药上门</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.box{
		width: 92%;
		margin: 0 auto;
	}
	ul{
		display: flex;
		justify-content: space-between;
	}
	li{
		text-align: center;
	}
	img{
		width: .5rem;
		height: .5rem;
		display: block;
	}
	span{
		color: #31322d;
		font-size: .1rem;
		line-height: .2rem;
	}
</style>