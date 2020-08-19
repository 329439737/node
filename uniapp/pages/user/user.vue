<template>
	<view class="wrap">
		<view class="uni-form-item uni-column" v-if="active===1">
			<view class="title">用户登录</view>
			<view class="ipt">
				<text>账号</text>
				<input class="uni-input" name="input" placeholder="请输入账号.." v-model="phone"/>
			</view>
			<view class="ipt">git
				<text>密码</text>
				<input class="uni-input" name="input" placeholder="请输入密码.." v-model="pwd"/>
			</view>
			<view class="btn"> 
				<button size="mini" @click="login">登录</button>
				<button size="mini" @click="active=3">注册</button>
			</view>
		</view>
		<view class="my" v-if="active===2">
			<view class="top">
				<image src="https://m.21cake.com/wap_themes/21cake/images/icon/ico_member.png"></image>
				<view>{{userInfo.nickname}}</view>
				<view>
					手机:{{userInfo.phone}}
				</view>
			</view>
			<button @click="tui">退出</button>
		</view>
		<view class="uni-form-item uni-column" v-if="active===3">
			<view class="title">用户注册</view>
			<view class="ipt">
				<text>账号</text>
				<input class="uni-input" name="input" placeholder="请输入账号.." v-model="phone"/>
			</view>
			<view class="ipt">
				<text>密码</text>
				<input class="uni-input" name="input" placeholder="请输入密码.." v-model="pwd" />
			</view>
			<view class="ipt">
				<text>昵称</text>
				<input class="uni-input" name="input" placeholder="请输入密码.." v-model="nickname"/>
			</view>
			<view class="btn"> 
				<button size="mini" @click="reg">确认</button>
				<button size="mini" @click="active=1">返回</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				pwd: "",
				nickname: "",
				active: 1,
				userInfo: {
					phone:"",
					nickname:""
				}
			}
		},
		onShow() {
			uni.getStorage({
				key: "userInfo",
				success:(res)=>{
					this.userInfo = res.data;
					this.active = 2;
				}
			})
		},
		methods: {
			reg(){
				var data = {
					phone:this.phone,
					pwd:this.pwd,
					nickname:this.nickname
				}
				uni.request({
					url: 'http://localhost:3000/user/reg', //仅为示例，并非真实接口地址。
					method: "POST",
					data,
					success: (res) => {
						if(res.data.code === "10001"){
							uni.showModal({
								title: "提示",
								content: res.data.msg,
								showCancel:false
							})
						}else{
							uni.showModal({
								title: "提示",
								content: res.data.msg,
								showCancel:false,
								complete:()=>{
									this.active = 1;
								}
							})
						}
					}
				});
			},
			//退出
			tui(){
				this.active=1
				uni.clearStorage()
			},
			login(){
				var data = {
					phone:this.phone,
					pwd:this.pwd,
				}
				if(this.phone==""||this.phone==null||this.pwd==null||this.pwd==""){
					uni.showModal({
						title:"提示",
						content:"账号或密码不能为空",
						showCancel:false
					})
					
				}
				
				else{
					uni.request({
						
						url: 'http://localhost:3000/user/login', //仅为示例，并非真实接口地址。
						method: "POST",
						data,
						success:(res)=>{
							
							console.log(res);
							if(res.data.code === "10001"||res.data.code === "10002"){
								uni.showModal({
									title: "提示",
									content: res.data.msg,
									showCancel:false,
								})
							}else{
								uni.showModal({
									title: "提示",
									content: res.data.msg,
									showCancel:false,
									success:()=>{
										this.active = 2;
										this.userInfo = res.data.info;
										uni.setStorage({
											key: "userInfo",
											data:res.data.info
										})
									}
								})
							}
						}
					})
					
				}
				
				
			}
		}
	}
</script>


<style lang="scss" scoped>
	.wrap{
		color: #B2B2B2;
		.ipt{
			background:#FFF;
			width: 90%;
			margin: 0 auto;
			text{
				vertical-align: 20rpx
			}
			input{
				display: inline-block;
				border-bottom:1px solid #B2B2B2;
			}
			.btn{
				text-align: center;
			}
		}
		.my{
			border:1px solid #8e6a55;
			border-radius: 4rpx;
			width: 98%;
			margin: 0 auto;
			.top{
				text-align: center;
				image{
					border-radius: 50%;
					width: 100rpx;
					height: 100rpx;
					border:1px solid #8e6a55;
					display: inline-block;
				}
			}
			.bottom{
				display: flex;
				view{
					flex: 1;
					height: 50rpx;
					border:1px solid #8e6a55;
				}
			}
		}
	}
</style>
