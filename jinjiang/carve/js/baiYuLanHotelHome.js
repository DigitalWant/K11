$(function(){
	navigation();
	setScrollBoxSize();
	
	//轮播
	myFocus.set({
		id:'carousel_mian',//ID
		pattern:'mF_kdui',//风格
		time:5,//切换时间间隔(秒)
		trigger:'click',//触发切换模式：'click'(点击)/'mouseover'(悬停)
		width:1600,//设置宽度(主图区)
		height:540,//设置高度(主图区)
		txtHeight:0//文字层高度设置，'default'为默认高度，0为隐藏
	});
	myFocus.set({
		id:'new_hotel_carousel',//ID
		pattern:'mF_tbhuabao',//风格
		time:5,//切换时间间隔(秒)
		trigger:'click',//触发切换模式：'click'(点击)/'mouseover'(悬停)
		width:470,//设置宽度(主图区)
		height:150,//设置高度(主图区)
		txtHeight:0//文字层高度设置，'default'为默认高度，0为隐藏
	});
	
	//advertisements滚动事件
	$(".hotPic .JQ-slide").Slide({
		effect:"scroolLoop",
		autoPlay:false,
		speed:"normal",
		timer:3000,
		steps:1
	});
	
	$(window).resize(function(){
		setScrollBoxSize();
	});

});

function setScrollBoxSize(){
	var windowWidth = $(window).width();
	var carouselWidth =1400 + Math.ceil((windowWidth - 1200)/2);
	if(windowWidth <= 1200){
		$("#carousel_mian").css({'width':1400,'overflow':'hidden'});
		$(".baiyulan_hotel_logo").css("left", 1103);
		$(".baiyulan_advertisement_carousel_box").css({'width':1200});
	} else if (windowWidth < 1600 && windowWidth > 1200){
		$("#carousel_mian").css({'width':carouselWidth,'overflow':'hidden'});
		$(".baiyulan_hotel_logo").css("left", 1103 + (windowWidth - 1200)/2);
		$(".baiyulan_advertisement_carousel_box").css("width", windowWidth);
	} else {
		$("#carousel_mian").css({'width':1600});
		$(".baiyulan_advertisement_carousel_box").css({'width':1600});
		$(".baiyulan_hotel_logo").css("left", 1103 + (windowWidth - 1200)/2);
	}
}