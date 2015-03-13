(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件1();
	this.instance.setTransform(125.5,29,1,1,0,0,0,125.5,29);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(7).to({alpha:0},17).wait(1));

	// 图层 1
	this.instance_1 = new lib.btn1();
	this.instance_1.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,58);


// symbols:
(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,50);


(lib.图层30 = function() {
	this.initialize(img.图层30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,58);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.图层30();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,251,58);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;