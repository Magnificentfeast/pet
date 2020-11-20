<template>
	<view>
		<u-tabbar
		    v-model="current"
		    :show="show"
		    :bg-color="bgColor"
		    :border-top="borderTop"
		    :list="list"
			:mid-button="midButton"
			:inactive-color="inactiveColor"
			:activeColor="activeColor"
		></u-tabbar>
	</view>
</template>

<script>
	import index from "../componentsB/tabbar/index.vue"
	export default {
		data() {
			return {
				current: 0,
				show: true,
				bgColor: '#ffffff',
				borderTop: true,
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						pagePath:"",
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '放映厅',
						customIcon: false,
					},
					{
						iconPath: "/static/uview/example/min_button.png",
						selectedIconPath: "/static/uview/example/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '直播',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				midButton: true,
				inactiveColor: '#909399',
				activeColor: '#5098FF'
			}
		},
		methods: {
			switchTab(index) {
				console.log(index)
				return true;
			},
		}
	}
</script>

<style>

</style>
