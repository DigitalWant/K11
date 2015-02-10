(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.volvo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1688 = function() {
		this.stop();
		completed();
		//this.dispatchEvent(new Event("completed"))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1688).call(this.frame_1688));

	// 图层 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	mask.setTransform(320,568);

	// 组 14
	this.instance = new lib.lib_mc_000009("synched",0);
	this.instance.setTransform(263.5,703.5,1,1,0,0,0,469.5,729.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1688).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-544,-262.9,2068.3,2076.1);


// symbols:
(lib.lib_img_000001 = function() {
	this.initialize(img.lib_img_000001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,125);


(lib.lib_img_000002 = function() {
	this.initialize(img.lib_img_000002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000003 = function() {
	this.initialize(img.lib_img_000003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000004 = function() {
	this.initialize(img.lib_img_000004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000005 = function() {
	this.initialize(img.lib_img_000005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,193);


(lib.lib_img_000006 = function() {
	this.initialize(img.lib_img_000006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,141);


(lib.lib_img_000007 = function() {
	this.initialize(img.lib_img_000007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,141);


(lib.lib_img_000008 = function() {
	this.initialize(img.lib_img_000008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,127);


(lib.lib_img_000009 = function() {
	this.initialize(img.lib_img_000009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,92);


(lib.lib_img_000010 = function() {
	this.initialize(img.lib_img_000010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,110);


(lib.lib_img_000011 = function() {
	this.initialize(img.lib_img_000011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,145);


(lib.lib_img_000012 = function() {
	this.initialize(img.lib_img_000012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000013 = function() {
	this.initialize(img.lib_img_000013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,380);


(lib.lib_img_000014 = function() {
	this.initialize(img.lib_img_000014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000015 = function() {
	this.initialize(img.lib_img_000015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,1135);


(lib.lib_img_000016 = function() {
	this.initialize(img.lib_img_000016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,825,527);


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


(lib.lib_img_000021 = function() {
	this.initialize(img.lib_img_000021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,927);


(lib.lib_img_000022 = function() {
	this.initialize(img.lib_img_000022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,926,521);


(lib.lib_img_000023 = function() {
	this.initialize(img.lib_img_000023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000024 = function() {
	this.initialize(img.lib_img_000024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.lib_img_000025 = function() {
	this.initialize(img.lib_img_000025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.lib_img_000026 = function() {
	this.initialize(img.lib_img_000026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000027 = function() {
	this.initialize(img.lib_img_000027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_img_000028 = function() {
	this.initialize(img.lib_img_000028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,925);


(lib.lib_img_000029 = function() {
	this.initialize(img.lib_img_000029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,582);


(lib.lib_img_000030 = function() {
	this.initialize(img.lib_img_000030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,456);


(lib.lib_img_000031 = function() {
	this.initialize(img.lib_img_000031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1048,1439);


(lib.lib_img_000032 = function() {
	this.initialize(img.lib_img_000032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,116);


(lib.lib_mc_000083 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000031();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1048,1439);


(lib.lib_mc_000082 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8DKQgPABgEgJQgCgGAAgMIAAlfQAAgbAVAAIB2AAQAKABAEADQAFAEAAARIAAAWQAAAUgIAEQgFACgGgBIg6AAQgHAAgDAFIgBAJIAAA5QAAAIACACQACACAHAAIAdAAQARAAAAAVIAAAdQAAAUgRAAIgdAAQgGAAgDACQgCADAAAEIAABVQAAANALAAIA9AAQAVAAAAAaIAAAUQAAAagUAAg");
	this.shape.setTransform(397.7,88.5,1.153,1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHDKQguABgOgmQgOgkAAh5IAAhtQADgmAKgWQARgoAogBIBKAAQATAAAAAWIAAAcQAAAOgFAFQgEADgLAAIgvAAQgQABgDARQgDASAABfQAABYgBgNQADA3ATgBIAwAAQATAAAAAWIAAAdQAAAVgSAAg");
	this.shape_1.setTransform(376.6,88.5,1.153,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8DKQgOABgFgJQgCgGAAgMIAAlfQAAgbAVAAIB2AAQAKABAEADQAFAEAAARIAAAWQAAAUgIAEQgEACgHgBIg6AAQgHAAgDAFIgBAJIAAA5QAAAIACACQACACAHAAIAdAAQARAAAAAVIAAAdQAAAUgRAAIgdAAQgGAAgDACQgCADAAAEIAABVQAAANALAAIA9AAQAVAAAAAaIAAAUQAAAagUAAg");
	this.shape_2.setTransform(356.3,88.5,1.153,1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNDKQgLAAgFgDQgFgGgBgRIAAleQAAgbAVgBIAeAAQAUABgBAbIAAFfQAAAOgCAGQgFAFgMAAg");
	this.shape_3.setTransform(338.9,88.5,1.153,1.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLDKQgPABgDgLQgBgEAAgMIAAleQAAgcATAAIBdAAQBNAAAACCQAAB7hEAAIgxAAIAAB9QAAARgEAFQgEAEgLAAgAgWh3IAABaQAAAKAJAAIASAAQAOABADgXIABggQAAgjgEgMQgFgKgLAAIgPAAQgKABAAAKg");
	this.shape_4.setTransform(321.8,88.5,1.153,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmDKQgNAAgDgRIgXiSQgBgGgGAAIgJAAQgGAAAAAGIAACKQAAAagVgBIghAAQgOABgDgKQgCgEAAgNIAAleQAAgbAVgBIBVAAQBTAAAAB+QAAA/ghAaIAlC1QAAAIgLAAgAgXh5IAABJQgBALAHAAIASAAQAVAAAAgwQABgtgVAAIgRAAQgJAAABAJg");
	this.shape_5.setTransform(297.4,88.5,1.153,1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9DKQgOABgEgJQgCgGAAgMIAAlfQAAgbAUAAIB3AAQAKABAEADQAFAEAAARIAAAWQAAAUgIAEQgFACgGgBIg6AAQgIAAgCAFIgBAJIAAA5QAAAIACACQACACAHAAIAdAAQARAAAAAVIAAAdQAAAUgRAAIgdAAQgGAAgDACQgCADAAAEIAABVQAAANALAAIA8AAQAWAAAAAaIAAAUQAAAagUAAg");
	this.shape_6.setTransform(274.6,88.5,1.153,1.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgODKQgRABgDgMQgBgDAAgLIAAknQABgLgJgBIgfAAQgLAAgDgDQgFgEABgRIAAgVQgBgTAIgFQAFgCAIgBICSAAQATABABAYIAAAWQAAAWgMACIgIABIgfAAQgIABAAALIAAEmQAAAOgDAHQgFAGgLgBg");
	this.shape_7.setTransform(252.2,88.5,1.153,1.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBDKQgNABgEgGQgEgGAAgOIAAgVQAAgTAHgDQAEgEAJAAIA/AAQAOABAAgRQAAgFgDgIIhDh/Qgcg2AAgwQAAgpASgQQATgQAmgBIBEAAQARAAAAAXIAAAbQAAAWgTAAIg2AAQgRAAAAASQAAAIAFAKIA/B2QAlBGAAArQAABChBgBg");
	this.shape_8.setTransform(230.6,88.5,1.153,1.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArDKQgIABgCgMIgLhWQgCgJgJAAIgXAAQgJAAgCAJIgKBXQgBALgKgBIg3AAQgMABABgKIAylzQADgYAWAAIBFAAQAUAAADAZIA1FyQACAKgLgBgAgFh4IgKCKQgCAGAJAAIAOAAQAJAAgBgGIgLiLQgBgJgCAAQgFAAAAAKg");
	this.shape_9.setTransform(207,88.5,1.153,1.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABJDKQgMABgEgIQgEgEAAgOIAAilQABgNgDAAQgDAAgCAMIgYB4QgEASgSAAQgRAAgDgSIgZh4QgDgMgCAAQgCAAgBANIAAClQAAAOgCAEQgFAIgMgBIghAAQgPAAgEgKIgBlwQABgPADgFQAEgFAMgBIAhAAQAQABAEADQAEADAEAMIApCSQABAGACAAQADAAACgGIAoiSQADgMAFgDQAEgDAPgBIAiAAQAMABAEAFQAEAFgBAPIAAFgQAAAVgGADQgFADgJgBg");
	this.shape_10.setTransform(177.6,88.5,1.153,1.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgODLQgNAAgEgHQgEgGAAgOIAAiAIhCjkQgGgWARABIAoAAQAMAAAEAOIAfCEQACAHABAAQACAAACgHIAfiEQAEgOAMAAIApAAQAQgBgGAWIhDDkIAACAQAAAQgEAFQgEAGgMAAg");
	this.shape_11.setTransform(569.4,24,1.153,1.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmDLQgNgBgDgRIgWiSQgCgFgGgBIgJAAQgHABAAAFIAACKQABAagVAAIggAAQgOAAgDgKQgDgFAAgMIAAleQAAgcAVABIBVAAQBTAAAAB9QAABAggAZIAjCtIABAIQAAAIgLABgAgYh5IAABJQABAMAFgBIATAAQAWABAAgxQAAgsgVAAIgSAAQgHAAgBAIg");
	this.shape_12.setTransform(545.8,24,1.153,1.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArDLQgIAAgCgLIgLhXQgCgJgJAAIgXAAQgJAAgCAJIgKBYQgBAKgKAAIg3AAQgMAAABgKIAylzQADgYAWABIBFAAQAUAAADAYIA1FyQACAKgLAAgAgFh4IgKCJQgCAHAJAAIAOAAQAJAAgBgHIgLiJQgBgKgCABQgFAAAAAJg");
	this.shape_13.setTransform(519.7,24,1.153,1.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA1DLQgLAAgEgDQgEgEgEgMIgxiYQgDgJgEAAQgDAAAAAMIAACNQAAAbgTAAIggAAQgWgBAAgbIAAldQAAgSAGgGQAFgDALAAIAcAAQALAAAEADQAFADADAMIAxCYQADAIAEAAQADAAAAgMIAAiLQAAgbATAAIAgAAQAWgBAAAcIAAFdQAAASgGAGQgFAEgLAAg");
	this.shape_14.setTransform(493,24,1.153,1.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNDLQgLAAgFgEQgGgGABgRIAAleQgBgcAVABIAfAAQASgBABAcIAAFfQgBAPgDAEQgDAHgNAAg");
	this.shape_15.setTransform(473.3,24,1.153,1.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLDLQgPgBgEgHQgDgGAAgNIAAleQAAgcAUABIBmAAQAwAAANAtQAMAmAAB2QAABYgFAqQgIAsgQAPQgPAOggAAgAgXh/QgEADAAANIAADhQAAAMADACQADACAQAAQAPABAEgGQAIgHABgZQACgVAAhDQAAhIgBgVQgCgcgHgIQgGgFgPAAQgNAAgEACg");
	this.shape_16.setTransform(454.8,24,1.153,1.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAmDLQgNgBgDgRIgXiSQgBgFgGgBIgJAAQgHABAAAFIAACKQABAagVAAIghAAQgNAAgEgKQgCgHAAgKIAAleQAAgcAVABIBVAAQBTAAAAB9QAABAggAZIAjCtIABAIQAAAIgLABgAgYh5IAABJQABAMAFgBIATAAQAWABAAgxQAAgsgVAAIgSAAQgHAAgBAIg");
	this.shape_17.setTransform(430.1,24,1.153,1.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhVCUQgLgkgBhwQABhwALglQAUg5BBAAQBCAAAUA5QALAmABBvQgBBwgLAkQgVA7hBAAQhBAAgUg7gAgWhpQgDAVgBBUQABBSADAXQAFAZARAAQATAAAEgZQADgUABhVQAAhTgEgWQgFgZgSAAQgRAAgFAZg");
	this.shape_18.setTransform(404.6,24.1,1.153,1.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AArDLQgIAAgCgLIgMhXQgBgJgJAAIgXAAQgKAAgBAJIgKBYQgBAKgKAAIg4AAQgLAAABgKIAxlzQADgYAXABIBFAAQAUAAADAYIA1FyQACAKgLAAgAgFh4IgKCJQgCAHAJAAIANAAQAJAAAAgHIgMiJQAAgKgCABQgFAAAAAJg");
	this.shape_19.setTransform(379.1,24,1.153,1.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAnDLQgOgBgDgRIgXiSQgBgFgGgBIgJAAQgHABAAAFIAACKQABAagVAAIggAAQgOAAgEgKQgCgHAAgKIAAleQAAgcAVABIBVAAQBTAAAAB9QAABAggAZIAjCtIABAIQAAAIgLABgAgYh5IAABJQABAMAFgBIATAAQAWABAAgxQAAgsgVAAIgSAAQgHAAgBAIg");
	this.shape_20.setTransform(354.5,24,1.153,1.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgODLQgQAAgEgMIAAgOIAAknQAAgMgJABIgfAAQgKgBgEgDQgEgEAAgRIAAgUQAAgVAHgEQAFgDAIABICSAAQATgBAAAZIAAAWQAAAWgLADIgIABIgfAAQgIgBAAAMIAAEmQAAAPgDAGQgFAFgLABg");
	this.shape_21.setTransform(330.4,24,1.153,1.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AArDLQgOgBgCgPIgWh+QgBgHgEAAQgDAAgBAHIgWB+QgCAPgOABIgwAAQgOAAAEgXIApi6IgpiuIgBgJQAAgMANAAIAvAAQANAAADAQIAWByQABAIACAAQADAAABgIIAWhyQADgQANAAIAuAAQAOAAAAAMIgCAJIgoCuIAoC6QAGAXgPAAg");
	this.shape_22.setTransform(307.4,24,1.153,1.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9DLQgOAAgEgJQgCgEAAgOIAAleQAAgbAUAAIB3AAQAKAAAEADQAFAEAAARIAAAWQABAUgJAEQgEABgHABIg6AAQgIAAgCADIgBAKIAAA5QABAIABACQACACAHAAIAdAAQARAAABAVIAAAdQgBAUgRAAIgdAAQgGAAgDACQgCACAAAFIAABVQAAANALAAIA8AAQAWAAAAAbIAAATQAAAbgVAAg");
	this.shape_23.setTransform(285.6,24,1.153,1.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhBDLQgNgBgEgFQgEgGAAgOIAAgVQAAgSAHgFQAEgDAJAAIA/AAQAOAAAAgQQAAgFgDgIIhDiAQgcg0AAgxQAAgpASgQQATgRAmABIBEAAQARAAAAAVIAAAbQAAAYgTAAIg2AAQgRAAAAARQAAAJAFAJIA/B2QAlBGAAAsQAABBhBAAg");
	this.shape_24.setTransform(250.5,24,1.153,1.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNDLQgLAAgFgEQgFgGAAgRIAAleQAAgcAUABIAeAAQATgBAAAcIAAFfQAAAPgDAEQgDAHgOAAg");
	this.shape_25.setTransform(233.9,24,1.153,1.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAuDLQgTAAAAgbIAAiMQAAgNgJAAIgjAAQgKAAAAANIAACMQAAAbgTAAIggAAQgUAAAAgbIAAlfQAAgbAUABIAhAAQASgBAAAaIAAB2QAAALAKAAIAjAAQAJAAAAgLIAAh2QAAgaATABIAgAAQAVgBAAAbIAAFfQAAAbgVAAg");
	this.shape_26.setTransform(214.7,24,1.153,1.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgODLQgRAAgCgMQgCgFAAgJIAAknQAAgMgIABIggAAQgKgBgDgDQgEgEgBgRIAAgUQABgVAHgEQAFgDAHABICTAAQATgBAAAZIAAAWQABAWgLADIgIABIggAAQgIgBAAAMIAAEmQAAAOgEAHQgDAFgNABg");
	this.shape_27.setTransform(190.4,24,1.153,1.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA1DLQgLAAgEgDQgEgDgFgNIgxiYQgDgJgEAAQgCAAAAAMIAACNQAAAbgTAAIggAAQgWgBAAgbIAAldQAAgSAGgGQAFgDAKAAIAcAAQAMAAAEADQAEACAEANIAxCYQADAIAEAAQADAAAAgMIAAiLQAAgbATAAIAgAAQAWgBAAAcIAAFdQAAASgGAGQgFAEgLAAg");
	this.shape_28.setTransform(152.4,24,1.153,1.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag9DLQgOAAgEgJQgCgEAAgOIAAleQAAgbAUAAIB3AAQAJAAAFADQAFAEAAARIAAAWQAAAUgJAEQgDABgHABIg6AAQgIAAgCADIgBAKIAAA5QAAAIACACQABACAIAAIAdAAQARAAAAAVIAAAdQAAAUgRAAIgdAAQgHAAgCACQgCACAAAFIAABVQAAANALAAIA8AAQAWAAAAAbIAAATQAAAbgUAAg");
	this.shape_29.setTransform(129,24,1.153,1.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AArDLQgNgBgEgRIgbiHQgDgTgEAAQgFAAgNAZQgGAKAAAYIAABXQAAAPgDAEQgEAHgNAAIgeAAQgLAAgFgEQgGgGAAgRIAAleQAAgcAVABIAgAAQATgBAAAcIAABaQAAAGADACQADABADgJIArheIAKgTQAFgEAIAAIA3AAQAHAAAAAHQAAAEgCADIg8B1QgDAFgBAHQAAACACAKIA+DmIABAKQAAAJgLAAg");
	this.shape_30.setTransform(105.2,24,1.153,1.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AArDLQgIAAgCgLIgMhXQgBgJgJAAIgXAAQgKAAgBAJIgKBYQgBAKgKAAIg4AAQgLAAABgKIAxlzQADgYAXABIBFAAQAUAAADAYIA1FyQACAKgLAAgAgFh4IgKCJQgCAHAJAAIANAAQAJAAAAgHIgMiJQAAgKgCABQgFAAAAAJg");
	this.shape_31.setTransform(78.3,24,1.153,1.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAlDLQgKAAgDgEQgDgFgBgKIgRiHQgBgIgCAAQgBAAgBAHIgiCPQgDAMgOAAIgnAAQgNgBgCgPIg6l3QAAgOAQABIApAAQANAAACARIAdDEQAAAIAFAAQADAAACgIIAbhyIgIhOQgDgVASAAIApAAQANAAACARIAYDEQAAAIAEAAQAEAAABgIIAZjFQACgRALABIAtAAQAOAAAAAMIgBAJIg/FtQgEARgNABg");
	this.shape_32.setTransform(45.9,24,1.153,1.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AArDLQgJAAgBgLIgMhXQgBgJgJAAIgYAAQgJAAgBAJIgKBYQgBAKgKAAIg4AAQgLAAABgKIAxlzQADgYAXABIBFAAQAUAAADAYIA1FyQACAKgLAAgAgFh4IgLCJQAAAHAIAAIANAAQAJAAAAgHIgMiJQAAgKgCABQgFAAAAAJg");
	this.shape_33.setTransform(13.5,24,1.153,1.15);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.3,580.8,111.6);


(lib.lib_mc_000081 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOCBIAAjEIgRAAQgRAfgUAfQgMgMgFgCQAmg0ATg5IASAFQgHAVgHAQICAAAIAAATIhhAAIAAAuIBWAAIAAAUIhWAAIAAAuIBYAAIAAASIhYAAIAABCgAhcCBIAAiTQgUAegIAMIgKgWQAkgxAZhQIAWAGQgMAigNAaIAAC+g");
	this.shape.setTransform(208,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKB8Qg4gCgigiQgDgEgDAEIgGAFQgTASgIALIgNgUQAGgEAMgLIARgQQAJgHAJACQBfg7A7g8Ii5AAIAAgUIDWAAIAAAUQhHBIheA7QAXAZAxAAQAvAEBLgEIgBAFQgFANAAAEIh1gBgAgVhzIAUgJIAFAJIARAdIgUALg");
	this.shape_1.setTransform(179.9,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcB5IAAicIgjAAIAAgUIAjAAIAAg1IAWAAIAAA1IAyAAIAAhBIAUAAIAABBIBFAAIAAhBIAUAAIAABBIAnAAIAAAUIgnAAIAABdIhtAAIAAhdIgyAAIAACJIDAAAIAAATgAAAAmIBFAAIAAhJIhFAAg");
	this.shape_2.setTransform(152,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfCCIAAkAIAUAAIAAA2IALgIQAMAQAOAVIgQALIgVgjIAADFgAgIB/QgCgOgDgHIAaABQAQABgBgOIAAhCIg4AAIAAhOICIAAIAABOIg8AAIAABFQACAeghAAgAgIALIBgAAIAAgsIhgAAgABGA5IAQgLQAbAlASAWIgSANgAg8BpQAXgXAVgkIAQAKQgWAmgWAYgAiCgFQAHgTAEgcIAEgOIAQAEIgEAUQgFAZgEARQgJgEgJgBgAgvhOIAAgSIBMAAIgGgSIgFgKIAUgFQAGAPAGASIBPAAIAAASg");
	this.shape_3.setTransform(123.8,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABECCIAAgRIiQAAIAAARIgWAAIAAh2IC8AAIAAB2gAhMBgICQAAIAAhAIiQAAgABZgVIi0AIQgSABgJACIgKgVQANgEAJgJQAtgjAngyIATAMQgjAqgwApQBLgEBSgCIgMgMQgEgGgVgUIAPgNQAyAvAeAgIgTANg");
	this.shape_4.setTransform(96.5,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiEBsIAkgiIAAhXIggAAIAAgTIA0AAIAABvQAPAaAngBQA+ACBdgDIgIAVIiVgBQgsACgTgfQgOAJgTAZgAg5BJQAxgUAfgiIgVgRIgoghIAOgOIA9AxQAZgbAOgnIh/AAIAAgSIBUAAQgKgSgOgUIARgJIAaAlIgRAKIBZAAIAAASIgaAAQgTAwgaAgQAbAWAkAfIgQASIg+g4QggAigyAXgAh0htIASgMQAKANAJAPIASAXIgUAMIgjgzg");
	this.shape_5.setTransform(68,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggB6IAAgTIhJAAIAAATIgRAAIAAi/IAhAAIAAggIgnAAIAAgSIB2AAIAAASIgkAAIAAAgIAgAAIAAC/gAhpBYIBJAAIAAggIhJAAgAhpAoIBJAAIAAgVIgLAAQgRAAAAgSIAAg1IgQAAIAAAMQABAsgUAXIgKgLgAhpAMQARgNgBgpIAAgKIgQAAgAgugDQAAAGAJAAIAFAAIAAg3IgOAAgAhMhFIAQAAIAAggIgQAAgAgJBvIAAgQIA6AAIAAgfIgxAAIAAgRIAxAAIAAgeIgkAAIgMAaQgDgFgKgDQAMgaAHgfIARAEQgBAIgEALIAeAAIAAgaIATAAIAAAaIA0AAIAAAQIg0AAIAAAeIAyAAIAAARIgyAAIAAAfIA9AAIAAAQgAAAghIAAhYIB0AAIAABYgAATgxIBQAAIAAgUIhQAAgAAThVIBQAAIAAgUIhQAAg");
	this.shape_6.setTransform(40.2,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhBBvQBHgTAMgqIhGAAIAAgSIASAAIAAhIQgIgIgGgEQAegdAVgwIAVADQgDAMgLAPIBKAAIAAARIgdAkIAxAAIAABOIASAAIAAASIhLAAQAVAsA5APIgKAUQg+gWgTgsQgRAphHAZQgEgKgHgIgAAsAHQAAAMgDANIAsAAIAAg8IgpAAgAgQAgIAnAAIABgaIAAgiIgoAAgAgcguIA9AAIAbgkIg8AAQgLASgRASgAh8BgIAAjCIBAAAIAACrIgtAAIAAAXgAhpA4IAaAAIAAiHIgaAAg");
	this.shape_7.setTransform(12.7,13.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,221,26.3);


(lib.lib_mc_000080 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000032();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,249,116);


(lib.lib_mc_000076 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRDZQgQAAgFgIQgCgHAAgNIAAl3QAAgeAVAAIBuAAQAzAAAPAxQAMAoAAB/QAABhgGAqQgHAvgRAQQgRAPgjAAgAgZiIQgEAEgBAMIAADyQAAANAFADQAEACAQAAQAPAAAGgGQAHgIADgbQACggAAg+QAAhFgCgeQgCgegIgJQgFgGgSAAQgNAAgFADg");
	this.shape.setTransform(442.4,89.8,1.153,1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6DZQgOAAgEgHQgEgFAAgQIAAl5QAAgcAWAAIAiAAQAOAAAEAIQADAFAAAPIAAE7QAAANAJAAIA1AAQAWAAAAAbIAAAWQAAAcgZAAg");
	this.shape_1.setTransform(418.7,89.8,1.153,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqDZQgPAAgDgTIgZidQgBgFgHAAIgJAAQgHAAAAAFIAACVQAAAbgWAAIgjAAQgPAAgDgJQgDgHAAgMIAAl3QAAgeAXAAIBbAAQBZAAAACGQAABEgjAcIAmC6IABAIQAAAJgMAAgAgZiCIAABPQAAAMAGAAIAUAAQAXAAABg1QgBgvgWAAIgTAAQgIAAAAAJg");
	this.shape_2.setTransform(395,89.8,1.153,1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbCfQgMgnAAh4QAAh5AMgmQAVg+BGAAQBHAAAUA+QANAmAAB5QAAB5gNAmQgVA/hGAAQhGAAgVg/gAgXhwQgEAWAABaQAABXAEAZQAFAcASAAQATAAAGgcQADgTAAhdQAAhZgEgXQgEgagUAAQgTAAgEAag");
	this.shape_3.setTransform(367.7,89.9,1.153,1.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoDZQgKAAgEgFQgDgDgCgLIgSiSQgBgIgCAAQAAAAgDAHIgjCZQgEANgOAAIgrAAQgNAAgDgQIg9mJIgBgJQAAgPARAAIAtAAQAMAAADATIAfDSQABAIAFABQADgBACgIIAdh7IgJhTQgCgXASAAIAsAAQAOAAADATIAZDRQABAKAEAAQAFAAAAgKIAajTQADgRAMAAIAwAAQAPAAAAAOIgBAJIhEGHQgDATgQAAg");
	this.shape_4.setTransform(333.5,89.8,1.153,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBDZQgPAAgEgIQgDgHAAgNIAAl4QAAgdAWAAIB/AAQALAAAEAEQAGAFAAAQIAAAZQAAAVgKAFQgDABgIAAIg+AAQgJAAgBAEQgBADAAAIIAAA8QAAAKABACQACACAIAAIAfAAQATgBAAAXIAAAfQAAAVgTAAIgfAAQgHAAgCADQgCACAAAFIAABcQAAAOALAAIBBAAQAXAAAAAcIAAAVQAAAcgWAAg");
	this.shape_5.setTransform(288.1,89.8,1.153,1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyDZQgVAAABgcIAAiWQAAgPgLAAIglAAQgLAAAAAPIAACWQABAcgVAAIgiAAQgWAAAAgcIAAl5QAAgcAWAAIAjAAQATAAAAAbIAAB+QABAMAJABIAnAAQAKgBAAgMIAAh+QgBgbAUAAIAjAAQAWAAAAAcIAAF5QAAAcgWAAg");
	this.shape_6.setTransform(261.8,89.8,1.153,1.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPDZQgTAAgCgNQgBgFAAgIIAAk9QAAgNgJAAIgiAAQgKAAgEgDQgFgGAAgRIAAgWQAAgWAIgEQAFgDAIAAICdAAQAVAAAAAaIAAAYQAAAXgMAEIgIAAIgiAAQgJAAAAANIAAE7QAAAQgDAGQgEAGgNAAg");
	this.shape_7.setTransform(235.8,89.8,1.153,1.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBDZQgPAAgEgIQgDgHAAgNIAAl4QAAgdAWAAIB/AAQALAAAEAEQAGAFAAAQIAAAZQAAAVgJAFQgFABgHAAIg+AAQgJAAgBAEQgBADAAAIIAAA8QAAAKABACQACACAIAAIAfAAQATgBAAAXIAAAfQAAAVgTAAIgfAAQgHAAgCADQgCACAAAFIAABcQAAAOALAAIBBAAQAXAAAAAcIAAAVQAAAcgWAAg");
	this.shape_8.setTransform(199.3,89.8,1.153,1.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPDZQgSAAgDgNIgBgNIAAk9QAAgNgJAAIgiAAQgLAAgDgDQgFgGAAgRIAAgWQAAgWAIgEQAFgDAIAAICdAAQAVAAAAAaIAAAYQAAAXgMAEIgIAAIgiAAQgJAAAAANIAAE7QAAAQgDAGQgEAGgNAAg");
	this.shape_9.setTransform(175.3,89.8,1.153,1.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuDZQgJAAgBgMIgNhcQgBgKgKAAIgZAAQgKAAgCAKIgKBeQgBAKgLAAIg8AAQgMAAABgKIA1mOQADgZAYAAIBKAAQAWAAADAZIA5GOQACAKgMAAgAgGiBIgLCUQAAAHAJAAIAOAAQAKAAgBgHIgMiUQgBgKgCAAQgFAAgBAKg");
	this.shape_10.setTransform(149.5,89.8,1.153,1.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBDZQgPAAgEgIQgDgHAAgNIAAl4QAAgdAWAAIB/AAQALAAAEAEQAGAFAAAQIAAAZQAAAWgJAEQgFABgHAAIg+AAQgIAAgDAEIAAALIAAA8QAAAKABACQACACAIAAIAfAAQATgBAAAXIAAAfQAAAVgTAAIgfAAQgHAAgDADQgBACAAAFIAABcQAAAOALAAIBBAAQAXAAAAAcIAAAVQAAAcgWAAg");
	this.shape_11.setTransform(125.1,89.8,1.153,1.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AApDZQgOAAgDgTIgZidQgBgFgHAAIgJAAQgHAAAAAFIAACVQAAAbgWAAIgjAAQgPAAgEgJQgCgGAAgNIAAl3QAAgeAWAAIBcAAQBZAAAACGQAABFgjAbIAmC6IABAIQAAAJgMAAgAgZiCIAABPQAAAMAGAAIAUAAQAXAAAAg1QAAgvgWAAIgTAAQgIAAAAAJg");
	this.shape_12.setTransform(100.6,89.8,1.153,1.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIDZQgxAAgOgoQgPgnAAiCIgBh1QAEgoAKgYQATgrArAAIBPAAQAUAAAAAXIAAAdQAAAQgFAFQgFAEgMAAIgxAAQgRAAgEATQgEAUAABlQAABcgBgLQAEA6AUAAIAzAAQAVAAAAAWIAAAfQAAAYgTAAg");
	this.shape_13.setTransform(76.2,89.8,1.153,1.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhbCfQgMgnAAh4QAAh5AMgmQAVg+BGAAQBHAAAUA+QANAmAAB5QAAB5gNAmQgVA/hGAAQhGAAgVg/gAgXhwQgEASAABeQAABXAEAZQAFAcASAAQATAAAGgcQADgTAAhdQAAhZgEgXQgEgagUAAQgTAAgEAag");
	this.shape_14.setTransform(37.2,89.9,1.153,1.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPDZQgSAAgDgNIgBgNIAAk9QAAgNgJAAIgiAAQgLAAgDgDQgFgGAAgRIAAgWQAAgWAIgEQAFgDAIAAICdAAQAVAAAAAaIAAAYQAAAXgMAEIgIAAIgiAAQgJAAAAANIAAE7QAAAQgDAGQgEAGgNAAg");
	this.shape_15.setTransform(12,89.8,1.153,1.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABODZQgNAAgFgHQgDgFAAgQIAAiwQAAgOgCAAQgEABgCAMIgaCAQgEAUgTAAQgRAAgFgUIgaiAQgDgMgDgBQgCAAgBAOIAACwQAAAQgCAFQgFAHgNAAIgjAAQgRAAgDgLQgBgFAAgMIAAl6QAAgPADgGQAFgGANAAIAkAAQAPAAAFAEQAFADAEANIArCdQACAGACgBQACABADgGIAridQAEgNAFgDQAGgEAPAAIAkAAQANAAADAGQAEAEABARIAAF6QgBAVgGAEQgGADgJAAg");
	this.shape_16.setTransform(362.9,25.4,1.153,1.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhBDZQgPAAgEgIQgDgHAAgOIAAl3QAAgdAWAAIB/AAQALAAAEAEQAGAFAAAQIAAAZQAAAVgKAFQgDABgIAAIg+AAQgJAAgBAEQgBADAAAHIAAA9QAAAKABABQACACAIABIAfAAQATAAAAAWIAAAfQAAAWgTgBIgfAAQgHABgCACQgCACAAAFIAABbQAAAPALAAIBBAAQAXAAAAAcIAAAVQAAAcgWAAg");
	this.shape_17.setTransform(335,25.4,1.153,1.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAyDZQgUAAAAgcIAAiWQAAgOgLgBIglAAQgKABAAAOIAACWQAAAcgVAAIgiAAQgWAAAAgdIAAl4QAAgcAWAAIAjAAQAUAAAAAbIAAB+QgBANAKAAIAnAAQAKAAAAgNIAAh+QAAgbATAAIAjAAQAWAAAAAcIAAF4QAAAdgWAAg");
	this.shape_18.setTransform(308.6,25.4,1.153,1.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPDZQgSAAgDgNIgBgNIAAk9QAAgNgJAAIgiAAQgKAAgEgEQgFgEAAgSIAAgWQAAgWAIgFQAFgCAIAAICdAAQAVAAAAAaIAAAZQAAAWgMAEIgIAAIgiAAQgJAAAAANIAAE6QAAASgDAFQgEAGgNAAg");
	this.shape_19.setTransform(282.6,25.4,1.153,1.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRDZQgQAAgEgIQgDgHAAgNIAAl4QAAgdAVAAIBuAAQAzAAAPAxQAMAoAAB/QAABhgGArQgHAugSARQgQAOgjAAgAgZiIQgEADAAAOIAADxQAAAMADAEQAEACARAAQAQAAAFgGQAHgHACgcQACgWAAhIQAAhNgBgWQgCgfgIgIQgGgGgRAAQgNAAgFADg");
	this.shape_20.setTransform(243.1,25.4,1.153,1.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhBDZQgPAAgEgIQgDgHAAgOIAAl3QAAgdAWAAIB/AAQALAAAEAEQAGAFAAAQIAAAZQAAAWgJAEQgEABgIAAIg+AAQgIAAgDAEIgBAKIAAA9QAAAKACABQACACAIABIAfAAQATAAgBAWIAAAfQABAWgTgBIgfAAQgHABgDACQgCADAAAEIAABbQABAPAMAAIBAAAQAXAAAAAcIAAAVQAAAcgWAAg");
	this.shape_21.setTransform(218.6,25.4,1.153,1.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGDZQgNAAgFgFQgEgGAAgPIAAgYQAAgVAHgDQAEgDAKAAIBDAAQAQAAAAgRQAAgJgEgGIhIiJQgeg4AAg0QAAgsAUgSQATgRAqAAIBJAAQASAAAAAYIAAAcQAAAZgUAAIg6AAQgTAAAAATQAAAJAGAKIBEB/QAoBKAAAwQAABFhGAAg");
	this.shape_22.setTransform(195.1,25.4,1.153,1.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhUC7QgTgcAAhBIAAkcQAAgQAEgFQAEgIAPAAIAiAAQANAAAEAIQADAFAAAOIAAEnQAAAiAaAAQAcAAAAgiIAAknQAAgPAEgGQAEgGAMAAIAkAAQAQAAADAKQABAGAAALIAAEaQAAA/gSAdQgYAmg+AAQg9AAgXghg");
	this.shape_23.setTransform(170.2,25.7,1.153,1.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhRDZQgQAAgEgIQgDgFAAgPIAAl4QAAgdAVAAIBuAAQAzAAAPAxQAMAoAAB/QAABhgGArQgHAugSARQgQAOgjAAgAgZiIQgEADAAAOIAADxQAAAMADAEQAEACAQAAQARAAAFgGQAHgHACgcQACgWAAhIQAAhNgBgWQgCgfgIgIQgGgGgRAAQgOAAgEADg");
	this.shape_24.setTransform(129,25.4,1.153,1.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhbCfQgNgpABh2QgBh4ANgnQAVg+BGAAQBGAAAWA+QANAogBB3QABB2gNApQgWA/hGAAQhGAAgVg/gAgXhwQgFAWAABaQAABZAFAXQAFAbASAAQAUAAAEgbQAFgXAAhZQgBhagEgWQgFgbgTAAQgTAAgEAbg");
	this.shape_25.setTransform(101.5,25.4,1.153,1.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhbCkQgOgjABiBQABh+AJgiQANg4AzAAIBXAAQAOAAAEAFQAEAHAAAPIAAAVQAAAdgUgBIgvAAQgTABgHAFQgJAIgCAeQgCAUAABOIAABgQAAApAhAAQAfABAAgjIAAhAQAAgRgIAAIgSAAQgLAAAAgUIAAgcQAAgPADgFQAEgHAQAAIA+AAQAUAAAAAdIAABvQAABFgRAaQgVAhg+AAQhMAAgUg1g");
	this.shape_26.setTransform(74.9,25.4,1.153,1.15);

	this.addChild(this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-0.1,454.1,115.6);


(lib.lib_mc_000075 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwBqQA+gVgGg2QgcASgiAOIgMgSQBAgWAlgdIhKAAIAAh0IDOAAIAAB0IhKAAQAlAhBBANQgHAKgDAKQgigKgdgRIAABYIgUAAIAAhcIAOAAQgbgOgTgVIgIAAQgWARgaARIAPAAQAFBEhCAbQgEgFgMgMgAAJgXIBKAAIAAggIhKAAgAhTgXIBKAAIAAggIhKAAgAAJhJIBKAAIAAggIhKAAgAhThJIBKAAIAAggIhKAAg");
	this.shape.setTransform(209,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcB5IAAicIgjAAIAAgUIAjAAIAAg1IAWAAIAAA1IAyAAIAAhBIAUAAIAABBIBFAAIAAhBIAUAAIAABBIAnAAIAAAUIgnAAIAABdIhtAAIAAhdIgyAAIAACJIDAAAIAAATgAAAAmIBFAAIAAhJIhFAAg");
	this.shape_1.setTransform(181,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiDBoIAigeIAAhXIgfAAIAAgTIA1AAIAABrQAaAcAqAAQBKACBBgCIgIAUIiIgBQgsAAgegdQgUARgNASgAghBPIAAhLICKAAIAABLgAgMA+IBgAAIAAgoIhgAAgAg2gRIAAgSIBVAAIAAgkIgvAAQgHATgIAMIgRgJQAUgjAIgjIAUAFIgGARIgCAJIAnAAIAAgnIAVAAIAAAnIBAAAIAAARIhAAAIAAAkIBNAAIAAASgAhohfIgKgPIAQgKIAlAzIgSAMQgEgJgVgdg");
	this.shape_2.setTransform(153,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyCAQgBgLgEgNIAUABIASAAQAVABgCgRIAAjWIAVAAIAADbQABAhgiABgAhdBYIAAh1IgFAEIgMAKQgBgEgGgHIgFgIQA3gpAbg0IAWAFIgHAKQAXATAnAnIgPARQgTgXgmgjQgYAlgeAaIBqAAQAAARgCAmQgBAkgmgBIgeAAQgCgOgCgIIAhACQAWABgBgUIACghIhGAAIAABkQgCATAWgBIAkAAQAVgBAEgKQADgIACgaIAVAIQgEAagDAHQgGAYghgBIgtAAIgFAAQgiAAACgjgAAwA/IAAihIATAAIAAChg");
	this.shape_3.setTransform(124.1,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah8B3IgGgKQA5gTAjgVIAMARQgnAWg2AVQAAgCgFgIgAAZBWIAMgSIAZALQA0AUARAIIgLAVQgogWg3gUgAiAA/IAAgSIAuAAIAAh5IgpAAIAAgSIApAAIAAgiIATAAIAAAiIB/AAIAAgiIAUAAIAAAiIAoAAIAAASIgoAAIAAB5IAvAAIAAASgAg/AtIB/AAIAAgdIh/AAgAg/AAIB/AAIAAgdIh/AAgAg/gvIB/AAIAAgdIh/AAg");
	this.shape_4.setTransform(97,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhsB3QgHgIgGgGQASgXAGgdQAFgcAAg9IAAhWIDWAAIAADNQACAigpAAIgfABIgCgEQAAgMgDgHIAQAAIATABQAVABgBgSIAAguIhPAAIAABTIgVAAIAAhTIhLAAQgFA2gbAkgAAXAOIBPAAIAAgwIhPAAgAhIAOIBKAAIAAgwIhJAAIgBAwgAAXg1IBPAAIAAgxIhPAAgAhHg1IBJAAIAAgxIhJAAg");
	this.shape_5.setTransform(68.3,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoCBIAAhJIgsAAIAAALIgSAAIAAiVIA+AAIAAgtIAUAAIAAAtIBAAAIAACVIgSAAIAAgLIguAAIAABJgAA8AlIAuAAIAAgpIguAAgAgEAlIAsAAIAAgpIgsAAgAA8gWIAuAAIAAgqIguAAgAgEgWIAsAAIAAgqIgsAAgAhWCBIAAhyQgNAOgRAQQgFgNgCgKQAngfAagvIhAAAIAAgUIBWAAIAAAUQgMAagSAWIAACJgAhAAFIAMgLQAPAMAOAPIgQANIgZgdgAhch3IASgJIAVAkIgUAKQgEgLgPgag");
	this.shape_6.setTransform(40.3,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABWCBIAAgMIhaAAIAAAMIgUAAIAAhiIggAVIgBgCQgHgMgEgFQAygaAlgeIhMAAIAAgSIA+AAIAAgjIgtAAIAAgSIAtAAIAAgiIAVAAIAAAiIAnAAIAAASIgnAAIAAAjIANAAQAigkAZglIATAKQgYAkgbAbIBAAAIAAASIhSAAQgIAJgUAOIgFADIBbAAIAAB+gAgEBjIBaAAIAAgeIhaAAgAgEA0IBaAAIAAgfIhaAAgAhsBuQAKgMAAgLIAAhoIgfAAIAAgTIAzAAIAAB/QARgPANgJQAAAKAEALIgjAXIgQANgAh2huIARgNIApAtIgRAOQgSgYgXgWg");
	this.shape_7.setTransform(12.9,13.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0.2,222.3,26.3);


(lib.lib_mc_000074 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000030();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,315,456);


(lib.lib_mc_000073 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000029();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,389,582);


(lib.lib_mc_000072 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000028();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,925);


(lib.lib_mc_000071 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000027();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000069 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,73.5).s().p("An8H9QjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpQAAEqjTDTQjTDTkqAAQkpAAjTjTg");
	this.shape.setTransform(72,72);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144.1,144.1);


(lib.lib_mc_000067 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FAFAA7","rgba(248,248,169,0)"],[0,1],0,0,0,0,0,102.8).s().p("ArQLQQkqkqgBmmQABmlEqkrQErkqGlgBQGmABEqEqQEsErAAGlQAAGmksEqQkqEsmmAAQmlAAkrksg");
	this.shape.setTransform(102,102);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204,204);


(lib.lib_mc_000057 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2DpQgXAAAAgeIAAiiQAAgPgLAAIgoAAQgKAAgBAPIAACiQAAAegVAAIgmAAQgXAAAAgeIAAmVQAAgeAXAAIAmAAQAWAAgBAdIAACHQAAAOALAAIApAAQAKAAAAgOIAAiHQAAgdAWAAIAmAAQAXAAAAAeIAAGVQAAAegXAAg");
	this.shape.setTransform(433.2,88.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQDpQgUAAgDgOIgBgPIAAlTQAAgOgJAAIglAAQgLAAgFgEQgFgFAAgTIAAgYQAAgXAJgFQAGgDAIAAICpAAQAXAAAAAcIAAAaQAAAYgNAEQgCABgHAAIglAAQgIAAgBAOIAAFSQAAARgDAHQgFAGgOAAg");
	this.shape_1.setTransform(408.9,88.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRDpQgPAAgEgHQgEgHAAgQIAAiUIhNkGQgHgZAUAAIAuAAQAPAAAEARIAkCYQACAIABAAQACAAACgIIAkiYQAFgRANAAIAwAAQATAAgHAZIhNEGIAACUQAAAUgFAEQgEAGgOAAg");
	this.shape_2.setTransform(385.7,88.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUDpQgOAAgFgIQgDgFAAgQIAAi+QAAgPgDAAQgDAAgDAOIgcCKQgEAVgVAAQgUAAgEgVIgbiKQgEgOgDAAQgDAAAAAPIAAC+QAAAQgDAFQgFAIgOAAIgmAAQgSAAgDgMIgCmoQAAgQAEgHQAFgGAOAAIAmAAQASAAAFAEQAFADAEAPIAvCoQACAGACAAQAEAAABgGIAwioQADgOAGgEQAEgEASAAIAmAAQAOAAAFAGQAEAGAAARIAAGWQAAAXgIAEQgFADgKAAg");
	this.shape_3.setTransform(357.3,88.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+DpQgOAAgEgDQgEgDgGgPIg4ivQgEgKgEAAQgEAAAAANIAACjQAAAegWAAIglAAQgZAAAAggIAAmSQAAgUAHgGQAGgFAMAAIAhAAQANAAAEAEQAFAEAFAOIA5CtQADAKAFAAQACAAAAgNIAAihQAAgfAXAAIAkAAQAaAAAAAgIAAGRQAAAVgHAGQgGAFgMAAg");
	this.shape_4.setTransform(314.1,88.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAyDpQgKAAgBgNIgOhjQgCgLgKAAIgbAAQgLAAgBALIgMBkQgBAMgLAAIhBAAQgNAAABgKIA5msQADgbAaAAIBQAAQAXAAAEAcIA9GrQACAKgMAAgAgGiKIgMCeQgBAIAKAAIAPAAQALAAAAgIIgOifQAAgKgDAAQgFAAgBALg");
	this.shape_5.setTransform(287.3,88.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPDpQgOAAgEgFQgHgFAAgUIAAmTQAAggAXAAIAkAAQAWAAAAAgIAAGUQAAAPgEAHQgEAHgPAAg");
	this.shape_6.setTransform(268.4,88.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjDpQgQAAgDgTIhGmrQgCgTAPAAIA2AAQAQAAADAXIAhEIQACAKADAAQAEAAACgKIAhkIQAEgXAPAAIA2AAQAQAAgDATIhFGrQgDATgRAAg");
	this.shape_7.setTransform(249.6,88.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyDpQgKAAgBgNIgOhjQgCgLgKAAIgbAAQgLAAgBALIgMBkQgBAMgLAAIhBAAQgNAAACgKIA4msQADgbAaAAIBQAAQAXAAAEAcIA9GrQACAKgMAAgAgGiKIgMCeQgBAIAKAAIAPAAQALAAAAgIIgOifQAAgKgDAAQgFAAgBALg");
	this.shape_8.setTransform(223.9,88.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA9DpQgMAAgGgDQgEgEgFgOIg5ivQgEgKgEAAQgDAAAAANIAACjQAAAegWAAIgkAAQgaAAAAggIAAmSQAAgVAHgFQAGgFAMAAIAgAAQAOAAAEAEQAEADAGAPIA4CtQAEAKAEAAQAEAAAAgNIAAihQAAgfAWAAIAlAAQAZAAAAAgIAAGRQAAAWgIAFQgFAFgMAAg");
	this.shape_9.setTransform(197.2,88.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQDpQgNAAgFgFQgGgFAAgUIAAmTQAAggAXAAIAkAAQAWAAAAAgIAAGUQAAAPgEAHQgEAHgQAAg");
	this.shape_10.setTransform(177.5,88.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhXDpQgRAAgGgJQgCgHAAgOIAAmTQAAggAXAAIB1AAQA3AAARA1QANArAACIQAABogHAuQgHAygTARQgRAQgnAAgAgciSQgEAEAAANIAAEFQAAAMAEADQADADATAAQARAAAGgGQAHgIADgeQACgiABhCQgBhTgBgZQgCgggJgJQgGgGgTAAQgPAAgFADg");
	this.shape_11.setTransform(159,88.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA+DpQgNAAgFgDQgEgDgFgPIg6ivQgDgKgFAAQgDAAAAANIAACjQAAAegWAAIgkAAQgZAAAAggIAAmSQAAgUAGgGQAGgFAMAAIAhAAQANAAAFAEQAFAEAEAOIA5CtQADAKAEAAQAEAAAAgNIAAihQAAgfAWAAIAkAAQAaAAAAAgIAAGRQgBAVgGAGQgGAFgNAAg");
	this.shape_12.setTransform(132.1,88.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAyDpQgKAAgCgNIgNhjQgCgLgKAAIgbAAQgLAAgBALIgMBkQgBAMgMAAIhAAAQgNAAABgKIA5msQADgbAbAAIBPAAQAXAAAEAcIA9GrQACAKgMAAgAgGiKIgMCeQgCAIALAAIAPAAQAKAAAAgIIgNifQAAgKgEAAQgFAAAAALg");
	this.shape_13.setTransform(105.4,88.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJDpQg1AAgQgrQgPgrAAiKIgBh/QAEgrALgZQAUguAuAAIBVAAQAXAAgBAZIAAAfQAAARgEAFQgHAFgMAAIg1AAQgSAAgFAUQgEAbAABnQAABegBgIQAEA/AWAAIA3AAQAWAAAAAYIAAAiQABAZgWAAg");
	this.shape_14.setTransform(82.7,88.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhMDpQgOAAgFgGQgDgGAAgRIAAgYQgBgWAIgEQAEgEALAAIBIAAQARAAAAgSQAAgHgEgJIhNiTQghg9AAg3QAAgvAWgUQAVgSAsAAIBOAAQAUAAAAAZIAAAfQAAAbgWAAIg+AAQgUAAAAAUQAAAKAGALIBJCIQArBOAAA0QAABLhLAAg");
	this.shape_15.setTransform(61.5,88.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAyDpQgKAAgCgNIgNhjQgCgLgKAAIgbAAQgLAAgBALIgLBkQgCAMgLAAIhBAAQgNAAABgKIA5msQAEgbAaAAIBPAAQAYAAADAcIA+GrQABAKgMAAgAgGiKIgMCeQgCAIALAAIAQAAQAKAAAAgIIgOifQAAgKgDAAQgGAAAAALg");
	this.shape_16.setTransform(24.6,88.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag/DpQgQAAgEgIQgDgFAAgRIAAmUQAAgfAXAAIAlAAQAOAAAGAIQADAHAAAQIAAFRQAAAOAJAAIA5AAQAYAAAAAdIAAAYQAAAegaAAg");
	this.shape_17.setTransform(448.7,24.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/DpQgPAAgEgIQgEgFAAgRIAAmUQAAgfAXAAIAlAAQAPAAAFAIQADAIAAAPIAAFRQAAAOAJAAIA5AAQAYAAAAAdIAAAYQAAAegaAAg");
	this.shape_18.setTransform(429.2,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGDpQgRAAgEgJQgDgGAAgPIAAmUQAAgfAYAAICIAAQAMAAAEAEQAHAFAAASIAAAaQAAAYgKAEQgFABgIAAIhCAAQgKABgCAEIgBALIAABBQAAALACACQADABAIAAIAhAAQAVAAAAAZIAAAiQAAAWgVAAIghAAQgHABgDACQgDACAAAGIAABhQAAAQANAAIBGAAQAZAAAAAeIAAAXQAAAegYAAg");
	this.shape_19.setTransform(409,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRDpQgTAAgDgOQgBgFAAgKIAAlUQAAgOgKAAIgkAAQgLAAgEgDQgGgGAAgTIAAgXQAAgWAJgGQAFgDAJAAICpAAQAXAAAAAcIAAAaQAAAYgNADQgCABgHAAIgkAAQgJAAAAAOIAAFTQAAAQgFAHQgDAHgPAAg");
	this.shape_20.setTransform(386.5,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhiCqQgNgrAAh/QAAiBANgqQAWhCBMAAQBMAAAWBCQAOAqAACBQAACAgOAqQgWBEhMAAQhLAAgXhEgAgZh5QgFAUABBlQgBBgAFAYQAFAdAUAAQAVAAAFgdQAEgWABhiQAAhkgFgVQgFgcgVAAQgUAAgFAcg");
	this.shape_21.setTransform(349.8,24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQDpQgTAAgEgOIgBgPIAAlUQAAgOgJAAIglAAQgLAAgEgDQgGgFAAgUIAAgXQAAgXAJgFQAFgDAKAAICoAAQAXAAAAAcIAAAaQAAAYgNADIgJABIgkAAQgKAAAAAOIAAFTQAAARgEAGQgEAHgOAAg");
	this.shape_22.setTransform(326.2,24.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRDpQgPAAgEgHQgEgGAAgRIAAiVIhNkGQgHgYAUAAIAvAAQAOAAAEAQIAkCZQACAHABABQADgBACgHIAkiZQADgQAPAAIAvAAQAUAAgIAYIhNEGIAACVQAAATgFAFQgEAGgOAAg");
	this.shape_23.setTransform(289.8,24.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhYDpQgRAAgEgJQgDgFAAgQIAAmTQAAggAXAAIB2AAQA3AAAPA1QAOArAACIQAABmgHAwQgIAzgSAQQgRAQgmAAgAgciSQgEAEAAAOIAAEEQAAANAEADQADACATAAQARAAAGgGQAIgJACgdQACgXAAhNQAAhTgCgYQgBgigJgIQgGgHgTAAQgPAAgFAEg");
	this.shape_24.setTransform(265.3,24.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAyDpQgKAAgCgMIgNhjQgCgLgKAAIgbAAQgLAAgCALIgLBkQgBALgLAAIhBAAQgOAAACgLIA5mrQAEgbAaAAIBPAAQAXAAAEAbIA+GrQABALgMAAgAgGiKIgMCeQgCAIALgBIAQAAQAKABgBgIIgNifQAAgLgEAAQgFAAAAAMg");
	this.shape_25.setTransform(239.1,24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhGDpQgRAAgEgJQgDgIAAgNIAAmUQAAgfAYAAICIAAQAMAAAFAEQAGAFAAASIAAAaQAAAXgJAFQgGABgIAAIhCAAQgIABgEAEIgBALIAABBQAAALADACQACABAIAAIAhAAQAVAAAAAZIAAAiQAAAWgVAAIghAAQgHABgDACQgDADAAAFIAABhQAAAQANAAIBGAAQAZAAAAAeIAAAXQAAAegXAAg");
	this.shape_26.setTransform(216.4,24.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAsDpQgPAAgEgUIgbioQAAgHgIABIgKAAQgIgBAAAHIAACfQABAdgYAAIgmAAQgQAAgEgLQgCgEAAgPIAAmTQAAggAYAAIBiAAQBgAAAACQQAABJgmAeIArDQQAAAKgNAAgAgciLIAABUQAAAMAIAAIAVAAQAZAAAAg3QAAg0gYAAIgUAAQgKAAAAALg");
	this.shape_27.setTransform(193.5,24.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhLDpQgPAAgEgHQgEgFAAgRIAAgZQAAgVAHgFQAFgDAKAAIBIAAQARAAAAgSQAAgJgEgHIhNiTQghg9AAg3QAAguAWgVQAVgSAsAAIBOAAQAUAAAAAZIAAAgQAAAZgWAAIg+AAQgUABAAAUQAAAJAGAMIBJCHQArBPAAA0QAABLhLAAg");
	this.shape_28.setTransform(156.5,24.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPDpQgOAAgFgEQgGgHAAgTIAAmTQAAggAXAAIAkAAQAWAAAAAgIAAGUQAAAPgEAHQgEAHgQAAg");
	this.shape_29.setTransform(140,24.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhiCqQgOgqAAiAQAAiCAOgpQAWhCBMAAQBMAAAWBCQAOAsAAB/QAAB+gOAsQgWBEhMAAQhMAAgWhEgAgah5QgEAUAABlQAABeAFAaQAFAdAUAAQAUAAAGgdQAFgZgBhfQABhggFgZQgGgcgUAAQgUAAgGAcg");
	this.shape_30.setTransform(108.4,24.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgkDpQgQAAgDgTIhFmrQgDgTAPAAIA2AAQAQAAADAXIAiEHQABALAEAAQAEAAABgLIAikHQADgXAQAAIA2AAQAQAAgDATIhFGrQgEATgQAAg");
	this.shape_31.setTransform(83.1,24.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag/DpQgPAAgEgIQgEgFAAgRIAAmUQAAgfAXAAIAmAAQAPAAAEAIQADAHAAAQIAAFRQAAAOAJAAIA5AAQAYAAAAAdIAAAYQAAAegaAAg");
	this.shape_32.setTransform(61.4,24.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhiCqQgNgqAAiAQAAiCANgpQAXhCBLAAQBNAAAVBCQAOApAACCQAACBgOApQgWBEhMAAQhLAAgXhEgAgah5QgEAUAABlQAABeAFAaQAFAdAUAAQAVAAAGgdQAEgbAAhdQAAhggFgZQgFgcgVAAQgUAAgGAcg");
	this.shape_33.setTransform(38.4,24.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgkDpQgPAAgDgTIhGmrQgCgTAPAAIA2AAQAQAAADAXIAhEHQACALADAAQAEAAACgLIAhkHQAEgXAPAAIA3AAQAPAAgDATIhFGrQgDATgRAAg");
	this.shape_34.setTransform(13.1,24.1);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,0.3,456.9,111.6);


(lib.lib_mc_000056 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABWB/IAAgTIhgAAIAAATIgVAAIAAh0IA7AAIAAgqIhVAAIAAgTIBVAAIAAgsQgJABgYAAIgkABIgDgNIgBgHQBcgCBDgEIAEASQgjAEgjABIAAAtIBSAAIAAATIhSAAIAAAqIA7AAIAAB0gAgKBbIBgAAIAAg8IhgAAgAhpBpQAKgKgBgNIAAhmIghAAIAAgSIA1AAIAAB8IANgIQAOgMAHgEIACAXQgZANgOANIgDACIgKAJgAh3hxIARgNIAVAWIAVAWIgTAPQgRgZgXgVg");
	this.shape.setTransform(462,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoCBIAAhJIgsAAIAAALIgTAAIAAiVIA/AAIAAgtIAUAAIAAAtIBAAAIAACVIgSAAIAAgLIguAAIAABJgAA8AlIAuAAIAAgpIguAAgAgEAlIAsAAIAAgpIgsAAgAA8gWIAuAAIAAgrIguAAgAgEgWIAsAAIAAgrIgsAAgAhWCBIAAhzQgOAPgQAQQgGgQgBgHQAnggAZguIg/AAIAAgTIBXAAIAAATQgOAbgSAVIAACJgAhAAEIAMgJQAPALANAPIgPANIgZgegAhch4IASgIIAVAkIgUAKQgEgLgPgbg");
	this.shape_1.setTransform(433.4,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUB8IgKgNQBDgqADhUIAAgsIAUAAQAAAUgBARQAKBhA4AjQgKAJgGAIQgugmgMg9QgJA5g6AsIgEgFgAh8BkIAAjNIBwAAIAAATIhdAAIAACoIBXAAIAAASgAhiA3QAUgeAPgdIgRgcQgLgTgHgJIAQgKIAdAwQAQggAHgUIASAIQgRAogNAVIAkA4IgRANIgdgzQgMAXgRAeQgHgGgKgFgABSgRIARg2IhLAAQgKAfgNAdIgRgJQAXg1AMg3IATAFQgDAPgGARIBaAAIAAAVIgSA7g");
	this.shape_2.setTransform(406.7,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwB+IAAg2IgRAHQglAQgTAHIgJgUQAUgGA+gZIAAhSIhNAAIAAgUIBNAAIAAhKIAUAAIAAD7gAA9B3QglAAAAglIAAjPIAVAAIAABaQAsgZAYgRIANAUQgXAOg6AeIAABdQgCAUAWgCIAQAAQAXACABgRQADgJACgfIAAgFQARAIAEABIgFArQgGAdgkAAg");
	this.shape_3.setTransform(378,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWB/IgFgXIAvABQAeACABgfQADg1AAhWIhGAAIgGAMQgOAbgEAHQgFgEgMgIQAVgmASg7IAXAGIgOAlIBWAAIgFCjQgBAvg1gBIgbABgAh4B/IAAjSIAbAAQAKgYAHgTIAWAGIgRAlIA1AAIAADPIgUAAIAAgUIg9AAIAAAXgAhjBWIA9AAIAAhCIg9AAgAhjAAIA9AAIAAg/Ig9AAgAAIgKIAQgMQAhAmAOAUIgUAOQgQgZgbgjg");
	this.shape_4.setTransform(350.1,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABAB0IiEAAQguABAAgtIAAhfIC0AAIAAhJIi5AAIAAgTIDOAAIAABvIizAAIAABJQgDAbAigCIB3AAQAdABADgOQAEgMACgfIAYAIQgDAVgFAVQgFAcgpAAIgCAAg");
	this.shape_5.setTransform(323.2,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABRCAIAAgQIigAAIAAAQIgXAAIAAjbIBJAAIAGgkIAVADQgEAWgCALIBuAAIAADbgAhPBgICgAAIAAgsIigAAgAhPAhICgAAIAAgqIigAAgAhPgcICgAAIAAgsIigAAg");
	this.shape_6.setTransform(294,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBdIAnABQAYABgBgWIAAhQIh8AAIAAgUIB8AAIAAhEIhnAAIAAgVIDaAAIAAAVIhfAAIAABEIBzAAIAAAUIhzAAIAABWQABAlgmAAIgoABQgBgIgEgQg");
	this.shape_7.setTransform(266,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah9BvQASgaAHgcQAGgbAAg2IAAhiIDWAAIAAAzIjEAAIAAAtQAAA6gGAfQgHAdgVAgIgPgNgAhMhXIC0AAIAAgUIi0AAgAg/B6IAAhTIBTAAIAAgRIhGAAIAAguIBGAAIAAgRIhTACIgCgIIgCgIQBWAABigEIADAPIhUADIAAARIBIAAIAAAuIhIAAIAAARIBaAAIAAA1QACAdggAAIgeAAQAAgFgFgMIAgABQAPACgBgPIAAgmIhHAAIAAAWIAQgBIAPAAIgHgMIAPgGIAJAQIAKATIgPAHIgDgFIgDgEIgmACQgqABgZACIgDgPIAcgBIAbgBIAAgYIhBAAIAABEgAAkAIIA4AAIAAgSIg4AAgAghAIIA1AAIAAgSIg1AAg");
	this.shape_8.setTransform(237.5,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlCAIAAgrIhFAAIAAgTIBFAAIAAgfIg8AAIAAgUIA8AAIAAgbIAUAAIAAAbIA+AAIAAAUIg+AAIAAAfIBIAAIAAATIhIAAIAAArgAiCBbQApgEAzgKIgCAUQgiADgzAKgAh9AhIABgBQAJgHAIgKQAQgQAMgTIgWABQgTAAgEABIgGgSQAIgHAIgMQAYgkARgkIAVAIQguBHgJANQAIgBAgAAIATggIAVAKQgxBAgUAYIA7gGIgDAVQgoACgmAFgAglgUQAlgIAfgPQgegXgLgdIgOAAIAAgTICLAAIAAASQgSAggfAXQAbALAmAHIgHATQgugJgegSQgeARgvANgAAwg0QAegTAPgYIhVAAQAOAaAaARg");
	this.shape_9.setTransform(209.9,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+ByQAsgTAVgQIAPAPIgUALQgiATgNAGQgFgJgIgHgAAuBeIALgPIAMAGQAeANAcANIgNAQQgsgZgYgIgAh2B0QASgsANgyIATAKQgMArgRAzgAgrBLIAAhgIBCAAIAAgVIg1AAIAAgSICBAAIAAASIg5AAIAAAVIBEAAIAABggAAqA7IAyAAIAAgZIgyAAgAgYA7IAvAAIAAgZIgvAAgAAqASIAyAAIAAgXIgyAAgAgYASIAvAAIAAgXIgvAAgAh+gnIAMgNQAUAOAYAVIgNARgABpg3IAAgaIiOAAIAAAaIgUAAIAAgrIBQAAIgGgcIASgCIAJAeIBRAAIAAArgAhzhtIANgNQAXAQATAUIgPAOQgTgUgVgRg");
	this.shape_10.setTransform(181.6,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQBwQAhgjgChNIAAhpQAxAAA1gLIAGAVQgkAGg0ADIAAA+IBgAAIAAASIgmAAIAACGIgTAAIAAiGIgnAAIAAAGQACBTgoAugAhnB9IgDgUQADABAVAAQANAAAAgNIAAg/Ig2AAIAAgSIA2AAIAAgXIATAAIAAAXIAyAAIAAASIgyAAIAABDQABAcghAAgAiDBeQAQgaAMgcIARAJIgGAOQgNAbgIAMgAgrA0IAPgLQANAQAOAWIgQAMQgNgWgNgRgAiDgSIAAgQIBOAAQAQgZAJgRIAUAKIgZAgIAnAAIAAAQgAhdgrQgEgIgMgQIAPgJIAXAeIgQALgAh6hPIAAgRIA6AAIgNgZIARgHQALASAFAKIgHAEIAzAAIAAARg");
	this.shape_11.setTransform(154.1,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah3B8IAAgSIBuAAIAAgvIhWAAIAAgTIBWAAIAAgoIhMAAIAAgQIgGAEIgaAMIgOgSQBVgqAsg/IAUAGIgCAEIgEAFQA1A8BDAZIgPAWQgRgJgNgIQg1gigigpQggAqgyAhICpAAIAAASIhNAAIAAAoIBXAAIAAATIhXAAIAAAvIBuAAIAAASg");
	this.shape_12.setTransform(126,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhQCCIAAhnIgnArIgNgUQAdgaAXgZIAAh9IAUAAIAAEAgAAZB+QAAgKgFgMIAjABQATABgBgPIAAg6Ih6AAIAAgTIB6AAIAAggIAUAAIAAAgIAoAAIAAATIgoAAIAAA8QADAhgiAAgAgUAxIAPgMQAUAXAOAQIgRAOgAgwgKQBhgVAtgwIhfAAIgGAGIAdAaIgOAOQgMgOgRgNIgVAPIgDgFQgDgFgFgFQApgaAegrIATAJIgDAEIgSAUIBnAAIAAASQgjA2h7AegAiChOIARgHIAcA1IgTAKQgKgZgQgfg");
	this.shape_13.setTransform(97.9,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBvIgCgEQBRguAHhEIhGAAIAAgUIBIAAIABhBQgdABgeACIgCgMIgCgHQAvgCBmgIIADAUIgcACIgoACQAAAzgBAQIBTAAIAAAUIhOAAQAPBJBHAkQgJAJgGAMQhFgrgQg/QgNA/hMAuIgLgPgAh6BzQARgtASg1QALAGALACIgjBkgAiDgnIAPgQQASANAcAXIgQARQgUgSgZgTgAh1htIAMgQIAxAnIgOAPg");
	this.shape_14.setTransform(70,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0B/IgDgTIABAEIgCgHIAgABQAVABgBgTIAAiQIAUAAIAACTQADAmgogDIgSABgAh7BYQAoguAYg5IAVAKQgdA5glAwgAArgCIASgMQAhArAkA5IgUANQgkg8gfgpgAiBgWQA2gvAXg5IAXAGIgQAfICsAAIAAATQgRAYgNAaIgVgJQANgSAMgXIieAAQgZAkgeAcQgJgJgIgHg");
	this.shape_15.setTransform(41.9,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBvIgDgEQBRguAHhEIhGAAIAAgUIBJAAIAAhBQgcABgfACIgCgMIgCgHQAugCBmgIIAEAUIgcACIgoACQAAAzgBAQIBTAAIAAAUIhOAAQAOBJBIAkQgJAJgGAMQhFgrgQg/QgNA/hMAuIgKgPgAh6BzQASgtARg1QALAGALACIgjBkgAiDgnIAOgQQATANAcAXIgQARQgUgSgZgTgAh2htIAOgQIAwAnIgOAPg");
	this.shape_16.setTransform(14,13.5);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0,474.3,26.3);


(lib.lib_mc_000055 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],65.4,0,-55.5,0).s().p("EgMBAooMAAAhRPIYDAAMAAABRPg");
	this.shape.setTransform(63,260.1);

	// 图层 1
	this.instance = new lib.lib_img_000022();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,0,940.1,521);


(lib.lib_mc_000054 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000021();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,927);


(lib.lib_mc_000052 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgMgLAAIgeAAQgLAAgBAMIgMBrQgCANgMAAIhFAAQgPAAACgMIA9nKQAEgdAcAAIBVAAQAZAAAEAdIBBHKQACAMgNAAgAgHiUIgMCpQgCAJALAAIARAAQAMAAgBgJIgPiqQgBgLgDAAQgEAAgCAMg");
	this.shape.setTransform(516.2,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRD6QgPAAgEgGQgHgFAAgWIAAmwQAAgiAZAAIAmAAQAYAAAAAiIAAGxQAAARgEAHQgFAIgRAAg");
	this.shape_1.setTransform(495.9,89.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmD6QgRAAgDgVIhLnKQgDgUARAAIA6AAQARAAADAYIAkEcQACAKADAAQAFAAABgKIAkkcQAEgYARAAIA5AAQASAAgEAUIhKHKQgDAVgRAAg");
	this.shape_2.setTransform(475.8,89.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgMgLAAIgeAAQgKAAgCAMIgMBrQgBANgNAAIhFAAQgOAAACgMIA8nKQAEgdAcAAIBVAAQAZAAAEAdIBCHKQABAMgNAAgAgGiUIgNCpQgCAJAMAAIAQAAQAMAAgBgJIgOiqQgBgLgEAAQgEAAgBAMg");
	this.shape_3.setTransform(448.2,89.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCD6QgPAAgEgFQgGgDgFgQIg9i6QgDgLgFAAQgEAAAAAPIAACtQAAAhgXAAIgnAAQgbAAAAgiIAAmwQAAgVAHgHQAFgFAOAAIAjAAQANAAAGAEQAFAFAFAOIA9C6QAEALAEAAQAEAAAAgOIAAitQAAghAXAAIAoAAQAbAAAAAiIAAGvQAAAVgHAHQgFAGgPAAg");
	this.shape_4.setTransform(419.6,89.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQD6QgOAAgHgGQgGgGAAgVIAAmwQAAgiAZAAIAmAAQAYAAAAAiIAAGxQAAASgEAGQgEAIgRAAg");
	this.shape_5.setTransform(398.5,89.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheD6QgSAAgEgKQgEgGAAgRIAAmwQAAgiAYAAIB+AAQA8AAARA4QAOAuAACTQAABvgHAxQgIA2gUATQgSARgpAAgAgdicQgGADABAPIAAEXQAAAOAEADQAFADATAAQARAAAIgHQAIgJACgfQACglAAhHQAAhcgCgXQgBgjgJgJQgHgHgVAAQgPAAgFAEg");
	this.shape_6.setTransform(378.7,89.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgFQgGgDgFgQIg9i6QgDgLgFAAQgDAAgBAPIAACtQABAhgYAAIgnAAQgbAAAAgiIAAmwQAAgVAHgHQAFgFAOAAIAjAAQANAAAFAEQAGAFAFAOIA9C6QAEALAEAAQAEAAABgOIAAitQgBghAXAAIAnAAQAcAAAAAiIAAGvQAAAVgHAHQgFAGgOAAg");
	this.shape_7.setTransform(350,89.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA1D6QgJAAgDgOIgOhqQgCgMgLAAIgdAAQgMAAgCAMIgMBrQAAANgNAAIhFAAQgPAAACgMIA9nKQAEgdAbAAIBWAAQAZAAAEAdIBBHKQACAMgNAAgAgHiUIgMCpQgBAJAKAAIARAAQAMAAgBgJIgPiqQgBgLgCAAQgGAAgBAMg");
	this.shape_8.setTransform(321.3,89.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJD6Qg4AAgSgvQgRguAAiUIAAiGQAEguAMgcQAWgyAxAAIBaAAQAYAAAAAbIAAAhQAAATgFAFQgGAFgOAAIg4AAQgUAAgFAWQgEAWAAB0QAABqgCgLQAGBCAWAAIA7AAQAZAAAAAZIAAAkQAAAcgYAAg");
	this.shape_9.setTransform(297,89.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQD6QgRAAgEgHQgFgGABgSIAAgaQgBgZAJgEQAEgDALAAIBOAAQASAAAAgUQAAgIgEgJIhTidQgjhCAAg7QAAgyAXgVQAWgUAwAAIBUAAQAVAAAAAbIAAAhQAAAdgXAAIhDAAQgWAAAAAVQABAKAGANIBPCSQAtBUAAA4QAABQhQAAg");
	this.shape_10.setTransform(274.2,89.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHD6QgTAAgEgNQgCgIABgLIAAmwQgBgaAKgGQAGgDAKAAICMAAQAbAAAAAgIAAAbQAAAegYAAIhFAAQgIAAgBAFQgCADAAAMIAABEQgBANAJAAIAqAAQAPAAAEAJQADAFAAARIAAAaQAAAegXAAIgmAAQgIAAgBAFQgCADAAAMIAACqQAAAggXAAg");
	this.shape_11.setTransform(238.8,89.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgrQAZhHBQAAQBSAAAXBHQAPArAACMQAACLgPAsQgYBJhRAAQhQAAgZhJgAgbiBQgEAZAABoQAABkAEAdQAGAgAVgBQAWABAHggQAEgWAAhrQAAhngFgaQgFgfgXAAQgWAAgFAfg");
	this.shape_12.setTransform(213.7,89.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgJQgEgGAAgSIAAmyQAAggAZAAIAnAAQARAAAEAJQAEAGAAARIAAFqQAAAQAKAAIA9AAQAZAAAAAgIAAAYQAAAhgcAAg");
	this.shape_13.setTransform(176.6,89.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhhDXQgXggAAhLIAAlHQABgRAEgHQAGgJAQAAIAoAAQAPAAAFAJQADAGAAAQIAAFUQgBAnAgAAQAfAAAAgoIAAlTQAAgSAFgGQAEgHAPAAIApAAQATAAADALQABAHABANIAAFFQAABIgVAhQgcAshIAAQhGAAgbgmg");
	this.shape_14.setTransform(151.7,90.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhpC3QgOguAAiJQAAiKAOgtQAYhHBRAAQBRAAAZBHQAPAuAACJQAACJgPAuQgZBJhRAAQhQAAgZhJgAgbiBQgEAWgBBrQAABpAFAYQAFAgAWgBQAXABAFggQAFgaAAhnQAAhngFgaQgGgfgWAAQgWAAgFAfg");
	this.shape_15.setTransform(124.8,89.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhRD6QgPAAgFgHQgFgHAAgRIAAgaQAAgYAIgFQAFgDALAAIBOAAQASAAAAgUQAAgJgEgIIhUidQgihCAAg7QAAgyAXgVQAWgUAwAAIBUAAQAVAAAAAbIAAAhQAAAdgXAAIhDAAQgWAAAAAVQAAALAHAMIBOCSQAuBVAAA3QAABQhQAAg");
	this.shape_16.setTransform(100,89.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgFgKQgEgHAAgQIAAmxQAAghAaAAICTAAQALAAAHAEQAGAGAAATIAAAdQAAAZgLAEQgEACgJAAIhIAAQgKAAgDAFIgBALIAABGQABALACACQACACAJAAIAkAAQAVAAAAAaIAAAkQAAAZgVAAIgkAAQgJAAgCADQgDADAAAGIAABoQABARAOAAIBKAAQAbAAAAAgIAAAYQAAAhgZAAg");
	this.shape_17.setTransform(64.1,89.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA5D6QgWAAAAghIAAitQAAgQgNAAIgrAAQgMAAAAAQIAACtQAAAhgYAAIgnAAQgZAAAAghIAAmyQAAggAZAAIAoAAQAXAAAAAgIAACRQAAANALAAIAuAAQAKAAABgNIAAiRQgBggAXAAIAoAAQAZAAAAAgIAAGyQAAAhgZAAg");
	this.shape_18.setTransform(37.7,89.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSD6QgUAAgEgPIgBl8QAAgPgKAAIgnAAQgNAAgEgEQgFgGgBgUIAAgaQAAgZAJgFQAHgDAJAAIC1AAQAZAAAAAfIAAAbQAAAagOAEIgKABIgnAAQgKAAAAAPIAAFqQAAATgEAHQgFAHgPAAg");
	this.shape_19.setTransform(11.7,89.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRD6QgQAAgEgHQgFgGAAgSIAAgaQAAgYAIgEQAFgEALAAIBNAAQATAAAAgTQAAgKgFgIIhTidQgihCAAg7QAAgyAXgVQAWgUAwAAIBUAAQAVAAAAAbIAAAiQAAAcgXAAIhDAAQgWAAAAAVQAAALAHAMIBOCSQAuBVAAA3QAABQhQAAg");
	this.shape_20.setTransform(436.9,25.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAwD6QgRAAgDgWIgei0QgBgGgIAAIgKAAQgIAAAAAGIAACqQAAAggZAAIgoAAQgSAAgEgLQgDgHAAgOIAAmxQAAgiAaAAIBqAAQBmAAAACbQAABPgoAfIAsDWIABAJQAAALgNAAgAgdiWIAABbQAAAOAHAAIAXAAQAbAAAAg8QAAg3gaAAIgVAAQgKAAAAAKg");
	this.shape_21.setTransform(413.2,25.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgGgKQgDgHAAgQIAAmwQAAgiAaAAICTAAQAMAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgFACgIAAIhIAAQgKAAgCAFIgBAMIAABFQAAAMABABQADADAJAAIAjAAQAXAAAAAaIAAAkQAAAYgXAAIgjAAQgIAAgDADQgCACAAAHIAABoQAAARAOAAIBKAAQAbAAAAAgIAAAZQAAAggaAAg");
	this.shape_22.setTransform(388.8,25.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAuD6QgLAAgGgFQgCgEgCgOIgVinQgBgJgDAAQAAAAgEAIIgoCwQgFAPgQAAIgxAAQgQAAgDgTIhGnEIgBgKQAAgSATAAIA0AAQAPAAADAWIAkDyQABAKAFAAQAEAAABgKIAjiOIgLhfQgDgbAWAAIAyAAQAQAAAEAWIAcDxQACALAFAAQAFAAAAgLIAfjzQACgUAPAAIA3AAQARAAAAAQIgBALIhOHCQgEAWgSAAg");
	this.shape_23.setTransform(355.9,25.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhoC3QgPgvAAiIQAAiKAPguQAXhHBRAAQBRAAAYBHQAPAuABCKQgBCIgPAvQgYBIhRAAQhRAAgXhIgAgciBQgEAZAABoQAABmAFAbQAGAgAVAAQAXAAAGggQAEgaAAhnQAAhogFgZQgFgegXAAQgWAAgGAeg");
	this.shape_24.setTransform(321.7,25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhcD6QgTAAgEgMQgBgGAAgOIAAmwQAAgjAYAAIBxAAQBgAAAACgQAACZhUAAIg9AAIAACaQAAAUgFAGQgFAGgOAAgAgciSIAABvQAAAMALAAIAXAAQASAAAEgbQABgJAAgeQAAgrgGgPQgFgNgOAAIgUAAQgMAAAAAOg");
	this.shape_25.setTransform(296.3,25.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABaD6QgPAAgEgJQgEgGgBgRIAAjLQAAgQgDAAQgDAAgDAOIgfCVQgDAXgXAAQgVAAgEgXIgeiVQgEgOgDAAQgDAAAAAQIAADLQgBARgDAGQgEAJgQAAIgnAAQgVAAgDgNQgCgGAAgNIAAm0QAAgRAEgHQAGgHAOAAIApAAQASAAAHAEQAFAFAFAOIAyC1QACAGACAAQAEAAACgGIAyi1QAEgOAGgFQAHgEARAAIAqAAQAOAAAFAHQAEAGAAASIAAG0QAAAZgIAEQgGADgKAAg");
	this.shape_26.setTransform(265.1,25.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhLD6QgSAAgEgKQgEgHAAgQIAAmwQAAgiAaAAICTAAQAMAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgEACgJAAIhIAAQgKAAgCAFQgBACAAAKIAABFQAAAMACABQACADAJAAIAkAAQAWAAAAAaIAAAkQAAAYgWAAIgkAAQgIAAgDADQgCACAAAHIAABoQAAARANAAIBLAAQAbAAAAAgIAAAZQAAAggZAAg");
	this.shape_27.setTransform(237.1,25.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhoC3QgQgvABiIQgBiKAQguQAXhHBRAAQBRAAAYBHQAPAuABCKQgBCIgPAvQgYBIhRAAQhRAAgXhIgAgciBQgEAZAABoQAABmAFAbQAGAgAVAAQAXAAAGggQAEgaAAhnQAAhogFgZQgFgegXAAQgWAAgGAeg");
	this.shape_28.setTransform(197.4,25.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmD6QgRAAgDgUIhLnLQgDgUARAAIA6AAQAQAAAEAYIAkEcQABALAEAAQAFAAABgLIAkkcQAEgYARAAIA6AAQAQAAgDAUIhKHLQgDAUgSAAg");
	this.shape_29.setTransform(170.4,25.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgIQgEgIAAgRIAAmxQAAghAZAAIAnAAQAQAAAFAKQAEAGAAARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape_30.setTransform(147.1,25.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgsQAYhHBRAAQBRAAAYBHQAPAuAACKQAACIgPAvQgYBIhRAAQhRAAgYhIgAgciBQgEAVAABsQAABkAFAdQAFAgAWAAQAXAAAFggQAEgaAAhnQAAhngEgaQgGgegWAAQgWAAgGAeg");
	this.shape_31.setTransform(122.5,25.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmD6QgRAAgEgUIhKnLQgDgUAQAAIA6AAQASAAADAYIAjEcQACALAEAAQAEAAACgLIAkkcQADgYASAAIA5AAQARAAgDAUIhKHLQgEAUgRAAg");
	this.shape_32.setTransform(95.4,25.4);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,529.9,115.6);


(lib.lib_mc_000051 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBByQA/grARgxIgvAAIAAh4IAqAAQAFgNAFgRIAUAFIgMAZIBUAAIAAB4Ig/AAIAAAvQAKgKALgfIAOAGIgQAiQANgDAJAAIgHgSIANgFQAHAUAGAPIADAHIgPAFIgEgMQgkAEgDABIgFgLIAAARQgCATAZgBIAOAAQAXgBAAgKQABgBAAgFIACgFIABgXIARAIIAAAEQgCAWgCADQgDAagmgBIgRAAQgnABACghIAAhAQgRA4hBAvQgDgJgLgHgAAoADIgBABIA3AAIAAghIgxAAQgBAWgEAKgAgOAEIAjAAQAEgMABgVIgoAAgAAuguIAwAAIAAgjIgwAAgAgOguIApAAIAAgjIgpAAgAg4BLQg6AHgKADIgFgRQAMgKAVhIIgfAAIAAgTIBWAAIAAATIgkAAQgRAzgMAbIAugEIgIgWQgCgKgGgPIAQgGQASAxAHAaIgSAHIgDgOgAh7hRIAAgRIBOAAIAAARg");
	this.shape.setTransform(294.2,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCBmQB2gOAGhYIATAAIgBAFIgEATQAiBABZAKIgDAEQgIALgDAFQhZgTgcg1QgUA6hiASgAAvAyQAYgWASgVIAQANIgqAsgAhoATIAOgNIAqArIgQANQgTgXgVgUgAhkgJIAAgTICzAAIAAgcIiqAAIAAgSICqAAIAAgcIiwAAIAAgTIDFAAIAABwg");
	this.shape_1.setTransform(266,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB/IgFgXIAuABQAfACACgfQACg1AAhWIhHAAIgFAMQgNAbgGAHQgDgEgNgIQAVgmASg7IAYAGIgPAlIBVAAIgECjQgBAvg1gBIgbABgAh3B/IAAjSIAaAAQALgYAFgTIAYAGIgSAlIA2AAIAADPIgUAAIAAgUIg9AAIAAAXgAhiBWIA9AAIAAhCIg9AAgAhiAAIA9AAIAAg/Ig9AAgAAIgKIAQgMQAiAmANAUIgTAOQgRgZgbgjg");
	this.shape_2.setTransform(238.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiCBvIAAgSIBWAAIAAi4IhLAAIAAgUIDwAAIAAAUIhOAAIAAC4IBYAAIAAASgAgWBdIAsAAIAAi4IgsAAgAA1AsQAWgrAWg8IAUAJQgWA2gWAxgAhzgzIATgIIApBmIgVAIQgUg3gTgvg");
	this.shape_3.setTransform(210,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVCAIAAieIgRAaQgHgKgFgFQAkgyAUg6IASAGIgLAXIgKATIB8AAIAAASIg6AAIAAApIA4AAIAAATIg4AAIAAAkIA4AAIAAATIg4AAIAAApIA9AAIAAAPIiDAAIAAASgAgBBfIAzAAIAAgpIgzAAgAgBAjIAzAAIAAgkIgzAAgAgBgUIAzAAIAAgpIgzAAgAiBBaIBRgLIAMAAQgCAJAAAKQguADgqAIgAh8AhIARgSQAOgQAMgTIgVABQgRAAgFABIgFgSQADgCAJgNIADgEQAVgiASgmIASAIQgSAjggAwQAHAAAeAAIATghIASAKQgiA2geAjIA6gFQgDALAAAIQg3ADgUAFgAAph0IAQgLIAZAkIgRAKQgOgXgKgMg");
	this.shape_4.setTransform(181.8,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWB/IAAjQIBBAAIAAgtIATAAIAAAtIBBAAIAACwQABAdgiABIgiAAIgDgSIgBgCIAjABQARgBgBgNIAAguIAAhsIguAAQgBAcgDAUQAiAmAQAWIgQAQQgSgcgXgbQgHAeghAiIgNgQIAABIgAgDA2QAvgogDhMIgsAAgAh9BaIBdgOIgBAUQgvAFgoAIgAh6AiIARgPIAIgMQAMgNAIgOQgOABAFAAIgjACIgFgTQAIgHAIgMQAXgiASglIAVAKIg0BQIAjgCIAUggIAUAKQgaAmgpA0IAcgDIAdgCQgDALAAAHQgvAEgeAGg");
	this.shape_5.setTransform(153.5,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAfACAAgfQADgpABhiIhHAAIgGAMQgLAXgIALQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQgBAvg0gBIgcABgAh4B/IAAjSIAbAAQAKgYAHgTIAWAGIgRAlIA1AAIAADPIgUAAIAAgUIg9AAIAAAXgAhjBWIA9AAIAAhCIg9AAgAhjAAIA9AAIAAg/Ig9AAgAAHgKIARgMQAdAhASAZIgUAOQgSgcgaggg");
	this.shape_6.setTransform(126.1,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghB8IAAhRIgVAAIAAgRIAlAAIAAhmIgfAAIAAgQIAfAAIAAgfIARAAIAAAfIBMAAIAAgfIATAAIAAAfIAiAAIAAAQIgiAAIAABmIAkAAIAAARIiRAAIAAA/ICJAAIAAASgAAAAaIBMAAIAAgYIhMAAgAAAgMIBMAAIAAgYIhMAAgAAAg1IBMAAIAAgXIhMAAgAiCBTIAkgKIAAhqIghAAIAAgUIAhAAIAAhGIAUAAIAABGIAcAAIAAAUIgcAAIAABlQAOgDAQgGIAAAWIhMAUIgGABgAAIBeQgGgFgCgBQARgSAPgYIAPAKQgOAWgTAWgABAA5IAOgMIAkAoIgPANQgSgYgRgRg");
	this.shape_7.setTransform(97.9,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABSB/IAAiLIgrAAQAAAwgHAeQgFAbgTAhQgDgEgGgHIgEgEQAOgbAGgaQAEgZAAg0IAAhWQA1gEAugLIAJATQgdAGg0AGIgHABIAAA5IBcAAIAAATIgfAAIAACLgAiCByQAegaAOgUIAPALQgTAZgZAXIgPgNgAgzBOIAOgLIAgAeIgPAMQgMgOgTgRgAh/A9IAAgSIAUAAIAAh4IgSAAIAAgRIASAAIAAghIAUAAIAAAhIA3AAIAAghIASAAIAAAhIATAAIAAARIgTAAIAAB4IATAAIAAASgAhXArIA3AAIAAgdIg3AAgAhXgBIA3AAIAAgeIg3AAgAhXgvIA3AAIAAgeIg3AAg");
	this.shape_8.setTransform(69.9,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6B2IgKAAIgFgXIAvABQAYABgBgZIAAhOIh0AAIAAgVIB6AAQgrgigXgPIANgOQARALAVAPIAMAJIA+gpIidAAIAAgWIDDAAIAAAWIhSA2QAAAAABAAQAAAAABAAQAAABABAAQABAAAAABIAEACIgJALIBnAAIAAAVIgSAxIgNgDIgJgCIARgsIhQAAIAABPQACAtgrAAIgNAAIgVAAg");
	this.shape_9.setTransform(41.6,13.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiEByQA0gigFhXIAAhAIASAAIAABDQAAAigFAbIADACIAjAiIgNAMIgfgfQgIAYgfAfgABSBkQgQgrgDheIhZAAIAAgRIBZAAQgBghABgoIASAAIABBJIAwAAIAAARIgwAAQACBXAPAtQADAJAFAAQADAAADgJQACgQAAgTIASAHQgCAXgDAMQgFAZgPAAQgRAAgJgbgAggBhIANAAIAAhrIASAAIAABpIATgEIAAh4IASAAIAAArIAZAAIAAARIgZAAIAAA5IAdgHIAAATQggAGg8ANgAh2A8IAAiqIBUAAIAACoIgSAAIAAiVIgxAAIAACXgABYhsIANgIQAPAZAIAQIgQAIQgNgdgHgMgAgRhVIAAgRIBFAAIAAARg");
	this.shape_10.setTransform(14,13.3);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.2,306.6,26.2);


(lib.lib_mc_000048 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgDOQgUguAAigQAAifAUguQAWgyBKABQBLgBAWAyQAUAuAACfQAACggUAuQgWAyhLAAQhKAAgWgygAgYiJQgFAaAABvQAABvAFAaQAFAYATgBQAUABAFgYQAFgaAAhvQAAhvgFgaQgEgYgVAAQgTAAgFAYg");
	this.shape.setTransform(516.6,89.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMD7QgMAAAAgKQAAgHAEgIIBWiQQgNAIgVAAQgoAAgVgYQgVgZAAhwQAAhnASgmQARgmBMAAQAuAAAVAIQAUAIAOAVQARAZAAB3QAABJgGAkQgJA8gbAtIg6BeQgIAMgHAAgAgZh8IAABfQAAAXAKAEQAFABAKAAQAQAAAFgHQAFgFABgTIAAhbQgBgUgFgHQgGgIgPAAQgZAAAAAig");
	this.shape_1.setTransform(491.2,89.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKD6Qg5AAgQgvQgRgsAAiWIAAiMQADgqAMgaQAWgyAxAAIBbAAQAYAAAAAbIAAAhQAAATgGAFQgFAFgOAAIg5AAQgUAAgEAWQgFAZAABxQAABmgBgIQAFBDAXAAIA7AAQAYAAAAAZIAAAkQAAAcgXAAg");
	this.shape_2.setTransform(454.4,89.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2D6QgRAAgDgTIgbibQgCgJgFAAQgEAAgBAJIgbCbQgEATgRAAIg6AAQgSAAAGgcIAyjmIgyjWIgCgLQAAgQARAAIA5AAQAPAAAFAUIAbCNQACAKACAAQAEAAACgKIAbiNQAEgUAQAAIA4AAQARAAAAAQIgCALIgyDWIAyDmQAHAcgSAAg");
	this.shape_3.setTransform(430,89.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAuD6QgMAAgEgGQgEgEgBgNIgVinQgCgKgCAAQAAAAgDAJIgqCwQgDAPgRAAIgxAAQgPAAgEgTIhGnEIgBgLQAAgRAUAAIAzAAQAPAAACAWIAkDyQABAKAGAAQAEAAACgKIAhiOIgKhfQgDgbAWAAIAyAAQAQAAADAWIAdDxQACALAFAAQAFAAABgLIAdjzQADgUAPAAIA3AAQARAAAAAQIhQHNQgDAWgSAAg");
	this.shape_4.setTransform(382.3,89.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLD6QgSAAgFgKQgCgGgBgRIAAmxQAAghAaAAICTAAQALAAAHAEQAFAGAAATIAAAdQABAZgMAEQgEACgIAAIhIAAQgKAAgDAFIAAALIAABGQAAALABACQACACAKAAIAkAAQAVAAAAAaIAAAkQAAAZgVAAIgkAAQgJAAgDADQgBACAAAHIAABoQAAARANAAIBLAAQAaAAABAgIAAAYQgBAhgZAAg");
	this.shape_5.setTransform(351.1,89.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCD6QgPAAgEgFQgFgDgGgQIg8i6QgEgLgFAAQgDAAAAAPIAACtQAAAhgYAAIgnAAQgbAAAAgiIAAmwQAAgVAHgHQAFgFAOAAIAjAAQANAAAGAEQAFAFAFAOIA+C6QADALAFAAQAEAAAAgOIAAitQAAghAXAAIAnAAQAbAAAAAiIAAGvQAAAVgHAHQgFAGgPAAg");
	this.shape_6.setTransform(324.2,89.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAxQgPAAgFgHQgEgFAAgTIAAgjQAAgUAEgEQAEgHAQAAIBdAAQAPAAAFAHQAEAGAAASIAAAjQAAATgEAGQgFAGgPAAg");
	this.shape_7.setTransform(301.6,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgJQgEgIAAgQIAAmyQAAggAZAAIAoAAQAQAAAEAJQAEAHAAAQIAAFqQAAAQAKAAIA9AAQAZAAAAAgIAAAYQAAAhgcAAg");
	this.shape_8.setTransform(284.1,89.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgJQgEgGAAgSIAAmyQAAggAZAAIAnAAQAQAAAFAJQAEAHAAAQIAAFqQAAAQAKAAIA9AAQAZAAAAAgIAAAYQAAAhgcAAg");
	this.shape_9.setTransform(263.2,89.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgMgLAAIgeAAQgLAAgBAMIgNBrQAAANgNAAIhFAAQgOAAABgMIA9nKQADgdAdAAIBVAAQAZAAAEAdIBCHKQABAMgNAAgAgHiUIgMCpQgCAJALAAIARAAQALAAgBgJIgOiqQAAgLgEAAQgEAAgCAMg");
	this.shape_10.setTransform(238,89.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgFgKQgEgHABgQIAAmxQAAghAZAAICTAAQAMAAAFAEQAHAGAAATIAAAdQAAAZgLAEQgEACgJAAIhIAAQgKAAgCAFIgCALIAABGQAAALADACQABACAKAAIAkAAQAVAAAAAaIAAAkQAAAZgVAAIgkAAQgIAAgDADQgDADAAAGIAABoQAAARAPAAIBKAAQAaAAAAAgIAAAYQAAAhgYAAg");
	this.shape_11.setTransform(199.4,89.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSD6QgUAAgDgPQgCgGAAgKIAAlsQAAgPgKAAIgmAAQgNAAgFgEQgFgHgBgTIAAgaQAAgZALgFQAFgDAKAAIC1AAQAXAAAAAfIAAAbQABAZgNAFIgLABIgnAAQgJAAgBAPIAAFqQABASgFAIQgEAHgPAAg");
	this.shape_12.setTransform(175.4,89.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgMgLAAIgeAAQgKAAgCAMIgMBrQgBANgNAAIhFAAQgOAAABgMIA9nKQADgdAdAAIBVAAQAZAAAEAdIBCHKQABAMgNAAgAgHiUIgMCpQgCAJALAAIARAAQAMAAgCgJIgOiqQAAgLgEAAQgEAAgCAMg");
	this.shape_13.setTransform(149.6,89.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhLD6QgSAAgEgKQgEgHAAgQIAAmxQAAghAaAAICTAAQAMAAAFAEQAHAGAAATIAAAdQAAAYgLAFQgFACgIAAIhIAAQgKAAgCAFQgBACAAAJIAABGQAAALACACQABACAKAAIAkAAQAVAAAAAaIAAAkQAAAZgVAAIgkAAQgIAAgDADQgCACAAAHIAABoQAAARANAAIBLAAQAbAAAAAgIAAAYQAAAhgaAAg");
	this.shape_14.setTransform(125.2,89.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAwD6QgRAAgEgWIgdi0QAAgHgJAAIgKAAQgIAAAAAHIAACqQAAAggaAAIgnAAQgSAAgEgLQgDgIAAgOIAAmwQAAgiAaAAIBqAAQBnAAgBCbQAABOgoAgIAtDfQAAALgOAAgAgdiWIAABbQAAAOAHAAIAXAAQAcAAAAg9QAAg2gaAAIgWAAQgKAAAAAKg");
	this.shape_15.setTransform(100.7,89.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJD6Qg5AAgRgvQgQguAAiUIgBiJQADgsAMgbQAWgyAxAAIBbAAQAYAAAAAbIAAAhQAAATgFAFQgGAFgOAAIg5AAQgUAAgEAWQgFAZABBxQAABXgCAHIAAAAQAGBDAXAAIA6AAQAZAAAAAZIAAAkQAAAcgYAAg");
	this.shape_16.setTransform(76.3,89.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhoC3QgPgugBiJQABiKAPgtQAXhHBRAAQBSAAAXBHQAPAuABCJQgBCJgPAuQgXBJhSAAQhQAAgYhJgAgbiBQgFAZABBoQAABmAEAbQAGAgAVgBQAXABAGggQAEgaAAhnQAAhogFgZQgFgfgXAAQgWAAgFAfg");
	this.shape_17.setTransform(37.3,89.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSD6QgUAAgDgPQgCgGAAgKIAAlsQAAgPgKAAIgnAAQgMAAgFgEQgGgHABgTIAAgaQgBgZAKgFQAGgDAKAAIC1AAQAXAAAAAfIAAAbQAAAZgMAFIgLABIgnAAQgJAAgBAPIAAFqQABASgFAIQgEAHgPAAg");
	this.shape_18.setTransform(12.1,89.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABbD6QgQAAgFgJQgDgGgBgRIAAjLQAAgQgCAAQgFAAgCAOIgeCVQgFAXgWAAQgVAAgEgXIgeiVQgEgOgDAAQgEAAAAAQIAADLQAAARgCAGQgGAJgPAAIgoAAQgUAAgDgNQgCgGAAgNIAAm0QAAgRAFgHQAFgHAOAAIAqAAQASAAAFAEQAHAFADAOIAzC1QABAGADAAQADAAADgGIAyi1QAEgOAGgFQAHgEARAAIApAAQAPAAAEAHQAFAFAAATIAAG0QAAAYgIAFQgGADgLAAg");
	this.shape_19.setTransform(426.8,25.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhLD6QgSAAgEgKQgEgHAAgQIAAmwQAAgiAaAAICTAAQAMAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgEACgJAAIhIAAQgKAAgCAFQgBACAAAKIAABFQAAAMACABQABADAKAAIAkAAQAWAAAAAaIAAAkQAAAYgWAAIgkAAQgIAAgDADQgCACAAAHIAABoQAAARANAAIBLAAQAbAAAAAgIAAAZQAAAggZAAg");
	this.shape_20.setTransform(398.8,25.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA6D6QgYAAAAggIAAiuQAAgQgMAAIgrAAQgMAAAAAQIAACuQAAAggYAAIgnAAQgZAAAAghIAAmxQAAghAZAAIAoAAQAXAAAAAgIAACRQAAAOALAAIAtAAQALAAAAgOIAAiRQAAggAXAAIAoAAQAZAAAAAhIAAGxQAAAhgZAAg");
	this.shape_21.setTransform(372.5,25.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSD6QgVAAgCgPQgCgFAAgLIAAlsQAAgPgKAAIgnAAQgMAAgFgEQgGgGABgUIAAgZQAAgaAJgFQAFgDAKAAIC2AAQAXAAAAAfIAAAbQAAAagNAEIgKABIgnAAQgKAAAAAPIAAFqQAAAUgEAGQgEAHgPAAg");
	this.shape_22.setTransform(346.5,25.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhRD6QgPAAgFgHQgGgGAAgSIAAgaQABgYAHgEQAGgEALAAIBOAAQARAAAAgTQAAgIgEgKIhTidQgihAAAg9QAAgyAXgVQAWgUAwAAIBTAAQAWAAAAAbIAAAiQAAAcgYAAIhCAAQgVAAAAAVQgBALAHAMIBPCSQAtBUAAA4QAABQhQAAg");
	this.shape_23.setTransform(309.1,25.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgGgKQgCgIAAgPIAAmwQgBgiAaAAICSAAQANAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgEACgKAAIhHAAQgKAAgCAFIgBAMIAABFQAAAMACABQABADAKAAIAkAAQAVAAAAAaIAAAkQAAAYgVAAIgkAAQgIAAgDADQgCAEAAAFIAABoQAAARANAAIBLAAQAbAAAAAgIAAAZQAAAggaAAg");
	this.shape_24.setTransform(287.3,25.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhRD6QgPAAgFgHQgFgHAAgRIAAgaQAAgYAIgEQAFgEALAAIBNAAQATAAAAgTQAAgKgFgIIhTidQgihCAAg7QAAgyAXgVQAWgUAwAAIBUAAQAVAAAAAbIAAAiQAAAcgXAAIhDAAQgWAAAAAVQAAALAHAMIBOCSQAuBVAAA3QAABQhQAAg");
	this.shape_25.setTransform(263.8,25.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhhDXQgWggAAhLIAAlHQAAgRAEgIQAFgIARAAIAoAAQAPAAAEAJQADAGAAAQIAAFUQAAAnAfAAQAgAAAAgoIAAlTQAAgSAFgGQAEgHAPAAIApAAQASAAADALQACAHAAANIAAFFQAABIgVAhQgbAshIAAQhHAAgagmg");
	this.shape_26.setTransform(238.9,25.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdBJQgMAAAFgNIANggQAFgNgIAAIgFAAQgMAAAAgRIAAgkQAAgTAEgGQAFgIAPAAIAoAAQAOAAAFAIQAEAFAAAUIAAAYQAAANgIAUIgPAmQgGAPgJABg");
	this.shape_27.setTransform(205.8,48.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgsQAYhHBRAAQBSAAAXBHQAPAsAACMQAACKgPAtQgYBIhRAAQhRAAgYhIgAgbiBQgFAZAABoQAABkAFAdQAGAgAVAAQAWAAAHggQAEgWAAhrQAAhrgFgWQgFgegXAAQgWAAgFAeg");
	this.shape_28.setTransform(187.2,25.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnD6QgRAAgDgUIhKnLQgDgUARAAIA5AAQASAAACAYIAlEcQABALAEAAQAFAAABgLIAkkcQAEgYAQAAIA6AAQARAAgDAUIhLHLQgDAUgRAAg");
	this.shape_29.setTransform(160.2,25.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgIQgEgHAAgSIAAmxQAAghAZAAIAnAAQAQAAAFAKQAEAGAAARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape_30.setTransform(136.9,25.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhpC3QgPgvABiIQgBiKAPguQAYhHBRAAQBRAAAYBHQAQAuAACKQAACIgQAvQgYBIhRAAQhRAAgYhIgAgciBQgEAZAABoQAABmAFAbQAGAgAVAAQAXAAAFggQAEgaABhnQAAhogGgZQgEgegXAAQgXAAgFAeg");
	this.shape_31.setTransform(112.3,25.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmD6QgRAAgEgUIhKnLQgDgUAQAAIA6AAQARAAAEAYIAjEcQACALAEAAQAEAAACgLIAkkcQADgYASAAIA5AAQARAAgDAUIhKHLQgEAUgRAAg");
	this.shape_32.setTransform(85.2,25.4);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-0.1,527.9,115.6);


(lib.lib_mc_000047 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHAAQABhsBGgDQBGACACBtQgCBuhGACQhHgBAAhvgAAuAAQAAhcguABQgsACgCBZQAABfAugCQAuACAAhfg");
	this.shape.setTransform(403.9,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBBIAXgHQAJAmAggBQAygCAAhZQgQAggkAAQg9gFgGhBQAEhHBDgGQBLgBgBBtQAABzhOAAQgwgCgOgtgAgDhaQgqAEgDAxQACAwArAEQAoAAAKglQAAhEgxAAIgBAAg");
	this.shape_1.setTransform(386.9,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgAEQAFhuBfgFQA/ADAaA8IgcAHQgTgvgsgBQhBAGgHBUQAFBVBCAGQA1gCAOg4IAdAGQgUBHhLABQhcgFgGhng");
	this.shape_2.setTransform(367.4,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABFBtIg9hVIgIgOIgBAHIhEBcIgfAAIBXhtIhMhsIAdAAIA1BNIAHAOIAAAEIBAhfIAdAAIhOBsIBWBtg");
	this.shape_3.setTransform(345.8,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBwQAhgjgBhNIAAhpQAxAAA1gLIAGAVQgkAGg0ADIAAA+IBgAAIAAASIgmAAIAACGIgUAAIAAiGIgmAAIAAAGQACBTgnAugAhnB9IgDgUQADABAVAAQANAAAAgNIAAg/Ig3AAIAAgSIA3AAIAAgXIASAAIAAAXIAzAAIAAASIgzAAIAABDQACAcghAAgAiCBeQAOgYANgeIARAJIgbA1IgRgIgAgrA0IAPgLQANAQAOAWIgRAMQgMgUgNgTgAiCgSIAAgQIBMAAQAUgcAGgOIAUAKIgZAgIAnAAIAAAQgAhdgrQgEgIgMgQIAPgJIAXAeIgRALgAh7hPIAAgRIA7AAIgKgTIgDgGIARgHIAQAcIgIAEIA0AAIAAARg");
	this.shape_4.setTransform(321.6,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah3B8IAAgSIBtAAIAAgvIhVAAIAAgTIBVAAIAAgoIhLAAIAAgQIgHAEIgaAMIgNgSQBVgqAsg/IAUAGIgCAEIgEAFQA1A8BDAZIgOAWQgTgJgMgIQg2gigggpQggApg0AiICqAAIAAASIhMAAIAAAoIBWAAIAAATIhWAAIAAAvIBtAAIAAASg");
	this.shape_5.setTransform(293.6,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiDBpIAigfIAAhXIgfAAIAAgUIA0AAIAABsQAbAdAqAAQBKACBBgEIgIAVIiIgBQgsAAgegeQgUASgNARgAghBQIAAhMICKAAIAABMgAgMA+IBgAAIAAgnIhgAAgAg1gRIAAgSIBTAAIAAgkIguAAQgHATgIAMIgSgJQAUgjAJgjIAUAEQgCAKgEAIIgCAJIAmAAIAAgmIAWAAIAAAmIBAAAIAAARIhAAAIAAAkIBNAAIAAASgAhohfIgKgPIARgKIAkAyIgSAMQgGgKgTgbg");
	this.shape_6.setTransform(265.5,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyB/QgBgLgEgLIAUABIASAAQAVABgCgSIAAjVIAVAAIAADZQABAjgigBgAhdBYIAAh2IgRAPQgBgEgGgHIgFgIQA3gpAbgzIAWAEIgHAJQAXAUAnAoIgOAQQgVgYglgiQgYAlgeAZIBqAAQAAATgCAkQgBAkgmgBIgeAAQgBgJgDgMIAhABQAWACgBgUIACghIhGAAIAABkQgCATAWgCIAkAAQAVAAAEgLQADgHACgZIAVAHQgEAagDAHQgGAYgggBIguAAIgFAAQghAAABgjgAAwA/IAAihIATAAIAAChg");
	this.shape_7.setTransform(236.7,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah8B3IgGgKQA5gUAjgUIAMARQgnAWg2AVIgFgKgAAYBWIAMgSIAaALQAzATASAJIgLAVQgogWg4gUgAiBA/IAAgSIAuAAIAAh5IgoAAIAAgSIAoAAIAAgiIAUAAIAAAiIB/AAIAAgiIAUAAIAAAiIAoAAIAAASIgoAAIAAB5IAvAAIAAASgAg/AtIB/AAIAAgdIh/AAgAg/AAIB/AAIAAgdIh/AAgAg/gvIB/AAIAAgdIh/AAg");
	this.shape_8.setTransform(209.6,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhsB3QgHgJgGgFQATgYAFgbQAFgdAAg+IAAhVIDWAAIAADNQACAigpAAIgfABIgBgFQgCgNgCgFIAQAAIATABQAVACgBgUIAAguIhPAAIAABUIgVAAIAAhUIhLAAQgFA3gbAjgAAXAOIBPAAIAAgwIhPAAgAhIAOIBKAAIAAgwIhJAAIgBAwgAAXg1IBPAAIAAgxIhPAAgAhHg1IBJAAIAAgxIhJAAg");
	this.shape_9.setTransform(180.8,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBvIgDgEQBRgtAIhFIhGAAIAAgUIBIAAIAChBIg8ADIgCgMQgCgEAAgDQAwgCBkgIIAEAUIgdACIgnACQAAAzgBAQIBTAAIAAAUIhPAAQAPBJBIAkQgIAJgIAMQhDgqgQhAQgOA/hLAuIgMgPgAh6BzQARgtASg1QALAFALADIgjBkgAiDgnIAOgQQATANAbAXIgPARQgYgVgVgQgAh1htIAMgQQAdAVAVASIgQAPg");
	this.shape_10.setTransform(153.6,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0B/QAAgHgDgMIABADIgDgGIAhABQAVABgBgTIAAiQIAUAAIAACTQACAmgogDIgRABgAh7BYQAnguAZg5IAVAKQgdA5gmAwgAArgCIASgMQAhArAjA5IgTANQgfg0gkgxgAiBgWQA1guAYg6IAXAGIgQAfICrAAIAAATQgRAbgMAXIgVgJQANgSAMgXIifAAQgVAhgiAfIgQgQg");
	this.shape_11.setTransform(125.5,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhEBvIgCgEQBRgtAHhFIhGAAIAAgUIBIAAIABhBIg7ADIgCgMQgCgEAAgDQAwgCBlgIIADAUIgcACIgoACQAAAzgBAQIBTAAIAAAUIhOAAQAPBJBHAkQgJAJgGAMQhEgqgQhAQgOA/hMAuIgLgPgAh6BzQARgtASg1QAKAFAMADIgjBkgAiDgnIAPgQQASANAcAXIgQARQgYgVgVgQgAh1htIAMgQQAdAVAVASIgPAPg");
	this.shape_12.setTransform(97.6,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAiQASgOABgbIgQAAIAAgkIAiAAIAAAgQAAAkgbATg");
	this.shape_13.setTransform(62.2,22.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiDBkQBmgqAOhIIhwAAIAAgUIB0AAIAAhCIhkAAIAAgTIDiAAIAAATIhoAAIgBBCIB3AAIAAAUIh0AAQAcBUBbAYIgPAXQhdgkgYhOQgTBJhgAsQgIgMgIgIg");
	this.shape_14.setTransform(41.5,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAB0QAkgtAagjIihAAIAAgVIC+AAIAAAVIgdAlQgWAbgXAfgAgYgpIARgLIAeAsIgUAJgAiFgTQBWgtArhCIAZADQgEAEgCAFQArA+BMAfIgPAXQhKgmgrg+QgtA8hMAqg");
	this.shape_15.setTransform(13.5,13.2);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,411.1,27.2);


(lib.lib_mc_000046 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000019();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288,868);


(lib.lib_mc_000045 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000018();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,719,1146);


(lib.lib_mc_000043 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQDYQgNAAgFgGQgEgGAAgQIAAiKIhHjyQgGgYASAAIArAAQAOAAADAQIAhCOQADAGABAAQABAAADgGIAhiOQAEgQANAAIAsAAQASAAgHAYIhHDyIAACKQAAASgFAFQgEAGgNgBg");
	this.shape.setTransform(390.6,87.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtDYQgOABgEgUIgdiQQgEgUgDAAQgGAAgOAaQgFALgBAaIAABcQABARgEAFQgEAHgOgBIghAAQgLAAgGgEQgGgGABgTIAAl1QAAgdAVgBIAjAAQAVABgBAdIAABgQAAAIADAAQAEABADgJIA5h3QAFgHAJAAIA6AAQAJABAAAHQgBADgCAFIhBB9QgDAIAAAEQgBAEACAKIBDD1IABALQAAAJgMAAg");
	this.shape_1.setTransform(368,87.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHDYQgNAAgEgFQgEgHAAgOIAAgXQAAgUAHgFQAFgDAJAAIBDAAQAQAAAAgRQAAgHgEgIIhIiHQgeg5AAg0QAAgrAUgSQATgSAqAAIBIAAQASABAAAXIAAAdQAAAYgTABIg6AAQgTAAAAASQAAAKAGAJIBEB/QAoBIAAAxQAABFhGAAg");
	this.shape_2.setTransform(345.2,87.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPDYQgTAAgBgNIgBgNIAAk8QgBgNgIABIgjAAQgKAAgEgFQgFgEAAgRIAAgXQAAgVAIgEQAGgEAIAAICdAAQAUAAAAAaIAAAZQAAAWgLAEIgJABIgiAAQgIgBAAANIAAE5QAAAQgEAHQgEAHgNgBg");
	this.shape_3.setTransform(312.8,87.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxDYQgTAAAAgcIAAiWQAAgOgLAAIglAAQgKAAgBAOIAACWQAAAcgTAAIgjAAQgVAAAAgdIAAl3QAAgcAVAAIAjAAQAUABgBAbIAAB9QAAANAKAAIAnAAQAKAAAAgNIAAh9QAAgbATgBIAjAAQAWAAgBAcIAAF3QABAdgWAAg");
	this.shape_4.setTransform(290.2,87.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaCkQgOglAAh/QAAh7AKglQAOg4AzAAIBWAAQAOAAAEAGQAEAGAAAQIAAAUQAAAdgUAAIgvAAQgTAAgHAGQgIAHgDAeQgBAYAABKIAABgQAAAoAgAAQAgAAAAghIAAhAQAAgRgIAAIgTAAQgLAAAAgVIAAgbQAAgPADgFQAFgHAPAAIA+AAQAUAAAAAdIAABvQAABDgRAbQgVAig+AAQhLAAgUg1g");
	this.shape_5.setTransform(266.4,87.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPDYQgMAAgEgEQgGgFAAgUIAAl1QAAgdAWgBIAhAAQAUABAAAdIAAF2QAAARgDAFQgGAHgMgBg");
	this.shape_6.setTransform(249.2,87.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5DYQgMAAgEgDQgEgEgFgNIg1iiQgDgIgEgBQgEABAAAMIAACVQAAAdgUAAIghAAQgYAAAAgdIAAl2QAAgTAGgFQAGgFALAAIAeAAQAMABAEADQAEADAFANIA1ChQADAKAEAAQAEAAAAgMIAAiWQAAgdATAAIAiAAQAYABAAAdIAAF1QAAAUgGAFQgGAEgLAAg");
	this.shape_7.setTransform(230.9,87.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBDYQgPAAgEgJQgDgGAAgOIAAl2QAAgdAWAAIB/AAQALABAEADQAGAFAAARIAAAYQAAAWgKAEQgEACgHAAIg+AAQgIgBgCAFIgBBGQAAAJACADQABACAIAAIAfAAQATAAAAAWIAAAfQAAAWgTgBIgfAAQgHABgCACQgCACAAAFIAABbQAAAOALAAIBBAAQAXAAAAAcIAAAVQAAAcgVAAg");
	this.shape_8.setTransform(196.8,87.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyDYQgVAAAAgcIAAiWQAAgOgJAAIgmAAQgKAAAAAOIAACWQAAAcgVAAIgiAAQgWAAAAgdIAAl3QAAgcAWAAIAjAAQAUABAAAbIAAB9QAAANAJAAIAnAAQAJAAAAgNIAAh9QAAgbAVgBIAiAAQAWAAAAAcIAAF3QAAAdgWAAg");
	this.shape_9.setTransform(174,87.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPDYQgRAAgEgNIgBgNIAAk8QAAgNgJABIghAAQgLAAgEgFQgFgEAAgRIAAgXQAAgVAIgEQAFgEAJAAICcAAQAVAAAAAaIAAAZQAAAWgMAEIgIABIgiAAQgIgBAAANIAAE5QAAARgEAGQgEAHgNgBg");
	this.shape_10.setTransform(151.4,87.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGDYQgOAAgDgFQgEgHgBgOIAAgXQABgUAGgFQAFgDAKAAIBCAAQAQAAAAgRQAAgFgEgKIhHiHQgfg5AAg0QABgrATgSQAUgSApAAIBIAAQATABAAAXIAAAdQAAAYgVABIg5AAQgTAAABASQgBAIAGALIBEB/QAnBIAAAxQAABFhFAAg");
	this.shape_11.setTransform(119.1,87.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhGDYQgOAAgDgFQgFgHAAgOIAAgXQAAgUAIgFQAEgDAJAAIBEAAQAPAAAAgRQAAgFgEgKIhIiHQgdg5AAg0QAAgrATgSQAUgSApAAIBIAAQATABAAAXIAAAdQAAAYgUABIg6AAQgSAAgBASQABAIAFALIBEB/QAnBIABAxQgBBFhFAAg");
	this.shape_12.setTransform(99.4,87.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhbCeQgMgmAAh4QAAh5AMgmQAVg9BGAAQBGAAAWA9QAMAnAAB4QAAB4gMAmQgWA/hGAAQhGAAgVg/gAgXhwQgEAUAABcQAABbAEAUQAFAbASAAQATAAAFgbQAFgYAAhXQgBhZgEgXQgEgbgUAAQgTAAgEAbg");
	this.shape_13.setTransform(78,87.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApDYQgOABgDgUIgZicQgCgFgGgBIgJAAQgHABAAAFIAACTQAAAcgWAAIgjAAQgPAAgEgKQgCgEAAgOIAAl2QAAgdAXgBIBaAAQBaAAAACGQAABEgkAcIAoDBQAAAKgMgBgAgZiCIAABPQAAAMAGAAIATAAQAYgBAAgzQAAgwgWABIgTAAQgIAAAAAIg");
	this.shape_14.setTransform(55.7,87.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIDYQgwAAgPgoQgPgngBiCIAAh0QADgnALgZQATgrAqAAIBPAAQAUAAABAYIAAAdQgBAQgFAEQgEAEgMABIgxAAQgSgBgDAUQgEATAABkQAABYgBgHQAEA6AUAAIAzAAQAUAAABAWIAAAgQgBAYgTgBg");
	this.shape_15.setTransform(34.6,87.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAvDYQgKAAgBgMIgMhbQgCgLgKABIgZAAQgKgBgBALIgLBdQgBALgLgBIg7AAQgNAAACgKIA1mNQACgZAZAAIBJAAQAWABAEAZIA5GMQABAKgLAAgAgGiAIgLCSQAAAIAJAAIAOAAQAKAAgBgIIgMiTQAAgJgDAAQgEgBgCALg");
	this.shape_16.setTransform(12.6,87.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQDYQgRAAgDgMQgBgGAAgIIAAk8QAAgMgJAAIghAAQgLAAgEgEQgFgEAAgSIAAgXQAAgVAIgFQAFgCAIAAICdAAQAVAAAAAaIAAAYQAAAXgLACIgJACIgiAAQgJAAAAAMIAAE5QAAASgDAFQgEAGgOAAg");
	this.shape_17.setTransform(319.7,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAyDYQgUAAgBgcIAAiWQABgNgLAAIglAAQgKAAAAANIAACWQgBAcgTAAIgjAAQgVAAgBgdIAAl2QABgcAVAAIAjAAQAUAAAAAbIAAB+QgBAMALAAIAmAAQAKAAgBgMIAAh+QABgbATAAIAkAAQAUAAABAcIAAF2QgBAdgUAAg");
	this.shape_18.setTransform(297.1,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhaCkQgOgiAAiBQABh9AJgkQAOg4AzAAIBWAAQAOAAAEAGQAEAGAAAQIAAAUQAAAdgUAAIgvAAQgTAAgHAFQgIAIgDAeQgBAYAABKIAABfQAAAqAgAAQAfAAAAgiIAAhAQAAgRgHAAIgTAAQgLAAAAgVIAAgbQAAgPADgFQAFgHAPAAIA+AAQAUAAAAAdIAABvQAABEgQAbQgWAhg+AAQhLAAgUg1g");
	this.shape_19.setTransform(273.3,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgODYQgLAAgGgEQgGgGAAgTIAAl1QAAgdAWAAIAhAAQAUAAAAAdIAAF3QAAAQgDAFQgFAGgOAAg");
	this.shape_20.setTransform(256.1,22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag6DYQgOAAgEgHQgEgFAAgRIAAl2QAAgcAWAAIAjAAQANAAAEAIQADAFAAAPIAAE5QAAANAJAAIA1AAQAWAAAAAcIAAAVQAAAcgZAAg");
	this.shape_21.setTransform(242.3,22.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+DYQgPAAgEgLQgBgFAAgLIAAl3QAAgXAIgEQAEgCAJAAIB6AAQAWAAAAAcIAAAXQAAAagUAAIg8AAQgGAAgCAEIgBANIAAA7QAAAMAGAAIAlAAQANAAADAHQADAGAAANIAAAXQAAAagUAAIghAAQgGAAgCAEIgBAMIAACUQAAAbgTAAg");
	this.shape_22.setTransform(211.6,22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhbCeQgMgpAAh1QAAh3AMgnQAVg+BGAAQBGAAAVA+QANAnAAB3QAAB1gNApQgVA/hGAAQhFAAgWg/gAgXhwQgEATAABdQAABVAEAaQAFAcASAAQAUAAAEgcQAEgTAAhcQAAhcgEgUQgFgagTAAQgTAAgEAag");
	this.shape_23.setTransform(189.9,22.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPDYQgPAAgEgHQgDgFAAgQIAAiJIhIjzQgGgXASAAIAsAAQANAAADAPIAiCOQADAGAAAAQACAAACgGIAhiOQAFgPAMAAIAsAAQASAAgGAXIhIDzIAACJQAAARgEAGQgFAFgMAAg");
	this.shape_24.setTransform(154.8,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAvDYQgJAAgCgLIgNhcQgBgLgKAAIgZAAQgJAAgCALIgLBdQAAAKgLAAIg8AAQgNAAACgKIA0mNQAEgYAYAAIBKAAQAVAAADAZIA5GMQACAKgLAAgAgFiBIgLCTQgBAIAJAAIAOAAQAKAAgBgIIgMiTQAAgJgDAAQgEAAgBAJg");
	this.shape_25.setTransform(131.5,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AApDYQgOAAgDgTIgZicQgBgFgHAAIgJAAQgIAAAAAFIAACUQAAAbgVAAIgjAAQgPAAgDgKQgDgFAAgNIAAl2QAAgdAWAAIBbAAQBaAAAACGQAABDgjAcIAnDBQAAAJgMAAgAgaiCIAABPQAAAMAHAAIAUAAQAXAAAAg0QAAgvgWAAIgTAAQgJAAAAAIg");
	this.shape_26.setTransform(108.7,22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAuDYQgJAAgCgLIgMhcQgBgLgKAAIgZAAQgKAAgBALIgLBdQgBAKgLAAIg8AAQgMAAABgKIA1mNQADgYAZAAIBJAAQAWAAADAZIA5GMQACAKgLAAgAgGiBIgLCTQAAAIAJAAIAOAAQAKAAgBgIIgMiTQAAgJgDAAQgFAAgBAJg");
	this.shape_27.setTransform(72.2,22.7);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.7,401.1,108.7);


(lib.lib_mc_000042 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXB5IAAhsIgrAAIAAgRIEFAAIAAARIjDAAIAABaICqAAIAAASgAgSgtIAQgLIAZAjIgSAOQgJgVgOgRgAAkgnIAAgdIhIAAIAAAdIgVAAIAAgdIhHAAIAAgSIBHAAIAAgjIAVAAIAAAjIBIAAIAAgjIAVAAIAAAjIBHAAIAAASIhHAAIAAAdg");
	this.shape.setTransform(238,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiEBuQBWgXgEhWIhOAAIAAgRIB2AAIAAhwIATAAIAABwIB5AAIAAARIhYAAIAABUQAAATATAAIAbAAQASAAACgNIACglIAFACIASAGQgEAhgDAFQgGAWggAAIgfAAQgkAAAAghIAAhYIgyAAQAFBihfAegAAmguQAfgfAXgeIATAOQgbAfgeAdgAhsheIAQgNQAgAjATAYIgSAOQgbgjgWgZg");
	this.shape_1.setTransform(210,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAeACABgfQADg1ABhWIhHAAIgGAMQgNAbgGAHQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQAAAvg1gBIgcABgAh4B/IAAjSIAbAAQALgYAFgTIAYAGIgSAlIA2AAIAADPIgVAAIAAgUIg8AAIAAAXgAhiBWIA8AAIAAhCIg8AAgAhiAAIA8AAIAAg/Ig8AAgAAIgKIAQgMQAhAmAOAUIgTAOQgRgZgbgjg");
	this.shape_2.setTransform(182.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah4B7IAAgRIBvAAIAAhFIhTAAIAAgVIC6AAIAAAVIhTAAIAABFIBuAAIAAARgAAVglIAMgPQAuAbAyAhIgOASQgwgigugdgAiAAIQAzgXAtgmIAQAPQguAjg0AdgABkggIAAgjIjFAAIAAAjIgWAAIAAg2IB0AAQgCgKgIgSIgBgCIARgGIANAhIgLADIB0AAIAAA2g");
	this.shape_3.setTransform(154,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BxQA1gVAVgTQgXgYgQgkQgLAQgOARQgMgMgEgCQAqguATg2IAUAIIgKAUIBgAAIAAATQgRA3gmAmQAgAVAwAKQgFAGgFAKIgEAGQg1gTgdgTQghAXguAVQgEgKgHgIgAgDgLIgFAKQAQAlAbAYQAhghARgwIhVAAQAAACgDAIgAhaCAIAAhuQgOAVgRAQIgJgWQAuguAWg3IATAGQgMAdgQAYIAACJgAAKAAIAOgLQAUAPAJAKIgOAOIgdgcgAh7hGIAAgUIB+AAIgQgfIAQgJIAEAGIAOAaIgPAIIB6AAIAAAUg");
	this.shape_4.setTransform(126,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiDBmIAPgJIAUgSIAAhZIgeAAIAAgSIAzAAIAABrQAXAbAuAAQAaACAsAAIBEgDIgBAEIgHARIiFAAQgyAAgbgdQgWASgMAOgAALBXIgGgWIAlABQAVACgBgVIAAhlIhqAAIAAgUIBqAAIAAgyIAWAAIAAAyIAtAAIAAAUIgtAAIAABoQACAlgoAAgAgngUIAPgMQAWAWAaAdIgSAPQgcgmgRgQgAhvhwIAPgLQAQARAXAgIgTAMQgMgTgXgfg");
	this.shape_5.setTransform(97.9,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFB+QgNAAgNgKQgWgRgJgYQgZAVgeAQIgPgPQAkgUAagXQgLgggDg2IgoAHIgEgTIArgHIgDhLIAWAAQAAApACAfIBTgQIACATIhVAPQACAvAJAcQAcgeAVgiIASALQgXAiglApQAOAiASAHQANAIAEgNIAFgpIAVAHIgJApQgGAXgSAAIgBgBgAA1B9IgCgLIgCgLIAjABQAUACgCgTIAAjVIAVAAIAADYQABAjgjAAgAAvA7IAAifIAUAAIAACfgAgRhWIgXgUIAMgNQAVAPAMANIgLAQg");
	this.shape_6.setTransform(69.1,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiCBsIAgggIAAhYIgeAAIAAgUIAyAAIAABuQASAcAtAAICTgBQgHAMgCAIQh3AAgUgBQg0ACgVggQgLAJgTAZgAgoBTIAAiGIA0AAIAEgXIhIAAIAAgRIA0AAQgHgKgNgOIAPgMQALANALAOIgNAJIAwAAQAKgMAOgYIAVAKIgWAaIA5AAIAAARIhZAAIgIAXIBNAAIAACGgAgVBDIBtAAIAAgYIhtAAgAgVAbIBtAAIAAgYIhtAAgAgVgKIBtAAIAAgYIhtAAgAh5hsIAQgLQAbAhAIANIgSAMQgMgUgVgbg");
	this.shape_7.setTransform(42.1,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiCALIAAgVIEFAAIAAAVg");
	this.shape_8.setTransform(14,12.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0.1,250.3,26.4);


(lib.lib_mc_000039 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgBgOIgPhqQgCgLgLAAIgdAAQgMAAgBALIgMBsQgCAMgMAAIhFAAQgOAAABgMIA9nKQAEgdAcAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgHiUIgMCpQgBAJALAAIAQAAQAMAAgBgJIgOiqQgCgLgCAAQgFAAgCAMg");
	this.shape.setTransform(555.9,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQD6QgPAAgFgFQgHgGAAgWIAAmwQAAgiAaAAIAmAAQAXAAAAAiIAAGxQAAATgEAFQgEAIgRAAg");
	this.shape_1.setTransform(535.5,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnD6QgQAAgEgUIhKnLQgDgUARAAIA5AAQASAAACAYIAlEcQABALAEAAQAFAAABgLIAkkcQAEgYAQAAIA6AAQARAAgDAUIhKHLQgEAUgRAAg");
	this.shape_2.setTransform(515.5,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgLgLAAIgeAAQgLAAgBALIgMBsQgBAMgNAAIhFAAQgOAAABgMIA9nKQADgdAdAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgHiUIgMCpQgCAJALAAIARAAQAMAAgCgJIgOiqQAAgLgEAAQgEAAgCAMg");
	this.shape_3.setTransform(487.9,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgEQgFgEgFgPIg9i7QgEgLgFAAQgDAAAAAPIAACtQAAAhgYAAIgnAAQgbAAAAgiIAAmvQAAgWAHgHQAGgFANAAIAjAAQANAAAGAEQAFAFAFAOIA9C7QAFAKAEAAQADAAAAgOIAAisQAAgiAYAAIAnAAQAbAAAAAiIAAGvQAAAWgHAHQgGAFgNAAg");
	this.shape_4.setTransform(459.3,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQD6QgOAAgGgFQgHgHAAgVIAAmwQAAgiAZAAIAmAAQAYAAAAAiIAAGxQAAATgEAFQgGAIgPAAg");
	this.shape_5.setTransform(438.2,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheD6QgSAAgFgKQgDgHAAgPIAAmxQAAgiAYAAIB/AAQA7AAARA5QAOAuAACSQAABwgHAxQgHA1gVATQgSARgpAAgAgdicQgFADAAAPIAAEXQAAAOAEADQAEADATAAQATAAAHgHQAIgJACgfQACgcAAhQQAAhZgCgaQgBgigJgKQgGgHgWAAQgPAAgFAEg");
	this.shape_6.setTransform(418.4,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgEQgFgEgGgPIg8i7QgEgLgFAAQgEAAABAPIAACtQgBAhgXAAIgnAAQgbAAAAgiIAAmvQAAgWAGgHQAHgFAOAAIAiAAQANAAAGAEQAFAFAGAOIA8C7QAFAKAEAAQAEAAAAgOIAAisQAAgiAXAAIAnAAQAbAAAAAiIAAGvQAAAWgHAHQgGAFgOAAg");
	this.shape_7.setTransform(389.6,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgLgLAAIgeAAQgLAAgBALIgMBsQgBAMgNAAIhFAAQgOAAABgMIA9nKQAFgdAbAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgGiUIgNCpQgCAJAMAAIAQAAQALAAAAgJIgOiqQgCgLgCAAQgFAAgBAMg");
	this.shape_8.setTransform(361,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJD6Qg5AAgRguQgRgvAAiUIAAiIQADgtAMgbQAWgyAyAAIBbAAQAXAAAAAbIAAAiQAAASgFAFQgGAFgNAAIg6AAQgTAAgFAWQgEAWAAB1QAABqgBgMQAEBCAYAAIA7AAQAYAAAAAaIAAAkQAAAbgXAAg");
	this.shape_9.setTransform(336.6,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhRD6QgQAAgEgHQgFgGAAgSIAAgaQAAgYAIgEQAFgEALAAIBNAAQATAAAAgTQAAgIgEgKIhUidQgihCAAg7QAAgyAXgVQAWgUAwAAIBTAAQAWAAAAAbIAAAiQAAAcgYAAIhCAAQgWAAAAAVQABALAGAMIBPCSQAtBUAAA4QAABQhQAAg");
	this.shape_10.setTransform(313.9,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABbD6QgQAAgFgJQgEgGABgRIAAjLQAAgQgDAAQgEAAgDAOIgfCVQgEAXgWAAQgUAAgGgXIgeiVQgDgOgEAAQgDAAAAAQIAADLQAAARgDAGQgFAJgQAAIgmAAQgVAAgEgNQgBgGAAgNIAAm0QAAgRAFgHQAEgHAPAAIApAAQATAAAFAEQAHAFADAOIAzC1QABAGADAAQADAAADgGIAyi1QAEgOAGgFQAHgEARAAIApAAQAPAAAEAHQAFAFAAATIAAG0QAAAYgIAFQgFADgMAAg");
	this.shape_11.setTransform(270.9,25.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgsQAZhHBQAAQBSAAAXBHQAPAsAACMQAACKgPAtQgYBIhRAAQhQAAgZhIgAgbiBQgEAVAABsQAABkAEAdQAFAgAWAAQAXAAAFggQAFgWAAhrQAAhngFgaQgGgegWAAQgWAAgFAeg");
	this.shape_12.setTransform(240,25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAwD6QgQAAgEgWIgdi0QgCgGgHAAIgLAAQgIAAAAAGIAACqQAAAggZAAIgpAAQgRAAgEgLQgDgIAAgNIAAmxQAAgiAaAAIBqAAQBnAAAACbQAABOgpAgIAtDfQAAALgOAAgAgdiWIAABbQAAAOAHAAIAXAAQAbAAAAg8QAAg3gaAAIgVAAQgKAAAAAKg");
	this.shape_13.setTransform(214.2,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhHD6QgTAAgDgNQgDgFAAgOIAAmwQAAgZAKgHQAGgDAJAAICNAAQAbAAAAAhIAAAaQAAAegYAAIhFAAQgHAAgDAFIgBAPIAABEQAAAOAHAAIAqAAQAPAAAEAIQAEAHAAAPIAAAaQAAAegYAAIglAAQgHAAgDAFQgBAEAAALIAACqQAAAggWAAg");
	this.shape_14.setTransform(190.3,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgIQgEgIAAgRIAAmxQAAghAZAAIAoAAQAQAAAEAKQAEAGAAARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggbAAg");
	this.shape_15.setTransform(154.9,25.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDD6QgRAAgEgIQgEgIAAgRIAAmxQAAghAZAAIAnAAQAQAAAFAKQAEAGAAARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape_16.setTransform(134,25.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhLD6QgSAAgEgKQgEgHAAgQIAAmwQAAgiAaAAICSAAQANAAAFAEQAHAGAAAUIAAAcQAAAZgLAEQgEACgKAAIhHAAQgKAAgCAFIgBBRQAAAMACABQABADAKAAIAkAAQAWAAAAAaIAAAkQAAAYgWAAIgkAAQgJAAgCADQgCACAAAHIAABoQAAARAOAAIBKAAQAbAAAAAgIAAAZQAAAggZAAg");
	this.shape_17.setTransform(112.3,25.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABaD6QgPAAgFgJQgEgGABgRIAAjLQgBgQgDAAQgDAAgDAOIgfCVQgDAXgXAAQgVAAgFgXIgeiVQgDgOgEAAQgCAAAAAQIAADLQAAARgFAGQgEAJgQAAIgnAAQgVAAgDgNIgBnHQAAgTAFgFQAEgHAPAAIApAAQASAAAGAEQAGAFAEAOIAyC1QADAGACAAQAEAAABgGIAzi1QAEgOAGgFQAGgEARAAIAqAAQAQAAADAHQAFAHAAARIAAG0QAAAYgIAFQgGADgKAAg");
	this.shape_18.setTransform(82.7,25.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhRD6QgPAAgGgHQgEgGAAgSIAAgaQAAgYAIgEQAFgEALAAIBNAAQASAAAAgTQAAgKgEgIIhTidQgihCAAg7QAAgyAXgVQAVgUAxAAIBUAAQAUAAAAAbIAAAiQAAAcgXAAIhCAAQgWAAAAAVQAAALAHAMIBOCSQAuBVAAA3QAABQhRAAg");
	this.shape_19.setTransform(53.8,25.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA1D6QgKAAgCgOIgOhqQgCgLgLAAIgdAAQgMAAgBALIgMBsQgCAMgMAAIhFAAQgPAAACgMIA9nKQAEgdAcAAIBVAAQAZAAAEAeIBBHJQACAMgNAAgAgHiUIgMCpQgCAJALAAIARAAQAMAAgBgJIgPiqQgBgLgCAAQgFAAgCAMg");
	this.shape_20.setTransform(14.3,25.4);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,-0.1,569,51.2);


(lib.lib_mc_000038 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBbIAAgpIAUAAIAAAoQgCAUAYgCIA0AAQAYABACgNIAEgUQAAgIABgCIAUAIIgGAbQgGAbglgCIg5AAIgFAAQgkAAACgjgAiFBrQAPgWALgiIATAIQgCAIgHALQgJAZgHAMgABQA8IAQgMQAVAXARAVIgRANQgUgcgRgRgAgWAzIAOgMQAQAQASAUIgQANgAhfAkIAAiGIBAAAIADgIQAEgJACgKIAWADIgKAYIBnAAIAACGgAhMATICVAAIAAgWIiVAAgAhMgTICVAAIAAgXIiVAAgAhMg6ICVAAIAAgYIiVAAg");
	this.shape.setTransform(238.1,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKBwQgNgVAAhNIAAgJIikAAIAAgQIC6AAIAAAZQAABKAKALQAFAIAEgBQAEgBACgHIADgqIAUAFQgCAagDARQgFAZgVAAIgCAAQgPAAgJgRgAiCgVQAlgvATg8IAVAEIgKAaIC0AAIAAATIi7AAQgVAuggAiQgBgGgGgQgAhKgkIAAgSICqAAIAAASg");
	this.shape_1.setTransform(210.1,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUB8IgKgNQBDgqADhUIAAgsIAUAAQAAAUgBARQAKBhA4AjQgKAJgGAIQgugmgMg9QgJA5g6AsIgEgFgAh8BkIAAjNIBwAAIAAATIhdAAIAACoIBXAAIAAASgAhiA3QAUgeAPgdIgRgcQgLgTgHgJIAQgKIAdAwQAQggAHgUIASAIQgRAogNAVIAkA4IgRANIgdgzQgMAXgRAeQgHgGgKgFgABSgRIARg2IhLAAQgKAfgNAdIgRgJQAXg1AMg3IATAFQgDAPgGARIBaAAIAAAVIgSA7g");
	this.shape_2.setTransform(182.7,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxB+IAAg2IgQAHQglAQgTAHIgJgUQAUgGA9gZIAAhSIhMAAIAAgUIBMAAIAAhKIAVAAIAAD7gAA9B3QglAAAAglIAAjPIAVAAIAABaQAsgZAXgRIAOAUQgXAOg6AeIAABdQgCAUAWgCIAQAAQAXACABgRQADgJACgfIAAgFQARAIAEABIgFArQgGAdgkAAg");
	this.shape_3.setTransform(154,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAeACABgfQADg1ABhWIhHAAIgGAMQgOAbgFAHQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQgBAvg0gBIgcABgAh4B/IAAjSIAbAAQAKgYAHgTIAWAGIgRAlIA1AAIAADPIgUAAIAAgUIg9AAIAAAXgAhjBWIA9AAIAAhCIg9AAgAhjAAIA9AAIAAg/Ig9AAgAAIgKIAQgMQAhAmAOAUIgUAOQgQgZgbgjg");
	this.shape_4.setTransform(126.1,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCCAIgcAAIgEgVIAdABQAUABgBgUIAAgcIhAAAIAAgSIBAAAIAAgdIhOAAIAAgQIBOAAIAAgdIg7AAIAAgLQgGAIgEADIgEgEQgHgIgDgCQApgoAWgqIASAEIgMAUIBQAAIAAARIgfAlIA3AAIAAAvIAYAAIAAAQIgYAAIAAA9IgTAAIAAgOIgzAAIAAAgQADAjglAAIgCAAgAAiArIAzAAIAAgdIgzAAgAAigCIAzAAIAAgdIgzAAgAgogxIBBAAIAeglIhBAAQgNAUgRARgAh/BjQASgtANg2IAUAHIgeBjgAh8hkIARgJQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAhA9IgUAKQgOgggSgjg");
	this.shape_5.setTransform(98.2,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABfB+IgiAAQggAAAAgiIAAgvIg4AAIAAhbIAUAAIAABIIAkAAIAAhdIhCAAIAAgUIBCAAIAAgkIAVAAIAAAkIBKAAIAAAUIhKAAIAABdIApAAIAAhIIATAAIAABbIg8AAIAAAsQAAASAQgBIAZAAQAPAAACgMIAEgjIAUAJIgFAiQgFAYgZAAIgCAAgAiDBfQArgFA3gKQgBAIAAALQgoAFg0AKgAh8AmQAOgMAbgqIgpAEIgGgSQAagfAchAIATAJIgwBUIAhgBQAEgGAKgSIAFgJIAUAJQgcAvgjAtIA6gJIgCAUIgQACIhBAKg");
	this.shape_6.setTransform(70,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiAB5IAAgRIEAAAIAAARgAgCAsQANgIALgMQAOgQASgVQgYADgPAAIgRACIgIgUQANgHAFgJQAYgdAcgtIAWAJIg9BQIAwgBIAdgmIAUANIgZAbQgqAxgVAXIBXgDIgBATQgggBg8AFQgJAAgJACgAhzAtQALgFALgMQAHgIAZgeQADgEABgCQgQAAgXACIgPABIgDACIgIgWQALgFAHgJQAZgeAXgrIAVAJQgSAbgmAyIAwgBQANgSAKgRIAUAJQgXAjg7BHQAvgDAUAAIgBATQgZAAgwADQgLAAgHACg");
	this.shape_7.setTransform(42,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiCALIAAgVIEFAAIAAAVg");
	this.shape_8.setTransform(14,12.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0.1,250.6,26.1);


(lib.lib_mc_000037 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000016();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,825,527);


(lib.lib_mc_000036 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000015();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,713,1135);


(lib.lib_mc_000034 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgEQgFgEgFgPIg9i7QgEgLgEAAQgFAAAAAPIAACtQAAAhgXAAIgnAAQgbAAAAgiIAAmvQAAgWAHgHQAFgFAPAAIAiAAQAOAAAFAEQAFAFAGAOIA8C7QAEAKAFAAQAEAAAAgOIAAisQAAgiAXAAIAnAAQAbAAAAAiIAAGvQAAAWgHAHQgFAFgOAAg");
	this.shape.setTransform(457.2,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgFgKQgEgHABgQIAAmwQgBgiAaAAICSAAQANAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgEACgKAAIhHAAQgKAAgCAFIgCAMIAABFQAAAMADABQABADAKAAIAkAAQAVAAAAAaIAAAkQAAAYgVAAIgkAAQgJAAgCADQgDAEAAAFIAABoQAAARAOAAIBLAAQAaAAAAAgIAAAZQAAAggZAAg");
	this.shape_1.setTransform(432.1,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmD6QgRAAgDgUIhLnLQgDgUARAAIA6AAQARAAADAYIAkEcQABALAEAAQAFAAACgLIAjkcQAEgYARAAIA6AAQAQAAgDAUIhKHLQgDAUgSAAg");
	this.shape_2.setTransform(406.3,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2D6QgKAAgDgOIgOhqQgDgLgKAAIgdAAQgMAAgBALIgMBsQgBAMgNAAIhFAAQgOAAABgMIA9nKQAFgdAbAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgGiUIgNCpQgCAJAMAAIAQAAQAMAAgBgJIgOiqQgCgLgCAAQgFAAgBAMg");
	this.shape_3.setTransform(378.7,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLD6QgSAAgEgKQgEgGAAgRIAAmwQAAgiAaAAICTAAQAMAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgGACgHAAIhIAAQgLAAgCAFIgBAMIAABFQABAMACABQACADAJAAIAkAAQAVAAAAAaIAAAkQAAAYgVAAIgkAAQgIAAgDADQgCACgBAHIAABoQAAARAOAAIBLAAQAbAAgBAgIAAAZQABAggaAAg");
	this.shape_4.setTransform(354.3,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5D6QgXAAAAggIAAiuQAAgQgMAAIgrAAQgMAAAAAQIAACuQAAAggYAAIgnAAQgZAAAAghIAAmxQAAghAZAAIAoAAQAXAAAAAgIAACRQAAAOALAAIAtAAQALAAAAgOIAAiRQAAggAXAAIAoAAQAZAAAAAhIAAGxQAAAhgZAAg");
	this.shape_5.setTransform(328,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABaD6QgPAAgFgJQgEgGAAgRIAAjLQAAgQgDAAQgDAAgEAOIgdCVQgEAXgXAAQgWAAgDgXIgeiVQgEgOgDAAQgDAAgBAQIAADLQAAARgDAGQgFAJgPAAIgpAAQgUAAgCgNQgCgGAAgNIAAm0QAAgRAEgHQAFgHAPAAIApAAQARAAAHAEQAFAEAGAPIAxC1QADAGACAAQADAAADgGIAyi1QAEgOAFgFQAIgEARAAIAqAAQAOAAAFAHQAEAHAAARIAAG0QAAAYgIAFQgGADgLAAg");
	this.shape_6.setTransform(282.1,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhoC3QgPgvgBiIQABiKAPguQAYhHBQAAQBSAAAXBHQAPAuAACKQAACIgPAvQgXBIhSAAQhQAAgYhIgAgciBQgDAVAABsQAABpAEAYQAFAgAWAAQAXAAAGggQAEgaAAhnQAAhngEgaQgHgegWAAQgWAAgGAeg");
	this.shape_7.setTransform(251.2,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAwD6QgRAAgEgWIgdi0QAAgGgJAAIgKAAQgIAAAAAGIAACqQAAAggaAAIgoAAQgSAAgDgLQgDgIAAgNIAAmxQAAgiAaAAIBpAAQBnAAAACbQAABOgoAgIAtDfQAAALgOAAgAgdiWIAABbQAAAOAHAAIAXAAQAcAAAAg8QAAg3gaAAIgXAAQgJAAAAAKg");
	this.shape_8.setTransform(225.4,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHD6QgTAAgDgNQgCgFgBgOIAAmwQAAgaAJgGQAHgDAKAAICMAAQAbAAAAAhIAAAaQgBAegXAAIhFAAQgIAAgCAFQgCAFABAKIAABEQAAAOAHAAIAqAAQAPAAAFAIQADAHAAAPIAAAaQAAAegXAAIgmAAQgIAAgCAFQgCAEABALIAACqQAAAggXAAg");
	this.shape_9.setTransform(201.5,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhdD6QgTAAgFgKQgDgHAAgPIAAmxQAAgiAYAAIB/AAQA7AAARA5QAOAuAACSQAABwgHAxQgIA2gVASQgRARgqAAgAgdicQgFADAAAPIAAEXQAAAOAEADQAFADATAAQASAAAGgHQAJgIACggQACgZAAhTQAAhZgBgaQgDgjgIgJQgGgHgWAAQgOAAgGAEg");
	this.shape_10.setTransform(162.2,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgEQgFgEgFgPIg9i7QgEgLgEAAQgFAAAAAPIAACtQAAAhgXAAIgnAAQgbAAAAgiIAAmvQAAgWAHgHQAGgFAOAAIAiAAQANAAAGAEQAFAFAGAOIA8C7QAEAKAFAAQADAAABgOIAAisQAAgiAXAAIAnAAQAbAAAAAiIAAGvQAAAVgIAIQgEAFgOAAg");
	this.shape_11.setTransform(133.5,25.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhhDXQgWggAAhLIAAlHQAAgSAEgHQAGgIAQAAIAnAAQAQAAAEAJQADAGAAAQIAAFUQAAAnAfAAQAgAAAAgoIAAlTQAAgTAEgFQAFgHAPAAIApAAQASAAADALQACAHAAANIAAFFQAABIgVAhQgcAshHAAQhHAAgagmg");
	this.shape_12.setTransform(105.2,25.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgsQAZhHBQAAQBSAAAXBHQAPAsAACMQAACKgPAtQgYBIhRAAQhQAAgZhIgAgbiBQgEAUAABtQAABkAEAdQAGAgAVAAQAWAAAHggQAEgWAAhrQAAhngFgaQgFgegXAAQgWAAgFAeg");
	this.shape_13.setTransform(78.2,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhRD6QgPAAgFgHQgFgGAAgSIAAgaQAAgYAIgEQAFgEALAAIBOAAQASAAAAgTQAAgIgEgKIhUidQgihCAAg7QAAgyAXgVQAWgUAwAAIBUAAQAVAAAAAbIAAAiQAAAcgXAAIhDAAQgVAAAAAVQAAAMAGALIBPCSQAtBUAAA4QAABQhQAAg");
	this.shape_14.setTransform(53.5,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgDgLgKAAIgeAAQgLAAgBALIgNBsQAAAMgNAAIhFAAQgOAAABgMIA9nKQAEgdAcAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgHiUIgMCpQgCAJAMAAIAQAAQALAAAAgJIgOiqQgCgLgCAAQgFAAgCAMg");
	this.shape_15.setTransform(14,25.4);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,-0.1,469.7,51.2);


(lib.lib_mc_000033 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheCBIAAiBIC9AAIAACAIgUAAIAAgNIiWAAIAAAOgAhLBiICWAAIAAgeIiWAAgAhLAwICWAAIAAgeIiWAAgAiAgWIAAgTIBPAAIgRgYIAQgLIAYAcIgLAHIBAAAQANgSAMgTIAUAOIgVAXIBOAAIAAATgAA0hOIimAAIAAgSIBuAAIgDgJIgIgSIATgFIANAbIgQAFIBzAAIAAASg");
	this.shape.setTransform(238,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJB8Qg3gCgjgiQgCgEgDAEIgFAFQgUASgIALIgNgUQAGgEALgLIASgQQAJgHAIACQBgg7A7g8Ii5AAIAAgUIDXAAIAAAUQhHBIhfA7QAYAZAvAAQAwAEBLgEIgBAFQgFANgBAEIh1gBgAgUhzIATgJIAXAmIgWALg");
	this.shape_1.setTransform(209.9,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFB9QgCgEgHgJQBKgYgHg4IAAgTIARAAIAAARQAAAVgEAOIBBAuIgMAPIg7guQgNAZgyAZIgCgFgAhKCCIAAhBQgQAagaAXQgFgIgJgIQAdgQAWgfIglAAIAAg5IAqAAIAAgVIgyAAIAAgPIAyAAIAAgUIASAAIAAAUIA0AAIAAAPIg0AAIAAAVIAqAAIAAA5IgqAAIAAAOIAHgHIAsAfIgLALIgVgOIgTgPIAAA7gAg4AkIAbAAIAAgeIgbAAgAhkAkIAaAAIAAgeIgaAAgAAFBPIAAhPIgHAHQgDgHgGgFQAdgaASglIASAGIgHAKIgCAFIA6AAIAAAMIgUAZIAjAAIAABUIgRAAIAAhHIhPAAIAABMgAARgKIAvAAIASgYIgvAAgABUg2QgJgJgTgOIAKgLIgnAAQgLAPgNAOIgFgFQgFgFgCgBQAWgXAQgiIASABQAAAEgGAHIgFALIBeAAIAAAQIg9AAQAQAKANAMIgNANgAgvg+IgSgNIALgMQAQAKANAJIgNAOIgJgIgAiBhFQAfgXATgkIATACQgDAGgGAJIgFAHIBIAAIAAAQIhTAAQgNAQgSAQg");
	this.shape_2.setTransform(182,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiCBkQBkgqAQhIIhxAAIAAgUIB0AAIAAhCIhlAAIAAgTIDjAAIAAATIhoAAIgBBCIB3AAIAAAUIh0AAQAcBVBaAXIgOAXQhdgkgYhOQgTBJhgAsQgJgMgGgIg");
	this.shape_3.setTransform(154,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAeACABgfQADg1ABhWIhHAAIgGAMQgOAbgFAHQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQgBAvg0gBIgcABgAh4B/IAAjSIAbAAQAKgYAHgTIAWAGIgRAlIA1AAIAADPIgUAAIAAgUIg9AAIAAAXgAhjBWIA9AAIAAhCIg9AAgAhjAAIA9AAIAAg/Ig9AAgAAIgKIAQgMQAhAmAOAUIgUAOQgQgZgbgjg");
	this.shape_4.setTransform(126.1,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiCBmQB2gOAGhYIAUAAIgBAFIgFATQAjBABYAKIgCAEQgJALgCAFQhagTgcg1QgTA6hiASgAAwAyQAXgWASgVIARANIgrAsgAhnATIAOgNIAqArIgRANQgTgXgUgUgAhkgJIAAgTIC0AAIAAgcIiqAAIAAgSICqAAIAAgcIixAAIAAgTIDFAAIAABwg");
	this.shape_5.setTransform(98,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3B7IAAgRIBuAAIAAhFIhTAAIAAgVIC6AAIAAAVIhTAAIAABFIBvAAIAAARgAAVglIAMgPQAuAbAyAhIgOASQgwgigugdgAiAAIQA0gXAsgmIAPAPQgtAjg0AdgABjggIAAgjIjFAAIAAAjIgUAAIAAg2IB0AAQgDgKgIgSIgCgCIATgGIAMAhIgKADIBzAAIAAA2g");
	this.shape_6.setTransform(70,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBqQAwgOAegVQgXgXgLgpIgNAAIAAgRIB6AAIAAASQgQAkgeAbQAYATAvAKIgOAVQgrgQgdgUQgjAXgsARQgHgLgGgIgAAvA8QAXgVARggIhIAAQAKAdAWAYgAhuB7IAAgsQgLgBgFACIgEgUIAUgBIAAiuQBEgEAXgGIAIAUQg5AHgXAAIAAAlIBDAAIAAARIhDAAIAAApIBBAAIAAAQIhBAAIAAAqQAYgCAfgEIAVgDIAAATIgeAEQgcADgSADIAAAwgAgYgeQAggTgBgqIAAgcIBYAAIAAA9QgBAQAOgCQAWAAAAAAIgDATIgYABQgbACAAgiIAAgsIgyAAIAAAJQAEA0goAYgACCgtIAAABg");
	this.shape_7.setTransform(42.1,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiCALIAAgVIEFAAIAAAVg");
	this.shape_8.setTransform(14,12.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0.1,250.1,26.3);


(lib.lib_mc_000032 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000014();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000030 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgGgKQgDgIAAgPIAAmwQAAgiAaAAICSAAQANAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgFACgJAAIhHAAQgKAAgCAFIgBAMIAABFQAAAMACABQABADAKAAIAjAAQAWAAAAAaIAAAkQAAAYgWAAIgjAAQgJAAgCADQgCAEAAAFIAABoQAAARANAAIBLAAQAbAAAAAgIAAAZQAAAggaAAg");
	this.shape.setTransform(271.7,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCD6QgPAAgEgEQgFgEgFgPIg9i7QgEgLgFAAQgDAAAAAPIAACtQAAAhgYAAIgnAAQgbAAAAgiIAAmvQAAgWAHgHQAFgFAPAAIAiAAQAOAAAFAEQAFAEAFAPIA+C7QADAKAFAAQAEAAAAgOIAAisQAAgiAXAAIAnAAQAbAAAAAiIAAGvQAAAWgHAHQgFAFgPAAg");
	this.shape_1.setTransform(244.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQD6QgPAAgFgFQgHgGAAgWIAAmwQAAgiAZAAIAnAAQAXAAAAAiIAAGxQAAATgEAFQgFAIgQAAg");
	this.shape_2.setTransform(223.7,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDD6QgRAAgEgIQgEgHAAgSIAAmxQAAghAZAAIAnAAQAQAAAFAKQADAGABARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape_3.setTransform(207.8,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLD6QgRAAgFgKQgEgHAAgQIAAmwQAAgiAaAAICTAAQAMAAAFAEQAHAHAAATIAAAcQAAAZgLAEQgFACgIAAIhIAAQgLAAgBAFIgBAMIAABFQAAAMABABQADADAJAAIAkAAQAWAAgBAaIAAAkQABAYgWAAIgkAAQgIAAgDADQgCACAAAHIAABoQAAARANAAIBLAAQAbAAAAAgIAAAZQAAAggaAAg");
	this.shape_4.setTransform(171.8,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDD6QgQAAgFgIQgEgIAAgRIAAmxQAAghAZAAIAnAAQAQAAAFAKQAEAGAAARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape_5.setTransform(150.1,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQD6QgOAAgHgFQgGgGAAgWIAAmwQAAgiAZAAIAmAAQAYAAAAAiIAAGxQAAARgEAHQgFAIgRAAg");
	this.shape_6.setTransform(132.4,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhpC9QgQgpABiTQABiOAKgsQARhAA6AAIBkAAQAQAAAEAHQAGAHAAARIAAAZQAAAggYAAIg2AAQgWAAgJAHQgJAJgDAiQgCAkAABOIAABuQAAAwAmAAQAkAAAAgoIAAhKQAAgTgJAAIgVAAQgNAAAAgXIAAghQAAgQADgHQAGgIASAAIBHAAQAXAAAAAiIAACAQAABPgTAeQgYAmhIAAQhYAAgXg9g");
	this.shape_7.setTransform(112.7,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2D6QgKAAgDgOIgOhqQgBgLgMAAIgdAAQgMAAgBALIgMBsQgBAMgNAAIhFAAQgOAAABgMIA+nKQADgdAcAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgGiUIgNCpQgBAJALAAIAQAAQAMAAgBgJIgOiqQgCgLgCAAQgFAAgBAMg");
	this.shape_8.setTransform(85.3,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgEQgFgEgFgPIg9i7QgDgLgGAAQgDAAAAAPIAACtQAAAhgYAAIgmAAQgcAAAAgiIAAmvQAAgXAHgGQAGgFANAAIAjAAQANAAAGAEQAFAFAFAOIA+C7QADAKAFAAQAEAAAAgOIAAisQAAgiAXAAIAnAAQAbAAAAAiIAAGvQAAAWgHAHQgFAFgOAAg");
	this.shape_9.setTransform(42.5,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgDgLgKAAIgeAAQgLAAgBALIgNBsQAAAMgNAAIhFAAQgOAAABgMIA9nKQAEgdAcAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgHiUIgMCpQgCAJAMAAIAQAAQALAAAAgJIgOiqQgCgLgCAAQgFAAgCAMg");
	this.shape_10.setTransform(13.9,25.4);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.4,281.7,50.2);


(lib.lib_mc_000029 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BuIgBgFIAfABQAUACgBgTIAAgwIhjAAIAAgSIBjAAIAAgZIASAAIAAAZIBcAAIAAASIhcAAIAAA0QACAjgggCIghABQgBgHgDgKgAh6BnQArgYAdgXIAPAOQglAbgmAWgAAmBGIAMgOIBNAsIgNARQgegUgugbgAiCAAQBHgLAsgUQgagPgUgXQgSAWgXASIgPgOQArgjAegwIAWAEIgLAPIgEAGICAAAIAAASQgdAfglAVQAmARBEAHIgBADIgKAPQhOgLgngUQgzAXhJAOIgJgRgAADgoQAmgVAXgXIhyAAQAcAeAZAOg");
	this.shape.setTransform(182,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABEB1QgRgMgJgQQgjAVgtASQgHgLgGgHQAzgRAigXIgBgEIgEgIQgIgcgCgRIg2AIIgEgTIA4gFQgDgUgBgVIguAGIgCgTIAugGIgCg/IAVAAQAAAcADAgIBYgJIACASIhZALIACAoIBbgOIADATIhaALQACAVAFAPIAEAMQAcgWATgZIARANQgZAegfAYQAIASASAHQARAKAEgTIACgEIAEgiQAEADAQAFIgIAnQgGAZgTAAIgDABQgPAAgNgMgAiBBZQAUgCBKgNIgCALIAAAIIgdAGQgoAFgRAEgAh+AgQAGgDAJgKIAdgoQgYAAgUADIgFgTIALgNQAXgjAUgrIAUAJQgZArgZAnQAcAAAHgBIAQgcIADgFIATAIQgeAyggArIA4gGIgBAJIgDAKIgYACIg0AHgAA1hvIALgPIAjAZQADAEADABIgOAPQgSgRgUgNg");
	this.shape_1.setTransform(154,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAeACABgfQADg1ABhWIhHAAIgGAMQgOAbgFAHQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQgBAvg0gBIgcABgAh4B/IAAjSIAbAAQAKgYAHgTIAWAGIgRAlIA1AAIAADPIgUAAIAAgUIg9AAIAAAXgAhjBWIA9AAIAAhCIg9AAgAhjAAIA9AAIAAg/Ig9AAgAAIgKIAQgMQAhAmAOAUIgUAOQgQgZgbgjg");
	this.shape_2.setTransform(126.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBwQA1gtAChiIAAgXIgnAAIAAgTIAoAAIAAg4IAWAAIgBA4IBGAAIAAAKQgCBugDAdQAAAtgoAAIgfAAIgEgXIAhACQAUAAACgYQAEhQAAgyIgyAAIAAAXQgCBmg6A7QgGgKgKgIgAh9BLQAMgIAHgPQAMgaAPgmIguAAIAAgTIB+AAIAAATIg6AAQgTAygUAkIBBgGIgSgtIARgHIAeBAQgDgDAFAKIgVAJIgDgKQgzAFgoAGgAhxhWIAAgUIBqAAIAAAUg");
	this.shape_3.setTransform(97.6,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiCBmQB2gOAGhYIAUAAIgBAFIgFATQAjBABYAKIgCAEQgJALgCAFQhagTgcg1QgTA6hiASgAAwAyQAXgWASgVIARANIgrAsgAhnATIAOgNIAqArIgRANQgTgXgUgUgAhkgJIAAgTIC0AAIAAgcIiqAAIAAgSICqAAIAAgcIixAAIAAgTIDFAAIAABwg");
	this.shape_4.setTransform(70,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBvQAJgMAAgLIAAjNICAAAIAAB+IhEAAQAJAXALAUIAIgEQAggUALgKIAMAQQgaASgaAOQAWAaAlAOIgPASQhIgmgWhNIgXAAIAABYIAugXIABAMIAAAKQgOADggATQgFADgJAIgAAAgHIBcAAIAAgmIhcAAgAAAg+IBcAAIAAglIhcAAgAhYB/IAAiMQgLAfgWApIgKgVQAbgrAOgzIgkAAIAAgSIAmAAIAAg1IATAAIAAA1IAlAAIAAASIglAAIAAAiIAKgJIAfAfIgOANQgMgNgPgRIAACQg");
	this.shape_5.setTransform(41.9,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCALIAAgVIEFAAIAAAVg");
	this.shape_6.setTransform(14,12.5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0.2,194.3,26.2);


(lib.lib_mc_000028 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000013();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,380);


(lib.lib_mc_000027 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000012();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000025 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6QgRAAgEgIQgEgIAAgRIAAmxQAAghAZAAIAnAAQAQAAAFAKQAEAGAAARIAAFqQAAAPAKAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape.setTransform(374.4,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgLgLAAIgdAAQgLAAgCALIgMBsQgBAMgNAAIhFAAQgOAAACgMIA8nKQAEgdAcAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgGiUIgNCpQgCAJAMAAIAQAAQAMAAgBgJIgOiqQgBgLgEAAQgEAAgBAMg");
	this.shape_1.setTransform(349.2,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSD6QgVAAgDgPQgBgFAAgLIAAlsQAAgPgKAAIgnAAQgMAAgFgEQgGgGAAgUIAAgZQAAgaAKgFQAFgDAKAAIC1AAQAZAAAAAfIAAAbQAAAagOAEIgKABIgnAAQgKAAAAAPIAAFqQAAAUgEAGQgEAHgQAAg");
	this.shape_2.setTransform(323.4,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRD6QgPAAgFgHQgFgHAAgRIAAgaQAAgYAIgEQAEgEAMAAIBNAAQATAAAAgTQAAgKgFgIIhSidQgkhCABg7QgBgyAYgVQAWgUAwAAIBUAAQAVAAgBAbIAAAiQAAAcgWAAIhDAAQgWAAAAAVQAAALAHAMIBOCSQAuBVAAA3QAABQhRAAg");
	this.shape_3.setTransform(300.3,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSD6QgRAAgEgIQgEgGAAgSIAAifIhSkZQgIgbAVAAIAyAAQAPAAAFATIAmCiQADAJABAAQACAAADgJIAmiiQAFgTAOAAIAzAAQAVAAgIAbIhSEZIAACfQAAAUgFAGQgGAGgOAAg");
	this.shape_4.setTransform(276,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwD6QgRAAgDgWIgdi0QgCgGgHAAIgLAAQgIAAAAAGIAACqQAAAggZAAIgoAAQgSAAgEgLQgDgHAAgOIAAmxQAAgiAaAAIBqAAQBmAAAACbQAABPgoAfIAsDWIABAJQAAALgOAAgAgdiWIAABbQAAAOAHAAIAXAAQAbAAAAg8QAAg3gZAAIgWAAQgKAAAAAKg");
	this.shape_5.setTransform(250.6,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJD6Qg5AAgRguQgRguAAiVIAAiGQAEguALgcQAWgyAyAAIBbAAQAXAAAAAbIAAAiQAAASgFAFQgGAFgOAAIg5AAQgTAAgFAWQgEAWAAB1QAABqgBgMQAEBCAXAAIA7AAQAYAAAAAaIAAAkQAAAbgWAAg");
	this.shape_6.setTransform(226.3,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSD6QgUAAgEgPIgBl8QAAgPgKAAIgnAAQgMAAgFgEQgGgGAAgUIAAgZQABgaAIgFQAGgDAKAAIC2AAQAXAAAAAfIAAAbQAAAagNAEIgKABIgnAAQgKAAAAAPIAAFqQAAAUgEAGQgEAHgPAAg");
	this.shape_7.setTransform(188.9,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhhDXQgXggAAhLIAAlHQAAgRAGgIQAFgIAQAAIAoAAQAPAAAFAJQACAGAAAQIAAFUQABAnAfAAQAfAAAAgoIAAlTQAAgSAFgGQAEgHAPAAIApAAQATAAADALQABAHAAANIAAFFQABBIgVAhQgcAshIAAQhGAAgbgmg");
	this.shape_8.setTransform(163.4,25.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKD6Qg4AAgRguQgRguAAiVIAAiFQADguAMgdQAWgyAyAAIBbAAQAXAAAAAbIAAAiQAAASgGAFQgFAFgOAAIg5AAQgTAAgFAWQgEAVgBB2QAABqgBgMQAFBCAXAAIA7AAQAZAAAAAaIAAAkQgBAbgWAAg");
	this.shape_9.setTransform(139.5,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABCD6QgOAAgFgEQgFgEgFgPIg9i7QgEgLgEAAQgFAAAAAPIAACtQAAAhgXAAIgnAAQgbAAAAgiIAAmvQAAgWAHgHQAFgFAOAAIAjAAQANAAAGAEQAGAFAEAOIA9C7QAEAKAFAAQAEAAAAgOIAAisQAAgiAWAAIAoAAQAbAAAAAiIAAGvQAAAWgHAHQgFAFgPAAg");
	this.shape_10.setTransform(113.4,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhhDXQgWggAAhLIAAlHQgBgRAFgIQAGgIAQAAIAoAAQAQAAADAJQAEAGAAAQIAAFUQAAAnAeAAQAgAAABgoIAAlTQAAgTADgFQAFgHAPAAIAqAAQARAAADALQACAHAAANIAAFFQABBIgWAhQgcAshHAAQhGAAgbgmg");
	this.shape_11.setTransform(85.1,25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABCD6QgPAAgEgEQgFgEgFgPIg9i7QgEgLgFAAQgEAAAAAPIAACtQAAAhgXAAIgnAAQgbAAAAgiIAAmvQAAgWAHgHQAFgFAPAAIAiAAQANAAAGAEQAFAEAFAPIA9C7QAEAKAFAAQAEAAAAgOIAAisQAAgiAXAAIAnAAQAbAAAAAiIAAGvQAAAWgHAHQgFAFgPAAg");
	this.shape_12.setTransform(42.6,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgBgOIgPhqQgBgLgLAAIgeAAQgMAAgBALIgMBsQgCAMgMAAIhFAAQgOAAABgMIA+nKQADgdAcAAIBVAAQAaAAADAeIBCHJQABAMgNAAgAgGiUIgNCpQgBAJALAAIARAAQALAAgBgJIgOiqQgCgLgCAAQgFAAgBAMg");
	this.shape_13.setTransform(13.9,25.4);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.4,383.6,50.7);


(lib.lib_mc_000024 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABiB5IAAgMIhBAAIAAAMIgUAAIAAh5IBpAAIAAB5gAAhBcIBBAAIAAgdIhBAAgAAhAuIBBAAIAAgeIhBAAgAghB5IAAgMIhBAAIAAAMIgTAAIAAh5IBoAAIAAB5gAhiBcIBBAAIAAgdIhBAAgAhiAuIBBAAIAAgeIhBAAgAhdgUIAAhlIC3AAIAABlgAhIgmICOAAIAAgXIiOAAgAhIhPICOAAIAAgYIiOAAg");
	this.shape.setTransform(238.1,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcB+IgiAAIgBgJIgDgOIAjABQAWABgBgSIAAjVIATAAIAAArQAOAmAMAUQAcgZAeghIARAPQghAhggAbQAhAzA1AlIgSATQhLg+gdhHIAAB6QACAnglAAIgCgBgAiCBZQA8g+AQhEIhGAAIAAgUIBcAAIAAAUQgXBUg7A8g");
	this.shape_1.setTransform(210.1,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAeACABgfQADg1ABhWIhHAAIgGAMQgNAbgGAHQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQAAAvg1gBIgcABgAh4B/IAAjSIAbAAQALgYAFgTIAYAGIgSAlIA2AAIAADPIgVAAIAAgUIg8AAIAAAXgAhiBWIA8AAIAAhCIg8AAgAhiAAIA8AAIAAg/Ig8AAgAAIgKIAQgMQAhAmAOAUIgTAOQgRgZgbgjg");
	this.shape_2.setTransform(182.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBzIgCgQIgBgFIAaABQAcACgBglQAAgTgCgMQgnAygtAYIgOgOQA7ggAjgzQgDgLgEgLIgZAWIAFAIIAFAHIgNAKIgJgNQgGAHgRALQgFgKgHgFQADgBAEgDQAGgDANgLIgLgQIAOgJQAFAJAGAHQANgMALgOIgMgUQgUAPgVALIgMgPQAvgYAhggIhEAAIAAgRICZAAIAAARIg8AAQgRASgUAQQAPAVAJAYQAfgYAagbIAOAQQgPAPgVAPQAIBBAqAkQgFAGgMAIQgoglgHhDQgFAFgFADIgFADQAGAaABAkQACA2gwAAgAiDBCIAegGIAIgDIAAhIIggAAIAAgTIAgAAIAAg7IgiAAIAAgSIBYAAIAAASIgjAAIAAA7IAeAAIAAATIgeAAIAABDIAigKIACAUIg2AQIgiAKg");
	this.shape_3.setTransform(154,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUB/IAAibQgEAKgHAMIgJgNIAAgDIAABxQAAAbgbACIgYAAIgEgTIAXABQAOABAAgRIAAi4IhSAAIAABiQABBVgRApIgOgRQAOgcgBhPIAAh1IB1AAIAABcQAUgnAThAIARADQgHAdgIASIBYAAIAAASIgoAAIAAAoIAiAAIAAASIgiAAIAAAlIAiAAIAAASIgiAAIAAAoIAqAAIAAAPIheAAIAAARgAAlBfIAlAAIAAgoIglAAgAAlAlIAlAAIAAglIglAAgAAlgSIAlAAIAAgoIglAAgAhXBQIAAhFIA4AAIAABFgAhJBBIAbAAIAAgmIgbAAgAhfgIIAAgQIAcAAIAAgZIgYAAIAAgRIAYAAIAAgZIARAAIAAAZIAXAAIAAARIgXAAIAAAZIAcAAIAAAQgABAh1IAQgJQAPAZAFAMIgRAJQgMgcgHgJg");
	this.shape_4.setTransform(126,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrB7IAAgSIBJAAIAAhAIg3AAIAAgSICFAAIAAASIg5AAIAABAIBLAAIAAASgAiCBeQAXgEA4gIIALgCIAAATQgxAFgjAIgAh/AlQAKgGAHgKQAQgUAKgOQgSAAgWACIgHgSQAGgEAKgOQAWgkASgnIAVAIIg0BVIAhgCIAVghIASAJQgYAlgoA1IA5gFIgDASQgpACgkAHgAAtgdQggAZgvARIgMgQQAugSAbgVQAbgUAVgbIhlAAIAAgTIB+AAIAAATQgSAbgYATIBKApIgOAQQgegTgrgYg");
	this.shape_5.setTransform(98,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgICAIAAh4QgpBDhDAlQgIgKgHgGQBGgjAmg9IhnAAIAAgQIB2AAIAAguIhnAAIAAgTIBnAAIAAguIASAAIAAAuIBnAAIAAATIhnAAIAAAuIB1AAIAAAQIhoAAQAmA5BHAhQgKAJgEAIQhFgjgnhAIAAB4g");
	this.shape_6.setTransform(70,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDB2IgLgMQBMgfgHhFIAAgvIATAAIAAAvQAAAWgGATIA/A4IgNAPQgSgSgggdIgHgGQgMAdgyAcgAhIB2IAAhDQgRAdgfAbIgKgRQAggWAUgkIgxAAIAAgQIA3AAIAAgZIgtAAIAAhwIBrAAIAABwIgsAAIAAAZIA1AAIAAAQIg1AAIAAAWIAJgJIApAhIgNALIglgeIAAA7gAg2gbIAbAAIAAgfIgbAAgAhjgbIAbAAIAAgfIgbAAgAg2hJIAbAAIAAgfIgbAAgAhjhJIAbAAIAAgfIgbAAgABnA9IAAhyIhOAAIAAByIgSAAIAAiEIAmAAIAGgfIgyAAIAAgTICBAAIAAATIg8AAIgGAfIA6AAIAACEg");
	this.shape_7.setTransform(41.9,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiCALIAAgVIEFAAIAAAVg");
	this.shape_8.setTransform(14,12.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0.1,249.1,26.3);


(lib.lib_mc_000023 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000011();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132,145);


(lib.lib_mc_000022 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000010();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,110);


(lib.lib_mc_000021 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000009();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,92);


(lib.lib_mc_000020 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000008();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,127);


(lib.lib_mc_000019 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000007();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,141);


(lib.lib_mc_000018 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000006();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,141);


(lib.lib_mc_000017 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000005();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,184,193);


(lib.lib_mc_000016 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000004();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000014 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdD6QgUAAgEgKQgDgHAAgPIAAmxQAAgiAYAAIB/AAQA6AAARA5QAPAtAACTQAABxgIAwQgHA1gUATQgSARgqAAgAgdicQgFADAAAPIAAEXQAAANAEAEQAFADASAAQATAAAGgHQAJgIACggQACgZAAhTQAAhZgBgaQgCgigKgKQgFgHgWAAQgPAAgFAEg");
	this.shape.setTransform(292.8,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgsQAZhHBQAAQBRAAAYBHQAPAuAACKQAACIgPAvQgYBIhRAAQhQAAgZhIgAgbiBQgEAVAABsQAABpAEAYQAFAgAWAAQAXAAAFggQAFgaAAhnQAAhngFgaQgGgegWAAQgWAAgFAeg");
	this.shape_1.setTransform(265.3,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpC3QgPgvAAiIQAAiKAPguQAZhHBQAAQBRAAAZBHQAPAuAACKQAACIgPAvQgZBIhRAAQhQAAgZhIgAgbiBQgEAVAABsQAABpAEAYQAFAgAWAAQAXAAAFggQAFgaAAhnQAAhngFgaQgFgegXAAQgWAAgFAeg");
	this.shape_2.setTransform(238.6,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvD6QgNAAgEgFQgEgEgBgOIgVinQgCgJgCAAQgBAAgCAIIgpCwQgEAPgRAAIgwAAQgQAAgDgTIhInOQAAgSAUAAIAzAAQAOAAAEAWIAkDyQABAKAFAAQADAAADgKIAiiOIgKhfQgEgbAWAAIAzAAQAPAAAEAWIAdDxQABALAFAAQAFAAAAgLIAfjzQADgUAPAAIA2AAQARAAAAAQQAAAHgCAEIhNHCQgDAWgTAAg");
	this.shape_3.setTransform(204.5,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvD6QgQAAgEgWIgdi0QAAgGgJAAIgKAAQgIAAAAAGIAACqQAAAggaAAIgoAAQgSAAgDgLQgDgIAAgNIAAmxQAAgiAaAAIBpAAQBnAAAACbQAABOgoAgIAtDfQAAALgOAAgAgdiWIAABbQAAAOAHAAIAXAAQAbAAAAg8QAAg3gZAAIgXAAQgJAAAAAKg");
	this.shape_4.setTransform(157.1,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgLgLAAIgeAAQgKAAgCALIgMBsQgBAMgNAAIhFAAQgOAAABgMIA9nKQAEgdAcAAIBVAAQAZAAAEAeIBCHJQABAMgNAAgAgGiUIgNCpQgCAJALAAIARAAQAMAAgBgJIgOiqQgBgLgEAAQgEAAgBAMg");
	this.shape_5.setTransform(129.2,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhED6QgPAAgFgIQgEgHAAgSIAAmxQAAghAYAAIApAAQAPAAAFAKQAEAGgBARIAAFqQAAAPALAAIA9AAQAZAAAAAgIAAAZQAAAggcAAg");
	this.shape_6.setTransform(105.7,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhpC3QgOgtAAiKQAAiMAOgsQAZhHBQAAQBRAAAYBHQAPAuAACKQAACIgPAvQgYBIhRAAQhQAAgZhIgAgbiBQgEAVAABsQAABpAEAYQAFAgAWAAQAXAAAFggQAFgaAAhnQAAhngFgaQgGgegWAAQgWAAgFAeg");
	this.shape_7.setTransform(81,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhcD6QgTAAgEgMQgBgGAAgOIAAmwQAAgjAYAAIByAAQBfAAAACgQAACZhTAAIg+AAIAACaQAAAUgFAGQgFAGgOAAgAgciSIAABvQAAAMAMAAIAXAAQARAAAEgbQABgJAAgeQAAgtgGgNQgFgNgOAAIgTAAQgNAAAAAOg");
	this.shape_8.setTransform(55.6,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2D6QgLAAgCgOIgOhqQgCgLgLAAIgdAAQgMAAgCALIgMBsQAAAMgNAAIhFAAQgOAAABgMIA9nKQAEgdAbAAIBWAAQAZAAAEAeIBCHJQABAMgNAAgAgHiUIgMCpQgBAJAKAAIARAAQAMAAgBgJIgPiqQgBgLgCAAQgFAAgCAMg");
	this.shape_9.setTransform(13.7,25.4);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,305,51.2);


(lib.lib_mc_000013 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKB+IAAiqQgpBWg/A3IgLgOIgFgHQA7grAqhPIhaAAIAAgVIBtAAIAAg6IAUAAIAAA6IBuAAIAAAVIhaAAQAjBIBCAwIgRATQhFg3gjhSIAACqg");
	this.shape.setTransform(182,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiDBqQARgZAFgbQAHgaAAg0IAAhhIDmAAIAAATIhjAAIgOAcIBcAAIAABoIhEAAIAAA2QABAhghgBIgfABIgEgXIAgABQARABgBgPIAAgzIhIAAIAAhoIAwAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAGgYIhWAAIAABJQAAA4gHAeQgGAegWAigAgiAMIB5AAIAAgZIh5AAgAgigeIB5AAIAAgaIh5AAgABHBAIgMgLIAPgNIAUATIAmAiIgQAOQgOgPgfgcgAhUBeQAegYAbgeIAQALQgcAhgeAXg");
	this.shape_1.setTransform(154,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB/IgEgXIAuABQAeACABgfQADg1ABhWIhHAAIgGAMQgOAbgFAHQgDgEgNgIQAVgmATg7IAWAGIgOAlIBVAAIgECjQgBAvg0gBIgcABgAh4B/IAAjSIAbAAQAKgYAHgTIAWAGIgRAlIA1AAIAADPIgUAAIAAgUIg9AAIAAAXgAhjBWIA9AAIAAhCIg9AAgAhjAAIA9AAIAAg/Ig9AAgAAIgKIAQgMQAhAmAOAUIgUAOQgQgZgbgjg");
	this.shape_2.setTransform(126.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABQB8IhEAAQgoABAAgnIAAhWIgTAIIgDgSIAWgJIAAhJIAWAAIAABAIAmgOIAAhRIAUAAIAABJIBBgZIgDBQQAAAsghgEQgFABgPAAIgEgWIAWABQAOABABgWQACgRgBgjIgrARIAABtIgUAAIAAhlIgmAQIAABZQgBAYAXgCIA7AAQAdABACgUQAFgXABgQIAVAHQgDAagEARQgEAcgnAAIgDAAgAiEBWQAMgDAPgFIAKgEIAAhoIgiAAIAAgSIAiAAIAAhKIAUAAIAABKIAfAAIAAASIgfAAIAABiIAjgMIABATQguASgoAMg");
	this.shape_3.setTransform(98.1,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHB8IgKgOQAngWAYgYQgcgggNgtQgFBVgvA1IgPgQQAggiAJgpQAKglgBhbIgXAAIAAgTICCAAIAAAUIgaA1IAuAAIAAATQgSA1gZAgQAVAUApAWQgEACgGAKIgEAHQgrgdgRgRQgbAagkAXgAAGg6QAWBHAfAjQAUgZAOgsIguAAIAAgUIAZg1IhBAAgAhZB/IAAiGQgKAdgVAlIgNgUQAigxAJguIgiAAIAAgRIAjAAIAAg2IASAAIAAA2IAiAAIAAARIgiAAIAAAqIAJgJIAiAeIgPAOQgMgNgQgOIAACFg");
	this.shape_4.setTransform(69.9,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBuQBDgmAJgxIg2AAIAAgUIA6AAQADgfAAgiIgtAAIAAgTIAtAAIAAguIAWAAQAAAlgBAJIBBAAIAABUIAcAAIAAAUIhaAAQAUA6BAAZIgQATQhAghgSg6QgOA2hAApgAAgADIAyAAIAAhBIgtAAQgBAngEAagAiBBDQANgGAZgEIAAhkIgjAAIAAgTIAjAAIAAhBIAUAAIAABBIAjAAIAAATIgjAAIAABeIAlgLIACAVIhbAag");
	this.shape_5.setTransform(41.9,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCALIAAgVIEFAAIAAAVg");
	this.shape_6.setTransform(14,12.5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0.3,194.3,26.1);


(lib.lib_mc_000012 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000003();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000011 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000002();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000008 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	this.shape.setTransform(320,568);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000003 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.lib_img_000001();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,125);


(lib.lib_mc_000079 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.lib_mc_000080();
	this.instance.setTransform(406.5,705,1,1,0,0,0,124.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.539},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0},0).wait(17));

	// 图层 1
	this.instance_1 = new lib.lib_mc_000083();
	this.instance_1.setTransform(524,719.5,1,1,0,0,0,524,719.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1048,1439);


(lib.lib_mc_000078 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// awaken this extraordinary masterpiece 
	this.instance = new lib.lib_mc_000082();
	this.instance.setTransform(433.1,985.1,1,1,0,0,0,291.1,56.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({y:867.1,alpha:1},48,cjs.Ease.get(1)).to({y:847.1},62).to({y:621.1,alpha:0},38,cjs.Ease.get(1)).wait(19));

	// 唤醒这台惊世之作
	this.instance_1 = new lib.lib_mc_000081();
	this.instance_1.setTransform(432.7,890,1,1,0,0,0,110.7,13);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({y:772,alpha:1},52,cjs.Ease.get(1)).to({y:754},64).to({y:526,alpha:0},38,cjs.Ease.get(1)).wait(25));

	// 图层 14
	this.instance_2 = new lib.lib_mc_000079("synched",0,false);
	this.instance_2.setTransform(634.1,719.5,1,1,0,0,0,524,719.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:560.7,startPosition:40},23).to({x:524,startPosition:60},37).wait(75).to({startPosition:71},0).to({x:404,alpha:0,startPosition:110},39).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.1,0,1048,1439);


(lib.lib_mc_000077 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 21
	this.instance = new lib.lib_mc_000074();
	this.instance.setTransform(157.5,519,1,1,0,0,0,157.5,228);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},22).wait(12).to({alpha:0},17).wait(1));

	// 图层 20
	this.instance_1 = new lib.lib_mc_000073();
	this.instance_1.setTransform(445.5,634,1,1,0,0,0,194.5,291);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({alpha:1},25).wait(13).to({alpha:0},20).to({_off:true},2).wait(19));

	// 图层 19
	this.instance_2 = new lib.lib_mc_000072();
	this.instance_2.setTransform(320,462.5,1,1,0,0,0,320,462.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},25).wait(9).to({alpha:0},21).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,925);


(lib.lib_mc_000070 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// God used them  to create the world
	this.instance = new lib.lib_mc_000076();
	this.instance.setTransform(320.5,622.7,1,1,0,0,0,227.5,57.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1).to({y:617.9,alpha:0.082},0).wait(1).to({y:613.4,alpha:0.16},0).wait(1).to({y:609.1,alpha:0.234},0).wait(1).to({y:604.9,alpha:0.305},0).wait(1).to({y:601,alpha:0.375},0).wait(1).to({y:597.3,alpha:0.438},0).wait(1).to({y:593.8,alpha:0.5},0).wait(1).to({y:590.4,alpha:0.555},0).wait(1).to({y:587.3,alpha:0.609},0).wait(1).to({y:584.4,alpha:0.66},0).wait(1).to({y:581.7,alpha:0.707},0).wait(1).to({y:579.1,alpha:0.75},0).wait(1).to({y:576.8,alpha:0.789},0).wait(1).to({y:574.7,alpha:0.828},0).wait(1).to({y:572.8,alpha:0.859},0).wait(1).to({y:571.1,alpha:0.891},0).wait(1).to({y:569.6,alpha:0.914},0).wait(1).to({y:568.3,alpha:0.938},0).wait(1).to({y:567.1,alpha:0.957},0).wait(1).to({y:566.2,alpha:0.973},0).wait(1).to({y:565.5,alpha:0.984},0).wait(1).to({y:565,alpha:0.992},0).wait(1).to({y:564.7,alpha:1},0).wait(1).to({y:564.6},0).to({y:556.6},47).to({x:321.6,y:499.8,alpha:0},20).wait(42));

	// 诸神用其创造世界
	this.instance_1 = new lib.lib_mc_000075();
	this.instance_1.setTransform(320,411.3,1,1,0,0,0,111,13.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(1).to({y:416.2,alpha:0.082},0).wait(1).to({y:420.9,alpha:0.16},0).wait(1).to({y:425.4,alpha:0.234},0).wait(1).to({y:429.7,alpha:0.305},0).wait(1).to({y:433.7,alpha:0.375},0).wait(1).to({y:437.6,alpha:0.438},0).wait(1).to({y:441.2,alpha:0.5},0).wait(1).to({y:444.7,alpha:0.555},0).wait(1).to({y:447.9,alpha:0.609},0).wait(1).to({y:450.9,alpha:0.66},0).wait(1).to({y:453.7,alpha:0.707},0).wait(1).to({y:456.3,alpha:0.75},0).wait(1).to({y:458.7,alpha:0.789},0).wait(1).to({y:460.9,alpha:0.828},0).wait(1).to({y:462.9,alpha:0.859},0).wait(1).to({y:464.7,alpha:0.891},0).wait(1).to({y:466.2,alpha:0.914},0).wait(1).to({y:467.6,alpha:0.938},0).wait(1).to({y:468.7,alpha:0.957},0).wait(1).to({y:469.7,alpha:0.973},0).wait(1).to({y:470.4,alpha:0.984},0).wait(1).to({y:470.9,alpha:0.992},0).wait(1).to({y:471.2,alpha:1},0).wait(1).to({y:471.3},0).to({y:479.3},47).to({y:499.3,alpha:0},20).wait(42));

	// 图层 21
	this.instance_2 = new lib.lib_mc_000077("synched",0);
	this.instance_2.setTransform(320,673.5,1,1,0,0,0,320,462.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({startPosition:0,_off:false},0).wait(131));

	// 图层 15
	this.instance_3 = new lib.lib_mc_000071();
	this.instance_3.setTransform(320,568,1,1,0,0,0,320,568);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},18).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000053 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_53 = new cjs.Graphics().p("EgmbAcNMAAAg4ZMBM3AAAMAAAA4Zg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_graphics_53,x:530.1,y:619.7}).wait(197));

	// VOLVO IS Ready TO TELL  A SCANDINAVIAN MYTH  
	this.instance = new lib.lib_mc_000057();
	this.instance.setTransform(526,370.1,1,1,0,0,0,229,56.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).wait(42).to({_off:false},0).wait(1).to({y:376.1},0).wait(1).to({y:382},0).wait(1).to({y:387.8},0).wait(1).to({y:393.4},0).wait(1).to({y:399},0).wait(1).to({y:404.3},0).wait(1).to({y:409.6},0).wait(1).to({y:414.7},0).wait(1).to({y:419.7},0).wait(1).to({y:424.6},0).wait(1).to({y:429.4},0).wait(1).to({y:434},0).wait(1).to({y:438.5},0).wait(1).to({y:442.9},0).wait(1).to({y:447.1},0).wait(1).to({y:451.2},0).wait(1).to({y:455.2},0).wait(1).to({y:459.1},0).wait(1).to({y:462.8},0).wait(1).to({y:466.4},0).wait(1).to({y:469.9},0).wait(1).to({y:473.3},0).wait(1).to({y:476.5},0).wait(1).to({y:479.6},0).wait(1).to({y:482.6},0).wait(1).to({y:485.5},0).wait(1).to({y:488.2},0).wait(1).to({y:490.8},0).wait(1).to({y:493.3},0).wait(1).to({y:495.6},0).wait(1).to({y:497.8},0).wait(1).to({y:499.9},0).wait(1).to({y:501.9},0).wait(1).to({y:503.7},0).wait(1).to({y:505.4},0).wait(1).to({y:507},0).wait(1).to({y:508.5},0).wait(1).to({y:509.8},0).wait(1).to({y:511},0).wait(1).to({y:512.1},0).wait(1).to({y:513},0).wait(1).to({y:513.8},0).wait(1).to({y:514.5},0).wait(1).to({y:515.1},0).wait(1).to({y:515.6},0).wait(1).to({y:515.9},0).wait(1).to({y:516.1},0).wait(1).to({y:528.1},95).to({y:576.1,alpha:0},27).wait(27));

	// 图层 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_53 = new cjs.Graphics().p("EgmbAPKIAA+TMBM3AAAIAAeTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_1_graphics_53,x:530.1,y:345.1}).wait(197));

	// 沃尔沃将全新演绎属于自己的北欧神话
	this.instance_1 = new lib.lib_mc_000056();
	this.instance_1.setTransform(526.8,499,1,1,0,0,0,237.8,13);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).wait(42).to({_off:false},0).wait(1).to({y:495.7},0).wait(1).to({y:492.5},0).wait(1).to({y:489.3},0).wait(1).to({y:486.2},0).wait(1).to({y:483.2},0).wait(1).to({y:480.3},0).wait(1).to({y:477.4},0).wait(1).to({y:474.6},0).wait(1).to({y:471.8},0).wait(1).to({y:469.2},0).wait(1).to({y:466.6},0).wait(1).to({y:464},0).wait(1).to({y:461.6},0).wait(1).to({y:459.2},0).wait(1).to({y:456.8},0).wait(1).to({y:454.6},0).wait(1).to({y:452.4},0).wait(1).to({y:450.3},0).wait(1).to({y:448.2},0).wait(1).to({y:446.2},0).wait(1).to({y:444.3},0).wait(1).to({y:442.5},0).wait(1).to({y:440.7},0).wait(1).to({y:439},0).wait(1).to({y:437.4},0).wait(1).to({y:435.8},0).wait(1).to({y:434.3},0).wait(1).to({y:432.9},0).wait(1).to({y:431.6},0).wait(1).to({y:430.3},0).wait(1).to({y:429.1},0).wait(1).to({y:427.9},0).wait(1).to({y:426.8},0).wait(1).to({y:425.8},0).wait(1).to({y:424.9},0).wait(1).to({y:424},0).wait(1).to({y:423.2},0).wait(1).to({y:422.5},0).wait(1).to({y:421.8},0).wait(1).to({y:421.2},0).wait(1).to({y:420.7},0).wait(1).to({y:420.3},0).wait(1).to({y:419.9},0).wait(1).to({y:419.6},0).wait(1).to({y:419.3},0).wait(1).to({y:419.2},0).wait(1).to({y:419.1},0).wait(1).to({y:419},0).to({y:407},95).to({y:377,alpha:0},27).wait(27));

	// 图层 37
	this.instance_2 = new lib.lib_mc_000055();
	this.instance_2.setTransform(1267.2,260.5,1,1,0,0,0,463,260.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(1).to({x:1234.7},0).wait(1).to({x:1202.9},0).wait(1).to({x:1171.8},0).wait(1).to({x:1141.3},0).wait(1).to({x:1111.6},0).wait(1).to({x:1082.5},0).wait(1).to({x:1054.1},0).wait(1).to({x:1026.4},0).wait(1).to({x:999.4},0).wait(1).to({x:973},0).wait(1).to({x:947.4},0).wait(1).to({x:922.4},0).wait(1).to({x:898.1},0).wait(1).to({x:874.5},0).wait(1).to({x:851.6},0).wait(1).to({x:829.3},0).wait(1).to({x:807.8},0).wait(1).to({x:786.9},0).wait(1).to({x:766.7},0).wait(1).to({x:747.2},0).wait(1).to({x:728.4},0).wait(1).to({x:710.3},0).wait(1).to({x:692.8},0).wait(1).to({x:676.1},0).wait(1).to({x:660},0).wait(1).to({x:644.6},0).wait(1).to({x:629.9},0).wait(1).to({x:615.9},0).wait(1).to({x:602.5},0).wait(1).to({x:589.9},0).wait(1).to({x:577.9},0).wait(1).to({x:566.6},0).wait(1).to({x:556},0).wait(1).to({x:546.1},0).wait(1).to({x:536.8},0).wait(1).to({x:528.3},0).wait(1).to({x:520.4},0).wait(1).to({x:513.2},0).wait(1).to({x:506.7},0).wait(1).to({x:500.9},0).wait(1).to({x:495.8},0).wait(1).to({x:491.3},0).wait(1).to({x:487.6},0).wait(1).to({x:484.5},0).wait(1).to({x:482.1},0).wait(1).to({x:480.4},0).wait(1).to({x:479.4},0).wait(1).to({x:479},0).to({x:423},141).to({x:139,alpha:0},18,cjs.Ease.get(-0.99)).wait(32));

	// 图层 39
	this.instance_3 = new lib.lib_mc_000054();
	this.instance_3.setTransform(526,507.3,1,1,0,0,0,320,463.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({y:523.7,alpha:0.039},0).wait(1).to({y:539.8,alpha:0.078},0).wait(1).to({y:555.5,alpha:0.113},0).wait(1).to({y:571,alpha:0.152},0).wait(1).to({y:586.1,alpha:0.188},0).wait(1).to({y:600.8,alpha:0.223},0).wait(1).to({y:615.3,alpha:0.254},0).wait(1).to({y:629.4,alpha:0.289},0).wait(1).to({y:643.2,alpha:0.32},0).wait(1).to({y:656.7,alpha:0.355},0).wait(1).to({y:669.8,alpha:0.387},0).wait(1).to({y:682.6,alpha:0.414},0).wait(1).to({y:695.1,alpha:0.445},0).wait(1).to({y:707.3,alpha:0.473},0).wait(1).to({y:719.2,alpha:0.5},0).wait(1).to({y:730.7,alpha:0.527},0).wait(1).to({y:741.9,alpha:0.555},0).wait(1).to({y:752.8,alpha:0.582},0).wait(1).to({y:763.3,alpha:0.605},0).wait(1).to({y:773.5,alpha:0.629},0).wait(1).to({y:783.4,alpha:0.652},0).wait(1).to({y:793,alpha:0.676},0).wait(1).to({y:802.3,alpha:0.699},0).wait(1).to({y:811.2,alpha:0.719},0).wait(1).to({y:819.8,alpha:0.738},0).wait(1).to({y:828.1,alpha:0.758},0).wait(1).to({y:836,alpha:0.777},0).wait(1).to({y:843.7,alpha:0.797},0).wait(1).to({y:851,alpha:0.813},0).wait(1).to({y:857.9,alpha:0.832},0).wait(1).to({y:864.6,alpha:0.848},0).wait(1).to({y:870.9,alpha:0.859},0).wait(1).to({y:876.9,alpha:0.875},0).wait(1).to({y:882.6,alpha:0.891},0).wait(1).to({y:888,alpha:0.902},0).wait(1).to({y:893,alpha:0.914},0).wait(1).to({y:897.7,alpha:0.926},0).wait(1).to({y:902.1,alpha:0.934},0).wait(1).to({y:906.2,alpha:0.945},0).wait(1).to({y:909.9,alpha:0.953},0).wait(1).to({y:913.3,alpha:0.961},0).wait(1).to({y:916.4,alpha:0.969},0).wait(1).to({y:919.1,alpha:0.977},0).wait(1).to({y:921.6,alpha:0.98},0).wait(1).to({y:923.7,alpha:0.984},0).wait(1).to({y:925.5,alpha:0.992},0).wait(1).to({y:926.9},0).wait(1).to({y:928.1,alpha:0.996},0).wait(1).to({y:928.9,alpha:1},0).wait(1).to({y:929.4},0).wait(1).to({y:929.5},0).to({y:983.5},132).to({y:1363.6,alpha:0},18).wait(32));

	// 图层 2
	this.instance_4 = new lib.lib_mc_000008();
	this.instance_4.setTransform(526.1,568,1,1,0,0,0,320,568);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},13).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206.1,0,640,1136);


(lib.lib_mc_000050 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjjCnIhdgZIAFhkIAeAeIAwA3IAgANIADgUIAChEIAeAMIAUAZIAhgCIAAgMIgPgfIAKhEIAPggIAbAjIAKAeIAcAmIgNg3IArgFIAKgPIAFAUIAoAUQgCgKgSgPIAAAAQgLgLgFgSIAAAAIgEgOIASgPIA5gMIA/gcIAWgZIAhgCIBXgVIgWgEIAWgUIArgIIAtAgIALAhQANAlADAXIAAAAQAHAogBAUIAAAAQgBAagMAvIAAAAIgcAfQglApgrASIAAAAQg8AaheAGIAAAAQgmADiIAAIAAAAQhLAAhrgZgAmTB6QAIgtARgUIAAAAIAqBPg");
	mask.setTransform(208.7,421.8);

	// 图层 4
	this.instance = new lib.lib_mc_000069();
	this.instance.setTransform(119,432.9,0.441,1,15,0,0,72,72);
	this.instance.alpha = 0.5;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.44,scaleY:1,rotation:14.8,x:130.4,y:432.6},0).wait(1).to({x:141.4,y:432.2},0).wait(1).to({x:152,y:431.9},0).wait(1).to({x:162.2,y:431.5},0).wait(1).to({x:172.1,y:431.2},0).wait(1).to({x:181.6,y:430.9},0).wait(1).to({x:190.8,y:430.6},0).wait(1).to({x:199.5,y:430.3},0).wait(1).to({x:207.9,y:430.1},0).wait(1).to({x:215.9,y:429.8},0).wait(1).to({x:223.5,y:429.6},0).wait(1).to({x:230.8,y:429.3},0).wait(1).to({x:237.7,y:429.1},0).wait(1).to({x:244.2,y:428.9},0).wait(1).to({x:250.4,y:428.7},0).wait(1).to({x:256.2,y:428.5},0).wait(1).to({x:261.6,y:428.3},0).wait(1).to({x:266.6,y:428.2},0).wait(1).to({x:271.2,y:428},0).wait(1).to({x:275.5,y:427.9},0).wait(1).to({x:279.4,y:427.8},0).wait(1).to({x:283,y:427.7},0).wait(1).to({x:286.1,y:427.6},0).wait(1).to({x:288.9,y:427.5},0).wait(1).to({x:291.4,y:427.4},0).wait(1).to({x:293.4,y:427.3},0).wait(1).to({x:295.1},0).wait(1).to({x:296.4,y:427.2},0).wait(1).to({x:297.3},0).wait(1).to({x:297.9},0).wait(1).to({scaleX:0.44,scaleY:1,rotation:15,x:298,y:427.1},0).wait(9));

	// 图层 1
	this.instance_1 = new lib.lib_img_000020();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Volvo empowers the soul of Scandinavia
	this.instance = new lib.lib_mc_000052();
	this.instance.setTransform(321,569.6,1.204,1.204,0,0,0,265,57.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:321.1,y:569.3,alpha:0.066},0).wait(1).to({regY:57.6,scaleX:1.18,scaleY:1.18,y:568.9,alpha:0.129},0).wait(1).to({regX:264.9,scaleX:1.17,scaleY:1.17,x:320.9,y:568.6,alpha:0.191},0).wait(1).to({regX:265,regY:57.7,scaleX:1.15,scaleY:1.15,x:321,y:568.4,alpha:0.25},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:321.1,y:568.1,alpha:0.305},0).wait(1).to({regX:264.9,regY:57.6,scaleX:1.13,scaleY:1.13,x:321,y:567.7,alpha:0.359},0).wait(1).to({regX:265.1,regY:57.7,scaleX:1.12,scaleY:1.12,x:321.2,y:567.6,alpha:0.414},0).wait(1).to({regX:265,regY:57.6,scaleX:1.11,scaleY:1.11,x:321,y:567.2,alpha:0.461},0).wait(1).to({regX:264.9,regY:57.7,scaleX:1.1,scaleY:1.1,y:567.1,alpha:0.512},0).wait(1).to({regX:265,regY:57.6,scaleX:1.09,scaleY:1.09,y:566.8,alpha:0.555},0).wait(1).to({regY:57.7,scaleX:1.08,scaleY:1.08,x:321.1,y:566.7,alpha:0.598},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:321,y:566.5,alpha:0.641},0).wait(1).to({regY:57.6,scaleX:1.07,scaleY:1.07,x:321.1,y:566.2,alpha:0.68},0).wait(1).to({regY:57.7,scaleX:1.06,scaleY:1.06,y:566.1,alpha:0.715},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:321,y:565.9,alpha:0.75},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:565.8,alpha:0.781},0).wait(1).to({regY:57.6,scaleX:1.04,scaleY:1.04,x:321.1,y:565.6,alpha:0.813},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:321,y:565.4,alpha:0.84},0).wait(1).to({regX:265.1,regY:57.7,scaleX:1.03,scaleY:1.03,x:321.1,alpha:0.867},0).wait(1).to({regX:265,regY:57.6,scaleX:1.02,scaleY:1.02,x:321,y:565.2,alpha:0.891},0).wait(1).to({regY:57.7,scaleX:1.02,scaleY:1.02,y:565.1,alpha:0.91},0).wait(1).to({regY:57.6,scaleX:1.01,scaleY:1.01,x:321.1,y:565,alpha:0.93},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:564.9,alpha:0.945},0).wait(1).to({regY:57.7,scaleX:1.01,scaleY:1.01,x:321,alpha:0.961},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:321.1,y:564.8,alpha:0.973},0).wait(1).to({regY:57.6,scaleX:1,scaleY:1,y:564.7,alpha:0.98},0).wait(1).to({regY:57.7,scaleX:1,scaleY:1,x:321,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({regX:265.1,scaleX:1,scaleY:1,x:321.1,alpha:1},0).wait(1).to({regX:265,regY:57.6,x:321,y:564.6},0).to({scaleX:0.96,scaleY:0.96,y:563.5},50).to({scaleX:0.9,scaleY:0.9,y:562.2,alpha:0},26).wait(8));

	// 赋予斯堪的纳维亚的灵魂
	this.instance_1 = new lib.lib_mc_000051();
	this.instance_1.setTransform(319.7,457.1,1.204,1.204,0,0,0,154,13.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(1).to({regY:13.3,scaleX:1.19,scaleY:1.19,y:458.2,alpha:0.066},0).wait(1).to({regY:13.2,scaleX:1.18,scaleY:1.18,y:458.9,alpha:0.129},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:319.8,y:459.8,alpha:0.191},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:460.6,alpha:0.25},0).wait(1).to({regY:13.3,scaleX:1.14,scaleY:1.14,y:461.5,alpha:0.305},0).wait(1).to({regY:13.2,scaleX:1.13,scaleY:1.13,y:462.2,alpha:0.359},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:463,alpha:0.414},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:463.6,alpha:0.461},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:319.9,y:464.3,alpha:0.512},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:319.8,y:465,alpha:0.555},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:465.6,alpha:0.598},0).wait(1).to({regY:13.3,scaleX:1.07,scaleY:1.07,x:319.9,y:466.2,alpha:0.641},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:466.8,alpha:0.68},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:467.3,alpha:0.715},0).wait(1).to({regY:13.2,scaleX:1.05,scaleY:1.05,y:467.7,alpha:0.75},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:468.2,alpha:0.781},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:468.6,alpha:0.813},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:320,y:469,alpha:0.84},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:319.9,y:469.3,alpha:0.867},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:469.7,alpha:0.891},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:320,y:470,alpha:0.91},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:470.2,alpha:0.93},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:470.5,alpha:0.945},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:470.7,alpha:0.961},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:470.8,alpha:0.973},0).wait(1).to({scaleX:1,scaleY:1,y:471,alpha:0.98},0).wait(1).to({regX:154.1,scaleX:1,scaleY:1,y:471.1,alpha:0.988},0).wait(1).to({regX:154,scaleX:1,scaleY:1,y:471.2,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1).to({regX:153.9,scaleX:0.96,scaleY:0.96,y:474.3},50).to({regX:154,scaleX:0.9,scaleY:0.9,x:320.1,y:478,alpha:0},26).wait(8));

	// 图层 36
	this.instance_2 = new lib.lib_mc_000050();
	this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.01,scaleY:1.01,alpha:1},21).to({scaleX:1.04,scaleY:1.04},49).to({scaleX:1.06,scaleY:1.06},37).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000044 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Volvo, uses them  to create all-new XC 90
	this.instance = new lib.lib_mc_000048();
	this.instance.setTransform(126.4,563.6,1,1,0,0,0,264.4,57.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).wait(6).to({_off:false},0).wait(1).to({x:139.5,alpha:0.051},0).wait(1).to({x:152.3,alpha:0.109},0).wait(1).to({x:164.7,alpha:0.16},0).wait(1).to({x:176.7,alpha:0.199},0).wait(1).to({x:188.4,alpha:0.25},0).wait(1).to({x:199.7,alpha:0.301},0).wait(1).to({x:210.7,alpha:0.34},0).wait(1).to({x:221.3,alpha:0.391},0).wait(1).to({x:231.5,alpha:0.43},0).wait(1).to({x:241.4,alpha:0.469},0).wait(1).to({x:250.9,alpha:0.512},0).wait(1).to({x:260.1,alpha:0.539},0).wait(1).to({x:268.9,alpha:0.578},0).wait(1).to({x:277.3,alpha:0.609},0).wait(1).to({x:285.4,alpha:0.641},0).wait(1).to({x:293.2,alpha:0.68},0).wait(1).to({x:300.5,alpha:0.711},0).wait(1).to({x:307.5,alpha:0.73},0).wait(1).to({x:314.2,alpha:0.762},0).wait(1).to({x:320.5,alpha:0.789},0).wait(1).to({x:326.4,alpha:0.809},0).wait(1).to({x:332,alpha:0.84},0).wait(1).to({x:337.2,alpha:0.859},0).wait(1).to({x:342.1,alpha:0.879},0).wait(1).to({x:346.5,alpha:0.891},0).wait(1).to({x:350.7,alpha:0.91},0).wait(1).to({x:354.5,alpha:0.93},0).wait(1).to({x:357.9,alpha:0.941},0).wait(1).to({x:360.9,alpha:0.949},0).wait(1).to({x:363.6,alpha:0.961},0).wait(1).to({x:366,alpha:0.969},0).wait(1).to({x:367.9,alpha:0.98},0).wait(1).to({x:369.5,alpha:0.988},0).wait(1).to({x:370.8},0).wait(1).to({x:371.7,alpha:1},0).wait(1).to({x:372.2},0).wait(1).to({x:372.4},0).to({x:388.4},54).wait(1).to({x:422.3,alpha:0.949},0).wait(1).to({x:455.2,alpha:0.891},0).wait(1).to({x:487.1,alpha:0.84},0).wait(1).to({x:518.1,alpha:0.789},0).wait(1).to({x:548.1,alpha:0.738},0).wait(1).to({x:577.2,alpha:0.691},0).wait(1).to({x:605.3,alpha:0.641},0).wait(1).to({x:632.5,alpha:0.602},0).wait(1).to({x:658.7,alpha:0.559},0).wait(1).to({x:684,alpha:0.52},0).wait(1).to({x:708.3,alpha:0.48},0).wait(1).to({x:731.6,alpha:0.441},0).wait(1).to({x:754,alpha:0.398},0).wait(1).to({x:775.5,alpha:0.371},0).wait(1).to({x:796,alpha:0.328},0).wait(1).to({x:815.5,alpha:0.301},0).wait(1).to({x:834.1,alpha:0.27},0).wait(1).to({x:851.8,alpha:0.238},0).wait(1).to({x:868.4,alpha:0.211},0).wait(1).to({x:884.2,alpha:0.191},0).wait(1).to({x:899,alpha:0.16},0).wait(1).to({x:912.8,alpha:0.141},0).wait(1).to({x:925.6,alpha:0.121},0).wait(1).to({x:937.6,alpha:0.102},0).wait(1).to({x:948.5,alpha:0.078},0).wait(1).to({x:958.5,alpha:0.07},0).wait(1).to({x:967.6,alpha:0.051},0).wait(1).to({x:975.7,alpha:0.039},0).wait(1).to({x:982.9,alpha:0.031},0).wait(1).to({x:989,alpha:0.02},0).wait(1).to({x:994.3,alpha:0.012},0).wait(1).to({x:998.6,alpha:0},0).wait(16));

	// 今天，沃尔沃用其创造全新XC90
	this.instance_1 = new lib.lib_mc_000047();
	this.instance_1.setTransform(120.6,471.5,1,1,0,0,0,205.6,13.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).wait(1).to({x:133.7,alpha:0.051},0).wait(1).to({x:146.5,alpha:0.109},0).wait(1).to({x:158.9,alpha:0.16},0).wait(1).to({x:170.9,alpha:0.199},0).wait(1).to({x:182.6,alpha:0.25},0).wait(1).to({x:193.9,alpha:0.301},0).wait(1).to({x:204.9,alpha:0.34},0).wait(1).to({x:215.5,alpha:0.391},0).wait(1).to({x:225.7,alpha:0.43},0).wait(1).to({x:235.6,alpha:0.469},0).wait(1).to({x:245.1,alpha:0.512},0).wait(1).to({x:254.3,alpha:0.539},0).wait(1).to({x:263.1,alpha:0.578},0).wait(1).to({x:271.5,alpha:0.609},0).wait(1).to({x:279.6,alpha:0.641},0).wait(1).to({x:287.4,alpha:0.68},0).wait(1).to({x:294.7,alpha:0.711},0).wait(1).to({x:301.7,alpha:0.73},0).wait(1).to({x:308.4,alpha:0.762},0).wait(1).to({x:314.7,alpha:0.789},0).wait(1).to({x:320.6,alpha:0.809},0).wait(1).to({x:326.2,alpha:0.84},0).wait(1).to({x:331.4,alpha:0.859},0).wait(1).to({x:336.3,alpha:0.879},0).wait(1).to({x:340.7,alpha:0.891},0).wait(1).to({x:344.9,alpha:0.91},0).wait(1).to({x:348.7,alpha:0.93},0).wait(1).to({x:352.1,alpha:0.941},0).wait(1).to({x:355.1,alpha:0.949},0).wait(1).to({x:357.8,alpha:0.961},0).wait(1).to({x:360.2,alpha:0.969},0).wait(1).to({x:362.1,alpha:0.98},0).wait(1).to({x:363.7,alpha:0.988},0).wait(1).to({x:365},0).wait(1).to({x:365.9,alpha:1},0).wait(1).to({x:366.4},0).wait(1).to({x:366.6},0).to({x:376.6},57).wait(1).to({x:410.8,alpha:0.949},0).wait(1).to({x:444,alpha:0.891},0).wait(1).to({x:476.3,alpha:0.84},0).wait(1).to({x:507.6,alpha:0.789},0).wait(1).to({x:537.9,alpha:0.738},0).wait(1).to({x:567.2,alpha:0.691},0).wait(1).to({x:595.7,alpha:0.641},0).wait(1).to({x:623.1,alpha:0.602},0).wait(1).to({x:649.6,alpha:0.559},0).wait(1).to({x:675.1,alpha:0.52},0).wait(1).to({x:699.6,alpha:0.48},0).wait(1).to({x:723.2,alpha:0.441},0).wait(1).to({x:745.8,alpha:0.398},0).wait(1).to({x:767.5,alpha:0.371},0).wait(1).to({x:788.2,alpha:0.328},0).wait(1).to({x:807.9,alpha:0.301},0).wait(1).to({x:826.7,alpha:0.27},0).wait(1).to({x:844.5,alpha:0.238},0).wait(1).to({x:861.4,alpha:0.211},0).wait(1).to({x:877.2,alpha:0.191},0).wait(1).to({x:892.2,alpha:0.16},0).wait(1).to({x:906.1,alpha:0.141},0).wait(1).to({x:919.1,alpha:0.121},0).wait(1).to({x:931.2,alpha:0.102},0).wait(1).to({x:942.2,alpha:0.078},0).wait(1).to({x:952.3,alpha:0.07},0).wait(1).to({x:961.5,alpha:0.051},0).wait(1).to({x:969.7,alpha:0.039},0).wait(1).to({x:976.9,alpha:0.031},0).wait(1).to({x:983.1,alpha:0.02},0).wait(1).to({x:988.5,alpha:0.012},0).wait(1).to({x:992.8,alpha:0},0).wait(19));

	// Layer 3
	this.instance_2 = new lib.lib_mc_000046();
	this.instance_2.setTransform(-26.9,702,1,1,0,0,0,144,434);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(1).to({x:-17.7,alpha:0.035},0).wait(1).to({x:-8.7,alpha:0.07},0).wait(1).to({x:0,alpha:0.105},0).wait(1).to({x:8.6,alpha:0.141},0).wait(1).to({x:17.1,alpha:0.172},0).wait(1).to({x:25.4,alpha:0.207},0).wait(1).to({x:33.5,alpha:0.238},0).wait(1).to({x:41.5,alpha:0.27},0).wait(1).to({x:49.3,alpha:0.301},0).wait(1).to({x:57,alpha:0.332},0).wait(1).to({x:64.4,alpha:0.359},0).wait(1).to({x:71.7,alpha:0.391},0).wait(1).to({x:78.9,alpha:0.418},0).wait(1).to({x:85.8,alpha:0.445},0).wait(1).to({x:92.7,alpha:0.473},0).wait(1).to({x:99.3,alpha:0.496},0).wait(1).to({x:105.8,alpha:0.523},0).wait(1).to({x:112.1,alpha:0.547},0).wait(1).to({x:118.2,alpha:0.57},0).wait(1).to({x:124.1,alpha:0.594},0).wait(1).to({x:129.9,alpha:0.617},0).wait(1).to({x:135.6,alpha:0.641},0).wait(1).to({x:141,alpha:0.66},0).wait(1).to({x:146.3,alpha:0.684},0).wait(1).to({x:151.4,alpha:0.703},0).wait(1).to({x:156.4,alpha:0.723},0).wait(1).to({x:161.2,alpha:0.742},0).wait(1).to({x:165.8,alpha:0.758},0).wait(1).to({x:170.3,alpha:0.777},0).wait(1).to({x:174.5,alpha:0.793},0).wait(1).to({x:178.7,alpha:0.809},0).wait(1).to({x:182.6,alpha:0.824},0).wait(1).to({x:186.4,alpha:0.84},0).wait(1).to({x:190,alpha:0.855},0).wait(1).to({x:193.4,alpha:0.867},0).wait(1).to({x:196.7,alpha:0.879},0).wait(1).to({x:199.8,alpha:0.895},0).wait(1).to({x:202.8,alpha:0.906},0).wait(1).to({x:205.5,alpha:0.914},0).wait(1).to({x:208.1,alpha:0.926},0).wait(1).to({x:210.6,alpha:0.934},0).wait(1).to({x:212.8,alpha:0.945},0).wait(1).to({x:214.9,alpha:0.953},0).wait(1).to({x:216.9,alpha:0.961},0).wait(1).to({x:218.6,alpha:0.969},0).wait(1).to({x:220.2,alpha:0.973},0).wait(1).to({x:221.6,alpha:0.98},0).wait(1).to({x:222.9,alpha:0.984},0).wait(1).to({x:224,alpha:0.988},0).wait(1).to({x:224.9,alpha:0.992},0).wait(1).to({x:225.7,alpha:0.996},0).wait(1).to({x:226.3},0).wait(1).to({x:226.7,alpha:1},0).wait(1).to({x:226.9},0).wait(1).to({x:227},0).to({x:243},124).wait(17));

	// Layer 5
	this.instance_3 = new lib.lib_mc_000045();
	this.instance_3.setTransform(413.5,573,1,1,0,0,0,359.5,573);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:410.1,alpha:0.059},0).wait(1).to({x:406.8,alpha:0.129},0).wait(1).to({x:403.6,alpha:0.18},0).wait(1).to({x:400.5,alpha:0.238},0).wait(1).to({x:397.5,alpha:0.301},0).wait(1).to({x:394.6,alpha:0.352},0).wait(1).to({x:391.9,alpha:0.398},0).wait(1).to({x:389.2,alpha:0.449},0).wait(1).to({x:386.7,alpha:0.5},0).wait(1).to({x:384.3,alpha:0.539},0).wait(1).to({x:382,alpha:0.578},0).wait(1).to({x:379.8,alpha:0.629},0).wait(1).to({x:377.7,alpha:0.66},0).wait(1).to({x:375.8,alpha:0.699},0).wait(1).to({x:373.9,alpha:0.73},0).wait(1).to({x:372.2,alpha:0.77},0).wait(1).to({x:370.5,alpha:0.801},0).wait(1).to({x:369,alpha:0.82},0).wait(1).to({x:367.6,alpha:0.852},0).wait(1).to({x:366.3,alpha:0.879},0).wait(1).to({x:365.1,alpha:0.891},0).wait(1).to({x:364.1,alpha:0.91},0).wait(1).to({x:363.1,alpha:0.93},0).wait(1).to({x:362.3,alpha:0.949},0).wait(1).to({x:361.5,alpha:0.961},0).wait(1).to({x:360.9,alpha:0.969},0).wait(1).to({x:360.4,alpha:0.98},0).wait(1).to({x:360,alpha:0.988},0).wait(1).to({x:359.8,alpha:1},0).wait(1).to({x:359.6},0).wait(1).to({x:359.5},0).to({x:351.5},158).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54,0,719,1146);


(lib.lib_mc_000035 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 曲线 2 副本
	this.instance = new lib.lib_mc_000037();
	this.instance.setTransform(312.5,881.5,1,1,0,0,0,412.5,263.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({x:315.6,alpha:0.031},0).wait(1).to({x:318.6,alpha:0.063},0).wait(1).to({x:321.5,alpha:0.09},0).wait(1).to({x:324.5,alpha:0.121},0).wait(1).to({x:327.3,alpha:0.148},0).wait(1).to({x:330.1,alpha:0.176},0).wait(1).to({x:332.9,alpha:0.203},0).wait(1).to({x:335.6,alpha:0.23},0).wait(1).to({x:338.3,alpha:0.258},0).wait(1).to({x:340.9,alpha:0.285},0).wait(1).to({x:343.5,alpha:0.309},0).wait(1).to({x:346,alpha:0.336},0).wait(1).to({x:348.5,alpha:0.359},0).wait(1).to({x:351,alpha:0.383},0).wait(1).to({x:353.4,alpha:0.41},0).wait(1).to({x:355.7,alpha:0.434},0).wait(1).to({x:358,alpha:0.453},0).wait(1).to({x:360.2,alpha:0.477},0).wait(1).to({x:362.4,alpha:0.5},0).wait(1).to({x:364.6,alpha:0.52},0).wait(1).to({x:366.7,alpha:0.543},0).wait(1).to({x:368.8,alpha:0.563},0).wait(1).to({x:370.8,alpha:0.582},0).wait(1).to({x:372.7,alpha:0.602},0).wait(1).to({x:374.7,alpha:0.621},0).wait(1).to({x:376.5,alpha:0.641},0).wait(1).to({x:378.3,alpha:0.66},0).wait(1).to({x:380.1,alpha:0.676},0).wait(1).to({x:381.9,alpha:0.691},0).wait(1).to({x:383.5,alpha:0.711},0).wait(1).to({x:385.2,alpha:0.727},0).wait(1).to({x:386.7,alpha:0.742},0).wait(1).to({x:388.3,alpha:0.758},0).wait(1).to({x:389.8,alpha:0.773},0).wait(1).to({x:391.2,alpha:0.785},0).wait(1).to({x:392.6,alpha:0.801},0).wait(1).to({x:394,alpha:0.813},0).wait(1).to({x:395.3,alpha:0.828},0).wait(1).to({x:396.5,alpha:0.84},0).wait(1).to({x:397.7,alpha:0.852},0).wait(1).to({x:398.9,alpha:0.863},0).wait(1).to({x:400,alpha:0.875},0).wait(1).to({x:401.1,alpha:0.887},0).wait(1).to({x:402.1,alpha:0.895},0).wait(1).to({x:403.1,alpha:0.906},0).wait(1).to({x:404,alpha:0.914},0).wait(1).to({x:404.9,alpha:0.922},0).wait(1).to({x:405.7,alpha:0.93},0).wait(1).to({x:406.5,alpha:0.938},0).wait(1).to({x:407.2,alpha:0.945},0).wait(1).to({x:407.9,alpha:0.953},0).wait(1).to({x:408.5,alpha:0.961},0).wait(1).to({x:409.1,alpha:0.965},0).wait(1).to({x:409.7,alpha:0.973},0).wait(1).to({x:410.2,alpha:0.977},0).wait(1).to({x:410.6,alpha:0.98},0).wait(1).to({x:411,alpha:0.984},0).wait(1).to({x:411.4,alpha:0.988},0).wait(1).to({x:411.7,alpha:0.992},0).wait(1).to({x:411.9},0).wait(1).to({x:412.1,alpha:0.996},0).wait(1).to({x:412.3},0).wait(1).to({x:412.4,alpha:1},0).wait(1).to({x:412.5},0).wait(105));

	//  a smell from Scandinavia
	this.instance_1 = new lib.lib_mc_000039();
	this.instance_1.setTransform(420.1,424.4,1,1,0,0,0,285.1,25.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({y:429,alpha:0.043},0).wait(1).to({y:433.4,alpha:0.082},0).wait(1).to({y:437.8,alpha:0.125},0).wait(1).to({y:442,alpha:0.164},0).wait(1).to({y:446.2,alpha:0.203},0).wait(1).to({y:450.2,alpha:0.238},0).wait(1).to({y:454.2,alpha:0.277},0).wait(1).to({y:458.1,alpha:0.313},0).wait(1).to({y:461.8,alpha:0.348},0).wait(1).to({y:465.5,alpha:0.379},0).wait(1).to({y:469.1,alpha:0.414},0).wait(1).to({y:472.5,alpha:0.445},0).wait(1).to({y:475.9,alpha:0.477},0).wait(1).to({y:479.2,alpha:0.508},0).wait(1).to({y:482.4,alpha:0.535},0).wait(1).to({y:485.4,alpha:0.566},0).wait(1).to({y:488.4,alpha:0.594},0).wait(1).to({y:491.3,alpha:0.621},0).wait(1).to({y:494.1,alpha:0.645},0).wait(1).to({y:496.8,alpha:0.672},0).wait(1).to({y:499.4,alpha:0.695},0).wait(1).to({y:501.9,alpha:0.719},0).wait(1).to({y:504.3,alpha:0.738},0).wait(1).to({y:506.6,alpha:0.762},0).wait(1).to({y:508.8,alpha:0.781},0).wait(1).to({y:510.9,alpha:0.801},0).wait(1).to({y:512.9,alpha:0.82},0).wait(1).to({y:514.8,alpha:0.836},0).wait(1).to({y:516.6,alpha:0.852},0).wait(1).to({y:518.3,alpha:0.871},0).wait(1).to({y:519.9,alpha:0.883},0).wait(1).to({y:521.4,alpha:0.898},0).wait(1).to({y:522.8,alpha:0.91},0).wait(1).to({y:524.2,alpha:0.922},0).wait(1).to({y:525.4,alpha:0.934},0).wait(1).to({y:526.5,alpha:0.945},0).wait(1).to({y:527.5,alpha:0.953},0).wait(1).to({y:528.5,alpha:0.965},0).wait(1).to({y:529.3,alpha:0.973},0).wait(1).to({y:530,alpha:0.977},0).wait(1).to({y:530.7,alpha:0.984},0).wait(1).to({y:531.2,alpha:0.988},0).wait(1).to({y:531.6,alpha:0.992},0).wait(1).to({y:532,alpha:0.996},0).wait(1).to({y:532.2,alpha:1},0).wait(1).to({y:532.4},0).wait(1).to({y:554.4},51).to({y:632.4,alpha:0},29).wait(22));

	// 一丝纯净的北欧气息
	this.instance_2 = new lib.lib_mc_000038();
	this.instance_2.setTransform(412.2,363.1,1,1,0,0,0,126.2,13.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(1).to({y:368.3,alpha:0.047},0).wait(1).to({y:373.4,alpha:0.094},0).wait(1).to({y:378.4,alpha:0.141},0).wait(1).to({y:383.2,alpha:0.188},0).wait(1).to({y:387.9,alpha:0.23},0).wait(1).to({y:392.4,alpha:0.27},0).wait(1).to({y:396.9,alpha:0.313},0).wait(1).to({y:401.2,alpha:0.352},0).wait(1).to({y:405.3,alpha:0.391},0).wait(1).to({y:409.4,alpha:0.43},0).wait(1).to({y:413.3,alpha:0.465},0).wait(1).to({y:417.1,alpha:0.5},0).wait(1).to({y:420.8,alpha:0.535},0).wait(1).to({y:424.3,alpha:0.566},0).wait(1).to({y:427.7,alpha:0.598},0).wait(1).to({y:431,alpha:0.629},0).wait(1).to({y:434.1,alpha:0.656},0).wait(1).to({y:437.1,alpha:0.684},0).wait(1).to({y:440,alpha:0.711},0).wait(1).to({y:442.8,alpha:0.738},0).wait(1).to({y:445.4,alpha:0.762},0).wait(1).to({y:447.9,alpha:0.785},0).wait(1).to({y:450.3,alpha:0.809},0).wait(1).to({y:452.6,alpha:0.828},0).wait(1).to({y:454.7,alpha:0.848},0).wait(1).to({y:456.7,alpha:0.867},0).wait(1).to({y:458.5,alpha:0.883},0).wait(1).to({y:460.3,alpha:0.898},0).wait(1).to({y:461.9,alpha:0.914},0).wait(1).to({y:463.4,alpha:0.93},0).wait(1).to({y:464.7,alpha:0.941},0).wait(1).to({y:465.9,alpha:0.953},0).wait(1).to({y:467,alpha:0.961},0).wait(1).to({y:468,alpha:0.973},0).wait(1).to({y:468.8,alpha:0.98},0).wait(1).to({y:469.5,alpha:0.984},0).wait(1).to({y:470.1,alpha:0.992},0).wait(1).to({y:470.5,alpha:0.996},0).wait(1).to({y:470.9},0).wait(1).to({y:471.1,alpha:1},0).wait(1).to({y:493.1},52).to({y:571.1,alpha:0},29).wait(11));

	// 曲线 2
	this.instance_3 = new lib.lib_mc_000036();
	this.instance_3.setTransform(463.6,567.5,1,1,0,0,0,356.5,567.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:426,alpha:1},16).to({x:379.5},49).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(107.1,0,713,1135);


(lib.lib_mc_000031 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// a sound from heaven
	this.instance = new lib.lib_mc_000034();
	this.instance.setTransform(320.1,640.5,1,1,0,0,0,235.1,25.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).wait(1).to({_off:false},0).wait(1).to({y:636.3,alpha:0.039},0).wait(1).to({y:632.2,alpha:0.078},0).wait(1).to({y:628.1,alpha:0.113},0).wait(1).to({y:624.2,alpha:0.152},0).wait(1).to({y:620.3,alpha:0.188},0).wait(1).to({y:616.5,alpha:0.223},0).wait(1).to({y:612.9,alpha:0.254},0).wait(1).to({y:609.2,alpha:0.289},0).wait(1).to({y:605.7,alpha:0.32},0).wait(1).to({y:602.3,alpha:0.355},0).wait(1).to({y:598.9,alpha:0.387},0).wait(1).to({y:595.6,alpha:0.414},0).wait(1).to({y:592.4,alpha:0.445},0).wait(1).to({y:589.3,alpha:0.473},0).wait(1).to({y:586.3,alpha:0.5},0).wait(1).to({y:583.3,alpha:0.527},0).wait(1).to({y:580.4,alpha:0.555},0).wait(1).to({y:577.7,alpha:0.582},0).wait(1).to({y:575,alpha:0.605},0).wait(1).to({y:572.3,alpha:0.629},0).wait(1).to({y:569.8,alpha:0.652},0).wait(1).to({y:567.4,alpha:0.676},0).wait(1).to({y:565,alpha:0.699},0).wait(1).to({y:562.7,alpha:0.719},0).wait(1).to({y:560.5,alpha:0.738},0).wait(1).to({y:558.4,alpha:0.758},0).wait(1).to({y:556.4,alpha:0.777},0).wait(1).to({y:554.4,alpha:0.797},0).wait(1).to({y:552.5,alpha:0.813},0).wait(1).to({y:550.7,alpha:0.832},0).wait(1).to({y:549,alpha:0.848},0).wait(1).to({y:547.4,alpha:0.859},0).wait(1).to({y:545.9,alpha:0.875},0).wait(1).to({y:544.4,alpha:0.891},0).wait(1).to({y:543.1,alpha:0.902},0).wait(1).to({y:541.8,alpha:0.914},0).wait(1).to({y:540.6,alpha:0.926},0).wait(1).to({y:539.4,alpha:0.934},0).wait(1).to({y:538.4,alpha:0.945},0).wait(1).to({y:537.5,alpha:0.953},0).wait(1).to({y:536.6,alpha:0.961},0).wait(1).to({y:535.8,alpha:0.969},0).wait(1).to({y:535.1,alpha:0.977},0).wait(1).to({y:534.5,alpha:0.98},0).wait(1).to({y:533.9,alpha:0.984},0).wait(1).to({y:533.5,alpha:0.992},0).wait(1).to({y:533.1},0).wait(1).to({y:532.8,alpha:0.996},0).wait(1).to({y:532.6,alpha:1},0).wait(1).to({y:532.5},0).wait(1).to({y:532.4},0).wait(39).to({y:552.4},23).to({y:402.4,alpha:0},29).wait(55));

	// 一段空灵的天籁之音
	this.instance_1 = new lib.lib_mc_000033();
	this.instance_1.setTransform(319.9,579.3,1,1,0,0,0,125.9,13.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({y:575.1,alpha:0.039},0).wait(1).to({y:571,alpha:0.078},0).wait(1).to({y:566.9,alpha:0.113},0).wait(1).to({y:563,alpha:0.152},0).wait(1).to({y:559.1,alpha:0.188},0).wait(1).to({y:555.3,alpha:0.223},0).wait(1).to({y:551.7,alpha:0.254},0).wait(1).to({y:548,alpha:0.289},0).wait(1).to({y:544.5,alpha:0.32},0).wait(1).to({y:541.1,alpha:0.355},0).wait(1).to({y:537.7,alpha:0.387},0).wait(1).to({y:534.4,alpha:0.414},0).wait(1).to({y:531.2,alpha:0.445},0).wait(1).to({y:528.1,alpha:0.473},0).wait(1).to({y:525.1,alpha:0.5},0).wait(1).to({y:522.1,alpha:0.527},0).wait(1).to({y:519.2,alpha:0.555},0).wait(1).to({y:516.5,alpha:0.582},0).wait(1).to({y:513.8,alpha:0.605},0).wait(1).to({y:511.1,alpha:0.629},0).wait(1).to({y:508.6,alpha:0.652},0).wait(1).to({y:506.2,alpha:0.676},0).wait(1).to({y:503.8,alpha:0.699},0).wait(1).to({y:501.5,alpha:0.719},0).wait(1).to({y:499.3,alpha:0.738},0).wait(1).to({y:497.2,alpha:0.758},0).wait(1).to({y:495.2,alpha:0.777},0).wait(1).to({y:493.2,alpha:0.797},0).wait(1).to({y:491.3,alpha:0.813},0).wait(1).to({y:489.5,alpha:0.832},0).wait(1).to({y:487.8,alpha:0.848},0).wait(1).to({y:486.2,alpha:0.859},0).wait(1).to({y:484.7,alpha:0.875},0).wait(1).to({y:483.2,alpha:0.891},0).wait(1).to({y:481.9,alpha:0.902},0).wait(1).to({y:480.6,alpha:0.914},0).wait(1).to({y:479.4,alpha:0.926},0).wait(1).to({y:478.2,alpha:0.934},0).wait(1).to({y:477.2,alpha:0.945},0).wait(1).to({y:476.3,alpha:0.953},0).wait(1).to({y:475.4,alpha:0.961},0).wait(1).to({y:474.6,alpha:0.969},0).wait(1).to({y:473.9,alpha:0.977},0).wait(1).to({y:473.3,alpha:0.98},0).wait(1).to({y:472.7,alpha:0.984},0).wait(1).to({y:472.3,alpha:0.992},0).wait(1).to({y:471.9},0).wait(1).to({y:471.6,alpha:0.996},0).wait(1).to({y:471.4,alpha:1},0).wait(1).to({y:471.3},0).wait(1).to({y:471.2},0).wait(48).to({y:491.2},20).to({y:341.2,alpha:0},31).wait(56));

	// 图层 35
	this.instance_2 = new lib.lib_mc_000032();
	this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.02,scaleY:1.02,alpha:1},20).to({scaleX:1.05,scaleY:1.05,y:568.1},49).to({scaleX:1.1,scaleY:1.1},115).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// an agile line
	this.instance = new lib.lib_mc_000030();
	this.instance.setTransform(493.1,532.4,1,1,0,0,0,141,25.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(1).to({x:485.9,alpha:0.043},0).wait(1).to({x:478.8,alpha:0.082},0).wait(1).to({x:471.9,alpha:0.125},0).wait(1).to({x:465.1,alpha:0.164},0).wait(1).to({x:458.5,alpha:0.203},0).wait(1).to({x:452,alpha:0.238},0).wait(1).to({x:445.7,alpha:0.277},0).wait(1).to({x:439.5,alpha:0.313},0).wait(1).to({x:433.5,alpha:0.348},0).wait(1).to({x:427.7,alpha:0.379},0).wait(1).to({x:422,alpha:0.414},0).wait(1).to({x:416.5,alpha:0.445},0).wait(1).to({x:411.1,alpha:0.477},0).wait(1).to({x:405.9,alpha:0.508},0).wait(1).to({x:400.8,alpha:0.535},0).wait(1).to({x:395.9,alpha:0.566},0).wait(1).to({x:391.1,alpha:0.594},0).wait(1).to({x:386.5,alpha:0.621},0).wait(1).to({x:382.1,alpha:0.645},0).wait(1).to({x:377.8,alpha:0.672},0).wait(1).to({x:373.7,alpha:0.695},0).wait(1).to({x:369.7,alpha:0.719},0).wait(1).to({x:365.9,alpha:0.738},0).wait(1).to({x:362.2,alpha:0.762},0).wait(1).to({x:358.7,alpha:0.781},0).wait(1).to({x:355.4,alpha:0.801},0).wait(1).to({x:352.2,alpha:0.82},0).wait(1).to({x:349.1,alpha:0.836},0).wait(1).to({x:346.3,alpha:0.852},0).wait(1).to({x:343.5,alpha:0.871},0).wait(1).to({x:341,alpha:0.883},0).wait(1).to({x:338.6,alpha:0.898},0).wait(1).to({x:336.3,alpha:0.91},0).wait(1).to({x:334.2,alpha:0.922},0).wait(1).to({x:332.2,alpha:0.934},0).wait(1).to({x:330.5,alpha:0.945},0).wait(1).to({x:328.8,alpha:0.953},0).wait(1).to({x:327.3,alpha:0.965},0).wait(1).to({x:326,alpha:0.973},0).wait(1).to({x:324.8,alpha:0.977},0).wait(1).to({x:323.8,alpha:0.984},0).wait(1).to({x:323,alpha:0.988},0).wait(1).to({x:322.3,alpha:0.992},0).wait(1).to({x:321.7,alpha:0.996},0).wait(1).to({x:321.3,alpha:1},0).wait(1).to({x:321.1},0).wait(1).to({x:321},0).to({x:301},63).to({x:221,alpha:0},25).wait(16));

	// 一根灵动的线条
	this.instance_1 = new lib.lib_mc_000029();
	this.instance_1.setTransform(128,471.2,1,1,0,0,0,98,13.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).wait(1).to({x:136.1,alpha:0.043},0).wait(1).to({x:144,alpha:0.082},0).wait(1).to({x:151.7,alpha:0.125},0).wait(1).to({x:159.3,alpha:0.164},0).wait(1).to({x:166.7,alpha:0.203},0).wait(1).to({x:173.9,alpha:0.238},0).wait(1).to({x:180.9,alpha:0.277},0).wait(1).to({x:187.8,alpha:0.313},0).wait(1).to({x:194.5,alpha:0.348},0).wait(1).to({x:201,alpha:0.379},0).wait(1).to({x:207.3,alpha:0.414},0).wait(1).to({x:213.5,alpha:0.445},0).wait(1).to({x:219.5,alpha:0.477},0).wait(1).to({x:225.3,alpha:0.508},0).wait(1).to({x:231,alpha:0.535},0).wait(1).to({x:236.5,alpha:0.566},0).wait(1).to({x:241.8,alpha:0.594},0).wait(1).to({x:246.9,alpha:0.621},0).wait(1).to({x:251.9,alpha:0.645},0).wait(1).to({x:256.6,alpha:0.672},0).wait(1).to({x:261.3,alpha:0.695},0).wait(1).to({x:265.7,alpha:0.719},0).wait(1).to({x:269.9,alpha:0.738},0).wait(1).to({x:274,alpha:0.762},0).wait(1).to({x:277.9,alpha:0.781},0).wait(1).to({x:281.7,alpha:0.801},0).wait(1).to({x:285.2,alpha:0.82},0).wait(1).to({x:288.6,alpha:0.836},0).wait(1).to({x:291.9,alpha:0.852},0).wait(1).to({x:294.9,alpha:0.871},0).wait(1).to({x:297.8,alpha:0.883},0).wait(1).to({x:300.5,alpha:0.898},0).wait(1).to({x:303,alpha:0.91},0).wait(1).to({x:305.3,alpha:0.922},0).wait(1).to({x:307.5,alpha:0.934},0).wait(1).to({x:309.5,alpha:0.945},0).wait(1).to({x:311.3,alpha:0.953},0).wait(1).to({x:313,alpha:0.965},0).wait(1).to({x:314.5,alpha:0.973},0).wait(1).to({x:315.8,alpha:0.977},0).wait(1).to({x:316.9,alpha:0.984},0).wait(1).to({x:317.9,alpha:0.988},0).wait(1).to({x:318.6,alpha:0.992},0).wait(1).to({x:319.2,alpha:0.996},0).wait(1).to({x:319.7,alpha:1},0).wait(1).to({x:319.9},0).wait(1).to({x:320},0).to({x:340},63).to({x:440,alpha:0},25).wait(16));

	// 图层 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_21 = new cjs.Graphics().p("EgrrgRhMAyUgdEMAlDBAHMgyUAdFg");
	var mask_graphics_22 = new cjs.Graphics().p("EgvagPuMA5zggrMAlCBAIMg5yAgrg");
	var mask_graphics_23 = new cjs.Graphics().p("EgzCgN+MBBCgkLMAlCBAIMhBBAkLg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg2igMSMBICgnjMAlDBAIMhICAnjg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg56gKqMBOzgqzMAlCBAIMhOyAqzg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg9LgJFMBVUgt8MAlDBAHMhVUAt9g");
	var mask_graphics_27 = new cjs.Graphics().p("EhAUgHkMBbngw/MAlCBAIMhbnAw/g");
	var mask_graphics_28 = new cjs.Graphics().p("EhDWgGHMBhqgz5MAlDBAIMhhqAz5g");
	var mask_graphics_29 = new cjs.Graphics().p("EhGQgEtMBnfg2sMAlCBAHMhneA2tg");
	var mask_graphics_30 = new cjs.Graphics().p("EhJDgDXMBtEg5YMAlCBAHMhtDA5Zg");
	var mask_graphics_31 = new cjs.Graphics().p("EhLtgCFMByZg79MAlCBAIMhyZA79g");
	var mask_graphics_32 = new cjs.Graphics().p("EhORgA2MB3gg+aMAlCBAHMh3fA+bg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQsAATMB8XhAvMAlCBAKMh8XBAvg");
	var mask_graphics_34 = new cjs.Graphics().p("EhTBABaMCBAhC9MAlDBAKMiBABC9g");
	var mask_graphics_35 = new cjs.Graphics().p("EhVNACeMCFYhFFMAlDBAKMiFYBFFg");
	var mask_graphics_36 = new cjs.Graphics().p("EhXSADeMCJihHFMAlDBAKMiJiBHFg");
	var mask_graphics_37 = new cjs.Graphics().p("EhZPAEbMCNdhI+MAlCBAJMiNdBI+g");
	var mask_graphics_38 = new cjs.Graphics().p("EhbFAFTMCRIhKvMAlDBAKMiRIBKvg");
	var mask_graphics_39 = new cjs.Graphics().p("EhczAGIMCUkhMZMAlDBAKMiUkBMZg");
	var mask_graphics_40 = new cjs.Graphics().p("EheaAG6MCXyhN9MAlDBAKMiXyBN9g");
	var mask_graphics_41 = new cjs.Graphics().p("Ehf5AHoMCawhPYMAlCBAJMiavBPYg");
	var mask_graphics_42 = new cjs.Graphics().p("EhhQAISMCdehQsMAlDBAJMideBQsg");
	var mask_graphics_43 = new cjs.Graphics().p("EhigAI4MCf+hR5MAlCBAKMif9BR5g");
	var mask_graphics_44 = new cjs.Graphics().p("EhjoAJbMCiOhS/MAlDBAKMiiOBS/g");
	var mask_graphics_45 = new cjs.Graphics().p("EhkoAJ6MCkPhT9MAlCBAKMikPBT9g");
	var mask_graphics_46 = new cjs.Graphics().p("EhlhAKVMCmBhUzMAlCBAJMimBBU0g");
	var mask_graphics_47 = new cjs.Graphics().p("EhmTAKtMCnkhVjMAlCBAKMinjBVjg");
	var mask_graphics_48 = new cjs.Graphics().p("Ehm8ALBMCo3hWLMAlCBAJMio3BWMg");
	var mask_graphics_49 = new cjs.Graphics().p("EhnfALSMCp8hWsMAlCBAJMip7BWtg");
	var mask_graphics_50 = new cjs.Graphics().p("Ehn5ALfMCqwhXGMAlDBAJMiqwBXGg");
	var mask_graphics_51 = new cjs.Graphics().p("EhoMALoMCrWhXZMAlDBAKMirWBXZg");
	var mask_graphics_52 = new cjs.Graphics().p("EhoYALtMCruhXjMAlDBAJMiruBXkg");
	var mask_graphics_53 = new cjs.Graphics().p("EhobALvMCr1hXnMAlCBAKMir1BXng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_graphics_21,x:-186,y:811.2}).wait(1).to({graphics:mask_graphics_22,x:-162.1,y:799.7}).wait(1).to({graphics:mask_graphics_23,x:-139,y:788.5}).wait(1).to({graphics:mask_graphics_24,x:-116.5,y:777.7}).wait(1).to({graphics:mask_graphics_25,x:-94.9,y:767.3}).wait(1).to({graphics:mask_graphics_26,x:-74,y:757.2}).wait(1).to({graphics:mask_graphics_27,x:-53.9,y:747.5}).wait(1).to({graphics:mask_graphics_28,x:-34.5,y:738.2}).wait(1).to({graphics:mask_graphics_29,x:-15.9,y:729.2}).wait(1).to({graphics:mask_graphics_30,x:1.9,y:720.6}).wait(1).to({graphics:mask_graphics_31,x:18.9,y:712.4}).wait(1).to({graphics:mask_graphics_32,x:35.3,y:704.5}).wait(1).to({graphics:mask_graphics_33,x:50.8,y:697}).wait(1).to({graphics:mask_graphics_34,x:65.7,y:689.9}).wait(1).to({graphics:mask_graphics_35,x:79.7,y:683.1}).wait(1).to({graphics:mask_graphics_36,x:93,y:676.7}).wait(1).to({graphics:mask_graphics_37,x:105.5,y:670.6}).wait(1).to({graphics:mask_graphics_38,x:117.3,y:665}).wait(1).to({graphics:mask_graphics_39,x:128.3,y:659.7}).wait(1).to({graphics:mask_graphics_40,x:138.6,y:654.7}).wait(1).to({graphics:mask_graphics_41,x:148.1,y:650.1}).wait(1).to({graphics:mask_graphics_42,x:156.8,y:645.9}).wait(1).to({graphics:mask_graphics_43,x:164.8,y:642.1}).wait(1).to({graphics:mask_graphics_44,x:172,y:638.6}).wait(1).to({graphics:mask_graphics_45,x:178.4,y:635.5}).wait(1).to({graphics:mask_graphics_46,x:184.1,y:632.8}).wait(1).to({graphics:mask_graphics_47,x:189.1,y:630.4}).wait(1).to({graphics:mask_graphics_48,x:193.2,y:628.4}).wait(1).to({graphics:mask_graphics_49,x:196.7,y:626.7}).wait(1).to({graphics:mask_graphics_50,x:199.3,y:625.4}).wait(1).to({graphics:mask_graphics_51,x:201.2,y:624.5}).wait(1).to({graphics:mask_graphics_52,x:202.4,y:624}).wait(1).to({graphics:mask_graphics_53,x:202.7,y:623.8}).wait(1).to({graphics:null,x:0,y:0}).wait(143));

	// 图层 34
	this.instance_2 = new lib.lib_mc_000028();
	this.instance_2.setTransform(320,536,1,1,0,0,0,320,190);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},33).wait(143));

	// 图层 8
	this.instance_3 = new lib.lib_mc_000028();
	this.instance_3.setTransform(320,536,1,1,0,0,0,320,190);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,y:534.9},127).wait(16));

	// 图层 32
	this.instance_4 = new lib.lib_mc_000027();
	this.instance_4.setTransform(320,568,1,1,0,0,0,320,568);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},18).wait(36).to({scaleX:1.03,scaleY:1.03},127).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// a polar wood
	this.instance = new lib.lib_mc_000014();
	this.instance.setTransform(320.5,604.4,1,1,0,0,0,152.5,25.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(1).to({y:600.4,alpha:0.051},0).wait(1).to({y:596.4,alpha:0.109},0).wait(1).to({y:592.6,alpha:0.16},0).wait(1).to({y:588.9,alpha:0.211},0).wait(1).to({y:585.3,alpha:0.27},0).wait(1).to({y:581.9,alpha:0.309},0).wait(1).to({y:578.5,alpha:0.359},0).wait(1).to({y:575.3,alpha:0.41},0).wait(1).to({y:572.2,alpha:0.449},0).wait(1).to({y:569.2,alpha:0.488},0).wait(1).to({y:566.3,alpha:0.531},0).wait(1).to({y:563.5,alpha:0.57},0).wait(1).to({y:560.9,alpha:0.609},0).wait(1).to({y:558.3,alpha:0.641},0).wait(1).to({y:555.9,alpha:0.672},0).wait(1).to({y:553.6,alpha:0.711},0).wait(1).to({y:551.5,alpha:0.73},0).wait(1).to({y:549.4,alpha:0.77},0).wait(1).to({y:547.5,alpha:0.789},0).wait(1).to({y:545.6,alpha:0.82},0).wait(1).to({y:543.9,alpha:0.84},0).wait(1).to({y:542.4,alpha:0.859},0).wait(1).to({y:540.9,alpha:0.879},0).wait(1).to({y:539.5,alpha:0.898},0).wait(1).to({y:538.3,alpha:0.922},0).wait(1).to({y:537.2,alpha:0.93},0).wait(1).to({y:536.2,alpha:0.949},0).wait(1).to({y:535.3,alpha:0.961},0).wait(1).to({y:534.5,alpha:0.969},0).wait(1).to({y:533.9,alpha:0.98},0).wait(1).to({y:533.4,alpha:0.988},0).wait(1).to({y:533},0).wait(1).to({y:532.7,alpha:1},0).wait(1).to({y:532.5},0).wait(1).to({y:532.4},0).wait(35).to({y:506.4,alpha:0},27).wait(52));

	// 一块极地的原木
	this.instance_1 = new lib.lib_mc_000013();
	this.instance_1.setTransform(320,413.3,1,1,0,0,0,98,13.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).wait(1).to({y:416.6,alpha:0.051},0).wait(1).to({y:419.8,alpha:0.109},0).wait(1).to({y:422.8,alpha:0.16},0).wait(1).to({y:425.8,alpha:0.211},0).wait(1).to({y:428.7,alpha:0.27},0).wait(1).to({y:431.5,alpha:0.309},0).wait(1).to({y:434.2,alpha:0.359},0).wait(1).to({y:436.8,alpha:0.41},0).wait(1).to({y:439.3,alpha:0.449},0).wait(1).to({y:441.7,alpha:0.488},0).wait(1).to({y:444.1,alpha:0.531},0).wait(1).to({y:446.3,alpha:0.57},0).wait(1).to({y:448.4,alpha:0.609},0).wait(1).to({y:450.4,alpha:0.641},0).wait(1).to({y:452.4,alpha:0.672},0).wait(1).to({y:454.2,alpha:0.711},0).wait(1).to({y:456,alpha:0.73},0).wait(1).to({y:457.6,alpha:0.77},0).wait(1).to({y:459.2,alpha:0.789},0).wait(1).to({y:460.7,alpha:0.82},0).wait(1).to({y:462,alpha:0.84},0).wait(1).to({y:463.3,alpha:0.859},0).wait(1).to({y:464.5,alpha:0.879},0).wait(1).to({y:465.6,alpha:0.898},0).wait(1).to({y:466.6,alpha:0.922},0).wait(1).to({y:467.5,alpha:0.93},0).wait(1).to({y:468.3,alpha:0.949},0).wait(1).to({y:469,alpha:0.961},0).wait(1).to({y:469.6,alpha:0.969},0).wait(1).to({y:470.1,alpha:0.98},0).wait(1).to({y:470.6,alpha:0.988},0).wait(1).to({y:470.9},0).wait(1).to({y:471.1,alpha:1},0).wait(1).to({y:471.3},0).wait(36).to({y:511.3,alpha:0},27).wait(52));

	// 图层 27 副本
	this.instance_2 = new lib.lib_mc_000012();
	this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({scaleX:1.03,scaleY:1.03,alpha:0.719},37).to({scaleX:1.05,scaleY:1.05,alpha:0},20).to({regY:568.1,scaleX:1.14,scaleY:1.09,y:568.1},69).wait(52));

	// 图层 27
	this.instance_3 = new lib.lib_mc_000011();
	this.instance_3.setTransform(320,568,1,1,0,0,0,320,568);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({scaleX:1.05,scaleY:1.05},57).to({scaleX:1.09,scaleY:1.09},69).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lib_mc_000006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egi5gBmIgGgEQgEABgEgCIx0m6QyBnBjDhWQjBhVhLhRQgqgrgOgmQgQgqAWgdQAVgcBEgbQAegMBpghQDHg8ABABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAADQABAChfAfIiIArQifAvgRAoQgSAzBFBHIAAAAIA7AxQBTA6B4A0QDBBUSCHBIR0G6QADABADAEQADgBAEABMBA6AY9IBQBpgA9uiOQgEgBgDgDQgEABgEgBIysmnQzam6jWhWQikhCiFhmQgYgTgSgSQgPgQgWgbQgFgHgCgGIgBgNQgBgKAHgPQAFgMAIgJQATgaBUgeQAVgJB8gfQBYgaAYgTQAHgGABgEIgBgDIANADQgEAHgTAMQglAahoAcQhtAegiAOQg7AYgJAcQgLAfAHAQQAMAaA/AyIAAABIBOAwQAoAaA9AcQAjAPBXAjQDUBTTbG7ISsGoQADAAADADQADgBAEACMBAVAWlIBNBCgA7ykIQgEgCgDgCIgIAAIy6l+QpSi9o2jIQj4hYiPg2IgCgBQihg9gdgTIBrAqICOA3QGQBwMwDfIUDFeQACAAAEADQADgDAFADUAkkAJNAg4AJdIBSA3Ugh4gJhgk5gJgIgHgEIgIAAQjSg4mmh4Qmzh9jag7QoLiPqUjLIAFABQDWBNTqGPIS6F+QADABADADQADgCAEACMBBEAUXIBQA/gA7ZoZIgHgEIgJABQjYgym4hrQnLhvjog3QpWiLsIjOIgLgDQG2BpO5DfIVBE5QADAAAEAEQADgCAFACMBC7APXIBKAtgA7+tNIgHgDQgEABgEgBQjagom8hbQnPhdjqguQpZhzsNivQG8BYOvC3IVMEEQADAAAFADQADgCAEABMBDfAMyIBMApgAJup+IgHgDQgGACgDgBQhFgHjQggQjrgkibgVQnUg8jugeQpfhKsXh4QHBA6O5B0QD3AeHFBBQHMBCDRAaQAEgBAEAEQADgDAFABMBEOAJVIBPAbgA8Fw2IgHgDQgGACgCgBIkWgdQjVgXiygXQnVg+jtgdQpfhJsXh6QHBA7O5B1IVbClQADAAAFAEQADgDAEABMBENAIGIBOAag");
	mask.setTransform(506.7,177.6);

	// 图层 5
	this.instance = new lib.lib_mc_000067();
	this.instance.setTransform(-110.1,0.4,1,0.657,-6.2,0,0,102.1,102);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:102,regY:101.9,scaleX:1.74,scaleY:1.14,rotation:-21.1,x:1174,y:172.4},42).wait(1));

	// 图层 4
	this.instance_1 = new lib.lib_mc_000067();
	this.instance_1.setTransform(-211.8,-42.2,1,0.657,-21.2,0,0,102.1,102);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.65,scaleY:1.09,x:887.1,y:287.7},41).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.3,-141.6,238.8,199);


(lib.lib_mc_000004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 3
	this.instance = new lib.lib_mc_000003();
	this.instance.setTransform(-68.4,78,0.25,0.25,-23.1,0,0,27.9,62.6);
	this.instance.alpha = 0.461;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({regX:28.2,rotation:-19.9,x:232.9,y:359.7},53).to({regX:28.1,regY:62.5,rotation:-19.3,x:270,y:400.2,alpha:0},13).to({_off:true},1).wait(16));

	// 元件 3
	this.instance_1 = new lib.lib_mc_000003();
	this.instance_1.setTransform(-67.4,8.2,0.348,0.348,-23.1,0,0,28.1,62.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({regX:28,regY:62.4,rotation:-19.9,x:229.6,y:296.6},55).to({regX:27.9,regY:62.5,rotation:-19.3,x:278.3,y:345.9,alpha:0},13).wait(1));

	// 元件 3
	this.instance_2 = new lib.lib_mc_000003();
	this.instance_2.setTransform(-11.7,-63.3,0.25,0.25,-23.1,0,0,27.9,62.6);
	this.instance_2.alpha = 0.461;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regX:27.8,rotation:-19.9,x:243.3,y:188.1},52).to({regX:28,regY:62.7,rotation:-19.3,x:281.2,y:225,alpha:0},12).to({_off:true},5).wait(24));

	// 元件 3
	this.instance_3 = new lib.lib_mc_000003();
	this.instance_3.setTransform(-68.4,-38.8,0.25,0.25,-23.1,0,0,27.9,62.6);
	this.instance_3.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:62.8,rotation:-19.9,x:207.8,y:223.8},51).to({regX:27.8,regY:62.6,rotation:-19.3,x:259,y:272.5,alpha:0},12).to({_off:true},17).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.1,-56,25.3,34.3);


(lib.lib_mc_000001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lib_mc_000015
	this.instance = new lib.lib_mc_000023();
	this.instance.setTransform(227,89.5,1,1,0,0,0,66,72.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},22).wait(16).to({alpha:0},24).to({_off:true},2).wait(6));

	// lib_mc_000014
	this.instance_1 = new lib.lib_mc_000022();
	this.instance_1.setTransform(472,83,1,1,0,0,0,60,55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({alpha:0.539},22).wait(16).to({alpha:0},19).to({_off:true},1).wait(4));

	// lib_mc_000013
	this.instance_2 = new lib.lib_mc_000021();
	this.instance_2.setTransform(138,163,1,1,0,0,0,49,46);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},22).wait(13).to({alpha:0},23).to({_off:true},1).wait(17));

	// lib_mc_000012
	this.instance_3 = new lib.lib_mc_000020();
	this.instance_3.setTransform(60.5,186.5,1,1,0,0,0,60.5,63.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},16).wait(15).to({alpha:0},24).to({_off:true},1).wait(24));

	// lib_mc_000011
	this.instance_4 = new lib.lib_mc_000019();
	this.instance_4.setTransform(129,116.5,1,1,0,0,0,67,70.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({alpha:0.449},19).wait(16).to({alpha:0},16).wait(1));

	// lib_mc_000010
	this.instance_5 = new lib.lib_mc_000018();
	this.instance_5.setTransform(368,70.5,1,1,0,0,0,67,70.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:0.191},22).wait(16).to({alpha:0},20).to({_off:true},1).wait(15));

	// lib_mc_000009
	this.instance_6 = new lib.lib_mc_000017();
	this.instance_6.setTransform(310,144.5,1,1,0,0,0,92,96.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.559},16).wait(15).to({alpha:0},24).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,48,402,202);


(lib.lib_mc_000041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.lib_mc_000004("synched",0);
	this.instance.setTransform(43.1,48,1,1,0,0,0,10.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(131));

	// 元件 6
	this.instance_1 = new lib.lib_mc_000006("synched",0);
	this.instance_1.setTransform(308.6,645.6,1,1,0,0,0,193.7,70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(131));

	// 图层 1
	this.instance_2 = new lib.lib_img_000017();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-49.5,1181.1,1213.6);


(lib.lib_mc_000040 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A ray of light  across the night sky
	this.instance = new lib.lib_mc_000043();
	this.instance.setTransform(456.3,712.1,1,1,0,0,0,201.3,55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({y:706.1,alpha:0.051},0).wait(1).to({y:700.3,alpha:0.102},0).wait(1).to({y:694.6,alpha:0.148},0).wait(1).to({y:689.1,alpha:0.195},0).wait(1).to({y:683.7,alpha:0.238},0).wait(1).to({y:678.5,alpha:0.285},0).wait(1).to({y:673.5,alpha:0.328},0).wait(1).to({y:668.6,alpha:0.367},0).wait(1).to({y:663.9,alpha:0.41},0).wait(1).to({y:659.3,alpha:0.445},0).wait(1).to({y:654.9,alpha:0.484},0).wait(1).to({y:650.6,alpha:0.52},0).wait(1).to({y:646.5,alpha:0.555},0).wait(1).to({y:642.5,alpha:0.59},0).wait(1).to({y:638.7,alpha:0.621},0).wait(1).to({y:635.1,alpha:0.652},0).wait(1).to({y:631.6,alpha:0.684},0).wait(1).to({y:628.3,alpha:0.711},0).wait(1).to({y:625.1,alpha:0.738},0).wait(1).to({y:622,alpha:0.762},0).wait(1).to({y:619.2,alpha:0.785},0).wait(1).to({y:616.5,alpha:0.809},0).wait(1).to({y:613.9,alpha:0.832},0).wait(1).to({y:611.5,alpha:0.852},0).wait(1).to({y:609.2,alpha:0.871},0).wait(1).to({y:607.1,alpha:0.891},0).wait(1).to({y:605.2,alpha:0.906},0).wait(1).to({y:603.4,alpha:0.922},0).wait(1).to({y:601.8,alpha:0.934},0).wait(1).to({y:600.3,alpha:0.945},0).wait(1).to({y:599,alpha:0.957},0).wait(1).to({y:597.8,alpha:0.969},0).wait(1).to({y:596.8,alpha:0.977},0).wait(1).to({y:596,alpha:0.984},0).wait(1).to({y:595.3,alpha:0.988},0).wait(1).to({y:594.7,alpha:0.992},0).wait(1).to({y:594.3,alpha:0.996},0).wait(1).to({y:594.1,alpha:1},0).wait(1).to({y:594},0).wait(57).to({y:534,alpha:0},29).wait(9));

	// 一道划过夜空的光芒
	this.instance_1 = new lib.lib_mc_000042();
	this.instance_1.setTransform(449,437.2,1,1,0,0,0,126,13.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({y:440.2,alpha:0.051},0).wait(1).to({y:443.2,alpha:0.102},0).wait(1).to({y:446.1,alpha:0.148},0).wait(1).to({y:448.9,alpha:0.195},0).wait(1).to({y:451.6,alpha:0.238},0).wait(1).to({y:454.2,alpha:0.285},0).wait(1).to({y:456.8,alpha:0.328},0).wait(1).to({y:459.3,alpha:0.367},0).wait(1).to({y:461.7,alpha:0.41},0).wait(1).to({y:464,alpha:0.445},0).wait(1).to({y:466.3,alpha:0.484},0).wait(1).to({y:468.4,alpha:0.52},0).wait(1).to({y:470.5,alpha:0.555},0).wait(1).to({y:472.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.621},0).wait(1).to({y:476.3,alpha:0.652},0).wait(1).to({y:478.1,alpha:0.684},0).wait(1).to({y:479.8,alpha:0.711},0).wait(1).to({y:481.4,alpha:0.738},0).wait(1).to({y:483,alpha:0.762},0).wait(1).to({y:484.4,alpha:0.785},0).wait(1).to({y:485.8,alpha:0.809},0).wait(1).to({y:487.1,alpha:0.832},0).wait(1).to({y:488.3,alpha:0.852},0).wait(1).to({y:489.5,alpha:0.871},0).wait(1).to({y:490.6,alpha:0.891},0).wait(1).to({y:491.5,alpha:0.906},0).wait(1).to({y:492.4,alpha:0.922},0).wait(1).to({y:493.3,alpha:0.934},0).wait(1).to({y:494,alpha:0.945},0).wait(1).to({y:494.7,alpha:0.957},0).wait(1).to({y:495.3,alpha:0.969},0).wait(1).to({y:495.8,alpha:0.977},0).wait(1).to({y:496.2,alpha:0.984},0).wait(1).to({y:496.6,alpha:0.988},0).wait(1).to({y:496.9,alpha:0.992},0).wait(1).to({y:497.1,alpha:0.996},0).wait(1).to({y:497.2,alpha:1},0).wait(58).to({y:537.2,alpha:0},29).wait(9));

	// 71516140
	this.instance_2 = new lib.lib_mc_000041();
	this.instance_2.setTransform(442,582,1,1,0,0,0,402,582);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:435.3,alpha:1},19).to({x:402},132).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-25,852.9,1189.1);


(lib.lib_mc_000015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 斑闪闪
	this.instance = new lib.lib_mc_000025();
	this.instance.setTransform(581.1,532.7,1,1,0,0,0,192,25.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({x:570.6,alpha:0.039},0).wait(1).to({x:560.3,alpha:0.078},0).wait(1).to({x:550.3,alpha:0.117},0).wait(1).to({x:540.4,alpha:0.156},0).wait(1).to({x:530.8,alpha:0.195},0).wait(1).to({x:521.3,alpha:0.23},0).wait(1).to({x:512.1,alpha:0.266},0).wait(1).to({x:503.1,alpha:0.301},0).wait(1).to({x:494.4,alpha:0.332},0).wait(1).to({x:485.8,alpha:0.367},0).wait(1).to({x:477.5,alpha:0.398},0).wait(1).to({x:469.3,alpha:0.43},0).wait(1).to({x:461.4,alpha:0.461},0).wait(1).to({x:453.7,alpha:0.488},0).wait(1).to({x:446.3,alpha:0.52},0).wait(1).to({x:439,alpha:0.547},0).wait(1).to({x:432,alpha:0.574},0).wait(1).to({x:425.1,alpha:0.602},0).wait(1).to({x:418.5,alpha:0.625},0).wait(1).to({x:412.1,alpha:0.648},0).wait(1).to({x:406,alpha:0.672},0).wait(1).to({x:400,alpha:0.695},0).wait(1).to({x:394.3,alpha:0.719},0).wait(1).to({x:388.7,alpha:0.738},0).wait(1).to({x:383.4,alpha:0.762},0).wait(1).to({x:378.3,alpha:0.781},0).wait(1).to({x:373.5,alpha:0.797},0).wait(1).to({x:368.8,alpha:0.816},0).wait(1).to({x:364.4,alpha:0.832},0).wait(1).to({x:360.1,alpha:0.852},0).wait(1).to({x:356.1,alpha:0.863},0).wait(1).to({x:352.3,alpha:0.879},0).wait(1).to({x:348.8,alpha:0.895},0).wait(1).to({x:345.4,alpha:0.906},0).wait(1).to({x:342.3,alpha:0.918},0).wait(1).to({x:339.3,alpha:0.93},0).wait(1).to({x:336.6,alpha:0.941},0).wait(1).to({x:334.1,alpha:0.949},0).wait(1).to({x:331.9,alpha:0.957},0).wait(1).to({x:329.8,alpha:0.965},0).wait(1).to({x:328,alpha:0.973},0).wait(1).to({x:326.3,alpha:0.98},0).wait(1).to({x:324.9,alpha:0.984},0).wait(1).to({x:323.7,alpha:0.988},0).wait(1).to({x:322.8,alpha:0.992},0).wait(1).to({x:322,alpha:0.996},0).wait(1).to({x:321.5,alpha:1},0).wait(1).to({x:321.1},0).wait(1).to({x:321},0).to({x:319},47).to({x:265,alpha:0},31).wait(59));

	// an uncut crystal
	this.instance_1 = new lib.lib_mc_000024();
	this.instance_1.setTransform(113.4,471.2,1,1,0,0,0,125.4,13.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({x:121.7,alpha:0.039},0).wait(1).to({x:129.9,alpha:0.078},0).wait(1).to({x:137.8,alpha:0.117},0).wait(1).to({x:145.6,alpha:0.156},0).wait(1).to({x:153.3,alpha:0.195},0).wait(1).to({x:160.7,alpha:0.23},0).wait(1).to({x:168,alpha:0.266},0).wait(1).to({x:175.2,alpha:0.301},0).wait(1).to({x:182.1,alpha:0.332},0).wait(1).to({x:188.9,alpha:0.367},0).wait(1).to({x:195.5,alpha:0.398},0).wait(1).to({x:201.9,alpha:0.43},0).wait(1).to({x:208.2,alpha:0.461},0).wait(1).to({x:214.3,alpha:0.488},0).wait(1).to({x:220.2,alpha:0.52},0).wait(1).to({x:226,alpha:0.547},0).wait(1).to({x:231.5,alpha:0.574},0).wait(1).to({x:237,alpha:0.602},0).wait(1).to({x:242.2,alpha:0.625},0).wait(1).to({x:247.2,alpha:0.648},0).wait(1).to({x:252.1,alpha:0.672},0).wait(1).to({x:256.9,alpha:0.695},0).wait(1).to({x:261.4,alpha:0.719},0).wait(1).to({x:265.8,alpha:0.738},0).wait(1).to({x:270,alpha:0.762},0).wait(1).to({x:274,alpha:0.781},0).wait(1).to({x:277.9,alpha:0.797},0).wait(1).to({x:281.6,alpha:0.816},0).wait(1).to({x:285.1,alpha:0.832},0).wait(1).to({x:288.4,alpha:0.852},0).wait(1).to({x:291.6,alpha:0.863},0).wait(1).to({x:294.6,alpha:0.879},0).wait(1).to({x:297.5,alpha:0.895},0).wait(1).to({x:300.1,alpha:0.906},0).wait(1).to({x:302.6,alpha:0.918},0).wait(1).to({x:304.9,alpha:0.93},0).wait(1).to({x:307.1,alpha:0.941},0).wait(1).to({x:309,alpha:0.949},0).wait(1).to({x:310.8,alpha:0.957},0).wait(1).to({x:312.5,alpha:0.965},0).wait(1).to({x:313.9,alpha:0.973},0).wait(1).to({x:315.2,alpha:0.98},0).wait(1).to({x:316.3,alpha:0.984},0).wait(1).to({x:317.3,alpha:0.988},0).wait(1).to({x:318.1,alpha:0.992},0).wait(1).to({x:318.7,alpha:0.996},0).wait(1).to({x:319.1,alpha:1},0).wait(1).to({x:319.3},0).wait(1).to({x:319.4},0).to({x:325.4},47).to({x:379.4,alpha:0},31).wait(59));

	// 图层 30
	this.instance_2 = new lib.lib_mc_000001("synched",0);
	this.instance_2.setTransform(325,900,1,1,0,0,0,266,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({startPosition:0,_off:false},0).wait(159));

	// 图层 31
	this.instance_3 = new lib.lib_mc_000016();
	this.instance_3.setTransform(320,568,1.06,1.06,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1},109).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-34,678.4,1204.1);


(lib.lib_mc_000009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lib_mc_000052
	this.instance = new lib.lib_mc_000053("synched",0,false);
	this.instance.setTransform(463,735.5,1,1,0,0,0,463,723.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(994).wait(459).to({startPosition:0,_off:false},0).wait(236));

	// 图层 5
	this.instance_1 = new lib.lib_mc_000078("synched",0,false);
	this.instance_1.setTransform(616,482.5,1,1,0,0,0,524,719.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1305).to({startPosition:0,_off:false},0).to({_off:true},197).wait(187));

	// lib_mc_000047
	this.instance_2 = new lib.lib_mc_000049("synched",0,false);
	this.instance_2.setTransform(526,594,1,1,0,0,0,320,568);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(994).wait(172).to({startPosition:0,_off:false},0).to({_off:true},167).wait(356));

	// lib_mc_000041
	this.instance_3 = new lib.lib_mc_000044("synched",0,false);
	this.instance_3.setTransform(518.5,599,1,1,0,0,0,359.5,573);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(994).to({startPosition:0,_off:false},0).to({_off:true},206).wait(489));

	// 图层 3
	this.instance_4 = new lib.lib_mc_000070("synched",0,false);
	this.instance_4.setTransform(526.1,594,1,1,0,0,0,320,568);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(879).to({startPosition:0,_off:false},0).to({_off:true},141).wait(669));

	// lib_mc_000036
	this.instance_5 = new lib.lib_mc_000040("synched",0,false);
	this.instance_5.setTransform(479,582,1,1,0,0,0,402,582);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(727).to({startPosition:0,_off:false},0).to({_off:true},179).wait(783));

	// lib_mc_000030
	this.instance_6 = new lib.lib_mc_000035("synched",0,false);
	this.instance_6.setTransform(526.5,598.5,1,1,0,0,0,412.5,572.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(572).to({startPosition:0,_off:false},0).to({_off:true},174).wait(943));

	// lib_mc_000025
	this.instance_7 = new lib.lib_mc_000031("synched",0,false);
	this.instance_7.setTransform(526,594,1,1,0,0,0,320,568);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(416).to({startPosition:0,_off:false},0).to({_off:true},183).wait(1090));

	// lib_mc_000019
	this.instance_8 = new lib.lib_mc_000026("synched",0,false);
	this.instance_8.setTransform(526,594,1,1,0,0,0,320,568);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(245).to({startPosition:0,_off:false},0).to({_off:true},195).wait(1249));

	// lib_mc_000007
	this.instance_9 = new lib.lib_mc_000015("synched",0,false);
	this.instance_9.setTransform(526,594,1,1,0,0,0,320,568);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(109).to({startPosition:0,_off:false},0).to({alpha:1,startPosition:18},18).to({_off:true},140).wait(1422));

	// lib_mc_000002
	this.instance_10 = new lib.lib_mc_000010("synched",0,false);
	this.instance_10.setTransform(526,594,1,1,0,0,0,320,568);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1,startPosition:13},13).to({_off:true},131).wait(1545));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.9,-25.1,732.3,1238.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;