<template>
	<view class="my">
		<view class="cell-gruops" v-for="(item,index) in list" :key="index">
			<view class="cell-box head">
				<view class="head-img">
					<image :src="item.pet.img" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{item.pet.name}}
						<image v-if="item.pet.sex" src="/static/images/male.png" mode=""></image>
						<image v-else src="/static/images/female.png" mode=""></image>
					</view>
					<view class="info">
						{{item.pet.type}} | {{item.pet.status}} |  {{item.pet.birthday}}
					</view>
				</view>
				<view class="status1" v-if="item.status">
					<view class="text">
						剩余时间
					</view>
					<u-count-down 
					:timestamp="86400" separator="colon" separator-size="25" separator-color="#FFFFFF" 
					color="#FFFFFF" bg-color="rgba(24, 171, 255, 1)"></u-count-down>
				</view>
				<view v-else class="status">
					<view class="text">
						已结束
					</view>
				</view>
			</view>
			<view class="cell-box body">
				<view class="question">
					<view class="img">
						<image src="/static/images/wen.png" mode=""></image>
					</view>
					<view class="text">
						{{item.question.text}}
					</view>
				</view>
				<view class="answer" v-for="answer in item.answers">
					<view class="img">
						<image :src="answer.img" mode=""></image>
					</view>
					<view class="content">
						<view class="name">
							{{answer.name}}
						</view>
						<view class="text">
							{{answer.text}}
							<text class="time">{{answer.timetext}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="cell-box foot">
				<text>发布于{{item.daytext}}</text> 
				<text style="margin-left: 20rpx;">{{item.hourtext}}</text>
				<view class="godetial" @click="godetial(item)">
					 <u-icon name="arrow-right"  label="进入详情" label-pos='left'></u-icon>
				</view>
			</view>
		</view>
		<view class="quicklink">
			<image src="/static/images/quickLink.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:
				[
					{
						pet:{
							img:'/static/images/jilu.png',
							name:'狮子狗',
							type:'哈士奇',
							status:'未绝育',
							birthday:'生日2020-08-15',
							id:'5132124',
							hasbao:true,
							sex:1
						},
						question:{
							text:"医生您好，我家泰迪2岁，男孩，白天出去遛弯回来，呕吐了几次，没有以前活泼了，请问是什么问题？"
						},
						answers:[
							{
								img:'/static/images/jilu.png',
								name:'安安宠医（高新区店）',
								text:"您好，宝贝可能吃坏东西了，需要来医院检查一下。",
								timestamp:'',
								timetext:'今天20:30'
							}
						],
						timestamp:'',
						daytext:'2020-08-16',
						hourtext:'20:30',
						endtime:'',
						endtimetext:'20:00:15',
						status:0
					},
					{
						pet:{
							img:'/static/images/jilu.png',
							name:'狮子狗',
							type:'哈士奇',
							status:'未绝育',
							birthday:'生日2020-08-15',
							id:'5132124',
							hasbao:true,
							sex:1
						},
						question:{
							text:"医生您好，我家泰迪2岁，男孩，白天出去遛弯回来，呕吐了几次，没有以前活泼了，请问是什么问题？"
						},
						answers:[
							{
								img:'/static/images/jilu.png',
								name:'安安宠医（高新区店）',
								text:"您好，宝贝可能吃坏东西了，需要来医院检查一下。",
								timestamp:'',
								timetext:'今天20:30'
							},
							{
								img:'/static/images/jilu.png',
								name:'安安宠医（高新区店）',
								text:"您好，宝贝可能吃坏东西了，需要来医院检查一下。",
								timestamp:'',
								timetext:'今天20:30'
							},
							{
								img:'/static/images/jilu.png',
								name:'安安宠医（高新区店）',
								text:"您好，宝贝可能吃坏东西了，需要来医院检查一下。",
								timestamp:'',
								timetext:'今天20:30'
							}
						],
						timestamp:'',
						daytext:'2020-08-16',
						hourtext:'20:30',
						endtime:'',
						endtimetext:'20:00:15',
						status:1
					},
					{
						pet:{
							img:'/static/images/jilu.png',
							name:'狮子狗',
							type:'哈士奇',
							status:'未绝育',
							birthday:'生日2020-08-15',
							id:'5132124',
							hasbao:true,
							sex:1
						},
						question:{
							text:"医生您好，我家泰迪2岁，男孩，白天出去遛弯回来，呕吐了几次，没有以前活泼了，请问是什么问题？"
						},
						answers:[
							{
								img:'/static/images/jilu.png',
								name:'安安宠医（高新区店）',
								text:"您好，宝贝可能吃坏东西了，需要来医院检查一下。",
								timestamp:'',
								timetext:'今天20:30'
							}
						],
						timestamp:'',
						daytext:'2020-08-16',
						hourtext:'20:30',
						endtime:'',
						endtimetext:'20:00:15',
						status:1
					},
				]
			};
		},
		methods:{
			godetial(item){
				uni.navigateTo({
					url:'/pages/components/inquiry/detail/detail?id='+item.id
				})
			}
		}
	}
