<template>
	<div class="cartPage">
		<mp-title :title="title"></mp-title>
		<div class="account">

			<div class="select">
				<!--<div>
					点击选择收货地址
				</div>-->
				<div class="address clearfix" @click="jump('/pages/my/addAddress/main')">
					<div class="icon_address"><i></i></div>
					<div class="address_info">
						<p class="clearfix"><span>{{infoData.name}}</span><span class="fr">{{infoData.mobile}}</span></p>
						<p>{{infoData.address + infoData.address_detail}}</p>
					</div>
					<div class="icon_choice"><i></i></div>
				</div>

			</div>
			<div class="counpon" @click="jump('/pages/my/coupon/main')">请选择优惠券</div>
			<div class="merchandise clearfix" v-for="(item,index) in listDate" :key="index">
				<img :src="item.image">
				<div class="info fr">
					<div class="desc">
						<span>{{item.title}}</span>
						<span class="grey font_style">{{item.desc}}</span>
					</div>
					<div>
						<span class="grey font_style">数量：x{{item.num}}</span>
						<span class="fr">¥{{item.price}}</span>
					</div>
				</div>
			</div>
			<div class="money">
				<div>
					<span>商品金额</span>
					<span class="fr">¥104.1</span>
				</div>
				<div>
					<span>优惠</span>
					<span class="fr">¥5.00</span>
				</div>
			</div>
			<div class="total clearfix">
				<span class="total_price fl">合计：<em>¥104.1</em></span>
				<span class="right_item">确认</span>
			</div>
		</div>

	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';

	export default {
		data() {
			return {
				title: '结算',
				infoData: {
					id: 136,
					address: "安徽省 合肥市 蜀山区",
					name: "张三",
					mobile: 1524521253,
					address_detail: "新港中路397号",
					user_id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
				},
				listDate: [{
					title: '脆皮金桔',
					image: require('../../../../static/images/fruit.jpg'),
					price: 29.7,
					desc: '1份净果肉肉约300g',
					num: 3
				}]

			}
		},

		components: {
			'mp-title': MpTitle,
		},

		methods: {

			jump(router) {
				wx.navigateTo({
					url: router
				});

			}

		},

		computed: {

		},

		created() {}
	}
</script>

<style scoped>
	.cartPage{
		font-size: 26rpx;
	}
	.select {
		background: #fff url("http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png") bottom repeat-x;
		padding: 30rpx 20rpx 50rpx 20rpx;
		margin-bottom: 20rpx;
		position: relative;
	}
	
	.address .icon_address {
		width: 10%;
		float: left;
		vertical-align: middle;
		margin-top: 20rpx;
	}
	
	.address .icon_address i {
		display: inline-block;
		background: url(../../../../static/images/select_address.png) no-repeat;
		width: 44rpx;
		height: 44rpx;
		background-size: contain;
		vertical-align: middle;
	}
	
	.address .address_info {
		float: left;
		width: 78%;
	}
	
	.address p {
		line-height: 40rpx;
	}
	

	
	.counpon {
		padding-left: 70rpx;
		line-height: 80rpx;
		background: #fff url(../../../../static/images/coupon_icon.png) no-repeat left 20rpx center;
		background-size: 46rpx 46rpx;
		vertical-align: middle;
		position: relative;
		margin-bottom: 20rpx;
	}
	
	.select:after,
	.counpon::after {
		content: "";
		display: block;
		width: 14rpx;
		height: 14rpx;
		border-top: 1rpx solid #666;
		border-left: 1rpx solid #666;
		-webkit-transform-origin: 50%;
		transform-origin: 50%;
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
		position: absolute;
		top: 50%;
		margin-top: -6rpx;
		right: 20rpx;
	}
	.select:after{
		margin-top: -16rpx;
	}
	.info {
		width: 70%;
	}
	
	.info .font_style {
		font-size: 24rpx;
	}
	
	.merchandise {
		padding: 20rpx;
		background: #fff;
		margin-bottom: 20rpx;
		height: 160rpx;
	}
	
	.merchandise img {
		width: 180rpx;
		height: 180rpx;
		float: left;
	}
	
	.desc span {
		display: block;
		line-height: 46rpx;
	}
	
	.desc .grey {
		margin-bottom: 26rpx;
	}
	
	.money>div {
		line-height: 50rpx;
		padding: 20rpx;
		border-bottom: 1rpx solid #eee;
		background: #fff;
	}
	
	.total {
		bottom: 0rpx;
	}
	
	.total_price {
		width: 60%;
		text-align: right;
		padding-right: 30rpx;
	}
</style>