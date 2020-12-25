let emojiList=[
	[{"url":"emotion_weixiao.png",alt:"[微笑]"},{"url":"emotion_biezui.png",alt:"[撇嘴]"},{"url":"emotion_se.png",alt:"[色]"},{"url":"emotion_fadai.png",alt:"[发呆]"},{"url":"emotion_deyi.png",alt:"[得意]"},{"url":"emotion_liulei.png",alt:"[流泪]"},{"url":"emotion_haixiu.png",alt:"[害羞]"},{"url":"emotion_bizui.png",alt:"[闭嘴]"},{"url":"emotion_shui.png",alt:"[睡]"},{"url":"emotion_daku.png",alt:"[大哭]"},{"url":"emotion_ganga.png",alt:"[尴尬]"},{"url":"emotion_fanu.png",alt:"[发怒]"},{"url":"emotion_tiaopi.png",alt:"[调皮]"},{"url":"emotion_ciya.png",alt:"[呲牙]"},{"url":"emotion_jingya.png",alt:"[惊讶]"},{"url":"emotion_nanguo.png",alt:"[难过]"},{"url":"emotion_ku.png",alt:"[酷]"},{"url":"emotion_lenghan.png",alt:"[冷汗]"},{"url":"emotion_zhuakuang.png",alt:"[抓狂]"},{"url":"emotion_tu.png",alt:"[吐]"},{"url":"emotion_touxiao.png",alt:"[偷笑]"},{"url":"emotion_keai.png",alt:"[可爱]"},{"url":"emotion_baiyan.png",alt:"[白眼]"},{"url":"emotion_aoman.png",alt:"[傲慢]"}],
	[{"url":"emotion_jie.png",alt:"[饥饿]"},{"url":"emotion_kun.png",alt:"[困]"},{"url":"emotion_jingkong.png",alt:"[惊恐]"},{"url":"emotion_liuhan.png",alt:"[流汗]"},{"url":"emotion_hanxiao.png",alt:"[憨笑]"},{"url":"emotion_dabing.png",alt:"[大兵]"},{"url":"emotion_fendou.png",alt:"[奋斗]"},{"url":"emotion_zouma.png",alt:"[咒骂]"},{"url":"emotion_yiwen.png",alt:"[疑问]"},{"url":"emotion_xu.png",alt:"[嘘]"},{"url":"emotion_yun.png",alt:"[晕]"},{"url":"emotion_fakuang.png",alt:"[发狂]"},{"url":"emotion_shuai.png",alt:"[哀]"},{"url":"emotion_kulou.png",alt:"[骷髅]"},{"url":"emotion_qiaoda.png",alt:"[敲打]"},{"url":"emotion_zaijian.png",alt:"[再见]"},{"url":"emotion_cahan.png",alt:"[擦汗]"},{"url":"emotion_koubi.png",alt:"[抠鼻]"},{"url":"emotion_guzhang.png",alt:"[鼓掌]"},{"url":"emotion_qiudale.png",alt:"[糗大了]"},{"url":"emotion_huaixiao.png",alt:"[坏笑]"},{"url":"emotion_zuohengheng.png",alt:"[左哼哼]"},{"url":"emotion_youhengheng.png",alt:"[右哼哼]"},{"url":"emotion_haqian.png",alt:"[哈欠]"}],
	[{"url":"emotion_bishi.png",alt:"[鄙视]"},{"url":"emotion_weiqu.png",alt:"[委屈]"},{"url":"emotion_kuaikule.png",alt:"[快哭了]"},{"url":"emotion_yingxian.png",alt:"[阴险]"},{"url":"emotion_qinqin.png",alt:"[亲亲]"},{"url":"emotion_xia.png",alt:"[吓]"},{"url":"emotion_kelian.png",alt:"[可怜]"},{"url":"emotion_caidao.png",alt:"[菜刀]"},{"url":"emotion_xigua.png",alt:"[西瓜]"},{"url":"emotion_pijiu.png",alt:"[啤酒]"},{"url":"emotion_lanqiu.png",alt:"[篮球]"},{"url":"emotion_pingpang.png",alt:"[乒乓]"},{"url":"emotion_kafei.png",alt:"[咖啡]"},{"url":"emotion_fan.png",alt:"[饭]"},{"url":"emotion_zhutou.png",alt:"[猪头]"},{"url":"emotion_meigui.png",alt:"[玫瑰]"},{"url":"emotion_diaoxie.png",alt:"[凋谢]"},{"url":"emotion_shiai.png",alt:"[示爱]"},{"url":"emotion_aixin.png",alt:"[爱心]"},{"url":"emotion_xinsui.png",alt:"[心碎]"},{"url":"emotion_dangao.png",alt:"[蛋糕]"},{"url":"emotion_shandian.png",alt:"[闪电]"},{"url":"emotion_zhadan.png",alt:"[炸弹]"},{"url":"emotion_dao.png",alt:"[刀]"}],
	[{"url":"emotion_zhuqiu.png",alt:"[足球]"},{"url":"emotion_pachong.png",alt:"[瓢虫]"},{"url":"emotion_bianbian.png",alt:"[便便]"},{"url":"emotion_yueliang.png",alt:"[月亮]"},{"url":"emotion_taiyang.png",alt:"[太阳]"},{"url":"emotion_liwu.png",alt:"[礼物]"},{"url":"emotion_baobao.png",alt:"[拥抱]"},{"url":"emotion_qiang.png",alt:"[强]"},{"url":"emotion_ruo.png",alt:"[弱]"},{"url":"emotion_woshou.png",alt:"[握手]"},{"url":"emotion_shengli.png",alt:"[胜利]"},{"url":"emotion_baoquan.png",alt:"[抱拳]"},{"url":"emotion_gouying.png",alt:"[勾引]"},{"url":"emotion_quantou.png",alt:"[拳头]"},{"url":"emotion_chajing.png",alt:"[差劲]"},{"url":"emotion_aini.png",alt:"[爱你]"},{"url":"emotion_no.png",alt:"[NO]"},{"url":"emotion_ok.png",alt:"[OK]"},{"url":"emotion_aiqing.png",alt:"[爱情]"},{"url":"emotion_feiwen.png",alt:"[飞吻]"},{"url":"emotion_tiaotiao.png",alt:"[跳跳]"},{"url":"emotion_fadou.png",alt:"[发抖]"},{"url":"emotion_ouhuo.png",alt:"[怄气]"},{"url":"emotion_zhuanquan.png",alt:"[转圈]"}],
	[{"url":"emotion_ketou.png",alt:"[磕头]"},{"url":"emotion_huitou.png",alt:"[回头]"},{"url":"emotion_tiaosheng.png",alt:"[跳绳]"},{"url":"emotion_huishou.png",alt:"[挥手]"},{"url":"emotion_jidong.png",alt:"[激动]"},{"url":"emotion_jiewu.png",alt:"[街舞]"},{"url":"emotion_xianwen.png",alt:"[献吻]"},{"url":"emotion_zuotaiji.png",alt:"[左太极]"},{"url":"emotion_youtaiji.png",alt:"[右太极]"},{"url":"emotion_shuangxi.png",alt:"[双喜]"},{"url":"emotion_bianpao.png",alt:"[鞭炮]"},{"url":"emotion_denglong.png",alt:"[灯笼]"},{"url":"emotion_facai.png",alt:"[发财]"},{"url":"emotion_kge.png",alt:"[K歌]"},{"url":"emotion_gouwu.png",alt:"[购物]"},{"url":"emotion_youjian.png",alt:"[邮件]"},{"url":"emotion_dashuai.png",alt:"[帅]"},{"url":"emotion_hecai.png",alt:"[喝彩]"},{"url":"emotion_qidao.png",alt:"[祈祷]"},{"url":"emotion_baojing.png",alt:"[爆筋]"},{"url":"emotion_bangbangtang.png",alt:"[棒棒糖]"},{"url":"emotion_henai.png",alt:"[喝奶]"},{"url":"emotion_xiamian.png",alt:"[下面]"},{"url":"emotion_xiangjiao.png",alt:"[香蕉]"}],			
	[{"url":"emotion_feiji.png",alt:"[飞机]"},{"url":"emotion_kaiche.png",alt:"[开车]"},{"url":"emotion_zuochetou.png",alt:"[左车头]"},{"url":"emotion_chexiang.png",alt:"[车厢]"},{"url":"emotion_youchexiang.png",alt:"[右车头]"},{"url":"emotion_duoyun.png",alt:"[多云]"},{"url":"emotion_xiayu.png",alt:"[下雨]"},{"url":"emotion_chaopiao.png",alt:"[钞票]"},{"url":"emotion_xiongmao.png",alt:"[熊猫]"},{"url":"emotion_dengpao.png",alt:"[灯泡]"},{"url":"emotion_fengche.png",alt:"[风车]"},{"url":"emotion_naozhong.png",alt:"[闹钟]"},{"url":"emotion_dashan.png",alt:"[打伞]"},{"url":"emotion_caiqiu.png",alt:"[彩球]"},{"url":"emotion_zhuanjie.png",alt:"[钻戒]"},{"url":"emotion_shafa.png",alt:"[沙发]"},{"url":"emotion_zhijing.png",alt:"[纸巾]"},{"url":"emotion_yao.png",alt:"[药]"},{"url":"emotion_shouqiang.png",alt:"[手枪]"},{"url":"emotion_qingwa.png",alt:"[青蛙]"}]
]

