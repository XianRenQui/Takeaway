<template>
	<div class="register">
		<TuiChu></TuiChu>
		<ResCon class="rescon"></ResCon>
		<DiSanFang class="disanfang"></DiSanFang>
	</div>
</template>

<script>
	import TuiChu from '../components/TuiChu';
	import ResCon from '../components/ResCon';
	import DiSanFang from '../components/DiSanFang';

	export default {
		name: 'Register',
		data() {
			return {

			}
		},
		components: {
			TuiChu,ResCon,DiSanFang
		}
	}
</script>

<style scoped="scoped">
	.rescon{
		padding-top: .6rem;
	}
	.disanfang{
		margin-top: .6rem;
	}
</style>