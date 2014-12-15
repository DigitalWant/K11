;(function($){
	$.fn.hcheckbox=function(options){
		$(':checkbox+label',this).each(function(){
			$(this).addClass('checkbox');
            if($(this).prev().is(':disabled')==false){
				$(this).attr("name", $(this).prev()[0].name);
                if($(this).prev().is(':checked'))
				    $(this).addClass("checked");
					if ($(this).attr("name") == "allSelect"){
						for( i = 0; i < $(this).parent().parent().children().length; i++){
							$($(this).parent().parent().children()[i]).find("label").addClass("checked");
							$($(this).parent().parent().children()[i]).find("label").prev()[0].checked = true;
						}
					}
            }else{
                $(this).addClass('disabled');
            }
		}).click(function(event){
				if(!$(this).prev().is(':checked')){
					if($(this).attr("class").indexOf("special") == 0){
						$(this).parent().next().show();
					} else if ($(this).attr("class").indexOf("innvoice") == 0){
						$(this).parent().next().css("display", "inline-block");
					} else if ($(this).attr("class").indexOf("order_principle_label") == 0){
						$(".disabled_submit_order_btn").addClass("submit_order_btn");
						$(".disabled_submit_order_btn").removeClass("disabled_submit_order_btn");
					} 
				    $(this).addClass("checked");
					if ($(this).attr("name") == "allSelect"){
						for( i = 0; i < $(this).parent().parent().children().length; i++){
							$($(this).parent().parent().children()[i]).find("label").addClass("checked");
							$($(this).parent().parent().children()[i]).find("label").prev()[0].checked = true;
						}
					}
                    $(this).prev()[0].checked = true;
                }
                else{
					if($(this).attr("class").indexOf("special") == 0){
						$(this).parent().next().hide();
					} else if ($(this).attr("class").indexOf("innvoice") == 0){
						$(this).parent().next().hide();
					} else if ($(this).attr("class").indexOf("order_principle_label") == 0){
						$(".submit_order_btn").addClass("disabled_submit_order_btn");
						$(".submit_order_btn").removeClass("submit_order_btn");
					}
                    $(this).removeClass('checked');	
					if ($(this).attr("name") == "allSelect"){
						for( i = 0; i < $(this).parent().parent().children().length; i++){
							$($(this).parent().parent().children()[i]).find("label").removeClass("checked");
							$($(this).parent().parent().children()[i]).find("label").prev()[0].checked = false;
						}
					}
                    $(this).prev()[0].checked = false;
                }
                event.stopPropagation();
			}
		).prev().hide();
	}

})(jQuery)