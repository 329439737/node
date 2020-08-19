<template>
	<view class="wrap">
		<view class="title">
			<text >.满100元配送.</text>
		</view>
		<view class="list" v-for="(item,index) in cartList" :key="index">
			<view class="img">
				<image :src="item.ImgUrl"></image>
			</view>
			<view class="text" >
				<view class="name">{{item.details[0].Ename}}</view>
				<view class="name">{{item.Name}}</view>
				<view style="color:#969696">¥{{item.Price}}/{{item.Size}}g</view>
				<view class="btn">
					<view @click="sub(true,index)">+</view>
					{{item.num}}
					<view @click="sub(false,index)">-</view>
				</view>
			</view>
		</view>
		<view class="btm-bar">
			<view class="price">总价:{{allPrice||0}}</view>
			<view class="count">结算</view>
			<view class="back" @click="toPath">返回</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartList: [],
				allPrice: 0
			}
		},
		onLoad(){
			uni.hideTabBar();
		},
		onShow(){
			this.cartList = this.$store.state.cartList;
			console.log(this.cartList)
			uni.hideTabBar();
		},
		methods:{
			sub(bool,index){
				if( bool ){
					this.cartList[index].num++
				} else {
					this.cartList[index].num--
				}
				if(this.cartList[index].num<=0){
					this.cartList.splice(index,1);
				} else {
					this.$set(this.cartList,index,this.cartList[index]);
				}
				this.countPrice();
			},
			toPath(){
				uni.switchTab({
					url: "../index/index"
				})
			},
			countPrice(){
				var allPrice = 0;
				this.cartList.map(item=>{
					allPrice+= item.Price*item.num;
				})
				this.allPrice = allPrice.toFixed(2);
			}
		}
	}
</script>


<style lang="scss" scoped>
	.wrap {
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		right:0;
		background:#f8f8f8;
		.title{
			color:#442818;
			text-align: center;
		}
		.list{
			width:90%;
			margin:20rpx auto;
			background:#fff;
			padding:20rpx;
			display: flex;
			overflow: hidden;
			.text{
				width:100%;
			}
			.img{
				image{
					width: 120*2rpx;
					height:120*2rpx;
					border-radius: 4px;
					margin-right: 20rpx;
				}
			}
			.btn{
				display: block;
				float: right;
				color: #969696;
				view{
					display: inline-block;
					height: 50rpx;
					width: 50rpx;
					text-align: center;
					border-radius: 4px;
					border: 1px solid #969696;
				}
			}
		}
		.btm-bar{
			position: fixed;
			bottom:0;
			z-index: 99999;
			height: 88rpx;
			border-top:1px solid #B2B2B2;
			width: 100%;
			display: flex;
			text-align: center;
			.price{
				width:50%;
				line-height: 88rpx;
				text-align: left;
				padding-left: 20rpx ;
				font-size: 14px ;
				color: #442818;
				font-weight: bold;
			}
			.count{
				flex: 1;
				line-height: 88rpx;
				background: #442818;
				color:#fff;
			}
			.back{
				flex: 1;
				line-height: 88rpx;
			}
			
		}
	}
</style>
