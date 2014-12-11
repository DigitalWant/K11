---
layout: page
title: 锦江
tagline: 高德地图API
---
{% include JB/setup %}
<div class="row">
  <div class="col-md-6 col-md-offset-3"><div id="map" style="height:500px;"></div></div>
</div>



<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=6669421058d71f9bf8983a89cd11f5b8"></script>
<script type="text/javascript">
function initialize(){
  var position=new AMap.LngLat(116.397428,39.90923);
  var mapObj=new AMap.Map("map",{
  view: new AMap.View2D({//创建地图二维视口
  center:position,//创建中心点坐标
  zoom:14, //设置地图缩放级别
  rotation:0 //设置地图旋转角度
 }),
 lang:"zh_cn"//设置地图语言类型，默认：中文简体
});//创建地图实例
}
initialize();
</script>