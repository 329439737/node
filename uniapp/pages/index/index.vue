<template>
	<view class="content">
		<view class="topbar">
			<image  src="https://static.21cake.com/themes/wap/img/logo.png" class="title-logo" alt="21cake logo"/>
		</view> 
		<view class="fill" >
			
		</view>
		<view class="swiper-container">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="1000">
				<swiper-item v-for="(item,index) in banners" :key="index">
					<view class="swiper-item uni-bg-green">
						<image :src="item.ImgUrl" ></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="uni-flex uni-row info">
			<view class="flex-item">新客满298元赠送切块蛋糕</view>
			<view class="flex-item" style="margin: 0 10rpx">满101包邮</view>
			<view class="flex-item">全程冷链配送</view>
		</view>
		<view class="uni-flex uni-row ico">
			<view class="flex-item" v-for="(item,index) in icons" :key="index">
				<image :src="item.ImgUrl"></image>
				{{item.name}}
			</view>
		</view>
	
		<view class="goods">
			<view class="list" v-for="(item,index) in goods" :key="index">
				<view class="cover" @click="toPath(index)">
					 <image :src="item.ImgUrl"></image> 
				</view>
				<view class="text">
					<view class="cart" @click="add(item)">
					</view>
					<view>
						<text class="name">{{item.Name}}</text>
						<text class="price">{{item.Price}}</text>
						<text class="size">元{{item.Size}}g</text>
					</view>
					<view class="des">
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				banners:[],
				icons:[],
				goods:[],
				txt:'1'
			}
		},
		onShow() {
			uni.showTabBar();
			// #ifdef  MP-WEIXIN
			uni.request({
				url: 'http://localhost:3000/index', //仅为示例，并非真实接口地址。
				method:"GET",
					success: (res) => {
						//console.log(res);
						this.banners = res.data.banners;
						this.icons = res.data.icons;
						this.goods = res.data.goods;
						this.$store.state.goods = this.goods;
					//	console.log(this.$store.state.goods)
					}
			});
			
			// #endif
			
			// #ifdef  H5
			uni.request({
				url: '/doc/index', //仅为示例，并非真实接口地址。
				method:"GET",
					success: (res) => {
						this.banners = res.data.banners;
						this.icons = res.data.icons;
						this.goods = res.data.goods;
						this.$store.state.goods = this.goods;
					}
			});
			console.log("h5");
			// #endif
			
		},
		methods: {
			toPath (index){
				uni.navigateTo({
					url: "../detail/detail?index="+index
				})
			},
			add(item){
				//console.log(item)
				this.$store.commit("add",item);
			},
			
		}
	}
</script>


<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.topbar{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 10000;
			background: #fff;
			height: 48*2rpx;
			box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.10);
			text-align: center;
				image{
					width:60rpx;
					height:60rpx;
					margin-top: 20rpx;
				}
			}
		.fill{
			width: 100%;
			height:48*2rpx;
		}		
		.swiper-container{
			width: 100%;
			// #ifdef  MP-ALIPAY
				image{
					width: 100%;
				}
			// #endif
		}
		.ico{
			text-align: center;
			image{
				width: 58*2rpx;
				height: 58*2rpx;
				display: block;
				padding: 0 34rpx;
			}
		}
		.goods{
			width: 90%;
			border-top:1px solid #B2B2B2 ;
			margin-top:20rpx ;
			.list{
				margin: 50rpx 0;
				box-shadow: 0 4px 4px 0 #BBB;
				border-radius: 4px;
				.cover{
					width: 100%;
					height: 198*2rpx;
					image{
						width: 100%;
						height:100%;
					}
				}
				.text{
					padding: 20px 0 0 10rpx;
					.cart{
						width:60rpx;
						height: 60rpx;
						float: right;
						margin-top: 20rpx;
						margin-right: 20rpx;
						border-radius:50%;
						box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.10);
						background:url(https://static.21cake.com/themes/wap/img/new-home-icon.png) no-repeat;
						background-position: -90rpx -10rpx;
						background-size: 160rpx auto;
					}
					.name{
						font-weight: bold;
						font-size:15px;
						color:#322418;
						
					}
					.price{
						color:#C69C6D;
						margin-left: 10px;
					}
					.size{
						color:#b2b2b2;
					}
					.des{
						color: #442818;
					
					}
				}
			}
		}
	
		
	}
</style>
