(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 40,
	color: "#E2D2B8",
	manifest: [
		{src:"images/startup/boy.png", id:"boy"},
		{src:"images/startup/chocolate.png", id:"chocolate"},
		{src:"images/startup/chocolateB.png", id:"chocolateB"},
		{src:"images/startup/chocolateWithHeart1.png", id:"chocolateWithHeart1"},
		{src:"images/startup/cloudB.png", id:"cloudB"},
		{src:"images/startup/girl.png", id:"girl"},
		{src:"images/startup/heart.png", id:"heart"},
		{src:"images/startup/heartA.png", id:"heartA"},
		{src:"images/startup/heartHighlight.jpg", id:"heartHighlight"},
		{src:"images/startup/kiss.png", id:"kiss"},
		{src:"images/startup/lighting.png", id:"lighting"},
		{src:"images/startup/loveIs.png", id:"loveIs"},
		{src:"images/startup/moon.png", id:"moon"},
		{src:"images/startup/text1.png", id:"text1"},
		{src:"images/startup/text_KD11.png", id:"text_KD11"},
		{src:"images/startup/text_last.png", id:"text_last"},
		{src:"images/startup/text_tips.png", id:"text_tips"}
	]
};



// symbols:



(lib.boy = function() {
	this.initialize(img.boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,388);


(lib.chocolate = function() {
	this.initialize(img.chocolate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,251);


(lib.chocolateB = function() {
	this.initialize(img.chocolateB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,291);


(lib.chocolateWithHeart1 = function() {
	this.initialize(img.chocolateWithHeart1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,480);


(lib.cloudB = function() {
	this.initialize(img.cloudB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,186);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,407);


(lib.heart = function() {
	this.initialize(img.heart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,234);


(lib.heartA = function() {
	this.initialize(img.heartA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,551,500);


(lib.heartHighlight = function() {
	this.initialize(img.heartHighlight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,475);


(lib.kiss = function() {
	this.initialize(img.kiss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,432);


(lib.lighting = function() {
	this.initialize(img.lighting);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,161);


(lib.loveIs = function() {
	this.initialize(img.loveIs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,62);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,222);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,62);


(lib.text_KD11 = function() {
	this.initialize(img.text_KD11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,84);


(lib.text_last = function() {
	this.initialize(img.text_last);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,112);


(lib.text_tips = function() {
	this.initialize(img.text_tips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,477,24);


(lib.Tween55 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_tips();
	this.instance.setTransform(-258,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-258,-29,477,24);


(lib.Tween54 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_tips();
	this.instance.setTransform(-258,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-258,-29,477,24);


(lib.Tween53 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_last();
	this.instance.setTransform(-237.5,-36);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-36,396,112);


(lib.Tween52 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_last();
	this.instance.setTransform(-237.5,-36);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-36,396,112);


(lib.Tween51 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolateB();
	this.instance.setTransform(-143,-145.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143,-145.5,286,291);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolateB();
	this.instance.setTransform(-143,-145.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143,-145.5,286,291);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.kiss();
	this.instance.setTransform(-157.5,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.5,-216,315,432);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.kiss();
	this.instance.setTransform(-157.5,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.5,-216,315,432);


(lib.Tween50 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girl();
	this.instance.setTransform(-169,-203.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169,-203.5,338,407);


(lib.Tween49 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girl();
	this.instance.setTransform(-169,-203.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169,-203.5,338,407);


(lib.Tween48 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boy();
	this.instance.setTransform(-165,-194);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165,-194,330,388);


(lib.Tween47 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boy();
	this.instance.setTransform(-165,-194);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165,-194,330,388);


(lib.Tween46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heartHighlight();
	this.instance.setTransform(-279.8,-254.1,1.07,1.07);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.8,-254.1,559.6,508.3);


(lib.Tween45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heartHighlight();
	this.instance.setTransform(-279.8,-254.1,1.07,1.07);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.8,-254.1,559.6,508.3);


(lib.Tween44 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.moon();
	this.instance.setTransform(-115,-111);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-111,230,222);


(lib.Tween43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.moon();
	this.instance.setTransform(-115,-111);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-111,230,222);


(lib.Tween42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloudB();
	this.instance.setTransform(163.6,-113.2,1.16,1.218,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-113.2,327.1,226.5);


(lib.Tween41 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloudB();
	this.instance.setTransform(163.6,-113.2,1.16,1.218,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-113.2,327.1,226.5);


(lib.Tween40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloudB();
	this.instance.setTransform(-141,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141,-93,282,186);


(lib.Tween39 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloudB();
	this.instance.setTransform(-141,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141,-93,282,186);


(lib.Tween38 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloudB();
	this.instance.setTransform(-204.4,-134.8,1.45,1.45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-204.4,-134.8,408.9,269.7);


(lib.Tween37 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloudB();
	this.instance.setTransform(-204.4,-134.8,1.45,1.45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-204.4,-134.8,408.9,269.7);


(lib.Tween36 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Tween35 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Tween34 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Tween33 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lighting();
	this.instance.setTransform(-68,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-80.5,136,161);


(lib.Tween31 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heartA();
	this.instance.setTransform(-275.5,-250);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-275.5,-250,551,500);


(lib.Tween30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heartA();
	this.instance.setTransform(-275.5,-250);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-275.5,-250,551,500);


(lib.Tween29 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolateWithHeart1();
	this.instance.setTransform(-131.9,-123.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131.9,-123.8,528,480);


(lib.Tween28 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-6.9,-116.6,0.698,0.833,0,-30,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-116.6,195.1,233.3);


(lib.Tween27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(52.6,-85.5,0.7,0.682,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.5,-85.5,105.1,171.1);


(lib.Tween26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(52,-91.4,0.693,0.728,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-91.4,104,182.8);


(lib.Tween25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-51,-85.3,0.68,0.68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-85.3,102.1,170.8);


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(50.7,88.1,0.695,0.695,-179.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.5,-88,107,176.1);


(lib.Tween23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(106.7,-14.7,0.736,0.736,113);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.6,-86.9,213.3,173.9);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(7.9,-97.2,0.667,0.667,35.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.3,-97.2,178.7,194.5);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(44,-83,0.642,0.642,58.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.9,-83,187.9,166.1);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-50.9,-89.1,0.694,0.705,0,-60.3,119.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.6,-89.1,205.3,178.2);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-102.6,-0.3,0.694,0.705,0,-120.3,59.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.6,-89.5,205.3,179.1);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-51.6,88.7,0.694,0.705,0,179.7,-0.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.4,-88.6,104.9,177.4);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-10,-16.7,0.133,0.133);

	this.instance_1 = new lib.chocolate();
	this.instance_1.setTransform(-10,-16.7,0.133,0.133);

	this.instance_2 = new lib.chocolate();
	this.instance_2.setTransform(-10,-16.7,0.133,0.133);

	this.instance_3 = new lib.chocolate();
	this.instance_3.setTransform(-10,-16.7,0.133,0.133);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-16.7,20,33.5);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_KD11();
	this.instance.setTransform(-112,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112,-42,224,84);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loveIs();
	this.instance.setTransform(-115.5,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.5,-31,231,62);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-75,-125.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-125.5,150,251);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-75,-125.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-125.5,150,251);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,62);


(lib.heart_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heart();
	this.instance.setTransform(-127,-117);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127,-117,254,234);


(lib.MC_screen9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opened:1,closed:122});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
		$(".skip").hide();
	}
	this.frame_43 = function() {
		$('.btnStart').fadeIn();
	}
	this.frame_122 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(42).call(this.frame_43).wait(79).call(this.frame_122).wait(1));

	// tips
	this.instance = new lib.Tween54("synched",0);
	this.instance.setTransform(326.3,829.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween55("synched",0);
	this.instance_1.setTransform(326.3,812.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},26).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true,y:812.7,alpha:1},26).wait(68));

	// lastHeading
	this.instance_2 = new lib.Tween52("synched",0);
	this.instance_2.setTransform(366.5,197.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween53("synched",0);
	this.instance_3.setTransform(366.5,209.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_3}]},27).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true,y:209.7,alpha:1},27).wait(78));

	// chocolate
	this.instance_4 = new lib.Tween21("synched",0);
	this.instance_4.setTransform(519.7,638.6);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween51("synched",0);
	this.instance_5.setTransform(493.4,638.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},30).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:493.4,alpha:1},30).wait(93));

	// a
	this.instance_6 = new lib.Tween35("synched",0);
	this.instance_6.setTransform(61,423);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween36("synched",0);
	this.instance_7.setTransform(127.2,298);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({rotation:178,x:87.1,y:333.5,alpha:1},32).to({_off:true,rotation:0,x:127.2,y:298},28).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},28).to({rotation:180,x:212,y:269.4},20).to({rotation:274,x:323,y:308.5,alpha:0},17).to({_off:true},1).wait(3));

	// b
	this.instance_8 = new lib.Tween33("synched",0);
	this.instance_8.setTransform(336,764.3);
	this.instance_8.alpha = 0.191;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween34("synched",0);
	this.instance_9.setTransform(578,551.5,1,1,121);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).to({rotation:72,x:470,y:672.9,alpha:1},18).to({_off:true,rotation:121,x:578,y:551.5},20).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},20).to({rotation:219,x:602.4,y:458,alpha:0.68},20).to({rotation:360,x:578,y:358,alpha:1},22).to({rotation:413,x:512,y:290,alpha:0},12).wait(1));

	// headerMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJBAgGQqdmYndnMQqbqEi8qOQjqs0IVsYQDOkEC1h0QDPiDFag/QJRhuGnDXQCEBEBjBbQAyAuAXAhQBCg7B2hJQDsiSD5hKQFbhnFCA4QGSBHFUE+QFcFJCNGHQCLGDg2HaQgYDQgYBnQgjCXhyD/QhzD/lpFwQlpFvkrDgQkrDgmPD7QlgDdj/B7QjvhwlPjMg");
	mask.setTransform(326.2,515.1);

	// Layer 5
	this.instance_10 = new lib.Tween9("synched",0);
	this.instance_10.setTransform(312,652.8);
	this.instance_10.alpha = 0;

	this.instance_11 = new lib.Tween20("synched",0);
	this.instance_11.setTransform(312,623.3);
	this.instance_11._off = true;

	this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,y:623.3,alpha:1},30).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},30).to({y:606.3},62).to({y:592.3},30).wait(1));

	// a
	this.instance_12 = new lib.Tween38("synched",0);
	this.instance_12.setTransform(310,692);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(123));

	// b
	this.instance_13 = new lib.Tween40("synched",0);
	this.instance_13.setTransform(447,586);

	this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(123));

	// c
	this.instance_14 = new lib.Tween42("synched",0);
	this.instance_14.setTransform(236,563.1);

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(123));

	// Layer 1
	this.instance_15 = new lib.Tween30("synched",0);
	this.instance_15.setTransform(325.7,516.4);
	this.instance_15.alpha = 0;

	this.instance_16 = new lib.Tween31("synched",0);
	this.instance_16.setTransform(325.7,516.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},10).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true,alpha:1},10).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.2,266.4,612.5,517.7);


