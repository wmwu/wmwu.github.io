(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 480,
	height: 380,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.TrackingMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#285050").ss(1,1,1).p("AImisIAAFZIxLAAIAAlZg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AokCtIAAlZIRJAAIAAFZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#285050").ss(1,1,1).p("AImCtIxLAAIAAlZIRLAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AokCtIAAlZIRJAAIAAFZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AokCtIAAlZIRJAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-18.3,112,36.8);


(lib.SLetter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AhBBkQgUgEgPgHIAKgwIAGAAQAOAMATAHQATAIAWAAQAUAAALgHQAKgFAAgMQAAgEgBgDQgCgDgFgDIgNgGIgUgHIgbgJQgMgFgIgFQgJgGgEgJQgEgIAAgNQAAgeAbgSQAbgTAtAAQAWAAAUAEQAUAEAOAGIgKAvIgFAAQgLgKgRgHQgSgGgVAAQgTAAgKAFQgLAHAAAKQAAAEACAEQABADAFADIANAGIAVAGQAiAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgVAAQgbAAgUgFg");
	this.shape.setTransform(1.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-16.6,24.1,38.1);


(lib.Rolloff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("A6sWgMAAAgs/MA1ZAAAMAAAAs/g");
	this.shape.setTransform(-45,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.PLetter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhkBlIAvjJIBHAAQAUAAAPACQAPADALAHQALAHAFAKQAGALAAAQQAAAkgeAVQgeAWg1AAIgUAAIgPBCgAgXgBIATAAQAWAAANgKQAOgKAAgSQAAgMgJgGQgIgFgRAAIgUAAg");
	this.shape.setTransform(2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-16.6,24.7,38.1);


(lib.nonS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AhBBlQgUgFgPgGIAKgyIAGAAQAOAOATAGQATAIAWgBQAUAAALgFQAKgHAAgLQAAgEgBgDQgCgEgFgDIgNgFIgUgHIgbgJQgMgEgIgGQgJgGgEgIQgEgKAAgMQAAgfAbgSQAbgSAtAAQAWAAAUAEQAUAEAOAGIgKAvIgFAAQgLgKgRgGQgSgHgVAAQgTAAgKAGQgLAFAAALQAAAEACAEQABADAFADIANAGIAVAHQAiAJAPAKQAPAMAAAWQAAARgIANQgIAOgOAIQgPAJgSAEQgTAEgVAAQgbAAgUgEg");
	this.shape.setTransform(39.5,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC00").s().p("Ag3ATIAJglIBmAAIgJAlg");
	this.shape_1.setTransform(22.8,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CC00").s().p("AAOBPIAShMIACgNIACgLQAAgJgFgFQgEgDgNAAQgFgBgIADIgPAIIgZBrIgxAAIAjiYIAxAAIgDARQANgKAMgGQAMgFAQgBQAVAAALALQAMAJAAAUIgBAJIgCAKIgXBig");
	this.shape_2.setTransform(5.5,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC00").s().p("AhCBBQgTgRAAgdQAAgTAHgSQAHgSANgOQANgOATgIQATgIAWAAQAiAAATAQQASAQAAAdQAAAUgHASQgIATgNAOQgOAOgSAIQgSAHgWAAQgiAAgSgQgAgHgqQgIAGgGAJQgGAIgDANQgDALAAANQAAAQAHAHQAHAHAMAAQAHAAAIgFQAIgFAGgJQAGgJADgMQAEgJAAgQQAAgOgHgIQgGgIgNAAQgJAAgHAFg");
	this.shape_3.setTransform(-13.6,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CC00").s().p("AAOBPIAShMIADgNIABgLQAAgJgFgFQgEgDgNAAQgFgBgIADIgPAIIgZBrIgxAAIAjiYIAxAAIgDARQAMgKANgGQAMgFAQgBQAVAAALALQAMAJAAAUIgBAJIgCAKIgXBig");
	this.shape_4.setTransform(-33.6,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-17.1,96.4,38.1);


(lib.nonP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhkBlIAvjJIBHAAQAUAAAPACQAPADALAHQALAHAFAKQAGALAAAQQAAAkgeAVQgeAWg1AAIgUAAIgPBCgAgXgBIATAAQAWAAANgKQAOgKAAgSQAAgMgJgGQgIgFgRAAIgUAAg");
	this.shape.setTransform(39.4,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ag3ATIAJglIBmAAIgJAlg");
	this.shape_1.setTransform(22.1,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAOBOIAShLIADgNIABgMQAAgIgFgEQgEgFgNAAQgFABgIACIgPAHIgZBrIgxAAIAjiXIAxAAIgDARQAMgKANgGQAMgFAQAAQAVgBALALQAMAKAAASIgBAJIgCAKIgXBig");
	this.shape_2.setTransform(4.8,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhCBBQgTgRAAgdQAAgTAHgSQAHgSANgOQANgOATgIQATgIAWAAQAiAAATAQQASAQAAAdQAAAUgHASQgIATgNAOQgOAOgSAIQgSAHgWAAQgiAAgSgQgAgHgqQgIAGgGAJQgGAIgDANQgDALAAANQAAAQAHAHQAHAHAMAAQAHAAAIgFQAIgFAGgJQAGgJADgMQAEgJAAgQQAAgOgHgIQgGgIgNAAQgJAAgHAFg");
	this.shape_3.setTransform(-14.3,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AAPBOIARhLIADgNIABgMQAAgIgFgEQgEgFgMAAQgGABgIACIgPAHIgZBrIgxAAIAjiXIAxAAIgDARQANgKAMgGQAMgFAQAAQAUgBAMALQAMAKAAASIgBAJIgCAKIgXBig");
	this.shape_4.setTransform(-34.3,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-17.7,97.1,38.1);


(lib.CSType = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{A:0,E:1,I:2,O:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Copula
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285050").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape.setTransform(212.3,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285050").s().p("AgsA7QgUgUAAgmQAAgkATgWQAUgWAdAAQAOAAALAEQAMAFAHAIQAJAJAEANQAFAMgBATIAAAMIhoAAQAAAaAOAOQANAOAWAAQAIAAAJgCIAPgEIALgGIAIgGIACAAIAAAcIgLAEIgNAFIgNADIgQABQgiAAgUgVgAAogPQAAgLgCgHQgCgIgFgFQgEgFgHgEQgHgDgLAAQgIAAgHAEQgHADgFAGQgHAGgCAHQgDAHgCAKIBPAAIAAAAg");
	this.shape_1.setTransform(48.1,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285050").s().p("AgnBMIAAiXIAaAAIAAAXQANgNAKgFQAKgFAJAAIAHAAIAEABIAAAbIgBAAIgHgBIgHgBQgLAAgKAFQgIAEgJAJIAABrg");
	this.shape_2.setTransform(36.6,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285050").s().p("AgfBMQgIgDgHgHQgGgGgEgJQgDgJAAgLQAAgPAGgLQAHgKAPgGQAMgGASgCIAkgEIAAgFQAAgJgDgFQgDgGgFgDQgFgDgHgBIgMgBQgJAAgMADQgMACgMAFIgCAAIAAgaIAUgEQAOgDANAAQANAAALADQALACAJAHQAIAGAEAKQAEAKAAAOIAABnIgZAAIAAgRIgJAHIgKAHIgNAFQgEACgMAAQgJAAgJgEgAAMAAQgNAAgIACQgKADgHAHQgHAGAAAMQAAANAIAHQAHAGAOAAQAKAAAKgFQAKgFAJgIIAAgog");
	this.shape_3.setTransform(22.9,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285050").s().p("AgOBXQgNgMAAgaIAAhSIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAtAAIAAAVIgtAAIAABGIABASQAAAHABAFQACAFAFACQAFADAJAAQAHAAAGgCIAIgDIABAAIAAAXIgOADIgOABQgSAAgMgMg");
	this.shape_4.setTransform(87.7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285050").s().p("AgxA7QgRgWgBglQAAgkATgWQATgVAdAAQAeAAATAVQASAWAAAkQAAAmgSAWQgTAUgeAAQgeAAgTgVgAgdgrQgLAPAAAcQAAAcALAPQALAPASAAQATAAALgPQALgOAAgdQAAgcgLgPQgLgOgTAAQgSAAgLAOg");
	this.shape_5.setTransform(75.3,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285050").s().p("AAiBOIAAhVIgBgTQgBgKgDgFQgDgGgGgDQgFgDgKAAQgHAAgKAGQgLAFgKAIIAABwIgaAAIAAiWIAaAAIAAAQQAMgKALgFQAKgGALAAQAXAAANAPQANAPAAAcIAABhg");
	this.shape_6.setTransform(60,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285050").s().p("AgsA7QgVgUAAgmQAAgkAUgWQATgWAeAAQAOAAAMAEQAKAFAJAIQAIAJAEANQAEAMABATIAAAMIhpAAQAAAaAOAOQANAOAWAAQAIAAAJgCIAOgEIAMgGIAIgGIACAAIAAAcIgMAEIgMAFIgNADIgPABQgjAAgUgVgAAogPQAAgLgCgHQgCgIgFgFQgEgFgHgEQgHgDgKAAQgIAAgIAEQgHADgFAGQgHAGgCAHQgEAHgBAKIBPAAIAAAAg");
	this.shape_7.setTransform(36.1,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285050").s().p("AgnBMIAAiXIAaAAIAAAXQANgNAJgFQALgFAKAAIAFAAIAFABIAAAbIgBAAIgHgBIgHgBQgLAAgKAFQgIAEgJAJIAABrg");
	this.shape_8.setTransform(24.6,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:22.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:10.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape}]},3).wait(1));

	// Quantifier
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285050").s().p("ABxBqIAAjTIAaAAIAADTgAAwBqIAAjTIAaAAIAADTgAACBqIgRg5IhNAAIgTA5IgbAAIBFjKIAhAAIBDDKgAhVAaIA/AAIgfheg");
	this.shape_9.setTransform(-156.5,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285050").s().p("AgxA7QgRgWgBglQAAgkATgWQATgVAdAAQAeAAATAVQASAWAAAkQAAAmgSAWQgTAUgeAAQgeAAgTgVgAgdgrQgLAPAAAcQAAAcALAPQAKAPATAAQATAAALgPQALgOAAgdQAAgcgLgPQgLgOgTAAQgTAAgKAOg");
	this.shape_10.setTransform(-148.2,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285050").s().p("AAqBlIhYitIAACtIgZAAIAAjJIAmAAIBQCfIAAifIAZAAIAADJg");
	this.shape_11.setTransform(-165.1,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285050").s().p("AgsA7QgVgUAAgmQAAgkAUgWQAUgWAeAAQAOAAALAEQAKAFAJAIQAIAJAEANQAFAMAAATIAAAMIhoAAQAAAaANAOQANAOAWAAQAJAAAIgCIAOgEIAMgGIAIgGIABAAIAAAcIgLAEIgLAFIgOADIgPABQgjAAgUgVgAApgPQgBgLgCgHQgCgIgEgFQgFgFgHgEQgHgDgKAAQgJAAgGAEQgIADgGAGQgFAGgEAHQgDAHAAAKIBPAAIAAAAg");
	this.shape_12.setTransform(-148.2,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285050").s().p("ABJBOIAAhWIgBgTQAAgKgDgFQgDgGgFgCQgEgCgJgBQgIAAgJAGQgKAEgJAJIABAGIAAAIIAABiIgYAAIAAhWIgBgTQgBgKgDgFQgCgGgGgCQgEgCgJgBQgIAAgJAGQgKAFgIAIIAABwIgaAAIAAiWIAaAAIAAAQQAKgKAKgFQAJgGANAAQANAAAKAGQAJAHAFANQAMgMAMgIQAKgGANAAQAKAAAIADQAIADAHAHQAFAHAEALQADAKAAAQIAABig");
	this.shape_13.setTransform(-167.3,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285050").s().p("AgmBkQgQgEgOgGIAAgjIACAAQAOANARAHQAQAHAQAAQAVAAALgKQAMgJAAgPQAAgNgGgHQgGgIgOgDIgPgFIgTgEQgLgDgIgFQgJgCgGgGQgGgIgEgJQgDgJAAgLQAAgZATgRQATgRAcAAQARAAAQAEQAPADANAHIAAAgIgCAAQgKgJgPgGQgPgIgRABQgRgBgLAKQgMAIAAAOQAAANAHAJQAHAHANAEIATAFIAUAFQAVAGAKALQAKANAAAUQAAAMgFALQgFAMgJAIQgKAIgMAFQgMAFgRAAQgWAAgPgFg");
	this.shape_14.setTransform(-202,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_10,p:{x:-148.2}}]},1).to({state:[{t:this.shape_14},{t:this.shape_10,p:{x:-186.7}},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape_10,p:{x:-186.7}},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-19,389.2,37.8);


(lib.ContrapositionButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAyIAAg2IAAgMQgBgHgBgDQgCgDgEgCQgEgCgGAAQgEAAgGADQgHAEgHAEIAABIIgQAAIAAhgIAQAAIAAAKQAIgGAHgEQAGgDAHAAQAPAAAIAJQAIAKAAASIAAA+g");
	this.shape.setTransform(50.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAmQgMgOAAgYQAAgXAMgOQAMgNASAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgSgbQgHAKAAARQAAASAHAKQAHAJALAAQAMAAAHgJQAHgJAAgTQAAgRgHgKQgGgJgNAAQgLAAgHAJg");
	this.shape_1.setTransform(41,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBBIAAhgIAPAAIAABggAgIgvIAAgRIARAAIAAARg");
	this.shape_2.setTransform(34.1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA4QgIgIAAgQIAAg1IgLAAIAAgNIALAAIAAgdIARAAIAAAdIAdAAIAAANIgdAAIAAAtIAAALQAAAFAAADQACADADACQAEABAFAAIAIgBIAFgCIACAAIAAAPIgKACIgJABQgMAAgHgIg");
	this.shape_3.setTransform(29.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBBIAAhgIAPAAIAABggAgIgvIAAgRIARAAIAAARg");
	this.shape_4.setTransform(24,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAwQgIgDgGgCIAAgTIABAAIAFAEIAHAEIAJADQAFACAGAAIAGgBIAHgCQAEgCAAgCQACgDAAgEQAAgHgDgCQgDgDgJgDIgGgBIgJgCQgLgEgGgEQgEgIAAgJQAAgOAKgIQAKgIAOAAQAIAAAJACQAIACAFADIAAARIgBAAQgGgEgIgDQgIgDgHAAQgHAAgFADQgGAEAAAHQAAAGAEADQADADAHACIAGACIAKACQALADAGAEQAFAHAAAKQAAAGgDAGQgCAGgFAEQgFAFgHACQgHACgIAAQgKAAgIgDg");
	this.shape_5.setTransform(18.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAmQgMgOAAgYQAAgXAMgOQAMgNASAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgSgbQgHAKAAARQAAASAHAKQAHAJALAAQAMAAAHgJQAHgJAAgTQAAgRgHgKQgGgJgNAAQgLAAgHAJg");
	this.shape_6.setTransform(9,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBEIAAiEIARAAIAAAKQAGgGAHgDQAIgEAHAAQARAAAJANQAKAOAAAWQAAAXgMAPQgMAOgRAAQgGAAgGgCIgLgFIAAApgAgLgwQgGADgGAFIAAA1QAGAEAFABIAKABQALAAAHgJQAIgKAAgQQAAgQgGgKQgFgJgMAAQgFAAgHADg");
	this.shape_7.setTransform(-0.4,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAxQgFgDgFgDQgEgFgCgFQgCgHgBgGQABgKAEgHQAEgFAJgFQAJgEALgBIAWgCIAAgEQAAgFgBgEQgCgDgEgCIgHgDIgIgBQgFAAgIACIgQAFIgBAAIAAgRIAOgCIAQgCQAJAAAGACQAIABAFAEQAGAEACAGQACAHABAJIAABCIgRAAIAAgLIgFAFIgGADIgJAEIgJABQgHAAgFgCgAAHAAIgMABQgHACgEAEQgEAEgBAIQAAAIAGAFQAEAEAJAAQAGAAAHgDQAGgEAFgFIAAgZg");
	this.shape_8.setTransform(-10.7,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAxIAAhgIAQAAIAAAOQAIgIAGgEQAGgCAHAAIADAAIADAAIAAARIgBAAIgDAAIgGAAQgGAAgGACQgFADgGAGIAABEg");
	this.shape_9.setTransform(-17.5,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJA4QgHgIgBgQIAAg1IgKAAIAAgNIAKAAIAAgdIARAAIAAAdIAcAAIAAANIgcAAIAAAtIAAALQAAAFAAADQACADADACQADABAGAAIAIgBIAFgCIABAAIAAAPIgJACIgJABQgLAAgIgIg");
	this.shape_10.setTransform(-24.2,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVAyIAAg2IAAgMQAAgHgCgDQgCgDgEgCQgEgCgGAAQgEAAgGADQgHAEgHAEIAABIIgQAAIAAhgIAQAAIAAAKQAIgGAHgEQAGgDAIAAQAOAAAIAJQAIAKAAASIAAA+g");
	this.shape_11.setTransform(-32.2,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgMgOAAgYQAAgXAMgOQAMgNASAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgSgbQgHAKAAARQAAASAHAKQAHAJALAAQAMAAAHgJQAHgJAAgTQAAgRgHgKQgGgJgNAAQgLAAgHAJg");
	this.shape_12.setTransform(-42.2,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA/QgLgEgIgJQgHgJgFgMQgEgNAAgQQAAgPAEgMQAEgMAIgJQAIgJAKgFQAMgEALAAIAMAAIAKADIAJADIAJAFIAAAVIgCAAIgFgGIgJgFQgFgDgGgCQgGgCgHAAQgJAAgGAEQgHADgFAHQgGAHgDAKQgDAKAAALQAAANADAKQADAJAGAHQAGAHAHADQAFADAJAAQAHAAAGgCIAMgEIAJgGIAFgFIABAAIAAAVIgIAEIgKADIgKADIgMABQgLAAgLgEg");
	this.shape_13.setTransform(-52.3,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFFFFF","#285050"],[0,1],0,-19,0,19).s().p("ApqC0QgqgBgdgdQgdgdAAgpIAAifQAAgpAdgeQAdgdAqAAITVAAQAqAAAdAdQAdAeAAApIAACfQAAApgdAdQgdAdgqABg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVAyIAAg2IAAgMQgBgHgBgDQgCgDgEgCQgEgCgGAAQgEAAgGADQgHAEgHAEIAABIIgQAAIAAhgIAQAAIAAAKQAIgGAHgEQAGgDAHAAQAPAAAIAJQAIAKAAASIAAA+g");
	this.shape_15.setTransform(50.9,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAmQgMgOAAgYQAAgXAMgOQAMgNASAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgSgbQgHAKAAARQAAASAHAKQAHAJALAAQAMAAAHgJQAHgJAAgTQAAgRgHgKQgGgJgNAAQgLAAgHAJg");
	this.shape_16.setTransform(41,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHBBIAAhgIAPAAIAABggAgIgvIAAgRIARAAIAAARg");
	this.shape_17.setTransform(34.1,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJA4QgIgIAAgQIAAg1IgLAAIAAgNIALAAIAAgdIARAAIAAAdIAdAAIAAANIgdAAIAAAtIAAALQAAAFAAADQACADADACQAEABAFAAIAIgBIAFgCIACAAIAAAPIgKACIgJABQgMAAgHgIg");
	this.shape_18.setTransform(29.1,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBBIAAhgIAPAAIAABggAgIgvIAAgRIARAAIAAARg");
	this.shape_19.setTransform(24,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAwQgIgDgGgCIAAgTIABAAIAFAEIAHAEIAJADQAFACAGAAIAGgBIAHgCQAEgCAAgCQACgDAAgEQAAgHgDgCQgDgDgJgDIgGgBIgJgCQgLgEgGgEQgEgIAAgJQAAgOAKgIQAKgIAOAAQAIAAAJACQAIACAFADIAAARIgBAAQgGgEgIgDQgIgDgHAAQgHAAgFADQgGAEAAAHQAAAGAEADQADADAHACIAGACIAKACQALADAGAEQAFAHAAAKQAAAGgDAGQgCAGgFAEQgFAFgHACQgHACgIAAQgKAAgIgDg");
	this.shape_20.setTransform(18.1,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAmQgMgOAAgYQAAgXAMgOQAMgNASAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgSgbQgHAKAAARQAAASAHAKQAHAJALAAQAMAAAHgJQAHgJAAgTQAAgRgHgKQgGgJgNAAQgLAAgHAJg");
	this.shape_21.setTransform(9,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoBEIAAiEIARAAIAAAKQAGgGAHgDQAIgEAHAAQARAAAJANQAKAOAAAWQAAAXgMAPQgMAOgRAAQgGAAgGgCIgLgFIAAApgAgLgwQgGADgGAFIAAA1QAGAEAFABIAKABQALAAAHgJQAIgKAAgQQAAgQgGgKQgFgJgMAAQgFAAgHADg");
	this.shape_22.setTransform(-0.4,2.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAxQgFgDgFgDQgEgFgCgFQgCgHgBgGQABgKAEgHQAEgFAJgFQAJgEALgBIAWgCIAAgEQAAgFgBgEQgCgDgEgCIgHgDIgIgBQgFAAgIACIgQAFIgBAAIAAgRIAOgCIAQgCQAJAAAGACQAIABAFAEQAGAEACAGQACAHABAJIAABCIgRAAIAAgLIgFAFIgGADIgJAEIgJABQgHAAgFgCgAAHAAIgMABQgHACgEAEQgEAEgBAIQAAAIAGAFQAEAEAJAAQAGAAAHgDQAGgEAFgFIAAgZg");
	this.shape_23.setTransform(-10.7,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAxIAAhgIAQAAIAAAOQAIgIAGgEQAGgCAHAAIADAAIADAAIAAARIgBAAIgDAAIgGAAQgGAAgGACQgFADgGAGIAABEg");
	this.shape_24.setTransform(-17.5,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJA4QgHgIgBgQIAAg1IgKAAIAAgNIAKAAIAAgdIARAAIAAAdIAcAAIAAANIgcAAIAAAtIAAALQAAAFAAADQACADADACQADABAGAAIAIgBIAFgCIABAAIAAAPIgJACIgJABQgLAAgIgIg");
	this.shape_25.setTransform(-24.2,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAVAyIAAg2IAAgMQAAgHgCgDQgCgDgEgCQgEgCgGAAQgEAAgGADQgHAEgHAEIAABIIgQAAIAAhgIAQAAIAAAKQAIgGAHgEQAGgDAIAAQAOAAAIAJQAIAKAAASIAAA+g");
	this.shape_26.setTransform(-32.2,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeAmQgMgOAAgYQAAgXAMgOQAMgNASAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgSgbQgHAKAAARQAAASAHAKQAHAJALAAQAMAAAHgJQAHgJAAgTQAAgRgHgKQgGgJgNAAQgLAAgHAJg");
	this.shape_27.setTransform(-42.2,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgNA/QgLgEgIgJQgHgJgFgMQgEgNAAgQQAAgPAEgMQAEgMAIgJQAIgJAKgFQAMgEALAAIAMAAIAKADIAJADIAJAFIAAAVIgCAAIgFgGIgJgFQgFgDgGgCQgGgCgHAAQgJAAgGAEQgHADgFAHQgGAHgDAKQgDAKAAALQAAANADAKQADAJAGAHQAGAHAHADQAFADAJAAQAHAAAGgCIAMgEIAJgGIAFgFIABAAIAAAVIgIAEIgKADIgKADIgMABQgLAAgLgEg");
	this.shape_28.setTransform(-52.3,-0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFFFFF","#285050"],[0,1],0,19,0.2,-19).s().p("ApqC0QgqgBgdgdQgdgdAAgpIAAifQAAgpAdgeQAdgdAqAAITVAAQAqAAAdAdQAdAeAAApIAACfQAAApgdAdQgdAdgqABg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#285050").ss(2,1,1).p("AKyiWQgdgdgqAAIzVAAQgqAAgdAdQgdAeAAApIAACfQAAApAdAdQAdAeAqAAITVAAQAqAAAdgeQAdgdAAgpIAAifQAAgpgdgeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_29},{t:this.shape_30}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-18,144,36);


(lib.ComboBoxButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC66").ss(1,1,1).p("ABThDIilAAIBSCHg");
	this.shape.setTransform(0.3,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC66").s().p("AhRhDICkAAIhTCHg");
	this.shape_1.setTransform(0.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285050").s().p("AiSCvIAAlcIElAAIAAFcg");
	this.shape_2.setTransform(0.3,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.5,29.5,35);


(lib.TermSelection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{SP:0,nonSP:1,SnonP:2,nonSnonP:3,NoTerms:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// non-P
	this.instance = new lib.nonP("synched",0);
	this.instance.setTransform(160.5,-2.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// P
	this.instance_1 = new lib.PLetter("synched",0,false);
	this.instance_1.setTransform(160.9,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:160.4,y:-3},0).to({_off:true},1).wait(3));

	// non-S
	this.instance_2 = new lib.nonS("synched",0);
	this.instance_2.setTransform(-56,-2.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// S
	this.instance_3 = new lib.SLetter("synched",0,false);
	this.instance_3.setTransform(-56,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 1
	this.button_1 = new lib.ContrapositionButton();
	this.button_1.setTransform(22,94);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.ContrapositionButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-19.2,241.4,131.3);


(lib.STermMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{S:0,nonS:1,SMenu:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		S = 1;
		
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		this.button_sm.addEventListener("mouseover", fl_MouseOverHandler_sm.bind(this));
		
		function fl_MouseOverHandler_sm()
		{
			this.gotoAndStop("SMenu");
		}
	}
	this.frame_1 = function() {
		this.stop();
		S = 0;
	}
	this.frame_2 = function() {
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		this.SMenuOff.addEventListener("mouseover", fl_MouseOverHandler_smoff.bind(this));
		
		function fl_MouseOverHandler_smoff()
		{
			if (S == 1)
			{
				this.gotoAndStop("S");
			}
			else
			{
				this.gotoAndStop("nonS");
			}
		}
		
		this.PickS.addEventListener("click", fl_MouseClickHandler_S.bind(this));
		
		function fl_MouseClickHandler_S()
		{
			this.gotoAndStop("S");
			if (P == 1)
			{
				this.parent.TermSelected.gotoAndStop("SP");
				this.parent.Contraposition.gotoAndStop("SP");
			}
			else
			{
				this.parent.TermSelected.gotoAndStop("SnonP");
				this.parent.Contraposition.gotoAndStop("SnonP");
			}
		}
		
		
		this.PicknonS.addEventListener("click", fl_MouseClickHandler_nonS.bind(this));
		
		function fl_MouseClickHandler_nonS()
		{
			this.gotoAndStop("nonS");
			if (P == 1)
			{
				this.parent.TermSelected.gotoAndStop("nonSP");
				this.parent.Contraposition.gotoAndStop("nonSP");
			}
			else
			{
				this.parent.TermSelected.gotoAndStop("nonSnonP");
				this.parent.Contraposition.gotoAndStop("nonSnonP");
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Letters
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AhBBkQgUgEgPgHIAKgwIAGAAQAOAMATAHQATAIAWAAQAUAAALgHQAKgFAAgMQAAgEgBgDQgCgDgFgDIgNgGIgUgHIgbgJQgMgFgIgFQgJgGgEgJQgEgIAAgNQAAgeAbgSQAbgTAtAAQAWAAAUAEQAUAEAOAGIgKAvIgFAAQgLgKgRgHQgSgGgVAAQgTAAgKAFQgLAHAAAKQAAAEACAEQABADAFADIANAGIAVAGQAiAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgVAAQgbAAgUgFg");
	this.shape.setTransform(1.6,3.4);

	this.instance = new lib.nonS("synched",0);
	this.instance.setTransform(-2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{y:0.5}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{y:35.2}}]},1).wait(1));

	// DropDown
	this.button_sm = new lib.ComboBoxButton();
	this.button_sm.setTransform(71.3,0.5);
	new cjs.ButtonHelper(this.button_sm, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_sm).wait(3));

	// Menu Button
	this.PicknonS = new lib.TrackingMenu();
	this.PicknonS.setTransform(1.3,37.8);
	new cjs.ButtonHelper(this.PicknonS, 0, 1, 2);

	this.PickS = new lib.TrackingMenu();
	this.PickS.setTransform(1.3,2.9);
	new cjs.ButtonHelper(this.PickS, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.PickS},{t:this.PicknonS}]},2).wait(1));

	// Roll off
	this.SMenuOff = new lib.Rolloff();
	this.SMenuOff.setTransform(18,27);
	this.SMenuOff._off = true;
	new cjs.ButtonHelper(this.SMenuOff, 0, 1, 2, false, new lib.Rolloff(), 3);

	this.timeline.addTween(cjs.Tween.get(this.SMenuOff).wait(2).to({_off:false},0).wait(1));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285050").s().p("AgMBBIAAgiIAaAAIAAAigAgMgfIAAghIAaAAIAAAhg");
	this.shape_1.setTransform(-101.8,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285050").s().p("AA/BDIAAhKIgBgRQgBgHgCgFQgCgEgFgDQgEgCgHAAQgHAAgIAEQgIAFgIAHIAAAFIABAHIAABUIgVAAIAAhKIAAgRQgBgHgCgFQgCgEgFgDQgEgCgIAAQgHAAgIAFQgHAEgIAHIAABgIgWAAIAAiBIAWAAIAAAOQAJgIAIgFQAJgFAKAAQAMAAAJAFQAHAGAEAMQAKgLAKgGQAJgGALAAQAJAAAHADQAHACAFAGQAFAGADAJQADAJAAAOIAABUg");
	this.shape_2.setTransform(-116.1,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285050").s().p("AghBBIAAiBIAWAAIAAATQALgKAIgEQAJgFAIAAIAFAAIAEABIAAAXIgBAAIgFgBIgHAAQgJAAgJADQgGAFgIAHIAABbg");
	this.shape_3.setTransform(-129.8,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQARgTAZAAQAMAAAJADQAJAEAIAHQAGAIAEALQAEAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgeAAgQgRgAAigNQAAgJgBgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBDAAIAAAAg");
	this.shape_4.setTransform(-141.1,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_5.setTransform(-151.3,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_6.setTransform(-166.8,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285050").s().p("AgMBAQgLgFgIgIQgIgJgFgMQgEgNAAgRQAAgQAEgMQAFgMAIgJQAHgIAMgGQALgEAMAAQALAAAKADQAKADAHAEIAAAZIgBAAIgGgFIgJgFIgLgEQgGgCgGAAQgPAAgKANQgKANAAAWQAAAXAKANQAKANAPAAQALAAAKgEQAKgFAHgHIABAAIAAAZIgIADIgJAEIgKACIgLABQgMAAgLgEg");
	this.shape_7.setTransform(-176.3,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeARgTQAQgTAaAAQAMAAAJADQAJAEAHAHQAIAIADALQAEAKAAAQIAAAKIhYAAQgBAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgdAAgSgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgHAAgGADQgGACgFAFQgFAFgCAHQgDAGAAAIIBCAAIAAAAg");
	this.shape_8.setTransform(-188.2,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285050").s().p("AgVBwIgJgBIAAgUIABAAIAGABIAGABQAJAAAGgDQADgCADgEQADgFABgGIAAgQIAAhpIgVAAIAAgSIArAAIAACFQAAAVgMANQgMALgTAAgAAFhZIAAgWIAaAAIAAAWg");
	this.shape_9.setTransform(-199.3,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285050").s().p("AgQBaQgIgDgHgEIgCAGIgUAAIAAi0IAWAAIAABBQAIgHAKgGQAJgEALAAQAWAAANASQAMARAAAdQAAAhgPATQgQATgXAAQgJABgHgDgAgPgSQgJAEgHAHIAABIIAOAGQAHACAIAAQAPAAAJgMQAKgMAAgaQAAgXgHgKQgIgMgPgBQgHAAgKAFg");
	this.shape_10.setTransform(-207.5,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285050").s().p("AgZBAQgHgDgGgGQgGgGgDgJQgDgJAAgOIAAhTIAWAAIAABJIABARQAAAHADAFQADAFAEADQAFACAJAAQAGAAAJgFQAJgEAIgHIAAhgIAWAAIAACBIgWAAIAAgOQgKAJgKAEQgIAFgKAAQgJAAgHgDg");
	this.shape_11.setTransform(-221.3,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285050").s().p("AgbBBQgLgEgIgEIAAgZIABAAIAHAGIAKAFIAMAFQAHABAHAAIAKgBQAGgBADgCQAEgDACgDQABgDAAgFQAAgJgEgDQgEgEgLgDIgJgCIgNgEQgPgEgHgHQgGgJAAgNQAAgSANgLQANgLAVAAQAKAAALACQALADAIAEIAAAYIgBAAQgJgGgKgFQgKgEgLAAQgJABgHAEQgIAEAAAKQAAAIAFAEQAEAEAKADIAJACIANADQAOAEAIAGQAHAJAAAPQAAAHgDAIQgEAIgGAFQgHAGgJADQgJADgLAAQgOAAgLgDg");
	this.shape_12.setTransform(-233.1,5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAZAAQAMAAAKADQAKAEAGAHQAIAIADALQAEAKAAAQIAAAKIhYAAQAAAXALAMQALAMATAAQAHAAAHgCIANgEIAKgFIAGgFIACAAIAAAYIgKAEIgLAEIgLACIgNABQgeAAgRgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBCAAIAAAAg");
	this.shape_13.setTransform(-252.4,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285050").s().p("AAdBbIAAhLIgBgQQgBgGgDgFQgCgFgFgCQgFgDgIAAQgGAAgJAFQgIAEgJAHIAABgIgWAAIAAi1IAWAAIAABCQAKgIAKgFQAIgFAKAAQATAAALANQALANAAAWIAABVg");
	this.shape_14.setTransform(-265.3,2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_15.setTransform(-276,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_16.setTransform(-291.5,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285050").s().p("AgMBAQgLgFgIgIQgIgJgFgMQgEgNAAgRQAAgQAEgMQAFgMAIgJQAHgIAMgGQALgEAMAAQALAAAKADQAKADAHAEIAAAZIgBAAIgGgFIgJgFIgLgEQgGgCgGAAQgPAAgKANQgKANAAAWQAAAXAKANQAKANAPAAQALAAAKgEQAKgFAHgHIABAAIAAAZIgIADIgJAEIgKACIgLABQgMAAgLgEg");
	this.shape_17.setTransform(-301,5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeARgTQAQgTAaAAQAMAAAJADQAKAEAGAHQAIAIADALQAEAKAAAQIAAAKIhYAAQAAAXALAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgdAAgSgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgHAAgGADQgGACgFAFQgFAFgCAHQgDAGAAAIIBCAAIAAAAg");
	this.shape_18.setTransform(-312.9,5.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285050").s().p("AgJBbIAAi1IATAAIAAC1g");
	this.shape_19.setTransform(-321.9,2.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQASgTAYAAQAMAAAKADQAKAEAGAHQAHAIAFALQADAKAAAQIAAAKIhZAAQAAAXAMAMQALAMATAAQAHAAAHgCIANgEIAKgFIAHgFIABAAIAAAYIgKAEIgKAEIgMACIgNABQgdAAgSgRgAAjgNQAAgJgDgGQgBgHgEgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGgBAIIBEAAIAAAAg");
	this.shape_20.setTransform(-330.9,5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285050").s().p("AghBWQgNgEgMgGIAAgdIACAAQALALAPAGQAOAGAOAAQARAAAKgIQAKgIAAgNQAAgLgFgGQgFgHgMgDIgNgEIgQgEQgJgCgHgEQgIgCgFgFQgFgGgDgIQgDgIAAgKQAAgVAQgOQARgPAXAAQAPAAANADQANADALAFIAAAcIgCAAQgIgHgNgGQgNgGgOAAQgOAAgKAIQgKAHAAANQAAALAGAGQAFAHAMADIAQAEIARAFQASAFAJAKQAIALAAAQQAAAKgEAKQgEAKgIAHQgIAIgLAEQgKAEgOAAQgTAAgOgEg");
	this.shape_21.setTransform(-343.9,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.4,-16.6,446.7,38.1);


(lib.PTermMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{P:0,nonP:1,PMenu:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		P = 1;
		
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		this.button_pm.addEventListener("mouseover", fl_MouseOverHandler_pm.bind(this));
		
		function fl_MouseOverHandler_pm()
		{
			this.gotoAndStop("PMenu");
		}
	}
	this.frame_1 = function() {
		this.stop();
		P = 0;
	}
	this.frame_2 = function() {
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		this.PMenuOff.addEventListener("mouseover", fl_MouseOverHandler_pmoff.bind(this));
		
		function fl_MouseOverHandler_pmoff()
		{
			if (P == 1)
			{
				this.gotoAndStop("P");
			}
			else
			{
				this.gotoAndStop("nonP");
			}
		}
		
		this.PickP.addEventListener("click", fl_MouseClickHandler_P.bind(this));
		
		function fl_MouseClickHandler_P()
		{
			this.gotoAndStop("P");
			if (S == 1)
			{
				this.parent.TermSelected.gotoAndStop("SP");
				this.parent.Contraposition.gotoAndStop("SP");
			}
			else
			{
				this.parent.TermSelected.gotoAndStop("nonSP");
				this.parent.Contraposition.gotoAndStop("nonSP");
			}
		}
		
		this.PicknonP.addEventListener("click", fl_MouseClickHandler_nonP.bind(this));
		
		function fl_MouseClickHandler_nonP()
		{
			this.gotoAndStop("nonP");
			if (S == 1)
			{
				this.parent.TermSelected.gotoAndStop("SnonP");
				this.parent.Contraposition.gotoAndStop("SnonP");
			}
			else
			{
				this.parent.TermSelected.gotoAndStop("nonSnonP");
				this.parent.Contraposition.gotoAndStop("nonSnonP");
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Letters
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhkBlIAvjJIBHAAQAUAAAPACQAPADALAHQALAHAFAKQAGALAAAQQAAAkgeAVQgeAWg1AAIgUAAIgPBCgAgXgBIATAAQAWAAANgKQAOgKAAgSQAAgMgJgGQgIgFgRAAIgUAAg");
	this.shape.setTransform(2.3,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ag3ATIAJglIBmAAIgJAlg");
	this.shape_1.setTransform(20.8,73.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAOBOIAShLIADgNIABgLQAAgJgFgFQgEgEgNABQgFAAgIACIgPAHIgZBrIgxAAIAjiXIAxAAIgDARQAMgKANgGQAMgFAQAAQAVAAALAKQAMAKAAATIgBAIIgCAKIgXBig");
	this.shape_2.setTransform(3.4,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhCBBQgTgRAAgdQAAgTAHgSQAHgSANgOQANgOATgIQATgIAWAAQAiAAATAQQASAQAAAdQAAAUgHASQgIATgNAOQgOAOgSAIQgSAHgWAAQgiAAgSgQgAgHgqQgIAGgGAJQgGAIgDANQgDALAAANQAAAQAHAHQAHAHAMAAQAHAAAIgFQAIgFAGgJQAGgJADgMQAEgJAAgQQAAgOgHgIQgGgIgNAAQgJAAgHAFg");
	this.shape_3.setTransform(-15.7,74.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AAPBOIARhLIADgNIABgLQAAgJgFgFQgEgEgMABQgGAAgIACIgPAHIgZBrIgxAAIAjiXIAxAAIgDARQANgKAMgGQAMgFAQAAQAUAAAMAKQAMAKAAATIgBAIIgCAKIgXBig");
	this.shape_4.setTransform(-35.6,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AAOBOIAShMIADgMIABgMQAAgIgFgEQgEgFgNAAQgFABgIACIgPAHIgZBrIgxAAIAjiXIAxAAIgDARQAMgKANgFQAMgHAQABQAVgBALAKQAMALAAASIgBAJIgCAKIgXBig");
	this.shape_5.setTransform(3.4,112.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AAPBOIARhMIADgMIABgMQAAgIgFgEQgEgFgMAAQgGABgIACIgPAHIgZBrIgxAAIAjiXIAxAAIgDARQANgKAMgFQAMgHAQABQAUgBAMAKQAMALAAASIgBAJIgCAKIgXBig");
	this.shape_6.setTransform(-35.6,112.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AhkBlIAvjJIBHAAQAUAAAPACQAPADALAHQALAHAFAKQAGALAAAQQAAAkgeAVQgeAWg1AAIgUAAIgPBCgAgXgBIATAAQAWAAANgKQAOgKAAgSQAAgMgJgGQgIgFgRAAIgUAAg");
	this.shape_7.setTransform(2.3,74.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:2.3,y:74.4}}]}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{y:74.9}},{t:this.shape_2},{t:this.shape_1,p:{y:73.5}},{t:this.shape,p:{x:38.1,y:72.4}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{y:112.9}},{t:this.shape_5},{t:this.shape_1,p:{y:111.5}},{t:this.shape,p:{x:38.1,y:110.4}}]},1).wait(1));

	// DropDown
	this.button_pm = new lib.ComboBoxButton();
	this.button_pm.setTransform(71.3,72.5);
	new cjs.ButtonHelper(this.button_pm, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_pm).wait(3));

	// Menu Button
	this.PicknonP = new lib.TrackingMenu();
	this.PicknonP.setTransform(1.3,109.8);
	new cjs.ButtonHelper(this.PicknonP, 0, 1, 2);

	this.PickP = new lib.TrackingMenu();
	this.PickP.setTransform(1.3,74.9);
	new cjs.ButtonHelper(this.PickP, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.PickP},{t:this.PicknonP}]},2).wait(1));

	// Roll off
	this.PMenuOff = new lib.Rolloff();
	this.PMenuOff.setTransform(18,99);
	this.PMenuOff._off = true;
	new cjs.ButtonHelper(this.PMenuOff, 0, 1, 2, false, new lib.Rolloff(), 3);

	this.timeline.addTween(cjs.Tween.get(this.PMenuOff).wait(2).to({_off:false},0).wait(1));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285050").s().p("AgMBBIAAghIAZAAIAAAhgAgMgeIAAgiIAZAAIAAAig");
	this.shape_8.setTransform(-80.1,73.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285050").s().p("AA/BDIAAhKIgBgRQgBgHgCgFQgCgEgFgDQgEgCgHAAQgHAAgIAEQgIAFgIAHIAAAFIABAHIAABUIgVAAIAAhKIAAgRQgBgHgCgFQgCgEgFgDQgEgCgIAAQgHAAgIAFQgHAEgIAHIAABgIgWAAIAAiBIAWAAIAAAOQAJgIAIgFQAJgFAKAAQAMAAAJAFQAHAGAEAMQAKgLAKgGQAJgGALAAQAJAAAHADQAHACAFAGQAFAGADAJQADAJAAAOIAABUg");
	this.shape_9.setTransform(-94.4,73.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285050").s().p("AghBBIAAiBIAWAAIAAATQALgKAIgFQAJgEAIAAIAFABIAEAAIAAAXIgBAAIgFgBIgHgBQgJAAgJAFQgGADgIAIIAABbg");
	this.shape_10.setTransform(-108.1,73.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeARgTQAQgTAaAAQAMAAAJADQAJAEAHAHQAIAIADALQAEAKAAAQIAAAKIhYAAQgBAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgdAAgSgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgHAAgGADQgGACgFAFQgFAFgCAHQgDAGAAAIIBCAAIAAAAg");
	this.shape_11.setTransform(-119.4,73.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285050").s().p("AgMBLQgKgKAAgXIAAhGIgPAAIAAgTIAPAAIAAglIAWAAIAAAlIAmAAIAAATIgmAAIAAA8IAAAPQAAAGABAEQACAEAEADQAFABAHAAQAGAAAFgBIAHgCIABAAIAAAUIgMACIgMABQgQAAgKgKg");
	this.shape_12.setTransform(-129.6,71.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQARgTAZAAQALAAAKADQAJAEAIAHQAGAIAEALQAEAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgKAEIgMACIgNABQgeAAgQgRgAAigNQAAgJgBgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBDAAIAAAAg");
	this.shape_13.setTransform(-147.5,73.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285050").s().p("AgMBLQgKgKAAgXIAAhGIgPAAIAAgTIAPAAIAAglIAWAAIAAAlIAmAAIAAATIgmAAIAAA8IAAAPQAAAGABAEQACAEAEADQAFABAHAAQAGAAAFgBIAHgCIABAAIAAAUIgMACIgMABQgQAAgKgKg");
	this.shape_14.setTransform(-157.7,71.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285050").s().p("AgaBBQgIgDgFgFQgFgGgEgHQgDgIAAgJQABgOAFgJQAGgIAMgGQALgFAPgBIAegDIAAgFQABgHgDgFQgCgFgFgCQgEgDgGgBIgKgBQgIAAgKACQgLADgKAEIgBAAIAAgWIARgEQAMgCALAAQALAAAJACQAKACAHAFQAHAGAEAIQAEAJAAAMIAABYIgXAAIAAgOIgHAFIgJAGIgLAFQgDABgKAAQgIAAgHgDgAAKAAQgKAAgHACQgKACgFAGQgGAFAAAKQAAAMAGAFQAHAGAMAAQAJAAAHgEQAJgFAHgGIAAgjg");
	this.shape_15.setTransform(-168.5,73.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285050").s().p("AgMBAQgLgFgIgIQgIgIgFgNQgEgNAAgRQAAgPAEgNQAFgMAIgJQAHgJAMgFQALgEAMAAQALAAAKADQAKADAHAEIAAAZIgBAAIgGgEIgJgGIgLgEQgGgCgGAAQgPAAgKANQgKANAAAWQAAAXAKANQAKANAPAAQALAAAKgFQAKgEAHgHIABAAIAAAZIgIAEIgJACIgKADIgLABQgMAAgLgEg");
	this.shape_16.setTransform(-179.8,73.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285050").s().p("AgKBXIAAiBIAVAAIAACBgAgLhAIAAgWIAXAAIAAAWg");
	this.shape_17.setTransform(-188.1,71.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285050").s().p("AgYBYQgKgFgGgIQgGgIgEgNQgDgNAAgRQAAgRAEgKQAFgNAHgJQAIgJAKgFQAKgEAJgBQAKABAHACIAPAGIAAg5IAWAAIAAC1IgWAAIAAgNIgIAHIgJAFIgKAEIgKABQgKgBgJgEgAgVgLQgKALAAAYQAAAXAIAMQAHAMAQAAQAHAAAJgDQAJgEAHgHIAAhKQgIgEgGgBQgHgBgHAAQgPAAgKAMg");
	this.shape_18.setTransform(-198,71.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQARgTAZAAQAMAAAJADQAJAEAIAHQAGAIAEALQAEAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgeAAgQgRgAAigNQAAgJgBgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBDAAIAAAAg");
	this.shape_19.setTransform(-210.4,73.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285050").s().p("AghBBIAAiBIAWAAIAAATQALgKAIgFQAJgEAIAAIAFABIAEAAIAAAXIgBAAIgFgBIgHgBQgJAAgJAFQgGADgIAIIAABbg");
	this.shape_20.setTransform(-220.2,73.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285050").s().p("Ag1BbIAAiyIAWAAIAAAPQAIgIAKgFQAKgFAKAAQAWAAANASQAMASAAAdQAAAggPASQgQAUgXAAQgIAAgIgCQgHgDgIgEIAAA3gAgPhBQgIAFgIAGIAABIIAPAGQAGABAIAAQAPABAJgNQAKgNAAgWQAAgWgHgMQgIgNgQAAQgHAAgJAEg");
	this.shape_21.setTransform(-231.4,75.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQARgTAZAAQAMAAAJADQAJAEAIAHQAGAIAEALQAEAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgeAAgQgRgAAigNQAAgJgBgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBDAAIAAAAg");
	this.shape_22.setTransform(-252.2,73.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#285050").s().p("AAdBbIAAhLIgBgQQgBgGgDgFQgCgFgFgCQgFgDgIAAQgGAAgJAFQgJAEgIAHIAABgIgWAAIAAi1IAWAAIAABCQAKgIAJgFQAJgFAJAAQAUAAALANQALANAAAWIAABVg");
	this.shape_23.setTransform(-265.2,70.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#285050").s().p("AgMBLQgKgKAAgXIAAhGIgPAAIAAgTIAPAAIAAglIAWAAIAAAlIAmAAIAAATIgmAAIAAA8IAAAPQAAAGABAEQACAEAEADQAFABAHAAQAGAAAFgBIAHgCIABAAIAAAUIgMACIgMABQgQAAgKgKg");
	this.shape_24.setTransform(-275.8,71.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#285050").s().p("AgMBLQgKgKAAgXIAAhGIgPAAIAAgTIAPAAIAAglIAWAAIAAAlIAmAAIAAATIgmAAIAAA8IAAAPQAAAGABAEQACAEAEADQAFABAHAAQAGAAAFgBIAHgCIABAAIAAAUIgMACIgMABQgQAAgKgKg");
	this.shape_25.setTransform(-291.3,71.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#285050").s().p("AgMBAQgLgFgIgIQgIgIgFgNQgEgNAAgRQAAgPAEgNQAFgMAIgJQAHgJAMgFQALgEAMAAQALAAAKADQAKADAHAEIAAAZIgBAAIgGgEIgJgGIgLgEQgGgCgGAAQgPAAgKANQgKANAAAWQAAAXAKANQAKANAPAAQALAAAKgFQAKgEAHgHIABAAIAAAZIgIAEIgJACIgKADIgLABQgMAAgLgEg");
	this.shape_26.setTransform(-300.8,73.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQAQgTAZAAQANAAAJADQAJAEAIAHQAHAIAEALQADAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAIgFIAAAAIAAAYIgJAEIgKAEIgMACIgNABQgeAAgQgRgAAjgNQAAgJgCgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBEAAIAAAAg");
	this.shape_27.setTransform(-312.7,73.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#285050").s().p("AgKBbIAAi1IAVAAIAAC1g");
	this.shape_28.setTransform(-321.8,70.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAaAAQAMAAAJADQAJAEAHAHQAIAIADALQAEAKAAAQIAAAKIhYAAQAAAXALAMQALAMASAAQAIAAAHgCIAMgEIALgFIAGgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgeAAgRgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBCAAIAAAAg");
	this.shape_29.setTransform(-330.8,73.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#285050").s().p("AghBWQgNgEgMgGIAAgdIACAAQALALAPAGQAOAGAOAAQARAAAKgIQAKgIAAgNQAAgLgFgGQgFgHgMgDIgNgEIgQgEQgJgCgHgEQgIgCgFgFQgFgGgDgIQgDgIAAgKQAAgVAQgOQARgPAXAAQAPAAANADQANADALAFIAAAcIgCAAQgIgHgNgGQgNgGgOAAQgOAAgKAIQgKAHAAANQAAALAGAGQAFAHAMADIAQAEIARAFQASAFAJAKQAIALAAAQQAAAKgEAKQgEAKgIAHQgIAIgLAEQgKAEgOAAQgTAAgOgEg");
	this.shape_30.setTransform(-343.7,71.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.2,54,446.5,38.5);


(lib.CSMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"A":0,"E":1,"I":2,"O":3,TypeMenu:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		A = 1;
		E = 0;
		I = 0;
		O = 0;
		
		var frequency = 100;
		stage.enableMouseOver(frequency);
		this.button_da.addEventListener("mouseover", fl_MouseOverHandler_da.bind(this));
		
		function fl_MouseOverHandler_da()
		{
			this.gotoAndStop("TypeMenu");
		}
	}
	this.frame_1 = function() {
		this.stop();
		A = 0;
		E = 1;
		I = 0;
		O = 0;
	}
	this.frame_2 = function() {
		this.stop();
		A = 0;
		E = 0;
		I = 1;
		O = 0;
	}
	this.frame_3 = function() {
		this.stop();
		A = 0;
		E = 0;
		I = 0;
		O = 1;
	}
	this.frame_4 = function() {
		var frequency = 100;
		stage.enableMouseOver(frequency);
		this.Moff.addEventListener("mouseover", fl_MouseOverHandler_Moff.bind(this));
		
		function fl_MouseOverHandler_Moff()
		{
			if (A == 1)
			{
				this.gotoAndStop("A");
			}
			else if (E == 1)
			{
				this.gotoAndStop("E");
			}
			else if (I == 1)
			{
				this.gotoAndStop("I");
			} else
			{
				this.gotoAndStop("O");
			}
		}
		
		this.button_a.addEventListener("click", fl_ClickToGoToAndStopAtFrame_a.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_a()
		{
			this.gotoAndStop("A");
			this.parent.CSType.gotoAndStop("A");
			if (S == 1 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("SP");
					this.parent.Contraposition.gotoAndStop("SP");
				}
				else if (S == 1 && P == 0)
				{
					this.parent.TermSelected.gotoAndStop("SnonP");
					this.parent.Contraposition.gotoAndStop("SnonP");
				}
				else if (S == 0 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("nonSP");
					this.parent.Contraposition.gotoAndStop("nonSP");
				}
				else
				{
					this.parent.TermSelected.gotoAndStop("nonSnonP");
					this.parent.Contraposition.gotoAndStop("nonSnonP");
				}
		}
		
		this.button_e.addEventListener("click", fl_ClickToGoToAndStopAtFrame_e.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_e()
		{
			this.gotoAndStop("E");
			this.parent.CSType.gotoAndStop("E");
			if (S == 1 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("SP");
					this.parent.Contraposition.gotoAndStop("SP");
				}
				else if (S == 1 && P == 0)
				{
					this.parent.TermSelected.gotoAndStop("SnonP");
					this.parent.Contraposition.gotoAndStop("SnonP");
				}
				else if (S == 0 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("nonSP");
					this.parent.Contraposition.gotoAndStop("nonSP");
				}
				else
				{
					this.parent.TermSelected.gotoAndStop("nonSnonP");
					this.parent.Contraposition.gotoAndStop("nonSnonP");
				}
		}
		
		this.button_i.addEventListener("click", fl_ClickToGoToAndStopAtFrame_i.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_i()
		{
			this.gotoAndStop("I");
			this.parent.CSType.gotoAndStop("I");
			if (S == 1 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("SP");
					this.parent.Contraposition.gotoAndStop("SP");
				}
				else if (S == 1 && P == 0)
				{
					this.parent.TermSelected.gotoAndStop("SnonP");
					this.parent.Contraposition.gotoAndStop("SnonP");
				}
				else if (S == 0 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("nonSP");
					this.parent.Contraposition.gotoAndStop("nonSP");
				}
				else
				{
					this.parent.TermSelected.gotoAndStop("nonSnonP");
					this.parent.Contraposition.gotoAndStop("nonSnonP");
				}
		}
		
		this.button_o.addEventListener("click", fl_ClickToGoToAndStopAtFrame_o.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_o()
		{
			this.gotoAndStop("O");
			this.parent.CSType.gotoAndStop("O");
			if (S == 1 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("SP");
					this.parent.Contraposition.gotoAndStop("SP");
				}
				else if (S == 1 && P == 0)
				{
					this.parent.TermSelected.gotoAndStop("SnonP");
					this.parent.Contraposition.gotoAndStop("SnonP");
				}
				else if (S == 0 && P == 1)
				{
					this.parent.TermSelected.gotoAndStop("nonSP");
					this.parent.Contraposition.gotoAndStop("nonSP");
				}
				else
				{
					this.parent.TermSelected.gotoAndStop("nonSnonP");
					this.parent.Contraposition.gotoAndStop("nnonSnonP");
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Letters
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285050").s().p("AAsBlIgNgpIg+AAIgNApIgzAAIBFjJIA1AAIBFDJgAAUAXIgUhBIgUBBIAoAAg");
	this.shape.setTransform(-25.6,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285050").s().p("AhDBlIAAjJICHAAIAAAnIhUAAIAAAjIBOAAIAAAlIhOAAIAAAzIBUAAIAAAng");
	this.shape_1.setTransform(-26.3,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285050").s().p("Ag1BlIAAgjIAdAAIAAiDIgdAAIAAgjIBrAAIAAAjIgdAAIAACDIAdAAIAAAjg");
	this.shape_2.setTransform(-28.5,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285050").s().p("AhHBNQgagcAAgxQAAgwAagcQAagcAtAAQAtgBAbAdQAaAdAAAvQAAAxgaAcQgbAcgtAAQgtAAgagcgAgPg/QgIAEgHAJQgHAHgDANQgEAOAAAQQAAASADANQAEAMAGAIQAHAJAIAEQAJADAHAAQAJAAAIgDQAJgFAGgIQAGgIAEgNQADgLAAgTQAAgRgDgNQgEgMgGgIQgHgJgIgDQgIgEgJAAQgIAAgHADg");
	this.shape_3.setTransform(-24.5,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285050").s().p("AhHBNQgagdAAgwQAAgwAagbQAagdAtAAQAtAAAbAcQAaAcAAAwQAAAxgaAcQgbAcgtAAQgtABgagdgAgPg/QgIAEgHAJQgHAHgDAOQgEANAAAQQAAASADANQAEANAGAHQAHAJAIAEQAJADAHABQAJAAAIgFQAJgDAGgJQAGgJAEgLQADgMAAgTQAAgQgDgNQgEgNgGgIQgHgJgIgDQgIgEgJAAQgIAAgHADg");
	this.shape_4.setTransform(-25.9,107.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285050").s().p("AgMBBIAAgiIAaAAIAAAigAgMgfIAAghIAaAAIAAAhg");
	this.shape_5.setTransform(-101.8,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAZAAQAMAAAKADQAKAEAGAHQAHAIAFALQADAKAAAQIAAAKIhYAAQAAAXALAMQAMAMASAAQAHAAAHgCIANgEIAKgFIAHgFIABAAIAAAYIgKAEIgLAEIgLACIgNABQgdAAgSgRgAAjgNQgBgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBDAAIAAAAg");
	this.shape_6.setTransform(-112.3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285050").s().p("Ag1BbIAAixIAWAAIAAANQAIgHAKgFQAKgFAKAAQAWAAANASQAMARAAAfQAAAegPATQgQAUgXAAQgIAAgIgCQgHgDgIgEIAAA3gAgPhBQgIAEgIAHIAABIIAPAGQAGABAIAAQAPAAAJgNQAKgMAAgWQAAgWgHgNQgIgMgQAAQgHAAgJAEg");
	this.shape_7.setTransform(-124.9,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285050").s().p("AghBZIAXg3Igwh6IAYAAIAiBfIAkhfIAXAAIhFCxg");
	this.shape_8.setTransform(-137.9,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_9.setTransform(-147.5,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_10.setTransform(-163,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285050").s().p("AAdBDIAAhJIgBgRQgBgHgDgFQgCgFgFgCQgEgDgJAAQgGAAgJAFQgJAEgIAHIAABgIgWAAIAAiBIAWAAIAAAOQAKgIAJgFQAJgFAKAAQATAAALANQALANAAAYIAABTg");
	this.shape_11.setTransform(-173.7,5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQAQgTAZAAQANAAAJADQAJAEAIAHQAHAIAEALQADAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAIgFIAAAAIAAAYIgJAEIgKAEIgMACIgNABQgeAAgQgRgAAjgNQAAgJgCgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBEAAIAAAAg");
	this.shape_12.setTransform(-186.7,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285050").s().p("AA/BDIAAhKIgBgRQgBgHgCgFQgCgEgFgDQgEgCgHAAQgHAAgIAEQgIAFgIAHIAAAFIABAHIAABUIgVAAIAAhKIAAgRQgBgHgCgFQgCgEgFgDQgEgCgIAAQgHAAgIAFQgHAEgIAHIAABgIgWAAIAAiBIAWAAIAAAOQAJgIAIgFQAJgFAKAAQAMAAAJAFQAHAGAEAMQAKgLAKgGQAJgGALAAQAJAAAHADQAHACAFAGQAFAGADAJQADAJAAAOIAABUg");
	this.shape_13.setTransform(-203.1,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQARgTAZAAQALAAAKADQAJAEAIAHQAGAIAEALQAEAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgKAEIgMACIgNABQgeAAgQgRgAAigNQAAgJgBgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBDAAIAAAAg");
	this.shape_14.setTransform(-219.5,5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_15.setTransform(-229.7,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285050").s().p("AgaBBQgIgDgFgFQgFgGgEgHQgDgIAAgJQABgOAFgJQAGgIAMgGQALgFAPgBIAegDIAAgFQABgHgDgFQgCgFgFgCQgEgDgGgBIgKgBQgIAAgKACQgLADgKAEIgBAAIAAgWIARgEQAMgCALAAQALAAAJACQAKACAHAFQAHAGAEAIQAEAJAAAMIAABYIgXAAIAAgOIgHAFIgJAGIgLAFQgDABgKAAQgIAAgHgDgAAKAAQgKAAgHACQgKACgFAGQgGAFAAAKQAAAMAGAFQAHAGAMAAQAJAAAHgEQAJgFAHgGIAAgjg");
	this.shape_16.setTransform(-240.5,5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_17.setTransform(-250.3,3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285050").s().p("AgbBBQgLgEgIgEIAAgZIABAAIAHAGIAKAFIAMAFQAHABAHAAIAKgBQAGgBADgCQAEgDACgDQABgDAAgFQAAgJgEgDQgEgEgLgDIgJgCIgNgEQgPgEgHgHQgGgJAAgNQAAgSANgLQANgLAVAAQAKAAALACQALADAIAEIAAAYIgBAAQgJgGgKgFQgKgEgLAAQgJABgHAEQgIAEAAAKQAAAIAFAEQAEAEAKADIAJACIANADQAOAEAIAGQAHAJAAAPQAAAHgDAIQgEAIgGAFQgHAGgJADQgJADgLAAQgOAAgLgDg");
	this.shape_18.setTransform(-259.6,5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAZAAQAMAAAKADQAKAEAGAHQAHAIAFALQADAKAAAQIAAAKIhYAAQAAAXALAMQAMAMASAAQAHAAAHgCIANgEIAKgFIAHgFIABAAIAAAYIgKAEIgLAEIgLACIgNABQgdAAgSgRgAAjgNQAAgJgDgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBDAAIAAAAg");
	this.shape_19.setTransform(-278.8,5.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285050").s().p("AAdBbIAAhLIgBgQQgBgGgCgFQgDgFgFgCQgFgDgIAAQgGAAgJAFQgIAEgJAHIAABgIgWAAIAAi1IAWAAIAABCQAKgIAKgFQAIgFAKAAQATAAALANQALANAAAWIAABVg");
	this.shape_20.setTransform(-291.8,2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_21.setTransform(-302.4,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_22.setTransform(-317.9,3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#285050").s().p("AgMBAQgLgFgIgIQgIgJgFgMQgEgNAAgRQAAgQAEgMQAFgMAIgJQAHgIAMgGQALgEAMAAQALAAAKADQAKADAHAEIAAAZIgBAAIgGgFIgJgFIgLgEQgGgCgGAAQgPAAgKANQgKANAAAWQAAAXAKANQAKANAPAAQALAAAKgEQAKgFAHgHIABAAIAAAZIgIADIgJAEIgKACIgLABQgMAAgLgEg");
	this.shape_23.setTransform(-327.4,5.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAaAAQAMAAAJADQAKAEAGAHQAIAIADALQAEAKAAAQIAAAKIhYAAQAAAXALAMQAMAMARAAQAIAAAHgCIAMgEIALgFIAGgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgeAAgRgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBCAAIAAAAg");
	this.shape_24.setTransform(-339.3,5.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#285050").s().p("AgJBbIAAi1IATAAIAAC1g");
	this.shape_25.setTransform(-348.4,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeAQgTQASgTAYAAQANAAAJADQAJAEAIAHQAGAIAFALQADAKAAAQIAAAKIhZAAQAAAXAMAMQALAMATAAQAHAAAHgCIANgEIAJgFIAIgFIABAAIAAAYIgKAEIgKAEIgMACIgNABQgdAAgRgRgAAjgNQAAgJgCgGQgDgHgDgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgDAHQgCAGgBAIIBEAAIAAAAg");
	this.shape_26.setTransform(-357.4,5.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#285050").s().p("AghBWQgNgEgMgGIAAgdIACAAQALALAPAGQAOAGAOAAQARAAAKgIQAKgIAAgNQAAgLgFgGQgFgHgMgDIgNgEIgQgEQgJgCgHgEQgIgCgFgFQgFgGgDgIQgDgIAAgKQAAgVAQgOQARgPAXAAQAPAAANADQANADALAFIAAAcIgCAAQgIgHgNgGQgNgGgOAAQgOAAgKAIQgKAHAAANQAAALAGAGQAFAHAMADIAQAEIARAFQASAFAJAKQAIALAAAQQAAAKgEAKQgEAKgIAHQgIAIgLAEQgKAEgOAAQgTAAgOgEg");
	this.shape_27.setTransform(-370.3,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:-26.3,y:3.2}}]},1).to({state:[{t:this.shape_2,p:{x:-28.5,y:3.2}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape},{t:this.shape_1,p:{x:-25.7,y:36.9}},{t:this.shape_2,p:{x:-26.1,y:72.9}},{t:this.shape_4}]},1).wait(1));

	// DropDown
	this.button_da = new lib.ComboBoxButton();
	this.button_da.setTransform(44.6,0.5);
	new cjs.ButtonHelper(this.button_da, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_da).wait(5));

	// Menu Button
	this.button_o = new lib.TrackingMenu();
	this.button_o.setTransform(-25.2,106.8);
	new cjs.ButtonHelper(this.button_o, 0, 1, 2);

	this.button_i = new lib.TrackingMenu();
	this.button_i.setTransform(-25.2,72.3);
	new cjs.ButtonHelper(this.button_i, 0, 1, 2);

	this.button_e = new lib.TrackingMenu();
	this.button_e.setTransform(-25.2,37.8);
	new cjs.ButtonHelper(this.button_e, 0, 1, 2);

	this.button_a = new lib.TrackingMenu();
	this.button_a.setTransform(-25.2,2.9);
	new cjs.ButtonHelper(this.button_a, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_a},{t:this.button_e},{t:this.button_i},{t:this.button_o}]},4).wait(1));

	// Roll off
	this.Moff = new lib.Rolloff();
	this.Moff.setTransform(-8.5,27);
	this.Moff._off = true;
	new cjs.ButtonHelper(this.Moff, 0, 1, 2, false, new lib.Rolloff(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Moff).wait(4).to({_off:false},0).wait(1));

	// Background
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#285050").s().p("AgMBBIAAgiIAaAAIAAAigAgMgfIAAghIAaAAIAAAhg");
	this.shape_28.setTransform(-101.8,5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAZAAQAMAAAKADQAKAEAGAHQAHAIAFALQADAKAAAQIAAAKIhYAAQAAAXALAMQAMAMASAAQAHAAAHgCIANgEIAKgFIAHgFIABAAIAAAYIgKAEIgLAEIgLACIgNABQgdAAgSgRgAAjgNQgBgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBDAAIAAAAg");
	this.shape_29.setTransform(-112.3,5.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#285050").s().p("Ag1BbIAAixIAWAAIAAANQAIgHAKgFQAKgFAKAAQAWAAANASQAMARAAAfQAAAegPATQgQAUgXAAQgIAAgIgCQgHgDgIgEIAAA3gAgPhBQgIAEgIAHIAABIIAPAGQAGABAIAAQAPAAAJgNQAKgMAAgWQAAgWgHgNQgIgMgQAAQgHAAgJAEg");
	this.shape_30.setTransform(-124.9,7.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#285050").s().p("AghBZIAXg3Igwh6IAYAAIAiBfIAkhfIAXAAIhFCxg");
	this.shape_31.setTransform(-137.9,7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_32.setTransform(-147.5,3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_33.setTransform(-163,3.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#285050").s().p("AAdBDIAAhJIgBgRQgBgHgDgFQgCgFgFgCQgEgDgJAAQgGAAgJAFQgJAEgIAHIAABgIgWAAIAAiBIAWAAIAAAOQAKgIAJgFQAJgFAKAAQATAAALANQALANAAAYIAABTg");
	this.shape_34.setTransform(-173.7,5.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQAQgTAZAAQANAAAJADQAJAEAIAHQAHAIAEALQADAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAIgFIAAAAIAAAYIgJAEIgKAEIgMACIgNABQgeAAgQgRgAAjgNQAAgJgCgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBEAAIAAAAg");
	this.shape_35.setTransform(-186.7,5.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#285050").s().p("AA/BDIAAhKIgBgRQgBgHgCgFQgCgEgFgDQgEgCgHAAQgHAAgIAEQgIAFgIAHIAAAFIABAHIAABUIgVAAIAAhKIAAgRQgBgHgCgFQgCgEgFgDQgEgCgIAAQgHAAgIAFQgHAEgIAHIAABgIgWAAIAAiBIAWAAIAAAOQAJgIAIgFQAJgFAKAAQAMAAAJAFQAHAGAEAMQAKgLAKgGQAJgGALAAQAJAAAHADQAHACAFAGQAFAGADAJQADAJAAAOIAABUg");
	this.shape_36.setTransform(-203.1,5.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeARgTQARgTAZAAQALAAAKADQAJAEAIAHQAGAIAEALQAEAKAAAQIAAAKIhZAAQAAAXAMAMQAMAMARAAQAIAAAHgCIAMgEIAKgFIAHgFIABAAIAAAYIgJAEIgKAEIgMACIgNABQgeAAgQgRgAAigNQAAgJgBgGQgCgHgEgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgCAHQgDAGgBAIIBDAAIAAAAg");
	this.shape_37.setTransform(-219.5,5.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_38.setTransform(-229.7,3.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#285050").s().p("AgaBBQgIgDgFgFQgFgGgEgHQgDgIAAgJQABgOAFgJQAGgIAMgGQALgFAPgBIAegDIAAgFQABgHgDgFQgCgFgFgCQgEgDgGgBIgKgBQgIAAgKACQgLADgKAEIgBAAIAAgWIARgEQAMgCALAAQALAAAJACQAKACAHAFQAHAGAEAIQAEAJAAAMIAABYIgXAAIAAgOIgHAFIgJAGIgLAFQgDABgKAAQgIAAgHgDgAAKAAQgKAAgHACQgKACgFAGQgGAFAAAKQAAAMAGAFQAHAGAMAAQAJAAAHgEQAJgFAHgGIAAgjg");
	this.shape_39.setTransform(-240.5,5.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_40.setTransform(-250.3,3.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#285050").s().p("AgbBBQgLgEgIgEIAAgZIABAAIAHAGIAKAFIAMAFQAHABAHAAIAKgBQAGgBADgCQAEgDACgDQABgDAAgFQAAgJgEgDQgEgEgLgDIgJgCIgNgEQgPgEgHgHQgGgJAAgNQAAgSANgLQANgLAVAAQAKAAALACQALADAIAEIAAAYIgBAAQgJgGgKgFQgKgEgLAAQgJABgHAEQgIAEAAAKQAAAIAFAEQAEAEAKADIAJACIANADQAOAEAIAGQAHAJAAAPQAAAHgDAIQgEAIgGAFQgHAGgJADQgJADgLAAQgOAAgLgDg");
	this.shape_41.setTransform(-259.6,5.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAZAAQAMAAAKADQAKAEAGAHQAHAIAFALQADAKAAAQIAAAKIhYAAQAAAXALAMQAMAMASAAQAHAAAHgCIANgEIAKgFIAHgFIABAAIAAAYIgKAEIgLAEIgLACIgNABQgdAAgSgRgAAjgNQAAgJgDgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBDAAIAAAAg");
	this.shape_42.setTransform(-278.8,5.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#285050").s().p("AAdBbIAAhLIgBgQQgBgGgCgFQgDgFgFgCQgFgDgIAAQgGAAgJAFQgIAEgJAHIAABgIgWAAIAAi1IAWAAIAABCQAKgIAKgFQAIgFAKAAQATAAALANQALANAAAWIAABVg");
	this.shape_43.setTransform(-291.8,2.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_44.setTransform(-302.4,3.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#285050").s().p("AgMBLQgKgKAAgWIAAhHIgPAAIAAgSIAPAAIAAgmIAWAAIAAAmIAmAAIAAASIgmAAIAAA8IAAAPQAAAGABAFQACAEAEACQAFABAHAAQAGAAAFgBIAHgDIABAAIAAAUIgMADIgMABQgQAAgKgKg");
	this.shape_45.setTransform(-317.9,3.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#285050").s().p("AgMBAQgLgFgIgIQgIgJgFgMQgEgNAAgRQAAgQAEgMQAFgMAIgJQAHgIAMgGQALgEAMAAQALAAAKADQAKADAHAEIAAAZIgBAAIgGgFIgJgFIgLgEQgGgCgGAAQgPAAgKANQgKANAAAWQAAAXAKANQAKANAPAAQALAAAKgEQAKgFAHgHIABAAIAAAZIgIADIgJAEIgKACIgLABQgMAAgLgEg");
	this.shape_46.setTransform(-327.4,5.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#285050").s().p("AgmAzQgRgSAAggQAAgeAQgTQARgTAaAAQAMAAAJADQAKAEAGAHQAIAIADALQAEAKAAAQIAAAKIhYAAQAAAXALAMQAMAMARAAQAIAAAHgCIAMgEIALgFIAGgFIABAAIAAAYIgJAEIgLAEIgLACIgNABQgeAAgRgRgAAigNQAAgJgCgGQgCgHgDgEQgEgFgGgDQgGgCgJAAQgGAAgHADQgGACgFAFQgFAFgDAHQgCAGAAAIIBCAAIAAAAg");
	this.shape_47.setTransform(-339.3,5.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#285050").s().p("AgJBbIAAi1IATAAIAAC1g");
	this.shape_48.setTransform(-348.4,2.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#285050").s().p("AglAzQgSgSAAggQAAgeAQgTQASgTAYAAQANAAAJADQAJAEAIAHQAGAIAFALQADAKAAAQIAAAKIhZAAQAAAXAMAMQALAMATAAQAHAAAHgCIANgEIAJgFIAIgFIABAAIAAAYIgKAEIgKAEIgMACIgNABQgdAAgRgRgAAjgNQAAgJgCgGQgDgHgDgEQgEgFgGgDQgGgCgJAAQgHAAgFADQgHACgFAFQgFAFgDAHQgCAGgBAIIBEAAIAAAAg");
	this.shape_49.setTransform(-357.4,5.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#285050").s().p("AghBWQgNgEgMgGIAAgdIACAAQALALAPAGQAOAGAOAAQARAAAKgIQAKgIAAgNQAAgLgFgGQgFgHgMgDIgNgEIgQgEQgJgCgHgEQgIgCgFgFQgFgGgDgIQgDgIAAgKQAAgVAQgOQARgPAXAAQAPAAANADQANADALAFIAAAcIgCAAQgIgHgNgGQgNgGgOAAQgOAAgKAIQgKAHAAANQAAALAGAGQAFAHAMADIAQAEIARAFQASAFAJAKQAIALAAAQQAAAKgEAKQgEAKgIAHQgIAIgLAEQgKAEgOAAQgTAAgOgEg");
	this.shape_50.setTransform(-370.3,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.8,-16.6,446.5,37.8);


(lib.Contraposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"SP":0,"nonSP":25,"SnonP":50,"nonSnonP":75});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.button_1.addEventListener("click", fl_MouseClickHandler_1.bind(this));
		
		function fl_MouseClickHandler_1()
		{
			this.parent.TermSelected.gotoAndStop("NoTerms");
			this.play();
		}
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
		
		this.button_2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.parent.TermSelected.gotoAndStop("NoTerms");
			this.play();
		}
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
		
		this.button_3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.parent.TermSelected.gotoAndStop("NoTerms");
			this.play();
		}
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.stop();
		
		this.button_4.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.parent.TermSelected.gotoAndStop("NoTerms");
			this.play();
		}
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1).call(this.frame_25).wait(24).call(this.frame_49).wait(1).call(this.frame_50).wait(24).call(this.frame_74).wait(1).call(this.frame_75).wait(24).call(this.frame_99).wait(1));

	// P Morphing
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhkBlIAvjJIBHAAQAUAAAPACQAPADALAHQALAHAFAKQAGALAAAQQAAAkgeAVQgeAWg1AAIgUAAIgPBCgAgXgBIATAAQAWAAANgKQAOgKAAgSQAAgMgJgGQgIgFgRAAIgUAAg");
	this.shape.setTransform(-54.1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AiCBlIAeh+IAMgjIACgMIAIgYIABAAIAYAAIATAAIAKAAIABgEIBIAAQATAAAPACQAlARAFAKQAGALAAAQQAAAkgeAVQgdAVgzABQgMADgLABIgPA+gAgaACIgBADIAQAAIAGgBIAJgEIAEAAQAOAAALgCQAQgBALgHIABgBQAOgKAAgSQAAgMgIgGIgGgCQgFgKgJgHQgJgIgNgEIgLgDIgIgBIgeAAIgIAfIgCAAQgDAAgFAHIgGAMIgMAvIAQAAIAHgBIAGgCIAFAAg");
	this.shape_1.setTransform(-53.9,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgnBlIADgMIgEAAIgDAKIgLACIgpAAIABgEIgNgCIgBAEIgLACIgqAAIAfiAIAPggIACgJIAKgYIABAAIAYgBIATABIAXAAIAYgBIAQABIACgIIBJAAQAUAAAPACQAkARAGAKQAGALgBAQQAAAkgeAVQgdAWg3AAIgUAAIgPBCgAg2AFIAMADIAFAAIAHABIgBAFIAMAAIgCALIAHAAQAJgCAFgDQAOgHAFgLIADAAQATAAAOgDIAGgBIACgDQAJgGAEgIIABgKQABgMgHgHIgFgCIgCgFIgEgHQgDgFgFgFIgXgMIgCgBIgYAAIgFAbIgFAEIgJgBIgFAAIgCAAIgIAAQgDgCgEgCIgBAAIgKgCIgEAAIgLABQgCABgHAFIgKALIgOA5IAUAAIAFgEQALgGAJgGIgCAHg");
	this.shape_2.setTransform(-53.7,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgJBlIAEgRIggAAIgDAOIgLADIgqAAIAGgXIgGAMIgEAHQgUgDgTgGIgCAKIgKADIgrAAIAfiCIATgdIABgHIALgWIABAAQAMgCANAAQAMAAALACIABgBQAZgBAXACIAAAAQANgCANAAQAOAAAOADIAJACIAEgQIBJAAQAUAAAPACQAlARAFAKQAGALAAAQQAAAkgeAVQgeAWg3AAIgUAAIgPBCgAhKAVIAEAAIAJACIAHABIAHABQAIAAAHgCIABAAIAFgCIgBACIAOAAIAGgGQAKgLAKgLIABAAIAEgBIgDALIAUAAIAJAAQASgBANgEIACgBIAIAAIAFAAQAVgBALgJQANgJABgRIAAgCQAAgGgCgEQgDgFgEgDQgIgFgnAAIgDAPIgdgBQgDgJgHgHIgJgGIgCALIgLgBIgNABIgDACIgFAEIgJAFIgFgCIgKgCIgIAAIgLABIgEACIgBACIgBgBIgCgCQgCgFgGgCIgBgBQgGgCgJAAQgGAAgGABIgCABIgJAFIgOAKIgQBCIAWAAIAGgGQAMgLAKgLIAIgDIAGgCIACAAgAgWAEIAQgrIgCgFIACADIABABQAFAJAAAKIAAAEQgBAIgFAHIgDACIgFAGIgHAEIgDACg");
	this.shape_3.setTransform(-53.5,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AATBlIAMg0IgMAdIgoAAIAGgdIgHADIgGACIgKAqIgJAFIgsAAIAKgrIgIAAIgUAgIgFAFQgVgFgSgHIAAgBQAEgXAFgWIAEgMIgFAHIgJAAIACgHIAHgEIAHgBIADgBIABAAIAHgBIAMgBIAPAAIAJADIAGACIAFADIAHABIANg6IAMgNIgDgEIgJgJIgHgHIgFgEIgEgDIgGgDIgJgFIADgFQAiAAAdAEIgMAXIgLANIACAEQAGAKADANQACAHgBAIIgDAGQgGALgKAHIADAAQAIgBAHgDIABgBIgDAQIAQAAIACgHIAHgEIAGgBIAEgSIAag8IgDgCIgOgLQgKgGgRgDIgDgBIABgCQANgCAMAAQAQAAAOADQAJADAHAEIAJAGIgeAAIgEALIACACQAHAIACAJQACAHABAJIgBAAIgCAMIgGABIgHACIgIADQgJAMgHAMIABAAIAEgBIANgBIAKAAIAFgJIAMAAIgBACIABAAIACgCIAGAAQAYAAARgHIAJgCIAQAAQASAAAMgGIAHgEQAOgKAAgSQAAgMgIgGQgGgEgVgBIgUAAIgGAWQgHgCgQgBIgcgBIgBABIAGgYIgCgCIgBAAIADAAIAIgfIBJAAQATAAAQACQAkARAFAKQAGALAAAQQAAAkgeAVQgeAWg3AAIgUAAIgPBCgAjdBlIAfiFIAWgaIABgDIANgWIABAAQAMgCAOAAQAQAAANADIAHACIgMAVIgFgBQgHAAgGACIgNAFIgSAJIgSBMIAQAAIgPBAIgJAFgAgZhRIAAAAg");
	this.shape_4.setTransform(-53.3,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AAyBlIAPhEIgIAAIgVAnIgmAAIAKgyIgHAJQgDAHgHAFQgIAGgJAEIAHgfIAHgFIALgCIABgBIAKgTIAJgDIAAgCIAAABIAAACQgCAKgEAKIADAAQAJgBAGABQAFACADADIABAAIgBADIADgBIACABIAFAEIAKAFIAHACIAQhCIACAFQAFALACANIABANIANgDQAMgEAIgFIABgKQACgMgEgKQgKgDgfAAIgBAFIgDgFIgHgKIgFgIIgEgEIAAAAIAZAAIAJgnIBJAAQAUAAAPACQAkARAGAKQAFALAAAQQAAAkgeAVQgeAWg2AAIgUAAIgPBCgACLg5IAKADQAGAGADAJQACAIgBAMQAAAJgDAIQARgCAKgHQANgKAAgSQAAgMgIgGQgJgFgmAAgAhYBlIAIgkQAYgBASgGIAMgFIgKAqIgIAGgAj7BlIAfiHIAagXIAAgBIAPgVIABAAQAMgCANAAQARAAAOAEQAJADAGAFIAKgMQAkAAAcAGIAMADIAFgHQANgCAMAAQARAAANAEQAJADAGAFIAJAIIgQAAIgcAzQABgLgCgKQgDgJgFgIIgHgHIgJgJQgGgEgJgEIgKAPIgaAXIgXBjIgFAAIgSgBIgXAaIgEAEQgVgGgPgKIAAgBQADgWAGgWIAGgUIAGAAQAJgBAGABQAFACADADIAAAAIAAADIADgBIACABIAFAEIAJAFQAIACACAAIAIgGIgBAAQgJgDgFgHQABgMADgJQAJgaAEgJIgGgJIgFgIIgEgEIgEgEIgFgEIgJAOQgIgEgLAAQgIAAgIACIgNAEIgXAIIgUBVIAVAAIgNA3IgJAGgAi6AoIAEgSIAHgFIALgCIABgBIAMgTIAKgEIgBABIgJAVIgHABIgFAAIgKARIgFAJgAi6Aog");
	this.shape_5.setTransform(-53.2,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("ABQBlIAQhEIgHAAIgMAAIgFADIgTAeIglAAIANg5IAEABQAFABADAEIABABIADAEIAEAFIADAEIAKgDIABgMIANAAIAOgBIAAgHQgBgMgEgLIgFgOIgQALIAAgJIgBgFIgBgFIgBgEQgDgGgFgDIgBgBQgIgFgNAAQgJAAgIADIgOADIgKADIAIAIQACAJACAJQACALgBAMIgDALIABAAIgMAbIgFALIgHAAIgKAtIgIAHIgtAAIAHggQAOgBAMgEQAPgGAMgJIgWAAIAXhfIAPgDIgIgIIgDgDIAMgOQALgDAOAAQASAAANAFQAJADAGAHIAHAJIAwAAIAKgvIBJAAQAUAAAPACQAlARAFAKQAGALAAAQQAAAkgeAVQgeAWg3AAIgUAAIgPBCgABlAMIASgDQANgEAJgFIACgJQABgNgDgKQgIgBgVgBgACmgpIAEAIQACAIgBALIgCANIAHAAQAYAAANgKQAOgKAAgSQAAgMgJgGQgIgFgnAAgAkaBlIAgiJIAegUIgBACIAQgUIABAAQANgDANAAQASAAANAFQAJADAGAHIAEAEIACACQAJgLALgKQAkAAAbAHQANAEAJAGIgEAEIgdAUIAAADQgDgDgEgCQgEgCgGgBIgJgBQgIAAgIAEQgEAFgHAUIgFAMIgEAVQADAFADACQADADAEABQAJAEAKgBQAIgBAGgDIgJAnIgUACIgSgBIgaAUIgEADQgTgIgOgMIAAAAQADgWAGgWIAHgUIADABQAFABADAEIABABIgEARIAHgDIAHgBIAKgDIACgbQABgOgBgOIgBgFIgBgFIgCgGQgCgFgEgCIgCgBQgIgFgMAAQgKAAgIADIgPADIgaAGIgWBfIAYAAIgKAtIgIAHgAjbAxIAHgdIAGgGIALgDIACAAIgOAbIgFALgAgVg8IAAAAg");
	this.shape_6.setTransform(-53,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("ABvBlIAQhGIgVABIgNAAIgXAcIgjAAIAEgRIgCABQAEgPACgRIACAFIABABIADAHIAFAMIABADIAKgBIACgXIAXAAQAWAAATgDIADgBQANgDAKgFIACgIQACgNgCgLIgSgBIgmgBIgUAKIgDgJIgCgFIAKgMIAwAAIAJAAIANg2IBJAAQAUAAAPACQAkARAGAKQAFALAAAQQAAAkgeAVQgeAWg2AAIgUAAIgPBCgAC8gBIATAAQAYAAANgKQANgKAAgSQAAgMgIgGQgJgFgmAAgAhUBlIAHgdQgQAEgVAAIgRAAQgRAKgLAEIgEABQgTgJgLgNIAAgBIAEgYIgBAAQAEgPADgQIACADQAFgQAIgNIAMgSIgBgEQgBgKgIgGIgBgBQgJgGgOAAQgKAAgJAEQgFABgLABIgeAGIgZBoIAdAAIgIAjIgHAIIguAAIAhiMIAggQIgBAEIASgTIABAAQANgEAOAAQASAAAMAGQAKAEAFAIIADAFIADAFIACAGIAFgHQANgPARgMQAjAAAaAJQAOAGAJAIIABACIALgGIARgPQALgEAOAAQASAAANAGQAJAEAFAIIAGAKIACAHIABAFIgIAJIAAgFIgBgFQgBgKgHgGIgCgBQgJgGgNAAQgLAAgJAEQgEABgMABIgcAFIALAOQAEAJABAJQABALgCAKQgFAXgOAPIgLALIgEADIAXAAIgIAjIgHAIgAhugjQgFAHgMAcIgEAYQAEAJAIAEQAJAEAKgBQAIAAAHgEIAHgFIAGgHQAHgJACgLIAAgEQACgIgEgNQgCgIgIgFQgEgDgGgBIgJgBQgIAAgIAEgAgXA6IAJgoIAGgIIAJgDIABAAIgOAlIgFAOgAj7A6IAJgoIAGgIIALgDIABAAIgQAlIgGAOgABOgiIAAAAg");
	this.shape_7.setTransform(-52.8,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("ACNBlIARhIQgQADgTAAIgMAAIgYAWIgNAAIgVAIIAAgJIACgBIANgBIAFgjIADgYIABgKIABgHIgBgGQgCgMgHgGIgCgCQgJgGgPAAQgMAAgKAEQgEACgNgBIggAFIgEARIACAFQAEAJABAJQAAAJgCALQgFAXgOAPIgGAGIgCAJIAgAAIgFAZIgHAKIguAAIAHgeIgLAEQgTAHgYAAIgRAAQgTAHgMABIgEAAQgRgKgJgQIAAgBIAAgBIAAAAIAAgJIABAAIAOgCIAFgjIAEgcIAAgGIABgHIgBgGQgCgMgHgGIgCgCQgJgGgPAAQgMAAgKAEQgEACgNgBIgQADIARgRIABAAQANgEAOAAQASAAAMAHQAKAFAFAIIACAGIACAGIABAHIABAIQAJgNAMgLQAOgOASgJQAjAAAYAKQAOAHAIAJIAAABIAegLQAJgEAHgIQAOgEAOAAQASAAAMAHQAKAFAFAIIAEAMIABAHIACAMIAAADIAYgWIAsAAIAVABIAPg/IBJAAQAUAAAPACQAlARAFAKQAGALgBAQQAAAkgdAVQgeAWg3AAIgUAAIgPBCgAh9gfQgFAGgNAcQgCAMgBANQACAKAJAFQAIAEALAAQAHgBAIgEIAHgFIAGgHQAHgJACgLIABgEQABgIgDgNQgBgKgIgFQgDgDgHgCIgIAAQgJAAgJAEgABZgPIgJAiIAYAAQAYAAAVgDIAMgDIAMgDIADgKQACgMgBgLIgHgBQgQgBgjAAgADagBIATAAQAYAAANgKQANgKAAgSQAAgMgIgGQgJgFgmAAgAlWBlIAhiOIAkgNIgBAFIACAAIgDACIABgCIgQACIgaBxIAgAAIgFAZIgHAKgAAtALIACAGIABAIIAEAPIABANIgIABIgKABQAGgWAEgWgAjWALIACAGIABAIIAEAPIABANIgIABIgKABQAGgWAEgWgAA1A1IAAAAg");
	this.shape_8.setTransform(-52.6,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("ACrBlIAShMIgBABQgVAFgbAAIgLAAIgZARIgRAAIgCANIgKAEIgcAHIABgGIgCAAIgMABQAHgaAFgbIABgHIABAIIABAKIAAATIgBAWIAXgCIAHgnIAGgmIAAgHIAAgHQgBgNgIgIIgCgBQgJgIgRAAQgMAAgLAFQgFACgOgBIgdADIASgFQAIgBAJgIQAOgEAOAAQATAAANAHQAJAGAEAKIADANIABAIIAAANIAAAFIAogaIAqAAIAUABIAMACIAQhJIBJAAQAUAAAPACQAlARAFAKQAGALAAAQQAAAkgeAVQgeAWg3AAIgUAAIgPBCgABmgNIgIAjIAXAAQAZAAAWgDQAOgBALgDIADgLQACgLAAgMQgPgCgsAAgAD4gBIATAAQAYAAANgKQAOgKAAgSQAAgMgJgGQgIgFgnAAgAhPBlIAJglIgFADQgLAJgOAFQgTAHgYAAIgQAAQgUAFgNgDIgFgCQgNgJgHgOIgcAHIABgGIAYgCIABgEIgBgBIAAAAQACgTAFgSIAFgjIABgHIgBgHQAAgNgJgIIgBgBQgKgIgRAAQgMAAgKAFQgGACgOgBIgGABIgJAGIACgGIgSACIATgFIgBADIAHAAIANgMIABAAQAMgEAPAAQATAAAMAHQAJAGAEAKIACAGIACAHIAAAIIAAANIABAIIAJgRQAMgRAPgMQAQgMATgHQAjAAAXALQANAIAHAKIAFAKIAEgQIAOgEIgLAvQAAAKgCAKQgDAKgEAIIgJAlIAlAAIAPg+IAEgKIAHgDIgRA6IgFARIgEAAIgDAPIgGALgAiLgcQgGAHgNAcQgDAMgBANQADAMAHAFQAIAFALgBQAJAAAHgEIAIgGIAFgHQAHgJADgLIAAgEQACgKgCgMQgCgKgHgGQgDgEgHgBIgJgBQgIAAgJAEgAl1BlIAiiQIAOgEIgcB6IAlAAIgEAPIgFALgAk8BLIAOg+IAFgKIAIgDIgTA6IgFARgAk8BLgAj2AOIABgHIABAIIABAKIABATQAAALgCALIgCAAIgLABQAGgaAFgbg");
	this.shape_9.setTransform(-52.5,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("ADJBlIAwjJIBJAAQATAAAQACQAkARAFAKQAGALAAAQQAAAkgeAVQgeAWg3AAIgTAAIgQBCgAEXgBIASAAQAZAAAMgKQAOgKAAgSQAAgMgIgGQgJgFgnAAgAhNBlIAiiTIAKgBIgfCDIApAAIgBAFIgFAMgAmTBlIAjiTIAJgBIgfCDIApAAIgBAFIgFAMgAjQBaIgFgDQgPgNgFgTIAAgBQABgVAHgUQAHgRAMgQQALgQARgLQARgLAUgFQAjABAVAMQAMAIAHAMIAHAUQACAKgBAHQAAAKgDALQgHAVgNAPIgKAJQgLAIgNAGQgSAHgZAAIgQAAIgLAAQgOAAgJgEgAiZgYQgHAGgOAcQgCAMgBANQACAOAHAFQAIAGAKAAQAKAAAHgFQAFgCADgDIAFgIQAHgJADgLIABgEQACgLgBgMQgCgLgGgGQgFgEgGgCIgJgBQgJAAgIAFgAgXBUIARhKIAFgKIADgBIgSBCIgFATgAgXBUgAldBUIARhKIAEgKIAGgBIgTBCIgGATgAldBUgAAqBOIADAAIAdgCIAIgpIAIgrIABgIIAAgHQgBgPgIgIIgBgCQgLgIgSAAQgNAAgMAFQgFACgPgCIgZACIASgDQAIACAKgHQAOgFAPAAQATAAANAIQAIAGAEALIACAPIAAAIIgCAOIgBAcIgEAeIgDARIgLACIgeAEIAAgDgAkaBOIAEAAIAcgCIAIgpIAIgrIABgIIAAgHQgBgPgIgIIgCgCQgKgIgSAAQgNAAgLAFQgGACgNgBIAKgHIABAAQAMgFAPAAQAUAAALAIQAKAGADALIABAHIABAIIAAAIIgBAOIgDAcIgDAeIgDARIgLACIgfAEIABgDgAkVASIABgMIAAgCIAAABIABAJIgBALIgBAWQgCAQgDAPIgJAAQAHgeAHgegABeAqIAMguIAJgEIgIAhIAXAAQAZAAAYgCIAbgDIACgMIAEgXIg8gBIgbAEIAXgKIAnAAIASAAIAOACIABAMIgCALQgCALgDAKIgMADQgTAEgZAAIgKAAIgbALgAlGgyIgTABIAUgDIgBACIAJgBIACABIgOAKgAk7gyIAAAAg");
	this.shape_10.setTransform(-52.3,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("ADoBlIAvjJIBJAAQAUAAAPACQAkARAGAKQAGALgBAQQAAAkgeAVQgeAWg2AAIgUAAIgPBCgAE1gBIATAAQAYAAANgKQANgKAAgSQAAgMgIgGQgJgFgmAAgAhKBlIAjiVIADAAIggCNIAsAAIgCAIgAmxBlIAjiVIADAAIggCNIAsAAIgCAIgAi8BkQgXgBgOgJIgFgFQgOgOgCgVIAAgBQAAgVAHgTQAHgRAMgPQANgPASgJQASgKAVgCQAjAAATAOQAMAJAFANIAGAVQAAAIAAAJQgBAKgDAKQgIAVgNAOIgKAJQgKAIgNAGQgSAHgXAAIgQAAgAiogUQgIAFgNAdQgDAMgBANQABAPAHAGQAIAGALAAQAJAAAHgFIAIgFQAEgDADgFQAGgJADgMIABgEQACgKgBgNQgBgLgGgHQgDgEgIgCIgIgBQgJAAgJAFgAgYBdIAYhfIABgCIgSBLIgEAWgAgYBdgAl/BdIAVhVIADgKIADgCIgUBLIgEAWgAl/BdgAAkBaIAJgBIAaAAIgCAAIghACIAAgBgAlBBaIAJgBIAaAAIgCAAIghACIAAgBgABXAsIAKguIABgJIAAgJQAAgQgJgIIgCgCQgKgJgUAAQgOAAgMAFQgFACgKgBQAFgBAFgDQAOgGAOAAQAVAAAMAKQAIAHADALQACAMgBAFIgBAJIgCANIgGAfIgFAgIgDARIgFAAIAKgsgAkOAsIAJguIACgJIAAgJQAAgQgJgIIgCgCQgKgJgUAAQgPAAgLAFQgEACgIgBIAHgEIABAAQANgGAOAAQAVAAAMAKQAIAHADALIABAIIAAAJIgBAJIgCANIgGAfIgFAgIgDARIgEAAIAJgsgAByAkIAKgpIAEgBIgIAhIAYAAIAxAAIAdgCIACgMIAFgYIg9AAIgXABIAYgFIAiAAIARABIANABIgBALIgCAKIgFATIgLACQgTACgVAAIgJAAIgcAFgAAFgzIABAAIgKABgAlggzIgBAAIgJABg");
	this.shape_11.setTransform(-52.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AjxBXQgTgQAAgdQAAgVAHgSQAHgRANgOQANgOATgIQATgIAYAAQAiAAATARQASAQAAAaQAAAWgHATQgIATgNANQgOAOgSAIQgSAIgYAAQgiAAgSgRgAi2gTQgIAFgGAJQgGAHgDANQgDAMAAAOQAAAQAHAGQAHAHAMAAQAJAAAIgFQAIgFAGgIQAGgKADgLQAEgMAAgQQAAgMgHgHQgGgIgNAAQgLAAgHAFgAEGBjIAvjKIBJAAQAUAAAPADQAPADALAGQALAHAFALQAGALAAAQQAAAkgeAUQgeAWg3AAIgUAAIgPBDgAFTgEIATAAQAYAAANgKQAOgJAAgSQAAgMgJgGQgIgGgRAAIgWAAgAAfBjIARhMIADgPIABgJQAAgJgEgEQgFgEgMAAQgGAAgIACIgRAIIgXBrIgxAAIAjiYIAwAAIgEARQAPgKAMgFQANgGAPAAQAVAAALAKQAMAKAAATIgBAJIgCAJIgXBjgAlnBjIAShMIACgPIACgJQAAgJgFgEQgEgEgNAAQgFAAgIACIgRAIIgZBrIgyAAIAkiYIAxAAIgEARQAPgKANgFQAMgGAQAAQAUAAAMAKQALAKAAATIAAAJIgCAJIgXBjgACFAcIAJglIBpAAIgJAlg");
	this.shape_12.setTransform(-51.9,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},12).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},12).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// non-P
	this.instance = new lib.nonP("synched",0);
	this.instance.setTransform(160.5,-2.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).to({guide:{path:[160.4,-2,54.1,129.3,-54.7,-1.3]}},11).to({_off:true},1).wait(13).to({_off:false,x:160.5,y:-2.1},0).to({guide:{path:[160.4,-2,54.1,129.3,-54.7,-1.3]}},11).to({_off:true},1).wait(12));

	// P
	this.instance_1 = new lib.PLetter("synched",0,false);
	this.instance_1.setTransform(160.9,-2.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({guide:{path:[160.8,-2.5,160.6,-2.3,160.4,-2,54.1,129.3,-55.9,-2.5]}},11).to({_off:true},1).wait(13).to({_off:false,x:160.4,y:-2},0).to({guide:{path:[160.4,-1.9,54.1,129.2,-55.9,-2.5]}},11).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).wait(1));

	// Layer 1
	this.button_1 = new lib.ContrapositionButton();
	this.button_1.setTransform(22,94);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.ContrapositionButton(), 3);

	this.button_2 = new lib.ContrapositionButton();
	this.button_2.setTransform(22,94);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.ContrapositionButton(), 3);

	this.button_3 = new lib.ContrapositionButton();
	this.button_3.setTransform(22,94);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.ContrapositionButton(), 3);

	this.button_4 = new lib.ContrapositionButton();
	this.button_4.setTransform(22,94);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.ContrapositionButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1}]}).to({state:[]},1).to({state:[{t:this.button_2}]},24).to({state:[]},1).to({state:[{t:this.button_3}]},24).to({state:[]},1).to({state:[{t:this.button_4}]},24).to({state:[]},1).wait(24));

	// S Morphing
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33CC00").s().p("AhBBlQgUgFgPgHIAKgwIAGAAQAOANATAGQATAIAWAAQAUAAALgHQAKgFAAgMQAAgEgBgDQgCgDgFgDQgFgDgIgDIgUgHQgPgEgMgFQgMgEgIgGQgJgGgEgJQgEgIAAgNQAAgeAbgSQAbgTAtAAQAWAAAUAEQAUADAOAHIgKAvIgFAAQgLgKgRgGQgSgHgVAAQgTAAgKAFQgLAHAAAKQAAAEACAEQABADAFADIANAGIAVAGQAiAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgVAAQgbAAgUgEg");
	this.shape_13.setTransform(162.1,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33CC00").s().p("AgRBoIgBAAIgTAAIgJgBIgFABIgSAAQgOgBgMgCQgUgFgPgGIAKgwIAFAAIAKAHIACgKIAEACIALAGIAAgBIABgEIAOAIIADgLIAJAFIABgDQASALARAHQAGgCAEgDQAKgGAAgLQAAgEgBgDIgDgEIgDgDIgLgFIgTgGQgMgDgKgEIgBgBQgJgDgHgCIgDgCQgHgHgDgIQgDgGAAgIIAAgGQABgPAIgMQAHgKANgIQAGgEAJgDQAQgGAUABIAHgCIARgBQAUgGAcAAQAWAAAUAEQAUADAOAHIgKAvIgPgIIgCAMIgFAAIgGgFIgCANIgFAAIgEgDIgGgEIAAABIgFAAIgBgBIgDAAIgGgFIgDAMIgFAAIgEgDQgKgHgNgFQgJgDgJgBIgBAGQAAAEACAEQABADAFADIAOAGIAWAGQAiAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgOAAgNgBgAghBmIADAAIADAAIgEgBIgFABIACAAIABAAgAgUg0IgBAAQgKAGAAAJIABAIIACACIgBgGQAAgKALgGIAIgDIgJAAIgBAAg");
	this.shape_14.setTransform(162.3,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33CC00").s().p("AgFBlIgBgBIgMACIgRACIgSgCIgDAAIgPgCIgMACIgRACIgagDQgUgEgPgFIALgwIAFgBQAKAIAOADIAEgRIAIAEIAMAEIABABIAKADIABgFIAWAIIAJgEIACgMIAGAEQACgFAAgFIgBgHIgCgEIgDgDQgDgCgGgCIgPgGQgKgCgIgEIgCAAQgIAAgGgDIgCgEQgHgFgCgIQgCgGABgIIAAgFQACgOAJgMQAHgJAMgGQAHgDAIgCQAQgFASABIADABQAJgDALgBQAMAAALAAIANACQAagOApAAQAXAAATAEQAVADANAHIgKAvQgOgJgQgGIgEAXIgEAAQgIgFgJgFIgGAZIgEAAIgEgBQgJgGgMgEIAAABIgFAAIgDgCIgFgDIgEgBIgFgBIAAABQACADAEADIAPAGIAVAGQAjAKAPAKQAOANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgaAAgTgEgAgvBeIgOAEIANAAIACAAQAPABANgCIgUgHIgJAEgAAZBOQgEAEgGAEQgHAEgIACIAGABIADgDQALgFAIgJIgDACg");
	this.shape_15.setTransform(162.6,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33CC00").s().p("AAXBlIgWgGIgTAGIgQADIgYgDIgDAAIgOgCQgNgBgKgCIgSAFIgPADIgZgDQgUgDgOgFIAKguIAEgCQAMAHAPABIAPAAIAEgSIALAFIAIACIANACIAHgEQAJgHAAgKQABgEgCgDIgBgEIgCgCQgDgCgFgCIgNgGQgHAAgGgDIgCgBQgHAAgGgDIgCgCQgFgGgCgHQgBgGABgHIABgFQADgNAKgLQAHgHAMgGQAGgDAIgCQAQgDAQAEIAHABQAOgFARgBQAMgBAMACIAMACQALAAALACIADAAIAHgEQAbgTAvAAQAWAAAVAEQATADAPAHIgKAvQgRgKgRgGIgMgEIgGAhIgEAAQgJgHgMgDIgIgCIgEATIATAFQAhAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgOAJgTAEQgTAEgXAAQgbAAgUgEgAh1AyIgEABIgGAbIAAAAQAMAHAPAEIAIADIAIgoQARACAKgBIAFAAQgOgCgRgEIgBAFIgFgBIgNgFIgPAEgAg0gUIACAGQAAACAEACIABABIAAgCIABgGIgBgEIgGgBIgBACgAAegbIAEgBIAAAAIgKgDIgBAAIAHAEg");
	this.shape_16.setTransform(162.8,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33CC00").s().p("AA2BlQgVgFgPgHIACgJIgJAGQgMAHgRAGIgOAEIgZgCIgHgBIgOgBIgQgBQgSgDgNgFQgLAFgMAEIgPAEIgYgCQgSgDgPgEIAKguIADgBQALADAOAAQAOAAAPgGIAHgBIABgKIAMADIAEgEQAJgGAAgLIgBgHIgBgDIgCgCQgBgCgEgBIgKgDQgFgDgEgDIgCAAQgHABgGgCIgBgCQgDgFgBgIIACgMIABgEQADgNAKgJQAJgHALgEIANgDQAPgCAQAFIAHACIADABIAFgDQARgHAVAAIAWACIANAEIAKgCQAPgCAPAFIAIACIAEACIACABQAGgJALgHQAbgTAvAAQAXAAATAEQAVADANAHIgKAvQgQgKgRgGQgRgHgWAAIAKADIgGAkIgEABQgHgFgMgEQgKgCgLABQACADAEADIAPAGIAVAGQAjAKAPAKQAOANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgSAEgYAAQgbAAgTgEgAiHBKIAAABQAJAFALAEQAMgGAJgJQAHgHAFgIIACgFIgWgBQgMgEgOgGIgHAkgAhDAiIgGACIgEALIgBABIACABIACAAQAQgCAIgFQAHgFABgIQgCgIgEgCIgDgCQgBAJgPAIgAgEAlIAFACIgBgEIAAgCIgEAEgAAOgbIAAAFIABAAIAEgTQgEAHgBAHgAAMgWIABAAIgBAAIgCgBIACABg");
	this.shape_17.setTransform(163,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33CC00").s().p("ABTBlQgUgFgPgHIADgPQgQAAgNgDIgOALQgLAJgOAGIgOAGIgXgCIgRgDIgKABIgRgBIgPgCQgRgEgNgGIgIgFIgCABQgMAJgPAGIgOAGIgYgCQgRgDgPgDIAKgtIADgBQAKABANgCQAMgDAOgGQAOgGAIgIQAHgHAAgKIAAgGIgBgCIgBgCQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQgBgCgEgCQgEgCgDgDIgBAAIgLACIgBgDQgCgFgBgHQABgFADgGIABgFQAFgLAJgIQAKgGALgDQAGgCAHgBQAPAAAMAIIAIACIADADIADACIACABQAHgIAMgFQAPgFAUABQAJAAAKACQALADAKAEQAEgDAHgCQAGgCAHgBQAOAAANAIIAIACIADADIADACIAFADIAMgEQAGgPAQgKQAbgTAvAAQAWAAAUAEQAUADAPAHIgKAvQgRgKgRgGQgSgHgUAAQgUAAgLAFQAOACAJADIgGAiIgBAAIARAEQAhAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgOAJgTAEQgSAEgYAAQgaAAgVgEgAiQBGIAAABIADACIAJgJQAJgJAGgMIADABQARABAIgBQANgCAHgFQAHgFABgHQgBgHgEgCIgGgEQgDAHgMAHQgIAEgJACIgJABIgDAJIgBABQgKgCgLgFIgGAigAhIgFIABAFIACABIAEgSIAAAAQAIgFAMgBIADAAIANgBIAHABQAKACAHAEIADgBIADgbIABgEQgGgGgKgDIgCAAQgNgGgNgBIgGgBQgagCgTAKIgDABQAJAFAHAGQAKAIAIAJIgDAMQgHAFAAAHg");
	this.shape_18.setTransform(163.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CC00").s().p("ABxBlQgUgFgPgHIAFgVIgPAAQgRAAgMgCIgRgEQgIAJgJAHQgJAKgOAIIgLAHIgXgCQgQgCgOgDQgKADgLAAIgQgCIgMgCQgRgFgLgHQgLgHgHgIIgMAKQgLAKgNAIIgMAHIgXgCQgSgCgPgDIAKgsIAEgCQAIAAAMgFQALgEANgIQAMgGAHgKQAGgGABgKIgBgEIgBgEIAAgCIgBgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCAAIgKAEIAAgDQgBgFABgGQABgFADgFIACgFQAFgKALgHQAJgFALgCQAGgBAHAAQAOABALAJIAGAEIADADIACACIAJAJIAEgFIAAAAIgBAEIgBACIAFAFQAIAJAGAKIgCAIIABAAIADAFQAAAAABABQAAABAAAAQAAABAAAAQAAAAAAAAIAAAEIgBADIgGgCIgBgBIgDAMQAHgEADgFIADACIAHAFQACABABAHQAAAGgGAFQgGAEgMADQgIABgOAAQgKgBgKgEIgGAfIAAABQAIAGAKAEQALAFAPADIACAAQANABAKgBIABAAIAIgiQAMgDAMgEIAAAAQADAEAAAEQADAHgEAKIABgBQAGgHACgJIABgKIgBgDIgLAFIgFgDIgDgCIgGgHIgEgEIgBgFIAAgFIACgEQACgEAFgEQAJgFAMgCQANgEALgBIADAAIALAAIgBgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgDgEIgBAAIgKAEIAAgDQgBgFAAgGIAEgKIACgCQgHgGgKgDQgLgGgNgBIgEgBQgYgDgRAIQgFACgEAEIgCABQAIgPAUgGQAPgFASACQAJABAKADQAOAEAKAHIABABIAIgHQAIgFALgCQAGgBAGAAQAPABALAJIAGAEIADADIACACIAIAHIAEgDQALgGAPgCQAGgTATgMQAbgTAvAAQAXAAATAEQAVADAOAHIgKAvQgRgKgRgGQgSgHgUAAQgVAAgLAFQgGAEgDAFIAPAEIgDAUIAJAEIAVAGQAjAKAOAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgSAEgYAAQgaAAgVgEg");
	this.shape_19.setTransform(163.4,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33CC00").s().p("ACQBlQgVgFgPgHIAHgfIgIACQgLACgOgBQgOAAgMgCIgTgDIAAgBIAFgXIgKgBIAAABQgFAMgIAKQgIALgJAKQgHAKgMAJIgKAJIgYgCIgggFIADgKIgEADQgIAFgKACQgKADgMgBIgPgCIgLgDQgPgGgLgIQgJgHgHgJQACgQAEgQIgIAAIgBABQgEAMgIAKQgIALgJAKQgKAKgMAJIgKAJIgWgCIghgFIAKgqIADgDIASgIIAVgQQALgHAGgKQAGgGAAgIIAAgHIAAgDIAAgCIABgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIgBAAIgJAGIABgCIACgLIAEgKIADgEQAGgJALgFQAKgFALgBQAGgBAGABQAOADAJAKIAFAFIADADIABADIAMARQAGAJAEALIgJAmIgCADIgCABIgBABIgLgDIgCgBIgEAbIAAACQAFAGAKAFQAJAFAOADIABAAQAKABAKAAQAKgCAIgDIAGgCIAGgXIADgCQADAGgCAEQABADgBADQAFgFACgHIABgIIAAgBIgJAFIgBgBIgCgCIgEgHQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIABgEIACgFQADgDAEgDQAHgFALgFIAWgHIADAAIALgCIADAAIAEgXIgHAFIAAgCIABgLIAEgHIACgDIACgEQAGgJAKgFQAKgFAKgBQAGgBAHABQANADAJAKIAGAFIACADIABADIALAOQAFgHALgFQAOgHAUgBQAEgYAWgOQAbgTAvAAQAWAAAVAEQATADAOAHIgKAvQgQgKgRgGQgRgHgWAAQgTAAgLAFQgLAHAAAKQAAAEABAEQABADAGADIANAGIAXAGQAhAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgSAEgYAAQgbAAgTgEgAh7gCQgEgDgCgFIgBgBIgCgGQgBgFACgFQACgIAGgFIgBACQgBADABAEQgBADACACQABAEACADIAEAGIACAEIABAEIgBAEIgCACIgHgDg");
	this.shape_20.setTransform(163.6,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CC00").s().p("ACtBlQgUgFgPgHIAKguQgFAEgIADQgHADgKABQgJACgLAAQgNAAgLgCIgRgEIgBAAIABgDQgNgCgPAAIAAgBIgGgMQgEAJgEAJQgHALgIAJQgHAMgKALIgJAKIgWgCIgggEIAKgpIASgPIASgTQAKgJAGgKQAFgSAAgDIABgEIADgDIABAAIADgJIAFgJIACgDQAIgIAKgEQALgEALgBIALACQAOAEAHAMIAEAGIACAEIAAADQAFAJAEAKQAFAKADAJIgEANIAOgEQAFgCACgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIgBgCIgFgDIgEgBIgCgDIgBgGIADgHQAFgKAPgGQAPgGAWAAIADAAQABgdAagRQAbgTAvAAQAXAAATAEQAVADANAHIgJAvQgRgKgRgGQgSgHgUAAQgVAAgLAFQgKAHgBAKQABAEABAEQACADAEADIAPAGIAVAGQAiAKAQAKQAOANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgaAAgVgEgAk1BlIgggEIAKgpIACgDIAQgMIASgTQAKgJAGgKQAEgFABgJIAAgHIAAgDIABgBIADgDIABAAIADgJIAGgJIADgDQAIgIAKgEQALgEALgBIALACQAOAEAHAMIAEAGIACAEIABADQAEAJAEAKQAFAKADAJIgKAoIgDADIgCACIgUgEIgGgBIgbgBIAAgBIgGgMQgEAJgEAJQgHALgJAJQgIAMgKALIgJAKIgWgCgAhVA8IgBgBIAAgHIgCgDIAAgEIACgEIABgDQADADABADQABAEAAADIgCAIIgCAFIgBgEgAiLgLIgBgBIgBgFIACgJIAEgGIAAACIAAAFIABAFIAAAFIABAEIgCADIgBADIgDgGg");
	this.shape_21.setTransform(163.8,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33CC00").s().p("ADMBlQgVgFgPgHIAKgwQAVANASAGQAUAIAVAAQAWAAALgHQAKgVgBgDQgCgDgEgDQgFgDgJgDIgWgHQgPgEgMgFQgMgEgIgGIgFgEIgIACIgLADIgHAGIgEABQgFACgDADIgBACIAAABIABABIAAACQADADgCACQAAADgDAGQgDAEgFAEQgGADgGACIgPADIgTABIgVgBIgCAAIgCAKIgCACIgCAEIgVgDQgPgCgQAAIgBAAQgCgKgBgIQgBgEABgEIABgDIADgDIAFgGIAGgHIACgEIAFgGIAEgFQACgGgBgCIgFgBIgFABIgIAHIgEACIgIAGIgFAQQgEAMgGALIgKAWQgIAMgIAMIgIALIgVAAIgfgEIAKgoIAPgUIAPgWQAJgJAEgJIAGgXQABgEAAAAIAFgBIAHgCIAFgCIABgCIAIgIIADgDQAIgHAMgDQALgDAKABQAGAAAFACQAOAGAFANIADAHIABAEIAAAEIAFAVQADAJABALIAJgEIANgFQAEgBACgDIABgDIAAgCIgCAAIgBgCIABgDIAAgEIADgFQAHgHAMgFQAPgFASAAIAQABIAAgHQAAgeAbgSQAbgTAvAAQAWAAAVAEQATADAPAHIgLAvQgQgKgRgGQgRgHgWAAQgTAAgMAFQgLAHABAKQgBAEACAEQACADAFADIANAGIAXAGQAhAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgOAJgTAEQgTAEgXAAQgbAAgTgEgAlUBmIgegEIAJgoIACgDIAOgRIAPgWQAIgJAFgJQAEgIABgJIAAgGIAAgEIACAAIAEgBIAIgCIAHgCIABgCIAIgIIACgDQAJgHALgDQALgDAKABQAGAAAGACQANAGAGANIACAHIABAEIAAAEIAGAVIADAPIAQgKIALgFQAKgHADgFIACgEIAAgCIACgFIABgFIAEgGIAEgEIAEgFIAEgDIADgCQAMgIAQgBQAOAAANAEIANAIQAKAGAHAJQAGAGADAHIABACQgCAQgDAMIgCACIgIAFIgCADIgRALIgPAKQgFAEgDAFIgCAFIgBADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDAGIAAACQgBAFgGAEQgDAFgHAFIgBAAQgFAEgHADQgIADgIAAQgKAAgKgCQgGgBgGgCIgKgFQgMgHgHgJIgHgKIgPgCQgQgCgQAAIgBAAQgCgKAAgIQgCgEABgEIACgDIACgDIAGgGIAFgHIADgEIADgGQAEgDACgCQACgGgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgEABIgIAHIgFACIgIAGIgEAQQgEAMgGALIgNAWQgHAMgIAMIgIALIgWAAgAiBglIgHACQgHAFgDAFIgEAHIAAAFIACABIABAFIACAGIAEADIADADIABAFQgBAEgEADQgEAFgHADIgMAHIgLACIgDAVIAAACQAEAFAGAFQAGAGAKADIAAAAIAQACQAHABAHgCIAGgCIAGgEQAFgDADgGIADgGIAAgGQAAgHgGgGIgBgCIgCgCIgDgDIgCgDIABgDQABgFADgDQAEgEAGgDIABgBIALgDIAHgCIABgCIADgPIABgDQgEgFgGgEQgFgFgJgEIgCgBQgIgDgIAAQgGAAgGACg");
	this.shape_22.setTransform(164,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33CC00").s().p("ADpBlQgUgFgPgHIALgwQAUANATAGQASAIAWAAQAXAAAKgHQAKgVgBgDQgBgDgGgDQgEgDgJgDIgWgHQgPgEgMgFQgMgEgIgGQgJgGgDgJQgFgIAAgNQAAgeAbgSQAbgTAvAAQAXAAATAEQAVADANAHIgKAvQgQgKgRgGQgSgHgVAAQgUAAgKAFQgMAHAAAKQAAAEACAEQACADAEADIAPAGIAVAGQAjAKAPAKQAOANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgaAAgVgEgAgsBmIgfgDIAKgoIANgYIANgZQAGgKAEgKIAGgWIACgEIAHgBIAKgBIAJgBIAAAAIgFAMIACgCIAHgJIAKgIIADgCQAJgGAMgCQALgCAKABIAMAEQAMAHAEAQIABAHIABAFIAAAEIABAUIAAAZIgJAlIgBAEIgCAFIgVgCQgPgCgQAAIAAgBIAAgUQAAgFABgFIACgEIACgFIAEgHIAFgJIACgDIADgIQADgEABgDQABgFgCgEQgCgCgEAAIgGABIgKAFIgFAEIgJAEIgEAOQgEANgFALIgIAXIgNAaIgGANIgVAAgAlyBmIgegDIAJgoIABgCIAMgWIANgZQAFgKAFgKQAEgHAAgJIABgGIAAgEIADAAIAGgBIALgBIALgBIAAAAIgHAMIADgCIAIgJIAJgIIAEgCQAIgGANgCQALgCAKABIAMAEQAMAHADAQIACAHIABAFIAAAEIABAUIABAZIgKAlIgBAEIgCAFIgVgCQgOgCgQAAIgBgBIAAgUIABgKIACgEIACgFIAEgHIAFgJIACgDIADgIIAEgHQABgFgDgEQgBgCgFAAIgFABIgKAFIgFAEIgKAEIgDAOIgJAYQgEAMgGALIgNAaIgGANIgVAAgAipBkQgJAAgJgDIgLgEIgJgGQgKgHgFgKQgGgIgCgKQABgOACgPIAIgJIATgQIALgIQAIgGAEgFIACgDIABgDIAEgEIAEgFIAHgFIAGgEIAGgDIAGgCIADgCQANgEAPAAQANACAMAFIALAIQAJAHAFAJQAEAGACAIIABACQgBAMgDANIgBACQgDAFgEAEIgCADIgOANIgNAKQgGAEgCAFIgCAEIgCACIgCAEIgFAGIgBABQgFAGgIADIgMAHIgBAAIgNAEIgMABIgEAAgAiKggIgHACQgGADgEAEIgDAFIgBAEIAAAAIAAAFIAAAGIABADIACACIAAAEIgEAHIgIAIIgJAHIgIAFIgDASIAAACQADAGAEAEQAFAGAIADIABAAIAMAEIAMAAIAGgCIAFgDQAFgCADgEIADgFIABgFQACgFgCgHIAAgBIgCgCIgBgEIAAgCIAAgCQABgEACgEQADgDAFgEIABgBIAIgEIAEgEIABgCIADgNIAAgCQgCgEgFgFQgEgFgGgEIgDgCQgIgEgJAAIgGABgABtAqIgMgBIgBAAIAFgTIAIgHIAJgIIALgEIAFgDIADAAIABgBIABgBIABgBIACgCIADgDIAEgDQAGgFALgEQAOgDAPAAIARABIAMACIgDASIgBABIgHACIgIAHIgEAHIgFAAIgGACIgDACIAAABIgBABIgCABQAAABgDACIgGAHQgEACgFACQgEADgGABIgNACIgQABIgSgBgAAFgnIAAAAIAAAAg");
	this.shape_23.setTransform(164.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33CC00").s().p("AEIBlQgVgFgPgHIALgwQAUANATAGQATAIAVAAQAXAAAKgHQALgVgCgDQgBgDgFgDQgFgDgJgDIgWgHQgPgEgMgFQgMgEgIgGQgIgGgEgJQgFgIAAgNQAAgeAbgSQAbgTAvAAQAXAAAUAEQAUADAOAHIgKAvQgRgKgRgGQgRgHgVAAQgUAAgLAFQgLAHAAAKQAAAEABAEQACADAFADIAOAGIAWAGQAiAKAPAKQAOANAAAUQAAASgIAOQgIANgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgEgAjABmQgIgCgIgDIgKgGIgIgFQgIgJgFgKQgEgIgBgLQABgNADgNIAGgNQAJgLAHgIIAIgIIAMgKIACgCIADgCIAEgFIAHgEIAKgGIAKgCIAHgDIAGgBIAEgBQAPgBANACQANACAKAHIAKAJQAHAIAEAKQADAGABAJIAAACQgBALgCAMIgBACIgFALIgCADQgFAHgHAIIgLAMIgIAGIgCAEIgDACIgDADIgIAHIgCABQgIAFgKACIgPAFIgBAAIgOACIgPgBgAiTgbIgGABQgGACgEACIgEAEIgDACIABABIgDAEIgCAGIgBADIAAACIAAADIgEAFIgGAHIgGAJIgEAIIgCAQIAAABQACAGADAEQADAGAGAEQAEADAGACQAEABAGgBIAEAAIAFgCQAFgBAEgDIADgEIADgEQAEgFAAgFIAAgCIAAgCIAAgDIABgBIAAgCIADgHIAFgHIABgBIAFgGIADgGIAAgBIABgMIABAAQgCgGgCgDQgDgGgEgEIgCgCQgIgGgKAAIgBAAgAgqBmIgegBIAJgoIALgcIAKgdIAIgVIAFgWQAAgBABgBQAAgBABAAQAAAAAAgBQAAAAABAAIAJgBIANAAIANgBIAAABIgFAOIAEgCIAJgIIALgHIADgCQAKgGANgBQAMgBAJADQAGACAFAEQAMAIACARIABAJIgBAFIAAAEIgDAWIgCAaIgJAlIgCAEIgBAFIgUgBIgegBIgBgBIADgWIADgOIACgFIABgFIADgIIAEgKIACgGIACgIIADgIQAAgHgDgEQgDgBgFgBIgHAAIgMADIgFADIgKAGIgDANIgHAXIgHAYIgKAdIgEAOIgVAAgAmRBmIgegBIAJgoIACgDIAJgZIAKgdIAIgVQADgHABgJIABgGIAAgEIADAAIAJgBIANAAIAQgBIgBABIgFAOIAEgCIAJgIIALgHIADgCQALgGAMgBQAMgBAJADQAHACAEAEQAMAIACARIABAJIgBAFIAAAEIgCAWIgDAaIgJAlIgCAEIgBAFIgUgBIgegBIAAgBIACgWIADgOIACgFIABgFIADgIIAEgKIACgGIACgIQACgEABgEQAAgHgDgEQgDgBgFgBIgHAAIgLADIgGADIgKAGIgDANIgIAXIgIAYIgKAdIgEAOIgVAAgACNAkIgOAAIgLgBIAEgPIAFgJIAGgJQAGgDACAAIAGgBIADgBIADAAIADgBIAEgBIAFgBIADgBIAFgCIARgEQAMgBANAAIANAAIALABIgDANIgBACIgEAFIgFAJIgEAHIgDAAIgGABIgDABIgBAAIgCABIgEAAIgKACIgHADIgJACIgJACIgLABIgOAAg");
	this.shape_24.setTransform(164.4,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33CC00").s().p("AjuBZQgTgQAAgdQAAgVAHgSQAHgRANgOQANgOATgIQATgIAYAAQAiAAATARQASAQAAAaQAAAWgHATQgIATgNANQgOAOgSAIQgSAIgYAAQgiAAgSgRgAizgRQgIAFgGAJQgGAHgDANQgDAMAAAOQAAAQAHAGQAHAHAMAAQAJAAAIgFQAIgFAGgIQAGgKADgLQAEgMAAgQQAAgMgHgHQgGgIgNAAQgLAAgHAFgAEmBkQgVgFgPgGIALgxIAFAAQAPANATAHQATAHAVAAQAXAAAKgGQALgGAAgMQAAgEgCgDQgBgDgFgDQgFgDgJgDIgWgHQgPgEgMgFQgMgEgIgFQgIgHgEgIQgFgJAAgMQAAgfAbgSQAbgTAvAAQAXAAAUAEQAUAEAOAGIgKAvIgGAAQgLgKgRgGQgRgHgVAAQgUAAgLAGQgLAGAAAKQAAAFABADQACADAFADIAOAGIAWAHQAiAJAPAKQAOANAAAVQAAARgIAOQgIANgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgEgAAiBlIARhMIADgPIABgKQAAgIgEgEQgFgEgMAAQgGAAgIACIgRAIIgXBrIgxAAIAjiYIAwAAIgEARQAPgKAMgFQANgGAPAAQAVAAALAKQAMAKAAATIgBAJIgCAIIgXBkgAlkBlIAShMIACgPIACgKQAAgIgFgEQgEgEgNAAQgFAAgIACIgRAIIgZBrIgyAAIAkiYIAxAAIgEARQAPgKANgFQAMgGAQAAQAUAAAMAKQALAKAAATIAAAJIgCAIIgXBkgACIAeIAJglIBpAAIgJAlg");
	this.shape_25.setTransform(164.6,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33CC00").s().p("AEIBlQgVgFgPgHIALgwQAUANATAGQATAIAVAAQAXAAAKgHQALgVgCgDQgBgDgFgDQgFgDgJgDIgWgHQgPgEgMgFQgMgEgIgGQgIgGgEgJQgFgIAAgNQAAgeAbgSQAbgTAvAAQAXAAAUAEQAUADAOAHIgKAvQgRgKgRgGQgRgHgVAAQgUAAgLAFQgLAHAAAKQAAAEABAEQACADAFADIAOAGIAWAGQAiAKAPAKQAOANAAAUQAAASgIAOQgIANgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgEgAjABlQgIgBgIgEQgGgCgEgDIgIgGQgIgHgEgLQgEgJgCgKQABgNADgNIAGgNQAJgLAHgIIAJgIIALgKIACgCIADgDIAEgEIAHgEIAKgGIAKgCIAHgDIAHgBIADgBQAPgBAOACQAMACAKAHIAKAJQAHAIAEAKIAEAPIAAABQgBALgCANIgBACIgFAKIgCAEQgFAHgHAIIgLALIgIAHIgCAEIgCACIgEADIgIAHIgCABQgHAFgLACIgPAFIgBAAQgHABgHAAIgEAAIgLgBgAiTgbIgGABQgGACgEACIgEAEIgCACIgDAFIgCAGIgBAEIAAABIAAACIgDAFIgGAIIgHAJIgEAIIgCAPIAAACQACAGADAEQADAGAGAEIAKAFQAEABAGgBIAEAAIAFgCQAFgBAEgDIADgEIADgEQAEgFAAgGIABgBIAAgCIgBgDIABgBIAAgDIADgGIAGgHIAAgBIAFgGIADgGIAAgCIABgLIABgBIgEgJQgDgFgEgFIgCgBQgIgGgKAAIgBAAgAgqBlIgeAAIAJgoIALgcIAKgdIAIgWIAFgVIADgFIAJAAIANgBIAOAAIgBABIgFAOIAEgCIAJgIIALgHIADgCQALgGAMgBQAMgBAJADQAHACAEADQAMAJACARIABAIIgBAFIAAAFIgCAWIgDAaIgJAlIgCAEIgBAFIgUgBIgegBIAAAAIACgXIADgNIACgGIABgFIADgJIAEgJIACgGIACgIQACgEABgEQAAgHgDgEQgDgCgFAAIgHAAQgEAAgHADIgGADIgKAGIgDANIgHAXIgHAYIgKAdIgEAOIgVgBgAmRBlIgeAAIAJgoIACgDIAJgZIAKgdIAIgWIAEgPIABgGIABgEIACgBIAJAAIANgBIAQAAIgBABIgFAOIAEgCIAJgIIALgHIAEgCQAKgGAMgBQAMgBAKADQAGACAEADQAMAJACARIABAIIgBAFIAAAFIgCAWIgDAaIgJAlIgCAEIgBAFIgUgBIgegBIAAAAIADgXIACgNIACgGIABgFIADgJIAEgJIACgGIACgIIADgIQAAgHgDgEQgDgCgFAAIgHAAQgEAAgHADIgGADIgKAGIgDANIgIAXIgIAYIgKAdIgEAOIgVgBgAB/AkIgKgBIgBAAIAEgQIAFgIIAGgJQAGgDACAAIAGgBIADgBIADgBIADAAIAEgBIAFgBIADgCIAFgBIARgEQAMgCANAAIANABIALABIgDANIgBABIgEAGIgFAIIgDAIIgEAAIgGABIgDAAIgBABIgCAAIgEABIgKACIgHADIgJACIgJACIgLABIgNAAIgPAAg");
	this.shape_26.setTransform(164.3,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33CC00").s().p("ADqBkQgVgEgPgGIALgyQAUANATAIQATAGAVAAQAXAAAKgFQALgWgCgDQgBgDgFgEQgFgDgJgCIgWgHQgPgEgMgFQgMgFgIgEQgIgHgEgJQgFgJAAgLQAAgfAbgTQAbgSAvAAQAXAAAUAEQAUADAOAHIgKAvQgRgKgRgHQgRgGgVAAQgUAAgLAFQgLAHAAAKQAAAFABADQACADAFADIAOAGIAWAHQAiAIAPALQAOAMAAAWQAAARgIANQgIAOgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgFgAgsBlIgegCIAJgnIANgYIANgaQAGgKAEgJIAFgXQACgEABAAIAHgBIAKgBIAJgCIAAABIgFAMIACgCIAHgJIAJgHIAEgDQAJgGAMgDQALgBAKABQAGACAFADQANAGADAQIACAHIAAAGIAAACIACAWQABALgBANIgJAmIgCADIgBAEIgVgCIgegBIgBAAQgBgLABgJQAAgGABgFIACgFIACgDIAEgIIAFgIIACgFIADgGIAEgHQABgGgCgDQgCgCgEgBIgGABIgKAFIgFADIgJAFIgEAPIgJAXIgIAXIgNAbIgGAMIgVgBgAlyBlIgfgCIAKgnIABgEIAMgUIAMgaQAHgKAEgJQADgIACgIIAAgHIAAgDIACgBIAHgBIAKgBIAMgCIAAABIgGAMIACgCIAIgJIAJgHIADgDQAKgGAMgDQALgBAKABQAGACAFADQANAGADAQIACAHIAAAGIAAACIACAWIAAAYIgJAmIgCADIgBAEIgVgCIgfgBIAAAAIAAgUQAAgGABgFIACgFIACgDIAEgIIAFgIIACgFIADgGQADgFABgCQABgGgCgDQgCgCgFgBIgFABIgKAFIgFADIgKAFIgDAPIgJAXIgKAXIgNAbIgGAMIgVgBgAipBkQgJAAgJgCIgLgGIgJgEQgKgIgGgJQgFgJgDgKQABgOAEgOIAHgKQALgMAJgEIAKgHQAJgIADgEIACgDIACgCIADgFIAEgEIAGgGIAHgEIAGgDIAFgDIAEgBQANgEAPAAQANABAMAGIALAIQAJAHAFAJQAEAHACAIIABACQgBALgDAOIgBACIgHAIIgCACIgOAOIgOALIgHAIIgDAEIgBADIgCADIgFAHIgBABQgFAFgIADIgMAHIgBAAQgHADgGABIgMABIgEAAgAiKggIgGACQgHACgEAFIgDAGIgCADIABAAIgBAGIABAFIABADIABACQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIgEAGIgJAHIgJAIIgIAFIgCATIAAABQADAGAEAEQAFAGAIAEIAAAAQAGACAHABQAGABAGgCIAFgBQADAAADgCQAFgDADgEIADgFIABgFQACgFgCgHIgBgBIgBgDIgCgCIAAgCIABgEIADgGIAIgHIABgBIAHgFIAGgEIAAgBIACgOIABgBQgDgFgEgEQgEgGgGgEIgDgBQgIgEgIAAIgHAAgABtArIgMgDIgBAAIAFgTIAIgFIAJgIQAHgEAEgBIAGgDIACAAIABAAIABgCIABgCIACgCIACgCIAFgEQAGgEAMgDQAMgEARAAIAQABIANABIgEAUIgBAAIgGACIgJAIIgFAGIgDAAQgFABgCACIgDABIAAABIgBABIgBABIgFAEIgFAFIgJAFIgKAEIgNADIgQAAIgSAAg");
	this.shape_27.setTransform(164.1,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33CC00").s().p("ADMBkQgVgEgPgHIALgwQAUAMATAIQATAGAVABQAXgBAKgFQALgWgCgDQgBgEgFgDQgFgCgJgDIgWgHQgPgEgMgFQgMgFgIgEIgFgFIgIACIgLADIgHAHIgEABQgFABgCACIgCADIAAABIAAACIABABQADACgCAEQABADgEAFQgDAEgGADQgFAEgGACIgPADIgTABIgUgBIgDAAIgCAJIgCAEIgCADIgVgDQgPgCgQAAIgBAAQgDgKAAgIQgBgFABgDIACgDIACgDQACgDADgDIAGgHIADgEIADgGQAEgEABgBQADgFgCgDQgBgBgEAAIgEACIgJAGIgEACIgJAHIgEAOQgEANgGALQgFALgFALIgQAYIgHALIgWgBIgfgDIAJgoIAQgUIAQgWQAHgKAFgIIAGgXIABgEIAFgCIAHgCIAFgBIABgBIAIgJIADgDQAIgHAMgEQALgCAKAAQAGABAGACQAMAGAGAOIADAGIABAFIAAACIAFAWIAEAUIAJgEIANgFQAEgCACgCIACgEIgBgBIgBAAIgCgCIAAgDIABgDIADgGQAGgHANgFQAOgFAUAAIAQABIgBgGQAAggAbgSQAbgSAvAAQAXAAAUAEQAUADAOAHIgKAvQgRgKgRgHQgRgGgVAAQgUAAgLAFQgLAHAAAKQAAAFABADQACADAFADIAOAGIAWAHQAiAJAPAKQAOAMAAAVQAAASgIANQgIAOgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgFgAlUBlIgfgDIAKgoIACgDIAOgRIAPgWQAIgKAFgIQAEgIABgIIAAgHIAAgDIACgBIAFgCIAGgCIAHgBIABgBIAIgJIADgDQAJgHALgEQALgCAKAAQAGABAGACQANAGAFAOIADAGIABAFIABACIAEAWIAEAPIAQgKIALgFQAKgHADgGIACgCIAAgDIACgFIABgFIAEgGIAEgFIAEgEIAEgEIADgCQAMgGAQgCQAOAAANAFIANAHQAKAGAHAJQAGAGADAIIABABQgCAPgDAMIgCACIgIAGIgCACIgRAMQgIAEgHAGQgGAFgCAEIgCAEIgBAEIAAADIgDAHIAAABQgBAGgGAEQgDADgHAGIgBAAQgFAFgHACQgIACgIABQgKABgKgCQgGgBgGgEIgKgEQgMgHgHgJIgHgKIgQgCQgPgCgQAAIAAAAQgDgKgBgIQgBgFABgDIACgDIACgDIAFgGIAHgHIACgEIAEgGIAFgFQACgFgCgDIgFgBIgEACIgIAGIgFACIgIAHIgEAOQgEANgGALIgNAWIgQAYIgHALIgWgBgAiBglIgHACQgHAFgEAFIgDAIIAAAEIABAAQAAAEACACIADAHIADACIACADQACABAAAEQgBAFgEADQgEAEgHADIgMAHIgLACIgDAVIAAABQAEAHAGAEQAGAGAKADIABAAIAPADIAOgCIAGgDIAGgDQAFgDADgGIACgGQABgDgBgDQABgHgGgGIgBgCIgDgCIgCgDIgBgDIAAgDQABgEADgEQAEgEAGgDIACgBIAKgDIAHgDIACgBIACgQIAAgCQgDgFgGgEQgGgFgHgEIgEgBQgIgDgHAAQgGAAgGACg");
	this.shape_28.setTransform(163.9,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33CC00").s().p("ACuBkQgVgEgPgHIAKguQgFAEgHADQgIADgJABIgWABQgMAAgLgCIgRgCIAAgBIAAgEQgNgBgOAAIgBgBIgGgMQgDAJgGAJQgGALgIAKQgHALgKAKIgJAKIgWgBIgggEIAKgqIASgOIASgTQAKgJAFgLQAHgRgBgDIABgFIADgCIABAAIADgJIAFgJIACgDQAHgIAMgFQAKgEAKAAQAHABAGABQANAEAHAMIAEAGIACAEIABACIAIAUQAFAKADAJIgDANIANgEQAFgCACgEQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAgBAAIgCgDIgEgCIgEgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgCAAgCIADgIQAFgKAOgGQAQgGAWAAIADAAQABgdAagSQAbgSAvAAQAXAAAUAEQAUAEAOAGIgKAvQgRgKgRgHQgRgGgVAAQgUAAgLAFQgLAHAAAKQAAAEABAEQACADAFADIAOAGIAWAGQAiAKAPAKQAOANAAAUQAAASgIAOQgIANgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgFgAk1BlIgggEIAKgqIACgCIAQgMIASgTQAKgJAFgLQAFgFABgIIAAgHIAAgDIABgCIADgCIABAAIADgJIAHgJIACgDQAHgIAMgFQAKgEAKAAQAHABAGABQANAEAHAMIAEAGIACAEIABACIAIAUQAFAKADAJIgKAoIgCADIgCADIgWgFIgFgBQgNgBgNAAIgBgBIgGgMQgDAJgGAJQgGALgJAKQgIALgKAKIgJAKIgWgBgAhVA9IgBgCIAAgHQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIACgFIABgDQADAEABADQABAEAAAEIgCAHIgCAEIgBgCgAiLgLIgBgBIgBgGQAAgDACgFIAEgHIAAACIAAAGIABAGIAAAEIAAAEIgBADIgBACIgDgFg");
	this.shape_29.setTransform(163.7,0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33CC00").s().p("ACQBlQgVgFgPgGIAHggIgIACQgLACgNAAQgPAAgMgCIgSgEIgBAAIAFgZIgKAAIAAAAQgFANgIALQgHALgKAIQgIAMgLAIIgKAIIgXAAIgggGIACgKIgEAEQgIAEgJACQgLADgMAAIgOgDIgMgEQgPgEgKgIQgKgIgHgIIAGghIgIAAIAAAAQgFANgIALQgIALgJAIQgKAMgMAIIgKAIIgXAAIgggGIAKgqIADgDQAIgDAKgFQAKgGALgJQALgIAGgJQAGgIABgHIAAgHIgBgDIAAgBIABgCQAAgBABAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIABgDIgBAAIgJAGIABgDIABgKIAGgKIACgDQAGgKALgFQAKgFALgBQAGgBAGABQAOADAJAKIAFAFIADAEIABACQAHAIAFAKQAHAJAEAKIgKAnIgCACIgCABIgBABIgLgDIgCAAIgEAbIAAABQAGAGAJAEQAJAGAOADIABAAQALABAJgBQAKAAAJgDIAFgDIAFgXIAEgCQAEAGgCAEIgBAGQAFgFACgHIABgIIAAgBIgJAFIgBgBIgCgCIgDgHQgDgCAAgCIgBgDIABgGIACgDQADgEAEgDQAIgFALgEIAVgIIADAAIALgCIADAAIAEgXIgIAFIABgDIACgKIADgHIACgDIACgDQAGgKAKgFQAKgFAKgBQAGgBAHABQANADAKAKIAFAFIACAEIABACIALAPQAFgIAMgGQAOgGATgBQAEgYAWgPQAbgSAvAAQAXAAAUAEQAUAEAOAGIgKAvQgRgKgRgGQgRgHgVAAQgUAAgLAGQgLAFAAALQAAAEABAEQACADAFADIAOAGIAWAHQAiAJAPAKQAOAMAAAWQAAARgIANQgIAOgOAIQgOAJgTAEQgSAEgYAAQgaAAgUgEgAh7gDQgEgCgBgFIgCgBIgCgGQAAgFABgFQACgHAGgGIgBABIAAAHQAAAEABADQABADADADIADAFIACAGIABADIgBAEIgCACIgHgEg");
	this.shape_30.setTransform(163.5,0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33CC00").s().p("AByBlQgVgFgPgGIAFgXIgPABQgRAAgNgDIgPgDQgJAJgJAIQgJAJgNAIIgMAHIgYgCQgPgCgNgDQgLADgLAAIgPgCIgOgDQgQgEgMgHQgKgHgHgIIgMALQgLAJgOAIIgLAHIgXgCQgSgCgOgEIAJgrIADgCQAKgBAKgDQAMgFAMgIQANgGAHgJQAGgHABgKIAAgFIgBgDIAAgBIgCgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAAAIgLAEIABgCQgCgGABgGQABgFADgGIABgDQAGgLAKgGQAKgGALgCQAGgCAHABQAOACALAIIAGAEIADADIACACIAJAIIAEgEIAAABIgCADIAAACIAFAGQAIAIAGAKIgCAIIAAABIAEAEQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAIgBAEIgCADIgFgDIgBAAIgDAMQAHgEACgFIAFADIAGADQACACACAGQgCAHgFAEQgHAFgMACQgGACgPAAQgKgBgLgEIgFAeIAAABQAIAHALAFQALAEAPACIABAAQAMACALgBIABAAIAIgiQAMgDALgDIABgBQAEAEAAAFQACAGgEALIABgBQAGgIACgJIABgJIgBgEIgLAFIgEgEIgEgCIgFgGIgFgFIgCgDIABgGIABgDQADgFAFgDQAIgGAMgCQAOgEALgBIADAAIALAAIgBgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgDgEIgBAAIgKAEIAAgCQgBgGAAgGIAFgLIABgCQgHgFgLgEQgKgEgNgDIgEgBQgYgCgRAIQgFACgEADIgCACQAIgPAUgHQAPgEASACQAJABAJADQAOAEAMAIIAAAAIAIgGQAIgGAKgCQAHgCAHABQAOACALAIIAGAEIADADIACACIAHAHIAFgDQALgFAPgDQAGgTATgNQAbgSAvAAQAWAAAVAEQATAEAOAGIgKAvQgQgKgRgHQgRgGgWAAQgTAAgLAGQgHADgCAFIAOADIgDAWIAIADIAWAHQAjAIAPALQAOAMAAAWQAAARgIANQgIAOgOAIQgPAJgSAEQgSAEgYAAQgbAAgTgEg");
	this.shape_31.setTransform(163.4,0.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33CC00").s().p("ABTBkQgUgEgPgGIADgQQgQAAgNgDIgOALQgKAIgQAHIgNAGIgXgDIgRgCIgLABIgQgBIgPgCQgSgEgNgHIgHgEIgCABQgNAIgPAHIgNAGIgXgDQgSgCgPgEIAJgsIAEgCQAKACAMgCQANgDAOgHQAOgFAIgIQAHgHAAgKQABgEgBgDIgBgBIgBgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAgBgBIgFgDQgFgCgCgDIgBAAIgMABIAAgCQgCgFAAgHQAAgFACgGIACgFQAEgLAKgHQAJgHALgDIAOgCQAOAAANAGIAHAEIAEACIACABIACACQAIgIALgFQAQgFAUAAQAJABALADQAKACAKAEIAKgFIAOgCQAPAAAMAGIAHAEIAEACIADABIAFAEIALgEQAHgPAQgLQAbgSAvAAQAWAAAUAEQAUADAOAHIgKAvQgQgKgRgHQgSgGgVAAQgTAAgKAFIAAAAQANACAJADIgGAhIgBABIAQAFQAiAIAPALQAPAMAAAWQAAARgIANQgIAOgOAIQgPAJgSAEQgTAEgXAAQgbAAgUgFgAiQBGIAAABIADACIAJgJQAJgJAGgLIADAAQAQABAJgBQANgCAHgFQAHgFAAgHQgBgHgDgCIgGgEQgDAHgMAIQgIACgKACIgIACIgDAJIgBACQgKgDgLgEIgGAhgAhIgGIAAAGIACABIAFgRIAAgBQAHgFANgCIACAAIAOAAIAHABQAKACAHAFIADgBIADgbIABgGQgGgFgLgEIgBAAQgMgEgPgDIgFgBQgagCgTAKIgDACIAQALQAKAIAHAKIgCAMQgHAEAAAGg");
	this.shape_32.setTransform(163.1,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#33CC00").s().p("AA1BlQgUgFgPgHIACgIIgJAFQgMAIgRAFIgOAEIgYgCIgIgBIgOAAIgQgCQgSgDgNgFQgLAFgMAEIgPAEIgYgCQgSgDgPgEIAKgtIAEgCQAKAEAOgBQAOAAAQgGIAGgBIACgJIALADIAFgFQAHgGABgLIgBgGIgCgEIgBgCQgBgCgEgBIgJgDQgHgCgEgEIgBAAIgMAAIgBgDQgEgGgBgGQAAgGABgHIABgEQAEgNAKgJQAIgGAMgFQAGgDAHAAQAQgBAOAEIAIACIADABIAGgDQAQgGAVgBQAKAAAMADIANADIAKgCQAPgBAPAEIAIACIAEADIACAAQAGgJALgHQAbgTAvAAQAWAAAUAEQAUADAOAHIgKAvQgQgKgRgGQgSgHgVAAIgBAAIALADIgGAkIgEABQgHgGgMgDQgKgCgLABQABADAFADIAOAGIAWAGQAiAJAPALQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgbAAgUgEgAiAAmIgHAlIAAAAQAIAGAMAEQALgHAKgJQAIgHAFgJIABgEIgWgBQgMgDgOgHIAAAAgAgEAlIAFACIgBgEIAAgCIgEAEg");
	this.shape_33.setTransform(162.9,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#33CC00").s().p("AAXBlIgWgHQgIAEgLADIgQACIgYgCIgDAAIgOgBQgMgCgLgCIgSAFIgPACIgZgCQgTgEgPgEIAKguIAEgBQAMAFAPACIAPAAIADgRIAMAEIAIACIANADIAHgGQAJgGAAgLIgBgGIgCgEIgCgCQgCgCgFgCIgMgFQgIgBgGgEIgCAAQgHgBgGgBIgCgDQgFgGgBgHQgBgGABgHIAAgFQADgOAJgKQAIgHAMgGQAHgDAHgCQAQgCAQADIAHABQAOgFASgBQALgBAMACIAMACQALAAALACIADAAIAHgEQAbgTAvAAQAWAAAUAEQAUADAOAHIgKAvQgQgKgRgGIgMgEIgGAgIgEAAQgIgGgNgDIgIgCIgEATIASAFQAiAJAPALQAPAMAAAWQAAARgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgbAAgUgEgAh1AyIgEABIgFAbIAAAAQALAHAQAFIAHACIAIgoIgFgBIgNgFIgPAEgAAegbIAEgBIAAAAIgJgDIgCAAIAHAEg");
	this.shape_34.setTransform(162.7,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33CC00").s().p("AgFBlIgCgBIgLACIgRABIgXgCIgOgBIgLACIgRABIgagCQgTgEgPgFIAKgwIAFAAQALAHANAEIAEgSIAIADIALAFIACABIAKACIABgEQALAFAKADQAGgCAEgDIADgKIAFACQACgEAAgGQABgEgCgDIgCgDIgCgCQgEgDgGgCIgPgGIgSgGIgCAAIgOgEIgCgCQgGgHgDgHQgCgGABgHIAAgGQACgPAJgLQAHgJAMgGIAPgGQAQgEASACIADAAQAJgDALgBQAMgBALABIANACQAagOApAAQAWAAAUAEQAUAEAOAGIgKAvQgPgJgPgGIgEAXIgEABQgHgHgKgDIgGAXIgEABIgEgCQgJgFgMgFIAAABIgFAAIgDgCIgEgCIgGgCIgFAAIABABQABADAFADIAOAGIAWAHQAiAJAPAKQAPAMAAAWQAAARgIANQgIAOgOAIQgPAJgSAEQgTAEgXAAQgbAAgSgEgAAaBOIgLAHIgPAHIAGAAIAEgBQAMgHAIgLIgEAFgAh2BSIAAAAQAKAFANAEIAHgiQgMABgMgCIgGAagAhNhCQgNAOAAASQgBAKADAIQADAGAEAEIADACQAHAFAJAEQAKAEAMAEIASAHIALAEIACADIgBgDQgBgDgEgCQgDgDgHgDIgQgHQgMgDgJgDQgJgEgFgGQgHgFgCgIQgCgEAAgGIAAgHQACgSAMgMIgEAEg");
	this.shape_35.setTransform(162.5,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33CC00").s().p("AgRBoIgBAAIgTAAIgJgBIgFABIgSAAIgagDQgUgEgPgHIAKgvIAFgBIAKAHIACgKIAEACIALAFIABgDIAOAHIACgLIAKAGIABgEQASALAQAHIABAAIAAAAQAGgCAEgDQAKgGAAgLIgBgHIgDgEIgDgCQgEgDgHgCIgTgGIgWgIIgBgBQgJgDgHgCIgDgCQgHgGgDgJQgDgGAAgIIAAgFQABgQAIgMQAHgLAMgGQAHgFAJgDQAQgFAUgBIAHgBIAQgBQAVgGAcAAQAWAAAUAEQAUAEAOAGIgKAvIgPgIIgCANIgFAAIgGgFIgCAMIgFAAIgEgDIgFgDIgBAAIgFAAIgBAAIgDAAIgGgGIgDAMIgFAAIgEgDQgKgHgNgFIgSgEIgBAGQAAAEACAEQABADAFADIAOAGIAWAGQAiAKAPAKQAPANAAAUQAAASgIAOQgIANgOAIQgPAJgSAEQgTAEgXAAQgOAAgNgBgAAvBPQgGAEgGAEQgOAIgRADIgCABIAJgBQAMgDAJgGQALgGAIgIIgEAEgAgpA+IAPABIAKgBQgKABgKgCIgFABg");
	this.shape_36.setTransform(162.3,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},12).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:164.6,y:1.3}}]},1).to({state:[]},1).to({state:[{t:this.shape_25,p:{x:164.5,y:0.3}}]},12).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},12).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:164.6,y:1.3}}]},1).to({state:[]},1).to({state:[{t:this.shape_25,p:{x:164.5,y:0.3}}]},12).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// non-S
	this.instance_2 = new lib.nonS("synched",0);
	this.instance_2.setTransform(160.9,-1.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-56,y:-2.6},0).to({guide:{path:[-55.9,-2.7,54.1,-134.4,160.4,-2.2,160.6,-2.5,160.8,-2.7]}},11).to({_off:true},1).wait(36).to({_off:false,y:-1.6},0).to({_off:true},1).wait(1).to({_off:false,x:-56,y:-2.6},0).to({guide:{path:[-55.9,-2.7,54.1,-134.4,160.4,-2.2,160.6,-2.5,160.8,-2.7]}},11).to({_off:true},1).wait(12));

	// S
	this.instance_3 = new lib.SLetter("synched",0,false);
	this.instance_3.setTransform(-56,-2.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({guide:{path:[-55.9,-2.7,54.1,-134.4,160.5,-2.2,160.5,-2.2,160.5,-2.2]}},11).to({_off:true},1).wait(36).to({_off:false,y:-2.2},0).to({_off:true},1).wait(1).to({_off:false,x:-56,y:-2.6},0).to({guide:{path:[-55.9,-2.7,54.1,-134.4,160.5,-2.2,160.5,-2.2,160.5,-2.2]}},11).to({_off:true},1).wait(36).to({_off:false,y:-2.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,76,144,36);


// stage content:



(lib.Contraposition2016_Canvasx85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		S = 1;
		P = 1;
		A = 1;
		E = 0;
		I = 0;
		O = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.PMenu = new lib.PTermMenu();
	this.PMenu.setTransform(237.6,326.7,0.722,0.722,0,0,0,-137.1,73.2);

	this.TypeMenu = new lib.CSMenu();
	this.TypeMenu.setTransform(355.8,231.5,0.722,0.722);

	this.SMenu = new lib.STermMenu();
	this.SMenu.setTransform(336.6,279.1,0.722,0.722);

	this.CSType = new lib.CSType();
	this.CSType.setTransform(219.5,76.4,0.85,0.85);

	this.Contraposition = new lib.Contraposition();
	this.Contraposition.setTransform(211.2,76.6,0.85,0.85);

	this.TermSelected = new lib.TermSelection();
	this.TermSelected.setTransform(257.1,116,0.85,0.85,0,0,0,54,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TermSelected},{t:this.Contraposition},{t:this.CSType},{t:this.SMenu},{t:this.TypeMenu},{t:this.PMenu}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314.6,250.2,330.8,280.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;