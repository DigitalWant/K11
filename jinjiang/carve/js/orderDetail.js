$(function(){	   
	navigation();
	
	//修改订单按钮
	$("#edit_order").bind("click",function(){
		if ($(this).attr("class").indexOf("btn_clocked") < 0){
			$(".order_toolbsr_box").children().each(function(){$(this).addClass("btn_clocked");});
			$("#contact_form").show();
			$("#contact_info_expression").hide();
		}
	});
	
	$(".save_btn").bind("click",function(){
		$("#contact_form").hide();
		$("#contact_info_expression").show();
		$(".order_toolbsr_box").children().each(function(){$(this).removeClass("btn_clocked");});
	});
	
	//浏览器大小变化时，修改地图框、搜索框宽度
	$(window).resize(function(){
		if ($(window).width() >= 1002){
			$(".frequent_contact").css( "left", (($(window).width() - 1002)/2) + 80);
		} else {
			$(".frequent_contact").css( "left", 80);
		}
	});
	
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
			$(this).focusin(function(){
				$(this).next().hide();
			});
		});  
	} 
	inputTipText();
	
	//input光标进入修改样式
	$("input, textarea").focusin(function(){$(this).addClass("enter_input_border");});
	$("input, textarea").focusout(function(){$(this).removeClass("enter_input_border");});
	
	//常用联系人弹出层
	$("#contacter_input").focusin(function(){
		$(".frequent_contact").show();
		var contact_num = $(".frequent_contact_list").children().length;
		if ($(window).width() >= 1002){
			$(".frequent_contact").css( "left", (($(window).width() - 1002)/2) + 80)
		} else {
			$(".frequent_contact").css( "left", 80);
		}
		if($.browser.msie){
			if (contact_num < 8 && contact_num > 5){
				$(".frequent_contact").css("width", 11+19+(contact_num*69));
			} else if (contact_num <= 5){
				$(".frequent_contact").css("width", 380);
			}
		}
	});
	
	$(".close_btn").bind("click",function(){$(".frequent_contact").hide();});

	$(".frequent_contact_text").bind("click",function(){
		$("#contacter_input").val($(this).text());
		$("#contacter_input").next().next().hide();
		$("#contacter_input").removeClass("n-invalid");
		$("#contacter_input").addClass("n-valid");
		$("#contacter_input").next().find(".msg-wrap").removeClass("n-error");
		$("#contacter_input").next().find(".msg-wrap").addClass("n-ok");
		$("#contacter_input").next().find(".n-msg").text("");
		$("#contacter_input").next().find(".n-msg").hide();
		$(".frequent_contact").hide();
	});
	
	$("*").bind("click",function(e){
		var target  = $(e.target);
        if(target.closest(".frequent_contact").length == 0 && target.closest("#contacter_input").length == 0){
        	$('.frequent_contact').hide();
        }
	});
	
	$(".order_assistant_operation").bind("click",function(){
		if ($(this).attr("class").indexOf("btn_clocked") < 0){
			var left = 0;
			var hwad_text = null;
			if ($(this).prop("id") == "print"){
				left = 681;
				head_text = "打印内容";
				$(".order_assistant_operation_box").find("table").show();
				$(".order_assistant_operation_box").find(".email_address_box").hide();
				$(".order_assistant_operation_box").find(".phone_number_box").hide();
			} else if ($(this).prop("id") == "send_email"){
				left = 773;
				head_text = "请输入邮箱地址";
				$(".order_assistant_operation_box").find(".email_address_box").show();
				$(".order_assistant_operation_box").find("table").hide();
				$(".order_assistant_operation_box").find(".phone_number_box").hide();
				textWaterMarkEvents("email_address", "例：someone@gmail.com", "#dedede", "#777");
				var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
				if (!email.test($("#email_address").val()) && $("#email_address").val() != $("#email_address").attr("title")){
					$(".caution_text").css("color", "#ff0000");
				}
			} else if ($(this).prop("id") == "send_mobil"){
				left = 703;
				head_text = "请输入手机号码";
				$(".order_assistant_operation_box").find(".phone_number_box").show();
				$(".order_assistant_operation_box").find("table").hide();
				$(".order_assistant_operation_box").find(".email_address_box").hide();
				textWaterMarkEvents("phone_number", "例：138654889547", "#dedede", "#777");
				var cellpone = /^(((13[0-9]{1})|159|153)+\d{8})$/;
				if (!cellpone.test($("#phone_number").val()) && $("#phone_number").val() != $("#phone_number").attr("title")){
					$(".caution_text").css("color", "#ff0000");
				}
			}
			$(".order_assistant_operation_box").css("left", left);
			$(".order_assistant_operation_box").show();
			$(".order_operation_window_head_text").text(head_text);
		}
	});
	
	$(".close_operation_window_btn").bind("click",function(){
		$(".order_assistant_operation_box").hide();
		$("#email_address").blur();
		$("#phone_number").blur();
	});
	
	$(".operate_btn").bind("click", function(){
		if ($(".order_operation_window_head_text").text() == "请输入邮箱地址"){
			var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
			if (!email.test($("#email_address").val())){
				$(".caution_text").css("color", "#ff0000");
			} else {
				$(".order_assistant_operation_box").hide();
				$(".caution_text").css("color", "#fff");
				$("#email_address").blur();
				$("#phone_number").blur();
			}
		} else if ($(".order_operation_window_head_text").text() == "请输入手机号码"){
			var cellpone = /^(((13[0-9]{1})|159|153)+\d{8})$/;
			if (!cellpone.test($("#phone_number").val())){
				$(".caution_text").css("color", "#ff0000");
			} else {
				$(".order_assistant_operation_box").hide();
				$(".caution_text").css("color", "#fff");
				$("#email_address").blur();
				$("#phone_number").blur();
			}
		} else{
			$(".order_assistant_operation_box").hide();
		}
	});
	
	//checkbox美化
	$(".check_list").hcheckbox();
	
});