<template>
	<div class="box">
		<div class="title">
			<h3>午餐好店</h3>
			<div class="gengduo">
				<a href="#">
					更多
					<i class="el-icon-arrow-right"></i>
				</a>
			</div>
		</div>
		<div class="content">
			<ul>
				<li>
					<a href="#">
						<img src="../assets/img/in_wc01.jpg"/>
						<p>优一佳黄焖鸡米饭</p>
						<div class="paihang">
							<span>高排行商家推荐</span>
							<img class="cha" src="../assets/img/in_wc_cha.jpg"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../assets/img/in_wc02.jpg"/>
						<p>千味焖面</p>
						<div class="paihang">
							<span>根据你看过的店推荐</span>
							<img class="cha" src="../assets/img/in_wc_cha.jpg"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../assets/img/in_wc03.jpg"/>
						<p>福临门正宗黄焖鸡</p>
						<div class="paihang">
							<span>根据你看过的店推荐</span>
							<img class="cha" src="../assets/img/in_wc_cha.jpg"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../assets/img/in_wc04.jpg"/>
						<p>杨铭宇黄焖鸡米饭</p>
						<div class="paihang">
							<span>附近热卖商家</span>
							<img class="cha" src="../assets/img/in_wc_cha.jpg"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../assets/img/in_wc05.jpg"/>
						<p>川人冒.大院香锅.冒菜</p>
						<div class="paihang">
							<span>附近热卖商家</span>
							<img class="cha" src="../assets/img/in_wc_cha.jpg"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#"><img src="../assets/img/in_wc06.jpg"/></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.box{
		width: 92%;
		overflow: hidden;
		margin: 0 auto;
	}
	.title{
		overflow: hidden;
		margin-bottom: .19rem;
	}
	h3{
		float: left;
		color: #323232;
		font-size: .18rem;
		line-height: .18rem;
		font-weight: normal;
	}
	.gengduo a{
		float: right;
		color: #676767;
		line-height: .18rem;
		font-size: .1rem;
	}
	i{
		color: #989898;
		font-size: .07rem;
	}
	.content{
		width: 100%;
		overflow: hidden;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	li{
		width: 48%;
		padding-bottom: .06rem;
		/*border: 1px solid gray;*/
	}
	img{
		width: 100%;
		height: .84rem;
	}
	p{
		color: #31312f;
		font-size: .12rem;
		margin-top: .04rem;
		margin-bottom: .03rem;
		margin-left: .07rem;
	}
	.paihang{
		color: #7c7467;
		font-size: .09rem;
		margin-left: .07rem;
	}
	.cha{
		width: .15rem;
		height: .15rem;
		float: right;
		margin-right: 2%;
	}
	ul li:last-child img{
		width: 100%;
		height: 100%;
	}
</style>