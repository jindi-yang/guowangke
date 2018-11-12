<template>
	<div>
		<mp-title :title="title"></mp-title>
		<div id="tab_select">
			<ul class="clearfix">
				<li :test="test" v-for="(tab,index) in tabs" :class="{tab_select_now:cur == index}" :key="index" @click="tabSelect(index)"><span>{{tab.name}}</span></li>
			</ul>
		</div>
		<div v-for="(item,type) in orderAllItem" :key="type">
			<div v-if="cur === current_status">
				<div v-if="item.status == current_selected" class="coupon_list">
					<ul>
						<li v-for="(coupon,list) in item.datas" :key="list" :class="item.status==0?'noUsed':'cancel'">
							<div class="coupon_price">
								<span class="grey font_small current_status">{{coupon.current_txt}}</span>
								<span class="money">¥<em>{{coupon.effect_params}}</em></span>
							</div>
							<div class="coupon_wrap">
								<span class="title">{{coupon.source}}</span>
								<span>{{coupon.scope_name}}</span>
								<span class="grey font_small validity">
										<em>有效期：{{coupon.enable_time}}</em>至<em>{{coupon.expire_time}}</em>
									</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		
		</div>

	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';

	export default {
		data() {
			return {
				title: '我的优惠券',
				tabs: [{
					name: "未使用"
				}, {
					name: "已使用"
				}, {
					name: "已过期"
				}],
				current_status: 0,
				current_selected:0,
				orderAllItem: [{
						status: 0,
						datas: [{
								source: "5元新会员礼品券",
								scope_name: "无门槛券(满0元可用)",
								enable_time: "2018-07-12",
								expire_time: "2018-08-20",
								effect_params: 5,
								minimal_order_amount: 0.00,
								current_tab: "noUsed",
								current_txt: '未使用'
							}

						]
					},
					{
						status: 3,
						datas: [{
								source: "双11钜惠",
								scope_name: "购物满49使用",
								enable_time: "2018-07-12",
								expire_time: "2018-08-20",
								effect_params: 10,
								minimal_order_amount: 0.00,
								current_tab: "used",
								current_txt: '已使用'
							}

						]
					},
					{
						status: 5,
						datas: [{
								source: "果粉日全场",
								scope_name: "无门槛券(满0元可用)",
								enable_time: "2018-07-12",
								expire_time: "2018-08-20",
								effect_params: 10,
								minimal_order_amount: 0.00,
								current_tab: "cancel",
								current_txt: '已过期'
							}

						]
					}
				],
				cur: 0,

			}
		},

		components: {
			'mp-title': MpTitle,
		},

		methods: {

			tabSelect(num) {
				const _this = this
				this.cur = num;
				this.current_status = num
				const status = this.current_status
				if(status == 0){
					this.current_selected = 0
				}else if(status == 1){
					this.current_selected = 3
				}else if(status == 2){
					this.current_selected = 5
				}else{
					
				}
				
			}
		},

		created() {}
	}
</script>

<style scoped>
	#tab_select {
		width: 750rpx;
		box-sizing: border-box;
		background: #fff;
	}
	
	#tab_select li {
		line-height: 80rpx;
		float: left;
		font-size: 28rpx;
		text-align: center;
	}
	
	#tab_select li {
		width: 33.33%;
	}
	
	.tab_select_now span {
		display: block;
		color: #458926;
		border-bottom: 4rpx solid #458926;
		width: 60%;
		margin: 0 auto;
	}
	
	.counpon {
		padding: 20rpx;
	}
	
	.coupon_list li {
		width: 92%;
		font-size: 28rpx;
		background: #fff;
		margin: 20rpx auto;
		display: flex;
		height: 200rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
		border-bottom: 10rpx solid #999;
		position: relative;
	}
	
	.coupon_list li.noUsed {
		border-bottom: 10rpx solid #458926;
	}
	
	.coupon_list .coupon_price {
		width: 28%;
		text-align: center;
		border-right: 1rpx dashed #ccc;
	}
	
	.coupon_list .current_status {
		position: absolute;
		top: 15rpx;
		left: 15rpx;
	}
	
	.coupon_list .money {
		line-height: 200rpx;
		font-size: 42rpx;
		color: #999;
	}
	
	.coupon_list li.noUsed .money {
		color: #FF0000;
	}
	
	.coupon_list .money em {
		font-size: 60rpx;
	}
	
	.coupon_list .coupon_wrap {
		padding-left: 30rpx;
		margin-top: 30rpx;
	}
	
	.coupon_list .coupon_wrap span {
		display: block;
		line-height: 46rpx;
		font-size: 26rpx;
	}
	
	span.font_small,
	span.font_small em {
		font-size: 24rpx;
	}
	
	.coupon_list .validity {
		margin-top: 10rpx;
	}
</style>