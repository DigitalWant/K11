(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/lib_img_000002.jpg", id:"lib_img_000002"},
		{src:"images/lib_img_000003.jpg", id:"lib_img_000003"},
		{src:"images/lib_img_000014.jpg", id:"lib_img_000014"},
		{src:"images/lib_img_000015.jpg", id:"lib_img_000015"},
		{src:"images/lib_img_000017.jpg", id:"lib_img_000017"},
		{src:"images/lib_img_000018.jpg", id:"lib_img_000018"},
		{src:"images/lib_img_000019.png", id:"lib_img_000019"},
		{src:"images/lib_img_000020.jpg", id:"lib_img_000020"}
	]
};



// symbols:



(lib.lib_img_000002 = function() {
	this.initialize(img.lib_img_000002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


(lib.lib_img_000003 = function() {
	this.initialize(img.lib_img_000003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


(lib.lib_img_000014 = function() {
	this.initialize(img.lib_img_000014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000015 = function() {
	this.initialize(img.lib_img_000015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,1135);


(lib.lib_img_000017 = function() {
	this.initialize(img.lib_img_000017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,804,1164);


(lib.lib_img_000018 = function() {
	this.initialize(img.lib_img_000018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,719,1146);


(lib.lib_img_000019 = function() {
	this.initialize(img.lib_img_000019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,868);


(lib.lib_img_000020 = function() {
	this.initialize(img.lib_img_000020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000020();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000019();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288,868);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000018();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,719,1146);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000002();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000003();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


// stage content:
(lib.primetime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// blur
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:565,y:565,alpha:0.974},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(80));

	// not blur
	this.instance_1 = new lib.lib_img_000002();

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regY:565,y:565,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(80));

	// Layer 4
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(52,626,1,1,0,0,0,143.9,433.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).wait(1).to({regX:144,regY:434,x:74.2,y:626.2,alpha:0.024},0).wait(1).to({x:95.6,alpha:0.049},0).wait(1).to({x:116.2,alpha:0.073},0).wait(1).to({x:136.2,alpha:0.098},0).wait(1).to({x:155.4,alpha:0.122},0).wait(1).to({x:174,alpha:0.146},0).wait(1).to({x:191.9,alpha:0.171},0).wait(1).to({x:209.2,alpha:0.195},0).wait(1).to({x:225.9,alpha:0.22},0).wait(1).to({x:241.9,alpha:0.244},0).wait(1).to({x:257.3,alpha:0.268},0).wait(1).to({x:272.1,alpha:0.293},0).wait(1).to({x:286.3,alpha:0.317},0).wait(1).to({x:299.9,alpha:0.341},0).wait(1).to({x:312.9,alpha:0.366},0).wait(1).to({x:325.4,alpha:0.39},0).wait(1).to({x:337.4,alpha:0.415},0).wait(1).to({x:348.8,alpha:0.439},0).wait(1).to({x:359.1,alpha:0.463},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.683},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.805},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:1},0).wait(20).to({_off:true},1).wait(25));

	// layer2
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(359.5,573,1,1,0,0,0,359.5,573);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).wait(1).to({x:357.6},0).wait(1).to({x:355.7},0).wait(1).to({x:353.8},0).wait(1).to({x:351.8},0).wait(1).to({x:349.9},0).wait(1).to({x:348},0).wait(1).to({x:346.1},0).wait(1).to({x:344.1},0).wait(1).to({x:342.2},0).wait(1).to({x:340.3},0).wait(1).to({x:338.4},0).wait(1).to({x:336.4},0).wait(1).to({x:334.5},0).wait(1).to({x:332.6},0).wait(1).to({x:330.6},0).wait(1).to({x:328.7},0).wait(1).to({x:326.8},0).wait(1).to({x:324.9},0).wait(1).to({x:322.9},0).wait(1).to({x:321},0).wait(1).to({x:319.1},0).wait(1).to({x:317.2},0).wait(1).to({x:315.2},0).wait(1).to({x:313.3},0).wait(1).to({x:311.4},0).wait(1).to({x:309.5},0).wait(1).to({x:307.5},0).wait(1).to({x:305.6},0).wait(1).to({x:303.7},0).wait(1).to({x:301.7},0).wait(1).to({x:299.8},0).wait(1).to({x:297.9},0).wait(1).to({x:296},0).wait(1).to({x:294},0).wait(1).to({x:292.1},0).wait(1).to({x:290.2},0).wait(1).to({x:288.3},0).wait(1).to({x:286.3},0).wait(1).to({x:284.4},0).wait(1).to({x:282.5},0).wait(1).to({x:280.5},0).wait(20).to({_off:true},1).wait(25));

	// Layer 5
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(320,568,0.05,0.05,0,0,0,320.1,568.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.BlurFilter(15, 15, 3)];
	this.instance_5.cache(-2,-2,644,1140);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({_off:false},0).wait(1).to({regX:320,regY:568,scaleX:0.14,scaleY:0.14,alpha:0.562},0).wait(1).to({scaleX:0.22,scaleY:0.22,alpha:0.768},0).wait(1).to({scaleX:0.29,scaleY:0.29,y:567.9,alpha:0.799},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:319.9,alpha:0.829},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:320,alpha:0.858},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.885},0).wait(1).to({scaleX:0.57,scaleY:0.57,alpha:0.911},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.935},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:319.9,alpha:0.958},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.979},0).wait(1).to({scaleX:0.78,scaleY:0.78,alpha:0.999},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:1},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:567.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:567.9},0).wait(1).to({scaleX:1,scaleY:1,y:567.8},0).wait(1).to({scaleX:1,scaleY:1,x:320,y:567.9},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1130);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;