<template>
	<div>
		<mp-title :title="title"></mp-title>
		<div v-for="(item,index) in itemList" :key = "index">
			
			<div class="order">
				<div class="item clearfix order_id">
					<span class="grey">订单编号：{{item.order_id}}</span>
					<span class="fr">{{item.order_status}}</span>
				</div>
				<div v-for="(product,indexs) in item.goods" :key = "indexs">
					
					<div class="item product_wrap clearfix">
						<img :src="product.image">
						<div class="clearfix item_decoration">
							<div>
								<span class="txt_cut fl title">{{product.name}}</span>
								<span class="fr">¥{{product.price}}</span>
							</div>
							<div class="grey">
								<span class="fl">{{product.attribute_selections}}/{{product.unit}}</span>
								<span class="fr">x{{product.num}}</span>
							</div>
						</div>
					</div>
				</div>
				<div class=" item status_wrap grey">
					共计{{item.order_num}}件商品，合计：<em>¥{{item.total_price}}</em>
				</div>
				<div class="status"  >
					
					<div v-for="(button,statu) in item.buttons" :key = "statu" class="status_navigator">
						<span :class= "button.colorIsGreen==1?'confirm':'cancel'">{{button.texts}}</span>
					</div>
				</div>
				
			</div>
			
			
			
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
				title: '订单',
				navName: "order",
				itemList:[
					{
						order_id:9812574526312,
						order_status:'交易成功',
						order_num:3,
						total_price:29.7,
						buttons:[],
						goods:[
							{
								name:'脆皮金桔',
								price:'9.9',
								num:1,
								attribute_selections:9.9,
								unit:'件',
								image: require('../../../static/images/fruit.jpg')
							},
							{
								name:'都乐帝皇蕉',
								price:'19.8',
								num:2,
								attribute_selections:9.9,
								unit:'份',
								image: require('../../../static/images/fruit_2.jpg')
							}
						]
					},
					{
						order_id:9812574526312,
						order_status:'待付款',
						order_num:3,
						total_price:13.8,
						buttons:[
							{
								colorIsGreen:0,
								name:"cancel",
								texts:"取消订单",
								urls:"",
							},
							{
								colorIsGreen:1,
								name:"paid",
								texts:"立即支付",
								urls:""
							}
							
						],
						goods:[
							{
								name:'新疆阿克苏富士苹果 ',
								price:'13.8',
								num:1,
								attribute_selections:13.8,
								unit:'份',
								image: require('../../../static/images/fruit_3.jpg')
							}
							
						]
					},
					
					
				],
				
			}
		},

		components: {
			'mp-title': MpTitle,
			'footer-nav': FooterNav,
		},

		methods: {
			
		},

		created() {}
	}
</script>

<style scoped>
	.order{
		font-size: 28rpx;
		background: #fff;
		margin: 20rpx 0;
	}
	.order .item{
		padding: 0 20rpx;
		border-bottom: 1rpx solid #eee;
	}
	.order .order_id{		
		line-height: 80rpx;
	}
	.order .product_wrap{
		padding-top: 20rpx;
	} 
	.order .product_wrap img{
		width: 200rpx;
		height: 200rpx;
		float: left;
		margin-right: 20rpx;
	}
	.order .item_decoration{
		width: 69%;
		float: right;
	}
	.order .item_decoration>div{
		line-height: 60rpx;
	}
	.order .item_decoration>div:after{
		clear: both;
		display: table;
		content: "";
	}
	.order .title{
		width: 78%;
		line-height: 50rpx;
	}
	.order .status_wrap{
		text-align: right;
		line-height: 80rpx;
	}
	.order .grey{
		color: #999;
	}
	.order .status_wrap em{
		color: #000;
	}
	.order .status{
		padding: 0 20rpx;
		text-align: right;
	}
	.order .status_navigator{
		display: inline-block;
		padding: 20rpx 0;
	}
	.order .status_navigator span{
		display: inline-block;
		width: 160rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 24rpx;
		border: 1rpx solid #ccc;
		border-radius: 30rpx;
		text-align: center;
		margin-left: 20rpx;
	}
	.order span.confirm{
		border: 1rpx solid #458926;
		color: #458926;
	}
</style>