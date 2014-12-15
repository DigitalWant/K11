// JavaScript Document
$.fn.citySelect=function(values){
	var cityHtml='<div class="kerword_box">'+
	'<p class="clearfix"><span class="hot_head">热门地标</span><br /><a href="javascript:;">人民广场</a><a href="javascript:;">陆家嘴</a><a href="javascript:;">世博园</a><a href="javascript:;">自贸区</a></p>'+
    '<p>交通枢纽<br /><a href="javascript:;">上海火车站</a><a href="javascript:;">虹桥火车站</a><a href="javascript:;">上海南站</a><a href="javascript:;">浦东机场</a><a href="javascript:;">虹桥机场</a><a href="javascript:;">一号线</a><a href="javascript:;">磁悬浮</a><a href="javascript:;">长途汽车站</a>'+
    '</p><p class="last">热门商圈<br /><a href="javascript:;">宝山万达</a><a href="javascript:;">五角场</a><a href="javascript:;">淮海路</a><a href="javascript:;">徐家汇</a><a href="javascript:;">大世界</a><a href="javascript:;">正大广场</a>'+
	'</p></div><div class="word_slide"><a href="javascript:;"><b class="cityname">上海</b><b class="cityspell">shanghai</b></a><a href="javascript:;"><b class="cityname">北京</b><b class="cityspell">shanghai</b></a>'+
	'</div>'
	function getCitylist(){
		return $('.kerword_box');
	}
	function getHidebox(){
		return $('.kerword_box,.kw .tipTxt');
	}
	$(this).focus(function(){
		if($(this).val()==""){
		$(this).next().show();
	}else{
		$(this).next().hide();
		}
		getCitylist().size()>0?'':$('.kw').append(cityHtml);
		var pos=$(this).offset();
		$('.kerword_box').show();
		if ($(".hotel_screen").length > 0){
			var star_hotel_tool_bar_height = 0;
			if ($(".wrapper").attr("class").indexOf("jinjiang_star_hotel") > 0){
				star_hotel_tool_bar_height = 104;
			}
			var search_bar = $(".search_bar").offset().top;
			var st = $(document).scrollTop();
			if($(window).height() < 540+star_hotel_tool_bar_height && $(window).height() > 189+star_hotel_tool_bar_height && search_bar != 461){
				if (st < 580 - $(window).height()){
					$('body,html').animate({scrollTop:st+450},300);
				}
			} else if($(window).height() < 540 && $(window).height() > 189 && search_bar == 461){
				if ($(window).height() - 461 < 308 && $(window).height() > 260 && st != 454){
					$('body,html').animate({scrollTop:450},300);
				}
			}
		}
		$('.kerword_box a').click(function(){
				var val= $(this).html();
				$('.kw_input').val(val);
				getHidebox().hide();	
		});	
		$('.word_slide a').click(function(){
				var val= $(this).find(".cityname").html();
				$('.kw_input').val(val);
				getHidebox().hide();	
		});	
	}).blur(function(){
		//$(this).next().show();
	});
	
	$(this).bind('input propertychange', function() {
    $('.word_slide').show();
	$('.kerword_box').hide();
});

	// 点击其他元素城市层消失
     $(document).bind('click',function(e){
           var target  = $(e.target);
			 if(target.closest(".kw .tipTxt").length == 0 && target.closest(".kw_input").length == 0 && target.closest(".kerword_box").length == 0){
			   $(".kerword_box").hide();
			   $('.word_slide').hide();
			 }
       });
	function inputTipText(){    
		$("input[class*=kw_input]").each(function(){  
		var valTxt = $(this).attr("title");
		var htm = "<label class='tipTxt'>" + valTxt +"</label>"
		$(this).after(htm);
		$(this).keyup(function(){
			if($(this).val()==""){
				getHidebox().show()
				$('.word_slide').hide();
				}else{
					getHidebox().hide();
					}
		});    
		if(values=""){
			getHidebox().hide();
			$('.word_slide').hide();
		}
	});  
	$(".kw .tipTxt").click(function(){
		$(this).hide().prev().focus();	
	});
	} 
	inputTipText();
	}