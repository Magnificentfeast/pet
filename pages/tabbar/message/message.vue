<template>
	<view class="message">
		<view class="search-box">
			<u-search v-model="value" @change="changeinput" @search="searchinput" :shape="shape" :clearabled="clearabled" 
			:show-action="showAction" @clear="clearinput"></u-search>
		</view>
		<view class="tabs">
			<view class="tab-item" v-for="(tab,index) in tabs" :key="index">
				<view class="img">
					<image :src="tab.image" mode=""></image>
				</view>
				<view class="text">
					{{tab.text}}
					<u-badge type="error" :is-dot="true" :count="tab.count" :is-center="true" ></u-badge>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="message-box" v-for="(item,index) in list" :key="index">
				<view class="headimg">
					<image :src="item.headimg" mode=""></image>
				</view>
				<view class="info">
					<view class="username">
						{{item.usrname}}
					</view>
					<view class="msg">
						{{item.lastmsg}}
					</view>
				</view>
				<view class="time">
						{{item.lasttime}}
				</view>
				<u-badge type="error" :count="item.count" :offset="offset"></u-badge>
			</view>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isdot:true,
				iscenter:true,
				offset:[80,50],
				
				tabs:[
					{
						image:'/static/images/tongzhi.png',
						text:'通知',
						urlpath:'',
						count:3
					},
					{
						image:'/static/images/wenzhen.png',
						text:'问诊',
						urlpath:'',
						count:4
					},
					{
						image:'/static/images/pinglun.png',
						text:'评论',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/zan.png',
						text:'赞',
						urlpath:'',
						count:0
					}
				],
				list:[
					{
						headimg:'/static/images/head-img.png',
						usrname:'宠物店',
						lastmsg:'你好呀',
						lasttime:'9:00',
						count:5,
					},
					{
						headimg:'/static/images/head-img.png',
						usrname:'一号宠物店',
						lastmsg:'你好呀',
						lasttime:'8:00',
						count:3,
					},
					{
						headimg:'/static/images/head-img.png',
						usrname:'周天宠物店',
						lastmsg:'你好呀',
						lasttime:'6:00',
						count:0,
					},
					{
						headimg:'/static/images/head-img.png',
						usrname:'周天宠物店',
						lastmsg:'你好呀',
						lasttime:'6:00',
						count:0,
					},
					{
						headimg:'/static/images/head-img.png',
						usrname:'周天宠物店',
						lastmsg:'你好呀',
						lasttime:'6:00',
						count:0,
					},
				],
				status: 'loadmore',
				page: 0,
				total:5
			};
		}
	}
</script>

<style lang="less">
.message{
	background-color: rgb(240, 240, 240);
	box-sizing: border-box;
	height: 100vh;
	margin-bottom: 140rpx;
	.search-box{
		background-color: #FFFFFF;
		padding: 12rpx 30rpx;
	}
	.tabs{
		background-color: #FFFFFF;
		padding: 12rpx 30rpx 36rpx;
		display: flex;
		position: relative;
		.tab-item{
			flex: 1;
			text-align: center;
			.img{
				margin: 0 auto;
				width: 100rpx;
				height: 100rpx;
				margin-bottom: 22rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				text-align: center;
				position: relative;
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #333333;
				line-height: 38rpx;
				width: 90rpx;
				margin: 0 auto;
			}
		}
	}
	.content{
		padding: 20rpx 0;
		.message-box{
			padding: 40rpx;
			position: relative;
			border-bottom: 1px solid #e5e5e5;
			.headimg{
				width: 88rpx;
				height: 80rpx;
				border-radius: 50%;
				overflow: hidden;
				display: inline-block;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.info{
				margin-left: 32rpx;
				display: inline-block;
				line-height: 50rpx;
				.username{
					font-size: 32rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #313131;
				}
				.msg{
					font-size: 24rpx;
					font-family: SourceHanSansCN;
					font-weight: 400;
					color: #999999;
				}
			}
			.time{
				display: inline-block;
				float: right;
				font-size: 24rpx;
				font-family: SourceHanSansCN;
				font-weight: 400;
				color: #999999;
			}
			// &::after{
			// 	content: '';
			// 	height: 1px;
			// 	width: 100%;
			// 	background-color: #e5e5e5;
			// 	position: absolute;
			// 	bottom:0
			// }
		}
	}
}
</style>
