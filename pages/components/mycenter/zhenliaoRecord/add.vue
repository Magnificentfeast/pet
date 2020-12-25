<template>
	<view class="record">
		<u-navbar title="记录诊疗过程" :background="{background:'transparent'}" :immersive='true'></u-navbar>
		<view class="banner">
			<image src="/static/images/zhenliaobanner.png" mode="" class="bg"></image>
		</view>
		<view class="cell-gruops pets">
			<view class="pet-item">
				<view class="head-img">
					<image :src="pet.img" mode=""></image>
					<image v-if="pet.hasbao" class="bao" src="/static/images/bao-icon.png" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{pet.name}}
						<image v-if="pet.sex" src="/static/images/male.png" mode=""></image>
						<image v-else src="/static/images/female.png" mode=""></image>
					</view>
					<view class="info">
						{{pet.type}} | {{pet.status}} |  {{pet.birthday}}
					</view>
					<view class="idNum" v-if="pet.id">
						宠物身份ID:{{pet.id}}
					</view>
				</view>
				<view class="arrow-right">
					<image src="/static/images/arrow-left-blue.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="address cell-gruops">
			<view class="addres-icon">
				<image src="/static/images/location3.png" mode=""></image>
			</view>
			现在位置：宁波市镇海区庄市街道宁波大学北门
		</view>
		
		<view class="cell-gruops">
			<view class="hospital-item">
				<view class="head-img">
					<image :src="hospitalInfo.headimg" mode=""></image>
					<image src="/static/images/collect.png" mode="" class="collect" v-if="hospitalInfo.iscollect"></image>
				</view>
				<view class="infos">
					<view class="name">{{hospitalInfo.name}}</view>
					<view class="location">{{hospitalInfo.address}}</view>
					<view class="info">
						<view class="star-box">
							<view class="star-item" v-for="num in 5" :key="num">
								<image v-if="num <= hospitalInfo.star-1" class="star" src="/static/images/star.png" mode="aspectFill"></image>
								<image v-else class="star" src="/static/images/star1.png" mode="aspectFill"></image>
							</view>
						</view>
						<text class="mark">{{hospitalInfo.star}}分</text>
					</view>
					<view v-if="hospitalInfo.type==1" class="show-type type1">
						<text class="type">合约医院</text>
						<text class="per">
							<text class="num">{{hospitalInfo.per}}</text>%
						</text>
					</view>
					<view v-else class="show-type type2">
						<text class="type">协议医院</text>
						<text class="per">
							<text class="num">{{hospitalInfo.per}}</text>%
						</text>
					</view>
				</view>
			</view>
			<view class="cure-box">
				<view>
					<image src="/static/images/cure_list.png" mode="" class="icon"></image>
					<text>
					诊疗单号：{{cureInfo.id}}
					</text>
				</view>
				<view>
					<image src="/static/images/cure_star.png" mode="" class="icon"></image>
					<text>
					开始诊疗时间：{{cureInfo.starttime}}
					</text>
				</view>
			</view>
		</view>
		
		<view class="getpictrue">
			<image src="/static/images/getpictrue.png" mode=""></image>
		</view>
		
		<view class="photograph">
			<view class="camera">
				<image src="/static/images/camera2.png" mode=""></image>
				<view class="text">
					拍照
				</view>
			</view>
			<view class="video">
				<image src="/static/images/video-warning.png" mode=""></image>
				<view class="text">
					录像
				</view>
			</view>
		</view>
		
		<view class="img-box cell-gruops">
			<view class="title">
				<view class="warning-icon">
					<image src="/static/images/warning.png" mode=""></image>
				</view>
				<view class="text">
				诊疗期间请及时拍摄宠物实时照片或视频，比如各项检查治疗环节，数字影像，手术（前、中、后）环节，ICU康复环节等细节，细节越详细越有助于理赔。
				</view>
			</view>
			<view class="imgList">
				<view class="img" v-for="(img,k) in imgList" :key="k">
					<image :src="img.url" mode=""></image>
				</view>
			</view>
		</view>
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
				hospitalInfo:{
					headimg:'/static/images/addpet_banner.png',
					name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
					location:'海宁街226-228号（近新城锦绣东城小区）',
					star:5,
					range:1.3,
					type:2,
					per:30,
					iscollect:false
				},
				cureInfo:{
					id:'25545584456664545',
					starttime:'2019-06-06 上午10:00',
					endtime:'2019-06-06 下午 13:00'
				},
				imgList:[
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					},
					{
						url:'/static/images/addpet_banner.png',
					}
				]
			};
		}
	}
