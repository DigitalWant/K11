var search_bar_float_height = 0;
var star_hotel_tool_bar_height = 0;
$(function(){
	if ($(".wrapper").attr("class").indexOf("jinjiang_star_hotel") > 0){
		search_bar_float_height = 28;
		star_hotel_tool_bar_height = 104;
	}

	bodyclick = document.getElementsByTagName('body').item(0);
	rSelects();
	bodyclick.onclick = function(){
		for (i=0;i<selects.length;i++){	
			document.getElementById('select_info_' + selects[i].name).className = 'tag_select';
			document.getElementById('options_' + selects[i].name).style.display = 'none';
		}
	}

	verticalAlignToolBar();
	
	searchBarPosition();
	
	$(window).resize(function(){				  
	  verticalAlignToolBar();
	  
	  searchBarPosition();
	  
	  location.reload();
	});
	
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		if($(window).height() < 540 + star_hotel_tool_bar_height && $(window).height() > 189 + star_hotel_tool_bar_height){
			if (st < 580 + star_hotel_tool_bar_height - $(window).height()){
				$(".search_bar").css("top", $(window).height() - 190 + st - star_hotel_tool_bar_height);
			} else {
				$(".search_bar").css("top", 392 + search_bar_float_height);
			}
		} 
	});

	navigation();
	ieSixVerify();
	
	//城市选择器
	var test=new Vcity.CitySelector({input:'cityInfo'});
	
	function inputTipText(){   
		$("input[class*=inputText]").each(function(){  
			var valTxt = $(this).attr("title");
			var htm = "<label class='tipTxt'>" + valTxt +"</label>"
			$(this).after(htm);
			$(this).keyup(function(){($(this).val()=="")?$(this).next().show():$(this).next().hide();}); 
			if($(this).val()==""){
				$(this).next().show();
			}else{
				$(this).next().hide();
			}
			$(".tipTxt").click(function(){
				$(this).prev().focus();					
			});
		});  
	} 
	inputTipText();
	
	//日历效果
	var today = new Date();
	$(".dateCheckIn,.dateCheckOut").datepicker({
		minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		numberOfMonths: 2,
		changeMonth: false,
		changeYear: false,
		beforeShow: function () {
			setTimeout(
				function () {
					$('#ui-datepicker-div').css("z-index", 15);
					var st = $(document).scrollTop();
					var search_bar = $(".search_bar").offset().top;
					if($(window).height() < 540 + star_hotel_tool_bar_height && $(window).height() > 189 + star_hotel_tool_bar_height){
						if (st < 580 - $(window).height()){
							$('body,html').animate({scrollTop:st+450+search_bar_float_height+star_hotel_tool_bar_height},300);
							$('#ui-datepicker-div').css("top", 558 + search_bar_float_height + star_hotel_tool_bar_height);
						}
					} else if( search_bar == 461){
						if ($(window).height() - 461 < 308){
							$('body,html').animate({scrollTop:st+450+search_bar_float_height+star_hotel_tool_bar_height},300);
						}
					}
				}
			);
		}
	});
	
	//关键字提示效果
	$('.kw_input').citySelect({});
	
	//搜索tab切换
	$(".search_tab_box li").bind("click",function(){
		if($(".search_tab_box").children().length > 1){
			if($(this).attr("class").indexOf("tab_selected") < 1){
				$(".search_tab_box").children().each(function(){
					$(this).removeClass("tab_selected");
				});
				$(this).addClass("tab_selected");
				if($(this).attr("id") == "hotel"){
					$(".hotel_results_box").show();
					$(".records_results_box").hide();
				} else {
					$(".hotel_results_box").hide();
					$(".records_results_box").show();
				}
			}
		}
	});
	
	$(".search_tab_box li").hover(function(){
		if($(this).attr("class").indexOf("tab_selected") < 0){
			$(this).addClass("tab_hover");
		}
	},function(){
		if($(this).attr("class").indexOf("title_selected") < 0){
			$(this).removeClass("tab_hover");
		}
	});
	
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
	
	$('.new_hotel_box').find('.pic').hover(function(){
		$(this).find('.new_hotel_info').addClass('new_hotel_info_hover');
		$(this).find('.new_hotel_see_more').addClass('new_hotel_see_more_hover');
		$(this).find('hr').show();
		$(this).find('h4').stop(true,true).animate({height:'32px'});
		$(this).find('.new_hotel_see_more').stop(true,true).animate({height:'28px'}); 
	},function(){
		$(this).find('.new_hotel_info').removeClass('new_hotel_info_hover');
		$(this).find('.new_hotel_see_more').removeClass('new_hotel_see_more_hover');
		$(this).find('h4').stop(true,true).animate({height:'54px'});
		$(this).find('.new_hotel_see_more').stop(true,true).animate({height:'0'});
		$(this).find('hr').hide();
	});
	
	//预订过酒店记录hover
	$(".records_results_box li").hover(function(){
		$(this).find(".close_btn").show();
		$(this).find("span").addClass("text_hover");
	},function(){
		$(this).find(".close_btn").hide();
		$(this).find("span").removeClass("text_hover");
	});
	
	//advertisements滚动事件
	$(".hotPic .JQ-slide").Slide({
		effect:"scroolLoop",
		autoPlay:false,
		speed:"normal",
		timer:3000,
		steps:1
	});
});

function searchBarPosition(){
	if($(window).height() < 540 + star_hotel_tool_bar_height && $(window).height() > 189 + star_hotel_tool_bar_height){
		var st = $(document).scrollTop();
		if ($(window).height() - 190 + st > 392){
			$(".search_bar").css("top", 392);
		} else {
			$(".search_bar").css("top", $(window).height() - 190 + st - star_hotel_tool_bar_height);
		}
		
	} else {
		$(".search_bar").css("top", 392 + search_bar_float_height);
	}
}

function verticalAlignToolBar(){
	var windowHeight = $(window).height();
	var windowWidh = $(window).width();
	var nextRight = parseInt((windowWidh - 1200)/2);
	var carouselWidh =1400 + Math.ceil((windowWidh - 1200)/2);
	var searchLeft = Math.ceil((windowWidh - 1600)/2);

	if(windowWidh <= 1200){
		$("#carousel_mian").css({'width':1400,'overflow':'hidden'});
		$(".search_bar").css({'width':1200,'left':0});
		$(".jinjian_top_bar").css({'width':1200});
		$(".jinjiang_hotel_advertisement_carousel_box").css({'width':1200,'overflow':'hidden'});
	}
	else if (windowWidh < 1600 && $(window).width() > 1200){
		$("#carousel_mian").css({'width':carouselWidh,'overflow':'hidden'});
		$(".jinjian_top_bar").css({'width':carouselWidh - (200 - Math.ceil(($(window).width() - 1200)/2)),'left':0});
		$(".search_bar").css({'width':carouselWidh - (200 - Math.ceil(($(window).width() - 1200)/2)),'left':0});
		$(".jinjiang_hotel_advertisement_carousel_box").css({'width':carouselWidh - (200 - Math.ceil(($(window).width() - 1200)/2)),'left':0});
	} else{
		$("#carousel_mian").css({'width':1600});
		$(".jinjian_top_bar").css({'width':1600});
		$(".jinjiang_hotel_advertisement_carousel_box").css({'width':1600});
		$(".search_bar").css({'width':1600,'left':searchLeft});
	}
}