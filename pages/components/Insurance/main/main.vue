<template>
	<view class="main">
		<view class="cell-gruops" v-for="item in list">
			<view class="user-box">
				<view class="head-img">
					<image :src="item.petInfo.img" mode=""></image>
				</view>
				<view class="infos">
					<view class="name">
						{{item.petInfo.name}}
					</view>
					<view class="info">
						{{item.petInfo.type}} | {{item.petInfo.status}} |  {{item.petInfo.birthday}}
					</view>
					<view class="idNum">
						
						<block v-if="item.petInfo.id">宠物身份ID:{{item.petInfo.id}}</block>
						<block v-else>
							<image style="width: 268rpx;height: 40rpx;" src="/static/images/hasid.png" mode=""></image>
						</block>
					</view>
				</view>
				<view class="baozhang" v-if="item.petInfo.hasbao">
					<image src="/static/images/hasbao.png" mode=""></image>
				</view>
			</view>
			<view class="hospital-box">
				<view class="hospital">就诊医院：{{item.hospitalInfo.name}}</view>
				<view class="address">地址：{{item.hospitalInfo.address}}</view>
				<view class="show-type type1" v-if="item.hospitalInfo.type == 1">
					<text class="type">合约医院</text>
					<text class="per">
						<text class="num">60</text>%
					</text>
				</view>
				<view class="show-type type2" v-if="item.hospitalInfo.type == 2">
					<text class="type">协议医院</text>
					<text class="per">
						<text class="num">20</text>%
					</text>
				</view>
			</view>
			<view class="cure-box">
				<view>
					<image src="/static/images/cure_list.png" mode="" class="icon"></image>
					<text>
					诊疗单号：{{item.cureInfo.id}}
					</text>
				</view>
				<view>
					<image src="/static/images/cure_star.png" mode="" class="icon"></image>
					<text>
					开始诊疗时间：{{item.cureInfo.starttime}}
					</text>
				</view>
				<view>
					<image src="/static/images/cure_end.png" mode="" class="icon"></image>
					<text>
					结束诊疗时间：{{item.cureInfo.endtime}}
					</text>
				</view>
			</view>
			<view v-if="item.status == 3" class="insurance-box">
				<view class="title">
					理赔单号：{{item.baodanInfo.id}}
				</view>
				<view class="money">
					理赔单号：
					<text>￥{{item.baodanInfo.money}}</text>
				</view>
				<view class="text">
					{{item.baodanInfo.text}}
				</view>
				<view class="duty">
					保障内容及保障责任
				</view>
			</view>
			<view class="btn-box">
				<view v-if="item.status == 1" class="btn upload" @click="upload(item.baodanInfo.id)">上传理赔资料</view>
				<view v-if="item.status == 2" class="btn checking">理赔资料审核中</view>
				<view v-if="item.status == 4" class="btn finish">已完成理赔</view>
			</view>
		</view>
		<u-empty mode="list" v-if="list.length == 0"></u-empty>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						status:1,
						petInfo:{
							img:'/static/images/jilu.png',
							name:'狗蛋',
							type:'牧羊犬',
							status:'未绝育',
							birthday:'生日2020-05-26',
							id:'65412335456',
							hasbao:true
						},
						hospitalInfo:{
							name:"安安宠医（奢宠宠物医院高新区分院)",
							address:"高新区海宁街226-228号",
							type:1,
						},
						cureInfo:{
							id:'25545584456664545',
							starttime:'2019-06-06 上午10:00',
							endtime:'2019-06-06 下午 13:00'
						},
						baodanInfo:{
							id:"54146546516546",
							money:"5500.00",
							text:"理赔款将于3个工作日内打到指定银行卡，如有疑问请致电95500",
							type:""
						}
					},
					{
						status:2,
						petInfo:{
							img:'/static/images/jilu.png',
							name:'狗蛋',
							type:'牧羊犬',
							status:'未绝育',
							birthday:'生日2020-05-26',
							id:'65412335456',
							hasbao:true
						},
						hospitalInfo:{
							name:"安安宠医（奢宠宠物医院高新区分院)",
							address:"高新区海宁街226-228号",
							type:1,
						},
						cureInfo:{
							id:'25545584456664545',
							starttime:'2019-06-06 上午10:00',
							endtime:'2019-06-06 下午 13:00'
						},
						baodanInfo:{
							id:"54146546516546",
							money:"5500.00",
							text:"理赔款将于3个工作日内打到指定银行卡，如有疑问请致电95500",
							type:""
						}
					},
					{
						status:3,
						petInfo:{
							img:'/static/images/jilu.png',
							name:'狗蛋',
							type:'牧羊犬',
							status:'未绝育',
							birthday:'生日2020-05-26',
							id:'65412335456',
							hasbao:true
						},
						hospitalInfo:{
							name:"安安宠医（奢宠宠物医院高新区分院)",
							address:"高新区海宁街226-228号",
							type:1,
						},
						cureInfo:{
							id:'25545584456664545',
							starttime:'2019-06-06 上午10:00',
							endtime:'2019-06-06 下午 13:00'
						},
						baodanInfo:{
							id:"54146546516546",
							money:"5500.00",
							text:"理赔款将于3个工作日内打到指定银行卡，如有疑问请致电95500",
							type:""
						}
					},
					{
						status:4,
						petInfo:{
							img:'/static/images/jilu.png',
							name:'狗蛋',
							type:'牧羊犬',
							status:'未绝育',
							birthday:'生日2020-05-26',
							id:'65412335456',
							hasbao:true
						},
						hospitalInfo:{
							name:"安安宠医（奢宠宠物医院高新区分院)",
							address:"高新区海宁街226-228号",
							type:1,
						},
						cureInfo:{
							id:'25545584456664545',
							starttime:'2019-06-06 上午10:00',
							endtime:'2019-06-06 下午 13:00'
						},
						baodanInfo:{
							id:"54146546516546",
							money:"5500.00",
							text:"理赔款将于3个工作日内打到指定银行卡，如有疑问请致电95500",
							type:""
						}
					}
				],
				status: 'loadmore',
				page: 0
			}
		},
		methods: {
			onReachBottom() {
				if(this.page >= 3) return ;
				this.status = 'loading';
				this.page = ++ this.page;
				setTimeout(() => {
					for(let i = 0; i < 4; i++) {
						let index = this.$u.random(0, this.list.length - 1);
						// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
						let item = JSON.parse(JSON.stringify(this.list[index]))
						item.id = this.$u.guid();
						this.list.push(item);
					}
					if(this.page >= 3) this.status = 'nomore';
					else this.status = 'loading';
				}, 2000)
			},
			upload(id){
				uni.navigateTo({
					url:'/pages/components/Insurance/edit/edit?id='+id
				})
				
			}
		}
	}
