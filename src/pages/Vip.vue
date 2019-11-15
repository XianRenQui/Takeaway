<template>
	<div class="vip">
		<VipTitle></VipTitle>
		<MineFooter class="footer"></MineFooter>
	</div>
</template>

<script>
	import VipTitle from '../components/VipTitle';
	import MineFooter from '../components/MineFooter';
	
	export default {
		name: 'Login',
		data() {
			return {

			}
		},
		components: {
			VipTitle,MineFooter
		}
	}
</script>

<style scoped="scoped">
	.vip{
		padding-bottom: .56rem;
	}
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>