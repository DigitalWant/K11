/*
// 微信公众号的appid
var appid = 'wx4855a807c793c274';

// HW 是heywow js sdk的命名空间

// 要使用的jsapi列表
HW.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage'];


// 分享朋友圈的数据
HW.shareTimelineData = {
     title:"2015年第25届日内瓦国际钟表展",
     link:'',
     imgUrl:'',
     success:function() {
     }
};

// 分享给好友的数据
HW.shareAppData = {
     title:"呲牙送壕礼",
     desc:"盛世带您",
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
HW.wxconfig(appid, window.location.href, true);*/

var wxConfigParams={};
            var wxServiceUrl = "http://mangoeasy.weixin.smc-sfe.com/api/Service";
            var wxServiceData = { url: location.href,id: "5236c120-546b-eed3-61d0-58a9c0785767"};
            var wxShareData = {
                      title:'2015年第25届日内瓦国际钟表展',
                      imgUrl:'http://mike.smc-sfe.com/primeTime/images/icon.png',
                      link:'http://mike.smc-sfe.com/primeTime/index.html',
                      desc:'钟表展来啦！',
                      success: function () {
                       alert(' 用户确认分享后执行的回调函数');
                      },
                      cancel: function () {
                       alert(' 用户取消分享后执行的回调函数');
                      }
                };

            $.get(wxServiceUrl,wxServiceData, function (data) {


                    wxConfigParams.appId = data.AppId;
                    wxConfigParams.timestamp = data.Timestamp;
                    wxConfigParams.nonceStr = data.NonceStr;
                    wxConfigParams.signature = data.Signature;
                    wxConfigParams.jsApiList = ['onMenuShareTimeline','onMenuShareAppMessage'];

                    
                    wx.config(wxConfigParams);
                    
                    wx.ready(function(){
                        wx.onMenuShareTimeline(wxShareData);
                        wx.onMenuShareAppMessage(wxShareData);
                    })

              })