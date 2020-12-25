<template>
	<view class="addpetlife">
		<view class="cell-gruops">
			<u-field
				v-model="type"
				label="选择圈子"
				placeholder="请选择"
				input-align="right"
				right-icon="arrow-down-fill"
				:disabled="true" 
				:border-bottom="false"
				@click="showAction" 
			>
			</u-field>
			<u-select @confirm="clickItem" mode="single-column" :list="list" v-model="show"></u-select>
			<view class="tabs">
				<view class="tab-item" v-for="(tab,index) in tabs" :key="index"  @click="changetab(index)">
					<view class="img">
						<image :src="tab.image" mode=""></image>
					</view>
					<view class="text" :class="(current == index)?'active':''">
						{{tab.text}}
					</view>
				</view>
			</view>
			<view class="content">
				<block v-if="current == 0">
					<u-field
						v-model="title"
						label="标题："
						label-width="100"
						placeholder="攥写标题会有很多赞哦..."
					>
					</u-field>
					<view class="video">
						<view class="upload">
							<block v-if="videoImg">
								<image class="img" :src="videoImg" mode=""></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove()"></u-icon>
							</block>
							<block v-else>
								<image  @click="chooseImg" class="icon" src="/static/images/camera.png" mode=""></image>
								<view class="text">
									添加封面
								</view>
							</block>
						</view>
						<view class="upload">
							<block v-if="video">
								<video :src="video" mode=""></video>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove()"></u-icon>
							</block>
							<block v-else>
								<image @click="choosevideo" class="icon" src="/static/images/video.png" mode=""></image>
								<view class="text">
									添加视频
								</view>
							</block>
						</view>
					</view>
				</block>
				<block v-if="current == 1">
					<u-field
						v-model="title"
						label="标题："
						label-width="100"
						placeholder="攥写标题会有很多赞哦..."
					>
					</u-field>
					<u-field
						type="textarea"
						v-model="text"
						label="输入内容："
						label-width="150"
						maxlength="500"
						placeholder="说点什么吧..."
					>
					</u-field>
					<view class="imgs">
						<view class="upload">
							<block v-if="videoImg">
								<image class="img" :src="videoImg" mode=""></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove"></u-icon>
							</block>
							<block v-else>
								<image  @click="chooseImg" class="icon" src="/static/images/camera.png" mode=""></image>
								<view class="text">
									添加封面
								</view>
							</block>
						</view>
						<view class="upload">
							<block v-if="videoImg">
								<image class="img" :src="videoImg" mode=""></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove"></u-icon>
							</block>
							<block v-else>
								<image  @click="chooseImg" class="icon" src="/static/images/camera.png" mode=""></image>
								<view class="text">
									添加图片
								</view>
							</block>
						</view>
						<view class="upload">
							<block v-if="videoImg">
								<image class="img" :src="videoImg" mode=""></image>
								<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#fa3534" @click="remove"></u-icon>
							</block>
							<block v-else>
								<image  @click="chooseImg" class="icon" src="/static/images/camera.png" mode=""></image>
								<view class="text">
									添加图片
								</view>
							</block>
						</view>
					</view>
				</block>
			</view>
			
		</view>
		
		<view class="submit btn">
			确认提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs:[
					{
						image:'/static/images/seach_yiyuan.png',
						text:'发视频',
						urlpath:''
					},
					{
						image:'/static/images/seach_chongquan.png',
						text:'发图文',
						urlpath:''
					}
				],
				list:[
					{
						value: '1',
						label: '汪星人',
					},
					{
						value: '2',
						label: '喵星人',
					},
					{
						value: '3',
						label: '其他',
					}
				],
				current:1,
				show:false,
				type:'',
				videoImg:'',
				video:'',
				text:''
			};
		},
		methods:{
			showAction() {
				this.show = true;
			},
			clickItem(e) {
				console.log(e[0].label);
				this.type = e[0].label;
			},
			chooseImg(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    success: function (res) {
						that.videoImg = res.tempFilePaths[0]
				    }
				});
			},
			choosevideo(){
				let that = this;
				uni.chooseVideo({
				    count: 1, //默认9
				    success: function (res) {
						that.video = res.tempFilePath;
				    }
				});
			},
			changetab(index) {
				this.current = index;
			},
		}
	}
</script>

<style lang="less">
.addpetlife{
	padding: 30rpx 30rpx 75rpx;
	.cell-gruops{
		font-size: 30rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 15rpx 15rpx 0px rgba(119, 119, 119, 0.05);
		border-radius: 30rpx;
		overflow: hidden;
		
		.tabs{
			padding: 0 30rpx;
			position: relative;
			font-size: 28rpx;
			background: #F7F7F7;
			display: flex;
			.tab-item{
				flex: 1;
				text-align: center;
				.img{
					margin: 0 auto;
					width: 100rpx;
					height: 100rpx;
					margin-top: 21rpx;
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
					padding-bottom: 24rpx;
					&.active::after{
						content: '';
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						height: 10rpx;
						background: linear-gradient(45deg, #3B1291, #8629E4);
						width: 60%;
						margin: 0 auto;
					}
				}
			}
		}
	}
	.content{
		.video,.imgs{
			padding: 20rpx;
			.upload{
				width: 185rpx;
				height: 185rpx;
				border: 2rpx dashed #E4E4E4;
				border-radius: 10rpx;
				position: relative;
				display: inline-block;
				margin-right: 30rpx;
				max-width: 200rpx;
				.icon{
					width: 78rpx;
					height: 68rpx;
					margin: 45rpx 50rpx 0;
				}
				.text{
					margin-top: 10rpx;
					font-size: 20rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
					text-align: center;
				}
				.u-clear-icon{
					position: absolute;
					top: -20rpx;
					right: -20rpx;
				}
				video{
					width: 100%;
				}
			}
		}
	}
	.btn{
		height: 100rpx;
		border-radius: 50rpx;
		line-height: 100rpx;
		font-size: 35rpx;
		text-align: center;
	}
	.submit{
		background-color: rgba(24, 171, 255, 1);
		color: #FFFFFF;
		margin: 88rpx 25rpx 0;
	}
	.u-textarea-class{
		height: 200rpx;
	}
}
</style>