</script>

<style lang="less">
.record{
	padding-bottom: 100rpx;
}
.banner{
	position: relative;
	.bg{
		height: 437rpx;
		width: 100%;
	}
}
.cell-gruops{
	position: relative;
	margin: 50rpx 30rpx 0;
}


.pets{
	background: #FFFFFF;
	box-shadow: 0px 0px 51rpx 0px rgba(179, 179, 179, 0.25);
	border-radius: 25rpx;
	margin-top: -170rpx;
	.pet-item{
		padding: 25rpx 38rpx;
		border-bottom: 1px solid #F4F4F4;
		position: relative;
		.head-img{
			width: 125rpx;
			height: 125rpx;
			border-radius: 50%;
			overflow: hidden;
			display: inline-block;
		}
		.infos{
			display: inline-block;
			margin-left: 29rpx;
			.name{
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: bold;
				color: #555555;
				margin-bottom: 15rpx;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-left: 18rpx;
				}
			}
			.info{
				font-size: 20rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #777777;
				margin-bottom: 12rpx;
			}
			.idNum{
				font-size: 25rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
			}
		}
		.arrow-right{
			position: absolute;
			display: inline-block;
			right: 30rpx;
			top: 70rpx;
			width: 31rpx;
			height: 50rpx;
		}
		
	}
}

.address{
	height: 60rpx;
	line-height: 60rpx;
	padding: 0 30rpx;
	font-size: 25rpx;
	font-family: Alibaba PuHuiTi;
	font-weight: 400;
	color: #777777;
	.addres-icon{
		float: left;
		width: 32rpx;
		height: 40rpx;
		margin: 10rpx 20rpx 10rpx 0;
	}
}

.hospital-item{
	padding: 32rpx 30rpx 36rpx;
	border-bottom: 2rpx solid #F4F4F4;;
	position: relative;
	display: flex;
	.head-img{
		width: 125rpx;
		height: 125rpx;
		box-shadow: 0px -5rpx 10rpx 0px rgba(119, 119, 119, 0.2);
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
		}
		.info{
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

.cure-box{
	padding: 25rpx;
	border-bottom: 1px solid #F4F4F4;
	view{
		font-size: 28rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #777777;
		line-height: 40rpx;
		image{
			width: 25.6rpx;
			height: 25.6rpx;
			margin-right: 19rpx;
		}
	}
}

.getpictrue{
	height: 165rpx;
	margin: 14rpx 30rpx;
}

.photograph>view{
	width: 325rpx;
	height: 125rpx;
	display: inline-block;
	background: #FFFFFF;
	box-shadow: 0px 3rpx 14rpx 0px rgba(0, 0, 0, 0.13);
	border-radius: 25rpx;
	image{
		display: block;
		margin: 0 auto;
	}
	.text{
		font-size: 32rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
		text-align: center;
	}
}
.photograph{
	margin: 14rpx 30rpx 24rpx;
	.camera{
		image{
			margin-top: 16rpx;
			width: 54rpx;
			height: 50rpx;
		}
		.text{
			margin-top: 14rpx;
		}
	}
	.video{
		float: right;
		image{
			margin-top: 13rpx;
			width: 64rpx;
			height: 56rpx;
		}
		.text{
			margin-top: 14rpx;
		}
	}
}

.img-box{
	.title{
		font-size: 28rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #999999;
		line-height: 35rpx;
		margin-left: 24rpx;
		display: flex;
		.warning-icon{
			display: inline-block;
			width: 70rpx;
			height: 75rpx;
		}
		.text{
			width: 550rpx;
			display: inline-block;
			margin-left: 19rpx;
		}
	}
	.imgList{
		padding: 27rpx 10rpx 10rpx;
		.img{
			margin: 5rpx;
			width: 215rpx;
			height: 215rpx;
			display: inline-block;
			border-radius: 15rpx;
			box-shadow: 0px 0rpx 8rpx 0px rgba(119, 119, 119, 0.2);
			overflow: hidden;
		}
		&::after{
			content: '';
			clear: both;
		}
	}
}
</style>
	