
// Pagecreate will fire for each of the pages in this demo
// but we only need to bind once so we use "one()"
$( document ).one( "pagecreate", ".page", function() {
 
   // Initialize the external persistent header and footer
    $( "#header" ).toolbar({ theme: "b" });
    $( "#footer" ).toolbar({ theme: "b" });
    // Handler for navigating to the next page
    function navnext( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "#"+ next , {
            transition: "slide"
        });
    }
    // Handler for navigating to the previous page
    function navprev( prev ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "#"+ prev, {
            transition: "slide",
            reverse: true
        });
    }
    // Navigate to the next page on swipeleft
    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Get the filename of the next page. We stored that in the data-next
        // attribute in the original markup.
        var next = $( this ).jqmData( "next" );
        // Check if there is a next page and
        // swipes may also happen when the user highlights text, so ignore those.
        // We're only interested in swipes on the page.
        if ( next && ( event.target === $( this )[ 0 ] ) ) {
            navnext( next );
        }
    });
    // Navigate to the next page when the "next" button in the footer is clicked
    $( document ).on( "click", ".next", function() {
        var next = $( ".ui-page-active" ).jqmData( "next" );
        // Check if there is a next page
        if ( next ) {
            navnext( next );
        }
    });
    // The same for the navigating to the previous page
    $( document ).on( "swiperight", ".ui-page", function( event ) {


        var prev = $( this ).jqmData( "prev" );
        if ( prev && ( event.target === $( this )[ 0 ] ) ) {
            navprev( prev );
        }
    });
    $( document ).on( "click", ".prev", function() {
        var prev = $( ".ui-page-active" ).jqmData( "prev" );
        if ( prev ) {
            navprev( prev );
        }
    });


});



$( document ).on( "pageshow", ".page", function() {
    var thePage = $( this ),
        title = thePage.jqmData( "title" ),
        next = thePage.jqmData( "next" ),
        prev = thePage.jqmData( "prev" );
    // Point the "Trivia" button to the popup for the current page.
    $( "#trivia-button" ).attr( "href", "#" + thePage.find( ".trivia" ).attr( "id" ) );
    // We use the same header on each page
    // so we have to update the title
    $( "#header h1" ).text( title );
    // Prefetch the next page
    // We added data-dom-cache="true" to the page so it won't be deleted
    // so there is no need to prefetch it
    if ( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "load", "#"+next );
    }
    // We disable the next or previous buttons in the footer
    // if there is no next or previous page
    // We use the same footer on each page
    // so first we remove the disabled class if it is there
    $( ".next.ui-state-disabled, .prev.ui-state-disabled" ).removeClass( "ui-state-disabled" );
    if ( ! next ) {
        $( ".next" ).addClass( "ui-state-disabled" );
    }
    if ( ! prev ) {
        $( ".prev" ).addClass( "ui-state-disabled" );
    }
});


/*Lottery */
var lotteryOpen = false;
var viewPointWidth = $(window).width();
var viewPointHeight = $(window).height();

function Lottery(id, cover, coverType, width, height, drawPercentCallback) {
    this.conId = id;
    this.conNode = document.getElementById(this.conId);
    this.cover = cover || '#CCC';
    this.coverType = coverType || 'color';
    this.background = null;
    this.backCtx = null;
    this.mask = null;
    this.maskCtx = null;
    this.lottery = null;
    this.lotteryType = 'image';
    this.width = width || 300;
    this.height = height || 100;
    this.clientRect = null;
    this.drawPercentCallback = drawPercentCallback;

}

