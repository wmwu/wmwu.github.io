
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_play_Conversion}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rewind}","click",function(sym,e){sym.stop("start");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'play_Conversion'
(function(symbolName){})("play_Conversion");
//Edge symbol end:'play_Conversion'
})(jQuery,AdobeEdge,"EDGE-130569957");