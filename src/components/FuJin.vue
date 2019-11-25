<template>
	<div id="fujin">
		<div class="tt">
			<div class="fjj">
				<!--<router-link to='/Login'>-->
					<span class="fj">附近商家</span>
				<!--</router-link>-->
				<span class="xian xian1"></span>
			</div>
			<div class="fxx">
				<!--<router-link to='/Vip'>-->
					<span class="fx">发现好菜</span>
				<!--</router-link>-->	
				<span class="xian xian2"></span>
			</div>
		</div>
		<ShopListContent1></ShopListContent1>
	</div>
</template>


	

<script>
	import ShopListContent1 from '../components/ShopListContent1';

	export default {
		name: 'FuJin',
		data() {
			return {

			}
		},
		components: {
			ShopListContent1
		}
	}
</script>

<style scoped="scoped">
	#fujin{
		width: 92%;
		overflow: hidden;
		margin: 0 auto;
		border-bottom: 1px solid #f5f5f5;
	}
	.tt{
		font-size: .17rem;
		margin-bottom: .2rem;
		overflow: hidden;
	}
	.fjj{
		width: .75rem;
		height: .3rem;
		float: left;
		position: relative;
	}
	.fxx{
		width: .75rem;
		height: .3rem;
		float: left;
		position: relative;
		margin-left: .46rem;
	}
	.fj{
		color: #ff970c;
	}
	.fx{
		color: #363636;
		/*margin-left: .46rem;*/
	}
	.xian{
		display: inline-block;
		width: .37rem;
		height: 3px;
		background: #ffa001;
		position: absolute;
		bottom: 0;
		left: 26%;
	}
	.xian2{
		display: none;
	}
</style>