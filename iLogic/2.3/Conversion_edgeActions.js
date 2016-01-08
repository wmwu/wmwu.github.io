/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_play_Conversion}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Rewind}", "click", function(sym, e) {
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("start");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'play_Conversion'
   (function(symbolName) {   
   
   })("play_Conversion");
   //Edge symbol end:'play_Conversion'

   //=========================================================
   
   //Edge symbol: 'Rewind'
   (function(symbolName) {   
   
      

   })("Rewind");
   //Edge symbol end:'Rewind'

})(jQuery, AdobeEdge, "EDGE-130569957");