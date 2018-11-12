<template>
	<div id="add_address">
		<mp-title :title="title"></mp-title>
		<div>
			<form>
				<div class="info">
					<div>
						<label>收货人</label>
						<input type="text" placeholder="请输入收货姓名" v-model="userName">
					</div>
					<div>
						<label>联系电话</label>
						<input type="tel" placeholder="请填写收货手机号" v-model="telNumber">
					</div>
				</div>
				
				<div class="info">
					<div>
						<label>选择城市</label>						
						<picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem" class="select_address">
		        			<input type="text" placeholder="请选择城市" v-model="address">
		     			</picker>
						
					</div>
					<div>
						<label>收货地址</label>
						<input type="text" placeholder="请输入您的详细地址，具体门牌号" v-model="detailadress">
					</div>
				</div>
				
				<div class="save">保存地址</div>
			</form>
		</div>

	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';

	export default {
		data() {
			return {
				title: '添加地址',
				region: [],
				userName:"",
				telNumber:"",
				address:"",
				detailadress:""
			}
		},

		components: {
			'mp-title': MpTitle
		},
		methods: {
			bindRegionChange(e) {
		      var value = e.mp.detail.value;
		      this.address = value[0] + " " + value[1] + " " + value[2];
		    },
		},
		mounted(){
			//console.log("传值",this.$root.$mp.query.res)
			 if (this.$root.$mp.query.res) {
			    this.res = JSON.parse(decodeURIComponent(this.$root.$mp.query.res));
			    console.log(this.res);
			    this.userName = this.res.userName;
			    this.telNumber = this.res.telNumber;
			    this.address = `${this.res.provinceName} ${this.res.cityName} ${this.res.countyName}`;
			    this.detailadress = this.res.detailInfo;
		    }
		    if (this.$root.$mp.query.id) {
		      this.id = this.$root.$mp.query.id;
		      this.getDetail();
		    }
		},
		created() {}
	}
</script>

<style scoped>
	.info{		
		background: #fff;
		margin: 20rpx 0;
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		border-bottom: 1rpx solid #eee;
	}
	.info>div{
		line-height: 80rpx;
		height: 80rpx;
		width: 750rpx;
	}
	.info label{
		display: inline-block;
		width: 22%;
	}
	.info input{
		display: inline-block;
		vertical-align: middle;
		font-size: 30rpx;
		width: 560rpx;
		/*width: 76%;
		overflow: visible;*/
		padding-left: 20rpx;
		margin-bottom: 10rpx;
		box-sizing: border-box;
	}
	
	.info .select_address{
		display: inline-block;
	}
	.save{
		background: #458926;
		color: #fff;
		text-align: center;
		font-size: 30rpx;
		width: 90%;
		margin: 40rpx auto;
		border-radius: 36rpx;
		height: 90rpx;
		line-height: 90rpx;
		
	}
</style>