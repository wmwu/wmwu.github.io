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
                id: 'Rewind',
                display: 'block',
                type: 'rect',
                rect: ['97', '212','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'play_Conversion',
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
            }],
            symbolInstances: [
            {
                id: 'Rewind',
                symbolName: 'Rewind',
                autoPlay: {

                }
            },
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
            "${_STerm}": [
                ["style", "top", '35px'],
                ["color", "color", 'rgba(68,221,11,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '122px'],
                ["style", "font-style", 'italic']
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
                ["style", "left", '244px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_Text5Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '183px'],
                ["color", "color", 'rgba(38,98,234,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '320px'],
                ["style", "height", '280px'],
                ["style", "overflow", 'hidden']
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
            "${_All}": [
                ["style", "top", '35px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '61px']
            ],
            "${_Rewind}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_play_Conversion}": [
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_are}": [
                ["style", "top", '35px'],
                ["style", "left", '176px'],
                ["style", "width", '38px']
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
                { id: "eid65", tween: [ "style", "${_play_Conversion}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_play_Conversion}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid43", tween: [ "style", "${_STerm}", "left", '244px', { fromValue: '122px'}], position: 0, duration: 1000 },
                { id: "eid61", tween: [ "style", "${_play_Conversion}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid21", tween: [ "style", "${_are}", "left", '176px', { fromValue: '176px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "transform", "${_play_Conversion}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_dot}", "left", '268px', { fromValue: '268px'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_PTerm}", "left", '122px', { fromValue: '244px'}], position: 0, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_dot}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid47", tween: [ "style", "${_are}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_PTerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid81", tween: [ "style", "${_Rewind}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Rewind}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid46", tween: [ "style", "${_All}", "top", '146px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid42", tween: [ "style", "${_STerm}", "top", '145px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid79", tween: [ "style", "${_Rewind}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
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
                    rect: ['0px', '4px', '140px', '27px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(76,76,76,1.00)', 'normal', 'none', ''],
                    id: 'Conversion',
                    text: 'Conversion',
                    align: 'center',
                    type: 'text'
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
                ["style", "width", '140px'],
                ["style", "left", '0px'],
                ["style", "font-size", '22px']
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
                    rect: ['50px', '6px', '28px', '16px', 'auto', 'auto'],
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
                ["style", "height", '16px'],
                ["style", "top", '6px'],
                ["style", "left", '50px'],
                ["style", "width", '28px']
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
