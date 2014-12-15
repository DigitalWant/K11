$(function(){
	navigation();
	$(".product_tab_selected").find(".tab_arrow").show();
	$("#" + $(".product_tab_selected").attr("title")).show();
	$("#common_rent").show();
	setBoardExitBoxSize();
	
	$(window).resize(function(){
		setBoardExitBoxSize();
		setFooterSize();
	});
	
	//轮播
	myFocus.set({
		id:'carousel_mian',//ID
		pattern:'mF_kdui',//风格
		time:5,//切换时间间隔(秒)
		trigger:'click',//触发切换模式：'click'(点击)/'mouseover'(悬停)
		width:1600,//设置宽度(主图区)
		height:400,//设置高度(主图区)
		txtHeight:0//文字层高度设置，'default'为默认高度，0为隐藏
	});
	
	$(".product_tab").hover(function(){
		if ($(this).attr("class").indexOf("_selected") == -1){
			$(this).addClass("product_tab_hover");
		}
	}, function(){
		if ($(this).attr("class").indexOf("_selected") == -1){
			$(this).removeClass("product_tab_hover");
		}
	});
	
	$(".product_tab").bind("click", function(){
		$(".tab_arrow").hide();
		if ($(this).attr("class").indexOf("_selected") == -1){
			$(".product_tab_selected").removeClass("product_tab_selected");
			$(".product_tab_hover").removeClass("product_tab_hover");
			$(this).addClass("product_tab_selected");
			$(this).find(".tab_arrow").show();
			$(".filter_box").hide();
			$("#" + $(this).attr("title")).show();
			if ($(this).attr("title") == "hotel_filter"){
				$(".check_map_btn").css("visibility", "visible");
			} else {
				$(".check_map_btn").css("visibility", "hidden");
			}
		}
	});
	
	$(".board_channel_box a").hover(function(){
		$(this).find(".channel_name_text").css("color", "#c29957");
		$(this).find(".enter_btn").addClass("enter_btn_hover");
	}, function(){
		$(this).find(".channel_name_text").css("color", "#333");
		$(this).find(".enter_btn").removeClass("enter_btn_hover");
	});
	
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
				}
			);
		}
	});
	
	//城市搜索
	var test=new Vcity.CitySelector({input:'cityInfoHotel'});
	textWaterMarkEvents("cityInfoTravelTerminal", "请输入目的地", "#aaa", "#333");
	$("#cityInfoTravelTerminal").bind("focusin",function(){
		var input_dom = this;
		$(".travel_terminal_recommend_box").show();
		$(document).bind("click",function(ev){
			var option_top = $(".travel_terminal_recommend_box").offset().top;
			var option_height = $(".travel_terminal_recommend_box").height();
			var option_left = $(".travel_terminal_recommend_box").offset().left;
			var option_width = $(".travel_terminal_recommend_box").width();
			var input_top = $("#cityInfoTravelTerminal").offset().top;
			var input_height = $("#cityInfoTravelTerminal").height();
			var input_left = $("#cityInfoTravelTerminal").offset().left;
			var input_width = $("#cityInfoTravelTerminal").width();
			
			var e = ev || window.event; 
			var mouse_x_position = ev.clientX;
			var mouse_y_position = ev.clientY;
			var st = $(window).scrollTop();
			if (document.getElementById("travel_terminal_recommend_box").style.display == "block"){
				if ((mouse_y_position + st < input_top) || (mouse_y_position + st > option_top + option_height + 15) || (mouse_x_position < option_left) || (mouse_x_position > option_left + option_width) || ((mouse_y_position + st > input_top) && (mouse_y_position + st < input_top + input_height) && (mouse_x_position > input_left + input_width) && (mouse_x_position < option_left + option_width))){
					$(".travel_terminal_recommend_box").hide();
				}
			}
		});
		$(".terminal_option").bind("click", function(){
			$(input_dom).attr("value",$(this).text());
			$(input_dom).attr("name",$(this).attr("title"));
			$(input_dom).css("color", "#333");
			$(".travel_terminal_recommend_box").hide();
		});
	});
	$("#cityInfoTravelTerminal").keyup(function(){
		if ($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
			$(".travel_terminal_recommend_box").show();
		} else {
			$(".travel_terminal_recommend_box").hide();
		}
	});
	
	//关键字提示效果
	$('.kw_input').citySelect({});
	
	//租车用途切换
	$(".rent_function li").bind("click", function(){
		if($(this).find(".unselected_check_point").attr("class").indexOf("selected_checked_point") < 0){
			$("#common_rent").hide();
			$("#airport_rent").hide();
			$(".selected_checked_point").removeClass("selected_checked_point");
			$(this).find(".unselected_check_point").addClass("selected_checked_point");
			$("#" + $(this).attr("title")).show();
		}
	});
	
	$("#airport_selection").CRselectBox();
	$("#car_rent_check_in_time_selection").CRselectBox();
	$("#common_car_rent_check_in_time_selection").CRselectBox();
	$("#common_car_rent_check_out_time_selection").CRselectBox();
	
	$(".CRselectBoxItem").hover(function(){
		$(this).css("background-color", "#333");
		$(this).find("a").css("color", "#fff");
	}, function(){
		$(this).css("background-color", "#fff");
		$(this).find("a").css("color", "#333");
	});
	
})

function setBoardExitBoxSize(){
	var windowWidth = $(window).width();
	var carouselWidth =1400 + Math.ceil((windowWidth - 1200)/2);
	if (windowWidth > 1200 & windowWidth < 1600){
		$(".board_exit_box").css("width", windowWidth);
		$("#carousel_mian").css({'width':carouselWidth,'overflow':'hidden'});
		$(".product_category_filter_box").css("left", Math.ceil((windowWidth - 1200)/2));
	} else if (windowWidth <= 1200){
		$(".board_exit_box").css("width", 1200);
		$("#carousel_mian").css({'width':1400,'overflow':'hidden'});
		$(".product_category_filter_box").css("left", 0);
	} else {
		$(".board_exit_box").css("width", 1600);
		$("#carousel_mian").css({'width':1600});
		$(".product_category_filter_box").css("left", 357);
	}
}