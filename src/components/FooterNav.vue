<template>
	<div id="footNav">
		<ul>
			<li @click="jump('/pages/index/main')">
				<img :src="index" />
				<i :class="activeColor">首页</i>
			</li>
			<li @click="jump('/pages/cart/main')">
				<img :src="cart" />
				<i>购物车</i>
			</li>

			<li @click="jump('/pages/order/main')">
				<img :src="order" />
				<i>订单</i>
			</li>
			<li @click="jump('/pages/my/main')">
				<img :src="my" />
				<i>我的</i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'FooterNav',
		props: ['navName','activeColor'],
		data() {
			return {
				navName: "",
				index: "/static/images/index.png",
				cart: "/static/images/shoppingcart.png",
				order: "/static/images/order.png",
				my: "/static/images/my.png"
			};
		},
		methods: {
			nowNav(name) {				
				switch(name) {
					case "index":
						this.index = "/static/images/index_now.png";
						break;
					case "cart":
						this.cart = "/static/images/shoppingcart_now.png";
						break;
					case "order":
						this.order = "/static/images/order_now.png";
						break;
					case "my":
						this.my = "/static/images/my_now.png";
						break;
					default:
						this.index = "/static/images/index_now.png";
						break;
				}
			},
			jump(router) {
				console.log('此处跳转到-', router);
				wx.redirectTo({
					url: router
				});
				
			}
		},
		created() {
			this.nowNav(this.navName);
		}
	}
</script>

<style scoped>
	#footNav {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 108rpx;
		width: 750rpx;
		z-index: 999;
		background: #FFFFFF;
		border-top: 1rpx solid #eeeeee;
	}
	
	#footNav ul li {
		width: 25%;
		float: left;
	}
	
	#footNav ul li img {
		display: block;
		width: 50rpx;
		height: 50rpx;
		margin: 13rpx auto 10rpx;
	}
	
	#footNav ul li i {
		text-align: center;
		color: #111111;
		font-size: 24rpx;
		font-weight: 200;
		line-height: 24rpx;
	}
	#footNav ul li i.activeColor{
		color: #458926;
	}
</style>