$(function(){
	navigation();
		   
	bodyclick = document.getElementsByTagName('body').item(0);
	rSelects();
	bodyclick.onclick = function(){
		for (i=0;i<selects.length;i++){	
			document.getElementById('select_info_' + selects[i].name).className = 'tag_select';
			document.getElementById('options_' + selects[i].name).style.display = 'none';
		}
	}
	
//文本框水印
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

//地图展开收起
$(".map_unfold").toggle(function(){
	$(this).parents(".base_wrap").addClass("base_wrap_dev");
	$(".float_side").addClass("fs_box");
	$(".tool_box .checkbox").addClass("checked");
	$(this).html("收起地图");	
	scroll();
},function(){
	$(this).parents(".base_wrap").removeClass("base_wrap_dev");
	$(".float_side").removeClass("fs_box");
	$(".float_side").removeClass("fixedtop2");
	$(".tool_box .checkbox").removeClass("checked");
	$(this).html("展开地图");
	scroll();
});
$(".tool_box .checkbox").toggle(function(){
	$(this).removeClass("checked");
	$(".float_side").removeClass("fs_box");
	$(".float_side").removeClass("fixedtop2");
},function(){
	$(this).addClass("checked");
	$(".float_side").addClass("fs_box");
});

//左侧折叠
$(".filter_item_hd").eq(0).addClass("bg").next(".filter_item_bd").show();;
$(".filter_item_hd").click(function(){
	var className = $(this).attr("class");
	//判断该list是否已被打开
	if(className.indexOf("bg") < 0){
		$(this).parent().find(".filter_item_hd").removeClass("bg");
		$(this).addClass("bg");
		$(this).parent().find(".filter_item_bd").hide();
		$(this).next(".filter_item_bd").show();
	} else {
		$(this).removeClass("bg");
		$(this).next(".filter_item_bd").hide();
	}
	scroll();
});

//滚动悬浮
function scroll(){
	var f1 =$(".search_bar").offset().top;
	var f2 =$(".float_side").offset().top-58;
	var leftHeight = $(".side_map").outerHeight(true)+$(".filter_box").outerHeight(true)+53;
	var pageHeight = $(document).outerHeight(true)-$(".footer").outerHeight(true)-$(".seo_bar").outerHeight(true)-leftHeight-120;
	//$(".search_bar .btn_search").val(pageHeight);
	$(window).scroll(function (){
		var st = $(document).scrollTop();
		//$("#cityInfo").val(st);
		if(st > f1){
			$('.search_bar').addClass("fixedtop");
			$('.base_wrap_dev .fs_box').addClass("t63");
		}else{
			$('.search_bar').removeClass("fixedtop");
			$('.base_wrap_dev .fs_box').removeClass("t63");
		}
		if(st > f2){
			$('.base_wrap_dev .fs_box').addClass("fixedtop2");
			$('.base_wrap_dev .fs_box').removeClass("t63");
		}else{
			$('.base_wrap_dev .fs_box').removeClass("fixedtop2");
		}
		if(st > pageHeight){
			$('.base_wrap_dev .fs_box').css({position:"relative",top:pageHeight-185})
		}else{
			$('.base_wrap_dev .fs_box').css({position:"",top:""})
	}
});
}
scroll();

//房型切换
$(".room_tab li").click(function () {
	var tabs = $(this).parent().children("li");
	var panels = $(this).parents(".room_list").find(".room_info");
	var index = $.inArray(this, tabs);
	tabs.removeClass("on").find("i").remove();
	tabs.eq(index).addClass("on").append("<i />");
	panels.hide().eq(index).show();
});	

//气泡提示
$('.ptips').popTip({
	texttip:'jjui_poptext',				
	width:'252',
	maxwidth:252,
	left:12,
	positionleft:30
});	
$(".promotion .gift").popTip({
	texttip:'jjui_poptext',				
	width:'252',
	maxwidth:252,
	left:0,
	positionleft:30
});	

$(".info .price span").hover(function(){
	$(".tit_box").css("top", $(this).offset().top - $(this).find(".tit_box").height() - 22);
	$(".tit_box").css("left", $(this).offset().left - 25);
	$(".board_arrow_icon").css("top", $(this).find(".tit_box").height() + 13);
	$(this).find(".tit_box").toggle();
});

$(".info .promotion span").hover(function(){
	$(".tit_box").css("top", $(this).offset().top - $(this).find(".tit_box").height() - 22);
	$(".tit_box").css("left", $(this).offset().left - 25);
	$(".board_arrow_icon").css("top", $(this).find(".tit_box").height() + 13);
	$(this).find(".tit_box").toggle();
});

//城市选择器
var test=new Vcity.CitySelector({input:'cityInfo'});

//连续入住
$(".btn_all").click(function(){
	$(this).parent().find(".all_main").show();
});	
$(".all_day .close").click(function(){
	$(this).parents(".all_main").hide();
});

//checkbox美化
$(".chklist").hcheckbox();


//专享价鼠标效果
$(".login_before").hover(function(){
	$(this).find(".login_tip").toggle();
});

//关键字提示效果
$('.kw_input').citySelect({});

//返回顶部
var tophtml ='<a id="top" href="javascript:;"></a>'
$("body").append(tophtml);
$(window).scroll(function(){
	if ($(window).scrollTop()>100){
		var browser_width = $(window).width();
		if (browser_width > 1200){
			$("#top").fadeIn();
		} else {
			$("#top").fadeOut();
		}
	}else{
		$("#top").fadeOut();
	}
	
	//滚动条滚动最大滚动距离+浏览器高度=页面总高度
	var window_height = $(window).height();
	var st = $(window).scrollTop();
	var hotel_item_count = $(".hotel_list").children().length - 1;
	var hotel_items_height_list = "";
	for ( i = 0; i < hotel_item_count; i++){
		hotel_items_height_list = hotel_items_height_list + $($(".hotel_list .hotel_item")[i]).offset().top + ",";
	}
	var hotel_items_height_array = hotel_items_height_list.split(",");//hotel_item height list
	for ( i = 0; i < hotel_items_height_array.length - 1; i++){
		if (hotel_items_height_array[i] < (window_height + st + 50)){
			if($($(".hotel_list .hotel_item")[i]).find(".room_list").children().length == 0){
				//console.log($($(".hotel_list .hotel_item")[i]).find(".room_list").attr("id"));这是room_list的id
				//在此发送ajax请求
			}
		}
	}
});
$("#top").click(function(){
	$('body,html').animate({scrollTop:0},300);
	return false;
});
$(window).resize(function(){
	var changed_browser_width = $(window).width();
	if(changed_browser_width < 1200){
		$("#top").fadeOut();
	}
});

//日历效果
var today = new Date();
$(".dateCheckIn, .dateCheckOut").datepicker({
	minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
	numberOfMonths: 2,
	changeMonth: false,
	changeYear: false,
	beforeShow: function () {
		setTimeout(
			function () {
				$('#ui-datepicker-div').css("z-index", 15);
			}
		);
	}
});

});

