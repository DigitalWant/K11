(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 40,
	color: "#FFFFFF",
	manifest: [
		{src:"../images/Bitmap1.png", id:"Bitmap1"},
		{src:"../images/Bitmap2.png", id:"Bitmap2"},
		{src:"../images/lib_img_000002.jpg", id:"lib_img_000002"},
		{src:"../images/lib_img_000003.jpg", id:"lib_img_000003"},
		{src:"../images/lib_img_000018.jpg", id:"lib_img_000018"},
		{src:"../images/text1.png", id:"text1"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,502,63);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,40);


(lib.lib_img_000002 = function() {
	this.initialize(img.lib_img_000002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


(lib.lib_img_000003 = function() {
	this.initialize(img.lib_img_000003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


(lib.lib_img_000018 = function() {
	this.initialize(img.lib_img_000018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,702);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,207);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,444,207);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000002();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1130);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.51)").s().p("Eg3TAGZIAAsyMBunAAAIAAMyg");
	this.shape.setTransform(354.1,41);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,708.2,82);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,502,63);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lib_img_000018();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1600,702);


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

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(330.9,604.6,1,1,0,0,0,250.8,31.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:251,regY:31.5,x:331.2,y:619.7,alpha:0.059},0).wait(1).to({x:331.4,y:633.4,alpha:0.118},0).wait(1).to({x:331.5,y:645.9,alpha:0.176},0).wait(1).to({x:331.6,y:657.2,alpha:0.235},0).wait(1).to({x:331.8,y:667.3,alpha:0.294},0).wait(1).to({x:331.9,y:676.4,alpha:0.353},0).wait(1).to({y:684.5,alpha:0.412},0).wait(1).to({x:332,y:691.7,alpha:0.471},0).wait(1).to({x:332.1,y:693.7,alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(72));

	// Layer 1
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(327.9,599.2,1,1,0,0,0,353.9,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(1).to({regX:354.1,x:328.3,y:614.2,alpha:0.059},0).wait(1).to({x:328.5,y:627.9,alpha:0.118},0).wait(1).to({x:328.6,y:640.4,alpha:0.176},0).wait(1).to({x:328.7,y:651.7,alpha:0.235},0).wait(1).to({x:328.9,y:661.8,alpha:0.294},0).wait(1).to({x:329,y:670.9,alpha:0.353},0).wait(1).to({y:679,alpha:0.412},0).wait(1).to({x:329.1,y:686.2,alpha:0.471},0).wait(1).to({y:688.2,alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(72));

	// blur
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:565,y:565,alpha:0.974},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(72));

	// not blur
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(320,565,1,1,0,0,0,320,565);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(72));

	// Layer 3
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(320,568,1,1,0,0,0,222,103.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0},0).wait(1));

	// layer2
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(-28,0,1.555,1.618);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).wait(1).to({regX:800,regY:351,x:1188.3,y:568},0).wait(1).to({x:1160.5},0).wait(1).to({x:1132.7},0).wait(1).to({x:1104.8},0).wait(1).to({x:1077},0).wait(1).to({x:1049.2},0).wait(1).to({x:1021.4},0).wait(1).to({x:993.6},0).wait(1).to({x:965.8},0).wait(1).to({x:938},0).wait(1).to({x:910.2},0).wait(1).to({x:882.3},0).wait(1).to({x:854.5},0).wait(1).to({x:826.7},0).wait(1).to({x:798.9},0).wait(1).to({x:771.1},0).wait(1).to({x:743.3},0).wait(1).to({x:715.5},0).wait(1).to({x:687.7},0).wait(1).to({x:659.8},0).wait(1).to({x:632},0).wait(1).to({x:604.2},0).wait(1).to({x:576.4},0).wait(1).to({x:548.6},0).wait(1).to({x:520.8},0).wait(1).to({x:493},0).wait(1).to({x:465.2},0).wait(1).to({x:437.3},0).wait(1).to({x:409.5},0).wait(1).to({x:381.7},0).wait(1).to({x:353.9},0).wait(1).to({x:326.1},0).wait(1).to({x:298.3},0).wait(1).to({x:270.5},0).wait(1).to({x:242.7},0).wait(1).to({x:214.8},0).wait(1).to({x:187},0).wait(1).to({x:159.2},0).wait(1).to({x:131.4},0).wait(1).to({x:103.6},0).wait(1).to({x:75.8},0).wait(1).to({x:48},0).wait(1).to({x:20.2},0).wait(1).to({x:-7.7},0).wait(1).to({x:-35.5},0).wait(1).to({x:-63.3},0).wait(1).to({x:-91.1},0).wait(1).to({x:-101},0).wait(1).to({x:-110.9},0).wait(1).to({x:-120.9},0).wait(1).to({x:-130.8},0).wait(1).to({x:-140.7},0).wait(1).to({x:-150.6},0).wait(1).to({x:-160.6},0).wait(1).to({x:-170.5},0).wait(1).to({x:-180.4},0).wait(1).to({x:-190.3},0).wait(1).to({x:-200.2},0).wait(1).to({x:-210.2},0).wait(1).to({x:-220.1},0).wait(1).to({x:-230},0).wait(1).to({x:-240},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1130);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;