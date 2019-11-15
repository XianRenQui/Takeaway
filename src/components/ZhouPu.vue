<template>
	<div class="zhoupu">
		<img class="zp" src="../assets/img/in_zp.jpg"/>
		<h3>全场免运费，有津贴更优惠</h3>
		<ul>
			<li>
				<a href="#">
					<img src="../assets/img/in_zp01.jpg"/>
					<p>【升职加薪套餐，加餐了】</p>
					<span>￥41.99</span>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_zp02.jpg"/>
					<p>【爱你久久套餐，加餐了】</p>
					<span>￥13.88</span>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="../assets/img/in_zp03.jpg"/>
					<p>【三米三周年套餐，加餐了】</p>
					<span>￥16.66</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.zhoupu{
		width: 92%;
		overflow: hidden;
		margin: 0 auto;
	}
	.zp{
		width: 100%;
	}
	h3{
		color: #353535;
		font-size: .15rem;
		font-weight: normal;
		line-height: .31rem;
	}
	ul{
		display: flex;
		justify-content: space-between;
	}
	li{
		width: 32%;
	}
	li img{
		width: 100%;
	}
	p{
		color: #363636;
		font-size: .1rem;
		width: 96%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	span{
		color: #e15754;
		font-size: .09rem;
	}
</style>