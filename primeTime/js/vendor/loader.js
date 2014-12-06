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

$.imgpreload(imgSrc,
{
    each: function()
    {
    	currentStatus++

		$(".loading i.progress").text(Math.round(currentStatus/imgSrc.length*100));
		//console.log(currentStatus/imgSrc.length)
        // callback invoked when each image is loaded
        // this = dom image object
        // check for success with: $(this).data('loaded')
        //currentStatus = currentStatus/imgSrc.length++
    },
    all: function()
    {

		$(".loading .loading-text").html("<p class='brandBgGold text-center'>点击展开我们的旅程！</p>");
		$(".loading").remove();



    		$("#audio").on('click touchmove touchstart touchend',function(){

    			if ($(this).hasClass('open') == true){
    			
    				media.audio_stop();
					$(this).removeClass('open').addClass('close');

    			}else{
    				media.audio_play();
					$(this).removeClass('close').addClass('open')
    			}

    		});
    		$('.loading').on('click touchmove touchstart touchend',function(){
    			$(this).fadeOut().queue(function(){
    				$('.loading').remove();
    			});


    			if (musicPlayFlag!=true){
            		media.audio_play();
			     	musicPlayFlag = true;
			    }
    		});
			new WOW().init();






			//if the first screen 
		if (pageYOffset==0){

				//console.log('complete..');
	    	setTimeout(function(){
			d3.select(window)
				  .on("resize", resized)
				  .on("touchstart", touchstarted)
				  .on("touchmove", touchmoved)
				  .on("touchend", touchended);

				  $('.icon-chevron-down:eq(0)').show();

	    	},12000);


		} else {
			d3.select(window)
				  .on("resize", resized)
				  .on("touchstart", touchstarted)
				  .on("touchmove", touchmoved)
				  .on("touchend", touchended);
				  $('.icon-chevron-down:eq(0)').show();

		}
		//if reach the last screen

		if (pageYOffset==pageYMax) {
			 firstBoatIn==false;

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