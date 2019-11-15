<template>
	<div class="collection">
		<CollTitle class="tit"></CollTitle>
		<CollCon></CollCon>
	</div>
</template>

<script>
	import CollTitle from '../components/CollTitle';
	import CollCon from '../components/CollCon';

	export default {
		name: 'Login',
		data() {
			return {

			}
		},
		components: {
			CollTitle,CollCon
		}
	}
</script>

<style scoped="scoped">
	.collection{
		padding-top: ;
	}
	.tit{
		position: sticky;
		top: 0;
		left: 0;
	}
</style>