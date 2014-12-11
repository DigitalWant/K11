---
layout: page
title: 锦江
tagline: 高德地图API
---
{% include JB/setup %}

<div id="container"></div>
<style type="text/css">
html{height:100%}
body{height:100%;margin:0px;padding:0px}
#container{height:100%}
</style>
<script type="text/javascript"
src="http://webapi.amap.com/maps?v=1.3&key=yourkey">
</script>
<script type="text/javascript">
function initialize(){
  var position=new AMap.LngLat(116.397428,39.90923);
  var mapObj=new AMap.Map("container",{
  view: new AMap.View2D({//创建地图二维视口
  center:position,//创建中心点坐标
  zoom:14, //设置地图缩放级别
  rotation:0 //设置地图旋转角度
 }),
 lang:"zh_cn"//设置地图语言类型，默认：中文简体
});//创建地图实例
}
</script>