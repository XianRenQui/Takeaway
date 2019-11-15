<template>
	<div class="tuijian">
		<ul>
			<li>胡辣汤</li>
			<li>coco都可</li>
			<li>云南过桥米线</li>
			<li>小六汤包</li>
			<li>盖饭</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.tuijian{
		width: 100%;
	}
	ul{
		width: 92%;
		display: flex;
		margin: 0 auto;
	}
	li{
		font-size: .1rem;
		color: #6a6965;
		border-right: 1px solid #c2c2c2;
		padding: 0 .13rem;
	}
	ul li:first-child{
		padding-left: 0;
	}
	ul li:last-child{
		padding-right: 0;
		border-right: none;
	}
</style>