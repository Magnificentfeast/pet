<template>
	<view class="content">
		<view class="content-box" @touchstart="touchstart" id="content-box" :class="{'content-showfn':showFunBtn}">
			<!-- 背景图- 定位方式 -->
			<!-- <image class="content-box-bg" :src="userInfo.chatBgImg" :style="{ height: imgHeight }"></image> -->
			<view class="content-box-loading" v-if="!loading"><u-loading mode="flower"></u-loading></view>
			<view class="message" v-for="(item, index) in messageList" :key="index" :id="`msg-${item.hasBeenSentId}`">
				<view class="message-item " :class="item.isItMe ? 'right' : 'left'">
					<!-- <view class="user-info"> -->
						<image class="img" :src="item.fromUserHeadImg" mode="" @tap="linkToBusinessCard(item.fromUserId)"></image>
						<!-- <view class="name" style="text-align: center;font-size: 24rpx;">
							{{ item.userName }}
						</view> -->
					<!-- </view> -->
					<!-- contentType = 1 文本 -->
					<view class="content" v-if="item.contentType == 1">
						<rich-text :nodes="item.content"></rich-text>
					</view>
					<!-- contentType = 2 语音 -->
					<view
						class="content contentType2"
						:class="[{ 'content-type-right': item.isItMe }]"
						v-if="item.contentType == 2"
						@tap="handleAudio(item)"
						hover-class="contentType2-hover-class"
						:style="{width:`${130+(item.contentDuration*2)}rpx`}"
					>
						<view
							class="voice_icon"
							:class="[
								{ voice_icon_right: item.isItMe },
								{ voice_icon_left: !item.isItMe },
								{ voice_icon_right_an: item.anmitionPlay && item.isItMe },
								{ voice_icon_left_an: item.anmitionPlay && !item.isItMe }
							]"
						></view>
						<view class="">{{ item.contentDuration }}''</view>
					</view>
					<!-- contentType = 3 图片 -->
					<view 
						class="content contentType3" 	
						v-if="item.contentType == 3"
						@tap="viewImg([item.content])"
					>
						<image :src="item.content" class="img" mode="widthFix"></image>
					</view>
				</view>
			</view> 
		</view>
		
		<!-- 底部聊天输入框 -->
		<view class="input-box" :class="{ 'input-box-mpInputMargin': mpInputMargin }">
			<view class="input-box-flex">
				<!-- #ifndef H5 -->
				<image v-if="chatType === 'voice'" class="icon_img" :src="require('@/static/voice.png')"  @click="switchChatType('keyboard')"></image>
				<image v-if="chatType === 'keyboard'" class="icon_img" :src="require('@/static/keyboard.png')"  @click="switchChatType('voice')"></image>
				<!-- #endif -->
				<view class="input-box-flex-grow"> 
					<input
						v-if="chatType === 'voice'"
						type="text"
						class="content"
						id="input"
						v-model="formData.content"
						:hold-keyboard="true"
						:confirm-type="'send'"
						:confirm-hold="true"
						placeholder-style="color:#DDDDDD;"
						:cursor-spacing="10"
						@confirm="sendMsg(null)"
					/>
					<view
						class="voice_title"
						v-if="chatType === 'keyboard'"
						:style="{ background: recording ? '#c7c6c6' : '#FFFFFF' }"
						@touchstart.stop.prevent="startVoice"
						@touchmove.stop.prevent="moveVoice"
						@touchend.stop="endVoice"
						@touchcancel.stop="cancelVoice"
					>
						{{ voiceTitle }}
					</view>
				</view>
				
				<!-- 功能性按钮 -->
				<image class=" icon_btn_add" :src="require('@/static/face.png')" @tap="chooseEmoji"></image>
				<image class=" icon_btn_add" :src="require('@/static/add.png')" @tap="switchFun"></image>
				
				<!-- #ifdef H5 --> 
				<button class="btn" type="primary" size="mini" @touchend.prevent="sendMsg(null)">发送</button>
				<!-- #endif -->
			</view>
			
			<view class="fun-box" :class="{'show-fun-box':showFunBtn}">
				<!-- 表情 -->
				<swiper class="emoji-swiper" :class="{hidden:hideEmoji}" indicator-dots="true" duration="150">
					<swiper-item v-for="(page,pid) in emojiList" :key="pid">
						<view v-for="(em,eid) in page" :key="eid" @tap="addEmoji(em)">
							<image mode="widthFix" :src="'/components/static/emoji/'+em.url"></image>
						</view>
					</swiper-item>
				</swiper>
				<u-grid :col="4" :class="{hidden:hideGrid}"  hover-class="contentType2-hover-class" :border="false" @click="clickGrid">
					<u-grid-item v-for="(item, index) in funList" :index="index" :key="index" bg-color="#eaeaea">
						<u-icon :name="item.icon" :size="52"></u-icon>
						<view class="grid-text">{{ item.title }}</view>
					</u-grid-item>
				</u-grid>
			</view>

		</view>
		
		<!-- //语音动画 -->
		<view class="voice_an"  v-if="recording">
			<view class="voice_an_icon">
				<view id="one" class="wave"></view>
				<view id="two" class="wave"></view>
				<view id="three" class="wave"></view>
				<view id="four" class="wave"></view>
				<view id="five" class="wave"></view>
				<view id="six" class="wave"></view>
				<view id="seven" class="wave"></view>
			</view>
			<view class="text">{{voiceIconText}}</view>
		</view>
	</view>
