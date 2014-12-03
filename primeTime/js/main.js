var body = d3.select("body"),
    height,
    clientY0,
    pageY0,
    pageYMin = 0,
    pageYMax,
    dragSamples,
    wowEl = $('.wow'),
    firstAppear=true;
    //touching = false;
 var playState = '-webkit-animation-play-state';
 var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//var iconRow = $('.iconRow');


var page = d3.selectAll(".page");
var article = d3.selectAll(".article");
var $pageContent = $('.content');
$(".content").append("<i class='icon-chevron-down brandGold'></i>");

$('.icon-chevron-down:eq(0)').hide();
var allAnimateItems= $('.icon-chevron-down,.wow');

//

$("#boat").one(animateEnd,function(){
  $(this).removeClass('animated slideInLeft').addClass('updown')
})
// iOS reports the wrong innerHeight on load!
d3.timer(function() {
  resized();
  return true;

});

window.addEventListener("resize", showTips, true);
showTips();

function resized() {
  var height0 = height;
  height = innerHeight;
  page.style("height", height + "px");
  //article.style("margin-top",-innerHeight/2 +"px").style("margin-left",-innerWidth/2 +"px");
  body.style("font", (height * .4) + "px/" + (height * .9) + "px sans-serif");
  pageYMax = (page.size() - 1) * height;
  if (height0) scrollTo(0, Math.max(0, Math.min(page.size() - 1, Math.round(pageYOffset / height0))) * height);
  //alert('resized');
}
//when loading complete display bind touch events


function touchstarted() {
   
  //allAnimateItems.css(playState,'paused'); 
  dragSamples = [];
  clientY0 = d3.event.changedTouches[0].clientY;
  pageY0 = pageYOffset;
  d3.event.preventDefault();
  body.interrupt();
  //console.log('touchstarted');      
  //$('body').toggleClass('paused', $(this).css(playState) === 'paused'); 
}

function touchmoved() {
  var clientY1 = d3.event.changedTouches[0].clientY,
      pageY1 = pageY0 + clientY0 - clientY1;
  if (pageY1 < pageYMin) {
    console.log('1');
    if (pageYOffset > pageYMin) scrollTo(0, pageYMin);

    body.style("-webkit-transform", "translate3d(0," + -(pageY1 - pageYMin) / 3 + "px,0)");
  } else if (pageY1 > pageYMax) {

        console.log('2');

    if (pageYOffset < pageYMax) scrollTo(0, pageYMax);
    body.style("-webkit-transform", "translate3d(0," + -(pageY1 - pageYMax) / 3 + "px,0)");
  } else {
        console.log('3');

    scrollTo(0, pageY1);
  }
  if (dragSamples.push({y: pageY1, t: Date.now()}) > 8) dragSamples.shift();

  //console.log('touchmoved');
  //touching==true;
}

function touchended() {
    //allAnimateItems.css(playState,'running'); 

    var s0 = dragSamples.shift(),
    s1 = dragSamples.pop(),
    t1 = Date.now(),
    y = pageYOffset;


  while (s0 && (t1 - s0.t > 350)) s0 = dragSamples.shift();

  if (s0 && s1) {
    var vy = (s1.y - s0.y) / (s1.t - s0.t);
    if (vy > .5) y = Math.ceil(y / height) * height;
    else if (vy < -.5) y = Math.floor(y / height) * height;

    
  }

  y = Math.max(0, Math.min(page.size() - 1, Math.round(y / height))) * height;

  body.transition()
      .duration(500)
      .ease("cubic-out")
      .styleTween("-webkit-transform", function() {
        if (s1) {
          var i;
          if (s1.y < pageYMin) i = d3.interpolateNumber(-(s1.y - pageYMin) / 3, 0);
          if (s1.y > pageYMax) i = d3.interpolateNumber(-(s1.y - pageYMax) / 3, 0);
          return i && function(t) { return "translate3d(0," + i(t) + "px,0)"; };
        }
      })
      .tween("scroll", function() {
        var i = d3.interpolateNumber(pageYOffset, y);
        return function(t) { 
          var index = i(t)/height;

          scrollTo(0, i(t)); 
          //console.log(index);
            //when it stable
              console.log(index);

              if (t==1 && index==13){
                $("#boat").fadeIn().addClass('animated slideInLeft');
                //allAnimateItems.css(playState,"running");

            }
          
        };
      });
      //touching =false;
      //console.log('//touching end');
}


