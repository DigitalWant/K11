$(function(){
	navigation();
	
	fullScreen();
	$(window).resize(function(){fullScreen();});
})

function fullScreen(){
	var window_height = $(window).height();
	if (window_height - 345 > 535){
		$(".province_filter_box").css("min-height", (window_height - 345));
	} else {
		$(".province_filter_box").css("min-height", 535);
	}
}