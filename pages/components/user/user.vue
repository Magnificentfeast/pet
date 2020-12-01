<template>
	<view class="user">
		
		<view class="user-box">
			<view class="head-img">
				<image :src="userInfo.headImg" mode=""></image>
				<image v-if="pet.hasbao" class="bao" src="/static/images/bao-icon.png" mode=""></image>
			</view>
			<view class="user-info">
				<view class="name">
					{{userInfo.name}}
				</view>
				<view class="sign">
					{{userInfo.sign?userInfo.sign:"这家伙很懒，没有设置签名"}}
				</view>
				<view class="lv">
					<image v-if="userInfo.lv == 0" src="../../../static/images/lv0.png" mode=""></image>
					<image v-else src="../../../static/images/lv1.png" mode=""></image>
				</view>
			</view>
			<view class="guanzhu">
				<u-icon name="plus"></u-icon>关注
			</view>
		</view>
		
		<view class="user-data">
			<view class="data-item" v-for="(data,index) in userData" :key="index">
				<view class="nums">
					{{data.num}}
				</view>
				<view class="text">
					{{data.text}}
				</view>
			</view>
		</view>
		
		<view class="pets">
			<view class="line-title">
				TA的宠物
			</view>
			<view class="pet-item" v-for="pet in petList">
				<view class="head-img">
					<image :src="pet.img" mode=""></image>
					<image v-if="pet.hasbao" class="bao" src="/static/images/bao-icon.png" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{pet.name}}
						<image v-if="pet.sex" src="/static/images/male.png" mode=""></image>
						<image v-else src="/static/images/female.png" mode=""></image>
					</view>
					<view class="info">
						{{pet.type}} | {{pet.status}} |  {{pet.birthday}}
					</view>
					<view class="idNum" v-if="pet.id">
						宠物身份ID:{{pet.id}}
					</view>
					<view class="idNum" style="color: rgba(255, 0, 0, 1);" v-else>
							档案未建立
					</view>
				</view>
				<view class="baozhang" v-if="pet.hasbao">
					<image src="../../../static/images/hasbao.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="tabs">
			<view class="tab" :class="(curre == index)?'curre':''" v-for="(item,index) in tabs" :key="index" @click="changTab(index)">
				<text class="text">{{item.name}}</text>
				<text class="num">{{item.count}}</text>
			</view>
		</view>	
		<petLifeList></petLifeList>
	</view>
</template>

<script>
	import petLifeList from "../../../components/list/petLifeList.vue"
	export default {
		data() {
			return {
				tabs:[
					{
						name:'关注',
						count:35
					},
					{
						name:'点赞',
						count:520
					}
				],
				curre:0,
				userInfo:{
					headImg:"/static/images/user-icon.png",
					name:'华丽盛宴',
					sign:'',
					lv:1
				},
				userData:[
					{
						num:24,
						text:'动态'
					},
					{
						num:84,
						text:'获赞'
					},
					{
						num:34,
						text:'关注'
					},
					{
						num:210,
						text:'粉丝'
					}
				],
				petList:[
					{
						img:'/static/images/jilu.png',
						name:'狮子狗',
						type:'哈士奇',
						status:'未绝育',
						birthday:'生日2020-08-15',
						id:'5132124',
						hasbao:true,
						sex:1
					},
					{
						img:'/static/images/jilu.png',
						name:'二狗子',
						type:'金毛',
						status:'绝育',
						birthday:'生日2020-02-26',
						id:'5132124',
						hasbao:false,
						sex:1
					},
					{
						img:'/static/images/jilu.png',
						name:'狗蛋',
						type:'牧羊犬',
						status:'未绝育',
						birthday:'生日2020-05-26',
						id:'',
						hasbao:false,
						sex:0
					}
				],
			};
		},
		components:{
			'petLifeList':petLifeList
		},
		methods:{
			changTab(index){
				this.curre = index
			}
		}
	}
</script>

<style lang="less">
	.user-box{
		height: 250rpx;
		background: #2E8DF4;
		padding: 23rpx 30rpx 0;
		.head-img{
			width: 145rpx;
			height: 145rpx;
			border-radius: 50%;
			border: 2px solid #FFFFFF;
			position: relative;
			display: inline-block;
			float: left;
			.bao{
				width: 35rpx;
				height: 35rpx;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
		.user-info{
			display: inline-block;
			margin-left: 30rpx;
			color: #FFFFFF;
			line-height: 38rpx;
			.name{
				font-size: 40rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 500;
				margin-bottom: 12rpx;
			}
			.sign{
				font-size: 23rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
			}
			.lv{
				width: 162rpx;
				height: 67rpx;
				margin-left: -10rpx;
			}
		}
		.guanzhu{
			position: absolute;
			right: 30rpx;
			top: 40rpx;
			width: 131rpx;
			height: 45rpx;
			background: #FFFFFF;
			border-radius: 23rpx;
			font-size: 24rpx;
			font-family: Microsoft YaHei;
			font-weight: 500;
			color: #0E3CE5;
			text-align: center;
			line-height: 45rpx;
		}
	}
	.user-data{
		background-color: #FFFFFF;
		box-shadow: 0px 0px 51px 0px rgba(179, 179, 179, 0.25);
		border-radius: 25rpx;
		margin: -50rpx 30rpx 0;
		padding: 30rpx;
		line-height: 38rpx;
		display: flex;
		.data-item{
			flex: 1;
			text-align: center;
			.num{
				font-size: 40rpx;
				font-family: DIN;
				font-weight: bold;
				color: #555555;
				margin-bottom: 34rpx;
			}
			.text{
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #999999;
			}
		}
	}
	.line-title{
		margin: 0 30rpx;
		font-size: 38rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		color: #000000;
		line-height: 38rpx;
		padding-left: 18rpx;
		padding-top: 24rpx;
		padding-bottom: 12rpx;
		position: relative;
		.add{
			float: right;
			font-size: 25rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #999999;
			line-height: 38rpx;
			border: 2rpx solid #DDDDDD;
			border-radius: 20rpx;
			padding: 0 15rpx;
		}
		&::before{
			content: '';
			height: 35rpx;
			width: 8rpx;
			background: #18ABFF;
			border-radius: 2px;
			position: absolute;
			left: 0;
			top: 27rpx;
		}
	}
	
	.pets{
		background: #FFFFFF;
		box-shadow: 0px 0px 51rpx 0px rgba(179, 179, 179, 0.25);
		border-radius: 25rpx;
		margin: 50rpx 30rpx 0;
		.pet-item{
			padding: 25rpx 38rpx;
			border-bottom: 1px solid #F4F4F4;
			position: relative;
			.head-img{
				width: 120rpx;
				height: 120rpx;
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
				.idNum{
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #555555;
				}
			}
			.baozhang{
				position: absolute;
				display: inline-block;
				right: 30rpx;
				width: 65rpx;
				height: 104rpx;
			}
			
		}
	}
	
	.tabs{
		padding: 30rpx 30rpx 0;
		.tab{
			display: inline-block;
			font-size: 35rpx;
			color: #777777;
			text-align: center;
			width: 200rpx;
			padding-bottom: 25rpx;
			.text{
				margin-right: 10rpx;
			}
			.num{
				font-size: 35rpx;
			}
		}
		.curre{
			font-size: 40rpx;
			font-weight: 600;
			position: relative;
			&::after{
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				width: 100rpx;
				height: 10rpx;
				background: #18ABFF;
				margin: 0 auto;
			}
		}
	}
</style>
