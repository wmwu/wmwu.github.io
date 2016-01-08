function doItOnFocus(element)
{
    var textBoxId = element.id;
    window.textBoxId = textBoxId;
}

function tilde()
{
    var textfield = document.getElementById(textBoxId).value;
    var len = document.getElementById(textBoxId).value.length;
    var start = document.getElementById(textBoxId).selectionStart;
    var end = document.getElementById(textBoxId).selectionEnd;
    var sel = document.getElementById(textBoxId).value.substring(start, end);
    var symbol = '\u223C';
    document.getElementById(textBoxId).value = document.getElementById(textBoxId).value.substring(0,start) + symbol + document.getElementById(textBoxId).value.substring(end,len);
		//SET CURSOR POSITION
		$.fn.setCursorPosition = function(pos) {
		  this.each(function(index, elem) {
		    if (elem.setSelectionRange) {
		      elem.setSelectionRange(pos, pos);
		    } else if (elem.createTextRange) {
		      var range = elem.createTextRange();
		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		    }
		  });
		  return this;
		};
$(document.getElementById(textBoxId)).focus().setCursorPosition(start + 1);
}

function dot()
{
    var textfield = document.getElementById(textBoxId).value;
    var len = document.getElementById(textBoxId).value.length;
    var start = document.getElementById(textBoxId).selectionStart;
    var end = document.getElementById(textBoxId).selectionEnd;
    var sel = document.getElementById(textBoxId).value.substring(start, end);
    var symbol = '\u2022';
    document.getElementById(textBoxId).value = document.getElementById(textBoxId).value.substring(0,start) + symbol + document.getElementById(textBoxId).value.substring(end,len);
		//SET CURSOR POSITION
		$.fn.setCursorPosition = function(pos) {
		  this.each(function(index, elem) {
		    if (elem.setSelectionRange) {
		      elem.setSelectionRange(pos, pos);
		    } else if (elem.createTextRange) {
		      var range = elem.createTextRange();
		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		    }
		  });
		  return this;
		};
$(document.getElementById(textBoxId)).focus().setCursorPosition(start + 1);
}

function wedge()
{
    var textfield = document.getElementById(textBoxId).value;
    var len = document.getElementById(textBoxId).value.length;
    var start = document.getElementById(textBoxId).selectionStart;
    var end = document.getElementById(textBoxId).selectionEnd;
    var sel = document.getElementById(textBoxId).value.substring(start, end);
    var symbol = '\u2228';
    document.getElementById(textBoxId).value = document.getElementById(textBoxId).value.substring(0,start) + symbol + document.getElementById(textBoxId).value.substring(end,len);
		//SET CURSOR POSITION
		$.fn.setCursorPosition = function(pos) {
		  this.each(function(index, elem) {
		    if (elem.setSelectionRange) {
		      elem.setSelectionRange(pos, pos);
		    } else if (elem.createTextRange) {
		      var range = elem.createTextRange();
		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		    }
		  });
		  return this;
		};
$(document.getElementById(textBoxId)).focus().setCursorPosition(start + 1);
}

function horseshoe()
{
    var textfield = document.getElementById(textBoxId).value;
    var len = document.getElementById(textBoxId).value.length;
    var start = document.getElementById(textBoxId).selectionStart;
    var end = document.getElementById(textBoxId).selectionEnd;
    var sel = document.getElementById(textBoxId).value.substring(start, end);
    var symbol = '\u2283';
    document.getElementById(textBoxId).value = document.getElementById(textBoxId).value.substring(0,start) + symbol + document.getElementById(textBoxId).value.substring(end,len);
		//SET CURSOR POSITION
		$.fn.setCursorPosition = function(pos) {
		  this.each(function(index, elem) {
		    if (elem.setSelectionRange) {
		      elem.setSelectionRange(pos, pos);
		    } else if (elem.createTextRange) {
		      var range = elem.createTextRange();
		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		    }
		  });
		  return this;
		};
$(document.getElementById(textBoxId)).focus().setCursorPosition(start + 1);
}

function triplebar()
{
    var textfield = document.getElementById(textBoxId).value;
    var len = document.getElementById(textBoxId).value.length;
    var start = document.getElementById(textBoxId).selectionStart;
    var end = document.getElementById(textBoxId).selectionEnd;
    var sel = document.getElementById(textBoxId).value.substring(start, end);
    var symbol = '\u2261';
    document.getElementById(textBoxId).value = document.getElementById(textBoxId).value.substring(0,start) + symbol + document.getElementById(textBoxId).value.substring(end,len);
		//SET CURSOR POSITION
		$.fn.setCursorPosition = function(pos) {
		  this.each(function(index, elem) {
		    if (elem.setSelectionRange) {
		      elem.setSelectionRange(pos, pos);
		    } else if (elem.createTextRange) {
		      var range = elem.createTextRange();
		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		    }
		  });
		  return this;
		};
$(document.getElementById(textBoxId)).focus().setCursorPosition(start + 1);
}