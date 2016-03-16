(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 480,
	height: 260,
	fps: 12,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



// stage content:
(lib._5_Connectives_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336666").s().p("AgvAsIAAgRIBfAAIAAARgAgvAIIAAgPIBfAAIAAAPgAgvgaIAAgRIBfAAIAAARg");
	this.shape.setTransform(91,216.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336666").s().p("Ag4AuIAAgQIBEAAQAKAAAKgJQAJgIAAgNQAAgMgJgJQgKgIgLAAIhDAAIAAgQIBDAAQARAAAPAMQAOAOAAATQAAAUgOAOQgPANgRgBg");
	this.shape_1.setTransform(91,183.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#336666").s().p("AgHA5IgthyIASAAIAiBeIAjheIASAAIgtByg");
	this.shape_2.setTransform(91,151.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336666").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_3.setTransform(91,116.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336666").s().p("AAAAIQgQgGgGAAQgNAAgMAMIAAgQQAKgLAQAAQAHAAARAHQAQAFAFAAQANAAALgMIAAARQgLAKgPAAQgGAAgQgGg");
	this.shape_4.setTransform(91,84.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336666").s().p("AgFA6IAAhyIALAAIAAByg");
	this.shape_5.setTransform(373.8,216.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#336666").s().p("AgQApQgFgCgDgDQgDgEgDgEQgCgFAAgGQABgJADgGQADgEAJgDQAGgEAKgBIATgCIAAgCQAAgFgBgEQgCgCgDgCQgDgCgEgBIgGAAIgLABIgNAFIgBAAIAAgPIALgCIAOgBQAHgBAGACQAGABAEADQAGAEABAFQACAGAAAIIAAA3IgNAAIAAgJIgFAEIgFADIgHADIgIACQgFgBgFgCgAAGAAIgKABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAHAAQAFAAAGgCIAKgIIAAgVg");
	this.shape_6.setTransform(367.8,218.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#336666").s().p("AASArIAAguIgBgLIgCgIQgBgDgDgBQgEgCgEAAQgEAAgGADQgFADgGAEIAAA9IgNAAIAAhSIANAAIAAAKQAHgHAGgCQAFgEAGAAQAMAAAHAJQAIAIgBAQIAAA0g");
	this.shape_7.setTransform(359.9,218.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_8.setTransform(351.4,218.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#336666").s().p("AgFA4IAAhSIALAAIAABSgAgGgoIAAgPIANAAIAAAPg");
	this.shape_9.setTransform(345.6,217);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#336666").s().p("AgHAvQgHgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgYIAOAAIAAAYIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEAAACIAEAEQADACAFAAIAHgBIAEgCIABAAIAAANIgIACIgHAAQgKAAgGgHg");
	this.shape_10.setTransform(341.3,217.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#336666").s().p("AgGA4IAAhSIANAAIAABSgAgHgoIAAgPIAPAAIAAAPg");
	this.shape_11.setTransform(337,217);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#336666").s().p("AgPA4QgGgDgEgGQgEgFgCgIQgCgIAAgLQAAgLACgGQADgIAFgGQAFgFAGgDQAHgEAFAAQAGAAAFACIAKAEIAAgkIANAAIAAByIgNAAIAAgIIgHAEIgFAEIgGACIgGABQgHAAgFgDgAgNgHQgGAHAAAPQAAAPAFAHQAFAIAJAAQAEAAAGgCQAGgDAFgEIAAguIgKgEIgJgBQgJAAgGAIg");
	this.shape_12.setTransform(330.7,216.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#336666").s().p("AASArIAAguIgBgLIgCgIQgBgDgDgBQgEgCgEAAQgEAAgGADQgFADgGAEIAAA9IgNAAIAAhSIANAAIAAAKQAHgHAGgCQAFgEAGAAQAMAAAHAJQAIAIgBAQIAAA0g");
	this.shape_13.setTransform(322.5,218.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_14.setTransform(314.1,218.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#336666").s().p("AgHApQgHgDgGgGQgFgFgDgIQgCgIAAgLQAAgJADgIQADgIAEgGQAFgFAIgDQAHgDAHAAQAGAAAHACIALAEIAAAQIgBAAIgDgDIgGgDIgHgDIgIgBQgJAAgGAIQgHAJAAANQAAAOAHAJQAGAIAJAAQAHAAAGgDQAHgDAEgEIABAAIAAAQIgFACIgGACIgGACIgHAAQgHAAgHgCg");
	this.shape_15.setTransform(306.5,218.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#336666").s().p("AgGA4IAAhSIANAAIAABSgAgHgoIAAgPIAOAAIAAAPg");
	this.shape_16.setTransform(301.2,217);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#336666").s().p("AgkA3IAAhtIAeAAIAPAAQAGACAGACQAFADADAFQADAGAAAHQAAAHgEAHQgEAGgIADIAAABQAKADAGAFQAFAHAAALQAAAIgDAGQgDAHgGAEQgFAFgIACQgHACgJAAgAgWArIAMAAIAOgBQAFgBAFgEQAEgCACgEQACgDAAgGQAAgHgCgEQgCgEgFgDIgIgCIgJgBIgSAAgAgWgJIASAAIAHAAIAIgDQADgDABgDQABgEAAgFIgBgHQgBgDgDgBQgDgCgFgBIgKgBIgPAAg");
	this.shape_17.setTransform(295.3,217);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#336666").s().p("AgFA6IAAhyIALAAIAAByg");
	this.shape_18.setTransform(368.6,183);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#336666").s().p("AgQApQgFgCgEgDQgCgEgDgEQgCgFAAgGQABgJADgGQADgEAJgDQAHgEAJgBIATgCIAAgCQAAgFgBgEQgCgCgDgCQgCgCgEgBIgHAAIgLABIgNAFIgBAAIAAgPIALgCIAOgBQAHgBAGACQAGABAFADQAEAEACAFQACAGABAIIAAA3IgOAAIAAgJIgFAEIgFADIgIADIgIACQgEgBgFgCgAAGAAIgKABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAIAAQAEAAAGgCIAKgIIAAgVg");
	this.shape_19.setTransform(362.6,184.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#336666").s().p("AASArIAAguIAAgLIgDgIQgBgDgDgBQgDgCgFAAQgEAAgFADQgGADgGAEIAAA9IgNAAIAAhSIANAAIAAAKQAHgHAGgCQAFgEAGAAQANAAAGAJQAIAIgBAQIAAA0g");
	this.shape_20.setTransform(354.7,184.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_21.setTransform(346.2,184.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#336666").s().p("AgFA4IAAhSIALAAIAABSgAgGgoIAAgPIAOAAIAAAPg");
	this.shape_22.setTransform(340.4,183.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#336666").s().p("AgHAvQgHgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgYIAOAAIAAAYIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEAAACIAEAEQADACAFAAIAHgBIAEgCIABAAIAAANIgIACIgHAAQgKAAgGgHg");
	this.shape_23.setTransform(336.1,183.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#336666").s().p("AgGA4IAAhSIANAAIAABSgAgHgoIAAgPIAOAAIAAAPg");
	this.shape_24.setTransform(331.8,183.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#336666").s().p("AgPA4QgGgDgEgGQgEgFgDgIQgBgIAAgLQgBgLADgGQADgIAFgGQAFgFAGgDQAGgEAGAAQAGAAAFACIAKAEIAAgkIAOAAIAAByIgOAAIAAgIIgHAEIgFAEIgGACIgGABQgGAAgGgDgAgNgHQgGAHAAAPQAAAPAFAHQAEAIAKAAQAEAAAGgCQAGgDAFgEIAAguIgKgEIgJgBQgJAAgGAIg");
	this.shape_25.setTransform(325.5,183.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#336666").s().p("AASArIAAguIgBgLIgBgIQgCgDgEgBQgCgCgGAAQgDAAgGADQgFADgGAEIAAA9IgOAAIAAhSIAOAAIAAAKQAHgHAGgCQAFgEAGAAQAMAAAHAJQAHAIABAQIAAA0g");
	this.shape_26.setTransform(317.4,184.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_27.setTransform(308.9,184.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#336666").s().p("AgLA2QgJgEgHgHQgGgIgEgKQgEgLAAgOQAAgMAEgLQADgKAHgIQAHgHAJgEQAJgEAJAAIALABIAJACIAHADIAIADIAAASIgCAAIgFgEIgHgFIgJgEQgFgBgHAAQgHAAgEADQgHACgEAGQgFAGgDAIQgCAJAAAJQAAALACAIQADAJAFAFQAFAGAGADQAEACAHAAQAHAAAFgBIAKgEIAHgFIAEgEIACAAIAAASIgHADIgIADIgJACIgLABQgJAAgJgDg");
	this.shape_28.setTransform(300.3,183.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#336666").s().p("AASArIAAguIgBgLIgBgIQgCgDgEgBQgCgCgGAAQgDAAgGADQgFADgGAEIAAA9IgOAAIAAhSIAOAAIAAAKQAHgHAGgCQAFgEAGAAQAMAAAHAJQAIAIAAAQIAAA0g");
	this.shape_29.setTransform(366,150.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_30.setTransform(357.5,150.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#336666").s().p("AgGA4IAAhSIANAAIAABSgAgHgoIAAgPIAOAAIAAAPg");
	this.shape_31.setTransform(351.7,149.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#336666").s().p("AgHAvQgHgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgYIAOAAIAAAYIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEAAACIAEAEQADACAFAAIAHgBIAEgCIABAAIAAANIgIACIgHAAQgKAAgGgHg");
	this.shape_32.setTransform(347.4,149.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#336666").s().p("AgHApQgHgDgGgGQgFgFgDgIQgCgIAAgLQAAgJADgIQADgIAEgGQAFgFAIgDQAHgDAHAAQAGAAAHACIALAEIAAAQIgBAAIgDgDIgGgDIgHgDIgIgBQgJAAgGAIQgHAJAAANQAAAOAHAJQAGAIAJAAQAHAAAGgDQAHgDAEgEIABAAIAAAQIgFACIgGACIgGACIgHAAQgHAAgHgCg");
	this.shape_33.setTransform(341.4,150.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#336666").s().p("AASArIAAguIAAgLIgDgIQgBgDgDgBQgDgCgFAAQgEAAgFADQgGADgGAEIAAA9IgNAAIAAhSIANAAIAAAKQAHgHAGgCQAFgEAGAAQANAAAGAJQAIAIgBAQIAAA0g");
	this.shape_34.setTransform(333.5,150.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#336666").s().p("AgPAoQgFgCgEgDQgDgEgCgGQgCgGAAgJIAAg0IAOAAIAAAuIAAALQABAEACADQABAEADACQADABAGAAQADAAAGgDQAGgDAEgEIAAg9IAOAAIAABSIgOAAIAAgKQgGAHgGACQgGADgFABQgFgBgFgCg");
	this.shape_35.setTransform(324.9,151);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#336666").s().p("AgNBHIgFgBIAAgMIAAAAIAEABIAEAAIAJgBQACgCABgDQACgCABgFIAAgKIAAhCIgNAAIAAgMIAbAAIAABUQAAAOgHAIQgIAHgMAAgAADg4IAAgOIAQAAIAAAOg");
	this.shape_36.setTransform(317.7,151);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#336666").s().p("AgRApIgMgFIAAgQIABAAIAEAEIAHADIAIADIAIABIAGAAIAFgCIAEgEIABgGQAAgFgCgCQgDgDgHgCIgFgBIgIgCQgKgDgEgEQgEgGAAgIQAAgLAIgHQAJgHAMAAQAHAAAHACQAHABAFADIAAAPIgBAAQgGgEgGgDQgHgCgHAAQgEAAgFADQgFACAAAGQAAAGADACQADADAGABIAFACIAIACQAJACAFAEQAFAFAAAJQAAAGgCAEQgDAFgEAEQgEADgGACQgGACgGAAQgIAAgIgCg");
	this.shape_37.setTransform(313.1,150.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#336666").s().p("AgFA4IAAhSIALAAIAABSgAgGgoIAAgPIANAAIAAAPg");
	this.shape_38.setTransform(307.9,149.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#336666").s().p("AgqA3IAAhtIAZAAQAQAAAHACQAIADAHAEQAKAGAGAMQAGAMAAAPQAAAOgGANQgGAMgKAHQgJAFgJACQgGACgOAAgAgcArIAMAAQAJAAAHgCQAGgCAGgEQAIgFAEgJQAEgJAAgMQAAgMgEgIQgFgKgIgFQgGgEgFgBQgGgCgKAAIgMAAg");
	this.shape_39.setTransform(301.3,149.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#336666").s().p("AASArIAAguIAAgLIgDgIQgBgDgDgBQgDgCgFAAQgEAAgFADQgGADgGAEIAAA9IgNAAIAAhSIANAAIAAAKQAHgHAGgCQAFgEAGAAQANAAAGAJQAIAIgBAQIAAA0g");
	this.shape_40.setTransform(368.6,117);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_41.setTransform(360.2,117.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#336666").s().p("AgGA4IAAhSIANAAIAABSgAgHgoIAAgPIAOAAIAAAPg");
	this.shape_42.setTransform(354.3,115.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#336666").s().p("AgHAvQgHgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgYIAOAAIAAAYIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEAAACIAEAEQADACAFAAIAHgBIAEgCIABAAIAAANIgIACIgHAAQgKAAgGgHg");
	this.shape_43.setTransform(350,116);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#336666").s().p("AgHApQgHgDgGgGQgFgFgDgIQgCgIAAgLQAAgJADgIQADgIAEgGQAFgFAIgDQAHgDAHAAQAGAAAHACIALAEIAAAQIgBAAIgDgDIgGgDIgHgDIgIgBQgJAAgGAIQgHAJAAANQAAAOAHAJQAGAIAJAAQAHAAAGgDQAHgDAEgEIABAAIAAAQIgFACIgGACIgGACIgHAAQgHAAgHgCg");
	this.shape_44.setTransform(344,117.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#336666").s().p("AASArIAAguIgBgLIgBgIQgCgDgEgBQgCgCgGAAQgDAAgGADQgFADgFAEIAAA9IgPAAIAAhSIAPAAIAAAKQAGgHAGgCQAFgEAGAAQAMAAAIAJQAGAIABAQIAAA0g");
	this.shape_45.setTransform(336.2,117);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#336666").s().p("AgPAoQgFgCgEgDQgDgEgCgGQgCgGAAgJIAAg0IAOAAIAAAuIAAALQABAEACADQABAEADACQADABAGAAQADAAAGgDQAGgDAEgEIAAg9IAOAAIAABSIgOAAIAAgKQgGAHgGACQgGADgFABQgFgBgFgCg");
	this.shape_46.setTransform(327.6,117.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#336666").s().p("AgNBHIgFgBIAAgMIAAAAIAEABIAEAAIAJgBQACgCABgDQACgCABgFIAAgKIAAhCIgNAAIAAgMIAbAAIAABUQAAAOgHAIQgIAHgMAAgAADg4IAAgOIAQAAIAAAOg");
	this.shape_47.setTransform(320.4,117.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#336666").s().p("AASArIAAguIgBgLIgCgIQgBgDgDgBQgEgCgEAAQgEAAgGADQgFADgGAEIAAA9IgNAAIAAhSIANAAIAAAKQAHgHAGgCQAFgEAGAAQAMAAAHAJQAIAIgBAQIAAA0g");
	this.shape_48.setTransform(314.9,117);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_49.setTransform(306.4,117.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#336666").s().p("AgLA2QgJgEgHgHQgGgIgEgKQgEgLAAgOQAAgMAEgLQADgKAHgIQAHgHAJgEQAJgEAJAAIALABIAJACIAHADIAIADIAAASIgCAAIgFgEIgHgFIgJgEQgFgBgHAAQgHAAgEADQgHACgEAGQgFAGgDAIQgCAJAAAJQAAALACAIQADAJAFAFQAFAGAGADQAEACAHAAQAHAAAFgBIAKgEIAHgFIAEgEIACAAIAAASIgHADIgIADIgJACIgLABQgJAAgJgDg");
	this.shape_50.setTransform(297.8,115.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#336666").s().p("AASArIAAguIgBgLIgBgIQgCgDgEgBQgCgCgGAAQgDAAgGADQgFADgFAEIAAA9IgPAAIAAhSIAPAAIAAAKQAGgHAGgCQAFgEAGAAQAMAAAIAJQAHAIAAAQIAAA0g");
	this.shape_51.setTransform(358.8,83.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_52.setTransform(350.4,83.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#336666").s().p("AgGA4IAAhSIAMAAIAABSgAgHgoIAAgPIAOAAIAAAPg");
	this.shape_53.setTransform(344.5,82);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#336666").s().p("AgHAvQgHgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgYIAOAAIAAAYIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEAAACIAEAEQADACAFAAIAHgBIAEgCIABAAIAAANIgIACIgHAAQgKAAgGgHg");
	this.shape_54.setTransform(340.2,82.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#336666").s().p("AgQApQgFgCgEgDQgCgEgDgEQgCgFAAgGQABgJADgGQADgEAJgDQAHgEAJgBIATgCIAAgCQAAgFgBgEQgCgCgDgCQgCgCgEgBIgHAAIgLABIgNAFIgBAAIAAgPIALgCIAOgBQAHgBAGACQAGABAFADQAEAEACAFQACAGABAIIAAA3IgOAAIAAgJIgFAEIgFADIgIADIgIACQgEgBgFgCgAAGAAIgKABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAIAAQAEAAAGgCIAKgIIAAgVg");
	this.shape_55.setTransform(333.4,83.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#336666").s().p("AgNA5IgNgCIAAgPIABAAIAFACIAFACIAIABIAHABQAEAAAFgCQAEgCADgDQACgDABgEIACgJIAAgHQgHAFgFACQgFACgGAAQgPAAgIgKQgJgLAAgSQAAgKAEgIQACgIAFgGQAFgFAHgDQAGgDAFAAQAGAAAFACIAKAEIAAgEIANAAIAABIQAAAVgJAKQgJAKgRAAIgMgBgAgNglQgGAIAAAPQAAAOAEAFQAFAHAKAAQAEAAAGgCIALgGIAAgsIgLgDIgIgBQgJAAgGAHg");
	this.shape_56.setTransform(325.1,84.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#336666").s().p("AgYAgQgLgLABgVQAAgSAKgMQALgNAPAAQAIABAGACQAGACAEAFQAFAFACAHQACAHABAJIAAAGIg5AAQAAAPAIAIQAHAHALAAIAKgBIAHgDIAHgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgIABQgTAAgLgMgAAWgIIgCgKQgBgEgCgDQgDgDgDgBQgEgBgGAAQgEAAgDABQgEACgEADQgDADgBAEQgCAEgBAFIArAAIAAAAg");
	this.shape_57.setTransform(317.2,83.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#336666").s().p("AAXA3IgwheIAABeIgNAAIAAhtIAVAAIAqBWIAAhWIAOAAIAABtg");
	this.shape_58.setTransform(308,82);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#336666").s().p("AgUAvQgIgCgGgDIAAgSIABAAIAFAEIAHADIAKAEQAFABAFABIAGgBIAHgCQADgDABgCQACgDAAgEQAAgFgDgEQgEgCgIgCIgGgCIgJgDQgLgDgFgFQgFgGAAgKQAAgNAJgJQAKgIAPAAQAIAAAIACQAIACAGAEIAAARIgBAAQgGgFgIgDQgIgDgHAAQgHAAgFAEQgGADAAAHQAAAGAEADQADADAHACIAGACIAKACQALACAFAFQAGAGAAALQAAAGgDAGQgCAFgFAEQgFAFgHACQgHACgIAAQgJAAgJgDg");
	this.shape_59.setTransform(418.6,48.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#336666").s().p("AgJA4QgHgIAAgRIAAg0IgLAAIAAgNIALAAIAAgcIAQAAIAAAcIAcAAIAAANIgcAAIAAAtIAAALIAAAIQACADADABQADACAGAAIAIgBIAFgCIABAAIAAAOIgJACIgJABQgLAAgIgHg");
	this.shape_60.setTransform(411.6,47.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#336666").s().p("AAVAyIAAg2IAAgNIgDgJQgCgDgDgCQgEgCgGAAQgEAAgHAEQgGADgHAFIAABHIgQAAIAAhgIAQAAIAAALQAIgGAHgEQAGgDAHAAQAOgBAJAKQAIAJAAATIAAA9g");
	this.shape_61.setTransform(403.6,48.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#336666").s().p("AgcAlQgNgNAAgYQAAgWANgOQAMgOASAAQAKAAAGADQAHACAGAGQAFAGADAIQADAIAAALIAAAHIhCAAQAAARAJAJQAIAJANAAIALgBIAJgDIAIgEIAFgEIABAAIAAASIgHADIgIADIgJACIgKABQgVAAgNgOgAAagJIgCgMQgBgEgDgEQgDgDgEgCQgFgCgHAAQgEAAgFACQgEACgEADQgEAEgCAFIgCALIAyAAIAAAAg");
	this.shape_62.setTransform(393.9,48.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#336666").s().p("AAuAyIAAg3IAAgMQgBgGgCgDQgBgDgDgDQgDgBgGAAQgFAAgGADQgGADgGAGIAAADIAAAGIAAA+IgOAAIAAg3IgBgMQAAgGgCgDQgBgDgEgDQgDgBgGAAQgEAAgHAEQgFADgGAFIAABHIgQAAIAAhgIAQAAIAAALQAGgGAHgEQAGgDAIAAQAJAAAGADQAFAFAEAIQAHgIAHgFQAHgDAIAAQAGAAAFACQAGACADADQAFAFABAHQADAHAAAKIAAA+g");
	this.shape_63.setTransform(381.8,48.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#336666").s().p("AgcAlQgNgNAAgYQAAgWANgOQAMgOASAAQAKAAAGADQAHACAGAGQAFAGADAIQADAIAAALIAAAHIhCAAQAAARAJAJQAIAJANAAIALgBIAJgDIAIgEIAFgEIABAAIAAASIgHADIgIADIgJACIgKABQgVAAgNgOgAAagJIgCgMQgBgEgDgEQgDgDgEgCQgFgCgHAAQgEAAgFACQgEACgEADQgEAEgCAFIgCALIAyAAIAAAAg");
	this.shape_64.setTransform(369.6,48.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#336666").s().p("AgJA4QgHgIAAgRIAAg0IgLAAIAAgNIALAAIAAgcIAQAAIAAAcIAcAAIAAANIgcAAIAAAtIAAALIAAAIQACADADABQADACAGAAIAIgBIAFgCIABAAIAAAOIgJACIgJABQgLAAgIgHg");
	this.shape_65.setTransform(362,47.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#336666").s().p("AgTAwQgFgCgFgEQgDgEgDgGQgCgGAAgGQAAgKAEgIQAEgEAKgEQAIgEALgCIAWgCIAAgDQAAgGgCgDQgBgEgEgCQgDgCgEAAIgIgBIgNACQgIABgHADIgBAAIAAgQIANgDIAQgCQAIABAHABQAHACAGAEQAFADADAHQACAGAAAKIAABAIgQAAIAAgKIgFAEIgHAEIgIADIgKABQgGAAgFgCgAAHAAIgMABQgHACgEAEQgEAEAAAIQAAAIAEAEQAFAFAJAAQAGAAAGgEQAGgDAGgFIAAgZg");
	this.shape_66.setTransform(353.9,48.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#336666").s().p("AgJA4QgHgIAAgRIAAg0IgLAAIAAgNIALAAIAAgcIAQAAIAAAcIAcAAIAAANIgcAAIAAAtIAAALIAAAIQACADADABQADACAGAAIAIgBIAFgCIABAAIAAAOIgJACIgJABQgLAAgIgHg");
	this.shape_67.setTransform(346.7,47.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#336666").s().p("AgYBAQgKgDgJgFIAAgVIACAAQAIAIALAEQALAFAKAAQAMAAAHgGQAIgGAAgKQAAgIgEgFQgEgFgIgCIgKgDIgMgDIgMgEQgFgBgEgEQgEgFgCgFQgDgGAAgIQAAgQANgKQAMgLARAAQALAAAKACQAJACAJAEIAAAVIgCAAQgGgGgJgEQgKgEgLAAQgKAAgHAGQgIAFAAAJQAAAJAFAFQAEAEAIADIAMADIANAEQANADAHAHQAGAIAAAMQAAAIgDAHQgDAIgGAFQgGAGgIADQgIADgKAAQgOAAgKgDg");
	this.shape_68.setTransform(338.8,46.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#336666").s().p("AgSBBQgHgDgEgGQgFgHgDgJQgCgKAAgMQgBgMAEgIQADgKAGgGQAFgHAIgEQAIgDAGAAQAHAAAGABQAFACAGAEIAAgrIARAAIAACGIgRAAIAAgKIgHAGIgGADIgHADIgHAAQgIAAgHgDgAgQgHQgGAHAAASQgBARAGAJQAFAJAMAAQAFAAAHgDQAGgCAGgFIAAg3QgGgDgFgBIgKgBQgLAAgIAKg");
	this.shape_69.setTransform(322.9,46.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#336666").s().p("AAVAyIAAg2IAAgNIgDgJQgCgDgDgCQgEgCgGAAQgEAAgHAEQgGADgHAFIAABHIgQAAIAAhgIAQAAIAAALQAIgGAHgEQAGgDAHAAQAOgBAJAKQAIAJAAATIAAA9g");
	this.shape_70.setTransform(313.3,48.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#336666").s().p("AgSAvQgGgCgEgEQgEgEgCgIQgDgGAAgKIAAg+IARAAIAAA2IAAANQABAFACAEQACADADADQAEABAGAAQAEAAAHgEQAHgCAGgGIAAhHIAQAAIAABgIgQAAIAAgLQgIAHgHADQgHADgGAAQgGAAgGgCg");
	this.shape_71.setTransform(303.3,48.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#336666").s().p("AgfAlQgLgOAAgXQAAgXAMgNQAMgOASAAQATAAAMAOQAMANAAAXQAAAYgMAOQgMANgTAAQgTAAgMgOgAgSgaQgHAJAAARQAAASAHAJQAGAKAMAAQAMAAAHgJQAHgKAAgSQAAgRgHgJQgGgKgNAAQgMAAgGAKg");
	this.shape_72.setTransform(293.6,48.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#336666").s().p("AgnBEIAAiEIAQAAIAAAKQAGgFAIgEQAHgDAHAAQARAAAJAMQAJAOAAAWQAAAXgLAOQgMAPgRAAQgGgBgGgBIgLgGIAAAqgAgLgwQgGADgGAFIAAA2IALADIALABQAKABAHgKQAHgJAAgQQAAgRgFgJQgFgJgMAAQgFAAgHADg");
	this.shape_73.setTransform(284.1,50.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#336666").s().p("AAvAyIAAg3IgBgMQAAgGgDgDQgBgDgDgDQgDgBgGAAQgFAAgGADQgGADgGAGIAAADIAAAGIAAA+IgOAAIAAg3IAAgMQgBgGgCgDQgCgDgCgDQgEgBgFAAQgGAAgFAEQgHADgFAFIAABHIgQAAIAAhgIAQAAIAAALQAGgGAHgEQAHgDAHAAQAIAAAHADQAFAFADAIQAIgIAHgFQAHgDAIAAQAGAAAGACQAEACAFADQADAFACAHQADAHAAAKIAAA+g");
	this.shape_74.setTransform(271.4,48.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#336666").s().p("AgfAlQgLgOAAgXQAAgXAMgNQAMgOASAAQATAAAMAOQAMANAAAXQAAAYgMAOQgMANgTAAQgTAAgMgOgAgSgaQgHAJAAARQAAASAHAJQAHAKALAAQAMAAAHgJQAHgKAAgSQAAgRgHgJQgGgKgNAAQgLAAgHAKg");
	this.shape_75.setTransform(259,48.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#336666").s().p("AgNA+QgLgEgIgIQgHgJgFgMQgDgNAAgQQAAgPADgMQAEgMAIgJQAIgJALgEQALgFAKAAIANABIALADIAIADIAJAEIAAAVIgCAAIgFgFIgJgGQgFgDgGgBQgGgCgIAAQgIAAgFADQgIAEgFAGQgGAHgDAKQgDAKAAALQAAANADAKQADAJAGAHQAFAGAIADQAGAEAHAAQAIAAAHgCQAGgCAFgDIAIgFIAFgFIACAAIAAAUIgIAEIgJAEIgLADIgNABQgKAAgLgFg");
	this.shape_76.setTransform(249,46.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#336666").s().p("AgVApIAAhRIAOAAIAAAMQAHgHAFgCQAGgDAFAAIADAAIADAAIAAAPIgBAAIgDgBIgFAAQgFAAgGADQgEACgFAFIAAA5g");
	this.shape_77.setTransform(212.4,218.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#336666").s().p("AgQApQgFgCgDgDQgDgEgDgEQgCgFAAgGQABgJADgGQADgEAJgDQAGgEAKgBIATgCIAAgCQAAgFgBgEQgCgCgDgCQgDgCgEgBIgGAAIgLABIgNAFIgBAAIAAgPIALgCIAOgBQAHgBAGACQAGABAEADQAGAEABAFQACAGAAAIIAAA3IgNAAIAAgJIgFAEIgFADIgHADIgIACQgFgBgFgCgAAGAAIgKABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAHAAQAFAAAGgCIAKgIIAAgVg");
	this.shape_78.setTransform(204.9,218.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#336666").s().p("AgkA3IAAhtIAdAAIAQAAQAGACAGACQAFADADAFQADAGAAAHQAAAHgEAHQgEAGgIADIAAABQALADAFAFQAFAHAAALQAAAIgDAGQgDAHgGAEQgFAFgIACQgHACgJAAgAgVArIALAAIAOgBQAGgBAEgEQAEgCACgEQACgDAAgGQAAgHgCgEQgBgEgGgDIgIgCIgJgBIgRAAgAgVgJIARAAIAIAAIAHgDQADgDABgDQACgEgBgFIgBgHQgBgDgDgBQgDgCgFgBIgKgBIgOAAg");
	this.shape_79.setTransform(197,217);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#336666").s().p("AgXAgQgLgLAAgVQAAgSAKgMQALgNAPAAQAIABAGACQAGACAEAFQAEAFADAHQADAHAAAJIAAAGIg5AAQAAAPAIAIQAHAHALAAIAJgBIAIgDIAHgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgJABQgRgBgLgLgAAWgIIgCgKQgBgEgCgDQgCgDgEgBQgEgBgGAAQgDAAgEABQgEACgDADQgDADgCAEQgCAEgBAFIArAAIAAAAg");
	this.shape_80.setTransform(183.3,218.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#336666").s().p("AgGA6IAAhyIAMAAIAAByg");
	this.shape_81.setTransform(177.5,216.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#336666").s().p("AghA6IAAhxIAOAAIAAAJQAFgEAHgEQAFgDAGAAQAOAAAJALQAHAMABATQgBATgJAMQgLAMgOAAQgFAAgEgBQgGgBgEgDIAAAjgAgIgoQgHACgEAEIAAAuIAJADIAJABQAJAAAGgIQAGgIAAgNQAAgOgEgJQgFgHgKgBQgEAAgFAEg");
	this.shape_82.setTransform(171.8,219.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#336666").s().p("AgGA4IAAhSIANAAIAABSgAgHgoIAAgPIAPAAIAAAPg");
	this.shape_83.setTransform(165.6,217);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#336666").s().p("AgVApIAAhRIAOAAIAAAMQAHgHAFgCQAGgDAFAAIADAAIADAAIAAAPIgBAAIgDgBIgFAAQgFAAgGADQgEACgFAFIAAA5g");
	this.shape_84.setTransform(161.6,218.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#336666").s().p("AgGA3IAAhgIglAAIAAgNIBXAAIAAANIglAAIAABgg");
	this.shape_85.setTransform(155.3,217);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#336666").s().p("AgXAgQgMgLAAgVQAAgSALgMQALgNAPAAQAIABAGACQAGACAEAFQAEAFADAHQACAHAAAJIAAAGIg3AAQAAAPAHAIQAIAHAKAAIAKgBIAIgDIAGgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgJABQgSgBgKgLgAAWgIIgBgKQgBgEgDgDQgDgDgDgBQgEgBgGAAQgDAAgFABQgDACgDADQgEADgBAEQgCAEAAAFIAqAAIAAAAg");
	this.shape_86.setTransform(214.1,184.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_87.setTransform(205.9,184.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#336666").s().p("AASA6IAAgwIgBgKIgCgHQgBgDgDgBQgEgCgEAAQgEAAgFADQgGADgGAEIAAA9IgNAAIAAhyIANAAIAAAqQAHgHAGgCQAFgEAGAAQANAAAGAJQAIAIgBAOIAAA2g");
	this.shape_88.setTransform(197.5,183);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#336666").s().p("AgRApIgMgFIAAgQIABAAIAEAEIAHADIAIADIAIABIAGAAIAFgCIAEgEIABgGQAAgFgCgCQgDgDgHgCIgFgBIgIgCQgKgDgEgEQgEgGAAgIQAAgLAIgHQAJgHAMAAQAHAAAHACQAHABAFADIAAAPIgBAAQgGgEgGgDQgHgCgHAAQgEAAgFADQgFACAAAGQAAAGADACQADADAGABIAFACIAIACQAJACAFAEQAFAFAAAJQAAAGgCAEQgDAFgEAEQgEADgGACQgGACgGAAQgIAAgIgCg");
	this.shape_89.setTransform(189.9,184.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#336666").s().p("AgXAgQgLgLAAgVQAAgSAKgMQALgNAPAAQAIABAGACQAGACAEAFQAEAFADAHQADAHAAAJIAAAGIg5AAQAAAPAIAIQAHAHALAAIAJgBIAIgDIAHgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgJABQgRgBgLgLgAAWgIIgCgKQgBgEgCgDQgCgDgEgBQgEgBgGAAQgDAAgEABQgEACgEADQgCADgCAEQgCAEgBAFIArAAIAAAAg");
	this.shape_90.setTransform(182.4,184.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#336666").s().p("AgRApIgMgFIAAgQIABAAIAEAEIAHADIAIADIAIABIAGAAIAFgCIAEgEIABgGQAAgFgCgCQgDgDgHgCIgFgBIgIgCQgKgDgEgEQgEgGAAgIQAAgLAIgHQAJgHAMAAQAHAAAHACQAHABAFADIAAAPIgBAAQgGgEgGgDQgHgCgHAAQgEAAgFADQgFACAAAGQAAAGADACQADADAGABIAFACIAIACQAJACAFAEQAFAFAAAJQAAAGgCAEQgDAFgEAEQgEADgGACQgGACgGAAQgIAAgIgCg");
	this.shape_91.setTransform(175.1,184.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#336666").s().p("AgVApIAAhRIAOAAIAAAMQAHgHAFgCQAGgDAFAAIADAAIADAAIAAAPIgBAAIgDgBIgFAAQgFAAgGADQgEACgFAFIAAA5g");
	this.shape_92.setTransform(169.3,184.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_93.setTransform(161.9,184.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#336666").s().p("AAZA3IAAg3IgxAAIAAA3IgPAAIAAhtIAPAAIAAAsIAxAAIAAgsIAPAAIAABtg");
	this.shape_94.setTransform(152.6,183.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#336666").s().p("AgYAgQgLgLABgVQAAgSAKgMQALgNAPAAQAIABAGACQAGACAEAFQAFAFACAHQACAHABAJIAAAGIg5AAQAAAPAIAIQAHAHALAAIAJgBIAIgDIAHgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgJABQgRgBgMgLgAAWgIIgCgKQgBgEgCgDQgCgDgEgBQgEgBgGAAQgEAAgDABQgEACgEADQgDADgBAEQgCAEgBAFIArAAIAAAAg");
	this.shape_95.setTransform(201.9,150.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#336666").s().p("AgOA5IgLgCIAAgPIAAAAIAEACIAGACIAIABIAHABQAFAAAEgCQAFgCACgDQACgDACgEIAAgJIAAgHQgFAFgGACQgFACgHAAQgOAAgIgKQgIgLAAgSQAAgKACgIQADgIAFgGQAFgFAGgDQAGgDAGAAQAGAAAFACIAJAEIABgEIAOAAIAABIQAAAVgKAKQgJAKgRAAIgNgBgAgNglQgGAIAAAPQAAAOAEAFQAFAHAKAAQAEAAAGgCIAKgGIAAgsIgKgDIgIgBQgJAAgGAHg");
	this.shape_96.setTransform(193.3,152.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#336666").s().p("AgPA4QgGgDgEgGQgEgFgDgIQgCgIAAgLQABgLACgGQADgIAFgGQAEgFAHgDQAGgEAGAAQAGAAAEACIAKAEIAAgkIAPAAIAAByIgPAAIAAgIIgFAEIgGAEIgGACIgGABQgGAAgGgDgAgNgHQgGAHAAAPQAAAPAEAHQAFAIAKAAQAEAAAGgCQAGgDAEgEIAAguIgJgEIgJgBQgJAAgGAIg");
	this.shape_97.setTransform(184.9,149.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#336666").s().p("AgXAgQgLgLAAgVQgBgSALgMQALgNAPAAQAIABAGACQAGACAEAFQAEAFADAHQADAHAAAJIAAAGIg5AAQABAPAHAIQAIAHAKAAIAJgBIAIgDIAHgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgJABQgRgBgLgLgAAWgIIgBgKQgCgEgCgDQgCgDgEgBQgEgBgGAAQgDAAgEABQgEACgDADQgDADgCAEQgCAEgBAFIArAAIAAAAg");
	this.shape_98.setTransform(176.9,150.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#336666").s().p("AAWA3IgWhaIgVBaIgQAAIgdhtIAQAAIAWBaIAXhaIAMAAIAXBbIAWhbIAOAAIgbBtg");
	this.shape_99.setTransform(166.6,149.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#336666").s().p("AgHAvQgHgGAAgOIAAgsIgJAAIAAgMIAJAAIAAgYIAOAAIAAAYIAYAAIAAAMIgYAAIAAAlIAAAKQAAAEAAACIAEAEQADACAFAAIAHgBIAEgCIABAAIAAANIgIACIgHAAQgKAAgGgHg");
	this.shape_100.setTransform(192.1,116);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#336666").s().p("AgaAgQgKgMAAgUQAAgTAKgMQALgMAPAAQAQAAAKAMQALAMAAATQAAAVgLALQgKAMgQAAQgQAAgKgMgAgQgWQgFAHAAAPQAAAPAFAIQAGAIAKAAQAKAAAGgHQAGgIAAgQQAAgPgGgHQgGgIgKAAQgKAAgGAIg");
	this.shape_101.setTransform(185.4,117.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#336666").s().p("AgqA3IAAhtIAZAAQAQAAAHACQAIADAHAEQAKAGAGAMQAGAMAAAPQAAAOgGANQgGAMgKAHQgJAFgJACQgGACgOAAgAgcArIAMAAQAJAAAHgCQAGgCAGgEQAIgFAEgJQAEgJAAgMQAAgMgEgIQgFgKgIgFQgGgEgFgBQgGgCgKAAIgMAAg");
	this.shape_102.setTransform(176.4,115.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#336666").s().p("AgYAgQgKgLgBgVQAAgSALgMQALgNAPAAQAIABAGACQAGACAEAFQAEAFADAHQADAHgBAJIAAAGIg3AAQgBAPAIAIQAIAHAKAAIAKgBIAIgDIAGgDIAEgDIABAAIAAAPIgGADIgHACIgHACIgIABQgTAAgLgMgAAWgIIgCgKQgBgEgCgDQgDgDgDgBQgEgBgGAAQgDAAgFABQgDACgEADQgCADgCAEQgCAEAAAFIAqAAIAAAAg");
	this.shape_103.setTransform(195,83.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#336666").s().p("AgPA4QgGgDgEgGQgEgFgDgIQgCgIAAgLQABgLACgGQADgIAFgGQAFgFAGgDQAHgEAFAAQAGAAAEACIAKAEIAAgkIAOAAIAAByIgOAAIAAgIIgFAEIgGAEIgGACIgFABQgIAAgFgDgAgNgHQgGAHAAAPQAAAPAEAHQAGAIAJAAQAEAAAGgCQAFgDAFgEIAAguIgJgEIgJgBQgJAAgGAIg");
	this.shape_104.setTransform(186.4,81.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#336666").s().p("AgFA6IAAhyIALAAIAAByg");
	this.shape_105.setTransform(180.8,81.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#336666").s().p("AgFA4IAAhSIALAAIAABSgAgGgoIAAgPIANAAIAAAPg");
	this.shape_106.setTransform(177.3,82);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#336666").s().p("AgGA3IAAhgIglAAIAAgNIBXAAIAAANIglAAIAABgg");
	this.shape_107.setTransform(171,82);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#336666").s().p("AgUAvQgIgCgGgDIAAgSIABAAIAFAEIAHADIAKAEQAFABAFABIAGgBIAHgCQADgDABgCQACgDAAgEQAAgFgDgEQgEgCgIgCIgGgCIgJgDQgLgDgFgFQgFgGAAgKQAAgNAJgJQAKgIAPAAQAIAAAIACQAIACAGAEIAAARIgBAAQgGgFgIgDQgIgDgHAAQgHAAgFAEQgGADAAAHQAAAGAEADQADADAHACIAGACIAKACQALACAFAFQAGAGAAALQAAAGgDAGQgCAFgFAEQgFAFgHACQgHACgIAAQgJAAgJgDg");
	this.shape_108.setTransform(205.7,48.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#336666").s().p("AgcAlQgNgNAAgYQAAgWANgOQAMgOASAAQAKAAAGADQAHACAGAGQAFAGADAIQADAIAAALIAAAHIhCAAQAAARAJAJQAIAJANAAIALgBIAJgDIAIgEIAFgEIABAAIAAASIgHADIgIADIgJACIgKABQgVAAgNgOgAAagJIgCgMQgBgEgDgEQgDgDgEgCQgFgCgHAAQgEAAgFACQgEACgEADQgEAEgCAFIgCALIAyAAIAAAAg");
	this.shape_109.setTransform(196.9,48.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#336666").s().p("AAuAyIAAg3IAAgMQgBgGgBgDQgCgDgEgDQgDgBgFAAQgFAAgGADQgFADgHAGIABADIAAAGIAAA+IgPAAIAAg3IAAgMQgBgGgBgDQgDgDgDgDQgDgBgGAAQgEAAgGAEQgHADgFAFIAABHIgQAAIAAhgIAQAAIAAALQAGgGAHgEQAGgDAIAAQAJAAAGADQAFAFADAIQAIgIAHgFQAHgDAIAAQAHAAAFACQAFACAEADQADAFADAHQACAHAAAKIAAA+g");
	this.shape_110.setTransform(184.8,48.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#336666").s().p("AgTAwQgFgCgFgEQgDgEgDgGQgCgGAAgGQAAgKAEgIQAEgEAKgEQAIgEALgCIAWgCIAAgDQAAgGgCgDQgBgEgEgCQgDgCgEAAIgIgBIgNACQgIABgHADIgBAAIAAgQIANgDIAQgCQAIABAHABQAHACAGAEQAFADADAHQACAGAAAKIAABAIgQAAIAAgKIgFAEIgHAEIgIADIgKABQgGAAgFgCgAAHAAIgMABQgHACgEAEQgEAEAAAIQAAAIAEAEQAFAFAJAAQAGAAAGgEQAGgDAGgFIAAgZg");
	this.shape_111.setTransform(172.2,48.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#336666").s().p("AAbBBIg3hvIAABvIgRAAIAAiBIAYAAIAzBmIAAhmIAQAAIAACBg");
	this.shape_112.setTransform(161.9,46.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#336666").s().p("AgUAvQgIgCgGgDIAAgSIABAAIAFAEIAHADIAKAEQAFABAFABIAGgBIAHgCQADgDABgCQACgDAAgEQAAgFgDgEQgEgCgIgCIgGgCIgJgDQgLgDgFgFQgFgGAAgKQAAgNAJgJQAKgIAPAAQAIAAAIACQAIACAGAEIAAARIgBAAQgGgFgIgDQgIgDgHAAQgHAAgFAEQgGADAAAHQAAAGAEADQADADAHACIAGACIAKACQALACAFAFQAGAGAAALQAAAGgDAGQgCAFgFAEQgFAFgHACQgHACgIAAQgJAAgJgDg");
	this.shape_113.setTransform(118.2,48.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#336666").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_114.setTransform(112.1,46.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#336666").s().p("AgeAlQgMgOAAgXQAAgXAMgNQAMgOASAAQATAAAMAOQAMANAAAXQAAAYgMAOQgMANgTAAQgTAAgLgOgAgSgaQgHAJAAARQAAASAHAJQAGAKAMAAQAMAAAHgJQAHgKAAgSQAAgRgHgJQgGgKgNAAQgMAAgGAKg");
	this.shape_115.setTransform(105.3,48.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#336666").s().p("AgMBDQgGgCgFgDIgBAEIgPAAIAAiGIAQAAIAAAxIANgKQAIgDAHAAQAQAAAKANQAJANAAAWQAAAXgLAPQgMAOgRAAQgGAAgGgBgAgLgOIgMAIIAAA2IALAFIALABQAKAAAHgJQAHgJAAgTQAAgRgFgHQgFgKgMABQgFAAgHACg");
	this.shape_116.setTransform(95.8,46.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#336666").s().p("AAvAyIAAg3IgBgMQgBgGgCgDQgBgDgDgDQgEgBgFAAQgFAAgGADQgFADgHAGIAAADIAAAGIAAA+IgOAAIAAg3IgBgMQAAgGgCgDQgBgDgDgDQgEgBgFAAQgGAAgGAEQgFADgGAFIAABHIgQAAIAAhgIAQAAIAAALQAHgGAGgEQAGgDAIAAQAIAAAHADQAFAFAEAIQAHgIAHgFQAHgDAIAAQAGAAAFACQAGACADADQAFAFABAHQADAHAAAKIAAA+g");
	this.shape_117.setTransform(83.1,48.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#336666").s().p("AgYBCIARgoIgjhbIARAAIAZBGIAbhGIAQAAIgyCDg");
	this.shape_118.setTransform(71.2,50.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#336666").s().p("AgYBAQgKgDgJgFIAAgVIACAAQAIAIALAEQALAFAKAAQAMAAAHgGQAIgGAAgKQAAgIgEgFQgEgFgIgCIgKgDIgMgDIgMgEQgFgBgEgEQgEgFgCgFQgDgGAAgIQAAgQANgKQAMgLARAAQALAAAKACQAJACAJAEIAAAVIgCAAQgGgGgJgEQgKgEgLAAQgKAAgHAGQgIAFAAAJQAAAJAFAFQAEAEAIADIAMADIANAEQANADAHAHQAGAIAAAMQAAAIgDAHQgDAIgGAFQgGAGgIADQgIADgKAAQgOAAgKgDg");
	this.shape_119.setTransform(62.1,46.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#336666").ss(2,1,1).p("Ag8wFIfNAAIAAGYIAAPaIAAFFIAAFYMg8bAAAIAAlYINQAAIAAFRAg8wJIAAAEIAAGYIAAFIIAAFGIAAFMIAAFFIv+AAIAAlFIP+AAIfNAAAw6wFIAAGYItQAAIAAhAIAAlYINQAAIP+AAA+KqtIgGAAA+KAhIAAlGINQAAIAAFGIAAFMA+KFtIAAlMINQAAA+KFtINQAAAw6klIAAlIIP+AAA+KklIAAlIAg8QDIAAlRIfNAAAg8klIv+AAAg8AhIv+AAA+KKyIAAlFAeLAhI/HAAAg8klIfHAAAeLptI/HAA");
	this.shape_120.setTransform(240,130);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(51,102,102,0.302)").s().p("AeIDMI/IAAIAAmXIfOAAIAAGXgAhADMIv9AAIAAmXIP9AAIAAGXgAw9DMItQAAIAAhAIAAlXINQAAIAAGXg");
	this.shape_121.setTransform(240.4,47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285.3,155.6,389.6,209);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;