<template>
	<div class="cartPage">
		<mp-title :title="title"></mp-title>

		<div id="content" class="cart_list">
			<ul>
				<li class="clearfix" v-for="(item,index) in listData" :data-index="index"  :key="index"
					 @touchstart="startMove" @touchmove="deleteGoods" @touchend="endMove">
					
					
					<div :style="item.textStyle" class="on">
						<i class="checkradio" :class="[ Listids[index] ? 'active' : '',{active:allcheck}]" @click="changeColor(index,item.goods_id)"></i>
						<div class="img_box">
							<img :src="item.image">
						</div>
						<div class="desc">
							<h5>{{item.title}}</h5>
							<div>
								<div class="price">
									<span class="money">¥{{item.price}}<em>/{{item.unit}}</em></span>
								</div>
								<div class="cart">
									<div class="minus" @click="reduceCart(index)"></div>
									<input type="number" readonly  class="count" v-model="item.count" >
									<div class="plus" @click="addCart(index)"></div>
								</div>
							</div>
							
						</div>
					</div>
					
					
					<div @click="delGoods(item.goods_id,index)" class="delete" :style="item.textStyle1">
						<div>删除</div>
					</div>
				</li>
			</ul>
		</div>
		
		<div class="total clearfix">
			<div class="all_check"  @click="allCheck" :class="{active:allcheck}">全选</div>
			<div class="goods_price">商品总价：<em>¥{{allPrice}}</em></div>
			<div class="right_item"  @click="orderDown">去结算</div>
		</div>

		<!--<footer-nav :navName="navName"></footer-nav>-->
	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';
	import Swiper from '@/components/Swiper';
	import FooterNav from '@/components/FooterNav';

	export default {
		data() {
			return {
				title: '购物车',
				navName: "cart",
				totalCount:29.9,
				allcheck: false,
				Listids: [],
				listData: [{					
						goods_id:2312312,
						title: '脆皮金桔',
						product_desc: '清甜饱满，薄皮易剥',
						image: require('../../../static/images/fruit.jpg'),
						price: 29.9,
						original_price: 32.90,
						tag: '新上架',
						unit: '盒',
						count:1
					},
					{
						goods_id:45634234,
						title: '都乐帝皇蕉',
						product_desc: '甜蜜肉嘟嘟 小朋友更爱吃',
						image: require('../../../static/images/fruit_2.jpg'),
						price: 29.9,
						original_price: 32.90,
						tag: '新上架',
						unit: '盒',
						count:1
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
				Y: ""
			}
		},

		components: {
			'mp-title': MpTitle,
			'mp-swiper': Swiper,
			'footer-nav': FooterNav,
		},

		methods: {
			reduceCart(index){             
                var nums=this.listData[index].count
                if(nums <= 1){
                	 wx.showToast({
			            title: "不能再减了",
			            icon: "none",
			            duration: 1500
			          });
                    return false;
                }
                this.listData[index].count--;
			},
			
			
			addCart(index){
				this.listData[index].count++;
				
			},
			
			
			changeColor(index, id) {
		        if (this.Listids[index]) {
		          this.$set(this.Listids, index, false);
		        } else {
		          this.$set(this.Listids, index, id);
		        }
		    },
		    
		    
			allCheck(){
				this.Listids = [];
				if (this.allcheck) {
		          this.allcheck = false;
		       } else {	
		          this.allcheck = true;
		          for (let i = 0; i < this.listData.length; i++) {
		            const element = this.listData[i];
		            this.Listids.push(element.goods_id);
		          }
		          
		        }
			},
			
			//滑动删除
			initTextStyle() {
				//滑动之前先初始化数据
				for(var i = 0; i < this.listData.length; i++) {
					this.listData[i].textStyle = "";
					this.listData[i].textStyle1 = "";
				}
			},
			startMove(e) {
				this.initTextStyle();
				this.startX = e.touches[0].pageX;
				this.startY = e.touches[0].pageY;
			},
			deleteGoods(e) {
				//滑动之前先初始化样式数据
				this.initTextStyle();
				var index = e.currentTarget.dataset.index;
				console.log(index);
				if(this.X <= -100) {
					this.flag = true;
				}
				if(!this.flag) {
					this.moveX = e.touches[0].pageX;
					this.moveY = e.touches[0].pageY;
					this.X = this.moveX - this.startX;
					this.Y = this.moveX - this.startY;
					this.listData[index].textStyle = `transform:translateX(${this.tranX}rpx);`;
					if(this.X >= 100) {
						this.X = 0;
					}
					this.tranX = this.X;
					if(this.X <= -100) {
						this.X = -100;
					}
					this.tranX1 = this.X;
					this.listData[index].textStyle1 = `transform:translateX(${this.tranX1}rpx);`;
				} else {
					this.moveX = e.touches[0].pageX;
					this.moveY = e.touches[0].pageY;
					this.X = this.moveX - this.startX;
					this.Y = this.moveX - this.startY;

					this.tranX = this.X - 100;
					this.listData[index].textStyle = `transform:translateX(${this.tranX}rpx);`;
					// transform:'translateX(' + tranX + 'rpx)'

					//console.log(this.listData[index].textStyle);

					if(this.X + -100 > -100) {
						this.flag = false;
					}
					this.tranX1 = -100;
					this.listData[index].textStyle1 = `transform:translateX(-100rpx);`;
					//console.log(this.listData[index].textStyle1);
					
				}

			},
			endMove(e) {
				var index = e.currentTarget.dataset.index;
				if(this.X > -50) {
					this.tranX1 = 0;
					this.tranX = 0;
					this.listData[index].textStyle = `transform:translateX(${this.tranX}rpx);`;
					this.listData[index].textStyle1 = `transform:translateX(${this.tranX1}rpx);`;
				} else if(this.X <= -50) {
					this.tranX1 = -100;
					this.tranX = -100;
					this.listData[index].textStyle = `transform:translateX(${this.tranX}rpx);`;
					this.listData[index].textStyle1 = `transform:translateX(${this.tranX1}rpx);`;
				}
			},
			
			async delGoods(id, index) {
				var _this = this;
				wx.showModal({
					title: "",
					content: "是否要删除该商品",
					success: function(res) {
						if(res.confirm) {
							_this.Listids.splice(index, 1);
//							const data = get("/cart/deleteAction", {
//								id: id
//							}).then(() => {
//								console.log("购物车数据", data)
//								_this.getListData();
//							});
						} else if(res.cancel) {
							console.log("用户点击取消");
							_this.initTextStyle();
						}
					}
				});
			},
			
			
			//结算
			async orderDown(){
				if (this.Listids.length == 0) {
		          wx.showToast({
		            title: "请选择商品",
		            icon: "none",
		            duration: 1500
		          });
		          return false;
		        }
				
			}
			
		},
		
		computed:{
			//总计价格
			allPrice() {
		        var Price = 0;
		        for (let i = 0; i < this.Listids.length; i++) {
		          if (this.Listids[i]) {
		            Price = Price + this.listData[i].price * this.listData[i].count;		            		            
		          }
		        }		       
		        Price = Price.toFixed(2)
		        return Price;
		      }
			
		},

		created() {}
	}
</script>

<style scoped>
	.cart_list .checkradio{
		width: 50rpx;
		height: 50rpx;
		background: url(../../../static/images/no_checked.png) no-repeat center center;
		background-size: contain;
		vertical-align: middle;
		position: absolute;
		left: 15rpx;
		top: 100rpx;
	}
	.cart_list .active{
		background: url(../../../static/images/checked.png) no-repeat center center;
		background-size: contain;
	}
	.cart_list li{
		border-bottom: 1px solid #eee;
		position: relative;
	}
	#content li{
		height: 200rpx;
	}
	.cart_list .img_box{
		margin-left: 60rpx;
	}
	.cart_list .on{
		transition:all 300ms ease;
		width: 100%;

	}
	#content img {
		width: 170rpx;
		height: 170rpx;
	}
	#content .desc{
		width:60%;
		z-index: 99;
		height: 200rpx;

	}	
	.cart_list .money,
	.cart_list .add {
		position: absolute;
	}
	#content .money{
		bottom: 50rpx;
	}
	.cart_list .minus,
	.cart_list .plus{
		display: inline-block;
		width: 46rpx;
		height:46rpx;
		vertical-align: middle;
	}
	.cart_list .cart{
		position: absolute;
		right: 0rpx;
		bottom: 40rpx;
	}
	.cart_list .minus{
		background: url(../../../static/images/minus-icon.png) center center;
		background-size: contain;
	}
	.cart_list .count{
		display: inline-block;
		border: 1px solid #ccc;
		width: 90rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 28rpx;
		margin: 0 8rpx;
		vertical-align: middle;
		
		
	}
	.cart_list .plus {
		background: url(../../../static/images/add-icon.png) center center;
		background-size: contain;
	}
	
	.cart_list .delete{
		position:absolute;
		width:100rpx;
		top:0;
		right:-100rpx;
		text-align:center;
		height:200rpx;
		line-height: 200rpx;
		background:#b4282d;
		color:#fff;
		transition:all 200ms ease;
		display:flex;
		align-items:center;
		justify-content:center;
		font-size: 30rpx;
	}
	.total .all_check{
		font-size: 26rpx;
		padding-left: 60rpx;
		width: 100rpx;
		vertical-align: middle;
		float: left;
		background: url(../../../static/images/no_checked.png) no-repeat center left;
		background-size:50rpx 50rpx;
		margin-left: 20rpx;
	}
	.total .active{
		background: url(../../../static/images/checked.png) no-repeat center left;
		background-size:50rpx 50rpx;
	}
	.total .goods_price{
		float: left;
		display: inline-block;
		width: 38%;
		font-size: 28rpx;
		text-align: right;
		
	}
	.total em{
		display: inline-block;
	}

	
</style>