(lib.MC_screen8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":69,last:81});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_69 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(68).call(this.frame_69).wait(13));

	// a
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(61,429);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(127.2,304);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({rotation:178,x:87.1,y:339.5,alpha:1},20).to({_off:true,rotation:0,x:127.2,y:304},15).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},15).to({rotation:180,x:212,y:275.4},12).to({rotation:274,x:323,y:314.5,alpha:0},15).wait(1));

	// b
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.setTransform(336,770.3);
	this.instance_2.alpha = 0.191;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(578,557.5,1,1,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({rotation:72,x:470,y:678.9,alpha:1},12).to({_off:true,rotation:121,x:578,y:557.5},17).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},17).to({rotation:219,x:602.4,y:464,alpha:0.68},9).to({rotation:360,x:578,y:364,alpha:1},14).to({rotation:413,x:512,y:296,alpha:0},10).wait(1));

	// headerMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao1fdQqQmPnTnDQqOp3i4qBQjmskILsIQDKj/CxhxQDLiBFTg+QJFhrGeDSQCCBCBhBaQAxAtAWAgQBCg5BzhIQDniPD0hIQFVhmE7A4QGKBFFNE3QFVFDCKF/QCJF7g2HRQgXDLgXBlQgjCUhwD6QhwD6liFpQliFoklDbQklDcmHD1QlZDaj6B4QjqhulIjIg");
	mask.setTransform(326.1,521.1);

	// Layer 3
	this.instance_4 = new lib.Tween47("synched",0);
	this.instance_4.setTransform(756,574);

	this.instance_5 = new lib.Tween48("synched",0);
	this.instance_5.setTransform(495.8,574);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:495.8},19).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},19).wait(28).to({startPosition:0},0).to({alpha:0},24).to({_off:true},1).wait(10));

	// Layer 2
	this.instance_6 = new lib.Tween49("synched",0);
	this.instance_6.setTransform(-114,594);

	this.instance_7 = new lib.Tween50("synched",0);
	this.instance_7.setTransform(182,594);
	this.instance_7._off = true;

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:182},19).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},19).wait(28).to({startPosition:0},0).to({alpha:0},24).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.MC_screen7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":43,"last":81});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_43 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(42).call(this.frame_43).wait(39));

	// a
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(61,421);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(127.2,296);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({rotation:178,x:87.1,y:331.5,alpha:1},21).to({_off:true,rotation:0,x:127.2,y:296},22).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},22).to({rotation:180,x:212,y:267.4},11).to({rotation:274,x:323,y:306.5,alpha:0},12).wait(1));

	// b
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.setTransform(336,762.3);
	this.instance_2.alpha = 0.191;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(578,549.5,1,1,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({rotation:72,x:470,y:670.9,alpha:1},14).to({_off:true,rotation:121,x:578,y:549.5},15).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},15).to({rotation:219,x:602.4,y:456,alpha:0.68},17).to({rotation:360,x:578,y:356,alpha:1},13).to({rotation:413,x:512,y:288,alpha:0},7).wait(1));

	// headerMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJBAgGQqdmYndnMQqbqEi8qOQjqs0IVsYQDOkEC1h0QDPiDFag/QJRhuGnDXQCEBEBjBbQAyAuAXAhQBCg7B2hJQDsiSD5hKQFbhnFCA4QGSBHFUE+QFcFJCNGHQCLGDg2HaQgYDQgYBnQgjCXhyD/QhzD/lpFwQlpFvkrDgQkrDgmPD7QlgDdj/B7QjvhwlPjMg");
	mask.setTransform(326.2,513.1);

	// a
	this.instance_4 = new lib.Tween37("synched",0);
	this.instance_4.setTransform(428,740);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween38("synched",0);
	this.instance_5.setTransform(310,692);

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},22).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:310,y:692,alpha:1},22).wait(60));

	// b
	this.instance_6 = new lib.Tween39("synched",0);
	this.instance_6.setTransform(601,584);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Tween40("synched",0);
	this.instance_7.setTransform(447,586);

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},22).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:447,y:586,alpha:1},22).wait(60));

	// c
	this.instance_8 = new lib.Tween41("synched",0);
	this.instance_8.setTransform(76,563.1);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Tween42("synched",0);
	this.instance_9.setTransform(236,563.1);

	this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},22).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:236,alpha:1},22).wait(60));

	// moon
	this.instance_10 = new lib.Tween43("synched",0);
	this.instance_10.setTransform(328.1,632.2);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween44("synched",0);
	this.instance_11.setTransform(328.1,456);

	this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},22).to({state:[{t:this.instance_11}]},18).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(22).to({_off:false},0).to({_off:true,y:456},18).wait(42));

	// bg
	this.instance_12 = new lib.Tween45("synched",0);
	this.instance_12.setTransform(326,518);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween46("synched",0);
	this.instance_13.setTransform(326,518);

	this.instance_12.mask = this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},32).to({state:[{t:this.instance_13}]},18).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({_off:false},0).to({_off:true,alpha:1},18).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,449.8,530.2,300.4);


