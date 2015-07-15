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
		{src:"images/startup/chocolateWithHeart.png", id:"chocolateWithHeart"},
		{src:"images/startup/cloudB.png", id:"cloudB"},
		{src:"images/startup/girl.png", id:"girl"},
		{src:"images/startup/heart.png", id:"heart"},
		{src:"images/startup/heartA.png", id:"heartA"},
		{src:"images/startup/heartHighlight.jpg", id:"heartHighlight"},
		{src:"images/startup/lighting.png", id:"lighting"},
		{src:"images/startup/lightReflect.png", id:"lightReflect"},
		{src:"images/startup/loveIs.png", id:"loveIs"},
		{src:"images/startup/moon.png", id:"moon"},
		{src:"images/startup/text1.png", id:"text1"},
		{src:"images/startup/text_1heart1person.png", id:"text_1heart1person"},
		{src:"images/startup/text_KD11.png", id:"text_KD11"}
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


(lib.chocolateWithHeart = function() {
	this.initialize(img.chocolateWithHeart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,479);


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


(lib.lighting = function() {
	this.initialize(img.lighting);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,161);


(lib.lightReflect = function() {
	this.initialize(img.lightReflect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,831);


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


(lib.text_1heart1person = function() {
	this.initialize(img.text_1heart1person);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,45);


(lib.text_KD11 = function() {
	this.initialize(img.text_KD11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,84);


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


(lib.Tween32 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lightReflect();
	this.instance.setTransform(-259,-415.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-259,-415.5,518,831);


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
	this.instance = new lib.chocolateWithHeart();
	this.instance.setTransform(-264,-239.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-264,-239.5,528,479);


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


(lib.MC_screen8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opened:1,closed:144});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_144 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(143).call(this.frame_144).wait(1));

	// a
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(55,445);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(121.2,320);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({rotation:178,x:81.1,y:355.5,alpha:1},31).to({_off:true,rotation:0,x:121.2,y:320},30).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},30).to({rotation:180,x:206,y:291.4},26).to({rotation:274,x:317,y:330.5,alpha:0},17).wait(1));

	// b
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.setTransform(330,786.3);
	this.instance_2.alpha = 0.191;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(572,573.5,1,1,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({rotation:72,x:464,y:694.9,alpha:1},22).to({_off:true,rotation:121,x:572,y:573.5},22).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},22).to({rotation:219,x:596.4,y:480,alpha:0.68},20).to({rotation:360,x:572,y:380,alpha:1},28).to({rotation:413,x:506,y:312,alpha:0},12).wait(1));

	// headerMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJBAgGQqdmYndnMQqbqEi8qOQjqs0IVsYQDOkEC1h0QDPiDFag/QJRhuGnDXQCEBEBjBbQAyAuAXAhQBCg7B2hJQDsiSD5hKQFbhnFCA4QGSBHFUE+QFcFJCNGHQCLGDg2HaQgYDQgYBnQgjCXhyD/QhzD/lpFwQlpFvkrDgQkrDgmPD7QlgDdj/B7QjvhwlPjMg");
	mask.setTransform(320.2,537.1);

	// Layer 3
	this.instance_4 = new lib.Tween47("synched",0);
	this.instance_4.setTransform(750,590);

	this.instance_5 = new lib.Tween48("synched",0);
	this.instance_5.setTransform(489.8,590);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:489.8},40).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},40).wait(43).to({startPosition:0},0).to({alpha:0},31).wait(31));

	// Layer 2
	this.instance_6 = new lib.Tween49("synched",0);
	this.instance_6.setTransform(-120,610);

	this.instance_7 = new lib.Tween50("synched",0);
	this.instance_7.setTransform(176,610);
	this.instance_7._off = true;

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:176},40).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},40).wait(43).to({startPosition:0},0).to({alpha:0},31).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(585,396,0.3,378.2);


