var dataForWeixin = {
    appId: "",
    MsgImg: "",
    TLImg: "",
    url: "",
    title: "",
    desc: "",
    fakeid: "",
    callback: function() {}
};
var ua = navigator.userAgent.toLowerCase();
var inWechat = ua.indexOf("micromessenger") != -1 ? true: false; (function() {
    if (inWechat) {
        try {
            var onBridgeReady = function() {
                WeixinJSBridge.on('menu:share:appmessage',
                function(argv) {
                    WeixinJSBridge.invoke('sendAppMessage', {
                        "appid": dataForWeixin.appId,
                        "img_url": dataForWeixin.MsgImg,
                        "img_width": "120",
                        "img_height": "120",
                        "link": dataForWeixin.url,
                        "desc": dataForWeixin.desc,
                        "title": dataForWeixin.title
                    },
                    function(res) { (dataForWeixin.callback)();
                    });
                });
                WeixinJSBridge.on('menu:share:timeline',
                function(argv) { (dataForWeixin.callback)();
                    WeixinJSBridge.invoke('shareTimeline', {
                        "img_url": dataForWeixin.TLImg,
                        "img_width": "120",
                        "img_height": "120",
                        "link": dataForWeixin.url,
                        "desc": dataForWeixin.desc,
                        "title": dataForWeixin.title
                    },
                    function(res) {});
                });
                WeixinJSBridge.on('menu:share:weibo',
                function(argv) {
                    WeixinJSBridge.invoke('shareWeibo', {
                        "content": dataForWeixin.title,
                        "url": dataForWeixin.url
                    },
                    function(res) { (dataForWeixin.callback)();
                    });
                });
                WeixinJSBridge.on('menu:share:facebook',
                function(argv) { (dataForWeixin.callback)();
                    WeixinJSBridge.invoke('shareFB', {
                        "img_url": dataForWeixin.TLImg,
                        "img_width": "120",
                        "img_height": "120",
                        "link": dataForWeixin.url,
                        "desc": dataForWeixin.desc,
                        "title": dataForWeixin.title
                    },
                    function(res) {});
                });
            };
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        } catch(e) {}

        document.addEventListener('WeixinJSBridgeReady',
        function() {
            try {
                WeixinJSBridge.call('hideToolbar');
            } catch(e) {};
        });
    }
})();


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-56892818-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
  
  
  
  var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd706f3d48d5e7338e0437c2e514f6dc9' type='text/javascript'%3E%3C/script%3E"));