</script>

<style lang="less">
.main{
	padding: 29rpx 0 100rpx;
	.cell-gruops{
		background: #FFFFFF;
		box-shadow: 0px 0px 51rpx 0px rgba(179, 179, 179, 0.25);
		border-radius: 25rpx;
		margin: 0 30rpx 40rpx;
		.user-box{
			padding: 25rpx 38rpx;
			position: relative;
			height: 190rpx;
			border-bottom: 1px solid #F4F4F4;
			.head-img{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				overflow: hidden;
				display: inline-block;
				position: absolute;
				left: 38rpx;
				top: 35rpx;
			}
			.infos{
				display: inline-block;
				position: absolute;
				left: 186rpx;
				top: 35rpx;
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
		.hospital-box{
			height: 180rpx;
			padding: 28rpx;
			line-height: 40rpx;
			border-bottom: 1px solid #F4F4F4;
			.hospital{
				font-size: 28rpx;
			}
			.address{
				font-size: 25rpx;
				color: rgba(153, 153, 153, 1);
			}
			.show-type{
				width: 250rpx;
				height: 50rpx;
				border-radius: 50rpx;
				font-size: 25rpx;
				margin-top: 5rpx;
				.type{
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					line-height: 50rpx;
					margin-left: 58rpx;
				}
				.per{
					.num{
						font-size: 30rpx;
						font-weight: bold;
					}
					font-family: DIN;
					line-height: 50rpx;
					margin-left: 23rpx;
				}
				&.type1{
					background: url(/static/images/hospital1.png) no-repeat;
					background-size: 100%;
					color: #FFFFFF;
				}
				&.type2{
					background: url(/static/images/hospital2.png) no-repeat;
					background-size: 100%;
					color: #777777;
				}
			}
		}
		.cure-box{
			padding: 25rpx;
			border-bottom: 1px solid #F4F4F4;
			view{
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #777777;
				line-height: 40rpx;
				image{
					width: 25.6rpx;
					height: 25.6rpx;
					margin-right: 19rpx;
				}
			}
		}
		.insurance-box{
			border-bottom: 1px solid #F4F4F4;
			padding: 30rpx;
			background-color: rgba(196, 234, 255, 1);
			background-image: url(/static/images/pei.png);
			background-position: 504rpx 139rpx;
			background-size: 178rpx 172rpx;
			background-repeat: no-repeat;
			line-height: 32rpx;
			.title{
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 500;
				color: #333333;
			}
			.money{
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #333333;
				margin-top: 26rpx;
				text{
					color: red;
					font-size: 32rpx;
				}
			}
			.text{
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #555555;
				margin-top: 26rpx;
			}
			.duty{
				color: #000791;
				border: 2px solid;
				border-radius: 25rpx;
				width: 275rpx;
				height: 50rpx;
				text-align: center;
				line-height: 45rpx;
				margin-top: 30rpx;
				font-size: 25rpx;
				font-weight: 600;
			}
		}
		.btn-box{
			padding: 26rpx 30rpx 36rpx;
			.btn{
				border-radius: 50rpx;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 45rpx;
				color: #FFFFFF;
			}
			.upload{
				background: linear-gradient(39deg, #DD1939, #FF7800);	
			}
			.checking{
				background: linear-gradient(45deg, #3B1291, #8629E4);
			}
			.finish{
				color: #999999;
				border: 2px solid #DDDDDD;
			}
		}
	}
}
</style>
