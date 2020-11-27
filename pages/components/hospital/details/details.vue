<template>
	<view class="details">
		<view class="banner">
			<image src="/static/images/banner_index.png" mode="aspectFill"></image>
		</view>
		
		<view class="info-bar">
			<view class="name">{{hospitalInfo.name}}</view>
			<view class="star-box">
				<view class="star">
					<u-rate :count="count" v-model="hospitalInfo.star"></u-rate> 
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
			<view class="address">
				<text>宠物医院</text>
				<text>高新区</text>
				<u-icon name="arrow-right" style="margin-left: 20rpx;"></u-icon>
			</view>
		</view>
		<u-gap height="8" bg-color="#F3F3F3"></u-gap>
		
		<view class="work-bar">
			<view class="work-time">
				<text class="">营业中 </text>
				<text class="">周一至周日</text>
				<text class="">08:30-20:30</text>
			</view>
			<view class="work-tpye">
				<view class="item">
					<u-tag text="动物诊疗许可证" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="绝育" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="疫苗" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="体检" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="动物诊疗许可证" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="动物诊疗许可证" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="动物诊疗许可证" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="动物诊疗许可证" type="info"  mode="plain" shape="circle"/>
				</view>
				<view class="item">
					<u-tag text="动物诊疗许可证" type="info"  mode="plain" shape="circle"/>
				</view>
			</view>
			<view class="right-arrow-icon">
				<u-icon name="arrow-right" color="#999999" size="32"></u-icon>
			</view>
		</view>
		
		<view class="addres-bar">
			<view class="left-icon">
				<image src="/static/images/location1.png" mode=""></image>
			</view>
			<view class="address-info">
				<view class="address">
					梅墟街道海宁街226-228号
				</view>
				<view class="range">
					距您1.2km
				</view>
			</view>
			<view class="right-icon">
				<image src="/static/images/phone-yellow.png" mode=""></image>
				<view class="text">
					电话
				</view>
			</view>
		</view>
		
		<view class="medical-bar">
			<view class="title">
				<text>医疗信息</text>
				<view class="right-bar">
					<text>查看详情</text>
					<u-icon name="arrow-right" style="margin-left: 20rpx;"></u-icon>
				</view>
			</view>
			<view class="items">
				<view class="item">
					<view class="label">
						诊疗对象
					</view>
					<view class="item-body">
						犬、猫、兔子、刺猬、鼠、鸟、鱼、乌龟、貂、猪、羊驼
					</view>
				</view>
				<view class="item">
					<view class="label">
						特色医科
					</view>
					<view class="item-body">
						普内科、普外科、猫科、牙科、皮肤科、产科、传染病科
					</view>
				</view>
			</view>
		</view>
		
		<u-gap height="8" bg-color="#F3F3F3"></u-gap>
		<view class="comment-bar">
			<view class="comment-head">
				<view class="title">
					<text>用户评价（20）</text>
					<view class="right-bar">
						<u-icon name="arrow-right" style="margin-left: 20rpx;"></u-icon>
					</view>
				</view>
				<view class="body">
					<view class="mark">
						<view class="num">
							5.0
						</view>
						<view class="star">
							<text class="text">综合评分</text>
							<u-rate :count="count" v-model="hospitalInfo.star" size="32"></u-rate> 
						</view>
					</view>
					<view class="text">
						高于99%同行好评率97%
					</view>
				</view>
			</view>
			<view class="comment-body">
				<view class="comment-item">
					<view class="headimg">
						<image src="/static/images/head-img.png" mode=""></image>
					</view>
					<view class="infos">
						<view class="title">
							<text class="name">流沙包</text>
							<text class="time">2017-08-22</text>
						</view>
						<u-rate :count="count" v-model="hospitalInfo.star" style="margin-left: -8rpx;"></u-rate> 
						<view class="text">
							快递不是一般的慢，演唱会结束了第二天才收到票，服务 态度不错给退票了。
						</view>
					</view>
				</view>
				<view class="comment-item">
					<view class="headimg">
						<image src="/static/images/head-img.png" mode=""></image>
					</view>
					<view class="infos">
						<view class="title">
							<text class="name">流沙包</text>
							<text class="time">2017-08-22</text>
						</view>
						<u-rate :count="count" v-model="hospitalInfo.star" style="margin-left: -8rpx;"></u-rate> 
						<view class="text">
							快递不是一般的慢，演唱会结束了第二天才收到票，服务 态度不错给退票了。
						</view>
					</view>
				</view>
				<view class="comment-item">
					<view class="headimg">
						<image src="/static/images/head-img.png" mode=""></image>
					</view>
					<view class="infos">
						<view class="title">
							<text class="name">流沙包</text>
							<text class="time">2017-08-22</text>
						</view>
						<u-rate :count="count" v-model="hospitalInfo.star" style="margin-left: -8rpx;"></u-rate> 
						<view class="text">
							快递不是一般的慢，演唱会结束了第二天才收到票，服务 态度不错给退票了。
						</view>
					</view>
				</view>
			</view>
			<view class="comment-foot">
				<view class="title">
					<text>查看全部用户评价</text>
					<view class="right-bar">
						共20条
						<u-icon name="arrow-right" style="margin-left: 20rpx;"></u-icon>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tabbars">
			<view class="item">
				<image src="/static/images/kefu-icon.png" mode=""></image>
				<view class="text">
					客服
				</view>
			</view>
			<view class="item">
				<image src="/static/images/phone-icon.png" mode=""></image>
				<view class="text">
					电话
				</view>
			</view>
			<view class="item">
				<image src="/static/images/star2.png" mode=""></image>
				<view class="text">
					收藏
				</view>
			</view>
			<view class="item1">
				<image src="/static/images/yuyue-icon.png" mode=""></image>
				<view class="text">
					我要预约
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hospitalInfo:{
					img:"",
					name:'安安宠医（奢宠宠物医院高新分院）',
					address:'海宁街226-228号（近新城锦绣东城小区）',
					star:3,
					range:1.3,
					type:1,
					per:60,
					phone:18356634271,
					iscollect:true
				},
				count:5,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
