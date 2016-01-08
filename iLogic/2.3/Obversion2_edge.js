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
                id: 'Some',
                type: 'text',
                rect: ['116px', '79px','auto','auto','auto', 'auto'],
                text: "Some",
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
                id: 'are_not',
                type: 'text',
                rect: ['231px', '79px','38px','27px','auto', 'auto'],
                text: "are not",
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
                id: 'play_Obversion',
                display: 'block',
                type: 'rect',
                rect: ['90', '210','auto','auto','auto', 'auto'],
                cursor: ['pointer']
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
                id: 'are',
                type: 'text',
                rect: ['62px', '69px','30px','27px','auto', 'auto'],
                text: "are",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'nonPTerm',
                type: 'text',
                rect: ['244px', '146px','73px','27px','auto', 'auto'],
                text: "non-P",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 24, "rgba(68,221,11,1)", "400", "none", "italic"]
            },
            {
                id: 'Rewind',
                display: 'none',
                type: 'rect',
                rect: ['107', '212','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'play_Obversion',
                symbolName: 'play_Conversion',
                autoPlay: {

                }
            },
            {
                id: 'Rewind',
                symbolName: 'Rewind',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_AllCopy}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '0px']
            ],
            "${_are_not}": [
                ["style", "top", '35px'],
                ["style", "opacity", '1'],
                ["style", "left", '165px'],
                ["style", "width", '83px']
            ],
            "${_Rewind}": [
                ["style", "display", 'none'],
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
                ["style", "top", '34px'],
                ["style", "opacity", '1'],
                ["style", "left", '257px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_NoCopy2}": [
                ["style", "top", '145px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px']
            ],
            "${_are}": [
                ["style", "top", '145px'],
                ["style", "opacity", '0'],
                ["style", "left", '165px'],
                ["style", "width", '46px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '183px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_play_Obversion}": [
                ["transform", "scaleY", '0.9'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "left", '100px'],
                ["style", "display", 'block']
            ],
            "${_areCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '117px'],
                ["style", "width", '38px']
            ],
            "${_STerm}": [
                ["style", "top", '34px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(68,221,11,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '128px'],
                ["style", "font-style", 'italic']
            ],
            "${_dotCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '207px']
            ],
            "${_Text}": [
                ["style", "top", '72px'],
                ["style", "left", '160px']
            ],
            "${_dot}": [
                ["style", "top", '35px'],
                ["style", "left", '281px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '360px'],
                ["style", "height", '280px'],
                ["style", "overflow", 'hidden']
            ],
            "${_nonPTerm}": [
                ["style", "top", '144px'],
                ["style", "opacity", '0'],
                ["style", "left", '219px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_Some}": [
                ["style", "top", '35px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '51px'],
                ["style", "opacity", '1']
            ],
            "${_NoCopy}": [
                ["style", "top", '145px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px']
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
                { id: "eid52", tween: [ "transform", "${_play_Obversion}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_STerm}", "left", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_STerm}", "left", '128px', { fromValue: '128px'}], position: 1000, duration: 0 },
                { id: "eid152", tween: [ "style", "${_STerm}", "left", '128px', { fromValue: '128px'}], position: 2000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_are_not}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid86", tween: [ "style", "${_are_not}", "top", '145px', { fromValue: '145px'}], position: 2500, duration: 0 },
                { id: "eid97", tween: [ "style", "${_PTerm}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid156", tween: [ "style", "${_PTerm}", "left", '257px', { fromValue: '257px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_PTerm}", "left", '257px', { fromValue: '257px'}], position: 1000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_PTerm}", "left", '257px', { fromValue: '257px'}], position: 2500, duration: 0 },
                { id: "eid149", tween: [ "style", "${_are_not}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid161", tween: [ "style", "${_are}", "top", '145px', { fromValue: '145px'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_are}", "top", '145px', { fromValue: '145px'}], position: 1000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_are}", "top", '145px', { fromValue: '145px'}], position: 2500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_PTerm}", "top", '144px', { fromValue: '34px'}], position: 0, duration: 1000 },
                { id: "eid85", tween: [ "style", "${_PTerm}", "top", '144px', { fromValue: '144px'}], position: 2500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_dot}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid51", tween: [ "transform", "${_play_Obversion}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "color", "${_nonPTerm}", "color", 'rgba(38,98,234,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,98,234,1.00)'}], position: 1000, duration: 0 },
                { id: "eid101", tween: [ "style", "${_nonPTerm}", "top", '144px', { fromValue: '144px'}], position: 1000, duration: 0 },
                { id: "eid102", tween: [ "style", "${_nonPTerm}", "top", '144px', { fromValue: '144px'}], position: 2500, duration: 0 },
                { id: "eid169", tween: [ "style", "${_dot}", "left", '281px', { fromValue: '281px'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_dot}", "left", '294px', { fromValue: '281px'}], position: 1250, duration: 357 },
                { id: "eid194", tween: [ "style", "${_play_Obversion}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid195", tween: [ "style", "${_play_Obversion}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid164", tween: [ "style", "${_are}", "left", '165px', { fromValue: '165px'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_are}", "left", '165px', { fromValue: '165px'}], position: 1000, duration: 0 },
                { id: "eid128", tween: [ "style", "${_are_not}", "width", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_nonPTerm}", "left", '219px', { fromValue: '219px'}], position: 0, duration: 0 },
                { id: "eid174", tween: [ "style", "${_nonPTerm}", "left", '219px', { fromValue: '219px'}], position: 1000, duration: 0 },
                { id: "eid175", tween: [ "style", "${_nonPTerm}", "left", '219px', { fromValue: '219px'}], position: 2500, duration: 0 },
                { id: "eid142", tween: [ "style", "${_play_Obversion}", "left", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_STerm}", "top", '144px', { fromValue: '34px'}], position: 0, duration: 1000 },
                { id: "eid100", tween: [ "style", "${_STerm}", "top", '144px', { fromValue: '144px'}], position: 2000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_are}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid143", tween: [ "style", "${_are}", "width", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_play_Obversion}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid46", tween: [ "style", "${_Some}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid60", tween: [ "style", "${_Some}", "top", '145px', { fromValue: '145px'}], position: 2000, duration: 0 },
                { id: "eid153", tween: [ "style", "${_are_not}", "left", '165px', { fromValue: '165px'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_are_not}", "left", '165px', { fromValue: '165px'}], position: 1000, duration: 0 },
                { id: "eid155", tween: [ "style", "${_are_not}", "left", '165px', { fromValue: '165px'}], position: 2500, duration: 0 },
                { id: "eid80", tween: [ "style", "${_nonPTerm}", "opacity", '0.3', { fromValue: '0'}], position: 1607, duration: 393 },
                { id: "eid122", tween: [ "style", "${_nonPTerm}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 500 },
                { id: "eid198", tween: [ "style", "${_Rewind}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "style", "${_Rewind}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Some}", "left", '51px', { fromValue: '51px'}], position: 0, duration: 0 }            ]
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
                    rect: ['0px', '0px', '140px', '32px', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(222,222,222,1.00)']
                },
                {
                    type: 'text',
                    rect: ['0px', '4px', '140px', '27px', 'auto', 'auto'],
                    id: 'Conversion',
                    text: 'Obversion',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(76,76,76,1.00)', 'normal', 'none', '']
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
                ["style", "left", '0px'],
                ["style", "width", '140px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '32px'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Conversion}": [
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
                    rect: ['-7px', '-2px', '140px', '32px', 'auto', 'auto'],
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
                    rect: ['48px', '6px', '29px', '16px', 'auto', 'auto'],
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
                ["style", "left", '-7px'],
                ["style", "width", '140px'],
                ["style", "top", '-2px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '32px'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_rewind-symbol}": [
                ["style", "top", '6px'],
                ["style", "height", '16px'],
                ["style", "left", '48px'],
                ["style", "width", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '126px']
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
