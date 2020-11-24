<template>
	<view class="my">
		<view class="user-box">
			<view class="head-img">
				<image :src="userInfo.headImg" mode=""></image>
			</view>
			<view class="user-info">
				<view class="name">
					{{userInfo.name}}
				</view>
				<view class="sign">
					{{userInfo.sign?userInfo.sign:"请输入你的个性签名"}}
				</view>
				<view class="lv">
					<image v-if="userInfo.lv == 0" src="../../../static/images/lv0.png" mode=""></image>
					<image v-else src="../../../static/images/lv1.png" mode=""></image>
				</view>
			</view>
			<view class="setting">
				<image src="../../../static/images/setting.png" mode=""></image>
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
		
		<view class="tabs">
			<view class="tab-item" v-for="(tab,index) in tabs" :key="index">
				<view class="img">
					<image :src="tab.image" mode=""></image>
				</view>
				<view class="text">
					{{tab.text}}
				</view>
			</view>
		</view>
		
		<view class="pets">
			<view class="line-title">
				我的宠物
				<view class="add">
					<u-icon name="plus" color="#999999" style="margin-right: 12rpx;"></u-icon>添加宠物
				</view>
			</view>
			<view class="pet-item" v-for="pet in petList">
				<view class="head-img">
					<image :src="pet.img" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{pet.name}}
					</view>
					<view class="info">
						{{pet.type}} | {{pet.status}} |  {{pet.birthday}}
					</view>
					<view class="idNum">
						
						<block v-if="pet.id">宠物身份ID:{{pet.id}}</block>
						<block v-else>
							<image style="width: 268rpx;height: 40rpx;" src="../../../static/images/hasid.png" mode=""></image>
						</block>
					</view>
				</view>
				<view class="baozhang" v-if="pet.hasbao">
					<image src="../../../static/images/hasbao.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="baodan">
			<view class="line-title">
				我的保单
			</view>
			<view class="baodan-item" v-for="item in baodanList">
				<view class="id">保单号：{{item.id}}</view>
				<view class="type">投保险种：{{item.type}}</view>
				<view class="name">投保人：{{item.name}}</view>
				<view class="petname">
					被保宠物：{{item.petname}}
					<view class="renzheng" v-if="item.petstatus">
						<image src="../../../static/images/renzheng-icon.png" mode=""></image>
						<text>宠物已认证</text>
					</view>
				</view>
				<view class="company">保险公司：{{item.company}}</view>
				<view class="startDay">生效日期：{{item.startDay}}</view>
				<view class="validity">有效期：{{item.validity}}</view>
				<view class="btn-box">
					<view class="btn primary">
						我要理赔
					</view>
					<view class="btn default">
						我要续保
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
				tabs:[
					{
						image:'/static/images/shoucang.png',
						text:'我的收藏',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/wenzhen.png',
						text:'我的问诊',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/yuyue.png',
						text:'我的预约',
						urlpath:'',
						count:0
					},
					{
						image:'/static/images/jilu.png',
						text:'诊疗记录',
						urlpath:'',
						count:0
					},
				],
				petList:[
					{
						img:'/static/images/jilu.png',
						name:'狮子狗',
						type:'哈士奇',
						status:'未绝育',
						birthday:'生日2020-08-15',
						id:'5132124',
						hasbao:true
					},
					{
						img:'/static/images/jilu.png',
						name:'二狗子',
						type:'金毛',
						status:'绝育',
						birthday:'生日2020-02-26',
						id:'5132124',
						hasbao:false
					},
					{
						img:'/static/images/jilu.png',
						name:'狗蛋',
						type:'牧羊犬',
						status:'未绝育',
						birthday:'生日2020-05-26',
						id:'',
						hasbao:false
					}
				],
				baodanList:[
					{
						id:'25545584456664545',
						type:'投保险种：太保宠物医疗险基本版（366)',
						name:'刘备',
                        petname:'二狗子',
						petstatus:1,
						company:'中国太平洋财产保险股份有限公司宁波分公司',
						startDay:'2020.04.16',
						validity:'一年（2020.04.16-2021.04.16）'
					},
					{
						id:'25545584456664545',
						type:'投保险种：太保宠物医疗险基本版（366)',
						name:'刘备',
                        petname:'狗蛋',
						petstatus:0,
						company:'中国太平洋财产保险股份有限公司宁波分公司',
						startDay:'2020.04.16',
						validity:'一年（2020.04.16-2021.04.16）'
					},
					{
						id:'25545584456664545',
						type:'投保险种：太保宠物医疗险基本版（366)',
						name:'刘备',
                        petname:'火锅',
						petstatus:1,
						company:'中国太平洋财产保险股份有限公司宁波分公司',
						startDay:'2020.04.16',
						validity:'一年（2020.04.16-2021.04.16）'
					},
				]
			};
		}
	}
</script>

<style lang="less">
.my{
	background: #f9f9f9;
	padding-bottom: 140rpx;
	.user-box{
		height: 300rpx;
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
		.setting{
			position: absolute;
			right: 30rpx;
			top: 40rpx;
			width: 50rpx;
			height: 50rpx;
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
	
	.tabs{
		margin-top: 40rpx;
		padding: 0 30rpx;
		display: flex;
		position: relative;
		font-size: 28rpx;
		.tab-item{
			flex: 1;
			text-align: center;
			border-left: 1px solid #F3F3F3;
			&:first-child{
				border-left: none;
			}
			.img{
				margin: 0 auto;
				width: 100rpx;
				height: 100rpx;
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
	
	.baodan{
		background: #FFFFFF;
		box-shadow: 0px 0px 51rpx 0px rgba(179, 179, 179, 0.25);
		border-radius: 25rpx;
		margin: 28rpx 30rpx 0;
		.line-title{
			padding-bottom: 0;
		}
		.baodan-item{
			padding: 30rpx;
			font-size: 25rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #777777;
			line-height: 38rpx;
			border-bottom: 1px solid #F4F4F4;
			.petname{
				.renzheng{
					display: inline-block;
					width: 160rpx;
					height: 40rpx;
					border: 2px solid #F52162;
					border-radius: 15px;
					margin-left: 15rpx;
					image{
						width: 20rpx;
						height: 20rpx;
						margin-left: 6rpx;
						margin-right: 8rpx;
					}
					text{
						font-size: 20rpx;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #F52162;
						position: absolute;
						margin-right: 14rpx;
					}
				}
			}
		}
		.btn-box{
			margin-top: 28rpx;
			.btn{
				display: inline-block;
				width: 200rpx;
				height: 60rpx;
				text-align: center;
				box-shadow: 0px 0px 51px 0px rgba(179, 179, 179, 0.25);
				border-radius: 30rpx;
				font-size: 30rpx;
				line-height: 60rpx;
			}
			.default{
				border: 1px solid #777777;
				color: #777777;
				margin-left: 40rpx;
			}
			.primary{
				background: rgba(24, 171, 255, 1);
				color: #FFFFFF;
			}
		}
	}
}
</style>
