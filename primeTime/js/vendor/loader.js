var imgSrc = [

'./img/ceo.jpg',
'./img/cover-1.png',
'./img/cover-2.png',
'./img/cover-3.png',
'./img/cover-4.png',
'./img/cover-5.png',
'./img/cover-6.png',
'./img/ceo.jpg',
'./img/staff1.png',
'./img/staff2.png',
'./img/staff3.png',
'./img/staff4.png',
'./img/staff5.png',
'./img/store0.jpg',
'./img/store1-1.png',
'./img/store1-2.png',
'./img/store1-3.png',
'./img/store1-4.png',
'./img/store2-1.png',
'./img/store2-2.png',
'./img/store2-3.png',
'./img/store3-1.png',
'./img/store3-2.png',
'./img/store3-3.png',
'./img/store3-4.png',
'./img/store4-1.png',
'./img/store4-2.png',
'./img/store4-3.png',
'./img/store5-1.png',
'./img/store5-2.png',
'./img/store5-3.png',
'./img/store5-4.png',
'./img/repair0.png',
'./img/repair00.png',
'./img/repair1.png',
'./img/repair2.png',
'./img/repair3.png',
'./img/repair4.png',
'./img/repair5.png',
'./img/tip.jpg'
]
var currentStatus = 0;

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



    	
    	//$(".pages").removeClass('invisible');
    	//TODO:add fadeout effect
    	//$(".loading").addClass('animated fadeOut');



        // callback invoked when all images have loaded
        // this = array of dom image objects
        // check for success with: $(this[i]).data('loaded')

    }
});