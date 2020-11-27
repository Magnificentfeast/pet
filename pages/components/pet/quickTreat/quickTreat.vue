<template>
	<view class="">
		<view class="banner">
			<image src="/static/images/quickTreat-banner.png" mode="" class="bg"></image>
		</view>
		<view class="content">
			<view class="cell-gruops" style="">
				<view class="pet-item">
					<view class="head-img">
						<image :src="pet.img" mode=""></image>
					</view>
					<view class="infos">
						<view class="name">
							{{pet.name}}
							<view class="sex">
								<image v-if="pet.sex == 1" src="/static/images/male.png" mode=""></image>
								<image v-else src="/static/images/female.png" mode=""></image>
							</view>
						</view>
						<view class="info">
							{{pet.type}} | {{pet.status}} |  {{pet.birthday}}
						</view>
						<view class="idNum">
							<block v-if="pet.id">宠物身份ID:{{pet.id}}</block>
							<block v-else>
								<image style="width: 268rpx;height: 40rpx;" src="/static/images/hasid.png" mode=""></image>
							</block>
						</view>
					</view>
					<view class="left-icon">
						<image src="/static/images/arrow-left-blue.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="cell-gruops">
				<view class="cell-box">
					<view class="icon">
						<image src="/static/images/location.png" mode=""></image>
					</view>
					<view class="cell-content">
						<view class="title">您所在位置</view>
						<view class="address">{{address}}</view>
						<view class="addres-btn">更改发布地址</view>
					</view>
				</view>
			</view>
			<view class="cell-gruops describe">
				<view class="cell-box">
					<view class="title">
						<image src="/static/images/edit-blue.png" mode="" class="edit-icon"></image>
						<text>病情描述</text>
						<view class="right">0/500</view>
					</view>
					<view class="textarea">
						<textarea value="" :placeholder="placeholder" maxlength="500"/>
					</view>
					<view class="tip">关键信息：症状描述、患病时长、就诊经历、用药情况等</view>
					<u-row>
						<view class="upload-box">
							<view class="upload">
								<block v-if="video">
									<video :src="video" mode=""></video>
									<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove()"></u-icon>
								</block>
								<block v-else>
									<image @click="choosevideo" class="icon" src="/static/images/video.png" mode=""></image>
									<view class="text">
										添加视频
									</view>
								</block>
							</view>
							<view class="upload" v-for="(img,index) in imageList" :key="index">
								<block v-if="img">
									<image :src="img" mode=""></image>
									<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove(index)"></u-icon>
								</block>
								<block v-else>
									<image @click="chooseimg" class="icon" src="/static/images/camera.png" mode=""></image>
									<view class="text">
										添加图片
									</view>
								</block>
							</view>
							<view class="upload">
								<block>
									<image @click="addimg" class="icon" src="/static/images/camera.png" mode=""></image>
									<view class="text">
										继续添加
									</view>
								</block>
							</view>
						</view>
					</u-row>
				</view>
			</view>
		</view>
		<view class="btn submit" @click="submit">
			一键发布
		</view>
		<u-modal v-model="show" @cancel="" @confirm=""
		:show-title="false" show-cancel-button="ture" confirm-text="前往" cancel-text="返回" confirm-color="#18ABFF">
			<view class="modal-contect">
				<view class="icon">
					<image src="/static/images/Shape.png" mode=""></image>
				</view>
				<view class="title">
					成功发布
				</view>
				<view class="text">
					您的咨询已经发布成功为您推荐了附近5家宠物医院请到问诊记录查看医生回复
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pet:{
					img:'/static/images/jilu.png',
					name:'狮子狗',
					type:'哈士奇',
					status:'未绝育',
					birthday:'生日2020-08-15',
					id:'5132124',
					hasbao:true,
					sex:1
				},
				address:'宁波市镇海区庄市街道宁波大学北门',
				placeholder:'例如：医生您好，我家泰迪2岁，男孩，白天出去遛弯回来，呕吐了几次，没有以前活泼了，请问是什么问题？',
				textarea:'',
				video:'',
				imageList:[
					
				],
				show:false
			};
		},
		methods:{
			submit(){
				this.show = true
			},
			choosevideo(){
				let that = this;
				uni.chooseVideo({
				    count: 1, //默认9
				    success: function (res) {
						that.video = res.tempFilePath;
				    }
				});
			},
			chooseimg(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
						console.log(res)
						that.imageList.push(res.tempFilePaths[0])
				    }
				});
			},
			addimg(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
						console.log(res)
						that.imageList.push(res.tempFilePaths[0])
				    }
				});
			},
			remove(index){
				console.log(this.imageList[index])
				this.imageList.splice(index,1)
			}
		}
	}
</script>

<style lang="less">
.banner{
	position: relative;
	.bg{
		height: 437rpx;
		width: 100%;
	}
}
.content{
	position: relative;
	top: -150rpx;
	.cell-gruops{
		margin: 0 30rpx;
		margin-bottom: 25rpx;
		.left-icon{
			position: absolute;
			display: inline-block;
			right: 30rpx;
			width: 31rpx;
			height: 50rpx;
			top: 70rpx;
		}
		.icon{
			width: 56rpx;
			height: 76rpx;
			display: inline-block;
			vertical-align: top;
		}
		.cell-content{
			display: inline-block;
			margin-left: 34rpx;
			.title{
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 500;
				color: #555555;
				margin-bottom: 14rpx;
			}
			.address{
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #777777;
				margin-bottom: 17rpx;
			}
			.addres-btn{
				width: 200rpx;
				height: 50rpx;
				border: 2rpx solid #DDDDDD;
				border-radius: 25rpx;
				line-height: 50rpx;
				font-size: 25rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #999999;
				text-align: center;
			}
		}
	
	}
	.describe{
		.title{
			font-size: 35rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 500;
			color: #333333;
			height: 50rpx;
			position: relative;
			.edit-icon{
				width: 46rpx;
				height: 46rpx;
				margin-right: 24rpx;
			}
			text{
				position: absolute;
				left: 73rpx;
			}
			.right{
				float: right;
				font-size: 25rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #999999;
				line-height: 50rpx;
			}
		}
		.textarea{
			height: 250rpx;
			margin-top: 20rpx;
			textarea{
				height: 100%;
				font-size: 28rpx;
			}
		}
		.tip{
			font-size: 25rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #C7C7C7;
			line-height: 35rpx;
		}
		.upload-box{
			padding-top: 50rpx;
			.upload{
				width: 150rpx;
				height: 150rpx;
				border: 2rpx dashed #E4E4E4;
				border-radius: 10rpx;
				position: relative;
				display: inline-block;
				overflow: hidden;
				margin-right: 10rpx;
				.icon{
					width: 65rpx;
					height: 48rpx;
					margin: 27rpx 42rpx 15rpx;
				}
				.text{
					margin-top: 21rpx;
					margin-bottom: 15rpx;
					font-size: 20rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
					text-align: center;
				}
				.u-clear-icon{
					position: absolute;
					top: 10rpx;
					right: 10rpx;
				}
				video{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
.btn{
	position: relative;
	top: -100rpx;
}
.modal-contect{
	padding: 50rpx 0 36rpx;
	text-align: center;
	.icon{
		width: 192rpx;
		height: 192rpx;
		margin: 0 auto;
	}
	.title{
		color: #242E42;
		font-size: 40rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		margin: 43rpx 0 32rpx;
	}
	.text{
		width: 369rpx;
		font-size: 30rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #8A8A8F;
		margin: 0 auto;
	}
}
</style>
