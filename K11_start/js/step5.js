(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 40,
	color: "#E2D2B8",
	manifest: [
		{src:"images/step5/bg.jpg", id:"bg"},
		{src:"images/step5/flower.png", id:"flower"},
		{src:"images/step5/heartChocolate.png", id:"heartChocolate"},
		{src:"images/step5/kissChocolate.png", id:"kissChocolate"},
		{src:"images/step5/lighting.png", id:"lighting"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1039);


(lib.flower = function() {
	this.initialize(img.flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,197);


(lib.heartChocolate = function() {
	this.initialize(img.heartChocolate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,193);


(lib.kissChocolate = function() {
	this.initialize(img.kissChocolate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,154);


(lib.lighting = function() {
	this.initialize(img.lighting);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,161);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.flower();
	this.instance.setTransform(-100.5,-98.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.5,-98.5,199,197);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heartChocolate();
	this.instance.setTransform(-99.5,-98.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.5,-98.5,199,193);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.kissChocolate();
	this.instance.setTransform(-63,-77);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-77,143,154);


(lib.lighting_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(0,0,0.23,0.23);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.setTransform(0,0,0.15,0.15);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,alpha:1},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true,scaleX:0.15,scaleY:0.15,alpha:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-18.5,31.3,37.1);


(lib.kissChocolate_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 17
	this.instance = new lib.Symbol1();
	this.instance.setTransform(490,820);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},32).wait(33).to({alpha:0},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(427,743,143,154);


(lib.heartChocolate_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 17
	this.instance = new lib.Symbol2();
	this.instance.setTransform(490,820);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},32).wait(33).to({alpha:0},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390.5,721.5,199,193);


(lib.flower_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 17
	this.instance = new lib.Symbol3();
	this.instance.setTransform(490,820);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},32).wait(33).to({alpha:0},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389.5,721.5,199,197);


// stage content:



(lib.step5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_88 = function() {
		$(".p5 .btnNext").fadeIn();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(1));

	// p
	this.instance = new lib.kissChocolate_1();
	this.instance.setTransform(586.1,542.2,1,1,0,0,0,498.5,820);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).wait(3));

	// o
	this.instance_1 = new lib.heartChocolate_1();
	this.instance_1.setTransform(381.9,384,1,1,0,0,0,489,820);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(30));

	// n
	this.instance_2 = new lib.flower_1();
	this.instance_2.setTransform(193.9,650,1,1,0,0,0,489,820);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).wait(54));

	// m
	this.instance_3 = new lib.lighting_1();
	this.instance_3.setTransform(316,398);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(30));

	// l
	this.instance_4 = new lib.lighting_1();
	this.instance_4.setTransform(316,464);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).wait(34));

	// k
	this.instance_5 = new lib.lighting_1();
	this.instance_5.setTransform(90.7,416);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).wait(39));

	// i
	this.instance_6 = new lib.lighting_1();
	this.instance_6.setTransform(50,558.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(45));

	// j
	this.instance_7 = new lib.lighting_1();
	this.instance_7.setTransform(110,610);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).wait(50));

	// h
	this.instance_8 = new lib.lighting_1();
	this.instance_8.setTransform(128,786);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({_off:false},0).wait(55));

	// g
	this.instance_9 = new lib.lighting_1();
	this.instance_9.setTransform(298,708);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).wait(60));

	// f
	this.instance_10 = new lib.lighting_1();
	this.instance_10.setTransform(406,790);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).wait(65));

	// e
	this.instance_11 = new lib.lighting_1();
	this.instance_11.setTransform(468,798);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).wait(70));

	// d
	this.instance_12 = new lib.lighting_1();
	this.instance_12.setTransform(518,862);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).wait(75));

	// c
	this.instance_13 = new lib.lighting_1();
	this.instance_13.setTransform(590,876.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).wait(80));

	// b
	this.instance_14 = new lib.lighting_1();
	this.instance_14.setTransform(532,944.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).wait(85));

	// a
	this.instance_15 = new lib.lighting_1();
	this.instance_15.setTransform(580,944.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(884.4,1493.6,31.3,37);

})(lib_step5 = lib_step5||{}, images = images||{}, createjs = createjs||{});
var lib_step5, images, createjs;