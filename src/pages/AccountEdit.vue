<template>
	<div class="box">
		<AccTitle class="title"></AccTitle>
		<AccCon class="connect"></AccCon>
		<AccFooter class="footer"></AccFooter>
	</div>
</template>

<script>
	import AccTitle from '../components/AccTitle';
	import AccCon from '../components/AccCon';
	import AccFooter from '../components/AccFooter';
	
	export default {
		name: 'AccountEdit',
		data() {
			return {

			}
		},
		components: {
			AccTitle,AccCon,AccFooter
		}
	}
</script>

<style scoped="scoped">
	.title{
		position: sticky;
		top: 0;
		left: 0;
	}
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>