<template>
	<view class="main">
		<view class="banner">
			<image src="/static/images/banner_index.png" mode="aspectFill"></image>
		</view>
		<view class="notice-box">
			<view class="left-icon">
				<image src="/static/images/notice.png" mode=""></image>
			</view>
			<view class="notice">
				<u-notice-bar mode="vertical" :list="list" type="none" :more-icon="true" :volume-icon="false"></u-notice-bar>
			</view>
		</view>
		<view class="content">
			<view class="search-box">
				<u-search v-model="keyword" :show-action="false" @change=""></u-search>
			</view>
			<view class="screen">
				<view class="item">
					全部分类<u-icon name="arrow-down-fill"></u-icon>
				</view>
				<view class="item">
					全城<u-icon name="arrow-down-fill"></u-icon>
				</view>
				<view class="item">
					智能排序<u-icon name="arrow-down-fill"></u-icon>
				</view>
			</view>
			<view class="">
				<hospitalList ref="hospital"></hospitalList>
			</view>
		</view>
	</view>
</template>

<script>
	import hospitalList from "../../../../components/list/hospitalList.vue";
	export default {
		components:{
			'hospitalList':hospitalList
		},
		data() {
			return {
				list:[
					'2020年10月份宠物医院新增通知',
					'这是一条公告，关于安安宠医调整的公告。'
				],
				keyword:'',
				
			};
		},
		onReachBottom() {
			// this.loadStatus = 'loading';
			// 模拟数据加载
			this.$refs.hospital.addRandomData();
			this.$refs.hospital.loadStatus = 'loadmore';
			// setTimeout(() => {
			// 	this.$refs.hospital.raddRandomData();
			// 	this.$refs.hospital.loadStatus = 'loadmore';
			// }, 1000)
		},
	}
</script>

<style lang="less">
.main{
	.banner{
		background-color: #FFFFFF;
		padding: 26rpx 30rpx;
		overflow: hidden;
		image{
			width: 100%;
			height: 275rpx;
		}
	}
	.notice-box{
		padding: 20rpx 37rpx;
		.left-icon{
			width: 92rpx;
			height: 75rpx;
			display: inline-block;
			padding-right: 8rpx;
			position: relative;
			&::after{
				content: '';
				position: absolute;
				right: 0;
				height: 100%;
				width: 2rpx;
				background: #BFBFBF;
			}
		}
		.notice{
			display: inline-block;
			width: 580rpx;
		}
		
	}
	.content{
		background-color: #FFFFFF;
		.search-box{
			padding: 20rpx 30rpx;
		}
		.screen{
			padding: 20rpx 30rpx;
			display: flex;
			font-size: 28rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #555555;
			border-bottom: 1px solid #eeeeee;
			.item{
				flex: 1;
				text-align: center;
			}
			u-icon{
				margin-left: 13rpx;
			}
		}
	}
}
</style>
