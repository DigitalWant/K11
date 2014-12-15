$(function(){
	navigation();
	
	window.setTimeout(function(){
		if ($(document).scrollTop() > 137){
			$(".exploring_num").css("position","absolute");
			$(".exploring_num").css("top",$(document).scrollTop() + 40);
			if ($(window).width() > 1200){
				$(".exploring_num").css("left", 1063 + ($(window).width() - 1200)/2);
			} else {
				$(".exploring_num").css("left", 1063);
			}
		}
		$(".exploring_num").fadeIn(300, null);
		window.setTimeout("$('.exploring_num').fadeOut(300, null)",5000);
	},2000);
	
	$(".toggle").bind("click",function(){
		if($(this).attr("class").indexOf("expanded") < 0){
			$(this).addClass("expanded");
			$(this).parent().parent().next().show();
			$(this).html("▲&nbsp;收起房间详情");
		} else {
			$(this).removeClass("expanded");
			$(this).html("▼&nbsp;查看房间详情");
			$(this).parent().parent().next().hide();
		}
	});
	
	//滚动条样式
	new addScroll('mainBox', 'content', 'scrollDiv');
	$("#scrollBox").hide(); 
	$("#mainBox").mouseover(function () { 
		$("#scrollBox").show(); 
	}).mouseout(function () { 
		$("#scrollBox").hide(); 
	});
	
	$(window).resize(function(){
		if ($(".mybg").length > 0){
			setBigMapSize();
		}
	});
	
	//图片切换事件
	$("#content img").bind("click", function(){
		if ($(this).attr("class").indexOf("amplified_pic") < 0){
			$("#content img").removeClass("amplified_pic");
			$(this).addClass("amplified_pic");
			$(".big_pic_board_box").attr("src" , $(this).attr("src"));
		}
	});
	
	//修改信息事件
	$(".edit_btn").bind("click", function(){
		$(".checkIn_show_box").hide();
		$(".checkIn_edit_box").show();
	});
	
	//取消按钮事件
	$(".cancel_btn").bind("click", function(){
		$(".checkIn_edit_box").hide();
		$(".checkIn_show_box").show();
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
	
	//房型tab hover事件
	$(".room_tab li").hover(function(){
		if ($(this).attr("class").indexOf("selected") < 0){
			$(this).find("a").addClass($(this).find("a").attr("class") + "_hover");
			$(this).css("color", "#1d7ad9");
		} 
	}, function(){
		if ($(this).attr("class").indexOf("selected") < 0){
			$(this).find("a").removeClass($(this).find("a").attr("class").split(" ")[1]);
			$(this).css("color", "#777");
		}
	});
	
	//房型tab select事件
	$(".room_tab li").bind("click",function(){
		if ($(this).attr("class").indexOf("selected") < 0){
			var selected_node = $(".room_tab li.selected");
			selected_node.removeClass("selected");
			selected_node.find("a").removeClass(selected_node.find("a").attr("class").split(" ")[1]);
			selected_node.css("color", "#777");
			$(this).addClass("selected");
			$(this).find("a").removeClass($(this).find("a").attr("class").split(" ")[1]);
			$(this).find("a").addClass($(this).find("a").attr("class") + "_selected");
			$(this).css("color", "#fff");
			
			var tabs = $(this).parent().children("li");
			var panels = $(this).parents(".hotel_room_info_box").find(".room_info");
			var index = $.inArray(this, tabs);
			panels.hide().eq(index).show();
		}
	});
	
	//滚动悬浮
	$(window).scroll(function(){
		var f1 =$("#hotel_room_info").offset().top;
		var st = $(document).scrollTop();
		var list_height = $("#hotel_room_info").height();
		if (st > (f1 + list_height + 20)){
			$("#tabmenu").css({"position" : "fixed", "top" : 0 });
			$(".tab_fill_box").show();
		} else {
			$("#tabmenu").css({"position" : "static"});
			$(".tab_fill_box").hide();
		}
	});
	
	//酒店信息tab切换
	$("#tabmenu li").bind("click", function(){
		$("#tabmenu").find(".selected_teb").removeClass("selected_teb");
		$(this).addClass("selected_teb");
	});
	
	//查看大地图按钮事件
	$(".map_see").bind("click",function(){createBigMapBox();});
	
	//点击商圈、交通、机场名弹出地图蒙层
	$(".circumference_box .name").bind("click", function(){createBigMapBox();});
	
	$(".bottom_dashed_line").hover(function(){
		$(".tit_box").css("top", $(this).offset().top - $(this).find(".tit_box").height() - 20 - 6);
		$(".tit_box").css("left", $(this).offset().left - 40);
		$(".board_arrow_icon").css("top", $(this).find(".tit_box").height() + 13);
		$(this).find(".tit_box").toggle();
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
	
	//专享价鼠标效果
	$(".login_before").hover(function(){$(this).find(".login_tip").toggle();});
	
	//连续入住
	$(".btn_all").click(function(){$(this).parent().find(".all_main").show();});	
	$(".all_day .close").click(function(){$(this).parents(".all_main").hide();});

});

function createBigMapBox(){
	var big_map_box = "<div class='mybg clearfix'></div>"
						+ "<div class='big_map_box clearfix'>"
							+ "<div class='head_box'><a class='close_btn'></a></div>"
							+ "<img src='../temp/amplified_map.jpg'/>"
						+"</div>";
	$(".wrapper").append(big_map_box);
	$(".mybg").css("height", $(".wrapper").height());
	setBigMapSize();
	document.documentElement.style.overflow = "hidden";
	
	$(".close_btn").bind("click",function(){
		$(".mybg").remove();
		$(".big_map_box").remove();
		document.documentElement.style.overflow = "";
	});
}

function setBigMapSize(){
	var st = $(document).scrollTop();
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	if (windowHeight > 700){
		$(".big_map_box").css("height", (windowHeight - 202));
		$(".big_map_box img").css("height", (windowHeight - 202 - 28));
		$(".big_map_box").css("top", 100 + st);
	} else if (windowHeight > 500 && windowHeight <= 700){
		$(".big_map_box").css("top", (windowHeight - 500)/2 + st);
	} else {
		$(".big_map_box").css("top", 0 + st);
	}
	if (windowWidth > 1000){
		$(".big_map_box").css("width", (windowWidth - 202));
		$(".big_map_box img").css("width", (windowWidth - 202));
	} else if (windowWidth > 800 && windowWidth <= 1000){
		$(".big_map_box").css("left", (windowWidth - 800)/2);
	} else {
		$(".big_map_box").css("left", 0);
	}
}