page{
	background-color: #FFFFFF;
	.details{
		.banner{
			background-color: #FFFFFF;
			padding: 26rpx 30rpx;
			overflow: hidden;
			image{
				width: 100%;
				height: 275rpx;
			}
		}
		.info-bar{
			margin: 0 30rpx;
			.name{
				margin-bottom: 15rpx;
				font-size: 40rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: bold;
				color: #000000;
				line-height: 50rpx;
			}
			.star-box{
				margin-bottom: 24rpx;
				.star{
					width: 200rpx; 
					display: inline-block;
					margin-right: 9rpx;
				}
				.mark{
					display: inline-block;
					font-size: 28rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FE6545;
					line-height: 44rpx;
				}
			}
			.show-type{
				width: 250rpx;
				height: 50rpx;
				border-radius: 50rpx;
				font-size: 25rpx;
				margin-bottom: 31rpx;
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
			.address{
				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
				line-height: 50rpx;
				margin-bottom: 23rpx;
				text{
					margin-right: 30rpx;
				}
			}
		}
		.work-bar{
			background-color: #FFFFFF;
			padding: 23rpx 30rpx;
			position: relative;
			.work-time{
				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #000000;
				line-height: 38rpx;
				text{
					margin-right: 35rpx;
				}
			}
			.work-tpye{
				.item{
					display: inline-block;
					margin-top: 20rpx;
					margin-left: 8rpx;
				}
			}
			.right-arrow-icon{
				position: absolute;
				right: 30rpx;
				top: 56rpx
			}
		}
		.addres-bar{
			background-color: #F8F8F8;
			padding: 0 30rpx;
			position: relative;
			height: 175rpx;
			.left-icon{
				display: inline-block;
				width: 56rpx;
				height: 62rpx;
				position: relative;
				top: -20rpx;
			}
			.address-info{
				display: inline-block;
				margin-top: 47rpx;
				margin-left: 19rpx;
				.address{
					font-size: 30rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #333333;
					margin-bottom: 21rpx;
				}
				.range{
					font-size: 28rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #777777;
				}
			}
			.right-icon{
				position: absolute;
				right: 30rpx;
				top: 37rpx;
				image{
					width: 76rpx;
					height: 76rpx;
				}
				.text{
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #777777;
					text-align: center;
					margin-top: 15rpx;
				}
			}
		}
		.medical-bar{
			padding: 0 30rpx;
			.items{
				margin-top: 40rpx;
				.item{
					display: flex;
					margin-bottom: 33rpx;
					.label{
						display: inline-block;
						font-size: 30rpx;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #777777;
					} 
					.item-body{
						display: inline-block;
						font-size: 30rpx;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #333333;
						margin-left: 44rpx;
						flex: 1;
					}
				}
			}
		}
		.comment-bar{
			margin-bottom: 120rpx;
			.comment-head{
				padding: 34rpx 30rpx;
				border-bottom: 2rpx solid #EEEEEE;
				.body{
					.mark{
						position: relative;
						margin-left: 62rpx;
						margin-top: 40rpx;
						display: inline-block;
						.num{
							display: inline-block;
							font-size: 75rpx;
							font-family: SF UI Display;
							font-weight: 300;
							color: #FE6545;
						}
						.star{
							margin-left: 30rpx;
							display: inline-block;
							width: 220rpx;
							font-size: 32rpx;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #777777;
							.text{
								margin-left: 8rpx;
							}
						}
						&::after{
							content: '';
							position: absolute;
							right: -20rpx;
							height: 100%;
							width: 2rpx;
							background: #E8E8E8;
						}
					}
					.text{
						display: inline-block;
						margin-left: 67rpx;
						width: 170rpx;
						font-size: 28rpx;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #999999;
					}
				}
			}
			.comment-body{
				.comment-item{
					border-bottom: 2rpx solid #EEEEEE;
					padding: 30rpx;
					display: flex;
					position: relative;
					.headimg{
						display: inline-block;
						width: 75rpx;
						height: 75rpx;
					}
					.infos{
						display: inline-block;
						flex: 1;
						margin-left: 28rpx;
						.title{
							position: relative;
							font-size: 30rpx;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #555555;
							margin-top: -5rpx;
							margin-bottom: 8rpx;
							.time{
								position: absolute;
								right: 0;
								font-size: 24rpx;
								font-family: SourceHanSansCN;
								font-weight: 400;
								color: #9D9D9D;
							}
						}
						.text{
							font-size: 28rpx;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #555555;
							margin-top: 27rpx;
						}
					}
				}
			}
			.comment-foot{
				padding: 0 30rpx 30rpx;
			}
		}
		.tabbars{
			display: flex;
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			height: 120rpx;
			background: #FFFFFF;
			box-shadow: 4rpx 3rpx 20rpx 0px rgba(0, 0, 0, 0.25);
			width: 100%;
			.item{
				margin: 19rpx 0;
				width: 20%;
				text-align: center;
				border-left: 2rpx solid #E2E2E2;
				image{
					width: 45rpx;
					height: 45rpx;
				}
				.text{
					margin-top: 8rpx;
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
				}
			}
			.item1{
				padding-top: 37rpx;
				width: 40%;
				background: rgba(24, 171, 255, 1);
				text-align: center;
				image{
					width: 45rpx;
					height: 45rpx;
					display: inline-block;
				}
				.text{
					display: inline-block;
					font-size: 35rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
					margin-left: 14rpx;
					position: relative;
					top: -10rpx;
				}
			}
		}
	}
	
}
</style>
