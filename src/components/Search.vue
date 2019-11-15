<template>
	<div class="box" id="searchBar">
		<input type="text" :placeholder="tip" />
		<img src="../assets/img/in_search.png" alt="" />
	</div>
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				tip: "轻食说，满35减15"
			}
		},
		mounted() { //给window添加一个滚动滚动监听事件
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() { //改变元素#searchBar的top值
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('#searchBar').offsetTop;

				if(scrollTop >= 0) {
					offsetTop = 0;
					document.querySelector('#searchBar').style.top = offsetTop + 'px';
				} else {
					document.querySelector('#searchBar').style.top = '0';
				}
			},
		},
		destroyed() { //离开该页面需要移除这个监听的事件
			window.removeEventListener('scroll', this.handleScroll)
		},

	}
</script>

<style scoped>
	.box {
		width: 100%;
		height: .35rem;
		position: sticky;
		background: white;
		z-index: 10;
		padding-top: .03rem;
		padding-bottom: .03rem;
	}
	input {
		width: 92%;
		height: .35rem;
		background: #f2f1ef;
		border: none;
		outline: none;
		margin: 0px 4%;
		font-size: .12rem;
		color: #9b9b9b;
		line-height: .2rem;
		border-radius: 6px;
		padding-left: .3rem;
		box-sizing: border-box;
	}
	
	img {
		width: .13rem;
		height: .13rem;
		position: absolute;
		left: 7%;
		top: 15px;
	}
</style>