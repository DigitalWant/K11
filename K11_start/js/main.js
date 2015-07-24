var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    Windows2: function() {
        return navigator.userAgent.match(/Windows Phone/i) ? true : false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows() || isMobile.Windows2());
    }
};
var playEnd = false;
var pageIndex = 1;
var pageHeight;
var audioFlag = true;
var timeout;
// var myAudio = new Audio();
// myAudio.setAttribute('src', 'bgMusic.mp3');
// myAudio.volume = 1;
// myAudio.autoplay = true;
// myAudio.loop = true;
var libNameArr = ["startup", "step5"];
var libAll = {};
var curLibindex = 0;
var curName;
var curLibName;
var curLibRoot;
/*past and future */
var canvas, stage, exportRoot;
var startY, endY;


function loadLib(id) {
    curLibindex = id;
    curName = libNameArr[id];
    curLibName = "lib_" + curName;
    curLibRoot = "js/" + libNameArr[id] + ".js";

    var loaderLib = new createjs.LoadQueue();

    loaderLib.addEventListener("fileload", handleJsComplete);
    loaderLib.addEventListener("progress", handleProgress);
    loaderLib.loadFile(curLibRoot);

    $(".loading").fadeIn();
    $(".progress").fadeIn();

}

function init() {

    canvas = document.getElementById("canvas");

    images = images || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);

    loader.loadManifest(lib_startup.properties.manifest);
}

function handleJsComplete() {
    canvas = document.getElementById("canvas2");

    images = images || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleJsLibComplete);
    loader.addEventListener("progress", handleProgress);

    // if ($(".p1").size() > 0) {
    loader.loadManifest(window[curLibName].properties.manifest);
}
function handleJsLibComplete(){
    exportRoot = new window[curLibName][curName]();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(window[curLibName].properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    $(".loading").fadeOut();
    $(".progress").fadeOut();
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete() {
    exportRoot = new lib_startup.startup();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib_startup.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    $(".loading").fadeOut();
    $(".progress").fadeOut();

}

function handleProgress(event) {
    var loaded = Math.floor(event.loaded * 100);
    $(".progress").text(loaded + "%");
    //console.log(loaded);

}


function touchstart(event) {
    event.preventDefault();
    var touch = event.touches[0];
    endY = startY = touch.pageY;
}

function touchmove(event) {
    event.preventDefault();
    var touch = event.touches[0];
    endY = touch.pageY;
}

function touchend(event) {
    // var distance = startY - endY;
    // if (distance > 30) {
    //     if (playEnd) {
    //         if (pageIndex < 4) {
    //             pageIndex++;
    //             update(pageIndex);
    //         }
    //     }
    // } else if (distance < -30) {

    //     if ($(".intro").css("display") == "block") {
    //         if (pageIndex == 1) {
    //             //$(".intro").fadeOut();
    //             //init();
    //         }
    //     }

    //     if (pageIndex > 1) {
    //         pageIndex--;
    //         //update(pageIndex);
    //     }

    // }
}

function switchSceen(elem, className, playAnimId) {
    $(className).show();
    $(elem).parents('.step').hide();
    //console.log($(elem).parents('.step'));
    playAnimId && loadLib(playAnimId);
    console.log(playAnimId)

}
$(document).ready(function(e) {
    var steps = $(".step");

    //$(".wrapper")[0].addEventListener('touchstart', touchstart, false);
    $(".wrapper")[0].addEventListener('touchmove', touchmove, false);
    $(".wrapper")[0].addEventListener('touchend', touchend, false);

    $(".music_btn").click(function() {
        if (audioFlag) {
            myAudio.pause();
            $(".music_btn").attr("src", "images/bo.png");
        } else if (!audioFlag) {
            myAudio.play();
            $(".music_btn").attr("src", "images/ting.png");
        }

        audioFlag = !audioFlag;
    });


    /**/
    $(".share").on("click", function() {
        //alert('share');
        $(".p1,.p2,.p3,.p4,.p5,.p6,.p7,.brand").hide();

    });


    if ($(".p3").size() > 0) {


        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }

})
