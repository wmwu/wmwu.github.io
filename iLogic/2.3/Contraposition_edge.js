/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'All',
                type: 'text',
                rect: ['116px', '79px','auto','auto','auto', 'auto'],
                text: "All<br>",
                font: ['Georgia, Times New Roman, Times, serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'STerm',
                type: 'text',
                rect: ['173px', '79px','30px','27px','auto', 'auto'],
                text: "S",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 24, "rgba(68,221,11,1.00)", "400", "none", "italic"]
            },
            {
                id: 'nonSTerm',
                type: 'text',
                rect: ['173px', '79px','30px','27px','auto', 'auto'],
                text: "non-S",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 24, "rgba(68,221,11,1.00)", "400", "none", "italic"]
            },
            {
                id: 'are',
                type: 'text',
                rect: ['231px', '79px','38px','27px','auto', 'auto'],
                text: "are",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'dot',
                type: 'text',
                rect: ['323px', '79px','30px','27px','auto', 'auto'],
                text: ".",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'PTerm',
                type: 'text',
                rect: ['299px', '79px','30px','27px','auto', 'auto'],
                text: "P",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 24, "rgba(38,98,234,1.00)", "400", "none", "italic"]
            },
            {
                id: 'nonPTerm',
                type: 'text',
                rect: ['299px', '79px','30px','27px','auto', 'auto'],
                text: "non-P",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 24, "rgba(38,98,234,1.00)", "400", "none", "italic"]
            },
            {
                id: 'play_Contraposition',
                display: 'block',
                type: 'rect',
                rect: ['90px', '210px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'Rewind',
                display: 'none',
                type: 'rect',
                rect: ['130', '212','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'Rewind',
                symbolName: 'Rewind',
                autoPlay: {

                }
            },
            {
                id: 'play_Contraposition',
                symbolName: 'play_Conversion',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_PTermCopy2}": [
                ["style", "top", '35px'],
                ["style", "left", '244px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_play_Contraposition}": [
                ["transform", "scaleY", '0.9'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "left", '130px'],
                ["style", "cursor", 'pointer']
            ],
            "${_AllCopy}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '0px']
            ],
            "${_nonSTerm}": [
                ["style", "top", '35px'],
                ["style", "font-style", 'italic'],
                ["color", "color", 'rgba(68,221,11,0.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '169px'],
                ["style", "width", '75px']
            ],
            "${_Rewind}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '130px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text4Copy}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(68,221,11,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '58px'],
                ["style", "font-style", 'italic']
            ],
            "${_PTerm}": [
                ["style", "top", '35px'],
                ["style", "opacity", '1'],
                ["style", "left", '291px'],
                ["color", "color", 'rgba(38,98,234,1)']
            ],
            "${_Text5Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '183px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_areCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '117px'],
                ["style", "width", '38px']
            ],
            "${_are}": [
                ["style", "top", '35px'],
                ["style", "left", '223px'],
                ["style", "width", '38px']
            ],
            "${_dotCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '207px']
            ],
            "${_PTermCopy}": [
                ["style", "top", '35px'],
                ["style", "left", '244px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_dot}": [
                ["style", "top", '35px'],
                ["style", "left", '315px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '280px'],
                ["style", "overflow", 'hidden']
            ],
            "${_STerm}": [
                ["style", "top", '35px'],
                ["color", "color", 'rgba(68,221,11,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '169px'],
                ["style", "font-style", 'italic']
            ],
            "${_All}": [
                ["style", "top", '35px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '108px']
            ],
            "${_nonPTerm}": [
                ["color", "color", 'rgba(38,98,234,0.00)'],
                ["style", "top", '35px'],
                ["style", "left", '291px'],
                ["style", "width", '63px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid43", tween: [ "style", "${_STerm}", "left", '244px', { fromValue: '169px'}], position: 0, duration: 1000 },
                { id: "eid76", tween: [ "style", "${_STerm}", "left", '244px', { fromValue: '244px'}], position: 2500, duration: 0 },
                { id: "eid149", tween: [ "style", "${_Rewind}", "left", '130px', { fromValue: '130px'}], position: 2500, duration: 0 },
                { id: "eid139", tween: [ "style", "${_play_Contraposition}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid95", tween: [ "style", "${_nonSTerm}", "left", '244px', { fromValue: '169px'}], position: 0, duration: 1000 },
                { id: "eid105", tween: [ "style", "${_nonSTerm}", "left", '244px', { fromValue: '244px'}], position: 1000, duration: 0 },
                { id: "eid138", tween: [ "style", "${_nonSTerm}", "left", '265px', { fromValue: '244px'}], position: 1750, duration: 750 },
                { id: "eid146", tween: [ "style", "${_play_Contraposition}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid147", tween: [ "style", "${_play_Contraposition}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_are}", "top", '147px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid108", tween: [ "style", "${_dot}", "left", '268px', { fromValue: '315px'}], position: 0, duration: 1000 },
                { id: "eid107", tween: [ "style", "${_dot}", "left", '345px', { fromValue: '268px'}], position: 1000, duration: 1500 },
                { id: "eid154", tween: [ "style", "${_Rewind}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Rewind}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid46", tween: [ "style", "${_All}", "top", '147px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid52", tween: [ "transform", "${_play_Contraposition}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Rewind}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid79", tween: [ "color", "${_nonPTerm}", "color", 'rgba(38,98,234,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,98,234,0.00)'}], position: 1869, duration: 631 },
                { id: "eid100", tween: [ "style", "${_nonSTerm}", "width", '75px', { fromValue: '75px'}], position: 1007, duration: 0 },
                { id: "eid48", tween: [ "style", "${_dot}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid106", tween: [ "style", "${_dot}", "top", '145px', { fromValue: '145px'}], position: 2500, duration: 0 },
                { id: "eid129", tween: [ "style", "${_All}", "left", '74px', { fromValue: '108px'}], position: 0, duration: 2500 },
                { id: "eid111", tween: [ "style", "${_are}", "left", '176px', { fromValue: '223px'}], position: 0, duration: 1000 },
                { id: "eid104", tween: [ "style", "${_are}", "left", '215px', { fromValue: '176px'}], position: 1000, duration: 1500 },
                { id: "eid94", tween: [ "color", "${_nonSTerm}", "color", 'rgba(68,221,11,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(68,221,11,0.00)'}], position: 1750, duration: 750 },
                { id: "eid103", tween: [ "style", "${_nonPTerm}", "width", '75px', { fromValue: '63px'}], position: 1000, duration: 12 },
                { id: "eid80", tween: [ "style", "${_nonPTerm}", "left", '122px', { fromValue: '291px'}], position: 0, duration: 1000 },
                { id: "eid81", tween: [ "style", "${_nonPTerm}", "left", '122px', { fromValue: '122px'}], position: 2500, duration: 0 },
                { id: "eid61", tween: [ "color", "${_PTerm}", "color", 'rgba(38,98,234,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,98,234,1)'}], position: 1000, duration: 750 },
                { id: "eid51", tween: [ "transform", "${_play_Contraposition}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_nonPTerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid83", tween: [ "style", "${_nonPTerm}", "top", '145px', { fromValue: '145px'}], position: 2500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_PTerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid59", tween: [ "style", "${_PTerm}", "top", '145px', { fromValue: '145px'}], position: 1750, duration: 0 },
                { id: "eid144", tween: [ "style", "${_play_Contraposition}", "left", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
                { id: "eid145", tween: [ "style", "${_play_Contraposition}", "left", '130px', { fromValue: '130px'}], position: 2000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_STerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid77", tween: [ "style", "${_STerm}", "top", '145px', { fromValue: '145px'}], position: 2500, duration: 0 },
                { id: "eid78", tween: [ "color", "${_STerm}", "color", 'rgba(68,221,11,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(68,221,11,1)'}], position: 1007, duration: 743 },
                { id: "eid44", tween: [ "style", "${_PTerm}", "left", '122px', { fromValue: '291px'}], position: 0, duration: 1000 },
                { id: "eid60", tween: [ "style", "${_PTerm}", "left", '122px', { fromValue: '122px'}], position: 1750, duration: 0 },
                { id: "eid97", tween: [ "style", "${_nonSTerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid98", tween: [ "style", "${_nonSTerm}", "top", '145px', { fromValue: '145px'}], position: 2500, duration: 0 }            ]
        }
    }
},
"play_Conversion": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-10px', '0px', '160px', '32px', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(222,222,222,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(76,76,76,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Contraposition',
                    text: 'Contraposition',
                    align: 'center',
                    rect: ['0px', '4px', '140px', '27px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(222,222,222,1.00)'],
                ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-10px'],
                ["style", "width", '160px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '32px'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Contraposition}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(76,76,76,1.00)'],
                ["style", "width", '140px'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Rewind": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-8px', '-2px', '160px', '32px', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    transform: [[], [], [], ['0.9', '0.9']],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(222,222,222,1.00)']
                },
                {
                    id: 'rewind-symbol',
                    type: 'image',
                    rect: ['57px', '6px', '29px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rewind-symbol.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(222,222,222,1)'],
                ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '-8px'],
                ["style", "width", '160px'],
                ["style", "top", '-2px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '32px'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_rewind-symbol}": [
                ["style", "height", '16px'],
                ["style", "top", '6px'],
                ["style", "left", '57px'],
                ["style", "width", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '144px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-130569957");
