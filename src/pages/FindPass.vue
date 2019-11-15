<template>
	<div class="box">
		<PassTitle></PassTitle>
		<PassCon class="con"></PassCon>
	</div>
</template>

<script>
	import PassTitle from '../components/PassTitle';
	import PassCon from '../components/PassCon';
	
	export default {
		name: 'FindPass',
		data() {
			return {

			}
		},
		components: {
			PassTitle,PassCon
		}
	}
</script>

<style scoped="scoped">
	/*.con{
		padding-top: .4rem;
	}*/
</style>