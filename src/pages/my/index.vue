<template>
	<div>
		<mp-title :title="title"></mp-title>

		<div class="my">
			<div class="my_bg"><img src="../../../static/images/my_bg.png"></div>
			<div class="my_info"  >
				<button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo" class="login" v-if="clickIsTrue">点击登录</button>
				<!--<button open-type="getPhoneNumber" @getphonenumer ="getPhone">获取手机号</button>-->
				<div class="portrait"><img :src="portrait"></div>
				<div v-if="infoShow">
					<div class="username">{{username}}</div>
					<div class="telephone">{{phone}}</div>
				</div>
				
			</div>

		</div>
		<div class="my_menu">
			<ul>
				<li @click="jump('/pages/my/address/main')">
					<img src="../../../static/images/address.png" />
					<span>我的地址</span>
					<i></i>
				</li>
				<li @click="jump('/pages/my/coupon/main')">
					<img src="../../../static/images/coupon.png" />
					<span>我的优惠券</span>
					<i></i>
				</li>
			</ul>
		</div>

		<!--<footer-nav :navName="navName"></footer-nav>-->
	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';
	import FooterNav from '@/components/FooterNav';

	export default {
		data() {
			return {
				title: '我的',
				navName: "my",
				username:"张三",
				portrait:'',
				phone:'13521521136',
				clickIsTrue:true,
				infoShow:false
			}
		},

		components: {
			'mp-title': MpTitle,
			'footer-nav': FooterNav,
		},
		methods: {
			jump(router) {
				wx.navigateTo({
					url: router
				});
				
			},
			bindGetUserInfo (e) {
				console.log(e)
			   	this.portrait = e.mp.detail.userInfo.avatarUrl
			   	this.username = e.mp.detail.userInfo.nickName
			   	this.clickIsTrue = false
			   	this.infoShow = true
			},
//			getPhone(e){
//				console.log(e)
//			}

		},

		created() {}
	}
</script>

<style scoped>
	
	.my {
		background: #fff;		
		position: relative;
		margin-bottom: 20rpx;
	}
	.my_bg img{
		height: 320rpx;
	}
	.my_info{
		width: 100%;
		position: absolute;
		top: 60rpx;
		left: 60rpx;
	}
	
	.my_info img{
		border-radius: 50%;
	}
	.my_info>div{
		font-size: 30rpx;
		color: #fff;
	}
	.my_info .login{
		border: none;
		outline: none;
		background: none;
		color: #fff;
		width: 160rpx;
		line-height: 60rpx;
		border: 1rpx solid #fff;
		text-align: center;
		font-size: 26rpx;
		position: absolute;
		left: 160rpx;
		top: 30rpx;
	}
	.my_info .portrait{
		width: 120rpx;
		height: 120rpx;
		background: #fff;
		border-radius: 50%;
		float: left;
		margin-right: 20rpx;
	}
	.my_info .username{
		margin-bottom: 16rpx;
		
	}
	.my_menu {
		background: #fff;
	}
	
	.my_menu ul li {
		padding: 0 25rpx;
		border-bottom: 1rpx solid #EEEEEE;
		border-radius: 20rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin-bottom: 10rpx;
		
	}
	
	.my_menu ul li img {
		display: block;
		height: 50rpx;
		width: 50rpx;
		float: left;
		padding: 20rpx 0;
	}
	
	.my_menu ul li span {
		float: left;
		margin-left: 20rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #111111;
	}
	
	.my_menu ul li i {
		width: 40rpx;
		height: 40rpx;
		display: block;
		background: url(../../../static/images/my_more.png) no-repeat center center;
		background-size: 40%;
		padding: 22rpx 0;
		float: right;
	}
</style>