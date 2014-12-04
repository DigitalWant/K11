var imgSrc = [

'./img/ceo.jpg',
'./img/cover-1.png',
'./img/cover-2.png',
'./img/cover-3.png',
'./img/cover-4.png',
'./img/cover-5.png',
'./img/cover-6.png',
'./img/ceo.jpg',
'./img/staff1-1.png',
'./img/staff1-2.png',
'./img/staff1-3.png',
'./img/staff2-1.png',
'./img/staff2-2.png',
'./img/staff2-3.png',
'./img/store1-1.png',
'./img/store1-2.png',
'./img/store1-3.png',
'./img/store1-4.png',
'./img/store1-5.png',
'./img/store2-1.png',
'./img/store2-2.png',
'./img/store2-3.png',
'./img/store2-4.png',
'./img/store2-5.png',
'./img/store2-6.png',
'./img/store2-7.png',
'./img/store2-8.png',
'./img/store3-1.png',
'./img/store3-2.png',
'./img/store3-3.png',
'./img/repair0.png',
'./img/repair00.png',
'./img/repair1.png',
'./img/repair2.png',
'./img/repair3.png',
'./img/repair4.png',
'./img/repair5.png',
'./img/tip.jpg',
'./img/boat.png'

]
var currentStatus = 0;

var player = {



  _audioNode    : $('.u-audio'),            // 声音模块
  _audio      : null,                 // 声音对象
  _audio_val    : true,                 // 声音是否开启控制

  audio_init : function(){
    // media资源的加载
    var options_audio = {
      loop: true,
            preload: "auto",
            src: player._audioNode.attr('data-src')
    }
    
        player._audio = new Audio(); 

        for(var key in options_audio){
            if(options_audio.hasOwnProperty(key) && (key in player._audio)){
                player._audio[key] = options_audio[key];
            }
        }
        player._audio.load();
  },

 

  // 声音控制函数
  audio_contorl : function(){
    if(!player._audio_val){
      player.audio_stop();
    }else{
      player.audio_play();
    }
  },  

  // 声音播放
  audio_play : function(){
    player._audio_val = false;
    if(player._audio) player._audio.play();
  },

  // 声音停止
  audio_stop  : function(){
    player._audio_val = true;
    if(player._audio) player._audio.pause(); 
  },

  
};
// media初始化
player.audio_init();


$.imgpreload(imgSrc,
{
    each: function()
    {
    	currentStatus++

		$("progress").val(currentStatus/imgSrc.length);
		//console.log(currentStatus/imgSrc.length)
        // callback invoked when each image is loaded
        // this = dom image object
        // check for success with: $(this).data('loaded')
        //currentStatus = currentStatus/imgSrc.length++
    },
    all: function()
    {
player.audio_contorl();
			$(".loading").fadeOut();
			new WOW().init();
		if (pageYOffset==0){

				//console.log('complete..');
	    	setTimeout(function(){
			d3.select(window)
				  .on("resize", resized)
				  .on("touchstart", touchstarted)
				  .on("touchmove", touchmoved)
				  .on("touchend", touchended);

				  $('.icon-chevron-down:eq(0)').show();

	    	},13000);


		} else {
			d3.select(window)
				  .on("resize", resized)
				  .on("touchstart", touchstarted)
				  .on("touchmove", touchmoved)
				  .on("touchend", touchended);
				  $('.icon-chevron-down:eq(0)').show();

		}

		if (pageYOffset==pageYMax) {

			 $("#boat").fadeIn().addClass('animated slideInLeft');
		}

    	
    	//$(".pages").removeClass('invisible');
    	//TODO:add fadeout effect
    	//$(".loading").addClass('animated fadeOut');



        // callback invoked when all images have loaded
        // this = array of dom image objects
        // check for success with: $(this[i]).data('loaded')

    }
});