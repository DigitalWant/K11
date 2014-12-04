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
var firstBoatIn= true;

var page = d3.selectAll(".page");
var article = d3.selectAll(".article");
var $pageContent = $('.content');
$(".content").append("<i class='icon-chevron-down brandGold'></i>");

$('.icon-chevron-down:eq(0),.icon-chevron-down:last').hide();
var allAnimateItems= $('.icon-chevron-down,.wow');


$("#boat").one(animateEnd,function(){
  $(this).removeClass('animated slideInLeft ').addClass('updown')
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
          var index = i(t)/height+1;

          scrollTo(0, i(t)); 
          //console.log(index);
            //when it stable
              //console.log(index,$pageContent.length);

              if (t==1 && index==$pageContent.length && firstBoatIn ==true){
                //console.log('true')
                $("#boat").show().removeClass('updown').addClass('animated slideInLeft');
                firstBoatIn =false;
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
/*
    $.fn.wx.defaults = {
        title : '盛时钟表', 
        con : '人生起航，有我相伴',
        link : document.URL, 
        img  : '../img/wechat.jpg'
    };*/
        var dataForWeixin={
          appId:  "",
          img:  'http://iamike.github.io/primeTime/img/wechat.jpg',
          url:  document.URL,
          title:  "摄影师下的“盛时表行”",
          desc:"一展雄姿，傲视群雄 - 带你领略全球最大国际名表零售集团旗下 “盛时表行”的风采~",
          fakeid: "",
        };
        (function(){
          var onBridgeReady=function(){
            // 发送给好友; 
            WeixinJSBridge.on('menu:share:appmessage', function(argv){
              WeixinJSBridge.invoke('sendAppMessage',{
                "appid":    dataForWeixin.appId,
                "img_url":    dataForWeixin.img,
                "img_width":  "120",
                "img_height": "120",
                "link":       dataForWeixin.url,
                "desc":       dataForWeixin.desc,
                "title":      dataForWeixin.title
              }, function(res){});
            });
            // 分享到朋友圈;
            WeixinJSBridge.on('menu:share:timeline', function(argv){
              WeixinJSBridge.invoke('shareTimeline',{
              "img_url":dataForWeixin.img,
              "img_width":"120",
              "img_height":"120",
              "link":dataForWeixin.url,
              "desc":dataForWeixin.desc,
              "title":dataForWeixin.title
              }, function(res){});
            });
            // 分享到微博;
            WeixinJSBridge.on('menu:share:weibo', function(argv){
              WeixinJSBridge.invoke('shareWeibo',{
              "content":dataForWeixin.title+' '+dataForWeixin.url,
              "url":dataForWeixin.url
              }, function(res){});
            });
            // 分享到Facebook
            WeixinJSBridge.on('menu:share:facebook', function(argv){
              WeixinJSBridge.invoke('shareFB',{
              "img_url":dataForWeixin.img,
              "img_width":"120",
              "img_height":"120",
              "link":dataForWeixin.url,
              "desc":dataForWeixin.desc,
              "title":dataForWeixin.title
              }, function(res){});
            });
          };
          if(document.addEventListener){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          }else if(document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
          }
        })();



  _audioNode    : $('.u-audio'),            // 声音模块
  _audio      : null,                 // 声音对象
  _audio_val    : true,                 // 声音是否开启控制

/**
 *  media资源管理
 *  -->绑定声音控制事件
 *  -->函数处理声音的开启和关闭
 *  -->异步加载声音插件（延迟做）
 *  -->声音初始化
 *  -->视频初始化
 *  -->声音和视频切换的控制
 */
  // 声音初始化
  audio_init : function(){
    // media资源的加载
    var options_audio = {
      loop: true,
            preload: "auto",
            src: car2._audioNode.attr('data-src')
    }
    
        car2._audio = new Audio(); 

        for(var key in options_audio){
            if(options_audio.hasOwnProperty(key) && (key in car2._audio)){
                car2._audio[key] = options_audio[key];
            }
        }
        car2._audio.load();
  },

  // 声音事件绑定
  audio_addEvent : function(){
    if(car2._audioNode.length<=0) return;

    // 声音按钮点击事件
    var txt = car2._audioNode.find('.txt_audio'),
      time_txt = null;
    car2._audioNode.find('.btn_audio').on('click',car2.audio_contorl);

    // 声音打开事件
    $(car2._audio).on('play',function(){
      car2._audio_val = false;

      audio_txt(txt,true,time_txt);
      $('.audio_open').removeClass('audio_close');
      
      // 开启音符冒泡
      //$.fn.coffee.start();
      //$('.coffee-steam-box').show(500);
    })

    // 声音关闭事件
    $(car2._audio).on('pause',function(){
      audio_txt(txt,false,time_txt)
      $('.audio_open').addClass('audio_close');
      
      // 关闭音符冒泡
      //$.fn.coffee.stop();
      //$('.coffee-steam-box').hide(500);
    })

    function audio_txt(txt,val,time_txt){
      if(val) txt.text('打开');
      else txt.text('关闭');

      if(time_txt) clearTimeout(time_txt);

      txt.removeClass('z-move z-hide');
      time_txt = setTimeout(function(){
        txt.addClass('z-move').addClass('z-hide');
      },1000)
    }
  },

  // 声音控制函数
  audio_contorl : function(){
    if(!car2._audio_val){
      car2.audio_stop();
    }else{
      car2.audio_play();
    }
  },  

  // 声音播放
  audio_play : function(){
    car2._audio_val = false;
    if(car2._audio) car2._audio.play();
  },

  // 声音停止
  audio_stop  : function(){
    car2._audio_val = true;
    if(car2._audio) car2._audio.pause(); 
  },

  // 视频初始化
  video_init : function(){
    // 视频
        $('.j-video').each(function(){
          var option_video = {
            controls: 'controls',
            preload : 'none',
            // poster : $(this).attr('data-poster'),
            width : $(this).attr('data-width'),
            height : $(this).attr('data-height'),
            src : $(this).attr('data-src')
          }

          var video = $('<video class="f-hide"></video>')[0];

          for(var key in option_video){
                if(option_video.hasOwnProperty(key) && (key in video)){
                    video[key] = option_video[key];
                }
                this.appendChild(video);
            }

            var img = $(video).prev();

            $(video).on('play',function(){
              img.hide();
              $(video).removeClass('f-hide');
            });

            $(video).on('pause',function(){
              img.show();
              $(video).addClass('f-hide');
            });
        })

        $('.j-video .img').on('click',function(){
          var video = $(this).next()[0];

          if(video.paused){
            $(video).removeClass('f-hide');
            video.play();
            $(this).hide();
          }
        })
  },

  //处理声音和动画的切换
  media_control : function(){
    if(!car2._audio) return;
    if($('video').length<=0) return;

    $(car2._audio).on('play', function(){
      $('video').each(function(){
        if(!this.paused){
          this.pause();
        }
      }); 
    });

    $('video').on('play', function(){
      if(!car2._audio_val){
        car2.audio_contorl();     
      }
    });
  },

  // media管理初始化
  media_init : function(){
    // 声音初始化
    car2.audio_init();

        // 视频初始化
        car2.video_init();

    // 绑定音乐加载事件
    car2.audio_addEvent();

    // 音频切换
    car2.media_control();
  };
// 播放声音
    if(!car2._audio) return;
    car2._audioNode.removeClass('f-hide');
    car2._audio.play();

    // 声音启动
    $(document).one("touchstart", function(){
            car2._audio.play();
        });

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