Lottery.prototype = {
    createElement: function (tagName, attributes) {
        var ele = document.createElement(tagName);
        for (var key in attributes) {
            ele.setAttribute(key, attributes[key]);
        }
        return ele;
    },
    getTransparentPercent: function (ctx, width, height) {
        var imgData = ctx.getImageData(0, 0, width, height),
            pixles = imgData.data,
            transPixs = [];
        for (var i = 0, j = pixles.length; i < j; i += 4) {
            var a = pixles[i + 3];
            if (a < 128) {
                transPixs.push(i);
            }
        }
        return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
    },
    resizeCanvas: function (canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').clearRect(0, 0, width, height);
    },
    drawPoint: function (x, y) {
        this.maskCtx.beginPath();
        var radgrad = this.maskCtx.createRadialGradient(x, y, 0, x, y, 30);
        radgrad.addColorStop(0, 'rgba(0,0,0,0.6)');
        radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.maskCtx.fillStyle = radgrad;
        this.maskCtx.arc(x, y, 30, 0, Math.PI * 2, true);
        this.maskCtx.fill();
        /* for better performance bind chk event into mouseup event
        if (this.drawPercentCallback) {
            this.drawPercentCallback.call(null, this.getTransparentPercent(this.maskCtx, viewPointWidth, viewPointHeight));
        }*/
    },
    bindEvent: function () {
        var _this = this;
        var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        var clickEvtName = device ? 'touchstart' : 'mousedown';
        var moveEvtName = device ? 'touchmove' : 'mousemove';
        var clickEveNameUp = device ? 'touchend' : 'mouseup';

        if (!device) {
            var isMouseDown = false;
            document.addEventListener('mouseup', function (e) {
                isMouseDown = false;
            }, false);
        } else {
            document.addEventListener("touchmove", function (e) {
                if (isMouseDown) {
                    e.preventDefault();
                }
            }, false);
            document.addEventListener('touchend', function (e) {
                isMouseDown = false;
            }, false);
        }
        this.mask.addEventListener(clickEvtName, function (e) {
            isMouseDown = true;
            var docEle = document.documentElement;
            if (!_this.clientRect) {
                _this.clientRect = {
                    left: 0,
                    top: 0
                };
            }
            var x = (device ? e.touches[0].clientX : e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
            var y = (device ? e.touches[0].clientY : e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
            _this.drawPoint(x, y);
        }, false);

        this.mask.addEventListener(moveEvtName, function (e) {
            if (!device && !isMouseDown) {
                return false;
            }
            var docEle = document.documentElement;
            if (!_this.clientRect) {
                _this.clientRect = {
                    left: 0,
                    top: 0
                };
            }
            var x = (device ? e.touches[0].clientX : e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
            var y = (device ? e.touches[0].clientY : e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
            _this.drawPoint(x, y);
        }, false);

        this.mask.addEventListener(clickEveNameUp, function (e) {
            if (!device && !isMouseDown) {
                return false;
            }

            if (_this.drawPercentCallback) {
                _this.drawPercentCallback.call(null, _this.getTransparentPercent(_this.maskCtx, viewPointWidth, viewPointHeight));
            }
        });

    },
    drawLottery: function () {
        this.background = this.background || this.createElement('canvas', {
            style: 'position:absolute;left:0;top:0;'
        });
        this.mask = this.mask || this.createElement('canvas', {
            style: 'position:absolute;left:0;top:0;'
        });

        if (!this.conNode.innerHTML.replace(/[\w\W]| /g, '')) {
            this.conNode.appendChild(this.background);
            this.conNode.appendChild(this.mask);
            this.clientRect = this.conNode ? this.conNode.getBoundingClientRect() : null;
            this.bindEvent();
        }

        this.backCtx = this.backCtx || this.background.getContext('2d');
        this.maskCtx = this.maskCtx || this.mask.getContext('2d');

        if (this.lotteryType == 'image') {
            var image = new Image(),
                _this = this;
            image.onload = function () {
                _this.width = this.width;
                _this.height = this.height;
                _this.resizeCanvas(_this.background, this.width, this.height);
                _this.backCtx.drawImage(this, 0, 0, viewPointWidth, viewPointHeight);
                _this.drawMask();
            }
            image.src = this.lottery;
        } else if (this.lotteryType == 'text') {
            this.width = this.width;
            this.height = this.height;
            this.resizeCanvas(this.background, this.width, this.height);
            this.backCtx.save();
            this.backCtx.fillStyle = '#FFF';
            this.backCtx.fillRect(0, 0, this.width, this.height);
            this.backCtx.restore();
            this.backCtx.save();
            var fontSize = 30;
            this.backCtx.font = 'Bold ' + fontSize + 'px Arial';
            this.backCtx.textAlign = 'center';
            this.backCtx.fillStyle = '#F60';
            this.backCtx.fillText(this.lottery, this.width / 2, this.height / 2 + fontSize / 2);
            this.backCtx.restore();
            this.drawMask();
        }
    },
    drawMask: function () {
        this.resizeCanvas(this.mask, this.width, this.height);
        if (this.coverType == 'color') {
            this.maskCtx.fillStyle = this.cover;
            this.maskCtx.fillRect(0, 0, this.width, this.height);
            this.maskCtx.globalCompositeOperation = 'destination-out';
        } else if (this.coverType == 'image') {
            var image = new Image(),
                _this = this;
            image.onload = function () {
                _this.maskCtx.drawImage(this, 0, 0, viewPointWidth, viewPointHeight);
                _this.maskCtx.globalCompositeOperation = 'destination-out';
            }
            image.src = this.cover;
        }
    },
    init: function (lottery, lotteryType) {
        this.lottery = lottery;
        this.lotteryType = lotteryType || 'image';
        this.drawLottery();
    }
}

lotteryCard = function () {

     var lottery = new Lottery('lotteryContainer', 'img/lotteryCover.jpg', 'image', $(window).width(), $(window).height(), drawPercent);
    //var lottery = new Lottery('lotteryContainer', '#ccc', 'color', $(window).width(), $(window).height(), drawPercent);
    var rewardId = $("#hdnAwardId").val();

    lottery.init('img/' + rewardId+'.jpg', 'image');

    //var drawPercentNode = document.getElementById('drawPercent');

    function drawPercent(percent) {
        console.log(percent);
        //drawPercentNode.innerHTML = percent + '%';
        if (percent > 10 && lotteryOpen == false) {
            $(".lotteryBtn").show();
                lotteryOpen = true;
           }
    }
}

/* page events*/
$(document).on("pageshow", "#lottery", function () {

    if (lotteryOpen == false) {
        lotteryCard();
    }
    $('body').addClass('lotteryPage');

});

$(document).on("pagehide", "#lottery", function () {
    $('body').removeClass('lotteryPage');

});

$(document).on("pageshow", "#start,#tips", function () {

    $('body').addClass('startPage');

});

$(document).on("pagehide", "#start,#tips", function () {
    $('body').removeClass('startPage');

});