</template>

<script>
import Utils  from '../../common/util.js'
export default {
	data() {
		return {
			fromUserInfo: {
				fromUserId:2,
				fromUserHeadImg:'/static/images/user-icon.png',
				fromUserName:'酷狗'
			},
			userInfo:{
				id:1,
				headImg:'/static/images/user-icon.png',
				userName:'酷奇'
			},
			formData: {
				content: '',
				limit: 15,
				index: 1
			},
			messageList: [],
			loading: true, //标识是否正在获取数据
			imgHeight: '1000px',
			mpInputMargin: false, //适配微信小程序 底部输入框高度被顶起的问题
			chatType:"voice",  // 图标类型 'voice'语音 'keyboard'键盘
			voiceTitle: '按住 说话',
			Recorder: uni.getRecorderManager(),
			Audio: uni.createInnerAudioContext(),
			recording: false, //标识是否正在录音
			isStopVoice: false, //加锁 防止点击过快引起的当录音正在准备(还没有开始录音)的时候,却调用了stop方法但并不能阻止录音的问题
			voiceInterval:null,
			voiceTime:0, //总共录音时长
			canSend:true, //是否可以发送
			PointY:0, //坐标位置
			voiceIconText:"正在录音...",
			showFunBtn:false, //是否展示功能型按钮
			AudioExam:null, //正在播放音频的实例
			funList: [
				{ icon:"photo-fill",title:"照片",uploadType:["album"] },
				{ icon:"camera-fill",title:"拍摄",uploadType:["camera"] },
			],
			emojiList:Utils.emojiList,
			hideGrid:true,
			hideEmoji:true
		};
	},
	methods: {
		//拼接消息 处理滚动
		async joinData() {
			if (!this.loading) {
				//如果没有获取数据 即loading为false时，return 避免用户重复上拉触发加载
				return;
			}
			this.loading = false;
			const data = await this.getMessageData();
			//获取节点信息
			const { index } = this.formData;
			const sel = `#msg-${index > 1 ? this.messageList[0].hasBeenSentId : data[data.length - 1].hasBeenSentId}`;
			this.messageList = [...data, ...this.messageList];
			//填充数据后，视图会自动滚动到最上面一层然后瞬间再跳回bindScroll的指定位置 ---体验不是很好，后期优化
			this.$nextTick(() => {
				this.bindScroll(sel);
				//如果还有数据
				if (this.formData.limit >= data.length) {
					this.formData.index++;
					setTimeout(() => {
						this.loading = true;
					}, 200);
				}
			});
		},
		//处理滚动
		bindScroll(sel, duration = 0) {
			const query = uni.createSelectorQuery().in(this);
			query
				.select(sel)
				.boundingClientRect(data => {
					uni.pageScrollTo({
						scrollTop: data && data.top - 40,
						duration
					});
				})
				.exec();
		},
		//获取消息
		getMessageData() {
			let getData = () => {
				let arr = [];
				let startIndex = (this.formData.index - 1) * this.formData.limit;
				let endIndex = startIndex + this.formData.limit;
				for (let i = startIndex; i < endIndex; i++) {
					const isItMe = Math.random() > 0.5 ? true : false;
					arr.unshift({
						hasBeenSentId: i, //已发送过去消息的id
						content: `很高兴认识你，这是第${i + 1}条消息。`,
						fromUserHeadImg: isItMe ? this.userInfo.headImg : this.fromUserInfo.fromUserHeadImg, //用户头像
						fromUserId: isItMe ? this.userInfo.id : this.fromUserInfo.fromUserId,
						userName: isItMe ? this.userInfo.userName : this.fromUserInfo.fromUserName,
						isItMe, //true此条信息是我发送的 false别人发送的
						createTime: Date.now(),
						contentType: 1, // 1文字文本 2语音
						anmitionPlay: false //标识音频是否在播放
					});
				}
				return arr;
			};
			return new Promise((resolve, reject) => {
				const data = getData();
				setTimeout(() => {
					resolve(data);
				}, 500);
			});
		},
		//切换语音或者键盘方式
		switchChatType(type) {
			this.chatType = type;
			this.showFunBtn =false;
		},
		//切换功能性按钮
		switchFun(){
			// this.chatType = 'keyboard'
			this.showFunBtn = !this.showFunBtn;
			this.hideGrid = false;
			this.hideEmoji = true;
			uni.hideKeyboard()
		},
		// 选择表情
		chooseEmoji(){
			if(this.hideEmoji){
				this.hideEmoji = false;
				this.showFunBtn = true;
				this.hideGrid = true;
			}else{
				this.hideEmoji = true;
				this.showFunBtn = false;
				this.hideGrid = false;
			}
			
		},
		//添加表情
		addEmoji(em){
			this.formData.content+=em.alt;
		},
		//发送消息
		sendMsg(data) {
			const params = {
				hasBeenSentId: Date.now(), //已发送过去消息的id
				content: Utils.replaceEmoji(this.formData.content),
				fromUserHeadImg: this.userInfo.headImg, //用户头像
				fromUserId: this.userInfo.id,
				isItMe: true, //true此条信息是我发送的  false别人发送的
				createTime: Date.now(),
				contentType: 1
			};

			if (data) {
				if(data.contentType == 2){
					//说明是发送语音
					params.content = data.content;
					params.contentType = data.contentType;
					params.contentDuration = data.contentDuration;
					params.anmitionPlay = false;
				}else if(data.contentType == 3){
					//发送图片
					params.content = data.content;
					params.contentType = data.contentType;
				}
			} else if (!this.$u.trim(this.formData.content)) {
				//验证输入框书否为空字符传
				return;
			}

			this.messageList.push(params);

			this.$nextTick(() => {
				this.formData.content = '';
				// #ifdef MP-WEIXIN
					if(params.contentType == 1){
						uni.pageScrollTo({
							scrollTop: 99999,
							duration: 0, //小程序如果有滚动效果 input的焦点也会随着页面滚动...
						});
					}else{
						setTimeout(()=>{
							uni.pageScrollTo({
								scrollTop: 99999,
								duration: 0, //小程序如果有滚动效果 input的焦点也会随着页面滚动...
							});
						},150)
					}
				// #endif
					
				// #ifndef MP-WEIXIN
					uni.pageScrollTo({
						scrollTop: 99999,
						duration: 100
					});
				// #endif
				
				if(this.showFunBtn){
					this.showFunBtn = false;
				}
				
				// #ifdef MP-WEIXIN 
				if (params.contentType == 1) {
					this.mpInputMargin = true;
				} 
				// #endif
				//h5浏览器并没有很好的办法控制键盘一直处于唤起状态 而且会有样式性的问题
				// #ifdef H5
				uni.hideKeyboard();
				// #endif
			});
		},
		//用户触摸屏幕的时候隐藏键盘
		touchstart() {
			uni.hideKeyboard();
		},
		// userid 用户id
		// linkToBusinessCard(userId) {
		// 	this.$u.route({
		// 		url: 'pages/businessCard/businessCard',
		// 		params: {
		// 			userId
		// 		}
		// 	});
		// },
		//准备开始录音
		startVoice(e) {
			if(!this.Audio.paused){
				//如果音频正在播放 先暂停。
				this.stopAudio(this.AudioExam)
			}
			this.recording = true;
			this.isStopVoice = false;
			this.canSend = true;
			this.voiceIconText = "正在录音..."
			this.PointY = e.touches[0].clientY;
			this.Recorder.start({
				format: 'mp3'
			});
		},
		//录音已经开始
		beginVoice(){
			if (this.isStopVoice) {
				this.Recorder.stop();
				return;
			}
			this.voiceTitle = '松开 结束'
			this.voiceInterval =  setInterval(()=>{
				this.voiceTime ++;
			},1000)
		},
		//move 正在录音中
		moveVoice(e){
			const PointY = e.touches[0].clientY
			const slideY = this.PointY - PointY;
			if(slideY > uni.upx2px(120)){
				this.canSend = false;
				this.voiceIconText = '松开手指 取消发送 '
			}else if(slideY > uni.upx2px(60)){
				this.canSend = true;
				this.voiceIconText = '手指上滑 取消发送 '
			}else{
				this.voiceIconText = '正在录音... '
			}
		},
		//结束录音
		endVoice() {
			this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
			this.Recorder.stop();
			this.voiceTitle = '按住 说话'
		},
		//录音被打断
		cancelVoice(e){
			this.voiceTime = 0;
			this.voiceTitle = '按住 说话';
			this.canSend = false;
			this.Recorder.stop();
		},
		//处理录音文件
		handleRecorder({ tempFilePath,duration }) {
			let contentDuration;
			// #ifdef MP-WEIXIN
			this.voiceTime = 0;
			if (duration < 600) {
				this.voiceIconText="说话时间过短";
				setTimeout(()=>{
					this.recording = false;
				},200)
				return;
			} 
			contentDuration = duration/1000;
			// #endif
			
			// #ifdef APP-PLUS
			contentDuration = this.voiceTime +1;
			this.voiceTime = 0;
			if(contentDuration <= 0) {
				this.voiceIconText="说话时间过短";
				setTimeout(()=>{
					this.recording = false;
				},200)
				return;
			};
			// #endif
			
			this.recording = false;
			const params = {
				contentType: 2,
				content: tempFilePath,
				contentDuration: Math.ceil(contentDuration)
			};
			this.canSend && this.sendMsg(params);
		},
		//控制播放还是暂停音频文件
		handleAudio(item) {
			this.AudioExam = item;
			this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
		},
		//播放音频
		playAudio(item) {
			this.Audio.src = item.content;
			this.Audio.hasBeenSentId = item.hasBeenSentId;
			this.Audio.play();
			item.anmitionPlay = true;
		},
		//停止音频
		stopAudio(item) {
			item.anmitionPlay = false;
			this.Audio.src = '';
			this.Audio.stop();
		},
		//关闭动画
		closeAnmition() {
			const hasBeenSentId = this.Audio.hasBeenSentId;
			const item = this.messageList.find(it => it.hasBeenSentId == hasBeenSentId);
			item.anmitionPlay = false;
		},
		//点击宫格时触发
		clickGrid(index){
			if(index == 0){
				this.chooseImage(['album'])
			}else if(index == 1){
				this.chooseImage(['camera'])
			}
		},
		//发送图片
		chooseImage(sourceType){
			uni.chooseImage({
				sourceType,
				sizeType:['compressed'], 
				success:res=>{ 
					this.showFunBtn = false;
					for(let i = 0;i<res.tempFilePaths.length;i++){
						const params = {
							contentType: 3,
							content: res.tempFilePaths[i],
						};
						this.sendMsg(params)
					}
				}
			})
		},
		//查看大图
		viewImg(imgList){
			uni.previewImage({
				urls: imgList,
				// #ifndef MP-WEIXIN
				indicator: 'number'
				// #endif
			});
		},
	},
	onPageScroll(e) {
		if (e.scrollTop < 50) {
			this.joinData();
		}
	},
	onNavigationBarButtonTap({ index }) {
		if (index == 0) {
			//用户详情 设置
		} else if (index == 1) {
			//返回按钮
			this.$u.route({
				type: 'switchTab',
				url: 'pages/home/home'
			});
		}
	},
	//返回按钮事件
	onBackPress(e) {
		//以下内容对h5不生效
		//--所以如果用浏览器自带的返回按钮进行返回的时候页面不会重定向 正在寻找合适的解决方案
		this.$u.route({
			type: 'switchTab',
			url: 'pages/home/home'
		});
		return true;
	},
	onLoad(info) {
		// { messageId,fromUserName,fromUserHeadImg } = info
		const userInfo = this.firendList.filter(item => item.userId == info.fromUserId)[0];
		this.fromUserInfo = {
			fromUserName: userInfo.userName,
			fromUserHeadImg: userInfo.headImg,
			fromUserId: userInfo.userId,
			messageId: info.messageId
		};

		//录音开始事件
		this.Recorder.onStart(e => {
			
			this.beginVoice();
		});
		//录音结束事件
		this.Recorder.onStop(res => {
			clearInterval(this.voiceInterval);
			this.handleRecorder(res);
		});

		//音频停止事件
		this.Audio.onStop(e => {
			this.closeAnmition();
		});

		//音频播放结束事件
		this.Audio.onEnded(e => {
			this.closeAnmition();
		});
	},
	onReady() {
		//自定义返回按钮 因为原生的返回按钮不可阻止默认事件
		// #ifdef H5
		const icon = document.getElementsByClassName('uni-page-head-btn')[0];
		icon.style.display = 'none';
		// #endif

		uni.setNavigationBarTitle({
			title: this.fromUserInfo.fromUserName
		});
		this.joinData();
		uni.getSystemInfo({
			success: res => {
				this.imgHeight = res.windowHeight + 'px';
			}
		});
		
		uni.onKeyboardHeightChange(res => {
			if (res.height == 0) {
				// #ifdef MP-WEIXIN
				this.mpInputMargin = false;
				// #endif
			}else{
				this.showFunBtn = false;
			}
		});
	}
};
</script>



