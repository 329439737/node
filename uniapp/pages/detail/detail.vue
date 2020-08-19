<template>
	<view class="content">
		<view class="swiper-container">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="1000">
				<swiper-item v-for="(item,index) in detail.swipers" :key="index">
					<view class="swiper-item uni-bg-red">
						<image :src="item" ></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="textcont">
			<text class="title">{{detail.Ename}}</text>
			<view>
				<text style="font-size:14px">{{goods.Name}}</text>
			</view>
			<text class="price">{{goods.Price}}</text>
			<view class="desc">
				<view v-for="(item,index) in detail.Describe" :key="index">{{item}}</view>
			</view>
		</view>
		<view class="imgs">
			<image v-for="(item,index) in detail.ImgUrls" :src="item" :key="index"></image>
		</view>
	</view>
</template>

<script>
	export default {
		 data () {
			 return {
				 goods:{},
				 detail:{}
			 }
		 },
		 onLoad(e){
			
			 this.goods = this.$store.state.goods[e.index];
			
			 this.detail = this.goods.detail
			   console.log(this.detail)
		 }
	}
</script>
<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.swiper-container{
			width: 100%;
		}
		.textcont{
			.title{
				font-weight: normal;
				font-size: 19px;
			}
			.price{
				font-size:16px;
				color:#C69C6D;
			}
			.desc {
				 text-align: left;  
			}
		}
	}
</style>
