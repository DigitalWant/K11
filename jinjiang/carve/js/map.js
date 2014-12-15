$(function(){
	navigation();
	
	//��ʼ��ʱ����ӵ�ͼ����������	 
	$(".base_main").width($(window).width() - 360 - 3);//360pxΪ�ұ߹̶�����;3pxΪborder���	
	$(".back_list_mode").css( "left", $(window).width() - 360 - 2 - 97);//2pxΪborder��ȣ�97Ϊ��ť���
	$('.top_search_box').width($(window).width() - 40);
	
	//�������С�仯ʱ���޸ĵ�ͼ����������
	$(window).resize(function(){
		$(".base_main").width($(window).width() - 360 - 3);//360pxΪ�ұ߹̶�����;3pxΪborder���
		$(".back_list_mode").css( "left", $(window).width() - 360 - 2 - 97);//2pxΪborder��ȣ�97Ϊ��ť���
		$('.top_search_box').width($(window).width() - 40);
	});
	
	//�Ƶ�list��hover��ʽ
	$("li.hotel_item").bind("mouseenter", function(){	
		$(this).find(".num").addClass("num_hover");
		$(this).find("a").addClass("a_hover");
		var hotel_id = $(this).prop("id");
		var map_hotel_dom = $(".amap_marker[hotel_id='" + hotel_id + "']");
		$(map_hotel_dom).find(".map_num").addClass("map_num_hover");
		$(map_hotel_dom).find(".map_mark_hotel_info").addClass("map_mark_hotel_info_hover");
		$(map_hotel_dom).find(".map_hotel_name").addClass("map_hotel_name_hover");
		$(map_hotel_dom).find("b").addClass("b_hover");
		var className = $(map_hotel_dom).find(".map_mark_hotel_info").children(":first").attr("class");
		var newClassName = className.substring(0, className.length - 4) + "hover_logo";
		$(map_hotel_dom).find(".map_mark_hotel_info").children(":first").addClass(newClassName);
		
		$(this).unbind("mouseleave");
		$(this).bind("mouseleave",function(){
			$(this).find(".num").removeClass("num_hover");
			$(this).find("a").removeClass("a_hover");
			$(map_hotel_dom).find(".map_num").removeClass("map_num_hover");
			$(map_hotel_dom).find(".map_mark_hotel_info").removeClass("map_mark_hotel_info_hover");
			$(map_hotel_dom).find(".map_hotel_name").removeClass("map_hotel_name_hover");
			$(map_hotel_dom).find("b").removeClass("b_hover");
			$(map_hotel_dom).find(".map_mark_hotel_info").children(":first").removeClass(newClassName);
		});
	});
	
	//��ͼ�Ƶ���hover��ʽ
	$(".amap_marker").bind("mouseenter", function(){
		$(this).find(".map_num").addClass("map_num_hover");
		$(this).find(".map_mark_hotel_info").addClass("map_mark_hotel_info_hover");
		$(this).find(".map_hotel_name").addClass("map_hotel_name_hover");
		$(this).find("b").addClass("b_hover");
		var className = $(this).find(".map_mark_hotel_info").children(":first").attr("class");
		var newClassName = className.substring(0, className.length - 4) + "hover_logo";
		$(this).find(".map_mark_hotel_info").children(":first").addClass(newClassName);
		
		$(this).unbind("mouseleave");
		$(this).bind("mouseleave",function(){
			$(this).find(".map_num").removeClass("map_num_hover");
			$(this).find(".map_mark_hotel_info").removeClass("map_mark_hotel_info_hover");
			$(this).find(".map_hotel_name").removeClass("map_hotel_name_hover");
			$(this).find("b").removeClass("b_hover");
			$(this).find(".map_mark_hotel_info").children(":first").removeClass(newClassName);
		});
	});
	
	//�������ͷhover
	$(".route_box").bind("mouseenter", function(){
		$(this).addClass("route_box_hover");
		$(this).find(".check_route_btn").addClass("check_route_btn_hover");
		$(this).next().addClass("bord_arrow_icon_hover");
		
		$(this).bind("mouseleave",function(){
			$(this).removeClass("route_box_hover");
			$(this).find(".check_route_btn").removeClass("check_route_btn_hover");
			$(this).next().removeClass("bord_arrow_icon_hover");
		});
		
	});
	
	//�ؼ�����ʾЧ��
	$('.kw_input').citySelect({});

	//����ѡ����
	var test=new Vcity.CitySelector({input:'cityInfo'});
	
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
		});  
	} 
	inputTipText();
	
	//checkbox����
	$(".check_list").hcheckbox();
	
	//��������
	$(window).scroll(function (){
		var st = $(document).scrollTop();
		if(st > 69){
			$(".top_search_box").addClass("fixedtop");
			$(".search_bar_fill_box").show();
		}else{
			$(".top_search_box").removeClass("fixedtop");
			$(".search_bar_fill_box").hide();
		}
	});
	
	//����Ч��
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

});