<style lang="scss">
page {
	background-color: #f3f3f3;
}
.hidden{
	display: none !important;
}
.content {
	&-showfn{
		padding-bottom: 0rpx;
		padding-bottom: calc(420rpx + constant(safe-area-inset-bottom));
		padding-bottom: calc(420rpx + env(safe-area-inset-bottom) );
		/* #ifdef MP-WEIXIN */
		/* #endif */
	}
	&-box {
		width: 100%;
		height: auto;
		min-height: calc(100vh - env(safe-area-inset-top) - 200rpx);
		box-sizing: content-box;
		position: relative;
		padding-bottom: 120rpx;
		
		/* #ifdef APP-PLUS  */
		margin-bottom: 0rpx;
		margin-bottom: constant(safe-area-inset-bottom);
		margin-bottom: env(safe-area-inset-bottom);
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-bottom: 0rpx;
		padding-bottom: calc(120rpx + constant(safe-area-inset-bottom));
		padding-bottom: calc(120rpx + env(safe-area-inset-bottom) );
		/* #endif */
	
		&-bg {
			width: 100%;
			position: fixed;
			/* #ifdef MP-WEIXIN */
			bottom: 0;
			bottom: constant(safe-area-inset-bottom);
			bottom: env(safe-area-inset-bottom);
			/* #endif */
			/* #ifndef MP-WEIXIN */
			top: 0;
			left: 0;
			/* #endif */
		}

		&-loading {
			text-align: center;
			padding: 20rpx 0;
		}

		.message {
			padding: 13rpx 20rpx;
		}
		
		.message-item {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			align-content: flex-start;
			flex-wrap: nowrap;
			flex-direction: row;

			.img {
				width: 80rpx;
				height: 80rpx;
				border-radius: 5rpx;
			}

			.content {
				padding: 20rpx;
				max-width: 500rpx;
				border-radius: 10rpx;
				font-size: 28rpx;
			}
			
			// 语音
			.contentType2 {
				display: flex;
				flex-direction: row;
				align-items: center;
				.voice_icon {
					height: 34rpx;
					width: 34rpx; 
					background-repeat: no-repeat;
					background-size: 100%;
				}
				.voice_icon_right {
					background-image: url(/static/voice-left-3.png);
					margin-left: 10rpx;
				}
				.voice_icon_left {
					background-image: url(/static/voice-right-3.png);
					margin-right: 10rpx;
				}
				.voice_icon_right_an {
					animation: voiceAn_right 1s linear alternate infinite;
				}
				.voice_icon_left_an {
					animation: voiceAn_left 1s linear alternate infinite;
				}
				@keyframes voiceAn_right {
					0% {
						background-image: url(/static/voice-left-1.png);
					}
					50% {
						background-image: url(/static/voice-left-2.png);
					}
					100% {
						background-image: url(/static/voice-left-3.png);
					}
				}
				@keyframes voiceAn_left {
					0% {
						background-image: url(/static/voice-right-1.png);
					}
					50% {
						background-image: url(/static/voice-right-2.png);
					}
					100% {
						background-image: url(/static/voice-right-3.png);
					}
				}
			}
			
			//图片
			.contentType3{
				padding: 0;
				border-radius: 2rpx;
				background-color: transparent !important;
				.img{
					width: 200rpx;
					height: auto;
					max-width: 300rpx;
					max-height: 400rpx;
				}
			}
			.contentType3::after{
				border: none !important;
				display: none !important;
			}
			.content-type-right {
				flex-direction: row-reverse;
			}

			&.right {
				flex-direction: row-reverse;

				.content {
					background-color: $uni-color-success;
					margin-right: 28rpx;
					word-break: break-all;
					line-height: 36rpx;
					position: relative;

					&::after {
						content: '';
						display: block;
						width: 0;
						height: 0;
						border-top: 10rpx solid transparent;
						border-bottom: 10rpx solid transparent;
						border-left: 16rpx solid $uni-color-success;
						position: absolute;
						right: -16rpx;
						top: 30rpx;
					}
				}
			}

			&.left {
				.content {
					background-color: $uni-text-color-inverse;
					margin-left: 28rpx;
					word-break: break-all;
					line-height: 36rpx;
					position: relative;

					&::after {
						content: '';
						display: block;
						width: 0;
						height: 0;
						border-top: 10rpx solid transparent;
						border-bottom: 10rpx solid transparent;
						border-right: 16rpx solid $uni-text-color-inverse;
						position: absolute;
						left: -16rpx;
						top: 30rpx;
					}
				}
			}
		}
	}

	.input-box {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: content-box;
		z-index: 999;
		background-color: #eaeaea;
		
		/* #ifdef APP-PLUS */
		margin-bottom: 0rpx;
		margin-bottom: constant(safe-area-inset-bottom);
		margin-bottom: env(safe-area-inset-bottom);
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-bottom: 0rpx;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		/* #endif */

		&-flex {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: nowrap;
			flex-direction: row;
			padding: 20rpx;
			box-sizing: border-box;
			image{
				width: 56rpx;
				height: 56rpx;
			}
			.icon_img {
				margin-right: 20rpx;
			}
			.icon_btn_add{
				margin-left: 20rpx;
			}
			&-grow {
				flex-grow: 1;

				.content {
					box-sizing: border-box;
					background-color: #fff;
					height: 80rpx;
					padding: 0 20rpx;
					border-radius: 12rpx;
					font-size: 28rpx;
					caret-color: $uni-color-success;
				}

				.voice_title {
					text-align: center;
					background-color: #ffffff;
					height: 80rpx;
					line-height: 80rpx;
					border-radius: 12rpx;
				}
			}

			.btn {
				margin-left: 20rpx;
				background-color: $u-type-success;
				border: none;
			}
		}
		
		.fun-box{
			opacity: 0;
			transition: all 0.1s ease-in-out;
			height: 0;
			.grid-text{
				padding-top: 10rpx;
				color: $uni-text-color-grey;
			}
			
		}
		.show-fun-box{
			opacity: 1;
			height: 300rpx;
			.emoji-swiper{
				height: 40vw;
				swiper-item{
					display: flex;
					align-content: flex-start;
					flex-wrap: wrap;
					view{
						width: 12vw;
						height: 12vw;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 8.4vw;
							height: 8.4vw;
						}
					}
				}
			}
		}
	}

	.input-box-mpInputMargin {
		// /* #ifdef MP-WEIXIN */
		// padding-bottom: 0rpx;
		// /* #endif */
	}
	.voice_an{
		width: 300rpx;
		height: 300rpx;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-55%);
		background-color: rgba(41,41,41,0.7);
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border-radius: 10rpx;
		.text{
			padding-top: 30rpx;
		}
		@keyframes runVoice{
			0%{
				height: 10%;
			}
			20%{
				height: 50%;
			}
			50%{
				height: 100%;
			}
			80%{
				height: 50%;
			}
			100%{
				height: 0%;
			}
		}	
		.wave{
			width:6rpx;
			height: 100%;
			margin-left: 10rpx;
			border-radius: 50rpx;
			background-color: #999;
			vertical-align: middle;
			display: inline-block;
		}
		.voice_an_icon{
			width: 200rpx;
			height: 100rpx;
			line-height: 50rpx;
			margin: 50rpx 0;
		}
		.voice_an_icon #one{
			animation:runVoice 0.6s infinite 0.1s;
		}
		.voice_an_icon #two{
			animation:runVoice 0.6s infinite 0.3s;
		}
		.voice_an_icon #three{
			animation:runVoice 0.6s infinite 0.6s;
		}
		.voice_an_icon #four{
			animation:runVoice 0.6s infinite 0.1s;
		}
		.voice_an_icon #five{
			animation:runVoice 0.6s infinite 0.3s;
		}
		.voice_an_icon #six{
			animation:runVoice 0.6s infinite 0.6s;
		}
		.voice_an_icon #seven{
			animation:runVoice 0.6s infinite 0.1s;
		}
	}
}
</style>
