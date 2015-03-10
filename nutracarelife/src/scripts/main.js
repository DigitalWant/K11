require.config({
	paths: {
		jquery:              '../bower_components/jquery/jquery.min',
		bootstrapAffix:      '../bower_components/sass-bootstrap/js/affix',
		bootstrapAlert:      '../bower_components/sass-bootstrap/js/alert',
		bootstrapButton:     '../bower_components/sass-bootstrap/js/button',
		bootstrapCarousel:   '../bower_components/sass-bootstrap/js/carousel',
		bootstrapCollapse:   '../bower_components/sass-bootstrap/js/collapse',
		bootstrapDropdown:   '../bower_components/sass-bootstrap/js/dropdown',
		bootstrapModal:      '../bower_components/sass-bootstrap/js/modal',
		bootstrapPopover:    '../bower_components/sass-bootstrap/js/popover',
		bootstrapScrollspy:  '../bower_components/sass-bootstrap/js/scrollspy',
		bootstrapTab:        '../bower_components/sass-bootstrap/js/tab',
		bootstrapTooltip:    '../bower_components/sass-bootstrap/js/tooltip',
		bootstrapTransition: '../bower_components/sass-bootstrap/js/transition',
		enquire:             '../bower_components/enquire/dist/enquire',
		underscore:          '../bower_components/underscore-amd/underscore',
		isotope:             '../bower_components/isotope/jquery.isotope',
		jqueryui:            'jqueryui',
		async:               '../bower_components/requirejs-plugins/src/async',
	},
	shim: {
		bootstrapAffix: {
			deps: [
				'jquery'
			]
		},
		bootstrapAlert: {
			deps: [
				'jquery'
			]
		},
		bootstrapButton: {
			deps: [
				'jquery'
			]
		},
		bootstrapCarousel: {
			deps: [
				'jquery'
			]
		},
		bootstrapCollapse: {
			deps: [
				'jquery',
				'bootstrapTransition'
			]
		},
		bootstrapDropdown: {
			deps: [
				'jquery'
			]
		},
		bootstrapPopover: {
			deps: [
				'jquery'
			]
		},
		bootstrapScrollspy: {
			deps: [
				'jquery'
			]
		},
		bootstrapTab: {
			deps: [
				'jquery'
			]
		},
		bootstrapTooltip: {
			deps: [
				'jquery'
			]
		},
		bootstrapModal: {
			deps: [
				'jquery'
			]
		},
		bootstrapTransition: {
			deps: [
				'jquery'
			]
		}
	}
});

require(['jquery', 'AffixMenu', 'IsotopeShop', /* mike: removed 'SimpleMap',*/ 'AttachedNavbar', 'enquire', 'utils', 'bootstrapTransition', 'bootstrapCollapse', 'bootstrapAlert', 'bootstrapTab', 'bootstrapDropdown', 'bootstrapCarousel', 'bootstrapModal' ], function ($, AffixMenu, IsotopeShop, SimpleMap) {
	'use strict';

	/**
	 * Affix menu
	 */
	(function () {
		if ( $('.js--affix-menu').length > 0 ) {
			var sidebarMenu = new AffixMenu({
				menuElm:   '.js--affix-menu',
				footerElm: '.js--page-footer'
			});

			enquire.register('screen and (min-width: 768px)', {
				match: function() {
					sidebarMenu.init();
				},
				unmatch: function () {
					sidebarMenu.destroy();
				}
			});
		}
	})();

	/**
	 * Isotope Shop
	 */
	(function () {
		var shop = new IsotopeShop({
			priceSlider: $('.js--jqueryui-price-filter'),
			priceRange:  [0, 20],
			priceStep:   0.2
		});
	})();

	(function () {
		if ( $('.js--where-we-are').length < 1 ) {
			return;
		}
		var map = new SimpleMap( $('.js--where-we-are'), {
			latLng: $('.js--where-we-are').data( 'latlng' ),
			markers: $('.js--where-we-are').data( 'markers' ),
			// markersImg: 'images/favicon.png',
			zoom: $('.js--where-we-are').data( 'zoom' ),
			styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
		}).renderMap();
	})();

	/**
	 * calculator
	 */
	(function () {
var fieldName,type,minValue,maxValue,valueCurrent,name;

$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


		var $productList = $('#cal_productList');
		var $productListItems = $('a',$productList);
		var $productName = $('#cal_productName');
		var $productPrice = $('#cal_productPrice');
		var $action = $('#cal_action');
		var $priceBan = $('#cal_priceBan');
		var $productTins = $('#cal_tins');
		//var $cal_error = $('#cal_error'); 


		var algorithm = function(current_unit_price,umber_of_tins_per_month){
			var valueA= current_unit_price;
			var valueB =umber_of_tins_per_month;

			return Math.abs((valueA*valueB*12)-(valueB*199*12+200));
		}


		//put product name and value 
		$productListItems.on('click',function(e){
			e.preventDefault();
			var $thisItem = $(this);
			var thisPrice = $thisItem.attr('data-price');
			var thisName = $thisItem.text();
			$productName.val(thisName);
			$productPrice.val(thisPrice);
		})

		//$priceBan.hide();	
		//$cal_error.hide();
		
		//click button action
		$action.on('click',function(e){
			e.preventDefault();
			console.log('$productPrice.val()',$productPrice.val(),'$productTins.val()',$productTins.val());
			
			if ($productPrice.val()&&$productTins.val()){
				$priceBan.text("¥"+algorithm($productPrice.val(),$productTins.val()));
				//$priceBan.show();
				//$cal_error.hide();				
			} else {
				//$priceBan.hide();
				//$cal_error.show();
			}
		})


	})();

		/**
	 * club
	 */
	(function () {


		/**/
		 $('.join-club .icons a').on('click',function(e){
		 		$('.join-club .icons a').removeClass('active');

		 		$(this).addClass('active');

		 		
              $('.benefits-content .benefits-item').removeClass('in').addClass('collapse');
              
              // You can also add preventDefault to remove the anchor behavior that makes
              // the page jump
              // e.preventDefault();
         });

	})();


});