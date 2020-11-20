<template>
	<view class="pet-life">
		<view class="search-box">
			<u-search v-model="value" @change="changeinput" @search="searchinput" :shape="shape" :clearabled="clearabled" 
			:show-action="showAction" :input-align="inputAlign" @clear="clearinput"></u-search>
		</view>
		<view class="tab">
			<u-tabs :list="list" :active-color="activeColor" :inactive-color="inactivecolor" :current="current" @change="changetab"></u-tabs>
		</view>
		<view class="content">
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="water left" v-for="(item, index) in leftList" :key="index">
						<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
						<u-lazy-load class="img" threshold="100" border-radius="0" :image="item.image" :index="index"></u-lazy-load>
						<view class="title">
							{{item.title}}
						</view>
						<view class="infos">
							<view class="userInfo">
								<image class="headimg" :src="item.headImg" mode=""></image>
							    <text class="name">{{item.userName}}</text> 
							</view>
							<view class="likeNumber">
								<image class="likeicon" src="../../../static/images/like.png" mode=""></image>
								{{item.likeNumber}}
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="water right" v-for="(item, index) in rightList" :key="index">
						<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
						<u-lazy-load class="img" threshold="100" border-radius="0" :image="item.image" :index="index"></u-lazy-load>
						<view class="title">
							{{item.title}}
						</view>
						<view class="infos">
							<view class="userInfo">
								<image class="headimg" :src="item.headImg" mode=""></image>
							    <text class="name">{{item.userName}}</text> 
							</view>
							<view class="likeNumber">
								<image class="likeicon" src="../../../static/images/like.png" mode=""></image>
								{{item.likeNumber}}
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				shape: 'round',
				clearabled: true,
				showAction: false,
				inputAlign: 'left',
				activeColor:'#2758FD',
				inactivecolor:'#777777',
				current:0,
				loadStatus: 'loadmore',
				
				flowList:[],
				list:[
					{name:'关注'},
					{name:'推荐'},
					{name:'汪星人'},
					{name:'喵星人'},
					{name:'其他萌宠'},
				],
				WaterfallList:[
				{
					likeNumber: 35,
					title: '北国风光，千里冰封，万里雪飘',
					userName: '李白杜甫',
					image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 75,
					title: '望长城内外，惟余莽莽',
					userName: '李白杜甫',
					image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 385,
					title: '大河上下，顿失滔滔',
					userName: '李白杜甫',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 784,
					title: '欲与天公试比高',
					userName: '李白',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 7891,
					title: '须晴日，看红装素裹，分外妖娆',
					userName: '李白',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 2341,
					userName: '李白',
					title: '江山如此多娇，引无数英雄竞折腰',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 661,
					userName: '李白',
					title: '惜秦皇汉武，略输文采',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 1654,
					title: '唐宗宋祖，稍逊风骚',
					userName: '李白',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 1678,
					title: '一代天骄，成吉思汗',
					userName: '李白',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 924,
					title: '只识弯弓射大雕',
					userName: '李白',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				},
				{
					likeNumber: 8243,
					title: '俱往矣，数风流人物，还看今朝',
					userName: '李白',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg'
				}
				]
			};
		},
		onShow() {
			
		},
		onLoad() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods:{
			addRandomData() {
				for(let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.WaterfallList.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.WaterfallList[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			changetab(index) {
				this.current = index;
			},
		}
	}
</script>

<style lang="less">
.pet-life{
	margin-bottom: 130rpx;
	.search-box{
		margin: 12rpx 30rpx;
	}
	.content{
		padding: 14rpx;
		.water{
			&.left{
				margin-right: 15rpx;
			}
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 51rpx 0rpx rgba(179, 179, 179, 0.25);
			border-radius: 25rpx;
			overflow: hidden;
			margin-bottom: 16rpx;
			.img{
				width: 100%;
				display: block;
			}
			.title{
				font-size: 28rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #333333;
				line-height: 35rpx;
				width: 300rpx;
				margin: 20rpx;
			}
			.infos{
				margin: 10rpx;
				color: #999999;
				height: 40rpx;
				margin: 10rpx;
				position: relative;
				&::after{
					content: '';
					clear: both;
				}
				.userInfo{
					font-size: 26rpx;
					font-family: SF UI Display;
					font-weight: 400;
					display: inline-block;
					.headimg{
						float: left;
						width: 40rpx;
						height: 40rpx;
						margin-right: 12rpx;
						border-radius: 50%;
					}
					.name{
						float: left;
					}
				}
				.likeNumber{
					float: right;
					display: inline-block;
					margin-right: 15rpx;
					.likeicon{
						width: 28rpx;
						height: 22rpx;
						font-size: 26rpx;
						font-family: SF UI Display;
						font-weight: 400;
						margin-right: 15rpx;
					}
				}
			}
		}
	}
}
</style>
