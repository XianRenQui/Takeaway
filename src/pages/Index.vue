<template>
	<div class="box1">
		<IndexTitle></IndexTitle>
		<Search></Search>
		<TuiJian class="tuijian"></TuiJian>
		<LunBoTu></LunBoTu>
		<Qiang></Qiang>
		<DaFen class="dafen"></DaFen>
		<XiaoFen></XiaoFen>
		<XinRen></XinRen>
		<WuCan class="wucan"></WuCan>
		<ZhouPu></ZhouPu>
		<ZiQu class="ziqu"></ZiQu>
		<FuJin></FuJin>
		<MineFooter class="footer"></MineFooter>
		<div class="gwc">
			<a href="#">
				<img src="../assets/img/in_gwc.png"/>
			</a>
		</div>
		<div class="zndc">
			<a href="#">
				<img src="../assets/img/in_zndc.png"/>
			</a>
		</div>
	</div>
</template>

<script>
	import IndexTitle from '../components/IndexTitle';
	import Search from '../components/Search';
	import TuiJian from '../components/TuiJian';
	import LunBoTu from '../components/LunBoTu';
	import Qiang from '../components/Qiang';
	import DaFen from '../components/DaFen';
	import XiaoFen from '../components/XiaoFen';
	import XinRen from '../components/XinRen';
	import WuCan from '../components/WuCan';
	import ZhouPu from '../components/ZhouPu';
	import ZiQu from '../components/ZiQu';
	import FuJin from '../components/FuJin';
	import MineFooter from '../components/MineFooter';

	export default {
		name: 'Index',
		data() {
			return {

			}
		},
		components: {
			IndexTitle,Search,TuiJian,LunBoTu,Qiang,DaFen,XiaoFen,XinRen,WuCan,ZhouPu,ZiQu,FuJin,MineFooter
		}
	}
</script>

<style scoped="scoped">
	.box1{
		padding-bottom: .56rem;
	}
	.tuijian{
		margin-top: .15rem;
		margin-bottom: .2rem;
	}
	.dafen{
		padding-top: .21rem;
		padding-bottom: .2rem;
	}
	.wucan{
		padding-top: .37rem;
		padding-bottom: .48rem;
	}
	.ziqu{
		padding-top: .5rem;
		padding-bottom: .33rem;
	}
	.gwc{
		position: fixed;
		right: 4%;
		bottom: 30%;
		width: .5rem;
		height: .5rem;
	}
	.zndc{
		position: fixed;
		right: 4%;
		bottom: 18%;
		width: .5rem;
		height: .72rem;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>