<template>
	<div>
		<!-- 轮播图 -->
    	<swiper class="swiper"  :class = "changeHeight"  indicator-dots="true"  autoplay="true" interval="5000" duration="1000" beforeColor="red"
    		afterColor="coral">
   		 	<block v-for="(item, index) in images" :index="index" :key="key">
        		<swiper-item>
            		<image :src="item.url" class="slide-image" mode="widthFix"/>
        		</swiper-item>
    		</block>
		</swiper>
		
	</div>
</template>

<script>
export default{
	data(){
		return{
       		
		}
	},
	props:{
		images:{
			type:Array
		},
		changeHeight: [],
	}
}
</script>

<style>
.swiper{
	width:750rpx;
	background: #fff;
	height:320rpx;
}
.changeSwiperHeight{
	height:690rpx;
	
}
.swiper image{
	width:100%;
	height: 100%;
}
.swiper indicator-dots{
   color: red;
}
.swiper-pagination-bullet{background:red}
.swiper-pagination-bullet-active{background:yellow}
</style>