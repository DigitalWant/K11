$(function(){	   
	navigation();
	returnTopBtn();
	$(".caution_text").css("display","none");
	
	//******************************需根据用户点击情况,传参加载*********************************************
	$(".common_info_box .common_info:first-child").css("display", "block");
	$(".common_tab li:first-child").addClass("tab_li_selected");
	//******************************需根据用户点击情况,传参加载*********************************************
	
	fullScreen();
	$(window).resize(function(){fullScreen();});
	//tab切换事件
	$(".common_tab li").hover(function(){
		if($(this).attr("class").indexOf("_selected")  < 0){
			$(this).find(".tab_head_arrow").css("color","#333");
			$(this).find(".tab_head_text").css("color","#333");
		}
	}, function(){
		if($(this).attr("class").indexOf("_selected")  < 0){
			$(this).find(".tab_head_arrow").css("color","#fff");
			$(this).find(".tab_head_text").css("color","#777");
		}
	});
	
	$(".common_tab li").bind("click",function(){
		if($(this).attr("class").indexOf("_selected") < 0){
			$(".tab_li_selected").find(".tab_head_text").css("color","#777");
			$(".tab_li_selected").removeClass("tab_li_selected");
			$(this).addClass("tab_li_selected");
			$(this).find(".tab_head_arrow").css("color","#fff");
			$(this).find(".tab_head_text").css("color","#fff");
			
			var tabs = $(this).parent().children("li");
			var panels = $(this).parents(".base_main").find(".common_info");
			var index = $.inArray(this, tabs);
			panels.hide().eq(index).show();
		}
		$("#top").remove();
		returnTopBtn();
	});
	
	$(".info_input_unit li").bind("click",function(){
		$(this).parent().find(".unselected_check_point").removeClass("selected_check_point");
		$(this).find(".unselected_check_point").addClass("selected_check_point");
	});
	
	$(".confirm_submit_btn").bind("click", function(){
		//问题类别校验
		if ($("#question_type li").find(".selected_check_point").length == 0){
			$($("#question_type").parent()).find(".caution_text").show();
		} else {
			$($("#question_type").parent()).find(".caution_text").hide();
		}
		//产品类别校验
		if ($("#product_type li").find(".selected_check_point").length == 0){
			$($("#product_type").parent()).find(".caution_text").show();
		} else {
			$($("#product_type").parent()).find(".caution_text").hide();
		}
		//标题与内容校验
		if($("#experience_title").val().replace(/(^\s*)|(\s*$)/g, "")=="" && $("#experience_content").val().replace(/(^\s*)|(\s*$)/g, "")==""){
			$(".caution_text").show();
		} else {
			$(".caution_text").hide();
		}
	});
	
})

function returnTopBtn(){
	//返回顶部
	if ($($(".common_info_box .common_info")[3]).css("display") == "block"){
		var tophtml ='<a id="top" href="javascript:;"></a>'
		$("body").append(tophtml);
		$(window).scroll(function(){
			if ($(window).scrollTop()>214){
				$("#top").fadeIn();
			}else{
				$("#top").fadeOut();
			}
		});
		$("#top").click(function(){
			$('body,html').animate({scrollTop:0},300);
			return false;
		});
	}
}

function fullScreen(){
	var window_height = $(window).height();
	if (window_height - 394 > 395){
		$(".common_info_box").css("min-height", (window_height - 394));
	} else {
		$(".common_info_box").css("min-height", 395);
	}
}