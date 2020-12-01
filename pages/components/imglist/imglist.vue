<template>
	<view class="imgList">
		<swiper :duration="200" :current="current">
			<swiper-item v-for="(img,index) in imgList" :key="index">
				<view class="swiper-item">
					<image :src="img.url" mode="center"></image>
					<view class="infos">
						<view class="address-icon">
							<image src="/static/images/address.png" mode=""></image>
						</view>
						<view class="info">
							<view class="time">
								{{img.time}}
							</view>
							<view class="address">
								{{img.address}}
							</view>
						</view>
						<view class="delete-icon">
							<image src="/static/images/delete.png" mode=""></image>
						</view>
					</view>
					<view class="indexShow">
						{{index+1}}/{{imgList.length}}
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:3,
				imgList:[
					{
						url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606812511622&di=f5fd2bfdd95de4bdb695ed7af1753efc&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120115%2FImg332227876.jpg',
						time:'2020年6月6日  09:30',
						address:'宁波市镇海区庄市街道宁波大学北门 1'
					},
					{
						url:'/static/images/banner_index.png',
						time:'2020年6月6日  09:30',
						address:'宁波市镇海区庄市街道宁波大学北门 2'
					},
					{
						url:'/static/images/banner_index.png',
						time:'2020年6月6日  09:30',
						address:'宁波市镇海区庄市街道宁波大学北门 3'
					},
					{
						url:'/static/images/banner_index.png',
						time:'2020年6月6日  09:30',
						address:'宁波市镇海区庄市街道宁波大学北门 4'
					},
					{
						url:'/static/images/banner_index.png',
						time:'2020年6月6日  09:30',
						address:'宁波市镇海区庄市街道宁波大学北门 5'
					},
					{
						url:'/static/images/banner_index.png',
						time:'2020年6月6日  09:30',
						address:'宁波市镇海区庄市街道宁波大学北门 6'
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	page{
		background-color: #000;
	}
.imgList{
	z-index: 10;
	width: 100%;
	height: 100vh;
	swiper{
		height: 100vh;
	}
	.swiper-item{
		width: 100%;
		height: 100vh;
		image{
			width: 100%;
			vertical-align: middle;
		}
		.infos{
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			width: 100%;
			height: 125rpx;
			background: #FFFFFF;
			box-shadow: 4rpx 3rpx 20rpx 0px rgba(0, 0, 0, 0.25);
			opacity: 0.7;
			.address-icon{
				display: inline-block;
				float: left;
				width: 48rpx;
				height: 64rpx;
				margin-left: 41rpx;
				margin-top: 31rpx;
			}
			.info{
				display: inline-block;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
				line-height: 36rpx;
				margin-top: 30rpx;
				margin-left: 30rpx;
				.time{
				font-size: 30rpx;
				}
				.address{
				font-size: 25rpx;
				}
			}
			.delete-icon{
				display: inline-block;
				float: right;
				width: 52rpx;
				height: 64rpx;
				margin-right: 49rpx;
				margin-top: 31rpx;
			}
		}
		.indexShow{
			position: fixed;
			top: 57rpx;
			left: 50%;
			transform: translateX(-50%);
			font-size: 28rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #FFFFFF;
		}
	}
}
</style>
