$(function(){
	navigation();
	//微信二维码事件
	$(".wechat_two_dimension_code_icons_box").css("display","none");
	$(".wechat_icon").hover(function(){$(".wechat_two_dimension_code_icons_box").show();
	}, function(){$(".wechat_two_dimension_code_icons_box").hide();});
	
	fullScreen();
	$(window).resize(function(){fullScreen();});
})

function fullScreen(){
	var window_height = $(window).height();
	if (window_height - 468 > 348){
		$(".base_main").css("min-height", (window_height - 468));
	} else {
		$(".base_main").css("min-height", 348);
	}
}