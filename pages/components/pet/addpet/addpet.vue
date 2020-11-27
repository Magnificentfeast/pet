<template>
	<view class="addpet">
		<view class="head">
			<view class="headimg">
				<image src="/static/images/addpet_banner.png" mode="" class="bg"></image>
				<image :src="petInfo.headimg" mode="" v-if="petInfo.headimg" class="img"></image>
				<view class="upload" v-else>
					<image src="/static/images/camera1.png" mode="" class="icon"></image>
					<view class="text">
						上传宠物头像
					</view>
				</view>
			</view>
		</view>
		
		<view class="cell-gruops base">
			<u-form :model="petInfo">
				<u-field
					v-model="petInfo.name"
					label="宠物昵称"
					placeholder="请输入宠物昵称"
					 input-align="right"
				>
				</u-field>
				
				<u-field
					v-model="petInfo.type"
					label="宠物种类"
					placeholder="请选择"
					input-align="right"
					right-icon="arrow-down-fill"
					:disabled="true" 
					@click="showtypeAction" 
				>
				</u-field>
				<u-picker mode="selector" @confirm="clicktypeItem" :range="typeList" range-key="text" v-model="typeshow"></u-picker>
				
				<u-field
					v-model="petInfo.birthday"
					label="出生日期"
					placeholder="请选择"
					input-align="right"
					right-icon="arrow-down-fill"
					:disabled="true" 
					@click="showbirthdayAction" 
				>
				</u-field>
				<u-picker mode="time" @confirm="clickbirthdayItem"  v-model="birthdayshow"></u-picker>
				
				<u-form-item label-position="top" label="宠物性别" label-width="150">
					<view class="select sex">
						<view class="select-item checked" @click="checkSex('公')">
							公
						</view>
						<view class="select-item" @click="checkSex('母')">
							母
						</view>
					</view>
				</u-form-item>
				
				<u-form-item label-position="top" label="是否绝育" label-width="150">
					<view class="select jj">
						<view class="select-item" @click="checkjj(1)">
							是
						</view>
						<view class="select-item checked" @click="checkjj(0)">
							否
						</view>
					</view>
				</u-form-item>
			</u-form>
		</view>
		
		<view class="cell-gruops phone">
			<view class="title">
				宠物认证照片(小视频)
			</view>
			<view class="" style="padding: 0 20rpx;">
				<u-row gutter="16">
					<u-col span="4" class="phone-item">
						<view class="img-box">
							<blcok v-if="petInfo.phone1">
								<image :src="petInfo.phone1" mode="" class="img"></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove('phone1')"></u-icon>
							</blcok>
							<image v-else src="/static/images/camera.png" mode="" class="icon" @click="chooseimg1"></image>
						</view>
						<view class="text">
							全身照
						</view>
					</u-col>
					<u-col span="4" class="phone-item">
						<view class="img-box">
							<blcok v-if="petInfo.phone2">
								<image :src="petInfo.phone2" mode="" class="img"></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove('phone2')"></u-icon>
							</blcok>
							<image v-else src="/static/images/camera.png" mode="" class="icon" @click="chooseimg2"></image>
						</view>
						<view class="text">
							正脸照
						</view>
					</u-col>
					<u-col span="4" class="phone-item">
						<view class="img-box">
							<blcok v-if="petInfo.phone3">
								<image :src="petInfo.phone3" mode="" class="img"></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove('phone3')"></u-icon>
							</blcok>
							<image v-else src="/static/images/camera.png" mode="" class="icon" @click="chooseimg3"></image>
						</view>
						<view class="text">
							鼻纹照
						</view>
					</u-col>
					<u-col span="4" class="phone-item">
						<view class="img-box">
							<blcok v-if="petInfo.phone4">
								<image :src="petInfo.phone4" mode="" class="img"></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove('phone4')"></u-icon>
							</blcok>
							<image v-else src="/static/images/camera.png" mode="" class="icon" @click="chooseimg4"></image>
						</view>
						<view class="text">
							人宠合照
						</view>
					</u-col>
					<u-col span="4" class="phone-item">
						<view class="img-box">
							<blcok v-if="petInfo.video">
								<video v-if="petInfo.video" :src="petInfo.video" mode="" class="img"></video>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove('video')"></u-icon>
							</blcok>
							<image v-else src="/static/images/video.png" mode="" class="icon" @click="choosevideo"></image>
						</view>
						<view class="text">
							宠物活动视频
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		
		<view class="submit btn">
			确认提交
		</view>
		
		<view class="zancun btn">
			暂存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				petInfo:{
					headimg:"",
					name:'',
					type:'',
					birthday:'',
					sex:'',
					isjueyu:'',
					phone1:'',
					phone2:'',
					phone3:'',
					phone4:'',
					video:''
				},
				typeshow:false,
				typeList:[
					{
						text: '哈士奇',
					},
					{
						text: '金毛'
					},
					{
						text: '牧羊犬'
					},
					{
						text: '泰迪'
					},
				],
				birthdayshow:false,
			};
		},
		methods: {
			showtypeAction() {
				this.typeshow = true;
			},
			clicktypeItem(e) {
				console.log(e)
				this.petInfo.type = this.sexList[e].text;
			},
			showbirthdayAction() {
				this.birthdayshow = true;
			},
			clickbirthdayItem(e) {
				console.log(e)
				this.petInfo.birthday = e.year+'年'+e.month+'月'+e.day+'日';
			},
			chooseimg1(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
						that.petInfo.phone1 = res.tempFilePaths[0]
				        console.log(that.petInfo.phone1);
				    }
				});
			},
			chooseimg2(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.petInfo.phone2 = res.tempFilePaths[0]
				    }
				});
			},
			chooseimg3(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.petInfo.phone3 = res.tempFilePaths[0]
				    }
				});
			},
			chooseimg4(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.petInfo.phone4 = res.tempFilePaths[0]
				    }
				});
				
			},
			choosevideo(){
				let that = this;
				uni.chooseVideo({
				    count: 1, //默认9
				    success: function (res) {
						that.petInfo.video = res.tempFilePath;
				    }
				});
				
			},
			remove(item){
				console.log(this.petInfo[item]);
				this.petInfo[item] = ''
			}
		}
	}