</script>

<style lang="less">
.cell-gruops{
	margin: 30rpx;
	overflow: hidden;
	.cell-box{
		padding: 25rpx 38rpx;
		border-bottom: 1px solid #F4F4F4;
		position: relative;
	}
	.head{
		position: relative;
		.head-img{
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			overflow: hidden;
			display: inline-block;
		}
		.infos{
			display: inline-block;
			margin-left: 29rpx;
			.name{
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: bold;
				color: #555555;
				margin-bottom: 15rpx;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-left: 18rpx;
				}
			}
			.info{
				font-size: 20rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #777777;
				margin-bottom: 12rpx;
			}
		}
		.status1{
			position: absolute;
			right: 0;
			top: 0;
			padding: 18rpx 40rpx;
			background-color: rgba(24, 171, 255, 1);
			border-radius: 0 25rpx 0 25rpx;
			color: #FFFFFF;
			font-size: 25rpx;
			text-align: center;
		}
		.status{
			position: absolute;
			right: 0;
			top: 0;
			padding: 18rpx 40rpx;
			background-color: rgba(195, 195, 195, 1);
			border-radius: 0 25rpx 0 25rpx;
			color: #FFFFFF;
			font-size: 25rpx;
			text-align: center;
		}
	}
	.body{
		padding-right: 0;
		padding-left: 0;
		.question{
			display: flex;
			.img{
				width: 40rpx;
				height: 40rpx;
				display: inline-block;
				vertical-align: top;
				margin-right: 28rpx;
				margin-left: 42rpx;
			}
			
			.text{
				flex: 1;
				display: inline-block;
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #777777;
				line-height: 35rpx;
				border-bottom: 2rpx solid #F5F5F5;
				padding-bottom: 19rpx;
				padding-right: 28rpx;
			}
		}
		.answer{
			padding-top: 21rpx;
			display: flex;
			.img{
				width: 60rpx;
				height: 60rpx;
				display: inline-block;
				vertical-align: top;
				border-radius: 50%;
				margin-right: 18rpx;
				overflow: hidden;
				margin-left: 32rpx;
			}
			.content{
				flex: 1;
				display: inline-block;
				border-bottom: 2rpx solid #F5F5F5;
				.name{
					margin-bottom: 24rpx;
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #777777;
				}
				.text{
					flex: 1;
					display: inline-block;
					font-size: 28rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #000000;
					line-height: 35rpx;
					padding-right: 28rpx;
					.time{
						font-size: 23rpx;
						color: rgba(153, 153, 153, 1);
					}
				}
				border-bottom: 2rpx solid #F5F5F5;
				padding-bottom: 19rpx;
			}
			&:last-child .content{
				border-bottom: none;
			}
		}
	}
	.foot{
		font-size: 25rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #777777;
		line-height: 35rpx;
		.godetial{
			float: right;
			font-size: 25rpx;
		}
	}
}
.quicklink{
	width: 170rpx;
	height: 170rpx;
	position: fixed;
	right: 24rpx;
	bottom: 20rpx;
}
</style>
