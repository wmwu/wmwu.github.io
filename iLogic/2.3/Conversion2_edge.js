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
                id: 'play_Conversion',
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
                id: 'Rewind',
                display: 'none',
                type: 'group',
                rect: ['97px', '212px','126','29','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['-7px', '-2px','140px','32px','auto', 'auto'],
                    borderRadius: ["6px 6px", "6px 6px", "6px 6px", "6px 6px"],
                    fill: ["rgba(222,222,222,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    transform: [[],[],[],['0.9','0.9']]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['56px', '0px','13px','27px','auto', 'auto'],
                    text: "⏮",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 22, "rgba(76,76,76,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'play_Conversion',
                symbolName: 'play_Conversion',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_PTerm}": [
                ["style", "top", '35px'],
                ["style", "left", '244px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
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
            "${_are}": [
                ["style", "top", '35px'],
                ["style", "left", '176px'],
                ["style", "width", '38px']
            ],
            "${_All}": [
                ["style", "top", '35px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '61px']
            ],
            "${_Text3}": [
                ["style", "left", '56px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '183px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_STerm}": [
                ["style", "top", '35px'],
                ["color", "color", 'rgba(68,221,11,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '122px'],
                ["style", "font-style", 'italic']
            ],
            "${_areCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '117px'],
                ["style", "width", '38px']
            ],
            "${_AllCopy}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '0px']
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
                ["style", "left", '268px']
            ],
            "${_Rewind}": [
                ["style", "top", '212px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '97px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '280px'],
                ["style", "width", '320px']
            ],
            "${_play_Conversion}": [
                ["transform", "scaleX", '0.9'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Text4Copy}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(68,221,11,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '58px'],
                ["style", "font-style", 'italic']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid43", tween: [ "style", "${_STerm}", "left", '244px', { fromValue: '122px'}], position: 0, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_Rewind}", "left", '97px', { fromValue: '97px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_are}", "left", '176px', { fromValue: '176px'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_PTerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_PTerm}", "left", '122px', { fromValue: '244px'}], position: 0, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_dot}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid47", tween: [ "style", "${_are}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_dot}", "left", '268px', { fromValue: '268px'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Rewind}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Rewind}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid46", tween: [ "style", "${_All}", "top", '146px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid42", tween: [ "style", "${_STerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid51", tween: [ "transform", "${_play_Conversion}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "transform", "${_play_Conversion}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_All}", "left", '61px', { fromValue: '61px'}], position: 0, duration: 0 }            ]
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
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(76,76,76,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Conversion',
                    text: 'Conversion',
                    align: 'center',
                    rect: ['0px', '4px', '140px', '27px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Conversion}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(76,76,76,1.00)'],
                ["style", "font-size", '22px'],
                ["style", "left", '0px'],
                ["style", "width", '140px']
            ],
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
