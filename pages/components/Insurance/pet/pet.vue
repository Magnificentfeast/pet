<template>
	<view>
		<view class="headimg">
			<image src="/static/images/banner_index.png" mode=""></image>
		</view>
		
		<view class="cell-gruops pet-info">
			<view class="body">
				<view class="name">
					{{petInfo.name}}
					<view class="sex-icon">
						<image v-if="petInfo.sex == 1" src="/static/images/male.png" mode=""></image>
						<image v-else src="/static/images/female.png" mode=""></image>
					</view>
					
				</view>
				<view class="info">
					{{petInfo.type}} | {{petInfo.status}} |  {{petInfo.birthday}}
				</view>
				<view class="pet-id">
					<view class="bao-icon">
						<image src="/static/images/dangan.png" mode=""></image>
					</view>
					<view class="id-box">
						<view class="title">
							宠物身份ID
						</view>
						<view class="text">
							{{petInfo.id}}
						</view>
					</view>
				</view>
			</view>
			<view class="foot" v-if="petInfo.baodanList.length  > 0">
				<view class="baodanItem" v-for="(item,index) in petInfo.baodanList" :key='index'>
					<view class="icon-img">
						<image :src="item.icon" mode=""></image>
					</view>
					<view class="infos">
						<view class="info">
							<view>保险单号：{{item.id}}</view>
							<view>投保险种：{{item.text}}</view>
							<view>生效日期：{{item.startTime}}</view>
							<view>有效期：{{item.workTimeText}}({{item.workTime}})</view>
						</view>
						<view class="btn">
							续保
						</view>
					</view>
				</view>
			</view>
			<view class="foot" v-else>
				为爱宠添加保障
				<image class="arrow-right" src="/static/images/arrow-right-red.png" mode=""></image>
			</view>
		</view>
		
		<view class="cell-gruops pet-pictrue">
			<view class="title">
				<text>宠物认证照片</text>
				<text class="time">已于2020-08-16 认证</text>
			</view>
			<view class="picture-box">
				<view class="item">
					<view class="img">
						<image src="/static/images/quickTreat-banner.png" mode=""></image>
					</view>
					<view class="text">
						全身照
					</view>
				</view>
				<view class="item">
					<view class="img">
						<image src="/static/images/quickTreat-banner.png" mode=""></image>
					</view>
					<view class="text">
						正脸照
					</view>
				</view>
				<view class="item">
					<view class="img">
						<image src="/static/images/quickTreat-banner.png" mode=""></image>
					</view>
					<view class="text">
						人宠合照
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
				petInfo:{
					img:'/static/images/jilu.png',
					name:'狗蛋',
					type:'牧羊犬',
					status:'未绝育',
					birthday:'生日2020-05-26',
					id:'65412335456',
					hasbao:true,
					pictrue1:'/static/images/jilu.png',
					pictrue2:'/static/images/jilu.png',
					pictrue3:'/static/images/jilu.png',
					baodanList:[
						{
							type:'CPIC',
							icon:'/static/images/CPIC-icon.png',
							id:'25545584456664545',
							text:'太保宠物医疗险基本版(366)',
							startTime:'2020.08.15',
							workTimeText:'一年',
							workTime:'2020.08.08-2021.08.07'
						}
					]
				}
			};
		}
	}
</script>

<style lang="less">
.headimg{
	width: 200rpx;
	height: 200rpx;
	margin: 50rpx auto;
	border-radius: 50%;
	overflow: hidden;
	border: 2rpx solid #DDDDDD;
}
.cell-gruops{
	margin: 0 30rpx 30rpx;
}
.pet-info{
	.body{
		padding: 0 50rpx;
		position: relative;
		border-bottom: 2rpx solid #EDEDED;
		.name{
			margin-top: 41rpx;
			font-size: 32rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: bold;
			color: #111111;
			line-height: 38rpx;
			margin-bottom: 21rpx;
			.sex-icon{
				display: inline-block;
				width: 30rpx;
				height: 30rpx;
				margin-left: 18rpx;
			}
		}
		.info{
			font-size: 26rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #777777;
			margin-bottom: 12rpx;
		}
		.pet-id{
			margin-bottom: 20rpx;
			.bao-icon{
				width: 100rpx;
				height: 80rpx;
				display: inline-block;
				margin-right: 18rpx;
			}
			.id-box{
				display: inline-block;
				.title{
					font-size: 28rpx;
					color: #777777;
					margin-top: 0;
				}
				.text{
					font-size: 35rpx;
					color: rgba(42, 146, 243, 1);
				}
			}
		}
	}
	.foot{
		font-size: 35rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #FF0000;
		padding: 31rpx 50rpx 40rpx;
		.arrow-right{
			width: 24rpx;
			height: 24rpx;
			display: inline-block;
			margin-left: 21rpx;
		}
		.baodanItem{
			display: flex;
			.icon-img{
				width: 60rpx;
				height: 83rpx;
				display: inline-block;
				margin-left: 20rpx;
				margin-right: 38rpx;
			}
			.infos{
				flex: 1;
				.info{
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #777777;
				}
				.btn{
					width: 150rpx;
					height: 50rpx;
					border: 2rpx solid #DDDDDD;
					border-radius: 25rpx;
					font-size: 30rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					line-height: 50rpx;
					color: #777777;
					margin-top: 20rpx;
				}
			}
			
		}
	}
}

.pet-pictrue{
	padding: 0 40rpx;
	.title{
		margin-top: 30rpx;
		font-size: 30rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		color: #313131;
		.time{
			font-size: 25rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #777777;
			margin-left: 20rpx;
		}
	}
	.picture-box{
		margin-top: 30rpx;
		.item{
			display: inline-block;
			margin-right: 10rpx;
			padding-bottom: 30rpx;
			.img{
				width: 190rpx;
				height: 250rpx;
				border-radius: 15rpx;
				overflow: hidden;
			}
			.text{
				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
				text-align: center;
				margin-top: 20rpx;
			}
		}
	}
}
</style>