function showTips() {
    if ($(window).width() <= $(window).height()) {
        $("body").removeClass('landscape');
        $(".pages").show();

    } else {

        $("body").addClass('landscape');
        $(".pages").hide();
            window.addEventListener('touchmove', function(e) {
              e.preventDefault();
            }, false);


    }
}

$.fn.wx = function(option){
        // 初始化函数体
        var $wx = $(this);
        var opts = $.extend({},$.fn.wx.defaults,option);  // 继承传入的值

        // 确定微信是否准备好
        document.addEventListener("WeixinJSBridgeReady", function(){
            window.G_WEIXIN_READY = true;
        }, false);

        // 回到函数循环执行
        function CallWeiXinAPI(fn, count){
            var total = 2000;   //30s     
            count = count || 0;
            
            if(true === window.G_WEIXIN_READY || ("WeixinJSBridge" in window)){
                fn.apply(null, []);
            }else{
                if(count <= total){
                    setTimeout(function(){
                        CallWeiXinAPI(fn, count++);
                    }, 15);
                }
            }
        }

        var _unit = {
            /**
             * 执行回调
             * @param Object handler {Function callback, Array args, Object context, int delay}
             */
             execHandler : function(handler){
                if(handler && handler instanceof Object){
                    var callback = handler.callback || null;
                    var args = handler.args || [];
                    var context = handler.context || null;
                    var delay = handler.delay || -1;

                    if(callback && callback instanceof Function){
                        if(typeof(delay) == "number" && delay >= 0){
                            setTimeout(function(){
                                callback.apply(context, args);
                            }, delay);
                        }else{
                            callback.apply(context, args);
                        }
                    }
                }
            },

            /**
             * 合并参数后执行回调
             * @param Object handler {Function callback, Array args, Object context, int delay}
             * @param Array args 参数
             */
            execAfterMergerHandler : function(handler, _args){
                if(handler && handler instanceof Object){
                    var args = handler.args || [];

                    handler.args = _args.concat(args);
                }
                
                this.execHandler(handler);
            }
        }

        // 微信的接口
        var _api = {
            Share : {
                /**
                 * 分享到微博
                 * @param Object options {String content, String url}
                 * @param Object handler
                 */
                "weibo" : function(options, handler){
                    CallWeiXinAPI(function(){
                        WeixinJSBridge.on("menu:share:weibo",function(argv){
                            WeixinJSBridge.invoke('shareWeibo', options, function(res){
                                _unit.execAfterMergerHandler(handler, [res]);
                            });
                        });
                    });
                },
                /**
                 * 分享到微博
                 * @param Object options {
                 *                  String img_url, 
                 *                  Number img_width, 
                 *                  Number img_height, 
                 *                  String link, 
                 *                  String desc, 
                 *                  String title
                 * }
                 * @param Object handler
                 */
                "timeline" : function(options, handler){
                    CallWeiXinAPI(function(){
                        WeixinJSBridge.on("menu:share:timeline",function(argv){
                            WeixinJSBridge.invoke('shareTimeline', options, function(res){
                                _unit.execAfterMergerHandler(handler, [res]);
                            });
                        });
                    });
                },
                /**
                 * 分享到微博
                 * @param Object options {
                 *                  String appid, 
                 *                  String img_url, 
                 *                  Number img_width, 
                 *                  Number img_height, 
                 *                  String link, 
                 *                  String desc, 
                 *                  String title
                 * }
                 * @param Object handler
                 */
                "message" : function(options, handler){
                    CallWeiXinAPI(function(){
                        WeixinJSBridge.on("menu:share:appmessage",function(argv){
                            WeixinJSBridge.invoke('sendAppMessage', options, function(res){
                                _unit.execAfterMergerHandler(handler, [res]);
                            });
                        });
                    });
                }
            },
            /**
             * 设置底栏
             * @param boolean visible 是否显示
             * @param Object handler
             */
            "setToolbar" : function(visible, handler){
                CallWeiXinAPI(function(){
                    if(true === visible){
                        WeixinJSBridge.call('showToolbar');
                    }else{
                        WeixinJSBridge.call('hideToolbar');
                    }
                    _unit.execAfterMergerHandler(handler, [visible]);
                });
            },
            /**
             * 设置右上角选项菜单
             * @param boolean visible 是否显示
             * @param Object handler
             */
            "setOptionMenu" : function(visible, handler){
                CallWeiXinAPI(function(){
                    if(true === visible){
                        WeixinJSBridge.call('showOptionMenu');
                    }else{
                        WeixinJSBridge.call('hideOptionMenu');
                    }
                    _unit.execAfterMergerHandler(handler, [visible]);
                });
            },
            /**
             * 调用微信支付
             * @param Object data 微信支付参数
             * @param Object handlerMap 回调句柄 {Handler success, Handler fail, Handler cancel, Handler error}
             */
            "pay" : function(data, handlerMap){
                CallWeiXinAPI(function(){
                    var requireData = {"appId":"","timeStamp":"","nonceStr":"","package":"","signType":"","paySign":""};
                    var map = handlerMap || {};
                    var handler = null;
                    var args = [data];

                    for(var key in requireData){
                        if(requireData.hasOwnProperty(key)){
                            requireData[key] = data[key]||"";
                            console.info(key + " = " + requireData[key]);
                        }
                    }

                    WeixinJSBridge.invoke('getBrandWCPayRequest', requireData, function(response){
                        var key = "get_brand_wcpay_request:";
                        switch(response.err_msg){
                            case key + "ok":
                                handler = map.success;
                                break;
                            case key + "fail":
                                handler = map.fail || map.error;
                                break;
                            case key + "cancel":
                                handler = map.cancel || map.error;
                                break;
                            default:
                                handler = map.error;
                                break;
                        }

                        _unit.execAfterMergerHandler(handler, args);
                    });
                });                
            }
        };

        var opt1 = {
            "content" : opts.con
        };

        var opt2 = {
            "img_url" : opts.img,
            "img_width" : 180,
            "img_height" : 180,
            "link" : opts.link,
            "desc" : opts.con,
            "title" : opts.title
        };

        // var opt3 = $.extend({"appid":"wx21f7e6a981efd178"}, opt2);

        handler = {
            callback : function(){
                
            }
        }

        // 执行函数
        _api.Share.timeline(opt2,handler);
        _api.Share.message(opt2,handler);
        _api.Share.weibo(opt1,handler);

        return $wx;
    }
    $.fn.wx.defaults = {
        title : '盛时钟表', 
        con : '人生起航，有我相伴',
        link : document.URL, 
        img  : '../img/wechat.jpg'
    };


