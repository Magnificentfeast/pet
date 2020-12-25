<template>
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
				已关注
			</view>
			<view class="status " v-else>
				<u-icon name="plus"></u-icon> 关注
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'userList',
		data(){
			return{
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
			}
		}
	}
</script>

<style lang="less">
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
			height: 50rpx;
			font-size: 28rpx;
			border: 1px solid #777777;
			padding: 0 20rpx;
			line-height: 50rpx;
			float: right;
			border-radius: 50rpx;
			font-weight: 500;
			margin-top: 50rpx;
		}
	}
}
</style>
