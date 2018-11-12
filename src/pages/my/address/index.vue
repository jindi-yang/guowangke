<template>
	<div>
		<mp-title :title="title"></mp-title>

		<div>
			<div class="address"  v-for="(item, index) in listData" :key="index" @touchstart="startMove" :data-index="index" @touchmove="deleteGoods" @touchend="endMove">
				<div class="info">
					<div class="clearfix">
						<span>{{item.name}}</span>
						<span class="fr">{{item.mobile}}</span>
					</div>
					<div class="details one_txt_cut">
						收货地址：{{item.address+item.address_detail}}
					</div>					
				</div>
				<div class="edit" @click="toDetail(item.id)"></div>
			</div>
		</div>

		<div class="add_address" @click="jump('/pages/my/address/addAddress/main')">
			<i></i>
			<span>新增收货地址</span>
		</div>

	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';

	export default {
		data() {
			return {
				title: '我的地址',
				listData: [
					{
						id: 23122,
						name: '张三',
						mobile: 13526324852,
						address: '安徽省合肥市',
						address_detail: '北街1号院1209号',
					}
				],
				tranX: 0,
				tranX1: 0,
				startX: "",
				startY: "",
				moveX: "",
				moveY: "",
				moveEndX: "",
				moveEndY: "",
				X: 0,
				Y: "",
			}
		},

		components: {
			'mp-title': MpTitle
		},
		methods: {
			jump(router) {
				console.log(router)
				wx.navigateTo({
					url: router
				});

			},			
//			startMove(e) {
//				console.log(e)
//				this.initTextStyle();
//				this.startX = e.touches[0].pageX;
//				this.startY = e.touches[0].pageY;
//			},
			toDetail(id) {
		      wx.navigateTo({
		        url: "/pages/my/address/addAddress/main"
		      });
		    },
			
		},

		created() {}
	}
</script>

<style scoped>
	.address {
		position: relative;
		padding: 20rpx;
		font-size: 30rpx;
		background: #fff;
		margin-bottom: 20rpx;
		height: 100rpx;
	}
	
	.address .info {
		width: 86%;
		position: relative;
	}
	
	.address .details {
		margin-top: 20rpx;
	}
	
	.address .edit{
		position: absolute;
		right: 26rpx;
		top: 46rpx;
		width: 48rpx;
		height: 48rpx;
		background: url(../../../../static/images/edit.png) no-repeat center center;
		background-size: contain;
	}
	.add_address {
		width: 750rpx;
		display: block;
		background: #fff;
		position: fixed;
		bottom: 0rpx;
		height: 100rpx;
		line-height: 100rpx;
		box-sizing: border-box;
		text-align: center;
		font-size: 30rpx;
		color: #458926;
		border-top: 1rpx solid #ccc;
	}
	
	.add_address span {
		padding-left: 10rpx;
	}
	
	.add_address i {
		width: 48rpx;
		height: 48rpx;
		display: inline-block;
		background: url(../../../../static/images/add-icon.png) no-repeat center center;
		background-size: contain;
		vertical-align: middle;
		margin-bottom: 5rpx;
	}
</style>