/*

    var imgUrl = '../img/wechat.jpg';
    var descContent = "盛时钟表";
    var shareTitle = '人生起航，有我相伴';
    //var// appid = 'wx4d1cefa551fd9f81';

    function shareFriend() {
        WeixinJSBridge.invoke('sendAppMessage', {
            //"appid":// appid,
            "img_url": imgUrl,
            "img_width": "320",
            "img_height": "480",
            "link": lineLink,
            "desc": descContent,
            "title": shareTitle
        }, function (res) {
            _report('send_msg', res.err_msg);
        })
    }
    function shareTimeline() {
        WeixinJSBridge.invoke('shareTimeline', {
            //"appid":// appid,
            "img_url": imgUrl,
            "img_width": "320",
            "img_height": "480",
            "link": lineLink,
            "desc": descContent,
            "title": shareTitle
        }, function (res) {
            _report('timeline', res.err_msg);
        });
    }
    function shareWeibo() {
        WeixinJSBridge.invoke('shareWeibo', {
            "content": descContent,
            "url": lineLink,
        }, function (res) {
            _report('weibo', res.err_msg);
        });
    }

    // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            shareFriend();

        });

        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            shareTimeline();

        });

        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            shareWeibo();
        });
    }, false);
//onscreen test */

/*
$('.content').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     // Do something to the matched elements as they come in
     console.log('doIn',dragSamples);
         new WOW().init();


   },
   doOut: function() {
    //wowEl.filter('.animated').removeClass('animated').removeAttr('style');
      //console.log('doOut')
     // Do something to the matched elements as they get off scren
    ////touching ==true && 


   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});
*/