(lib.MC_screen6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":13,"last":52});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_13 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(40));

	// a
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(59,421);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(125.2,296);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({rotation:178,x:85.1,y:331.5,alpha:1},14).to({_off:true,rotation:0,x:125.2,y:296},10).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},10).to({rotation:180,x:210,y:267.4},9).to({rotation:274,x:321,y:306.5,alpha:0},9).wait(1));

	// b
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.setTransform(334,762.3);
	this.instance_2.alpha = 0.191;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(576,549.5,1,1,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({rotation:72,x:468,y:670.9,alpha:1},9).to({_off:true,rotation:121,x:576,y:549.5},11).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},11).to({rotation:219,x:600.4,y:456,alpha:0.68},7).to({rotation:360,x:576,y:356,alpha:1},9).to({rotation:413,x:510,y:288,alpha:0},6).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween30("synched",0);
	this.instance_4.setTransform(325.7,516.4);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween31("synched",0);
	this.instance_5.setTransform(325.7,516.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},10).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,alpha:1},10).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.2,266.4,551,500);


(lib.MC_screen5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":34,"last":52});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_34 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(33).call(this.frame_34).wait(19));

	// Layer 1
	this.instance = new lib.Tween29("synched",0);
	this.instance.setTransform(195.5,404.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).to({startPosition:0},20).to({alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.5,280.7,528,480);


(lib.MC_screen4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":47,"last":79});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_47 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(46).call(this.frame_47).wait(33));

	// 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(430,208.7,1,1,33);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:412.7,y:405.6,alpha:1},33).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(627.4,440,1,1,47);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({rotation:0,x:462.9,y:445.6,alpha:1},30).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 3
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(621,623.1,1,1,30);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({rotation:0,x:444.1,y:501.2,alpha:1},26).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 4
	this.instance_3 = new lib.Tween19("synched",0);
	this.instance_3.setTransform(-45.9,527.9,1,1,-84);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({rotation:0,x:187.1,y:506,alpha:1},22).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 5
	this.instance_4 = new lib.Tween22("synched",0);
	this.instance_4.setTransform(86.3,698.1,1,1,55);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({rotation:0,x:280,y:601,alpha:1},18).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 6
	this.instance_5 = new lib.Tween23("synched",0);
	this.instance_5.setTransform(-10.5,345.8,1,1,-119);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:176.4,y:447,alpha:1},33).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 7
	this.instance_6 = new lib.Tween24("synched",0);
	this.instance_6.setTransform(37,163.8,1,1,-111);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({rotation:0,x:229.1,y:404.9,alpha:1},29).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 8
	this.instance_7 = new lib.Tween25("synched",0);
	this.instance_7.setTransform(166.1,360.2,1,1,-68);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({rotation:0,x:259.1,y:483.4,alpha:1},25).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 9
	this.instance_8 = new lib.Tween26("synched",0);
	this.instance_8.setTransform(325,111.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:321,y:420.4,alpha:1},21).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 10
	this.instance_9 = new lib.Tween27("synched",0);
	this.instance_9.setTransform(498.4,409.1,1,1,59);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({rotation:0,x:381.5,y:485.6,alpha:1},17).to({startPosition:0},25).to({alpha:0},21).wait(1));

	// 11
	this.instance_10 = new lib.Tween28("synched",0);
	this.instance_10.setTransform(470.6,743,1,1,19);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:354.8,y:584.3,alpha:1},33).to({startPosition:0},25).to({alpha:0},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,106.1,617.1,749.4);


