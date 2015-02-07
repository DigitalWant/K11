//common var
var isMobile = /iPad|iPod|iPhone|Android/.test(navigator.userAgent),
    isWeixin = /MicroMessenger/.test(navigator.userAgent),
    $window = $(window),
    winRation = $window.width()/$window.height(),
    $bgaudio = $('#bgAudio')[0],
    $linkShareWx = $('#paper-share a').eq(0),
    $cover = $('.cover'),
    directory = location.origin+location.pathname.substring(0, location.pathname.lastIndexOf('/')),
    shareIcon = directory+"/wxshare.jpg",
    shareTitle = '今天，你在想家吗？',
    shareContent = '每一条回家的路，都有最动人的故事',
    shareLink=location.href;

window.jiathis_config = {
    data_track_clickback:true,
    hideMore:true,
    title:shareTitle,
    summary:shareContent,
    pic:shareIcon,
    url:shareLink,
    appkey:{"tsina":"1918686509",
            "tqq":"1a19d5534ef00089838fea7b03410e22",
    }
}

var cBgPicUrl = $('.cover .cimg').css('backgroundImage');
var cBgImg = new Image();
    cBgImg.src=cBgPicUrl.slice(4,cBgPicUrl.length-1);

// loader
var t = setTimeout(function(){
    $('#loading').fadeOut(1000,function(){
        $bgaudio.play();
    });
},2000);

var tInterval = setInterval(function(){
    if(cBgImg.complete){
        $('#loading').fadeOut(1000,function(){
        $('.cover').addClass('show-cover');
        $bgaudio.play();
        clearInterval(tInterval);
    });
    }
},100);

//force show the turn-box when landscape
if(winRation>1&&isMobile){
    $('#turn-box').css({'display':'block','opacity':1,'z-index':15});
}
//when mobile device orientation change show/hide the turn-box
window.onorientationchange = function(){
    if(window.orientation==90||window.orientation==-90){
        $('#turn-box').css({'display':'block','opacity':1,'z-index':15});
    }else{
        setTimeout(function(){
            $('#turn-box').stop().animate({'opacity':0,'z-index':1},500,function(){
                $(this).css('display','none')});
        },300);
    }
}

//mian swipe function
var mySwiper = new Swiper('.container',{
    mode : 'vertical',
    speed : 500,
    noSwiping:true,
    noSwipingClass:'noswipe',
    onSlideChangeStart:function () {
        $('#ci').text(mySwiper.activeIndex);
        if(mySwiper.activeIndex == 0){
            $('#pager').hide();
            $('.cover').find('.cimg').show();
            $('.cover').find('.cimg2').hide();
        }else{
            $('#pager').show();
        }
    },
    mousewheelControl:true
})

var ue={
    startY:0,
    endY:0,
    minDistance:50,
    direction:""
}
function showShare(direction){
    //console.log('page3');
    if(direction == "down"){
        var shareboxHeight = $('#sharebox').height()+60;
        $('.sharewrap').show();
        $('.container').css('top',-shareboxHeight);
        $('#toNext').hide();
    }
    else{
        $('.container').css('top',0);
        $('.p10').removeClass('noswipe');
    }
 }
function onCover(direction){
    if(direction=="down"){
        $('.cover').find('.cimg').fadeOut(800,function () {
            $('.cimg2').fadeIn('slow',function () {
                setTimeout(function () {
                    mySwiper.swipeNext()
                },1200);
            });
        })
    }
}
function started (event){
    if(event.originalEvent.targetTouches){
        ue.startY = event.originalEvent.targetTouches[0].clientY;
    }else{
        ue.startY = event.clientY;
    }
}
function moved (event){
    event.preventDefault();
    if(ue.startY>0){
        if(event.originalEvent.targetTouches){
        ue.endY = event.originalEvent.changedTouches[0].clientY;
    }else{
        ue.endY = event.clientY;
        }
     }
}
function ended (event){
    var $cur_slide = $(event.currentTarget);
    var  yDis = ue.endY - ue.startY;
    if(Math.abs(yDis)>ue.minDistance&&ue.endY>0){
        if(yDis>0) ue.direction = "up";
        else ue.direction = "down";
        if($cur_slide.hasClass('cover')){
            onCover(ue.direction);
        }
        if($cur_slide.hasClass('p10')){
            showShare(ue.direction);
        }

    }else{
        ue.startY = ue.endY=0;
    }
}
mySwiper.addCallback("SlideChangeStart",function(swiper,direction){
    var index = swiper.activeIndex;
    if(index==swiper.slides.length-1){
        $('.p10').addClass('noswipe');
    }
});

$('.cover,.p10').on('mousedown touchstart',started);
$('.cover,.p10').on('mousemove touchmove',moved);
$('.cover,.p10').on('mouseup touchend',ended);


//set slide count
$('#cc').text(mySwiper.slides.length-1);
//bottom arrow function
$('#toNext').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
})

//bgaudio ctrl
$('.bgaudio').on('click','a',function(event){
    event.preventDefault();
    event.stopPropagation();
    var $this = $(this);
    $this.toggleClass('active');
    $this.siblings().toggleClass('active');
    var id = $this.attr('id');
    if(id=='mute-btn'){
        $bgaudio.play();
    }else if(id=='play-btn'){
        $bgaudio.pause();
        $bgaudio.currentTime=0;
    }
})
var wxConfigParams={};
//get weixin share config;
$.post("http://121.42.52.51/wxShare/jssdk.php", {url: location.href}, function(data, textStatus, xhr) {
    if(data){
        data =JSON.parse(data.trim());
        wxConfigParams.debug = false;
        wxConfigParams.appId = data.appId;
        wxConfigParams.timestamp = data.timestamp;
        wxConfigParams.nonceStr = data.nonceStr;
        wxConfigParams.signature = data.signature;
        wxConfigParams.jsApiList = ['onMenuShareTimeline','onMenuShareAppMessage'];
        //weixin share config;
        wx.config(wxConfigParams);
        wx.ready(function(){
            wx.onMenuShareTimeline({
                title:shareTitle,
                imgUrl:shareIcon,
                link:shareLink,
                desc:shareContent

            });
            wx.onMenuShareAppMessage({
                title:shareTitle,
                imgUrl:shareIcon,
                link:shareLink,
                desc:shareContent
            });
        })
    }
});

// style fit Mobile
if(isMobile){
    if(isWeixin){
        $linkShareWx.remove();
        $('#paper-share>div').prepend('<a class="paper-weixin"><span></span></a>');
        $('#paper-share').on('click','.paper-weixin', function(e){
            addWeixinTip();
        });
    }else{
        $linkShareWx.hide().next().css('width','100%');
    }
}


// add weixin share tip
function addWeixinTip(){
    $('.container').append("<div class='overlay-wxshare'><span class='wxmenu-tips'></span><div class='tips-text'><p>请点击右上角<br />【分享到朋友圈】<br />或<br />【发送给朋友】</p></div></div>");
    $('.overlay-wxshare').on('click',function(){
        $(this).fadeOut('fast',function(){$(this).remove();});
    });
}
