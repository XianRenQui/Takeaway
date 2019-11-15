<template>
	<div class="box">
		<TuiChu></TuiChu>
		<LoginCon class="logincon"></LoginCon>
		<DiSanFang class="disanfang"></DiSanFang>
	</div>
</template>

<script>
	import TuiChu from '../components/TuiChu';
	import LoginCon from '../components/LoginCon';
	import DiSanFang from '../components/DiSanFang';

	export default {
		name: 'Login',
		data() {
			return {

			}
		},
		components: {
			TuiChu,LoginCon,DiSanFang
		}
	}
</script>

<style scoped="scoped">
	.logincon{
		padding-top: .57rem;
	}
	.disanfang{
		margin-top: .9rem;
	}
</style>