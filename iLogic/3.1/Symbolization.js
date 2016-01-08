function doItOnFocus(element)
{
    var textBoxId = element.id;
    window.textBoxId = textBoxId;
}

function tilde()
{
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

function checkanswer01()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼N")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s301c").css({ opacity: .7, "z-index": "2" });
		$("#s301e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s301c").css({ opacity: .0 });
		$("#s301e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer02()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "N • J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s302c").css({ opacity: .7, "z-index": "2" });
		$("#s302e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s302c").css({ opacity: .0 });
		$("#s302e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer03()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼N • ∼J" || symb == "∼(N ∨ J)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s303c").css({ opacity: .7, "z-index": "2" });
		$("#s303e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s303c").css({ opacity: .0 });
		$("#s303e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer04()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "N ∨ J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s304c").css({ opacity: .7, "z-index": "2" });
		$("#s304e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s304c").css({ opacity: .0 });
		$("#s304e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer05()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼N ∨ ∼J" || symb == "∼(N • J)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s305c").css({ opacity: .7, "z-index": "2" });
		$("#s305e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s305c").css({ opacity: .0 });
		$("#s305e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer06()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "N • ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s306c").css({ opacity: .7, "z-index": "2" });
		$("#s306e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s306c").css({ opacity: .0 });
		$("#s306e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer07()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼N • J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s307c").css({ opacity: .7, "z-index": "2" });
		$("#s307e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s307c").css({ opacity: .0 });
		$("#s307e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer08()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "N ⊃ J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s308c").css({ opacity: .7, "z-index": "2" });
		$("#s308e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s308c").css({ opacity: .0 });
		$("#s308e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer09()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "N ⊃ J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s309c").css({ opacity: .7, "z-index": "2" });
		$("#s309e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s309c").css({ opacity: .0 });
		$("#s309e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer10()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "J ⊃ N")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s310c").css({ opacity: .7, "z-index": "2" });
		$("#s310e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s310c").css({ opacity: .0 });
		$("#s310e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer11()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "J ≡ N" || symb == "(J ⊃ N) • (N ⊃ J)"
		 || symb == "(N ⊃ J) • (J ⊃ N)" || symb == "(J ⊃ N) • (∼J ⊃ ∼N)"
	   || symb == "(N ⊃ J) • (∼N ⊃ ∼J)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s311c").css({ opacity: .7, "z-index": "2" });
		$("#s311e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s311c").css({ opacity: .0 });
		$("#s311e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer12()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "N ⊃ ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s312c").css({ opacity: .7, "z-index": "2" });
		$("#s312e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s312c").css({ opacity: .0 });
		$("#s312e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer13()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "J ⊃ ∼N" || symb == "N ⊃ ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s313c").css({ opacity: .7, "z-index": "2" });
		$("#s313e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s313c").css({ opacity: .0 });
		$("#s313e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer14()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "J ≡ ∼N" || symb == "∼N ≡ J"
		 || symb == "(J ⊃ ∼N) • (∼N ⊃ J)" || symb == "(∼N ⊃ J) • (J ⊃ ∼N)"
		 || symb == "(J ⊃ ∼N) • (∼J ⊃ N)" || symb == "(∼N ⊃ J) • (N ⊃ ∼J)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s314c").css({ opacity: .7, "z-index": "2" });
		$("#s314e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s314c").css({ opacity: .0 });
		$("#s314e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer15()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "(K • N) ⊃ ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s315c").css({ opacity: .7, "z-index": "2" });
		$("#s315e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s315c").css({ opacity: .0 });
		$("#s315e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer16()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "(∼K • ∼N) ⊃ ∼J" || symb == "∼(K ∨ N) ⊃ ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s316c").css({ opacity: .7, "z-index": "2" });
		$("#s316e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s316c").css({ opacity: .0 });
		$("#s316e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer17()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼N ⊃ (∼J • B)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s317c").css({ opacity: .7, "z-index": "2" });
		$("#s317e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s317c").css({ opacity: .0 });
		$("#s317e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer18()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "J ⊃ (N • ∼B)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s318c").css({ opacity: .7, "z-index": "2" });
		$("#s318e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s318c").css({ opacity: .0 });
		$("#s318e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer19()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "E • J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s319c").css({ opacity: .7, "z-index": "2" });
		$("#s319e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s319c").css({ opacity: .0 });
		$("#s319e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer20()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼E • ∼J" || symb == "∼(E ∨ J)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s320c").css({ opacity: .7, "z-index": "2" });
		$("#s320e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s320c").css({ opacity: .0 });
		$("#s320e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer21()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼E • J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s321c").css({ opacity: .7, "z-index": "2" });
		$("#s321e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s321c").css({ opacity: .0 });
		$("#s321e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer22()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "E ∨ J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s322c").css({ opacity: .7, "z-index": "2" });
		$("#s322e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s322c").css({ opacity: .0 });
		$("#s322e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer23()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼E ∨ ∼J" || symb == "∼(E • J)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s323c").css({ opacity: .7, "z-index": "2" });
		$("#s323e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s323c").css({ opacity: .0 });
		$("#s323e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer24()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(E • J)" || symb == "∼E ∨ ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s324c").css({ opacity: .7, "z-index": "2" });
		$("#s324e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s324c").css({ opacity: .0 });
		$("#s324e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer25()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(E ∨ J)" || symb == "∼E • ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s325c").css({ opacity: .7, "z-index": "2" });
		$("#s325e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s325c").css({ opacity: .0 });
		$("#s325e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer26()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(E ∨ J)" || symb == "∼E • ∼J")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s326c").css({ opacity: .7, "z-index": "2" });
		$("#s326e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s326c").css({ opacity: .0 });
		$("#s326e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer27()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "L ∨ P" || symb == "P ∨ L")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s327c").css({ opacity: .7, "z-index": "2" });
		$("#s327e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s327c").css({ opacity: .0 });
		$("#s327e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer28()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "L • P" || symb == "P • L")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s328c").css({ opacity: .7, "z-index": "2" });
		$("#s328e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s328c").css({ opacity: .0 });
		$("#s328e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer29()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(L ∨ P)" || symb == "∼L • ∼P")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s329c").css({ opacity: .7, "z-index": "2" });
		$("#s329e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s329c").css({ opacity: .0 });
		$("#s329e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer30()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(L • P)" || symb == "∼L ∨ ∼P")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s330c").css({ opacity: .7, "z-index": "2" });
		$("#s330e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s330c").css({ opacity: .0 });
		$("#s330e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer31()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "E ≡ ∼S" || symb == "∼S ≡ E"
		 || symb == "∼E ≡ S" || symb == "S ≡ ∼E"
		 || symb == "(E ∨ S) • ∼(E • S)" || symb == "(S ∨ E) • ∼(S • E)"
		 || symb == "(E • ∼S) ∨ (S • ∼E)" || symb == "(S • ∼E) ∨ (E • ∼S)"
		 || symb == "(E • ∼S) ∨ (∼E • S)" || symb == "(S • ∼E) ∨ (∼S • E)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s331c").css({ opacity: .7, "z-index": "2" });
		$("#s331e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s331c").css({ opacity: .0 });
		$("#s331e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer32()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "E ≡ ∼S" || symb == "∼S ≡ E"
		 || symb == "∼E ≡ S" || symb == "S ≡ ∼E"
		 || symb == "(E ∨ S) • ∼(E • S)" || symb == "(S ∨ E) • ∼(S • E)"
		 || symb == "(E • ∼S) ∨ (S • ∼E)" || symb == "(S • ∼E) ∨ (E • ∼S)"
		 || symb == "(E • ∼S) ∨ (∼E • S)" || symb == "(S • ∼E) ∨ (∼S • E)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s332c").css({ opacity: .7, "z-index": "2" });
		$("#s332e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s332c").css({ opacity: .0 });
		$("#s332e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer33()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(J • C)" || symb == "∼J ∨ ∼C")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s333c").css({ opacity: .7, "z-index": "2" });
		$("#s333e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s333c").css({ opacity: .0 });
		$("#s333e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer34()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(J ∨ C)" || symb == "∼J • ∼C")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s334c").css({ opacity: .7, "z-index": "2" });
		$("#s334e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s334c").css({ opacity: .0 });
		$("#s334e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer35()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "R ⊃ G" || symb == "∼G ⊃ ∼R"
		 || symb == "∼R ∨ G" || symb == "G ∨ ∼R")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s335c").css({ opacity: .7, "z-index": "2" });
		$("#s335e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s335c").css({ opacity: .0 });
		$("#s335e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer36()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "G ⊃ R" || symb == "∼R ⊃ ∼G"
		 || symb == "∼G ∨ R" || symb == "R ∨ ∼G")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s336c").css({ opacity: .7, "z-index": "2" });
		$("#s336e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s336c").css({ opacity: .0 });
		$("#s336e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer37()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "G ⊃ R" || symb == "∼R ⊃ ∼G"
		 || symb == "∼G ∨ R" || symb == "R ∨ ∼G")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s337c").css({ opacity: .7, "z-index": "2" });
		$("#s337e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s337c").css({ opacity: .0 });
		$("#s337e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer38()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "G ≡ R" || symb == "R ≡ G"
		 || symb == "∼G ≡ ∼R" || symb == "∼R ≡ ∼G"
		 || symb == "(R ⊃ G) • (G ⊃ R)" || symb == "(R ⊃ G) • (∼R ⊃ ∼G)"
		 || symb == "(G ⊃ R) • (R ⊃ G)" || symb == "(G ⊃ R) • (∼G ⊃ ∼R)"
		 || symb == "(∼R ⊃ ∼G) • (R ⊃ G)" || symb == "(∼G ⊃ ∼R) • (G ⊃ R)"
		 || symb == "(∼R ⊃ ∼G) • (∼G ⊃ ∼R)" || symb == "(∼G ⊃ ∼R) • (∼R ⊃ ∼G)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s338c").css({ opacity: .7, "z-index": "2" });
		$("#s338e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s338c").css({ opacity: .0 });
		$("#s338e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer39()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "T ⊃ ∼F" || symb == "F ⊃ ∼T"
		 || symb == "∼T ∨ ∼F" || symb == "∼F ∨ ∼T"
		 || symb == "∼(T • F)" || symb == "∼(F • T)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s339c").css({ opacity: .7, "z-index": "2" });
		$("#s339e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s339c").css({ opacity: .0 });
		$("#s339e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer40()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "T ⊃ ∼F" || symb == "F ⊃ ∼T"
		 || symb == "∼T ∨ ∼F" || symb == "∼F ∨ ∼T"
		 || symb == "∼(T • F)" || symb == "∼(F • T)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s340c").css({ opacity: .7, "z-index": "2" });
		$("#s340e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s340c").css({ opacity: .0 });
		$("#s340e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer41()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "F ≡ ∼T" || symb == "∼T ≡ F"
		 || symb == "∼F ≡ T" || symb == "T ≡ ∼F"
		 || symb == "(T ∨ F) • ∼(T • F)" || symb == "(F ∨ T) • ∼(F • T)"
		 || symb == "(T • ∼F) ∨ (F • ∼T)" || symb == "(F • ∼T) ∨ (T • ∼F)"
		 || symb == "(T • ∼F) ∨ (∼T • F)" || symb == "(F • ∼T) ∨ (∼F • T)"
		 || symb == "(∼T • F) ∨ (T • ∼F)" || symb == "(∼F • T) ∨ (F • ∼T)"
		 || symb == "(T ⊃ ∼F) • (∼F ⊃ T)" || symb == "(T ⊃ ∼F) • (∼T ⊃ F)"
		 || symb == "(∼F ⊃ T) • (T ⊃ ∼F)" || symb == "(∼F ⊃ T) • (F ⊃ ∼T)"
		 || symb == "(F ⊃ ∼T) • (∼T ⊃ F)" || symb == "(F ⊃ ∼T) • (∼F ⊃ T)"
		 || symb == "(∼T ⊃ F) • (F ⊃ ∼T)" || symb == "(∼T ⊃ F) • (T ⊃ ∼F)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s341c").css({ opacity: .7, "z-index": "2" });
		$("#s341e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s341c").css({ opacity: .0 });
		$("#s341e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer42()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(R ∨ S) ⊃ C" || symb == "(∼R • ∼S) ⊃ C")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s342c").css({ opacity: .7, "z-index": "2" });
		$("#s342e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s342c").css({ opacity: .0 });
		$("#s342e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer43()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "(R ∨ S) ⊃ ∼C" || symb == "C ⊃ ∼(R ∨ S)"
		 || symb == "C ⊃ (∼R • ∼S)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s343c").css({ opacity: .7, "z-index": "2" });
		$("#s343e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s343c").css({ opacity: .0 });
		$("#s343e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer44()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "C ⊃ ∼(R ∨ S)" || symb == "C ⊃ (∼R • ∼S)"
		 || symb == "(R ∨ S) ⊃ ∼C")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s344c").css({ opacity: .7, "z-index": "2" });
		$("#s344e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s344c").css({ opacity: .0 });
		$("#s344e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer45()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "C ≡ ∼(R ∨ S)" || symb == "C ≡ (∼R • ∼S)"
		 || symb == "∼(R ∨ S) ≡ C" || symb == "(∼R • ∼S) ≡ C"
		 || symb == "∼C ≡ (R ∨ S)" || symb == "(R ∨ S) ≡ ∼C"
		 || symb == "((R ∨ S) ⊃ ∼C) • (∼(R ∨ S) ⊃ C)"
		 || symb == "((R ∨ S) ⊃ ∼C) • (∼C ⊃ (R ∨ S))"
		 || symb == "(∼(R ∨ S) ⊃ C) • ((R ∨ S) ⊃ ∼C)"
		 || symb == "(∼C ⊃ (R ∨ S)) • ((R ∨ S) ⊃ ∼C)"
		 || symb == "(C ⊃ ∼(R ∨ S)) • (∼C ⊃ (R ∨ S))"
		 || symb == "(C ⊃ ∼(R ∨ S)) • (∼(R ∨ S) ⊃ C)"
		 || symb == "(∼(R ∨ S) ⊃ C) • (C ⊃ ∼(R ∨ S))"
		 || symb == "((R ∨ S) ⊃ ∼C) • ((∼R • ∼S) ⊃ C)"
		 || symb == "((∼R • ∼S) ⊃ C) • ((R ∨ S) ⊃ ∼C)"
		 || symb == "(C ⊃ (∼R • ∼S)) • (∼C ⊃ (R ∨ S))"
		 || symb == "(C ⊃ (∼R • ∼S)) • ((∼R • ∼S) ⊃ C)"
		 || symb == "((∼R • ∼S) ⊃ C) • (C ⊃ (∼R • ∼S))")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s345c").css({ opacity: .7, "z-index": "2" });
		$("#s345e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s345c").css({ opacity: .0 });
		$("#s345e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer46()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "(U • S) ⊃ L" || symb == "∼L ⊃ ∼(U • S)"
		 || symb == "∼L ⊃ (∼U ∨ ∼S)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s346c").css({ opacity: .7, "z-index": "2" });
		$("#s346e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s346c").css({ opacity: .0 });
		$("#s346e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer47()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "S ∨ (H • U)" || symb == "∼(H • U) ⊃ S"
		 || symb == "(∼H ∨ ∼U) ⊃ S" || symb == "∼S ⊃ (H • U)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s347c").css({ opacity: .7, "z-index": "2" });
		$("#s347e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s347c").css({ opacity: .0 });
		$("#s347e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer48()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "(S ∨ L) • (L ⊃ W)" || symb == "(∼S ⊃ L) • (L ⊃ W)"
		 || symb == "(L ∨ S) • (L ⊃ W)" || symb == "(∼L ⊃ S) • (L ⊃ W)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s348c").css({ opacity: .7, "z-index": "2" });
		$("#s348e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s348c").css({ opacity: .0 });
		$("#s348e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer49()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼C ⊃ ∼E" || symb == "E ⊃ C"
		 || symb == "C ∨ ∼E" || symb == "∼E ∨ C")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s349c").css({ opacity: .7, "z-index": "2" });
		$("#s349e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s349c").css({ opacity: .0 });
		$("#s349e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer50()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼S • ∼N" || symb == "∼(S ∨ N)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s350c").css({ opacity: .7, "z-index": "2" });
		$("#s350e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s350c").css({ opacity: .0 });
		$("#s350e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer51()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼S • ∼W" || symb == "∼(S ∨ W)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s351c").css({ opacity: .7, "z-index": "2" });
		$("#s351e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s351c").css({ opacity: .0 });
		$("#s351e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer52()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(E • B)" || symb == "∼E ∨ ∼B")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s352c").css({ opacity: .7, "z-index": "2" });
		$("#s352e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s352c").css({ opacity: .0 });
		$("#s352e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer53()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "M ⊃ P" || symb == "∼P ⊃ ∼M"
		 || symb == "∼M ∨ P" || symb == "P ∨ ∼M")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s353c").css({ opacity: .7, "z-index": "2" });
		$("#s353e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s353c").css({ opacity: .0 });
		$("#s353e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer54()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "H ⊃ D" || symb == "∼D ⊃ ∼H"
		 || symb == "∼H ∨ D" || symb == "D ∨ ∼H")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s354c").css({ opacity: .7, "z-index": "2" });
		$("#s354e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s354c").css({ opacity: .0 });
		$("#s354e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer55()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "F ⊃ ∼E" || symb == "E ⊃ ∼F"
		 || symb == "∼F ∨ ∼E" || symb == "∼E ∨ ∼F")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s355c").css({ opacity: .7, "z-index": "2" });
		$("#s355e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s355c").css({ opacity: .0 });
		$("#s355e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer56()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "S ⊃ (R ∨ C)" || symb == "∼(R ∨ C) ⊃ ∼S"
		 || symb == "∼S ∨ (R ∨ C)" || symb == "(R ∨ C) ∨ ∼S")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s356c").css({ opacity: .7, "z-index": "2" });
		$("#s356e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s356c").css({ opacity: .0 });
		$("#s356e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer57()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "B ⊃ (R • C)" || symb == "∼(R • C) ⊃ ∼B"
		 || symb == "∼B ∨ (R • C)" || symb == "(R • C) ∨ ∼B")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s357c").css({ opacity: .7, "z-index": "2" });
		$("#s357e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s357c").css({ opacity: .0 });
		$("#s357e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer58()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "(R • G) ⊃ ∼J" || symb == "J ⊃ ∼(R • G)"
		 || symb == "∼(R • G) ∨ ∼J" || symb == "∼J ∨ ∼(R • G)"
		 || symb == "(∼R ∨ ∼G) ∨ ∼J" || symb == "∼J ∨ (∼R ∨ ∼G)"
		 || symb == "J ⊃ (∼R ∨ ∼G)")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s358c").css({ opacity: .7, "z-index": "2" });
		$("#s358e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s358c").css({ opacity: .0 });
		$("#s358e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer59()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼F ⊃ (C • T)" || symb == "∼(C • T) ⊃ F"
		 || symb == "F ∨ (C • T)" || symb == "(C • T) ∨ F"
		 || symb == "(∼C ∨ ∼T) ⊃ F")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s359c").css({ opacity: .7, "z-index": "2" });
		$("#s359e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s359c").css({ opacity: .0 });
		$("#s359e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}
function checkanswer60()
{
	var symb = document.getElementById(textBoxId).value;

		if (symb == "∼(B • G) ⊃ S" || symb == "∼S ⊃ (B • G)"
		 || symb == "(B • G) ∨ S" || symb == "S ∨ (B • G)"
		 || symb == "(∼B ∨ ∼G) ⊃ S")
		{
		document.getElementById(textBoxId).value = symb;
		$("#s360c").css({ opacity: .7, "z-index": "2" });
		$("#s360e").css({ opacity: .0 });
		document.getElementById(textBoxId).focus();
	  }
	  else
	  {
		document.getElementById(textBoxId).value = symb;
		$("#s360c").css({ opacity: .0 });
		$("#s360e").css({ opacity: .7, "z-index": "2" });
		document.getElementById(textBoxId).focus();
	  }
}