<template>
	<div>
		<mp-title :title="title"></mp-title>
		<mp-swiper :images="images"></mp-swiper>

		<div id="top_nav">
			<ul class="clearfix">
				<li v-for="(item,index) in tabs"  :key="index" @click="jump('/pages/index/goods/main')">
					<img :src="item.img">
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
		
		<mp-goods></mp-goods>
		<!--<footer-nav :navName="navName" :activeColor='activeColor'></footer-nav>-->
	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';
	import Swiper from '@/components/Swiper';
	import GoodsList from '@/components/GoodsList';
	import FooterNav from '@/components/FooterNav';

	export default {
		data() {
			return {
				title: '首页',
				navName: "index",
				activeColor: 'activeColor',
				images: [{
						url: require('../../../static/images/swiper1.jpg')
					},
					{
						url: require('../../../static/images/swiper2.jpg')
					}
				],
				tabs: [{
						id:12354123,
						name: '鲜果',
						img: require('../../../static/images/fruit_icon.png')
					},
					{
						id:125415546,
						name: '坚果礼盒',
						img: require('../../../static/images/nut_icon.png')
					},
					{
						id:125475662,
						name: '土特产',
						img: require('../../../static/images/local_product_icon.png')
					},
					{
						id:563284523,
						name: '礼盒专区',
						img: require('../../../static/images/gift_icon.png')
					}
				],
			}
		},

		components: {
			'mp-title': MpTitle,
			'mp-swiper': Swiper,
			'mp-goods': GoodsList,
			'footer-nav': FooterNav,
			
		},

		methods: {
			jump(router) {
				wx.navigateTo({
					url: router
				});
			},
			
		},

		created() {}
	}
</script>

<style scoped>
	#top_nav li {
		width: 25%;
	}
	
	
	#top_nav img {
		width: 80rpx;
		height: 80rpx;
		margin: 0 auto;
	}
	
	
	#top_nav span {
		display: block;
		line-height: 60rpx;
		font-size: 26rpx;
	}
	
	

	
</style>