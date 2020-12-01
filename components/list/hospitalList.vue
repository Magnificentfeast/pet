<template>
	<view class="hospital-list">
		<view class="hospital-item" v-for="(item,index) in hospitalList" :key="index">
			<view class="head-img">
				<image :src="item.headimg" mode=""></image>
				<image src="/static/images/collect.png" mode="" class="collect" v-if="item.iscollect"></image>
			</view>
			<view class="infos">
				<view class="name">{{item.name}}</view>
				<view class="location">{{item.address}}</view>
				<view class="info">
					<view class="star-box">
						<view class="star-item" v-for="num in 5" :key="num">
							<image v-if="num <= item.star-1" class="star" src="/static/images/star.png" mode="aspectFill"></image>
							<image v-else class="star" src="/static/images/star1.png" mode="aspectFill"></image>
						</view>
					</view>
					<text class="mark">{{item.star}}分</text>
					<text class="range">{{item.range}}km</text>
				</view>
				<view v-if="item.type==1" class="show-type type1">
					<text class="type">合约医院</text>
					<text class="per">
						<text class="num">{{item.per}}</text>%
					</text>
				</view>
				<view v-else class="show-type type2">
					<text class="type">协议医院</text>
					<text class="per">
						<text class="num">{{item.per}}</text>%
					</text>
				</view>
			</view>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>
</template>

<script>
	export default {
		name: "hospitalList",
		data() {
			return {
				hospitalList:[
					{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						address:'海宁街226-228号（近新城锦绣东城小区）',
						star:3,
						range:1.3,
						type:1,
						per:60,
						iscollect:true
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						location:'海宁街226-228号（近新城锦绣东城小区）',
						star:5,
						range:1.3,
						type:2,
						per:30,
						iscollect:false
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						location:'海宁街226-228号（近新城锦绣东城小区）',
						star:5,
						range:1.3,
						type:2,
						per:30,
						iscollect:false
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						address:'海宁街226-228号（近新城锦绣东城小区）',
						star:3,
						range:1.3,
						type:1,
						per:60,
						iscollect:true
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						address:'海宁街226-228号（近新城锦绣东城小区）',
						star:3,
						range:1.3,
						type:1,
						per:60,
						iscollect:true
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
						address:'海宁街226-228号（近新城锦绣东城小区）',
						star:3,
						range:1.3,
						type:1,
						per:60,
						iscollect:true
					},
				],
				count:5,
				loadStatus: 'loadmore',
				
			};
		}
	}
</script>

<style lang="less">
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
</style>
