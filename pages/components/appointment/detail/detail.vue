<template>
	<view class="detail">
		<view class="head">
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
				<view class="baozhang" v-if="pet.hasbao">
					<image src="/static/images/hasbao.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="cell-gruops info-bar" v-if="type == 1">
			<view class="title">
				预约单号：{{id}}
			</view>
			<view class="img">
				<image src="../../../../static/images/二维码.png" mode=""></image>
			</view>
			<view class="tip">
				二维码用于到医院后，医院扫描确认
			</view>
		</view>
		
		<view class="cell-gruops info-bar" v-else>
			<view class="title">
				预约单号：{{id}}
			</view>
			<view class="sub_title">
				医院已扫码确认，开始接诊
			</view>
			<view class="img-saoma">
				<image src="../../../../static/images/saoma.png" mode=""></image>
			</view>
		</view>
		
		
		<view class="line-title">
			宠物医院
		</view>
		<view class="hospital-item" >
			<view class="head-img">
				<image :src="hospitalInfo.headimg" mode=""></image>
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
					<text class="range">{{hospitalInfo.range}}km</text>
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
		
		<block v-if="type == 1">
			<view class="line-title">
				预约日期 & 时间
			</view>
			<view class="yuyue">
				<view class="time">
					2020-06-06   上午10:00
				</view>
				<view class="tips">
					<view class="title">
						注意事项
					</view>
					<view class="text">
						此预约订单将在2020-06-08 上午10:00后自动过期，请在规定时间内到预约宠物医院完成预约订单扫码确认。预约单过期后可重新预约。
					</view>
				</view>
			</view>
			<view class="btn submit">
				取消订单
			</view>
		</block>
		
		<block v-else>
			<view class="line-title">
				诊疗期间注意事项
			</view>
			<view class="yuyue">
				<view class="tips">
					<view class="text">
						投保人应该按照要求，及时在不同的诊疗环节拍摄宠物诊疗时的照片或者视频，比如各项检测环节，注射环节，包扎环节，手术环节，ICU康复环节等细节，细节越详细越有助于理赔。
					</view>
				</view>
			</view>
			<view class="btn submit" @click="addzhenliao">
				记录爱宠诊疗记录
			</view>
		</block>
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
				id:'25545584456664545',
				type:2
			};
		},
		methods:{
			addzhenliao(){
				uni.navigateTo({
					url:'/pages/components/mycenter/zhenliaoRecord/add?id='+this.id
				})
			}
		}
	}
</script>

<style lang="less">
// page{
// 	background-color: #FFFFFF;
// }
.head{
	background-color: #2E8DF4;
	height: 150rpx;
}

.cell-gruops{
	margin: 30rpx;
}

.pets{
	background: #FFFFFF;
	box-shadow: 0px 0px 51rpx 0px rgba(179, 179, 179, 0.25);
	border-radius: 25rpx;
	margin: 0rpx 30rpx 0;
	position: relative;
	margin-top: -100rpx;
	.pet-item{
		padding: 25rpx 38rpx;
		border-bottom: 1px solid #F4F4F4;
		position: relative;
		.head-img{
			width: 120rpx;
			height: 120rpx;
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
		.baozhang{
			position: absolute;
			display: inline-block;
			right: 30rpx;
			width: 65rpx;
			height: 104rpx;
		}
		
	}
}

.info-bar{
	padding: 35rpx;
	text-align: center;
	.title{
		margin-top: 34rpx;
		font-size: 32rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		color: #333333;
	}
	.sub_title{
		margin-top: 17rpx;
		font-size: 35rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 600;
		color: #18ABFF;
	}
	.img{
		width: 217rpx;
		height: 217rpx;
		margin: 0 auto;
		margin-top: 50rpx;
	}
	.tip{
		margin-top: 35rpx;
		font-size: 25rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #6D6C6C;
	}
	.img-saoma{
		width: 272rpx;
		height: 239rpx;
		margin: 0 auto;
		margin-top: 40rpx;
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

.hospital-item{
	padding: 32rpx 30rpx 36rpx;
	border-bottom: 2rpx solid #F4F4F4;;
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

.yuyue{
	padding: 0 45rpx 24rpx;
	border-bottom: 2rpx solid #F4F4F4;;
	.time{
		font-size: 35rpx;
		font-family: SF UI Display;
		font-weight: 500;
		color: #273D52;
	}
	.tips{
		font-weight: 500;
		color: #BBBBBB;
		line-height: 35rpx;
		.title{
			font-size: 30rpx;
			color: #BBBBBB;
		}
		.text{
			font-size: 25rpx;
			color: #BBBBBB;
		}
	}
	
}
.submit{
	margin:35rpx 30rpx ;
}
</style>
