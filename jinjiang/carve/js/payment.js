$(function(){
	navigation();
	
	//ratio美化
	$(".pay_channel").bind("click",function(){
		$(".unselected_check_point").removeClass("checked_point");
		$(".pay_channel").removeClass("pay_channel_selected");
		$(this).find(".unselected_check_point").addClass("checked_point");
		$(this).addClass("pay_channel_selected");
	});
	
	$(".pay_btn").bind("click", function(){
		var pass_verification = false;
		$(".pay_channel").each(function(){
			if ($($($(this).children())[0]).attr("class").indexOf("checked_point") > 0){
				pass_verification = true;
			}
		});
		if (pass_verification == false){
			createCautionBox();
		}
	});
	
});

function createCautionBox(){
	var big_map_box = "<div class='mybg clearfix'></div>"
				+ "<div class='big_map_box clearfix'>"
					+ "<div class='head_box clearfix'><div class='caution_head_text'>锦江旅行家提示</div><a class='close_btn'></a></div>"
					+ "<div class='caution_content_box'>"
						+ "<div class='alarm_text yahei'>请选择支付方式</div>"
						+ "<span class='caution_text'>请选择支付方式，完成付款</span>"
					+ "</div>"
					+ "<div class='confirm_btn clearfix'>确定</div>"
				+"</div>";
	$(".wrapper").append(big_map_box);
	$(".mybg").css("height", $("body").height());
	document.documentElement.style.overflow = "hidden";
	setCautionBoxPosition();
	$(".close_btn").bind("click",function(){clearCautionBox();});
	$(".confirm_btn").bind("click",function(){clearCautionBox();});
}

function setCautionBoxPosition(){
	var st = $(document).scrollTop();
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	if (windowHeight > 190){
		$(".big_map_box").css("top", (windowHeight - 190)/2 + st);
	}
	if (windowWidth > 348){
		$(".big_map_box").css("left", (windowWidth - 348)/2);
	}
}

function clearCautionBox(){
	$(".mybg").remove();
	$(".big_map_box").remove();
	document.documentElement.style.overflow = "";
}