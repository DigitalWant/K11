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
var libNameArr = ["startup"];
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

    loaderLib.addEventListener("fileload", init);
    loaderLib.addEventListener("progress", handleProgress);
    loaderLib.loadFile(curLibRoot);
    hideBrand();
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

    loader.loadManifest(window[curLibName].properties.manifest);
}


function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete() {
    exportRoot = new window[curLibName][curName]();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(window[curLibName].properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    $(".loading").fadeOut();
    $(".progress").fadeOut();
    //myAudio.play();

    if (curName == "start") {
        $("body").addClass("start");
    } else {
        $("body").removeClass("start");

    }

}

function handleProgress(event) {
    var loaded = Math.floor(event.loaded * 100);
    $(".progress").html(loaded);
    //console.log(loaded);

}

function listBrandE() {
    $(".p1").hide();
    $(".p2").show();
    setTimeout(function() {
        listBrand();
    }, 3000)
}

function listBrand() {
    $(".p1").hide();
    $(".p2").hide();
    $(".box").show();
    $("body").addClass("listBrand");
    $("body").removeClass("start");

    setTimeout(function() {
        $(".a2,.a4,.a6,.a8").addClass("num");
    }, 700);
    setTimeout(function() {
        $(".a5").addClass("num");
    }, 100);

    setTimeout(function() {
        $(".a1,.a3,.a7,.a9").addClass("num");
    }, 1400);
    var sh = $(window).height();
    var sw = $(window).width();
    var sl = sh / 1136;
    $(".box").css({
        "-webkit-transform": "scale(" + sl + "," + sl + ")",
        "-webkit-transform-origin": "center top"
    });

    location.hash = "";
    $('.next').unbind("click touchstart");
    $('.prev').unbind("click touchstart");

    exportRoot = {};
}

function hideBrand() {
    $("body").removeClass("listBrand");

    $(".box .num").removeClass('num');
    $(".p1").show();
    $(".box").hide();
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
    var distance = startY - endY;
    if (distance > 30) {
        if (playEnd) {
            if (pageIndex < 4) {
                pageIndex++;
                update(pageIndex);
            }
        }
    } else if (distance < -30) {

        if ($(".intro").css("display") == "block") {
            if (pageIndex == 1) {
                //$(".intro").fadeOut();
                //init();
            }
        }

        if (pageIndex > 1) {
            pageIndex--;
            //update(pageIndex);
        }

    }
}

$(document).ready(function(e) {



   // $(".wrapper")[0].addEventListener('touchstart', touchstart, false);
    $(".wrapper")[0].addEventListener('touchmove', touchmove, false);
    //$(".wrapper")[0].addEventListener('touchend', touchend, false);

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

    $(".box>div").each(function(i) {
        $(this).on("click touchstart", function() {
            loadLib(i + 1);
            location.hash = "clip" + (i + 1);

        })
    });

    $(".skip").on('click touchstart', function() {

        stage.removeChild(exportRoot);
        exportRoot = {};
        listBrand();

    });

    /*
    $(".next").on('click touchstart',function(){
         console.log(exportRoot);


    });
    $(".prev").on('click touchstart',function(){

     
    });
    $(window).on('hashchange', function() {
        //.. work ..
        if (location.hash == "") {
            //alert("listPage");
            stage.removeChild(exportRoot);
            exportRoot = {};
            listBrand();
        }

    });*/



})
