(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Banner_atlas_1", frames: [[0,0,800,600],[802,0,800,600],[0,602,800,600],[0,1204,800,600],[802,602,800,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1 = function() {
	this.initialize(ss["Banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["Banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["Banner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["Banner_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["Banner_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Resim5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._5();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-300,800,600);


(lib.Resim4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-300,800,600);


(lib.Resim3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-300,800,600);


(lib.Resim2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-300,800,600);


(lib.Resim1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1();
	this.instance.setTransform(-399.95,-300,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.9,-300,799.9,600);


(lib.mcSlaytShow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Resim1a
	this.instance = new lib.Resim1("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({alpha:1},15).wait(1));

	// Resim5
	this.instance_1 = new lib.Resim5("synched",0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({alpha:1},15).wait(15).to({startPosition:0},0).to({alpha:0},15).wait(1));

	// Resim4
	this.instance_2 = new lib.Resim4("synched",0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},15).wait(15).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(30));

	// Resim3
	this.instance_3 = new lib.Resim3("synched",0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({alpha:1},15).wait(15).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(60));

	// Resim2
	this.instance_4 = new lib.Resim2("synched",0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},15).wait(15).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(90));

	// Resim1
	this.instance_5 = new lib.Resim1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-300,800,600);


(lib.mcMaskeliSlaytShow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Maske (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgZUAhKMgNvghJMANvghJMAhIgNvMAhKANvMANuAhJMgNuAhJMghKANug");
	var mask_graphics_1 = new cjs.Graphics().p("EgMJAo3I1H65MAEFgh8Ia61GMAh7AEFIVHa6MgEHAh7I64VHg");
	var mask_graphics_2 = new cjs.Graphics().p("A5ZZiMgFqggEISr6rMAgEgFqIasSsMAFpAgDIyrasMggFAFqg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOoAinIuo7XIJB9rIbVupIdtJBIOobXIpBdrI7XOog");
	var mask_graphics_4 = new cjs.Graphics().p("A14VnIhS9gIT+1yIdghTIVyT+IBTdhIz+VyI9gBSg");
	var mask_graphics_5 = new cjs.Graphics().p("As2fVIrD54IKf6HIZ3rDIaIKfILEZ4IqgaII54LDg");
	var mask_graphics_6 = new cjs.Graphics().p("EABqAnoIy9y+IAA6zIS9y+Ia0AAIS+S+IAAazIy+S+g");
	var mask_graphics_7 = new cjs.Graphics().p("AoyenIqD3hIJi3sIXfqDIXuJiIKDXfIpiXuI3hKDg");
	var mask_graphics_8 = new cjs.Graphics().p("AskV8IhE4WIQdx+IYWhEIR+QeIBFYVIweR+I4XBFg");
	var mask_graphics_9 = new cjs.Graphics().p("AjJf0Iq90hIGw2QIUgq9IWQGwIK+UgImwWQI0hK+g");
	var mask_graphics_10 = new cjs.Graphics().p("AnZY3Ij214IMuyMIV4j3ISNMwID3V3IsvSNI15D3g");
	var mask_graphics_11 = new cjs.Graphics().p("EAERAiQItGwtICj1FIQstHIVGCiINHQtIiiVGIwuNHg");
	var mask_graphics_12 = new cjs.Graphics().p("Ag1c8InyyzIHyyyISznyISyHyIHzSyInzSzIyyHzg");
	var mask_graphics_13 = new cjs.Graphics().p("AjCYFIixzVILtvmITVixIPnLuICxTTIruPoIzVCxg");
	var mask_graphics_14 = new cjs.Graphics().p("EAIPAhgIsDuYIBpytIOXsDISsBpIMEOXIhoSsIuYMEg");
	var mask_graphics_15 = new cjs.Graphics().p("AEhd9Iohv9IFPxTIP9ohIRTFQIIhP7IlPRUIv9Ihg");
	var mask_graphics_16 = new cjs.Graphics().p("ACZawIlPwrIIDvfIQrlQIPgIEIFQQqIoEPfIwrFRg");
	var mask_graphics_17 = new cjs.Graphics().p("ABgYAIiYwxIKJtiIQxiZINjKJICZQxIqKNiIwxCag");
	var mask_graphics_18 = new cjs.Graphics().p("ABcVvIAAweILproIQeAAILpLoIAAQeIrpLpIweAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AK2foIp7spIB7v9IMpp6IP9B7IJ7MoIh7P9IspJ7g");
	var mask_graphics_20 = new cjs.Graphics().p("AJVeKIoetRIDavYINSodIPYDaIIdNRIjaPYItRIdg");
	var mask_graphics_21 = new cjs.Graphics().p("AIWdBInUtqIEgu1INrnTIO0EgIHUNqIkgO0ItqHUg");
	var mask_graphics_22 = new cjs.Graphics().p("AHvcNImet5IFPuYIN5meIOZFPIGeN4IlPOZIt5Geg");
	var mask_graphics_23 = new cjs.Graphics().p("AHbbtIl+t/IFruGIN/l+IOHFrIF+N+IlrOHIt/F+g");
	var mask_graphics_24 = new cjs.Graphics().p("AHVbjIl0uBIF0uAIOBl0IOBF0IFzOAIlzOBIuBFzg");
	var mask_graphics_25 = new cjs.Graphics().p("AHbbsIl+t/IFsuFIN/l+IOGFsIF+N+IlsOGIt/F+g");
	var mask_graphics_26 = new cjs.Graphics().p("AHtcJImbt5IFSuWIN5mbIOYFSIGaN4IlSOYIt5Gag");
	var mask_graphics_27 = new cjs.Graphics().p("AIQc5InMtsIEnuxINsnLIOxEnIHMNrIkmOxIttHMg");
	var mask_graphics_28 = new cjs.Graphics().p("AJJd9IoRtWIDnvSINXoQIPSDnIIQNWIjnPSItWIQg");
	var mask_graphics_29 = new cjs.Graphics().p("AKffUIpnszICRv2IMzpmIP1CRIJnMyIiQP1IszJng");
	var mask_graphics_30 = new cjs.Graphics().p("EAMeAg8IrNr7IAgwXIL7rMIQXAgILNL6IggQXIr7LNg");
	var mask_graphics_31 = new cjs.Graphics().p("ABbXUIhrwuIKos/IQthrINAKoIBrQtIqoNAIwtBrg");
	var mask_graphics_32 = new cjs.Graphics().p("ACAZ0IkSwwIIzu4IQwkSIO4I0IETQvIo0O4IwwETg");
	var mask_graphics_33 = new cjs.Graphics().p("ADlcwInSwTIGVwrIQTnTIQsGWIHTQSImWQrIwTHUg");
	var mask_graphics_34 = new cjs.Graphics().p("EAGiAgDIqnvIIDLyMIPHqoISNDLIKoPHIjLSNIvIKog");
	var mask_graphics_35 = new cjs.Graphics().p("AjQWKIgvzLINBuDITLgvIOENBIAvTKItCOFIzKAvg");
	var mask_graphics_36 = new cjs.Graphics().p("AiNaiIlUzPIJ0xUITPlUIRWJ1IFTTNIp1RWIzOFUg");
	var mask_graphics_37 = new cjs.Graphics().p("ABOfeIqVyBIFc0CISAqWIUDFcIKVSAIlbUDIyBKVg");
	var mask_graphics_38 = new cjs.Graphics().p("An7VVIgJ1pIPMvbIVrgKIPaPOIAKVpIvNPcI1rAJg");
	var mask_graphics_39 = new cjs.Graphics().p("AmPbkImp1oIKmz+IVmmqIUAKlIGqVnIqmUAI1oGqg");
	var mask_graphics_40 = new cjs.Graphics().p("EgAdAiaItjzZIEI3SITYtjIXSEIINkTYIkIXSIzZNjg");
	var mask_graphics_41 = new cjs.Graphics().p("AsCYmIj24cIOj0AIYbj3IUBOkID3YbIukUBI4dD3g");
	var mask_graphics_42 = new cjs.Graphics().p("EgGkAhKIsn2oIHG46IWnsmIY7HFIMnWnInGY7I2oMng");
	var mask_graphics_43 = new cjs.Graphics().p("AxAXGIik6/IRS06Ia/ilIU7RSICka/IxSU7I7ACkg");
	var mask_graphics_44 = new cjs.Graphics().p("EgK5AhkItT5HIIX7KIZGtTIbLIWINTZHIoXbLI5INTg");
	var mask_graphics_45 = new cjs.Graphics().p("A1eXnIjY9kISi3UIdkjZIXUSiIDZdlIyiXUI9mDYg");
	var mask_graphics_46 = new cjs.Graphics().p("EgM+AkMIwN6rIHZ+TIaqwNIeUHaIQNarInZeSI6rQNg");
	var mask_graphics_47 = new cjs.Graphics().p("A43awIm7/8IRt7gIf9m6IbfRuIG6f8IxubfI/9G6g");
	var mask_graphics_48 = new cjs.Graphics().p("EgLUApdI1s6hMADagiEIah1sMAiFADaIVrahMgDbAiFI6gVrg");
	var mask_graphics_49 = new cjs.Graphics().p("EgZUAhKMgNvghJMANvghJMAhIgNvMAhKANvMANuAhJMgNuAhJMghKANug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:350,y:300}).wait(1).to({graphics:mask_graphics_1,x:337.6536,y:287.6652}).wait(1).to({graphics:mask_graphics_2,x:332.9364,y:282.9556}).wait(1).to({graphics:mask_graphics_3,x:329.0866,y:279.0866}).wait(1).to({graphics:mask_graphics_4,x:316.0889,y:266.0889}).wait(1).to({graphics:mask_graphics_5,x:317.6601,y:267.6741}).wait(1).to({graphics:mask_graphics_6,x:303.5816,y:253.5959}).wait(1).to({graphics:mask_graphics_7,x:306.8565,y:256.8569}).wait(1).to({graphics:mask_graphics_8,x:295.7633,y:245.7517}).wait(1).to({graphics:mask_graphics_9,x:296.771,y:246.7608}).wait(1).to({graphics:mask_graphics_10,x:290.6825,y:240.6694}).wait(1).to({graphics:mask_graphics_11,x:285.5401,y:235.5401}).wait(1).to({graphics:mask_graphics_12,x:285.0691,y:235.0691}).wait(1).to({graphics:mask_graphics_13,x:279.0603,y:229.0603}).wait(1).to({graphics:mask_graphics_14,x:274.8309,y:224.8193}).wait(1).to({graphics:mask_graphics_15,x:275.2423,y:225.2326}).wait(1).to({graphics:mask_graphics_16,x:272.7731,y:222.7652}).wait(1).to({graphics:mask_graphics_17,x:268.5798,y:218.5738}).wait(1).to({graphics:mask_graphics_18,x:263.6019,y:213.5975}).wait(1).to({graphics:mask_graphics_19,x:264.7033,y:214.6973}).wait(1).to({graphics:mask_graphics_20,x:264.8321,y:214.8283}).wait(1).to({graphics:mask_graphics_21,x:264.4673,y:214.4652}).wait(1).to({graphics:mask_graphics_22,x:263.9662,y:213.9653}).wait(1).to({graphics:mask_graphics_23,x:263.5721,y:213.5719}).wait(1).to({graphics:mask_graphics_24,x:263.4255,y:213.4255}).wait(1).to({graphics:mask_graphics_25,x:263.5609,y:213.5607}).wait(1).to({graphics:mask_graphics_26,x:263.9282,y:213.9274}).wait(1).to({graphics:mask_graphics_27,x:264.4086,y:214.4066}).wait(1).to({graphics:mask_graphics_28,x:264.7962,y:214.7927}).wait(1).to({graphics:mask_graphics_29,x:264.7898,y:214.7842}).wait(1).to({graphics:mask_graphics_30,x:263.9846,y:213.9765}).wait(1).to({graphics:mask_graphics_31,x:267.2304,y:217.2248}).wait(1).to({graphics:mask_graphics_32,x:271.5691,y:221.5619}).wait(1).to({graphics:mask_graphics_33,x:274.6207,y:224.6116}).wait(1).to({graphics:mask_graphics_34,x:275.4227,y:225.4118}).wait(1).to({graphics:mask_graphics_35,x:275.2085,y:225.2085}).wait(1).to({graphics:mask_graphics_36,x:282.7425,y:232.7425}).wait(1).to({graphics:mask_graphics_37,x:286.121,y:236.121}).wait(1).to({graphics:mask_graphics_38,x:283.9194,y:233.9055}).wait(1).to({graphics:mask_graphics_39,x:294.1704,y:244.1583}).wait(1).to({graphics:mask_graphics_40,x:296.5531,y:246.5442}).wait(1).to({graphics:mask_graphics_41,x:300.5878,y:250.5798}).wait(1).to({graphics:mask_graphics_42,x:307.5806,y:257.5848}).wait(1).to({graphics:mask_graphics_43,x:308.421,y:258.4299}).wait(1).to({graphics:mask_graphics_44,x:318.2879,y:268.3032}).wait(1).to({graphics:mask_graphics_45,x:319.6929,y:269.6929}).wait(1).to({graphics:mask_graphics_46,x:328.9418,y:278.9418}).wait(1).to({graphics:mask_graphics_47,x:334.4936,y:284.5123}).wait(1).to({graphics:mask_graphics_48,x:337.1178,y:287.1291}).wait(1).to({graphics:mask_graphics_49,x:350,y:300}).wait(1));

	// SlaytShow
	this.instance = new lib.mcSlaytShow();
	this.instance.setTransform(400,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.7,0,778.6999999999999,600);


// stage content:
(lib.Banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Slayt2
	this.instance = new lib.mcMaskeliSlaytShow();
	this.instance.setTransform(700,100,0.3333,0.3333,0,0,0,400.1,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Slayt1
	this.instance_1 = new lib.mcMaskeliSlaytShow();
	this.instance_1.setTransform(100.05,100.05,0.3334,0.3334,0,0,0,400,300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(366.7,100,466.59999999999997,100);
// library properties:
lib.properties = {
	id: 'F7967440891DD44FBEB6C386CE059364',
	width: 800,
	height: 200,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Banner_atlas_1.png?1620289100809", id:"Banner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F7967440891DD44FBEB6C386CE059364'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;