(lib.MC_screen3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":125,"last":125});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_125 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(124).call(this.frame_125).wait(1));

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(339.4,320.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:311.8,alpha:1},11).to({y:273.8},104).to({y:268.8,alpha:0},10).wait(1));

	// a1
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(290,450);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2.26,scaleY:2.26,rotation:-61.9,x:185.5,y:476.9},5).to({scaleX:4.68,scaleY:4.68,rotation:-180,x:235,y:659.2},5).to({scaleX:3.98,scaleY:3.98,rotation:0,x:207.4,y:637.8},3).to({scaleX:3.06,scaleY:3.06,x:400.9,y:610.1},4).to({scaleX:2.99,scaleY:2.99,rotation:170,x:453.1,y:558.3},3).to({scaleX:2.92,scaleY:2.92,rotation:168.5,x:500.6,y:504.4},3).to({scaleX:1,scaleY:1,rotation:0,x:700,y:240},69).to({_off:true},1).wait(33));

	// a2
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(290,450);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(670,269.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},65).to({state:[]},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({scaleX:2.85,scaleY:2.85,rotation:177,x:218.2,y:647.4},9).to({scaleX:2.79,scaleY:2.79,rotation:-2,x:232.6,y:657.7},6).to({scaleX:2.69,scaleY:2.69,rotation:0,x:236.5,y:660.1},8).to({scaleX:4.07,scaleY:4.07,rotation:140.4,x:346.6,y:652.3},5).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:670,y:269.1},65).wait(28));

	// a3
	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.setTransform(290,450);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:2.66,scaleY:2.66,rotation:-34,x:211,y:641.2},12).to({rotation:-91,x:241.5,y:662.9},11).to({rotation:45},9).to({rotation:186,x:222,y:650.4},12).to({scaleX:1.57,scaleY:1.57,rotation:270,x:675.7,y:274.4},49).to({_off:true},1).wait(22));

	// a4
	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.setTransform(290,450);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({rotation:-61,x:161.9,y:530},19).to({scaleX:2.57,scaleY:2.57,rotation:-146.9,x:181.4,y:604.7},10).to({scaleX:1,scaleY:1,rotation:-147,x:220,y:648.9},10).to({scaleX:3.07,scaleY:3.07,rotation:-277,x:250,y:666.9},10).to({scaleX:1,scaleY:1,rotation:-454,x:657.3,y:300},43).to({_off:true},1).wait(20));

	// a5
	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.setTransform(290,450);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({x:190,y:473.7},13).to({x:164.1,y:560},10).to({rotation:-12,x:190,y:617.9},14).to({scaleX:2.84,scaleY:2.84,rotation:-83,x:236.4,y:660},9).to({scaleX:2.2,scaleY:2.2,rotation:-191,x:540,y:480},25).to({scaleX:1.87,scaleY:1.87,rotation:-247,x:680,y:268.3},12).to({_off:true},1).wait(19));

	// a6
	this.instance_7 = new lib.Tween15("synched",0);
	this.instance_7.setTransform(280.1,450.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({_off:false},0).to({rotation:94,x:164.4,y:510},9).to({rotation:206,x:179.5,y:601.5},16).to({scaleX:3.43,scaleY:3.43,rotation:289,x:324.9,y:682},27).to({scaleX:1.61,scaleY:1.61,rotation:160,x:664.3,y:290.4},23).to({_off:true},1).wait(20));

	// a7
	this.instance_8 = new lib.Tween16("synched",0);
	this.instance_8.setTransform(290,450);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,x:164.4,y:510},12).to({rotation:85,x:170,y:580.8},8).to({rotation:207,x:184.6,y:609.9},6).to({rotation:340,x:218.6,y:647.7},6).to({rotation:360,x:270,y:673.3},7).to({scaleX:2.04,scaleY:2.04,rotation:243,x:348.4,y:651.2},5).to({scaleX:1.41,scaleY:1.41,rotation:254,x:664.5,y:290},30).to({_off:true},1).wait(13));

	// a8
	this.instance_9 = new lib.Tween17("synched",0);
	this.instance_9.setTransform(290,450);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({rotation:81,x:167.9,y:500},16).to({scaleX:2.17,scaleY:2.17,rotation:200,x:199.9,y:630},10).to({scaleX:2.54,scaleY:2.54,rotation:326,x:280,y:674.7},6).to({scaleX:3.22,scaleY:3.22,rotation:360,x:364.1,y:640.4},6).to({scaleX:1.29,scaleY:1.29,rotation:285,x:664.5,y:290},26).to({_off:true},1).wait(16));

	// a9
	this.instance_10 = new lib.Tween18("synched",0);
	this.instance_10.setTransform(290,450);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51).to({_off:false},0).to({x:237.4,y:461.2},6).to({x:196.1,y:470},7).to({scaleX:1,scaleY:1,rotation:-30.8,x:162.8,y:520},4).to({rotation:-54.1,x:162.6,y:550},3).to({scaleX:1,scaleY:1,rotation:-108,x:200,y:630.1},6).to({scaleX:2.67,scaleY:2.67,rotation:42,x:250,y:666.9},7).to({rotation:171,x:350,y:650.1},6).to({rotation:328,x:450,y:561.6},6).to({rotation:360,x:528.8,y:470},7).to({scaleX:1.49,scaleY:1.49,x:668.1,y:285.1},13).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227.4,278.8,224,188);