</script>

<style lang="less">
.addpet{
	padding-bottom: 54rpx;
	.head{
		position: relative;
		.bg{
			height: 600rpx;
			width: 100%;
			z-index: -1;
		}
		.img{
			position: absolute;
			width: 200rpx;
			height: 200rpx;
			left: 50%;
			bottom: 79rpx;
			margin-left: -100rpx;
			border-radius: 50%;
		}
		.upload{
			width: 200rpx;
			height: 200rpx;
			position: absolute;
			left: 50%;
			bottom: 79rpx;
			margin-left: -100rpx;
			border-radius: 50%;
			background-color: #FFFFFF;
			.icon{
				width: 78rpx;
				height: 68rpx;
				margin: 45rpx 60rpx 0;
			}
			.text{
				margin-top: 10rpx;
				font-size: 20rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #999999;
				text-align: center;
			}
		}
	}
	.cell-gruops{
		font-size: 30rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 15rpx 15rpx 0px rgba(119, 119, 119, 0.05);
		border-radius: 30rpx;
		overflow: hidden;
		margin: 0 40rpx 0;
		.u-form-item{
			padding: 0 28rpx;
		}
		.select{
			margin-bottom: 10rpx;
			.select-item{
				width: 275rpx;
				height: 60rpx;
				background: #D7D7D7;
				border-radius: 10rpx;
				display: inline-block;
				line-height: 60rpx;
				text-align: center;
				&:last-child{
					margin-left: 60rpx;
				}
			}
			.checked{
				background: url(../../../../static/images/addpet_select.png) no-repeat;
				background-size: 100%;
				color: #FFFFFF;
			}
		}
	
	}
	.base{
		position: relative;
		top: -40rpx;
	}
	.phone{
		margin-top: 40rpx;
		.title{
			font-size: 30rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #313131;
			line-height: 100rpx;
			padding: 0 28rpx;
		}
		.phone-item{
			color: #555555;
			.img-box{
				position: relative;
				border: 2rpx solid #DDDDDD;
				border-radius: 15rpx;
				height: 253rpx;
				width: 100%;
				margin-bottom: 24rpx;
				overflow: hidden;
				.icon{
					width: 64rpx;
					height: 56rpx;
					margin: 95rpx 63rpx 0;
				}
				video{
					width: 100%;
					height: 100%;
				}
				.u-clear-icon{
					position: absolute;
					top: -20rpx;
					right: -20rpx;
				}
			}
			.text{
				text-align: center;
				margin-bottom: 35rpx;
				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
			}
		}
	}
	
	.btn{
		height: 100rpx;
		border-radius: 50rpx;
		line-height: 100rpx;
		font-size: 35rpx;
		text-align: center;
	}
	.submit{
		background-color: rgba(24, 171, 255, 1);
		color: #FFFFFF;
		margin: 88rpx 25rpx 0;
	}
	.zancun{
		margin: 34rpx 200rpx 0;
		border: 2px solid #DDDDDD;
		color: #777777;
	}
}
</style>
