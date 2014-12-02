var body = d3.select("body"),
    height,
    clientY0,
    pageY0,
    pageYMin = 0,
    pageYMax,
    dragSamples,
    wowEl = $('.wow'),
    firstAppear=true;
    //touching = false;
 var playState = '-webkit-animation-play-state';
 var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var iconRow = $('.iconRow');


var page = d3.selectAll(".page");
var article = d3.selectAll(".article");
var $pageContent = $('.content');
$(".content").append("<i class='icon-chevron-down brandGold'></i>");
var allAnimateItems= $('.icon-chevron-down,.iconRow,.wow');




// iOS reports the wrong innerHeight on load!
d3.timer(function() {
  resized();
  return true;

});

window.addEventListener("resize", showTips, true);
showTips();

function resized() {
  var height0 = height;
  height = innerHeight;

  page.style("height", height + "px");
  //article.style("margin-top",-innerHeight/2 +"px").style("margin-left",-innerWidth/2 +"px");
  body.style("font", (height * .4) + "px/" + (height * .9) + "px sans-serif");
  pageYMax = (page.size() - 1) * height;
  if (height0) scrollTo(0, Math.max(0, Math.min(page.size() - 1, Math.round(pageYOffset / height0))) * height);
  //alert('resized');
    d3.select(window)
      .on("resize", resized)
      .on("touchstart", touchstarted)
      .on("touchmove", touchmoved)
      .on("touchend", touchended);

}

function touchstarted() {
   
  allAnimateItems.css(playState,'paused'); 
  dragSamples = [];
  clientY0 = d3.event.changedTouches[0].clientY;
  pageY0 = pageYOffset;
  d3.event.preventDefault();
  body.interrupt();
   //console.log('touchstarted');
    //touching=true;


      
    //$('body').toggleClass('paused', $(this).css(playState) === 'paused'); 
}

function touchmoved() {
  var clientY1 = d3.event.changedTouches[0].clientY,
      pageY1 = pageY0 + clientY0 - clientY1;
  if (pageY1 < pageYMin) {
    console.log('1');
    if (pageYOffset > pageYMin) scrollTo(0, pageYMin);

    body.style("-webkit-transform", "translate3d(0," + -(pageY1 - pageYMin) / 3 + "px,0)");
  } else if (pageY1 > pageYMax) {

        console.log('2');

    if (pageYOffset < pageYMax) scrollTo(0, pageYMax);
    body.style("-webkit-transform", "translate3d(0," + -(pageY1 - pageYMax) / 3 + "px,0)");
  } else {
        console.log('3');

    scrollTo(0, pageY1);
  }
  if (dragSamples.push({y: pageY1, t: Date.now()}) > 8) dragSamples.shift();

  //console.log('touchmoved');
  //touching==true;
}

function touchended() {
    //allAnimateItems.css(playState,'running'); 

      var s0 = dragSamples.shift(),
      s1 = dragSamples.pop(),
      t1 = Date.now(),
      y = pageYOffset;


  while (s0 && (t1 - s0.t > 350)) s0 = dragSamples.shift();

  if (s0 && s1) {
    var vy = (s1.y - s0.y) / (s1.t - s0.t);
    if (vy > .5) y = Math.ceil(y / height) * height;
    else if (vy < -.5) y = Math.floor(y / height) * height;

    
  }

  y = Math.max(0, Math.min(page.size() - 1, Math.round(y / height))) * height;

  body.transition()
      .duration(500)
      .ease("cubic-out")
      .styleTween("-webkit-transform", function() {
        if (s1) {
          var i;
          if (s1.y < pageYMin) i = d3.interpolateNumber(-(s1.y - pageYMin) / 3, 0);
          if (s1.y > pageYMax) i = d3.interpolateNumber(-(s1.y - pageYMax) / 3, 0);
          return i && function(t) { return "translate3d(0," + i(t) + "px,0)"; };
        }
      })
      .tween("scroll", function() {
        var i = d3.interpolateNumber(pageYOffset, y);
        return function(t) { 
          var index = i(t)/height;

          scrollTo(0, i(t)); 
          //console.log(index);
            //when it stable
              if (t==1 ){
                allAnimateItems.css(playState,"running");

            }
          
        };
      });
      //touching =false;
      //console.log('//touching end');
}


function checkCurentPage(index){

  console.log(index);

}

function showTips() {
    if ($(window).width() <= $(window).height()) {
        $("body").removeClass('landscape');
        $(".pages").show();

    } else {

        $("body").addClass('landscape');
        $(".pages").hide();
            window.addEventListener('touchmove', function(e) {
              e.preventDefault();
            }, false);


    }
}

//onscreen test 
/*
$('.content').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     // Do something to the matched elements as they come in
     console.log('doIn',dragSamples);
         new WOW().init();


   },
   doOut: function() {
    //wowEl.filter('.animated').removeClass('animated').removeAttr('style');
      //console.log('doOut')
     // Do something to the matched elements as they get off scren
    ////touching ==true && 


   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});
*/

