<template>
	<view class="fans">
		<view class="user-list">
			<view class="user-item" v-for="(item,index) in list" :key='index'>
				<view class="headimg">
					<image :src="item.headimg" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{item.name}}
					</view>
					<view class="info">
						<text>动态：{{item.logNum}}</text>
						<text>粉丝：{{item.fansNum}}</text>
					</view>
				</view>
				<view class="status " v-if="item.status == 1">
					互相关注
				</view>
				<view class="status" v-else>
					已关注
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						headimg:'/static/images/user-icon.png',
						name:'安安宠物',
						fansNum:16,
						logNum:23,
						status:1,
					},
					{
						headimg:'/static/images/user-icon.png',
						name:'安安宠物',
						fansNum:16,
						logNum:23,
						status:0,
					},
					{
						headimg:'/static/images/user-icon.png',
						name:'安安宠物',
						fansNum:16,
						logNum:23,
						status:1,
					},
				]
			};
		}
	}
</script>

<style lang="less">
page{background-color: #FFFFFF;}
.user-list{
	.user-item{
		margin: 0 30rpx;
		padding: 18rpx 0;
		position: relative;
		height: 190rpx;
		.headimg{
			display: inline-block;
			width: 120rpx;
			height: 120rpx;
			position: absolute;
			left: 38rpx;
			top: 35rpx;
		}
		.infos{
			display: inline-block;
			position: absolute;
			left: 186rpx;
			top: 50rpx;
			line-height: 40rpx;
			.name{
				font-size: 32rpx;
				font-weight: bolder;
				margin-bottom: 16rpx;
			}
			.info{
				font-size: 28rpx;
				color: #999999;
				text{
					margin-right: 30rpx;
				}
			}
		}
		.status{
			display: inline-block;
			font-size: 28rpx;
			border: 2rpx solid #DDDDDD;
			padding: 0 20rpx;
			line-height: 65rpx;
			float: right;
			border-radius: 50rpx;
			font-weight: 500;
			margin-top: 50rpx;
			width: 160rpx;
			height: 67rpx;
			text-align: center;
			u-icon{
				margin-right: 5rpx;
			}
		}
		.type1{
			color: #1800FF;
		}
	}
}
</style>