(lib.MC_screen7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":144});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_144 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(143).call(this.frame_144).wait(1));

	// a
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(55,445);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(121.2,320);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({rotation:178,x:81.1,y:355.5,alpha:1},31).to({_off:true,rotation:0,x:121.2,y:320},30).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},30).to({rotation:180,x:206,y:291.4},26).to({rotation:274,x:317,y:330.5,alpha:0},17).wait(1));

	// b
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.setTransform(330,786.3);
	this.instance_2.alpha = 0.191;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(572,573.5,1,1,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({rotation:72,x:464,y:694.9,alpha:1},22).to({_off:true,rotation:121,x:572,y:573.5},22).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},22).to({rotation:219,x:596.4,y:480,alpha:0.68},20).to({rotation:360,x:572,y:380,alpha:1},28).to({rotation:413,x:506,y:312,alpha:0},12).wait(1));

	// headerMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJBAgGQqdmYndnMQqbqEi8qOQjqs0IVsYQDOkEC1h0QDPiDFag/QJRhuGnDXQCEBEBjBbQAyAuAXAhQBCg7B2hJQDsiSD5hKQFbhnFCA4QGSBHFUE+QFcFJCNGHQCLGDg2HaQgYDQgYBnQgjCXhyD/QhzD/lpFwQlpFvkrDgQkrDgmPD7QlgDdj/B7QjvhwlPjMg");
	mask.setTransform(320.2,537.1);

	// a
	this.instance_4 = new lib.Tween37("synched",0);
	this.instance_4.setTransform(422,764);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween38("synched",0);
	this.instance_5.setTransform(304,716);

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},49).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:304,y:716,alpha:1},49).wait(96));

	// b
	this.instance_6 = new lib.Tween39("synched",0);
	this.instance_6.setTransform(595,608);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Tween40("synched",0);
	this.instance_7.setTransform(441,610);

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},49).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:441,y:610,alpha:1},49).wait(96));

	// c
	this.instance_8 = new lib.Tween41("synched",0);
	this.instance_8.setTransform(70,587.1);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Tween42("synched",0);
	this.instance_9.setTransform(230,587.1);

	this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},49).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:230,alpha:1},49).wait(96));

	// moon
	this.instance_10 = new lib.Tween43("synched",0);
	this.instance_10.setTransform(322.1,656.2);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween44("synched",0);
	this.instance_11.setTransform(322.1,480);

	this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},49).to({state:[{t:this.instance_11}]},31).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).to({_off:true,y:480},31).wait(65));

	// bg
	this.instance_12 = new lib.Tween45("synched",0);
	this.instance_12.setTransform(320,542);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween46("synched",0);
	this.instance_13.setTransform(320,542);

	this.instance_12.mask = this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},67).to({state:[{t:this.instance_13}]},25).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(67).to({_off:false},0).to({_off:true,alpha:1},25).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.1,473.8,530.2,300.4);


(lib.MC_screen6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":144});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_144 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(143).call(this.frame_144).wait(1));

	// a
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(55,445);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(121.2,320);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({rotation:178,x:81.1,y:355.5,alpha:1},31).to({_off:true,rotation:0,x:121.2,y:320},30).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},30).to({rotation:180,x:206,y:291.4},26).to({rotation:274,x:317,y:330.5,alpha:0},17).wait(1));

	// b
	this.instance_2 = new lib.Tween33("synched",0);
	this.instance_2.setTransform(330,786.3);
	this.instance_2.alpha = 0.191;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(572,573.5,1,1,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({rotation:72,x:464,y:694.9,alpha:1},22).to({_off:true,rotation:121,x:572,y:573.5},22).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},22).to({rotation:219,x:596.4,y:480,alpha:0.68},20).to({rotation:360,x:572,y:380,alpha:1},28).to({rotation:413,x:506,y:312,alpha:0},12).wait(1));

	// headerMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJeAhsQrAm0nxnuQq5qzi1rAQjjtyJTtYQFDmZGxh9QFahjGQBXQEeA9EdCVQCOBKBVA+QA8g0BuhBQDciCDxhAQFShbFMA0QGfBAF+EeQMGLYh7N7Qh7N5rDLdQn6ILrtHXQl3DrkQCDQj9h3lhjbg");
	mask.setTransform(321.9,540.9);

	// Layer 5
	this.instance_4 = new lib.Tween32("synched",0);
	this.instance_4.setTransform(506.1,-12.9);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},40).to({x:-8.5,y:1018.6},104).wait(1));

	// Layer 1
	this.instance_5 = new lib.Tween30("synched",0);
	this.instance_5.setTransform(321.7,540.4);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Tween31("synched",0);
	this.instance_6.setTransform(321.7,540.4);

	this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},40).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,alpha:1},40).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,291.4,549.8,499);


