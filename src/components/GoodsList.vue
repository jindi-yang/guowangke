<template>
	<div id="content">
		<ul>
			<li v-for="(item,index) in listItem" :key="index" @click="goodsDetail(item.id)">
				<div class="img-box">
					<img :src='item.image'>
				</div>
				<div class="desc">
					<h5>{{item.title}}</h5>
					<p>{{item.product_desc}}</p>
					<div class="tag">{{item.tag}}</div>
					<div class="price">
						<span class="money">
							¥{{item.price}}
                    		<em>/{{item.unit}}</em>
                    		<em class="original_price">{{item.original_price}}</em>
                  		</span>
						<span class="add" @click="addCart"></span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'GoodsList',
		data() {
			return {
				listItem: [{
						id: 125475662,
						title: '脆皮金桔',
						product_desc: '清甜饱满，薄皮易剥',
						image: require('../../static/images/fruit.jpg'),
						price: 29.9,
						original_price: 32.90,
						tag: '新上架',
						unit: '盒'
					},
					{
						id: 563284523,
						title: '脆皮金桔',
						product_desc: '清甜饱满，薄皮易剥',
						image: require('../../static/images/fruit2.jpg'),
						price: 29.9,
						original_price: 32.90,
						tag: '新上架',
						unit: '盒'
					}
				],
			}
		},
		methods: {
			addCart() {

			},
			goodsDetail(id) {
				wx.navigateTo({
					url: "/pages/index/details/main?id=" + id
				});
			},
		}
	}
</script>

<style scoped>
	#content p {
		color: #878787;
		font-size: 26rpx;
		line-height: 50rpx;
	}
	
	#content .tag {
		padding: 6rpx 10rpx;
		color: #fff;
		font-size: 22rpx;
		background-color: #ff8a65;
		border-radius: 8rpx;
	}
	
	#content .money,
	#content .add {
		position: absolute;
		right: 0rpx;
		bottom: 10rpx;
	}
	
	#content .add {
		display: inline-block;
		width: 60rpx;
		height: 60rpx;
		background: url(../../static/images/add-icon.png) center center;
		background-size: contain;
	}
</style>