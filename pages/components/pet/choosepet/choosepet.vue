<template>
	<view class="choose">
		<view class="content">
			<view class="cell-gruops" v-for="(pet,index) in petList" :key="index" @click="choose(pet)">
				<view class="pet-item">
					<view class="head-img">
						<image :src="pet.img" mode=""></image>
					</view>
					<view class="infos">
						<view class="name">
							{{pet.name}}
							<view class="sex">
								<image v-if="pet.sex == 1" src="/static/images/male.png" mode=""></image>
								<image v-else src="/static/images/female.png" mode=""></image>
							</view>
						</view>
						<view class="info">
							{{pet.type}} | {{pet.status}} |  {{pet.birthday}}
						</view>
						<view class="idNum">
							<block v-if="pet.id">宠物身份ID:{{pet.id}}</block>
							<block v-else>
								<image style="width: 268rpx;height: 40rpx;" src="/static/images/hasid.png" mode=""></image>
							</block>
						</view>
					</view>
					<view class="left-icon">
						<image v-if="pet.checked" src="/static/images/selected.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="addpet-btn">
				<view class="text">
					<image src="/static/images/add.png" mode="" class="add-icon"></image>
					添加宠物
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				petList:[
					{
						img:'/static/images/jilu.png',
						name:'狮子狗',
						type:'哈士奇',
						status:'未绝育',
						birthday:'生日2020-08-15',
						id:'5132124',
						hasbao:true,
						checked:false,
						sex:1
					},
					{
						img:'/static/images/jilu.png',
						name:'狮子狗',
						type:'哈士奇',
						status:'未绝育',
						birthday:'生日2020-08-15',
						id:'5132124',
						hasbao:true,
						checked:false,
						sex:1
					},
					{
						img:'/static/images/jilu.png',
						name:'狮子狗',
						type:'哈士奇',
						status:'未绝育',
						birthday:'生日2020-08-15',
						id:'5132124',
						hasbao:true,
						checked:true,
						sex:1
					},
				]
			};
		},
		methods:{
			choose(pet){
				this.petList.forEach(function(item ,index){
					item.checked = false
				})
				pet.checked = true
			}
		}
	}
</script>

<style lang="less">
.content{
	padding: 30rpx;
	.cell-gruops{
		margin-bottom: 36rpx;
		
		.left-icon{
			position: absolute;
			width: 46rpx;
			height: 46rpx;
			top:72rpx;
			right: 38rpx;
			background-color: #999999;
			border-radius: 50%;
			border: 1rpx solid #f9f9f9;
		}
	}
	.addpet-btn{
		background-image: url(/static/images/choosepet-btnbg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 120rpx;
		font-size: 30rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		line-height: 120rpx;
		.text{
			margin: 0 auto;
			width: 180rpx;
			height: 100%;
			
			.add-icon{
				width: 34rpx;
				height: 34rpx;
				margin-right: 16rpx;
				vertical-align: middle;
				display: inline-block;
				margin-top: -10rpx;
			}
		}
	}
}
</style>
