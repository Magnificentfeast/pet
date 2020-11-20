Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
		{
			pagePath: "/pages/tabbar/index/index",
			iconPath: "/static/images/tabbar1.png",
			selectedIconPath: "/static/images/tabbar1.png",
			text: "首页"
		},{
			pagePath: "/pages/tabbar/pet-life/pet-life",
			iconPath: "/static/images/tabbar2.png",
			selectedIconPath: "/static/images/tabbar2.png",
			text: "宠圈"
		},
		{
			pagePath: "",
			iconPath: "/static/uview/example/min_button.png",
			selectedIconPath: "/static/uview/example/min_button_select.png",
			text: ""
		},
		{
			pagePath: "/pages/tabbar/message/message",
			iconPath: "/static/images/tabbar3.png",
			selectedIconPath: "/static/images/tabbar3.png",
			text: "消息"
		},
		{
			pagePath: "/pages/tabbar/my/my",
			iconPath: "/static/images/tabbar4.png",
			selectedIconPath: "/static/images/tabbar4.png",
			text: "我的"
		}
	]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
	  console.log(data)
	  this.setData({ 
		selected: data.index
	  })
	  if(data.index != 2){
		  wx.switchTab({url})
	  }else{
		console.log(e)
		console.log('发布弹窗')
	  }
    }
  }
})