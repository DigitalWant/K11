function navigation(){
    //ie6升级提示
	ieSixVerify();
	//input光标进入修改样式
	$("input, textarea").focusin(function(){$(this).addClass("enter_input_border");});
	$("input, textarea").focusout(function(){$(this).removeClass("enter_input_border");});
	//check按钮事件
	$(".check_btn").bind("click",function(){
		var check_value = $(this).attr("value");
		if (check_value == "unchecked"){
			$(this).attr("value", "checked");
			$(this).addClass("checked");
		} else {
			$(this).attr("value", "unchecked");
			$(this).removeClass("checked");
		}
	});
	//导航栏切换
	$(".head a").bind("click",function(){
		if ($(this).attr("class").indexOf("login") == -1){
			$(".head").children().each(function(){
				$(this).removeClass($(this).attr("class").split(" ")[0] + "_selected");
				if ($(this).attr("class").indexOf("_hover") > 0){
					if ($(this).attr("class").indexOf("yahei") < 0){
						$(this).removeClass($(this).attr("class").split(" ")[1]);
					} else {
						$(this).removeClass($(this).attr("class").split(" ")[2]);
					}
				}
			});	
			if ($(this).attr("class").indexOf("yahei") < 0){
				$(this).addClass($(this).attr("class") + "_selected");
			} else {
				$(this).addClass(($(this).attr("class").split(" ")[0]) + "_selected");
			}
		}
	});
	
	$(".head a").hover(function(){
		if ($(this).attr("class").indexOf("login") == -1){
			if($(this).attr("class").indexOf("_selected") < 0){
				if ($(this).attr("class").indexOf("yahei") < 0){
					$(this).addClass($(this).attr("class") + "_hover");
				} else {
					$(this).addClass(($(this).attr("class").split(" ")[0]) + "_hover");
				}
			}
		} else {
			if($(this).attr("class").indexOf("_hover") < 0){
				$(this).addClass($(this).attr("class") + "_hover");
				$(".head").next().fadeIn(function(){
					$(document).bind('mousemove', function(ev){
						var login_top = $("#login_box").offset().top;
						var login_height = $("#login_box").height();
						var login_left = $("#login_box").offset().left;
						var login_width = $("#login_box").width();
						var login_head_left = $($(".head").children()[0]).offset().left;
						var login_head_width = $($(".head").children()[0]).width() + 1;
						var e = ev || window.event; 
						var mouse_x_position = ev.clientX;
						var mouse_y_position = ev.clientY;
						var st = $(window).scrollTop();
						if (document.getElementById('login_box').style.display == "block"){
							if (((mouse_y_position + st < login_top) && ((mouse_x_position < login_head_left) || (mouse_x_position > login_head_left + login_head_width))) || mouse_y_position + st > login_top + login_height + 20 || mouse_x_position < login_left || mouse_x_position > login_left + login_width){
								$(".head").next().fadeOut(function(){
									$(document).unbind("mousemove");
								});
								$($(".head").children()[0]).removeClass($($(".head").children()[0]).attr("class").split(" ")[0] + "_hover");
								$("#login_username").blur();
								$("#login_password").blur();
							}
						}
					});
					if ($(this).attr("class").indexOf("logined") < 0){
						textWaterMarkEvents("login_username", "注册邮箱/手机号码", "#dedede", "#777");
						passwordWaterMarkEvents("login_password", "#dedede", "#777");
					}
				});
			}
		}
	},function(){
		if ($(this).attr("class").indexOf("login") == -1){
			if($(this).attr("class").indexOf("_selected") < 0){
				if ($(this).attr("class").indexOf("yahei") < 0){
					$(this).removeClass($(this).attr("class").split(" ")[1]);
				} else {
					$(this).removeClass($(this).attr("class").split(" ")[2]);
				}
			}
		} 
	});
}

function ieSixVerify(){
	var isIE6 = $.browser.msie && ( parseInt($.browser.version) < 7 ) && !$.support.style ? true : false;
	//IE6提示
	if(isIE6) {
		var $warning = $('<div style="width:100%;line-height:40px;position:absolute;top:0;left:0;z-index:99999;text-align:center;font-size:14px;color:#000;"><div style="background:#FFa;">您正在使用 Internet Explorer 6，在本页面的显示效果可能有差异。建议您升级到 <a href="http://www.microsoft.com/china/windows/internet-explorer/" target="_blank">Internet Explorer 8</a> </div></div>').appendTo('body');
		setTimeout(function(){$warning.fadeOut(500,function(){$(this).remove()})},6000);
	}
}

//文本输入框水印事件。参数：inputId（文本输入框ID）；initialVal（初始值）；initialColor（初始色）；focusColor（键入色）。
function textWaterMarkEvents(inputId, initialVal, initialColor, focusColor){
	if ($("#" + inputId).val() != initialVal && $("#" + inputId).val().replace(/(^\s*)|(\s*$)/g, "")!=""){
		$("#" + inputId).css("color", focusColor);
	} else if($("#" + inputId).val().replace(/(^\s*)|(\s*$)/g, "")==""){
		$("#" + inputId).css("color", initialColor);
		$("#" + inputId).val(initialVal);
	}
	$("#" + inputId).bind("focusin",function(){
		$(this).css("color", focusColor);
		if ($(this).val() == initialVal){
			$(this).val("");
		}
	});
	$("#" + inputId).bind("focusout",function(){
		if ($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
			$(this).css("color", initialColor);
			$(this).val(initialVal);
		}
	});
}

//密码输入框水印事件。参数：inputId（密码输入框ID）；initialColor（初始色）；focusColor（键入色）。调用此方法需使用特定html结构
function passwordWaterMarkEvents(inputId, initialColor, focusColor){
	if ($("#" + inputId).val().replace(/(^\s*)|(\s*$)/g, "")!=""){
		$("#" + inputId).parent().find("label").hide();
	} else if ($("#login_password").val().replace(/(^\s*)|(\s*$)/g, "")==""){
		$("#" + inputId).parent().find("label").show();
	}
	$("#" + inputId).bind("focusin",function(){
		$(this).css("color", focusColor);
		if ($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
			$(this).parent().find("label").hide();
		}
	});
	$("#" + inputId).bind("focusout",function(){
		if ($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
			$(this).css("color", "#dedede");
			$(this).parent().find("label").show();
		}
	});
}