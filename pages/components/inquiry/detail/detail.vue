<template>
	<view class="detail">
		<view class="head">
		</view>
		<view class="cell-gruops pets">
			<view class="pet-item">
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
				</view>
				<view class="baozhang" v-if="pet.hasbao">
					<image src="/static/images/hasbao.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cell-gruops">
			<view class="cell-box question">
				<view class="line-title">
					病情描述
				</view>
				<view class="text">
					医生您好，我家泰迪2岁，男孩，白天出去遛弯回来，呕吐了几次，没有以前活泼了，请问是什么问题？
				</view>
				<view class="imgs">
					<view class="img">
						<u-image width="100%" height="100%" :border-radius="15" src="/static/images/banner_index.png"></u-image>
					</view>
					<view class="img">
						<u-image width="100%" height="100%" :border-radius="15" src="/static/images/banner_index.png"></u-image>
					</view>
					<view class="img">
						<u-image width="100%" height="100%" :border-radius="15" src="/static/images/banner_index.png"></u-image>
					</view>
					<view class="img">
						<u-image width="100%" height="100%" :border-radius="15" src="/static/images/banner_index.png"></u-image>
					</view>
				</view>
			</view>
		</view>
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="line-title">
					医生回复
				</view>
				<view class="answer" v-for="answer in answers">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			};
		}
	}
</script>

<style lang="less">
.detail{
	.head{
		background-color: #2E8DF4;
		height: 150rpx;
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
	.cell-gruops{
		margin: 0 30rpx 30rpx;
		position: relative;
		top: -90rpx;
	}

	.line-title{
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
	.question{
		.text{
			font-size: 28rpx;	
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #777777;
			line-height: 35rpx;
			padding: 30rpx;
		}
		.imgs{
			// display: flex;
			.img{
				// flex: 1;
				display: inline-block;
				width: 140rpx;
				height: 140rpx;
				margin-right: 10rpx;
			}
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
</style>
