<template>
	<view class="notice">
		<view class="cell-gruops" v-for="item in list">
			<view class="title">
				{{item.title}}
			</view>
			<view class="content">
				{{item.text}}
			</view>
			<view class="time">
				<text class="year">{{item.year}}年</text>
				<text class="month">{{item.month}}月</text>
				<text class="day">{{item.day}}日</text>
			</view>
			<image src="/static/images/new.png" mode="" class="new"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:'2020年10月份宠物医院新增通知',
						text:'2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知。',
						year:2020,
						month:5,
						day:24
					},
					{
						title:'2020年7月份宠物医院新增通知',
						text:'2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知。',
						year:2020,
						month:3,
						day:22
					},
					{
						title:'2020年6月份宠物医院新增通知',
						text:'2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知，2020年10月份宠物医院新增通知。',
						year:2020,
						month:5,
						day:2
					}
					
				]
			};
		}
	}
</script>

<style lang="less">
.notice{
	padding: 50rpx 30rpx;
	.cell-gruops{
		padding: 30rpx 46rpx;
		margin-bottom: 35rpx;
		position: relative;
		.title{
			font-size: 35rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 500;
			color: #333333;
		}
		.content{
			font-size: 28rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #777777;
			margin-top: 21rpx;
		}
		.time{
			font-size: 25rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #777777;
			margin-top: 38rpx;
			.year{
				margin-right: 20rpx;
			}
		}
		.new{
			position: absolute;
			right: 0;
			top: 0;
			width: 62rpx;
			height: 62rpx;
		}
	}
}
</style>