function formatTime(sendTime1){
	let sendTime = parseFloat(sendTime1)
	let date = new Date(sendTime)
	let today = new Date()
	today.setHours(0)
	today.setMinutes(0)
	today.setSeconds(0)
	// today 为今天凌晨的时间
	let dayTime = 24 * 60 * 60 * 1000
	let delta = today - date // 得到相差的时间 ms
	if(delta<0){
		return '今天'+ (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':' + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes() )
	}else{
		if(delta <= dayTime){
			return '昨天' +  (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':' + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
		}
	}
	return (date.getMonth()+1)+'月'+date.getDate()+'日'
}

//替换表情符号为图片
function replaceEmoji (str){
	console.log(str)
	let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g,(item, index)=>{
		for(let i=0;i<this.emojiList.length;i++){
			let row = this.emojiList[i];
			for(let j=0;j<row.length;j++){
				let EM = row[j];
				if(EM.alt==item){
					//在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径 
					//比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
					// let onlinePath = 'https://upload.guanqi2019.com/img/emotion/'
					let onlinePath = 'https://upload.guanqi2019.com/img/emotion/';
					
					// let imgUrl = EM.url.split(".")[0]
					// let imgstr = '<img src="'+onlinePath+this.onlineEmoji[EM.url]+'">';
					let imgstr = '<img  style="vertical-align: middle;" height=22rpx src="'+onlinePath+EM.url+'">';
					console.log("imgstr: " + imgstr);
					return imgstr;
				}
			}
		}
	});
	return '<div style="display: inline-block;align-items: center;word-wrap:break-word;">'+replacedStr+'</div>';
}
//  函数节流
function throttle(last,fn,gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }
	let _nowTime = + new Date()
    if (_nowTime - last > gapTime) {
      fn()
	 return _nowTime
    } else {
		return last
	}
  
}
module.exports = {
  replaceEmoji:replaceEmoji,
  emojiList:emojiList,
  formatTime:formatTime,
  throttle
}