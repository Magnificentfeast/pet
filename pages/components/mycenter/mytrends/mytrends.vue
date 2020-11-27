<template>
	<view class="trends">
		<view class="tabs">
			<view class="tab" :class="{'curre':index==curre}" v-for="(item,index) in tabs" :key="index" @click="changetab(index)">
				<text>{{item.name}}</text>
				<text class="num">{{item.num}}</text>
			</view>
		</view>
		<petLifeList :ref='showlist'></petLifeList>
	</view>
</template>

<script>
	import petLifeList from '../../../../components/list/petLifeList.vue'
	export default {
		components:{
			"petLifeList":petLifeList
		},
		data() {
			return {
				tabs:[
					{name:'动态',num:5},
					{name:'点赞',num:33},
				],
				curre:0,
				showList:[
					
				]
			};
		},
		methods:{
			changetab(index){
				this.curre = index
			}
		}
	}
</script>

<style lang="less">

.trends{
	background-color: #FFFFFF;
	.tabs{
		display: flex;
		padding: 0 150rpx;
		text-align: center;
		.tab{
			position: relative;
			flex: 1;
			font-size: 32rpx;
			font-family: Alibaba PuHuiTi;
			margin-top: 30rpx;
			line-height: 40rpx;
			height: 60rpx;
			.num{
				margin-left: 5rpx;
				font-size: 32rpx;
				color: rgba(85, 85, 85, 1);
			}
		}
		.curre{
			font-size: 42rpx;
			font-weight: 500;
			&::after{
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				width: 	75rpx;
				height: 8rpx;
				margin: 0 auto;
				background: #2758FD;
			}
		}
	}
}
</style>
