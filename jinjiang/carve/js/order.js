$(function(){
	navigation();
		
	var f1 =$(".book_details_box").offset().top;	   
	var datepicker_box = null;
	
	//�������С�仯ʱ���޸ĵ�ͼ����������
	$(window).resize(function(){
		if ($(window).width() >= 1200){
			$(".frequent_contact").css( "left", (($(window).width() - 1200)/2) + 115);
			$('#ui-datepicker-div').css("left", (($(window).width() - 1200)/2) + 699);
		} else {
			$(".frequent_contact").css( "left", 115);
			$('#ui-datepicker-div').css("left", 699);
		}
	});
	
	bodyclick = document.getElementsByTagName('body').item(0);
	rSelects();
	bodyclick.onclick = function(){
		for (i=0;i<selects.length;i++){	
			document.getElementById('select_info_' + selects[i].name).className = 'tag_select';
			document.getElementById('options_' + selects[i].name).style.display = 'none';
		}
	}
	
	//�ı���ˮӡ
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
	
	//checkbox����
	$(".check_list").hcheckbox();
	
	//����Ч��
	var today = new Date();
	$(".dateCheckIn").datepicker({
		minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		numberOfMonths: 2,
		changeMonth: false,
		changeYear: false,
		beforeShow: function () {
			setTimeout(
				function () {
					var height = $(".dateCheckIn").offset().top;
					$('#ui-datepicker-div').css("z-index", 15);
					$('#ui-datepicker-div').css("left", (($(window).width() - 1200)/2) + 699);
					$('#ui-datepicker-div').css("top", height+24);
					datepicker_box = "dateCheckIn";
				}
			);
		}
	});
	
	$(".dateCheckOut").datepicker({
		minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		numberOfMonths: 2,
		changeMonth: false,
		changeYear: false,
		beforeShow: function () {
			setTimeout(
				function () {
					var height = $(".dateCheckOut").offset().top;
					$('#ui-datepicker-div').css("z-index", 15);
					$('#ui-datepicker-div').css("left", (($(window).width() - 1200)/2) + 699);
					$('#ui-datepicker-div').css("top", height+24);
					datepicker_box = "dateCheckOut";
				}
			);
		}
	});
	
	//Ԥ�������������չ��
	$(".full_expand_btn").bind("click",function(){
		$(this).hide();
		$(".packup_btn").show();
		$(".pressed_detailed_police").removeClass("ellipsis");
		$(".pressed_detailed_police").css("width", 318);
	});
	
	//Ԥ�����������������
	$(".packup_btn").bind("click",function(){
		$(this).hide();
		$(".full_expand_btn").show();
		$(".pressed_detailed_police").addClass("ellipsis");
		$(".pressed_detailed_police").css("width", 215);
	});
	
	//�޸�Ԥ��ʱ�䡢������
	$(".edit_btn").bind("click", function(){
		$(".order_info_expression_box").hide();
		$(".order_info_edit_box").show();
	});
	
	//ȷ����ȡ���޸�Ԥ��ʱ�䡢������
	$(".cancel_btn, .confirm_btn").bind("click", function(){
		var new_room_num = $("#select_info_num_edited").html();
		if ($(this).attr("class").indexOf("confirm_btn") == 0){$("#room_num_express").text(new_room_num);}
		$(".order_info_expression_box").show();
		$(".order_info_edit_box").hide();
	});

	//ratio����
	$(".pay_channel").bind("click",function(){
		$(".unselected_check_point").removeClass("selected_check_point");
		$(".pay_channel").removeClass("pay_channel_hover");
		$(this).find(".unselected_check_point").addClass("selected_check_point");
		$(this).addClass("pay_channel_hover");
	});
	
	//��������ʽ
	new addScroll('mainBox', 'content', 'scrollDiv');
	$("#scrollBox").hide(); 
	$("#mainBox").mouseover(function () { 
		$("#scrollBox").show(); 
	}).mouseout(function () { 
		$("#scrollBox").hide(); 
	}); 
	
	//��������
	$(window).scroll(function (){
		var leftHeight = $(".book_details_box").outerHeight(true);
		var pageHeight = $(document).outerHeight(true)-$(".footer").outerHeight(true)-leftHeight;
		var st = $(document).scrollTop();
		var check_out_height = $(".dateCheckOut").offset().top;
		var check_in_height = $(".dateCheckIn").offset().top;
		if(st > f1){
			$('.book_details_box').addClass("fixedside");
		}else{
			$('.book_details_box').removeClass("fixedside");
		}
		if(st > pageHeight){
			if($.browser.msie){
				$('.book_details_box').css({position:"relative",top:pageHeight-455});
			} else {
				$('.book_details_box').css({position:"relative",top:pageHeight-430});
			}
		}else{
			$('.book_details_box').css({position:"",top:""})
		}
		if (datepicker_box == "dateCheckIn"){
			$('#ui-datepicker-div').css("top", check_in_height+24);
		} else if (datepicker_box == "dateCheckOut"){
			$('#ui-datepicker-div').css("top", check_out_height+24);
		}
	});
	
	//������ϵ�˵�����
	$("#contacter_input").focusin(function(){
		$(".frequent_contact").show();
		var contact_num = $(".frequent_contact_list").children().length;
		if($.browser.msie){
			if (contact_num < 8 && contact_num > 5){
				$(".frequent_contact").css("width", 11+19+(contact_num*69));
			} else if (contact_num <= 5){
				$(".frequent_contact").css("width", 380);
			}
		}
		
	});
	
	$(".close_btn").bind("click",function(){
		$(".frequent_contact").hide();
	});

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
	
	//ȡ���շ����¼�
	$(".insurance_content_box").bind("click",function(){
		var original_sum = parseInt($(".sum_fee_text").text());//ԭ���ܽ��
		var cancel_insurance_fee = parseInt($(".insurance_price_text b").text());//ȡ���ս��
		var reception_payment_fee = parseInt($(".pay_requirement .reception_payment").text().substring(1));//ԭǰ̨֧�����
			
		if($(".insurance_content_box").attr("class").indexOf("checked") > 0){
			$(".cancel_insurance").show();
			
			//�ܽ��,ǰ̨֧������
			$(".pay_requirement .reception_payment").text("��" + (reception_payment_fee + cancel_insurance_fee));
			$(".sum_fee_text").text(original_sum + cancel_insurance_fee);
		} else {
			$(".cancel_insurance").hide();
			
			//�ܽ��ǰ̨֧������
			$(".pay_requirement .reception_payment").text("��" + (reception_payment_fee - cancel_insurance_fee));
			$(".sum_fee_text").text(original_sum - cancel_insurance_fee);
		}
	});
	
});