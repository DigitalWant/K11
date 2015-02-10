
// 微信公众号的appid
var appid = 'wx4855a807c793c274';

// HW 是heywow js sdk的命名空间

// 要使用的jsapi列表
HW.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage'];

// 分享朋友圈的数据
HW.shareTimelineData = {
     title:"我写贺卡，你收礼，这样真的好吗？",
     link:'',
     imgUrl:'',
     success:function() {
     }
};

// 分享给好友的数据
HW.shareAppData = {
     title:"呲牙送壕礼",
     desc:"我写贺卡，你收礼，这样真的好吗？",
     link:'',
     imgUrl:'',
     success:function() {
     }
}

// 隐藏菜单列表
HW.hideMenuList = [];

// 调用HW.wxconfig初始化微信jssdk
// 第一个参数：微信公众号appid
// 第二个参数：当前页面的完整URL(需要urlencode)
// 第三个参数：是否需要开启debug模式
HW.wxconfig(appid, window.location.href, true);