(lib.MC_screen2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":128,"last":139});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_128 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(127).call(this.frame_128).wait(12));

	// Layer 2
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(327,256);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:274,alpha:1},64).to({y:284},38).to({y:302,alpha:0},37).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(330,486,0.27,0.27);

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(330,486);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:1,scaleY:1},64).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},64).wait(38).to({startPosition:0},0).to({alpha:0},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,225,231,294.9);


(lib.MC_screen1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":132,"last":406});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_132 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(131).call(this.frame_132).wait(275));

	// text
	this.instance = new lib.text_1();
	this.instance.setTransform(345.5,278.9,1,1,0,0,0,94.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.35,scaleY:1.35,y:278.8},96).to({scaleX:1,scaleY:1,y:278.9,alpha:0},63).to({_off:true},1).wait(247));

	// heart
	this.instance_1 = new lib.heart_1();
	this.instance_1.setTransform(473.3,598.4,1,1,0,0,0,145.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.21,scaleY:1.21,x:503.8,y:624.6},59).to({scaleX:1,scaleY:1,x:473.3,y:598.4},60).to({scaleX:0.49,scaleY:0.49,x:399.1,y:534.6,alpha:0.18},50).wait(207).to({alpha:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.8,251.4,254,339);


// stage content:



(lib.startup = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root = this;
		this.stop();
		
		var playList = ["screen1", "screen2", "screen3", "screen4", "screen5", "screen6", "screen7", "screen8", "screen9"];
		//var playList = ["screen8","screen9"]; 
		var playIndex = 0;
		var playInstance;
		
		var playClip = function () {
		
			var name = playList[playIndex];
			var mc = lib["MC_" + name];
		
			playInstance = new mc();
		
			//when instance play at the end, run the callback
			playInstance.on("closed", playNextMC);
		
			//put instance into the canvas
			root.addChild(playInstance);
		
		
			//canvas run the open animation
			playInstance.gotoAndPlay("opened");
		
			//console.log(playIndex);
			return root.playInstance;
		}
		
		$('.skip').on('click',function(){
			playInstance.gotoAndPlay("last");
			playIndex=playList.length-1;
			stage.clear();
			//playInstance = null;
			//stage.addChild(exportRoot);
			//exportRoot = {};
			
			playClip();	
		});
		
		var playNextMC = function () {
			playIndex++;
		
			//index add 1
			if (playIndex < playList.length) {
		
				//again
				playClip();
			} else if (playIndex >= playList.length) {
		
				//alert('end');
			}
		
		
		}
		
		
		var playPrevMC = function () {
			playIndex--;
			if (playIndex < 0) {
				playIndex = 0;
		
			}
			playClip();
		
		}
		
		playClip();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib_startup = lib_startup||{}, images = images||{}, createjs = createjs||{});
var lib_startup, images, createjs;