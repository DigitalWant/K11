(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 40,
	color: "#000000",
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
	this.instance.setTransform(336,874.2,1,1,0,0,0,250.8,31.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).wait(1).to({regX:251,regY:31.5,x:336.1,y:871,alpha:0.012},0).wait(1).to({x:335.9,y:867.8,alpha:0.024},0).wait(1).to({x:335.8,y:864.7,alpha:0.036},0).wait(1).to({x:335.6,y:861.5,alpha:0.048},0).wait(1).to({x:335.5,y:858.4,alpha:0.06},0).wait(1).to({x:335.4,y:855.2,alpha:0.071},0).wait(1).to({x:335.2,y:852.1,alpha:0.083},0).wait(1).to({x:335.1,y:849,alpha:0.095},0).wait(1).to({x:335,y:846,alpha:0.107},0).wait(1).to({x:334.8,y:842.9,alpha:0.119},0).wait(1).to({x:334.7,y:839.9,alpha:0.131},0).wait(1).to({x:334.6,y:836.9,alpha:0.143},0).wait(1).to({x:334.5,y:833.9,alpha:0.155},0).wait(1).to({x:334.4,y:830.9,alpha:0.167},0).wait(1).to({x:334.2,y:827.9,alpha:0.179},0).wait(1).to({x:334.1,y:825,alpha:0.19},0).wait(1).to({x:334,y:822.1,alpha:0.202},0).wait(1).to({x:333.9,y:819.2,alpha:0.214},0).wait(1).to({x:333.8,y:816.3,alpha:0.226},0).wait(1).to({x:333.7,y:813.4,alpha:0.238},0).wait(1).to({x:333.6,y:810.5,alpha:0.25},0).wait(1).to({x:333.5,y:807.7,alpha:0.262},0).wait(1).to({x:333.4,y:804.9,alpha:0.274},0).wait(1).to({x:333.3,y:802.1,alpha:0.286},0).wait(1).to({x:333.2,y:799.3,alpha:0.298},0).wait(1).to({x:333.1,y:796.6,alpha:0.31},0).wait(1).to({x:333,y:793.8,alpha:0.321},0).wait(1).to({y:791.1,alpha:0.333},0).wait(1).to({x:332.9,y:788.4,alpha:0.345},0).wait(1).to({x:332.8,y:785.7,alpha:0.357},0).wait(1).to({x:332.7,y:783,alpha:0.369},0).wait(1).to({x:332.6,y:780.4,alpha:0.381},0).wait(1).to({x:332.5,y:777.7,alpha:0.393},0).wait(1).to({y:775.1,alpha:0.405},0).wait(1).to({x:332.4,y:772.5,alpha:0.417},0).wait(1).to({x:332.3,y:770,alpha:0.429},0).wait(1).to({y:767.4,alpha:0.44},0).wait(1).to({x:332.2,y:764.9,alpha:0.452},0).wait(1).to({x:332.1,y:762.3,alpha:0.464},0).wait(1).to({y:759.8,alpha:0.476},0).wait(1).to({y:757.3,alpha:0.488},0).wait(1).to({y:754.9,alpha:0.5},0).wait(1).to({y:752.4,alpha:0.512},0).wait(1).to({y:750,alpha:0.524},0).wait(1).to({y:747.6,alpha:0.536},0).wait(1).to({y:745.2,alpha:0.548},0).wait(1).to({y:742.8,alpha:0.56},0).wait(1).to({y:740.4,alpha:0.571},0).wait(1).to({y:738.1,alpha:0.583},0).wait(1).to({y:735.8,alpha:0.595},0).wait(1).to({y:733.5,alpha:0.607},0).wait(1).to({y:731.2,alpha:0.619},0).wait(1).to({y:728.9,alpha:0.631},0).wait(1).to({y:726.7,alpha:0.643},0).wait(1).to({y:724.4,alpha:0.655},0).wait(1).to({y:722.2,alpha:0.667},0).wait(1).to({y:720,alpha:0.679},0).wait(1).to({y:717.8,alpha:0.69},0).wait(1).to({y:715.7,alpha:0.702},0).wait(1).to({y:713.5,alpha:0.714},0).wait(1).to({y:711.4,alpha:0.726},0).wait(1).to({y:709.3,alpha:0.738},0).wait(1).to({y:707.2,alpha:0.75},0).wait(1).to({y:705.2,alpha:0.762},0).wait(1).to({y:703.1,alpha:0.774},0).wait(1).to({y:701.1,alpha:0.786},0).wait(1).to({y:699.1,alpha:0.798},0).wait(1).to({y:697.1,alpha:0.81},0).wait(1).to({y:695.1,alpha:0.821},0).wait(1).to({y:693.7,alpha:0.833},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(173));

	// Layer 1
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(327.9,599.2,1,1,0,0,0,353.9,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(1).to({regX:354.1,x:328.2,y:602.3,alpha:0.012},0).wait(1).to({y:605.3,alpha:0.024},0).wait(1).to({x:328.3,y:608.3,alpha:0.035},0).wait(1).to({y:611.3,alpha:0.047},0).wait(1).to({y:614.2,alpha:0.059},0).wait(1).to({x:328.4,y:617.1,alpha:0.071},0).wait(1).to({y:619.9,alpha:0.082},0).wait(1).to({y:622.6,alpha:0.094},0).wait(1).to({y:625.3,alpha:0.106},0).wait(1).to({x:328.5,y:628,alpha:0.118},0).wait(1).to({y:630.6,alpha:0.129},0).wait(1).to({y:633.1,alpha:0.141},0).wait(1).to({x:328.6,y:635.7,alpha:0.153},0).wait(1).to({y:638.1,alpha:0.165},0).wait(1).to({y:640.5,alpha:0.176},0).wait(1).to({y:642.9,alpha:0.188},0).wait(1).to({x:328.7,y:645.2,alpha:0.2},0).wait(1).to({y:647.5,alpha:0.212},0).wait(1).to({y:649.7,alpha:0.224},0).wait(1).to({y:651.9,alpha:0.235},0).wait(1).to({x:328.8,y:654.1,alpha:0.247},0).wait(1).to({y:656.2,alpha:0.259},0).wait(1).to({y:658.2,alpha:0.271},0).wait(1).to({y:660.2,alpha:0.282},0).wait(1).to({x:328.9,y:662.2,alpha:0.294},0).wait(1).to({y:664.1,alpha:0.306},0).wait(1).to({y:666,alpha:0.318},0).wait(1).to({y:667.9,alpha:0.329},0).wait(1).to({y:669.7,alpha:0.341},0).wait(1).to({x:329,y:671.5,alpha:0.353},0).wait(1).to({y:673.2,alpha:0.365},0).wait(1).to({y:674.9,alpha:0.376},0).wait(1).to({y:676.5,alpha:0.388},0).wait(1).to({y:678.1,alpha:0.4},0).wait(1).to({x:329.1,y:679.7,alpha:0.412},0).wait(1).to({y:681.2,alpha:0.424},0).wait(1).to({y:682.7,alpha:0.435},0).wait(1).to({y:684.2,alpha:0.447},0).wait(1).to({y:685.6,alpha:0.459},0).wait(1).to({y:687,alpha:0.471},0).wait(1).to({y:688.2,alpha:0.482},0).wait(1).to({alpha:0.494},0).wait(1).to({alpha:0.506},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.576},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.671},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.835},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.918},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(173));

	// blur
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:565,y:565,alpha:0.991},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.701},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.573},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.504},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.47},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.427},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.402},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.376},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(173));

	// not blur
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(320,565,1,1,0,0,0,320,565);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(141).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(173));

	// Layer 3
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(320,568,1,1,0,0,0,222,103.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(165).to({_off:false},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.303},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.47},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.515},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.576},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.663},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.576},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.446},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.402},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.337},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

	// layer2
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(-28,0,1.555,1.618);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).wait(1).to({regX:800,regY:351,x:1193.7,y:568,alpha:0.01},0).wait(1).to({x:1171.7,alpha:0.021},0).wait(1).to({x:1149.9,alpha:0.031},0).wait(1).to({x:1128.5,alpha:0.041},0).wait(1).to({x:1107.3,alpha:0.051},0).wait(1).to({x:1086.4,alpha:0.062},0).wait(1).to({x:1065.9,alpha:0.072},0).wait(1).to({x:1045.6,alpha:0.082},0).wait(1).to({x:1025.6,alpha:0.093},0).wait(1).to({x:1005.9,alpha:0.103},0).wait(1).to({x:986.4,alpha:0.113},0).wait(1).to({x:967.3,alpha:0.123},0).wait(1).to({x:948.4,alpha:0.134},0).wait(1).to({x:929.8,alpha:0.144},0).wait(1).to({x:911.4,alpha:0.154},0).wait(1).to({x:893.3,alpha:0.165},0).wait(1).to({x:875.4,alpha:0.175},0).wait(1).to({x:857.8,alpha:0.185},0).wait(1).to({x:840.5,alpha:0.195},0).wait(1).to({x:823.4,alpha:0.206},0).wait(1).to({x:806.6,alpha:0.216},0).wait(1).to({x:790,alpha:0.226},0).wait(1).to({x:773.6,alpha:0.236},0).wait(1).to({x:757.5,alpha:0.247},0).wait(1).to({x:741.5,alpha:0.257},0).wait(1).to({x:725.9,alpha:0.267},0).wait(1).to({x:710.4,alpha:0.278},0).wait(1).to({x:695.2,alpha:0.288},0).wait(1).to({x:680.2,alpha:0.298},0).wait(1).to({x:665.4,alpha:0.308},0).wait(1).to({x:650.8,alpha:0.319},0).wait(1).to({x:636.5,alpha:0.329},0).wait(1).to({x:622.3,alpha:0.339},0).wait(1).to({x:608.3,alpha:0.35},0).wait(1).to({x:594.6,alpha:0.36},0).wait(1).to({x:581,alpha:0.37},0).wait(1).to({x:567.7,alpha:0.38},0).wait(1).to({x:554.5,alpha:0.391},0).wait(1).to({x:541.6,alpha:0.401},0).wait(1).to({x:528.8,alpha:0.411},0).wait(1).to({x:516.2,alpha:0.422},0).wait(1).to({x:503.7,alpha:0.432},0).wait(1).to({x:491.5,alpha:0.442},0).wait(1).to({x:479.4,alpha:0.452},0).wait(1).to({x:467.6,alpha:0.463},0).wait(1).to({x:455.8,alpha:0.473},0).wait(1).to({x:444.3,alpha:0.483},0).wait(1).to({x:432.9,alpha:0.494},0).wait(1).to({x:421.7,alpha:0.504},0).wait(1).to({x:410.6,alpha:0.514},0).wait(1).to({x:399.7,alpha:0.524},0).wait(1).to({x:389,alpha:0.535},0).wait(1).to({x:378.4,alpha:0.545},0).wait(1).to({x:367.9,alpha:0.555},0).wait(1).to({x:357.6,alpha:0.565},0).wait(1).to({x:347.5,alpha:0.576},0).wait(1).to({x:337.5,alpha:0.586},0).wait(1).to({x:327.6,alpha:0.596},0).wait(1).to({x:317.9,alpha:0.607},0).wait(1).to({x:308.3,alpha:0.617},0).wait(1).to({x:298.8,alpha:0.627},0).wait(1).to({x:289.5,alpha:0.637},0).wait(1).to({x:279.7,alpha:0.648},0).wait(1).to({x:269.9,alpha:0.658},0).wait(1).to({x:260.3,alpha:0.668},0).wait(1).to({x:250.8,alpha:0.679},0).wait(1).to({x:241.4,alpha:0.689},0).wait(1).to({x:232.1,alpha:0.699},0).wait(1).to({x:223,alpha:0.709},0).wait(1).to({x:214,alpha:0.72},0).wait(1).to({x:205.1,alpha:0.73},0).wait(1).to({x:196.3,alpha:0.725},0).wait(1).to({x:187.7,alpha:0.721},0).wait(1).to({x:179.1,alpha:0.716},0).wait(1).to({x:170.7,alpha:0.711},0).wait(1).to({x:162.4,alpha:0.706},0).wait(1).to({x:154.1,alpha:0.702},0).wait(1).to({x:146,alpha:0.697},0).wait(1).to({x:138,alpha:0.692},0).wait(1).to({x:130.1,alpha:0.687},0).wait(1).to({x:122.3,alpha:0.683},0).wait(1).to({x:114.5,alpha:0.678},0).wait(1).to({x:106.9,alpha:0.673},0).wait(1).to({x:99.4,alpha:0.668},0).wait(1).to({x:91.9,alpha:0.664},0).wait(1).to({x:84.5,alpha:0.659},0).wait(1).to({x:77.3,alpha:0.654},0).wait(1).to({x:70.1,alpha:0.649},0).wait(1).to({x:63,alpha:0.645},0).wait(1).to({x:55.9,alpha:0.64},0).wait(1).to({x:49,alpha:0.635},0).wait(1).to({x:42.1,alpha:0.631},0).wait(1).to({x:35.3,alpha:0.626},0).wait(1).to({x:28.5,alpha:0.621},0).wait(1).to({x:21.9,alpha:0.616},0).wait(1).to({x:15.3,alpha:0.612},0).wait(1).to({x:8.7,alpha:0.607},0).wait(1).to({x:2.3,alpha:0.602},0).wait(1).to({x:-3.9,alpha:0.597},0).wait(1).to({x:-8.6,alpha:0.593},0).wait(1).to({x:-13.2,alpha:0.588},0).wait(1).to({x:-17.8,alpha:0.583},0).wait(1).to({x:-22.4,alpha:0.578},0).wait(1).to({x:-26.9,alpha:0.574},0).wait(1).to({x:-31.4,alpha:0.569},0).wait(1).to({x:-35.8,alpha:0.564},0).wait(1).to({x:-40.2,alpha:0.559},0).wait(1).to({x:-44.6,alpha:0.555},0).wait(1).to({x:-48.9,alpha:0.55},0).wait(1).to({x:-53.2,alpha:0.545},0).wait(1).to({x:-57.5,alpha:0.541},0).wait(1).to({x:-61.7,alpha:0.536},0).wait(1).to({x:-65.9,alpha:0.531},0).wait(1).to({x:-70.1,alpha:0.526},0).wait(1).to({x:-74.2,alpha:0.522},0).wait(1).to({x:-78.3,alpha:0.517},0).wait(1).to({x:-82.4,alpha:0.512},0).wait(1).to({x:-86.5,alpha:0.507},0).wait(1).to({x:-90.5,alpha:0.503},0).wait(1).to({x:-94.5,alpha:0.498},0).wait(1).to({x:-98.5,alpha:0.493},0).wait(1).to({x:-102.5,alpha:0.488},0).wait(1).to({x:-106.4,alpha:0.484},0).wait(1).to({x:-110.4,alpha:0.479},0).wait(1).to({x:-114.3,alpha:0.474},0).wait(1).to({x:-118.1,alpha:0.469},0).wait(1).to({x:-122,alpha:0.465},0).wait(1).to({x:-125.9,alpha:0.46},0).wait(1).to({x:-129.7,alpha:0.455},0).wait(1).to({x:-133.5,alpha:0.451},0).wait(1).to({x:-137.3,alpha:0.446},0).wait(1).to({x:-141.1,alpha:0.441},0).wait(1).to({x:-144.9,alpha:0.436},0).wait(1).to({x:-148.6,alpha:0.432},0).wait(1).to({x:-152.4,alpha:0.427},0).wait(1).to({x:-156.1,alpha:0.422},0).wait(1).to({x:-159.8,alpha:0.417},0).wait(1).to({x:-163.5,alpha:0.413},0).wait(1).to({x:-167.2,alpha:0.408},0).wait(1).to({x:-170.9,alpha:0.403},0).wait(1).to({x:-174.6,alpha:0.398},0).wait(1).to({x:-178.3,alpha:0.394},0).wait(1).to({x:-182,alpha:0.389},0).wait(1).to({x:-185.6,alpha:0.384},0).wait(1).to({x:-189.3,alpha:0.379},0).wait(1).to({x:-192.9,alpha:0.375},0).wait(1).to({x:-196.6,alpha:0.37},0).wait(1).to({x:-200.2,alpha:0.365},0).wait(1).to({x:-203.8,alpha:0.361},0).wait(1).to({x:-207.4,alpha:0.356},0).wait(1).to({x:-211.1,alpha:0.351},0).wait(1).to({x:-214.7,alpha:0.346},0).wait(1).to({x:-218.3,alpha:0.342},0).wait(1).to({x:-221.9,alpha:0.337},0).wait(1).to({x:-225.5,alpha:0.332},0).wait(1).to({x:-229.1,alpha:0.327},0).wait(1).to({x:-232.7,alpha:0.323},0).wait(1).to({x:-236.3,alpha:0.318},0).wait(1).to({x:-239.9,alpha:0.313},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.285},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1130);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;