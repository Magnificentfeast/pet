<template>
	<view class="index">
		<view class="container" style="padding-bottom: 34rpx;">
			<view class="banner">
				<image :src="banner" mode="aspectFill"></image>
			</view>
			<view class="searchbar__box">
				<label>
					<picker @change="bindPickerChange" value="宁波" :range="['宁波','上海']">
						<view class="uni-input">宁波</view>
					</picker>
					<image class="arrow_donw" src="../../../static/images/arrow_donw.png" mode="aspectFill"></image>
				</label>
				<view class="input" @click="gosearch">
					<image class="search-icon" src="../../../static/images/seach.png" mode="aspectFill"></image>
					<input type="text" value="" placeholder="搜索你想要的内容"/>
				</view>
			</view>
			<view class="pet-item">
				<view class="item" v-for="item in index_items" :key="index" @click="gotab" :data-url='item.part'>
					<image :src="item.img" mode="aspectFill"></image>
					<view class="text">
						{{item.text}}
					</view>
				</view>
			</view>
			<navigator class="quick-link" url='/pages/components/pet/quickTreat/quickTreat'>
				<view class="title">快速问宠医</view>
				<view class="subtitle">系统自动匹配宠物医院问询</view>
				<image class="link-img" src="../../../static/images/right-link.png" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view class="container" style="padding:28rpx 0;">
			<view class="quick-link-box">
				<navigator url="/pages/components/mycenter/zhenliaoRecord/add">
					<image src="../../../static/images/jilu.png" mode="aspectFill"></image>
				</navigator>
				<navigator url="/pages/components/pet/addPetLife/addPetLife">
					<image src="../../../static/images/share.png" mode="aspectFill"></image>
				</navigator>
			</view>
		</view>
		
		<!-- <view class="container">
			<view class="line-title">
				育宠课堂
			</view>
		</view> -->
		 
		<view class="container" style="margin-bottom: 0;">
			<view class="line-title">
				附近宠物医院
				<image class="question" src="../../../static/images/question.png" mode="aspectFill"></image>
				<text class="location">宁波市鄞州区</text>
			</view>
			<view class="hospital-list">
				<view class="hospital-item" @click="gohospital">
					<view class="head-img">
						<image src="" mode=""></image>
					</view>
					<view class="infos">
						<view class="name">安安宠医（奢宠宠物医院高新锦绣东城小区</view>
						<view class="location">海宁街226-228号（近新城锦绣东城小区）</view>
						<view class="info">
							<image class="star" src="../../../static/images/star.png" mode="aspectFill"></image>
							<text class="mark">5.0分</text>
							<text class="range">1.2km</text>
						</view>
						<view class="show-type type1">
							<text class="type">合约医院</text>
							<text class="per">
								<text class="num">60</text>%
							</text>
						</view>
					</view>
				</view>
				<view class="hospital-item" @click="gohospital">
					<view class="head-img">
						<image src="../../../static/images/logo-test.png" mode="aspectFill"></image>
					</view>
					<view class="infos">
						<view class="name">安安宠医（奢宠宠物医院高新锦绣东城小区</view>
						<view class="location">海宁街226-228号（近新城锦绣东城小区）</view>
						<view class="info">
							<image class="star" src="../../../static/images/star.png" mode="aspectFill"></image>
							<text class="mark">5.0分</text>
							<text class="range">1.2km</text>
						</view>
						<view class="show-type type2">
							<text class="type">协议医院</text>
							<text class="per">
								<text class="num">20</text>%
							</text>
						</view>
					</view>
				</view>
				<view class="more-hospital" @click="more">
					查看更多宠物医院
				</view>
			</view>
		</view>
        
		<view class="mask" :class="{hidden:maskshow}">
			<view class="tabbar-tip">
				<navigator class="item" url="../../components/pet/addPetLife/addPetLife">
					<view class="img">
						<image src="/static/images/viedo-blue.png" mode=""></image>
					</view>
					<view class="text">
						晒宠
					</view>
				</navigator>
				<navigator class="item" url="../../components/pet/quickTreat/quickTreat">
					<view class="img">
						<image src="/static/images/ask.png" mode=""></image>
					</view>
					<view class="text">
						快速问宠医
					</view>
				</navigator>
			</view>
			<view class="maskclose" @click="maskshow = true">
				<image src="/static/images/close.png" mode=""></image>
			</view>
		</view>
		<u-tabbar v-model="tabbar.current" :show="tabbar.show" :inactive-color="tabbar.inactiveColor" :activeColor="tabbar.activeColor" :list="tabbar.list" :mid-button="true" :midButtonSize="110" :before-switch="beforeSwitch"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:'/static/images/banner_index.png',
				index_items:[
					{
						img:"/static/images/yiyuan.png",
						text:"宠物医院",
						part:"/pages/components/hospital/main/main"
					},
					{
						img:"/static/images/baoxian.png",
						text:"宠物医疗保险",
						part:""
					},
					{
						img:"/static/images/lipei.png",
						text:"保险理赔",
						part:"/pages/components/Insurance/main/main"
					}
				],
				tabbar:{},
				maskshow:true
			};
		},
		onShow() {
			this.tabbar = getApp().globalData.tabbar
			this.tabbar.current = 0
			console.log(getApp().globalData)
		},
		methods:{
			beforeSwitch(index){
				if(index!=2){
					return true
				}else{
					console.log(index)
					this.maskshow = false
					return false
				}
			},
			gosearch(){
				uni.navigateTo({
					url:'/pages/components/seachTab/main/main'
				})
			},
			gotab(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			},
			gohospital(){
				uni.navigateTo({
					url:'/pages/components/hospital/details/details'
				})
			},
			more(){
				uni.navigateTo({
					url:'/pages/components/hospital/main/main'
				})
			}
		}
	}
