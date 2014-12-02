var imgSrc = [
'./img/bgSkyBegin.jpg',
'./img/bgSkyEnd.jpg',
'./img/brandRow1.jpg',
'./img/brandRow2.jpg',
'./img/brandRow3.jpg',
'./img/brandRow4.jpg',
'./img/brandRow5.jpg',
'./img/brandRow6.jpg',
'./img/ceo.jpg',
'./img/staff1.png',
'./img/staff2.png',
'./img/staff3.png',
'./img/staff4.png',
'./img/staff5.png',
'./img/store1.jpg',
'./img/store2.jpg',
'./img/store3.jpg',
'./img/store4.jpg',
'./img/store5.jpg',
'./img/store6.jpg',
'./img/store7.jpg',
'./img/store8.jpg',
'./img/store9.jpg',
'./img/store10.jpg',
'./img/store11.jpg',
'./img/store12.jpg',
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
    	//console.log('complete..');


    	
    	$(".pages").removeClass('invisible');
    	//TODO:add fadeout effect
    	$(".loading").addClass('animated fadeOut');



        // callback invoked when all images have loaded
        // this = array of dom image objects
        // check for success with: $(this[i]).data('loaded')

    }
});