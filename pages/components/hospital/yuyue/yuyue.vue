<template>
	<view class="main">
		<view class="hospital-item">
			<view class="head-img">
				<image :src="hospital.headimg" mode=""></image>
				<!-- <image src="/static/images/collect.png" mode="" class="collect" v-if="hospital.iscollect"></image> -->
			</view>
			<view class="infos">
				<view class="name">{{hospital.name}}</view>
				<view class="location">{{hospital.address}}</view>
				<view class="info">
					<view class="star-box">
						<view class="star-item" v-for="num in 5" :key="num">
							<image v-if="num <= hospital.star-1" class="star" src="/static/images/star.png" mode="aspectFill"></image>
							<image v-else class="star" src="/static/images/star1.png" mode="aspectFill"></image>
						</view>
					</view>
					<text class="mark">{{hospital.star}}分</text>
					<text class="range">{{hospital.range}}km</text>
				</view>
				<view v-if="hospital.type==1" class="show-type type1">
					<text class="type">合约医院</text>
					<text class="per">
						<text class="num">{{hospital.per}}</text>%
					</text>
				</view>
				<view v-else class="show-type type2">
					<text class="type">协议医院</text>
					<text class="per">
						<text class="num">{{hospital.per}}</text>%
					</text>
				</view>
			</view>
		</view>
		<view class="line-title">
			请选择宠物
		</view>
		<view class="cell-gruops">
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
		
		<view class="line-title">
			选择预约日期 & 时间
		</view>
		<view class="cell-gruops">
			<view class="chooseTime" @click="choosetime">
				{{yuyuetime}}
			</view>
			<u-picker v-model="timeshow" mode="time" :params="timeparams" @confirm="confirmTime"></u-picker>
		</view>
		
		<view class="line-title">
			病情描述
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
		<view class="btn submit" @click="submit">
			立即预约
		</view>
		
		<u-modal v-model="show" @cancel="" @confirm=""
		:show-title="false" show-cancel-button="ture" confirm-text="前往" cancel-text="返回" confirm-color="#18ABFF">
			<view class="modal-contect">
				<view class="icon">
					<image src="/static/images/Shape.png" mode=""></image>
				</view>
				<view class="title">
					成功预约
				</view>
				<view class="text">
					您的预约订单已经确认请到我的预约出示预约二维码
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hospital:{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						address:'海宁街226-228号（近新城锦绣东城小区）',
						star:3,
						range:1.3,
						type:1,
						per:60,
						iscollect:true
				},
				pet:{
					img:'/static/images/jilu.png',
					name:'狮子狗',
					type:'哈士奇',
					status:'未绝育',
					birthday:'生日2020-08-15',
					id:'5132124',
					hasbao:true,
					checked:false,
					sex:1
				},
				placeholder:'例如：医生您好，我家泰迪2岁，男孩，白天出去遛弯回来，呕吐了几次，没有以前活泼了，请问是什么问题？',
				textarea:'',
				video:'',
				imageList:[
					
				],
				show:false,
				yuyuetime:'点击选择预约时间',
				timeshow:false,
				timeparams: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
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
			},
			choosetime(){
				this.timeshow = true
			},
			confirmTime(res){
				console.log(res)
				this.yuyuetime = res.year + '-' + res.month + '-' + res.day + ' ' + res.hour+ ':' + res.minute
			}
		}
	}
</script>

<style lang="less">
.main{
	padding-bottom: 71rpx;
	.hospital-item{
		background-color: #FFFFFF;
		padding: 32rpx 30rpx 36rpx;
		position: relative;
		display: flex;
		.head-img{
			width: 125rpx;
			height: 125rpx;
			box-shadow: 0px -5px 10px 0px rgba(119, 119, 119, 0.2);
			border-radius: 20rpx;
			overflow: hidden;
			display: inline-block;
			position: relative;
			image{
				width: 125rpx;
				height: 125rpx;
			}
			.collect{
				position: absolute;
				top: 0;
				left: 0;
				width: 87rpx;
				height: 107rpx;
				z-index: 1;
			}
		}
		.infos{
			display: inline-block;
			margin-left: 27rpx;
			flex: 1;
			.name{
				font-size: 35rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 500;
				color: #000000;
				line-height: 38rpx;
				width: 470rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				height: 38rpx;
				margin-bottom: 15rpx;
			}
			.location{
				font-size: 25rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
				line-height: 38rpx;
				margin-bottom: 18rpx;
			}
			.info{
				margin-bottom: 20rpx;
				.star-box{
					display: inline-block;
					.star-item{
						display: inline-block;
						.star{
							width: 20rpx;
							height: 20rpx;
							display: inline-block;
							margin-right: 9rpx;
						}
					}
				}
				.mark{
					font-size: 23rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FE6545;
					line-height: 44rpx;
				}
				.range{
					float: right;
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #555555;
					line-height: 38rpx;
				}
			}
		}
		.show-type{
			width: 250rpx;
			height: 50rpx;
			border-radius: 50rpx;
			font-size: 25rpx;
			.type{
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				line-height: 50rpx;
				margin-left: 58rpx;
			}
			.per{
				.num{
					font-size: 30rpx;
					font-weight: bold;
				}
				font-family: DIN;
				line-height: 50rpx;
				margin-left: 23rpx;
			}
			&.type1{
				background: url(/static/images/hospital1.png) no-repeat;
				background-size: 100%;
				color: #FFFFFF;
			}
			&.type2{
				background: url(/static/images/hospital2.png) no-repeat;
				background-size: 100%;
				color: #777777;
			}
		}
	}
	
	.line-title{
		margin: 28rpx 30rpx 20rpx ;
		font-size: 38rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		color: #000000;
		line-height: 38rpx;
		padding-left: 18rpx;
		padding-top: 24rpx;
		padding-bottom: 12rpx;
		position: relative;
		&::before{
			content: '';
			height: 35rpx;
			width: 8rpx;
			background: #18ABFF;
			border-radius: 2px;
			position: absolute;
			left: 0;
			top: 27rpx;
		}
	}
	
	.cell-gruops{
		margin: 0 30rpx;
	}
	.left-icon{
		position: absolute;
		width: 31rpx;
		height: 50rpx;
		top:72rpx;
		right: 38rpx;
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
	.chooseTime{
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		padding: 0 50rpx;
	}
}
</style>