(lib.MC_screen5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":122});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_122 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(121).call(this.frame_122).wait(13));

	// Layer 1
	this.instance = new lib.Tween29("synched",0);
	this.instance.setTransform(326,509.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},44).to({startPosition:0},46).to({alpha:0},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,270.4,528,479);


(lib.MC_screen4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":218});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_218 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(217).call(this.frame_218).wait(67));

	// 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(430,208.7,1,1,33);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:412.7,y:405.6,alpha:1},213).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(627.4,440,1,1,47);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({rotation:0,x:462.9,y:445.6,alpha:1},210).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 3
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(621,623.1,1,1,30);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({rotation:0,x:444.1,y:501.2,alpha:1},206).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 4
	this.instance_3 = new lib.Tween19("synched",0);
	this.instance_3.setTransform(-45.9,527.9,1,1,-84);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({rotation:0,x:187.1,y:506,alpha:1},202).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 5
	this.instance_4 = new lib.Tween22("synched",0);
	this.instance_4.setTransform(86.3,698.1,1,1,55);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({rotation:0,x:280,y:601,alpha:1},198).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 6
	this.instance_5 = new lib.Tween23("synched",0);
	this.instance_5.setTransform(-10.5,345.8,1,1,-119);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:176.4,y:447,alpha:1},213).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 7
	this.instance_6 = new lib.Tween24("synched",0);
	this.instance_6.setTransform(37,163.8,1,1,-111);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({rotation:0,x:229.1,y:404.9,alpha:1},209).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 8
	this.instance_7 = new lib.Tween25("synched",0);
	this.instance_7.setTransform(166.1,360.2,1,1,-68);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({rotation:0,x:259.1,y:483.4,alpha:1},205).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 9
	this.instance_8 = new lib.Tween26("synched",0);
	this.instance_8.setTransform(325,111.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:321,y:420.4,alpha:1},201).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 10
	this.instance_9 = new lib.Tween27("synched",0);
	this.instance_9.setTransform(498.4,409.1,1,1,59);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({rotation:0,x:381.5,y:485.6,alpha:1},197).to({startPosition:0},36).to({alpha:0},35).wait(1));

	// 11
	this.instance_10 = new lib.Tween28("synched",0);
	this.instance_10.setTransform(470.6,743,1,1,19);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:354.8,y:584.3,alpha:1},213).to({startPosition:0},36).to({alpha:0},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,106.1,617.1,749.4);


