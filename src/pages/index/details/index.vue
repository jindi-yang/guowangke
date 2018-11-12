<template>
	<div>
		<mp-title :title="title"></mp-title>
		<mp-swiper :images = "images"  :changeHeight = 'changeHeight'></mp-swiper>
		
		<div class="goods">
			<div class="info_item">
				<h3>优选佳沛新西兰阳光金奇异果</h3>	
				<h4>每天一颗 水润超甜蜜 </h4>	
				<div class="price">
					<span class="money">¥49.9<em>/盒</em></span>
					<em class="original_price">¥59.9</em>
				</div>
						
				<div class="tips_item">
					<span>限时免邮</span>
					<span>1小时达</span>
					<span>限时抢购</span>
				</div>
			</div>
			<div class="details">
				<div class="title">商品详情</div>
				<img src="/static/images/details.jpg" mode="widthFix">
				<img src="/static/images/details2.jpg" mode="widthFix">
				<img src="/static/images/details3.jpg" mode="widthFix">
				<img src="/static/images/details4.jpg" mode="widthFix">
			</div>
		</div>
	
	
		<div class="cart_nav">
			<div class="target">
				<div @click="jump('/pages/index/main')">
					<i class="home"></i>
					<span>首页</span>
				</div>
				<div>
					<i class="share"></i>
					<span>分享</span>
				</div>				
			</div>
			<div class="price">
				<span class="money">¥49.9<em>/盒</em></span>
			</div>
			<div class="right_item" @click="addCart">
				
				加入购物车
			</div>
		</div>
		
		
		<div class="cart" @click="jump('/pages/cart/main')">
			<em v-if="num>0">{{num}}</em>
		</div>
		
	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';
	import Swiper from '@/components/Swiper';

	export default {
		data() {
			return {
				title: '详情',
				images:[
					{
						url:require('../../../../static/images/details_swiper_1.jpg')
					},
					{
						url:require('../../../../static/images/details_swiper_2.jpg')
					},
					{
						url:require('../../../../static/images/details_swiper_3.jpg')
					}
				],
				changeHeight:'changeSwiperHeight',
				num:0,
			}
		},

		components: {
			'mp-title': MpTitle,
			'mp-swiper': Swiper
		},

		methods: {
			jump(router) {
				wx.redirectTo({
					url: router
				});

			},
			addCart(){
				this.num++
				wx.showToast({
		            title: "加入购物车成功",
		            icon: "success",
		            duration: 1500
		        });
			}
		},

		created() {}
	}
</script>

<style scoped>
	.goods{
		padding-bottom: 200rpx;
	}
	.info_item{
		background: #fff;
		margin-bottom: 20rpx;
	}
	.info_item h3,
	.info_item h4{
		padding-left: 20rpx;
		line-height: 60rpx;
	}
	.info_item h3{
		padding-top: 30rpx;
		font-size: 34rpx;		
		font-weight: bold;
	}
	.info_item h4{
		font-size: 30rpx;
		color: #878787;
		margin-bottom: 20rpx;
	}
	.info_item .money{
		color: #ff8a65;
		font-size: 38rpx;
		padding: 20rpx;
	}
	.price em{
		color: #878787;
		font-size: 30rpx;
		
	}
	.tips_item{
		padding: 20rpx;
	}
	.tips_item span{
		width:60rpx;
		padding-left: 45rpx;
		background:url(../../../../static/images/tips_item.png) no-repeat left center ;
		background-size: 36rpx 36rpx;
		margin-right: 20rpx;
		font-size: 26rpx;
		color: #666;
	}
	
	.goods .details{
		background: #fff;
	}
	.details .title{
		text-align: center;
		font-size: 28rpx;
		line-height: 100rpx;
		background: url(../../../../static/images/detais_bg.png) no-repeat 100% 100%;
		background-size: contain;
	}
	.details img{
		width: 100%;
		height: 100%;
	}
	
	.cart_nav{
		box-shadow: 0 -0.2rpx  0.3rpx 0 rgba(0,0,0,.15);
		width: 750rpx;
		position: fixed;
		bottom: 0rpx;
		height: 90rpx;
		background: #fff;
		font-size: 28rpx;
		box-sizing: border-box;
	}
	.cart_nav i {
		display: inline-block;
		width: 46rpx;
		height: 46rpx;
	}
	.cart_nav .target{
		float: left;
		width: 30%;
		margin-top: 5rpx;
	}
	.cart_nav .target>div{
		display: inline-block;
		width: 100rpx;
		text-align: center;
	}
	.cart_nav .target span{
		display: block;
		line-height: 24rpx;
		font-size: 24rpx;
		color: #FF8A65;
	}
	.cart_nav .price{
		display: inline-block;
		width: 32%;
		text-align: right;
		margin-top: 24rpx;
	}
	.cart_nav .money{
		color: #FF8A65;
	}
	.cart_nav .home{
		background: url(../../../../static/images/home_icon.png) no-repeat center center;
		background-size: contain;
	}
	.cart_nav .share{
		background: url(../../../../static/images/share_icon.png) no-repeat center center;
		background-size: contain;
	}
	.cart_nav .right_item{
		line-height: 90rpx;
	}
	.cart{
		position: fixed;
		right: 26rpx;
		bottom: 160rpx;
		width: 80rpx;
		height:80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 16rpx;
		background:rgba(0,0,0,.6) url(../../../../static/images/cart.png) no-repeat center center;
		background-size: 60rpx 60rpx;
	}
	.cart em{
		color: #fff;
		background: #F03329;
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 50%;
		text-align: center;
		font-size: 24rpx;
		position: absolute;
		top: -12rpx;
		right: -10rpx;
	}
</style>