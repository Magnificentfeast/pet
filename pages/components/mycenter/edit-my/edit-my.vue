<template>
	<view class="edit">
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="cell-title">
					头像
				</view>
				<view class="cell-item-box">
					<image :src="userInfo.headimg" mode="" class="headimg"></image>
					<image src="/static/images/arrow_right.png" class="right-arrow" mode=""></image>
				</view>
			</view>
			<view class="cell-box">
				<view class="cell-title">
					昵称
				</view>
				<view class="cell-item-box">
					<text>{{userInfo.nickname}}</text>
				</view>
			</view>
			<view class="cell-box" @click="show_nameinput()">
				<view class="cell-title">
					姓名
				</view>
				<view class="cell-item-box">
					<text>{{userInfo.name}}</text>
					<image src="/static/images/arrow_right.png" class="right-arrow" mode=""></image>
				</view>
			</view>
			<view class="cell-box" @click="showSelect()">
				<view class="cell-title">
					性别
				</view>
				<view class="cell-item-box">
					<text>{{userInfo.sex}}</text>
					<image src="/static/images/arrow_right.png" class="right-arrow" mode=""></image>
				</view>
			</view>
			<view class="cell-box" @click="showRegion()">
				<view class="cell-title">
					住址
				</view>
				<view class="cell-item-box">
					<text>{{userInfo.address}}</text>
					<image src="/static/images/arrow_right.png" class="right-arrow" mode=""></image>
				
				</view>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box" @click="show_phoneinput()">
				<view class="cell-title">
					手机号
				</view>
				<view class="cell-item-box">
					<text>{{userInfo.phone}}</text>
				</view>
			</view>
			<view class="cell-box">
				<view class="cell-title">
					微信账号
				</view>
				<view class="cell-item-box">
					<text>解绑</text>
					<image src="/static/images/arrow_right.png" class="right-arrow" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="cell-title">
					地址
				</view>
				<view class="cell-item-box">
					<text></text>
					<image src="/static/images/arrow_right.png" class="right-arrow" mode=""></image>
				</view>
			</view>
		</view>
		
		<u-picker mode="region" v-model="show_region" @confirm="confirmAddress"></u-picker>
		<u-select v-model="show_select" :list="list" @confirm="confirmSex"></u-select>
		<u-modal v-model="show_input" :show-cancel-button="true" :async-close="asyncClose" title="填写信息" @confirm="confirminput" @cancel="cancelinput">
			<u-form>
				<u-form-item v-if="change_name" label="姓名" label-width="150rpx" :label-style="labelstyle"><u-input v-model="userInfo.name" /></u-form-item>
				<u-form-item v-if="change_phone" label="手机号码" label-width="150rpx" :label-style="labelstyle"><u-input v-model="userInfo.phone" /></u-form-item>
			</u-form>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show_input:false,
				show_select:false,
				show_region:false,
				change_name:false,
				change_phone:false,
				labelstyle:{
					"margin-left":"20rpx"
				},
				list:[
					{
						value: '1',
						label: '男'
					},
					{
						value: '2',
						label: '女'
					}
				],
				userInfo:{
					headimg:'/static/images/head-img.png',
					nickname:'网购深',
					name:'赵子龙',
					sex:'男',
					address:'天一广场',
					phone:'13528743245',
					wxinfo:'',
					
				}
			};
		},
		methods:{
			showSelect(){
				this.show_select = true;
			},
			confirmSex(e){
				this.userInfo.sex=e[0].label;
			},
			showRegion(){
				this.show_region = true;
			},
			confirmAddress(e){
				console.log(e)
				this.userInfo.address = e.province.label+e.city.label+e.area.label
			},
			show_nameinput(){
				this.show_input = true;
				this.change_name = true;
			},
			show_phoneinput(){
				this.show_input = true;
				this.change_phone = true;
			},
			cancelinput(){
				this.show_input = false;
				this.change_phone = false;
				this.change_name = false;
			}
		}
	}
</script>

<style lang="less">
.edit{
	background: #f9f9f9;
	padding-top: 30rpx;
	.cell-gruops{
		font-size: 30rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 15rpx 15rpx 0px rgba(119, 119, 119, 0.05);
		border-radius: 30rpx;
		overflow: hidden;
		margin: 40rpx 40rpx 0;
		.cell-box{
			border-bottom: 1px solid rgba(153, 153, 153, 0.15);
			height: 100rpx;
			padding: 0 55rpx;
			line-height: 100rpx;
			&:last-child{
				border: none;
			}
			.cell-title{
				float: left;
				font-family: Alibaba PuHuiTi;
				font-weight: 500;
				color: #555555;
			}
			.cell-item-box{
				float: right;
				position: relative;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #999999;
				image{
					display: inline-block;
				}
				.headimg{
					width: 75rpx;
					height: 75rpx;
					vertical-align: middle;
				}
				.right-arrow{
					width: 19rpx;
					height: 33rpx;
					margin-left: 25rpx;
				}
			}
		}
	}
}
</style>
