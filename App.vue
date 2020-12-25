<script>
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
			username: '白居易',
			selected_index:0,
			tabbar:{
				current: 0,
				show: true,
				bgColor: '#ffffff',
				borderTop: true,
				list: [{
						iconPath: "/static/images/tabbar1-d.png",
						selectedIconPath: "/static/images/tabbar1.png",
						text: '首页',
						customIcon: false,
						pagePath: '/pages/tabbar/index/index'
					},
					{
						iconPath: "/static/images/tabbar2-d.png",
						selectedIconPath: "/static/images/tabbar2.png",
						text: '宠圈',
						isDot: false,
						customIcon: false,
						pagePath: '/pages/tabbar/pet-life/pet-life'
					},
					{
						iconPath: "/static/images/middle-btn.png",
						selectedIconPath: "/static/images/middle-btn.png",
						text: '',
						customIcon: false,
						midButton: true,
						pagePath: ''
					},
					{
						iconPath: "/static/images/tabbar3-d.png",
						selectedIconPath: "/static/images/tabbar3.png",
						text: '消息',
						customIcon: false,
						pagePath: '/pages/tabbar/message/message'
					},
					{
						iconPath: "/static/images/tabbar4-d.png",
						selectedIconPath: "/static/images/tabbar4.png",
						text: '我的',
						customIcon: false,
						pagePath: '/pages/tabbar/my/my'
					},
				],
				inactiveColor: '#909399',
				activeColor: '#18ABFF'
			},
			userLocation:{
				latitude:null,
				longitude:null
			},
		},
		onLaunch() {
			// 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
			// 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
			// import httpInterceptor from '@/common/http.interceptor.js'
			// Vue.use(httpInterceptor, app)
			// process.env.VUE_APP_PLATFORM 为通过js判断平台名称的方法，结果分别如下：
			/**
			 * h5，app-plus(nvue下也为app-plus)，mp-weixin，mp-alipay......
			 */
		},
		onShow: function() {
			console.log('App Show');
			const _this = this;
			wx.getSetting({
			  success (res) {
			    console.log(res.authSetting)
				var authSetting = res.authSetting
			    console.log(authSetting['scope.userLocation'])
				if(authSetting['scope.userLocation'] != true){
					wx.authorize({
						scope: 'scope.userLocation',
						success () {
							// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
							console.log(res)
						}
					})
				}
				setInterval(function(){
					uni.getLocation({
						type: 'wgs84',
						success: function (res) {
							// console.log('当前位置的经度：' + res.longitude);
							// console.log('当前位置的纬度：' + res.latitude);
							_this.globalData.userLocation.latitude = res.latitude;
							_this.globalData.userLocation.longitude = res.longitude;
						}
					})
				},5000)
			  }
			})
		},
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	@import "common/component.scss";
</style>