(lib.MC_screen3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":249});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_249 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(248).call(this.frame_249).wait(1));

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(339.4,320.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:311.8,alpha:1},33).to({y:273.8},173).to({y:268.8,alpha:0},43).wait(1));

	// a1
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(290,450);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2.26,scaleY:2.26,rotation:-61.9,x:185.5,y:476.9},11).to({scaleX:4.68,scaleY:4.68,rotation:-180,x:235,y:659.2},21).to({scaleX:3.98,scaleY:3.98,rotation:0,x:207.4,y:637.8},3).to({scaleX:3.06,scaleY:3.06,x:400.9,y:610.1},4).to({scaleX:2.99,scaleY:2.99,rotation:170,x:453.1,y:558.3},3).to({scaleX:2.92,scaleY:2.92,rotation:168.5,x:500.6,y:504.4},3).to({scaleX:1,scaleY:1,rotation:0,x:700,y:240},87).to({_off:true},1).wait(117));

	// a2
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(290,450);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(670,269.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_3}]},76).to({state:[]},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({scaleX:2.85,scaleY:2.85,rotation:177,x:218.2,y:647.4},25).to({scaleX:2.79,scaleY:2.79,rotation:-2,x:232.6,y:657.7},11).to({scaleX:2.69,scaleY:2.69,rotation:0,x:236.5,y:660.1},8).to({scaleX:4.07,scaleY:4.07,rotation:140.4,x:346.6,y:652.3},12).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:670,y:269.1},76).wait(107));

	// a3
	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.setTransform(290,450);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({scaleX:2.66,scaleY:2.66,rotation:-34,x:211,y:641.2},21).to({rotation:-91,x:241.5,y:662.9},22).to({rotation:45},12).to({rotation:186,x:222,y:650.4},12).to({scaleX:1.57,scaleY:1.57,rotation:270,x:675.7,y:274.4},55).to({_off:true},1).wait(95));

	// a4
	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.setTransform(290,450);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({rotation:-61,x:161.9,y:530},47).to({scaleX:2.57,scaleY:2.57,rotation:-146.9,x:181.4,y:604.7},10).to({scaleX:1,scaleY:1,rotation:-147,x:220,y:648.9},10).to({scaleX:3.07,scaleY:3.07,rotation:-277,x:250,y:666.9},10).to({scaleX:1,scaleY:1,rotation:-454,x:657.3,y:300},51).to({_off:true},1).wait(86));

	// a5
	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.setTransform(290,450);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).to({x:190,y:473.7},32).to({x:164.1,y:560},10).to({rotation:-12,x:190,y:617.9},18).to({scaleX:2.84,scaleY:2.84,rotation:-83,x:236.4,y:660},11).to({scaleX:2.2,scaleY:2.2,rotation:-191,x:540,y:480},29).to({scaleX:1.87,scaleY:1.87,rotation:-247,x:680,y:268.3},15).to({_off:true},1).wait(80));

	// a6
	this.instance_7 = new lib.Tween15("synched",0);
	this.instance_7.setTransform(280.1,450.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({rotation:94,x:164.4,y:510},19).to({rotation:206,x:179.5,y:601.5},20).to({scaleX:3.43,scaleY:3.43,rotation:289,x:324.9,y:682},30).to({scaleX:1.61,scaleY:1.61,rotation:160,x:664.3,y:290.4},26).to({_off:true},1).wait(84));

	// a7
	this.instance_8 = new lib.Tween16("synched",0);
	this.instance_8.setTransform(290,450);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,x:164.4,y:510},18).to({rotation:85,x:170,y:580.8},16).to({rotation:207,x:184.6,y:609.9},6).to({rotation:340,x:218.6,y:647.7},6).to({rotation:360,x:270,y:673.3},7).to({scaleX:2.04,scaleY:2.04,rotation:243,x:348.4,y:651.2},6).to({scaleX:1.41,scaleY:1.41,rotation:254,x:664.5,y:290},35).to({_off:true},1).wait(70));

	// a8
	this.instance_9 = new lib.Tween17("synched",0);
	this.instance_9.setTransform(290,450);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96).to({_off:false},0).to({rotation:81,x:167.9,y:500},29).to({scaleX:2.17,scaleY:2.17,rotation:200,x:199.9,y:630},12).to({scaleX:2.54,scaleY:2.54,rotation:326,x:280,y:674.7},7).to({scaleX:3.22,scaleY:3.22,rotation:360,x:364.1,y:640.4},6).to({scaleX:1.29,scaleY:1.29,rotation:285,x:664.5,y:290},41).to({_off:true},1).wait(58));

	// a9
	this.instance_10 = new lib.Tween18("synched",0);
	this.instance_10.setTransform(290,450);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105).to({_off:false},0).to({x:237.4,y:461.2},14).to({x:196.1,y:470},11).to({scaleX:1,scaleY:1,rotation:-30.8,x:162.8,y:520},4).to({rotation:-54.1,x:162.6,y:550},3).to({scaleX:1,scaleY:1,rotation:-108,x:200,y:630.1},7).to({scaleX:2.67,scaleY:2.67,rotation:42,x:250,y:666.9},7).to({rotation:171,x:350,y:650.1},8).to({rotation:328,x:450,y:561.6},11).to({rotation:360,x:528.8,y:470},9).to({scaleX:1.49,scaleY:1.49,x:668.1,y:285.1},19).to({_off:true},1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227.4,278.8,224,188);


(lib.MC_screen2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":128});

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":132});

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
		
		var playList = ["screen1","screen2","screen3","screen4","screen5","screen6","screen7","screen8"]; 
		//var playList = ["screen8"]; 
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
		
		}
		
		var playNextMC = function () {
				playIndex++;
		
			//index add 1
			if (playIndex < playList.length) {
		
				//again
				playClip();
			}  
			else if (playIndex >= playList.length) {
				
				alert('end');
			}
		
		
		}
		
		
		var playPrevMC = function(){
				playIndex--;
			if (playIndex<0){
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