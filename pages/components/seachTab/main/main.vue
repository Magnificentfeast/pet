<template>
	<view class="main">
		<view class="search-box">
			<u-search placeholder="搜索您需要的内容" v-model="keyword"></u-search>
		</view>
		<view class="tabs">
			<view class="tab-item" v-for="(tab,index) in tabs" :key="index"  @click="changetab(index)">
				<view class="img">
					<image :src="tab.image" mode=""></image>
				</view>
				<view class="text" :class="(current == index)?'active':''">
					{{tab.text}}
				</view>
			</view>
		</view>
		<view class="content">
			<hospitalList v-if="current == 0"></hospitalList>
			<petLifeList v-if="current == 1" ref='initData'></petLifeList>
			<userList v-if="current == 2"></userList>
		</view>
	</view>
</template>

<script>
	import hospitalList from "../../list/hospitalList.vue";
	import petLifeList from "../../list/petLifeList.vue";
	import userList from "../../list/userList.vue";
	export default {
		components:{
			'hospitalList':hospitalList,
			'petLifeList' :petLifeList,
			'userList'	  :userList
		},
		data() {
			return {
				tabs:[
					{
						image:'/static/images/seach_yiyuan.png',
						text:'宠物医院',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/seach_chongquan.png',
						text:'宠圈',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/seach_yonghu.png',
						text:'用户',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/seach_ketang.png',
						text:'育宠课堂',
						urlpath:'',
						count:0
					},
				],
				current:1,
				model_path:'hospitalList'
			};
		},
		methods:{
			changetab(index) {
				this.current = index;
				this.$refs.initData.addRandomData()
			},
		}
	}
</script>

<style lang="less">
page{
	background-color: #FFFFFF;
	.main{
		.search-box{
			margin: 12rpx 30rpx 0;
		}
		.tabs{
			margin-top: 16rpx;
			padding: 0 30rpx;
			position: relative;
			font-size: 28rpx;
			background: #F7F7F7;
			display: flex;
			.tab-item{
				flex: 1;
				text-align: center;
				.img{
					margin: 0 auto;
					width: 100rpx;
					height: 100rpx;
					margin-top: 21rpx;
					margin-bottom: 20rpx;
					border-radius: 50%;
					overflow: hidden;
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
					margin: 0 auto;
					padding-bottom: 24rpx;
					&.active::after{
						content: '';
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						height: 10rpx;
						background: linear-gradient(45deg, #3B1291, #8629E4);
						width: 60%;
						margin: 0 auto;
					}
				}
			}
		}
	}
}
</style>
