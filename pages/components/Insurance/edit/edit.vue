<template>
	<view class="edit">
		<view class="tip">
			<view class="title">
				温馨提示： 
			</view>
			<view class="text">
				您提供的理赔资料务必真实有效，拍照清晰，各项上传内容必须齐全，不能遗漏，以免影响您的正常理赔。         
			</view>
		</view>
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon bingli">
					<image src="/static/images/bingli.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						病历
					</view>
					<view class="text">
						清晰的主诉、检查手段、确诊结果和治疗记录等
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="choosebinli"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="binliList.length" 
				ref="uUpload" 
				:action="action" 
				:file-list="binliList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon huayan">
					<image src="/static/images/huayan.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						化验单
					</view>
					<view class="text">
						生化、血常规等
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="choosehuayan"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="huayanList.length" 
				ref="uUpload" 
				:action="action" 
				:file-list="huayanList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon shuzi">
					<image src="/static/images/shuzi.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						数字影像
					</view>
					<view class="text">
						DR等
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="chooseshuzi"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="shuziList.length" 
				ref="uUpload" 
				:action="action" 
				:file-list="shuziList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon chufang">
					<image src="/static/images/chufang.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						处方单
					</view>
					<view class="text">
						药品处方等
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="choosechufang"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="chufangList.length" 
				ref="uUpload" 
				:action="action" 
				:file-list="chufangList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon shoushu">
					<image src="/static/images/shoushu.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						手术照片
					</view>
					<view class="text">
						疾病部位照片，手术前、手术中、手术后等 
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="chooseshoushu"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="shoushuList.length" 
				:action="action" 
				:file-list="shoushuList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon qindan">
					<image src="/static/images/qindan.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						缴费清单小票
					</view>
					<view class="text">
						
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="chooseqindan"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="qindanList.length" 
				:action="action" 
				:file-list="qindanList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="cell-gruops">
			<view class="cell-box">
				<view class="icon fapiao">
					<image src="/static/images/fapiao.png" mode=""></image>
				</view>
				<view class="info">
					<view class="title">
						发票
					</view>
					<view class="text">
						正规增值税发票发票联 
					</view>
				</view>
				<view class="upload-icon">
					<image src="/static/images/upload.png" mode="" @click="choosefapiao"></image>
				</view>
			</view>
			<view class="upload-list">
				<u-upload 
				width="120"
				height="120"
				v-if="fapiaoList.length" 
				:action="action" 
				:file-list="fapiaoList" 
				:auto-upload="false" 
				></u-upload>
			</view>
		</view>
		
		<view class="submit btn">
			确认提交
		</view>
		
		<view class="zancun btn">
			暂存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				binliList:[],
				huayanList:[],
				shuziList:[],
				chufangList:[],
				shouhusList:[],
				qindanList:[],
				fapiaoList:[]
			}
		},
		methods: {
			choosebinli(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.binliList.push(arr);
						})
				    }
				});
			},
			choosehuayan(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.huayanList.push(arr);
						})
				    }
				});
			},
			chooseshuzi(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.shuziList.push(arr);
						})
				    }
				});
			},
			choosechufang(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.hufangList.push(arr);
						})
				    }
				});
			},
			chooseshoushu(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.houshuList.push(arr);
						})
				    }
				});
			},
			chooseqindan(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.qindanList.push(arr);
						})
				    }
				});
			},
			choosefapiao(){
				var that = this;
				uni.chooseImage({
				    success: function (res) {
				        console.log('tempFilePaths',res.tempFilePaths);
						var imgs = JSON.stringify(res.tempFilePaths);
						res.tempFilePaths.forEach(function(item,index){
							let arr = {
								url:item
							};
							that.fapiaoList.push(arr);
						})
				    }
				});
			},
		}
	}
</script>

<style lang="less">
.edit{
	background: #f9f9f9;
	padding-bottom: 140rpx;
	.tip{
		background: linear-gradient(39deg, #DD1939, #FF7800);
		border-radius: 25rpx;
		margin: 17rpx 30rpx 0;
		padding: 20rpx 30rpx;
		color: #FFFFFF;
		text-shadow: 0px -5px 10px rgba(119, 119, 119, 0.2);
		line-height: 40rpx;
		font-family: Alibaba PuHuiTi;
		font-weight: 500;
		.title{
			font-size: 28rpx;
		}
		.text{
			font-size: 25rpx;
		}
	}
	.cell-gruops{
		margin: 20rpx 30rpx 0;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 51px 0px rgba(179, 179, 179, 0.25);
		border-radius: 25rpx;
		.cell-box{
			height: 150rpx;
			position: relative;
			border-bottom: 2rpx solid #F0F0F0;
			.icon{
				display: inline-block;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				&.bingli{
					width: 60rpx;
					height: 81rpx;
					left: 38rpx;
				}
				&.huayan{
					width: 62rpx;
					height: 90rpx;
					left: 38rpx;
				}
				&.shuzi{
					width: 72rpx;
					height: 65rpx;
					left: 32rpx;
				}
				&.chufang{
					width: 60rpx;
					height: 76rpx;
					left: 38rpx;
				}
				&.shoushu{
					width: 70rpx;
					height: 71rpx;
					left: 33rpx;
				}
				&.qindan{
					width: 79rpx;
					height: 60rpx;
					left: 29rpx;
				}
				&.fapiao{
					width: 60rpx;
					height: 76rpx;
					left: 38rpx;
				}
			}
			.info{
				display: inline-block;
				width: 400rpx;
				position: absolute;
				left: 130rpx;
				top: 50%;
				transform: translateY(-50%);
				.title{
					font-size: 45rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 500;
				}
				.text{
					font-size: 25rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #999999;
				}
			}
			.upload-icon{
				display: inline-block;
				width: 90rpx;
				height: 90rpx;
				position: absolute;
				right: 30rpx;
				top:30rpx
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
	.zancun{
		margin: 34rpx 200rpx 0;
		border: 2px solid #DDDDDD;
		color: #777777;
	}
}
</style>
