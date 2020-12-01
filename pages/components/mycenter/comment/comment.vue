<template>
	<view class="comment">
		<view class="cell-gruops">
			<view class="cell-box" v-for="item in list">
				<view class="headimg">
					<image :src="item.headimg" mode=""></image>
				</view>
				<view class="body">
					<view class="info">
						<view class="name">
							{{item.name}}
						</view>
						<view class="time">
							{{item.timetext}} 评论了你
						</view>
						<view class="text">
							{{item.text}}
						</view>
					</view>
					<view class="picture">
						<image :src="item.picture" mode=""></image>
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
				list:[
					{
						headimg:'/static/images/addpet_banner.png',
						name:'张凤华',
						time:'',
						timetext:'刚刚',
						text:'好可爱的猫猫狗狗，太可爱了！',
						picture:'/static/images/addpet_banner.png'
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'张凤华',
						time:'',
						timetext:'刚刚',
						text:'好可爱的猫猫狗狗，太可爱了！',
						picture:'/static/images/addpet_banner.png'
					},
					{
						headimg:'/static/images/addpet_banner.png',
						name:'张凤华',
						time:'',
						timetext:'刚刚',
						text:'好可爱的猫猫狗狗，太可爱了！',
						picture:'/static/images/addpet_banner.png'
					},
				]
			};
		}
	}
</script>

<style lang="less">
	.cell-gruops{
		margin: 30rpx;
	}
.cell-box{
	position: relative;
	display: flex;
	padding-right: 0 !important;
	padding-bottom: 0 !important;
	.headimg{
		width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
		overflow: hidden;
		display: inline-block;
		vertical-align: top;
		margin-right: 30rpx;
	}
	.body{
		display: inline-block;
		border-bottom: 2rpx solid #F0F0F0;
		flex: 1;
		.info{
			display: inline-block;
			.name{
				font-size: 36rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 600;
				color: #333333;
				margin-bottom: 21rpx;
			}
			.time{
				font-size: 25rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #999999;
				margin-bottom: 34rpx;
			}
			.text{
				font-size: r28px;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
				margin-bottom: 26rpx;
			}
		}
		.picture{
			position: absolute;
			right: 30rpx;
			top: 30rpx;
			width: 134rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}
	}
}
</style>
