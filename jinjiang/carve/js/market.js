$(function(){
   //活动过期显示灰色
    var aOver = $(".action_over").find(".action_pic img");
	navigation();
	
	tagChange("#tab_action_head li","#tab_action_mian .tab_list","cur").setTouchType("click").init();
	
	grayscale(aOver);

});	
