<template>
	<view>
		<view class="head">
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box tabs">
				<view class="tab" :class="(curre == 1)?'active':''" @click="changetab(1)">
					未完成
				</view>
				<view class="tab" :class="(curre == 2)?'active':''" @click="changetab(2)">
					已完成
				</view>
			</view>
			<view class="cell-box" v-if="curre == 1" v-for="(item1,index1) in list1">
				<view class="headimg">
					<image :src="item1.hospitalInfo.headimg" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{item1.hospitalInfo.name}}
					</view>
					<view class="cure-box">
						<view>
							<text>
							预约单号：{{item1.id}}
							</text>
						</view>
						<view>
							<text>
							预约时间：{{item1.starttime}}
							</text>
						</view>
						<view>
							<text>
							预约宠物：{{item1.petName}}
							</text>
						</view>
					</view>
					<view class="btn-box">
						<view class="btn">
							取消订单
						</view>
						<view class="btn">
							重新预约
						</view>
					</view>
				</view>
				<view class="outtime" v-if="item1.outtime">
					<image src="/static/images/outtime.png" mode=""></image>
				</view>
			</view>
			
			<view class="cell-box" v-if="curre == 2" v-for="(item2,index2) in list2">
				<view class="headimg">
					<image :src="item2.hospitalInfo.headimg" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{item2.hospitalInfo.name}}
					</view>
					<view class="cure-box">
						<view>
							<text>
							诊疗单号：{{item2.id}}
							</text>
						</view>
						<view>
							<text>
							诊疗时间：{{item2.endtime}}
							</text>
						</view>
						<view>
							<text>
							诊疗宠物：{{item2.petName}}
							</text>
						</view>
					</view>
					<view class="btn-box">
						<view class="btn">
							记录诊疗过程
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
				curre:1,
				list1:[
					{
						hospitalInfo:{
							headimg:'/static/images/addpet_banner.png',
							name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
							location:'海宁街226-228号（近新城锦绣东城小区）',
							star:5,
							range:1.3,
							type:2,
							per:30,
							iscollect:false
						},
						id:'25545584456664545',
						starttime:'2019-06-06 上午10:00',
						petName:'花花',
						outtime:true
					},
					{
						hospitalInfo:{
							headimg:'/static/images/addpet_banner.png',
							name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
							location:'海宁街226-228号（近新城锦绣东城小区）',
							star:5,
							range:1.3,
							type:2,
							per:30,
							iscollect:false
						},
						id:'25545584456664545',
						starttime:'2019-06-06 上午10:00',
						petName:'小怪兽',
						outtime:false
					},
				],
				list2:[
					{
						hospitalInfo:{
							headimg:'/static/images/addpet_banner.png',
							name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
							location:'海宁街226-228号（近新城锦绣东城小区）',
							star:5,
							range:1.3,
							type:2,
							per:30,
							iscollect:false
						},
						id:'25545584456664545',
						starttime:'2019-06-06 上午10:00',
						endtime:'2019-06-06 下午10:00',
						petName:'丽丽'
					},
					{
						hospitalInfo:{
							headimg:'/static/images/addpet_banner.png',
							name:'安安宠医（奢宠宠物医院高新锦绣东城小区',
							location:'海宁街226-228号（近新城锦绣东城小区）',
							star:5,
							range:1.3,
							type:2,
							per:30,
							iscollect:false
						},
						id:'25545584456664545',
						starttime:'2019-06-06 上午10:00',
						endtime:'2019-06-06 下午10:00',
						petName:'肉肉'
					},
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
.head{
	background-color: #2E8DF4;
	height: 150rpx;
	
}
.cell-gruops{
	position: relative;
	margin: 0 30rpx;
	top: -100rpx;
	.cell-box{
		position: relative;
		padding: 35rpx 24rpx 25rpx 24rpx;
		border-bottom: 2rpx solid #F4F4F4;
		display: flex;
		.headimg{
			display: inline-block;
			width: 125rpx;
			height: 125rpx;
			margin-right: 20rpx;
			vertical-align: top;
			border-radius: 20rpx;
			box-shadow: 0px -5rpx 10rpx 0px rgba(119, 119, 119, 0.2);
		}
		.infos{
			flex: 1;
			display: inline-block;
			.name{
				font-size: 28rpx;
				font-weight: 600;
				width: 480rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.cure-box{
				view{
					font-size: 28rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #777777;
					image{
						width: 25.6rpx;
						height: 25.6rpx;
						margin-right: 19rpx;
					}
				}
			}
			.btn-box{
				margin-top: 30rpx;
				.btn{
					display: inline-block;
					border: 2rpx solid #DDDDDD;
					border-radius: 25rpx;
					font-size: 25rpx;
					margin-right: 50rpx;
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #777777;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					padding: 0 27rpx;
				}
			}
		}
		.outtime{
			position: absolute;
			width: 90rpx;
			height: 90rpx;
			top: 34rpx;
			right: 13rpx;
		}
	}
}
.tabs{
	height: 100rpx;
	display: flex;
	line-height: 100rpx;
	padding: 0 !important;
	.tab{
		display: inline-block;
		flex: 1;
		text-align: center;
		font-size: 32rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		color: #777777;
		position: relative;
	}
	.active{
		font-size: 37rpx;
		color: #333333;
		font-weight: 600;
		&::after{
			content: '';
			position: absolute;
			bottom: 0;
			width: 84rpx;
			height: 8rpx;
			left: 50%;
			transform: translateX(-50%);
			background-color: rgba(24, 171, 255, 1);
		}
	}
}
</style>
