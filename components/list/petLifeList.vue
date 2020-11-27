<template>
	<view class="pet-life">
		<u-waterfall v-model="WaterfallList">
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
						<view class="likeNumber" v-if="item.islike">
							<u-icon name="heart" style="margin-right: 12rpx;"></u-icon>
							{{item.likeNumber}}
						</view>
						<view class="likeNumber1" v-else>
							<u-icon name="heart-fill" color="#fa3534" style="margin-right: 12rpx;"></u-icon>
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
						<view class="likeNumber" v-if="item.islike">
							<u-icon name="heart" style="margin-right: 12rpx;"></u-icon>
							{{item.likeNumber}}
						</view>
						<view class="likeNumber1" v-else>
							<u-icon name="heart-fill" color="#fa3534" style="margin-right: 12rpx;"></u-icon>
							{{item.likeNumber}}
						</view>
					</view>
				</view>
			</template>
		</u-waterfall>
	</view>
</template>

<script>
	
	export default {
		name:'petLifeList',
		data() {
			return {
				WaterfallList:[
					{
						likeNumber: 35,
						title: '北国风光，千里冰封，万里雪飘',
						userName: '李白杜甫',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:false
					},
					{
						likeNumber: 75,
						title: '望长城内外，惟余莽莽',
						userName: '李白杜甫',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 385,
						title: '大河上下，顿失滔滔',
						userName: '李白杜甫',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:false
					},
					{
						likeNumber: 784,
						title: '欲与天公试比高',
						userName: '李白',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						userName: '李白',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 2341,
						userName: '李白',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 661,
						userName: '李白',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 1654,
						title: '唐宗宋祖，稍逊风骚',
						userName: '李白',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:false
					},
					{
						likeNumber: 1678,
						title: '一代天骄，成吉思汗',
						userName: '李白',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 924,
						title: '只识弯弓射大雕',
						userName: '李白',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:true
					},
					{
						likeNumber: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						userName: '李白',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						headImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315258652,4188474071&fm=11&gp=0.jpg',
						islike:false
					}
				]
			}
		}
	}
</script>
