$(function(){
	navigation();
	
	//³õÊ¼»¯Ê±£¬Ìí¼ÓµØÍ¼¿ò¡¢ËÑË÷¿ò¿í¶È	 
	$(".base_main").width($(window).width() - 360 - 3);//360pxÎªÓÒ±ß¹Ì¶¨¿ò¿í¶È;3pxÎªborder¿í¶È	
	$(".back_list_mode").css( "left", $(window).width() - 360 - 2 - 97);//2pxÎªborder¿í¶È£¬97Îª°´Å¥¿í¶È
	$('.top_search_box').width($(window).width() - 40);
	
	//ä¯ÀÀÆ÷´óÐ¡±ä»¯Ê±£¬ÐÞ¸ÄµØÍ¼¿ò¡¢ËÑË÷¿ò¿í¶È
	$(window).resize(function(){
		$(".base_main").width($(window).width() - 360 - 3);//360pxÎªÓÒ±ß¹Ì¶¨¿ò¿í¶È;3pxÎªborder¿í¶È
		$(".back_list_mode").css( "left", $(window).width() - 360 - 2 - 97);//2pxÎªborder¿í¶È£¬97Îª°´Å¥¿í¶È
		$('.top_search_box').width($(window).width() - 40);
	});
	
	//¾ÆµêlistµÄhoverÑùÊ½
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
	
	//µØÍ¼¾Æµê¿òµÄhoverÑùÊ½
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
	
	//µ¯³ö¿ò¼ýÍ·hover
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
	
	//¹Ø¼ü×ÖÌáÊ¾Ð§¹û
	$('.kw_input').citySelect({});

	//³ÇÊÐÑ¡ÔñÆ÷
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
	
	//checkboxÃÀ»¯
	$(".check_list").hcheckbox();
	
	//¹ö¶¯Ðü¸¡
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
	
	//ÈÕÀúÐ§¹û
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
/*======================高德地图API===================================*/

//自定义插件
AMap.homeControlDiv = function(){};
AMap.homeControlDiv.prototype = {
	addTo:function(map,dom){
		dom.appendChild(this._getHtmlDom(map));
	},
	_getHtmlDom:function(map){

 	 this.map=map; 
                
     // 创建一个能承载控件的<div>容器               
     var controlUI=document.createElement("DIV");               

	     controlUI.id = 'return';          
               
     // 设置控件响应点击onclick事件               
     controlUI.onclick=function(){               
        map.setCenter(new AMap.LngLat(116.404, 39.915));               
     }  

     return controlUI; 		  			
	}

}

//elements
var $search = $('#search');
var map = new AMap.Map('mapDiv', {view:new AMap.View2D({center: new AMap.LngLat(116.39, 39.9),zoom:15})});
var mapObj;  
var marker = new Array();  
var windowsArr = new Array();
var cloudDataLayer;
var MSearch;  




//点击触发内容：常用地域列表和所有城市列表框
$search.on('focus',function(){
	console.log('test');
});

//输入文本：弹出模糊地域下拉列表
$search.on('keypress',function(e){
   clearTimeout($.data(this, 'timer'));
    if (e.keyCode == 13)
      search(true);
    else
      $(this).data('timer', setTimeout(search, 500));
});



function autocomplete_CallBack(data) {
    var tipArr  = data.tips;
    var outputHtml ="";

    if (data.info == "OK") {  
    	for (var i = 0; i < tipArr.length; i++) {  
    		outputHtml += "<div id='divid" + (i + 1) + "' onmouseover='openMarkerTipById(" + (i + 1)  
                        + ",this)' onclick='selectResult(" + i + ")' onmouseout='onmouseout_MarkerStyle(" + (i + 1)  
                        + ",this)' style=\"font-size: 13px;cursor:pointer;padding:5px 5px 5px 5px;\">" + tipArr[i].name + "<span style='color:#C1C1C1;'>"+ tipArr[i].district + "</span></div>"
    	}

    } 

    if (data.info == "NO_DATA"){

    	outputHtml ="sorry, not find .";
    }                 

    $('#autoComplete').html(outputHtml);
}  

//输入提示  
function search(force) {
    var existingString = $search.val();
    if (!force && existingString.length < 3) return; //wasn't enter, not > 2 char
	var searchCity = new AMap.Autocomplete();
	AMap.event.addListener(searchCity, "complete", autocomplete_CallBack);  
	searchCity.search(existingString); 
}


map.plugin([
		"AMap.ToolBar",
		"AMap.OverView",
		"AMap.Scale",
		"AMap.CitySearch",
		"AMap.Autocomplete"
	],
	function(){
		  //加载工具条
		  tool = new AMap.ToolBar({
		    direction:true,//隐藏方向导航
		    ruler:true,//隐藏视野级别控制尺
		    autoPosition:true//禁止自动定位
		  });
		map.addControl(tool);


		//加载鹰眼
		view = new AMap.OverView();
		map.addControl(view);


		//加载比例尺
		scale = new AMap.Scale();
		map.addControl(scale);


		//bind event on elements

		map.addControl(homeControl);




});


//获取用户所在城市信息
function showCityInfo() { 
	//加载城市查询插件
		//实例化城市查询类
		var citysearch = new AMap.CitySearch();
		//自动获取用户IP，返回当前城市
		citysearch.getLocalCity();
		//citysearch.getCityByIp("123.125.114.*");
		AMap.event.addListener(citysearch, "complete", function(result){
			if(result && result.city && result.bounds) {
				var cityinfo = result.city;
				var citybounds = result.bounds;
				document.getElementById('info').innerHTML = "您当前所在城市："+cityinfo+"";
				//地图显示当前城市
				mapObj.setBounds(citybounds);
			}
			else {
				document.getElementById('info').innerHTML = "您当前所在城市："+result.info+"";
			}
		});
		AMap.event.addListener(citysearch, "error", function(result){alert(result.info);});
}