</script>

<style lang="less">
.index{
	background-color: rgb(240, 240, 240);
	.container{
		background: #FFFFFF;
		margin-bottom: 16rpx;
		
		.banner{
			margin: 26rpx 30rpx;
			overflow: hidden;
			background-color: #2979FF;
			image{
				width: 100%;
				height: 275rpx;
			}
		}
		.searchbar__box{
			margin: 20rpx 30rpx;
			border-radius: 72.5rpx;
			background-color: #FFFFFF;
			display: flex;
			background: #FFFFFF;
			box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
			position: relative;
			label{
				display: inline-block;
				font-size: 29rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #7E7E7E;
				text-align: center;
				padding-left: 38rpx;
				padding-top: 24rpx;
				padding-bottom: 22rpx;
				padding-right: 55rpx;
				position: relative;
				.arrow_donw{
					position: absolute;
					width: 18rpx;
					height: 10rpx;
					top: 40rpx;
					right: 19rpx;
				}
			}
			.input{
				flex: 1;
				position: relative;
				.search-icon{
					position: absolute;
					display: inline-block;
					width: 26rpx;
					height: 26rpx;
					top: 30rpx;
					left: 23rpx;
				}
				input{
					height: 100%;
					line-height: 40rpx;
					display: block;
					padding-left: 68rpx;
					font-size: 29rpx;
					font-family: SourceHanSansCN;
					font-weight: 400;
					color: #CBCBCB;
					line-height: 42rpx;
				}
			}
		}
		.pet-item{
			margin: 43rpx 30rpx;
			display: flex;
			border: none;
			.item{
				flex: 1;
				text-align: center;
				image{
					width: 150rpx;
					height: 150rpx;
				}
				.text{
					font-size: 30rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #666666;
					margin-top: 30rpx;
				}
			}
		}
		.quick-link{
			margin: 0 30rpx;
			background: rgba(255, 255, 255, 0);
			box-shadow: 0px 0px 50rpx 0px rgba(0, 0, 0, 0.1);
			border-radius: 60rpx;
			position: relative;
			height: 120rpx;
			view{
				display: inline-block;
			}
			.title{
				font-size: 40rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 500;
				color: #333333;
				margin-left: 39rpx;
				margin-top: 0;
				line-height: 120rpx;
			}
			.subtitle{
				font-size: 25rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #666666;
				margin-left: 27rpx;
			}
			.link-img{
				position: absolute;
				right: 15rpx;
				top: 15rpx;
				width: 90rpx;
				height: 90rpx;
			}
		}
		.quick-link-box{
			margin: 0rpx 30rpx;
			display: flex;
			navigator:first-child{
				margin-right: 40rpx;
			}
			navigator{
				background-color: #2979FF;
				display: inline-block;
				flex: 1;
				image{
					width: 100%;
					height: 200rpx;
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
			.question{
				display: inline-block;
				width: 35rpx;
				height: 35rpx;
				margin-left: 20rpx;
			}
			.location{
				float: right;
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #666666;
				line-height: 38rpx;
			}
			&::before{
				content: '';
				height: 35rpx;
				width: 8rpx;
				background: #0000FF;
				border-radius: 2px;
				position: absolute;
				left: 0;
				top: 27rpx;
			}
		}
		.hospital-item{
			padding: 32rpx 30rpx 36rpx;
			border-bottom: 2rpx solid #F4F4F4;;
			position: relative;
			display: flex;
			.head-img{
				width: 125rpx;
				height: 125rpx;
				box-shadow: 0px -5px 10px 0px rgba(119, 119, 119, 0.2);
				border-radius: 20rpx;
				overflow: hidden;
				display: inline-block;
				image{
					width: 125rpx;
					height: 125rpx;
				}
			}
			.infos{
				display: inline-block;
				margin-left: 27rpx;
				flex: 1;
				.name{
					font-size: 35rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 500;
					color: #000000;
					line-height: 38rpx;
					width: 470rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 38rpx;
					margin-bottom: 15rpx;
				}
				.location{
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #555555;
					line-height: 38rpx;
					margin-bottom: 18rpx;
				}
				.info{
					margin-bottom: 20rpx;
					.star{
						width: 20rpx;
						height: 20rpx;
						display: inline-block;
						margin-right: 9rpx;
					}
					.mark{
						font-size: 23rpx;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #FE6545;
						line-height: 44rpx;
					}
					.range{
						float: right;
						font-size: 25rpx;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #555555;
						line-height: 38rpx;
					}
				}
			}
			.show-type{
				width: 250rpx;
				height: 50rpx;
				border-radius: 50rpx;
				font-size: 25rpx;
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
					background: url(../../../static/images/hospital1.png) no-repeat;
					background-size: 100%;
					color: #FFFFFF;
				}
				&.type2{
					background: url(../../../static/images/hospital2.png) no-repeat;
					background-size: 100%;
					color: #777777;
				}
			}
		}
		.more-hospital{
			font-size: 24rpx;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #18ABFF;
			text-align: center;
			line-height: 100rpx;
		}
	}
}

</style>
