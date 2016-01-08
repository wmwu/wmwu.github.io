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

function checkanswers1()
{

/*  var fn = [];
  for( var i = 1; i < 21; i++ ) {
    fn[i] = document.getElementById("fn" + i); 
  } no longer needed if use $('input[id="fn1"]').val()*/

//#1
  if ($('input[id="341011"]').val() == "1, 4 MT")
  {
  $("#s341011c").css({ opacity: .7, "z-index": "2" });
  $("#s341011e").css({ opacity: .0 });
  }
  else
  {
  $("#s341011c").css({ opacity: .0 });
  $("#s341011e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341012"]').val() == "2, 5 DS")
  {
  $("#s341012c").css({ opacity: .7, "z-index": "2" });
  $("#s341012e").css({ opacity: .0 });
  }
  else
  {
  $("#s341012c").css({ opacity: .0 });
  $("#s341012e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341013"]').val() == "3, 6 MP")
  {
  $("#s341013c").css({ opacity: .7, "z-index": "2" });
  $("#s341013e").css({ opacity: .0 });
  }
  else
  {
  $("#s341013c").css({ opacity: .0 });
  $("#s341013e").css({ opacity: .7, "z-index": "2" });
  }
//#2
  if ($('input[id="341021"]').val() == "1, 3 MT")
  {
  $("#s341021c").css({ opacity: .7, "z-index": "2" });
  $("#s341021e").css({ opacity: .0 });
  }
  else
  {
  $("#s341021c").css({ opacity: .0 });
  $("#s341021e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341022"]').val() == "2, 4 DS")
  {
  $("#s341022c").css({ opacity: .7, "z-index": "2" });
  $("#s341022e").css({ opacity: .0 });
  }
  else
  {
  $("#s341022c").css({ opacity: .0 });
  $("#s341022e").css({ opacity: .7, "z-index": "2" });
  }
//#3
  if ($('input[id="341031"]').val() == "1, 2 HS")
  {
  $("#s341031c").css({ opacity: .7, "z-index": "2" });
  $("#s341031e").css({ opacity: .0 });
  }
  else
  {
  $("#s341031c").css({ opacity: .0 });
  $("#s341031e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341032"]').val() == "3, 4 MP")
  {
  $("#s341032c").css({ opacity: .7, "z-index": "2" });
  $("#s341032e").css({ opacity: .0 });
  }
  else
  {
  $("#s341032c").css({ opacity: .0 });
  $("#s341032e").css({ opacity: .7, "z-index": "2" });
  }
//#4
  if ($('input[id="341041"]').val() == "3 Add.")
  {
  $("#s341041c").css({ opacity: .7, "z-index": "2" });
  $("#s341041e").css({ opacity: .0 });
  }
  else
  {
  $("#s341041c").css({ opacity: .0 });
  $("#s341041e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341042"]').val() == "1, 2, 5 CD")
  {
  $("#s341042c").css({ opacity: .7, "z-index": "2" });
  $("#s341042e").css({ opacity: .0 });
  }
  else
  {
  $("#s341042c").css({ opacity: .0 });
  $("#s341042e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341043"]').val() == "4, 6 DS")
  {
  $("#s341043c").css({ opacity: .7, "z-index": "2" });
  $("#s341043e").css({ opacity: .0 });
  }
  else
  {
  $("#s341043c").css({ opacity: .0 });
  $("#s341043e").css({ opacity: .7, "z-index": "2" });
  }
//#5
  if ($('input[id="341051"]').val() == "1 Simp.")
  {
  $("#s341051c").css({ opacity: .7, "z-index": "2" });
  $("#s341051e").css({ opacity: .0 });
  }
  else
  {
  $("#s341051c").css({ opacity: .0 });
  $("#s341051e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341052"]').val() == "2, 4 MT")
  {
  $("#s341052c").css({ opacity: .7, "z-index": "2" });
  $("#s341052e").css({ opacity: .0 });
  }
  else
  {
  $("#s341052c").css({ opacity: .0 });
  $("#s341052e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341053"]').val() == "3, 5 MP")
  {
  $("#s341053c").css({ opacity: .7, "z-index": "2" });
  $("#s341053e").css({ opacity: .0 });
  }
  else
  {
  $("#s341053c").css({ opacity: .0 });
  $("#s341053e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341054"]').val() == "5, 6 Conj.")
  {
  $("#s341054c").css({ opacity: .7, "z-index": "2" });
  $("#s341054e").css({ opacity: .0 });
  }
  else
  {
  $("#s341054c").css({ opacity: .0 });
  $("#s341054e").css({ opacity: .7, "z-index": "2" });
  }
//#6
  if ($('input[id="341061"]').val() == "2 Add.")
  {
  $("#s341061c").css({ opacity: .7, "z-index": "2" });
  $("#s341061e").css({ opacity: .0 });
  }
  else
  {
  $("#s341061c").css({ opacity: .0 });
  $("#s341061e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341062"]').val() == "1, 3 DD")
  {
  $("#s341062c").css({ opacity: .7, "z-index": "2" });
  $("#s341062e").css({ opacity: .0 });
  }
  else
  {
  $("#s341062c").css({ opacity: .0 });
  $("#s341062e").css({ opacity: .7, "z-index": "2" });
  }
//#7
  if ($('input[id="341071"]').val() == "1, 3 DS")
  {
  $("#s341071c").css({ opacity: .7, "z-index": "2" });
  $("#s341071e").css({ opacity: .0 });
  }
  else
  {
  $("#s341071c").css({ opacity: .0 });
  $("#s341071e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341072"]').val() == "2, 5 MP")
  {
  $("#s341072c").css({ opacity: .7, "z-index": "2" });
  $("#s341072e").css({ opacity: .0 });
  }
  else
  {
  $("#s341072c").css({ opacity: .0 });
  $("#s341072e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341073"]').val() == "4, 6 MT")
  {
  $("#s341073c").css({ opacity: .7, "z-index": "2" });
  $("#s341073e").css({ opacity: .0 });
  }
  else
  {
  $("#s341073c").css({ opacity: .0 });
  $("#s341073e").css({ opacity: .7, "z-index": "2" });
  }
//#8
  if ($('input[id="341081"]').val() == "1 Simp.")
  {
  $("#s341081c").css({ opacity: .7, "z-index": "2" });
  $("#s341081e").css({ opacity: .0 });
  }
  else
  {
  $("#s341081c").css({ opacity: .0 });
  $("#s341081e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341082"]').val() == "3 Simp.")
  {
  $("#s341082c").css({ opacity: .7, "z-index": "2" });
  $("#s341082e").css({ opacity: .0 });
  }
  else
  {
  $("#s341082c").css({ opacity: .0 });
  $("#s341082e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341083"]').val() == "4 Add.")
  {
  $("#s341083c").css({ opacity: .7, "z-index": "2" });
  $("#s341083e").css({ opacity: .0 });
  }
  else
  {
  $("#s341083c").css({ opacity: .0 });
  $("#s341083e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341084"]').val() == "2, 5 MP")
  {
  $("#s341084c").css({ opacity: .7, "z-index": "2" });
  $("#s341084e").css({ opacity: .0 });
  }
  else
  {
  $("#s341084c").css({ opacity: .0 });
  $("#s341084e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="341085"]').val() == "4, 6 Conj.")
  {
  $("#s341085c").css({ opacity: .7, "z-index": "2" });
  $("#s341085e").css({ opacity: .0 });
  }
  else
  {
  $("#s341085c").css({ opacity: .0 });
  $("#s341085e").css({ opacity: .7, "z-index": "2" });
  }

  document.getElementById("chan1").blur();
  window.location.replace('iLogic_3_4.html#ex34');
}

function checkanswers2()
{
//#1
  if ($('input[id="342011"]').val() == "∼E ∨ N")
  {
  $("#s342011c").css({ opacity: .7, "z-index": "2" });
  $("#s342011e").css({ opacity: .0 });
  }
  else
  {
  $("#s342011c").css({ opacity: .0 });
  $("#s342011e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342012"]').val() == "∼∼E")
  {
  $("#s342012c").css({ opacity: .7, "z-index": "2" });
  $("#s342012e").css({ opacity: .0 });
  }
  else
  {
  $("#s342012c").css({ opacity: .0 });
  $("#s342012e").css({ opacity: .7, "z-index": "2" });
  }
//#2
  if ($('input[id="342021"]').val() == "V ⊃ (K • Q)")
  {
  $("#s342021c").css({ opacity: .7, "z-index": "2" });
  $("#s342021e").css({ opacity: .0 });
  }
  else
  {
  $("#s342021c").css({ opacity: .0 });
  $("#s342021e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342022"]').val() == "∼(K • Q)")
  {
  $("#s342022c").css({ opacity: .7, "z-index": "2" });
  $("#s342022e").css({ opacity: .0 });
  }
  else
  {
  $("#s342022c").css({ opacity: .0 });
  $("#s342022e").css({ opacity: .7, "z-index": "2" });
  }
//#3
  if ($('input[id="342031"]').val() == "R ⊃ S")
  {
  $("#s342031c").css({ opacity: .7, "z-index": "2" });
  $("#s342031e").css({ opacity: .0 });
  }
  else
  {
  $("#s342031c").css({ opacity: .0 });
  $("#s342031e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342032"]').val() == "P ⊃ C")
  {
  $("#s342032c").css({ opacity: .7, "z-index": "2" });
  $("#s342032e").css({ opacity: .0 });
  }
  else
  {
  $("#s342032c").css({ opacity: .0 });
  $("#s342032e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342033"]').val() == "R ⊃ ∼P")
  {
  $("#s342033c").css({ opacity: .7, "z-index": "2" });
  $("#s342033e").css({ opacity: .0 });
  }
  else
  {
  $("#s342033c").css({ opacity: .0 });
  $("#s342033e").css({ opacity: .7, "z-index": "2" });
  }
//#4
  if ($('input[id="342041"]').val() == "∼A ∨ ∼H")
  {
  $("#s342041c").css({ opacity: .7, "z-index": "2" });
  $("#s342041e").css({ opacity: .0 });
  }
  else
  {
  $("#s342041c").css({ opacity: .0 });
  $("#s342041e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342042"]').val() == "A ⊃ ∼H")
  {
  $("#s342042c").css({ opacity: .7, "z-index": "2" });
  $("#s342042e").css({ opacity: .0 });
  }
  else
  {
  $("#s342042c").css({ opacity: .0 });
  $("#s342042e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342043"]').val() == "(∼O ⊃ ∼H) • (∼H ⊃ ∼O)")
  {
  $("#s342043c").css({ opacity: .7, "z-index": "2" });
  $("#s342043e").css({ opacity: .0 });
  }
  else
  {
  $("#s342043c").css({ opacity: .0 });
  $("#s342043e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342044"]').val() == "(∼H ⊃ ∼O) • (∼O ⊃ ∼H)")
  {
  $("#s342044c").css({ opacity: .7, "z-index": "2" });
  $("#s342044e").css({ opacity: .0 });
  }
  else
  {
  $("#s342044c").css({ opacity: .0 });
  $("#s342044e").css({ opacity: .7, "z-index": "2" });
  }
//#5
  if ($('input[id="342051"]').val() == "B ⊃ (D ⊃ J)")
  {
  $("#s342051c").css({ opacity: .7, "z-index": "2" });
  $("#s342051e").css({ opacity: .0 });
  }
  else
  {
  $("#s342051c").css({ opacity: .0 });
  $("#s342051e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342052"]').val() == "∼D ∨ J")
  {
  $("#s342052c").css({ opacity: .7, "z-index": "2" });
  $("#s342052e").css({ opacity: .0 });
  }
  else
  {
  $("#s342052c").css({ opacity: .0 });
  $("#s342052e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342053"]').val() == "∼D ∨ ∼∼J")
  {
  $("#s342053c").css({ opacity: .7, "z-index": "2" });
  $("#s342053e").css({ opacity: .0 });
  }
  else
  {
  $("#s342053c").css({ opacity: .0 });
  $("#s342053e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342054"]').val() == "∼(D • ∼J)")
  {
  $("#s342054c").css({ opacity: .7, "z-index": "2" });
  $("#s342054e").css({ opacity: .0 });
  }
  else
  {
  $("#s342054c").css({ opacity: .0 });
  $("#s342054e").css({ opacity: .7, "z-index": "2" });
  }
//#6
  if ($('input[id="342061"]').val() == "G ⊃ (E ⊃ L)")
  {
  $("#s342061c").css({ opacity: .7, "z-index": "2" });
  $("#s342061e").css({ opacity: .0 });
  }
  else
  {
  $("#s342061c").css({ opacity: .0 });
  $("#s342061e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342062"]').val() == "(G • E) ⊃ L")
  {
  $("#s342062c").css({ opacity: .7, "z-index": "2" });
  $("#s342062e").css({ opacity: .0 });
  }
  else
  {
  $("#s342062c").css({ opacity: .0 });
  $("#s342062e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342063"]').val() == "∼G ∨ ∼E")
  {
  $("#s342063c").css({ opacity: .7, "z-index": "2" });
  $("#s342063e").css({ opacity: .0 });
  }
  else
  {
  $("#s342063c").css({ opacity: .0 });
  $("#s342063e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342064"]').val() == "∼E ∨ ∼G")
  {
  $("#s342064c").css({ opacity: .7, "z-index": "2" });
  $("#s342064e").css({ opacity: .0 });
  }
  else
  {
  $("#s342064c").css({ opacity: .0 });
  $("#s342064e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342065"]').val() == "∼∼E")
  {
  $("#s342065c").css({ opacity: .7, "z-index": "2" });
  $("#s342065e").css({ opacity: .0 });
  }
  else
  {
  $("#s342065c").css({ opacity: .0 });
  $("#s342065e").css({ opacity: .7, "z-index": "2" });
  }
//#7
  if ($('input[id="342071"]').val() == "S ∨ (C • A)")
  {
  $("#s342071c").css({ opacity: .7, "z-index": "2" });
  $("#s342071e").css({ opacity: .0 });
  }
  else
  {
  $("#s342071c").css({ opacity: .0 });
  $("#s342071e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342072"]').val() == "(S ∨ C) • (S ∨ A)")
  {
  $("#s342072c").css({ opacity: .7, "z-index": "2" });
  $("#s342072e").css({ opacity: .0 });
  }
  else
  {
  $("#s342072c").css({ opacity: .0 });
  $("#s342072e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342073"]').val() == "∼∼S ∨ C")
  {
  $("#s342073c").css({ opacity: .7, "z-index": "2" });
  $("#s342073e").css({ opacity: .0 });
  }
  else
  {
  $("#s342073c").css({ opacity: .0 });
  $("#s342073e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="342074"]').val() == "∼S ⊃ C")
  {
  $("#s342074c").css({ opacity: .7, "z-index": "2" });
  $("#s342074e").css({ opacity: .0 });
  }
  else
  {
  $("#s342074c").css({ opacity: .0 });
  $("#s342074e").css({ opacity: .7, "z-index": "2" });
  }
  //#8
    if ($('input[id="342081"]').val() == "(H • B) ∨ (∼H • ∼B)")
    {
    $("#s342081c").css({ opacity: .7, "z-index": "2" });
    $("#s342081e").css({ opacity: .0 });
    }
    else
    {
    $("#s342081c").css({ opacity: .0 });
    $("#s342081e").css({ opacity: .7, "z-index": "2" });
    }
    if ($('input[id="342082"]').val() == "(R • D) ⊃ H")
    {
    $("#s342082c").css({ opacity: .7, "z-index": "2" });
    $("#s342082e").css({ opacity: .0 });
    }
    else
    {
    $("#s342082c").css({ opacity: .0 });
    $("#s342082e").css({ opacity: .7, "z-index": "2" });
    }
  document.getElementById("chan2").blur();
  window.location.replace('iLogic_3_4.html#ex342');
}

function checkanswers3()
{
//#1
  if ($('input[id="343011"]').val() == "G ∨ M")
  {
  $("#s343011c").css({ opacity: .7, "z-index": "2" });
  $("#s343011e").css({ opacity: .0 });
  }
  else
  {
  $("#s343011c").css({ opacity: .0 });
  $("#s343011e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343012"]').val() == "M")
  {
  $("#s343012c").css({ opacity: .7, "z-index": "2" });
  $("#s343012e").css({ opacity: .0 });
  }
  else
  {
  $("#s343012c").css({ opacity: .0 });
  $("#s343012e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343013"]').val() == "3, 4 DS")
  {
  $("#s343013c").css({ opacity: .7, "z-index": "2" });
  $("#s343013e").css({ opacity: .0 });
  }
  else
  {
  $("#s343013c").css({ opacity: .0 });
  $("#s343013e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343014"]').val() == "∼∼M")
  {
  $("#s343014c").css({ opacity: .7, "z-index": "2" });
  $("#s343014e").css({ opacity: .0 });
  }
  else
  {
  $("#s343014c").css({ opacity: .0 });
  $("#s343014e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343015"]').val() == "5 DN")
  {
  $("#s343015c").css({ opacity: .7, "z-index": "2" });
  $("#s343015e").css({ opacity: .0 });
  }
  else
  {
  $("#s343015c").css({ opacity: .0 });
  $("#s343015e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343016"]').val() == "1, 6 MT")
  {
  $("#s343016c").css({ opacity: .7, "z-index": "2" });
  $("#s343016e").css({ opacity: .0 });
  }
  else
  {
  $("#s343016c").css({ opacity: .0 });
  $("#s343016e").css({ opacity: .7, "z-index": "2" });
  }
//#2
  if ($('input[id="343021"]').val() == "∼H • ∼B")
  {
  $("#s343021c").css({ opacity: .7, "z-index": "2" });
  $("#s343021e").css({ opacity: .0 });
  }
  else
  {
  $("#s343021c").css({ opacity: .0 });
  $("#s343021e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343022"]').val() == "∼H")
  {
  $("#s343022c").css({ opacity: .7, "z-index": "2" });
  $("#s343022e").css({ opacity: .0 });
  }
  else
  {
  $("#s343022c").css({ opacity: .0 });
  $("#s343022e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343023"]').val() == "4 Simp.")
  {
  $("#s343023c").css({ opacity: .7, "z-index": "2" });
  $("#s343023e").css({ opacity: .0 });
  }
  else
  {
  $("#s343023c").css({ opacity: .0 });
  $("#s343023e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343024"]').val() == "∼P")
  {
  $("#s343024c").css({ opacity: .7, "z-index": "2" });
  $("#s343024e").css({ opacity: .0 });
  }
  else
  {
  $("#s343024c").css({ opacity: .0 });
  $("#s343024e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343025"]').val() == "1, 5 MP")
  {
  $("#s343025c").css({ opacity: .7, "z-index": "2" });
  $("#s343025e").css({ opacity: .0 });
  }
  else
  {
  $("#s343025c").css({ opacity: .0 });
  $("#s343025e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343026"]').val() == "3, 6 DS")
  {
  $("#s343026c").css({ opacity: .7, "z-index": "2" });
  $("#s343026e").css({ opacity: .0 });
  }
  else
  {
  $("#s343026c").css({ opacity: .0 });
  $("#s343026e").css({ opacity: .7, "z-index": "2" });
  }
//#3
  if ($('input[id="343031"]').val() == "S ∨ R")
  {
  $("#s343031c").css({ opacity: .7, "z-index": "2" });
  $("#s343031e").css({ opacity: .0 });
  }
  else
  {
  $("#s343031c").css({ opacity: .0 });
  $("#s343031e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343032"]').val() == "∼∼S ∨ R")
  {
  $("#s343032c").css({ opacity: .7, "z-index": "2" });
  $("#s343032e").css({ opacity: .0 });
  }
  else
  {
  $("#s343032c").css({ opacity: .0 });
  $("#s343032e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343033"]').val() == "∼S ⊃ R")
  {
  $("#s343033c").css({ opacity: .7, "z-index": "2" });
  $("#s343033e").css({ opacity: .0 });
  }
  else
  {
  $("#s343033c").css({ opacity: .0 });
  $("#s343033e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343034"]').val() == "6 Impl.")
  {
  $("#s343034c").css({ opacity: .7, "z-index": "2" });
  $("#s343034e").css({ opacity: .0 });
  }
  else
  {
  $("#s343034c").css({ opacity: .0 });
  $("#s343034e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343035"]').val() == "∼∼R ⊃ ∼E")
  {
  $("#s343035c").css({ opacity: .7, "z-index": "2" });
  $("#s343035e").css({ opacity: .0 });
  }
  else
  {
  $("#s343035c").css({ opacity: .0 });
  $("#s343035e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343036"]').val() == "4 Trans.")
  {
  $("#s343036c").css({ opacity: .7, "z-index": "2" });
  $("#s343036e").css({ opacity: .0 });
  }
  else
  {
  $("#s343036c").css({ opacity: .0 });
  $("#s343036e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343037"]').val() == "R ⊃ ∼E")
  {
  $("#s343037c").css({ opacity: .7, "z-index": "2" });
  $("#s343037e").css({ opacity: .0 });
  }
  else
  {
  $("#s343037c").css({ opacity: .0 });
  $("#s343037e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343038"]').val() == "8 DN")
  {
  $("#s343038c").css({ opacity: .7, "z-index": "2" });
  $("#s343038e").css({ opacity: .0 });
  }
  else
  {
  $("#s343038c").css({ opacity: .0 });
  $("#s343038e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343039"]').val() == "7, 9 HS")
  {
  $("#s343039c").css({ opacity: .7, "z-index": "2" });
  $("#s343039e").css({ opacity: .0 });
  }
  else
  {
  $("#s343039c").css({ opacity: .0 });
  $("#s343039e").css({ opacity: .7, "z-index": "2" });
  }
//#4
  if ($('input[id="343041"]').val() == "2, 3 Conj.")
  {
  $("#s343041c").css({ opacity: .7, "z-index": "2" });
  $("#s343041e").css({ opacity: .0 });
  }
  else
  {
  $("#s343041c").css({ opacity: .0 });
  $("#s343041e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343042"]').val() == "∼∼J • ∼K")
  {
  $("#s343042c").css({ opacity: .7, "z-index": "2" });
  $("#s343042e").css({ opacity: .0 });
  }
  else
  {
  $("#s343042c").css({ opacity: .0 });
  $("#s343042e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343043"]').val() == "∼(∼J ∨ K)")
  {
  $("#s343043c").css({ opacity: .7, "z-index": "2" });
  $("#s343043e").css({ opacity: .0 });
  }
  else
  {
  $("#s343043c").css({ opacity: .0 });
  $("#s343043e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343044"]').val() == "5 DM")
  {
  $("#s343044c").css({ opacity: .7, "z-index": "2" });
  $("#s343044e").css({ opacity: .0 });
  }
  else
  {
  $("#s343044c").css({ opacity: .0 });
  $("#s343044e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343045"]').val() == "∼(J ⊃ K)")
  {
  $("#s343045c").css({ opacity: .7, "z-index": "2" });
  $("#s343045e").css({ opacity: .0 });
  }
  else
  {
  $("#s343045c").css({ opacity: .0 });
  $("#s343045e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343046"]').val() == "6 Impl.")
  {
  $("#s343046c").css({ opacity: .7, "z-index": "2" });
  $("#s343046e").css({ opacity: .0 });
  }
  else
  {
  $("#s343046c").css({ opacity: .0 });
  $("#s343046e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343047"]').val() == "1, 7 DS")
  {
  $("#s343047c").css({ opacity: .7, "z-index": "2" });
  $("#s343047e").css({ opacity: .0 });
  }
//#5
  if ($('input[id="343051"]').val() == "(B ⊃ D) • (D ⊃ B)")
  {
  $("#s343051c").css({ opacity: .7, "z-index": "2" });
  $("#s343051e").css({ opacity: .0 });
  }
  else
  {
  $("#s343051c").css({ opacity: .0 });
  $("#s343051e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343052"]').val() == "1 Equiv.")
  {
  $("#s343052c").css({ opacity: .7, "z-index": "2" });
  $("#s343052e").css({ opacity: .0 });
  }
  else
  {
  $("#s343052c").css({ opacity: .0 });
  $("#s343052e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343053"]').val() == "B ⊃ D")
  {
  $("#s343053c").css({ opacity: .7, "z-index": "2" });
  $("#s343053e").css({ opacity: .0 });
  }
  else
  {
  $("#s343053c").css({ opacity: .0 });
  $("#s343053e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343054"]').val() == "(D ⊃ G) • (G ⊃ D)")
  {
  $("#s343054c").css({ opacity: .7, "z-index": "2" });
  $("#s343054e").css({ opacity: .0 });
  }
  else
  {
  $("#s343054c").css({ opacity: .0 });
  $("#s343054e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343055"]').val() == "2 Equiv.")
  {
  $("#s343055c").css({ opacity: .7, "z-index": "2" });
  $("#s343055e").css({ opacity: .0 });
  }
  else
  {
  $("#s343055c").css({ opacity: .0 });
  $("#s343055e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343056"]').val() == "D ⊃ G")
  {
  $("#s343056c").css({ opacity: .7, "z-index": "2" });
  $("#s343056e").css({ opacity: .0 });
  }
  else
  {
  $("#s343056c").css({ opacity: .0 });
  $("#s343056e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343057"]').val() == "6 Simp.")
  {
  $("#s343057c").css({ opacity: .7, "z-index": "2" });
  $("#s343057e").css({ opacity: .0 });
  }
  else
  {
  $("#s343057c").css({ opacity: .0 });
  $("#s343057e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343058"]').val() == "B ⊃ G")
  {
  $("#s343058c").css({ opacity: .7, "z-index": "2" });
  $("#s343058e").css({ opacity: .0 });
  }
  else
  {
  $("#s343058c").css({ opacity: .0 });
  $("#s343058e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343059"]').val() == "5, 7 HS")
  {
  $("#s343059c").css({ opacity: .7, "z-index": "2" });
  $("#s343059e").css({ opacity: .0 });
  }
  else
  {
  $("#s343059c").css({ opacity: .0 });
  $("#s343059e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="3430510"]').val() == "3, 8 MT")
  {
  $("#s3430510c").css({ opacity: .7, "z-index": "2" });
  $("#s3430510e").css({ opacity: .0 });
  }
  else
  {
  $("#s3430510c").css({ opacity: .0 });
  $("#s3430510e").css({ opacity: .7, "z-index": "2" });
  }
//#6
  if ($('input[id="343061"]').val() == "W ⊃ (N ⊃ S)")
  {
  $("#s343061c").css({ opacity: .7, "z-index": "2" });
  $("#s343061e").css({ opacity: .0 });
  }
  else
  {
  $("#s343061c").css({ opacity: .0 });
  $("#s343061e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343062"]').val() == "1 Exp.")
  {
  $("#s343062c").css({ opacity: .7, "z-index": "2" });
  $("#s343062e").css({ opacity: .0 });
  }
  else
  {
  $("#s343062c").css({ opacity: .0 });
  $("#s343062e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343063"]').val() == "N ⊃ S")
  {
  $("#s343063c").css({ opacity: .7, "z-index": "2" });
  $("#s343063e").css({ opacity: .0 });
  }
  else
  {
  $("#s343063c").css({ opacity: .0 });
  $("#s343063e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343064"]').val() == "3, 4 MP")
  {
  $("#s343064c").css({ opacity: .7, "z-index": "2" });
  $("#s343064e").css({ opacity: .0 });
  }
  else
  {
  $("#s343064c").css({ opacity: .0 });
  $("#s343064e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343065"]').val() == "S ⊃ P")
  {
  $("#s343065c").css({ opacity: .7, "z-index": "2" });
  $("#s343065e").css({ opacity: .0 });
  }
  else
  {
  $("#s343065c").css({ opacity: .0 });
  $("#s343065e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343066"]').val() == "6 Impl.")
  {
  $("#s343066c").css({ opacity: .7, "z-index": "2" });
  $("#s343066e").css({ opacity: .0 });
  }
  else
  {
  $("#s343066c").css({ opacity: .0 });
  $("#s343066e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343067"]').val() == "5, 7 HS")
  {
  $("#s343067c").css({ opacity: .7, "z-index": "2" });
  $("#s343067e").css({ opacity: .0 });
  }
  else
  {
  $("#s343067c").css({ opacity: .0 });
  $("#s343067e").css({ opacity: .7, "z-index": "2" });
  }
//#7
  if ($('input[id="343071"]').val() == "(R ∨ H) • (R ∨ M)")
  {
  $("#s343071c").css({ opacity: .7, "z-index": "2" });
  $("#s343071e").css({ opacity: .0 });
  }
  else if ($('input[id="343071"]').val() == "∼H ∨ ∼M")
  {
  $("#s343071c").css({ opacity: .7, "z-index": "2" });
  $("#s343071e").css({ opacity: .0 });
  }
  else
  {
  $("#s343071c").css({ opacity: .0 });
  $("#s343071e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343071"]').val() == "(R ∨ H) • (R ∨ M)" &&
  $('input[id="343072"]').val() == "1 Dist.")
  {
  $("#s343072c").css({ opacity: .7, "z-index": "2" });
  $("#s343072e").css({ opacity: .0 });
  }
  else if ($('input[id="343071"]').val() == "∼H ∨ ∼M" &&
  $('input[id="343072"]').val() == "3 Add.")
  {
  $("#s343072c").css({ opacity: .7, "z-index": "2" });
  $("#s343072e").css({ opacity: .0 });
  }
  else
  {
  $("#s343072c").css({ opacity: .0 });
  $("#s343072e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343073"]').val() == "R ∨ H")
  {
  $("#s343073c").css({ opacity: .7, "z-index": "2" });
  $("#s343073e").css({ opacity: .0 });
  }
  else if ($('input[id="343073"]').val() == "∼(H • M)")
  {
  $("#s343073c").css({ opacity: .7, "z-index": "2" });
  $("#s343073e").css({ opacity: .0 });
  }
  else
  {
  $("#s343073c").css({ opacity: .0 });
  $("#s343073e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343073"]').val() == "R ∨ H" && $('input[id="343074"]').val()
  == "4 Simp.")
  {
  $("#s343074c").css({ opacity: .7, "z-index": "2" });
  $("#s343074e").css({ opacity: .0 });
  }
  else if ($('input[id="343073"]').val() == "∼(H • M)" &&
  $('input[id="343074"]').val() == "4 DM")
  {
  $("#s343074c").css({ opacity: .7, "z-index": "2" });
  $("#s343074e").css({ opacity: .0 });
  }
  else
  {
  $("#s343074c").css({ opacity: .0 });
  $("#s343074e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343075"]').val() == "H ∨ R")
  {
  $("#s343075c").css({ opacity: .7, "z-index": "2" });
  $("#s343075e").css({ opacity: .0 });
  }
  else if ($('input[id="343075"]').val() == "(H • M) ∨ R")
  {
  $("#s343075c").css({ opacity: .7, "z-index": "2" });
  $("#s343075e").css({ opacity: .0 });
  }
  else
  {
  $("#s343075c").css({ opacity: .0 });
  $("#s343075e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343075"]').val() == "H ∨ R" && $('input[id="343076"]').val()
  == "5 Com.")
  {
  $("#s343076c").css({ opacity: .7, "z-index": "2" });
  $("#s343076e").css({ opacity: .0 });
  }
  else if ($('input[id="343075"]').val() == "(H • M) ∨ R" &&
  $('input[id="343076"]').val() == "1 Com.")
  {
  $("#s343076c").css({ opacity: .7, "z-index": "2" });
  $("#s343076e").css({ opacity: .0 });
  }
  else
  {
  $("#s343076c").css({ opacity: .0 });
  $("#s343076e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343077"]').val() == "R")
  {
  $("#s343077c").css({ opacity: .7, "z-index": "2" });
  $("#s343077e").css({ opacity: .0 });
  }
  else
  {
  $("#s343077c").css({ opacity: .0 });
  $("#s343077e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343078"]').val() == "3, 6 DS" ||
  $('input[id="343078"]').val() == "5, 6 DS")
  {
  $("#s343078c").css({ opacity: .7, "z-index": "2" });
  $("#s343078e").css({ opacity: .0 });
  }
  else
  {
  $("#s343078c").css({ opacity: .0 });
  $("#s343078e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343079"]').val() == "R ⊃ G")
  {
  $("#s343079c").css({ opacity: .7, "z-index": "2" });
  $("#s343079e").css({ opacity: .0 });
  }
  else
  {
  $("#s343079c").css({ opacity: .0 });
  $("#s343079e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="3430710"]').val() == "2 Trans.")
  {
  $("#s3430710c").css({ opacity: .7, "z-index": "2" });
  $("#s3430710e").css({ opacity: .0 });
  }
  else
  {
  $("#s3430710c").css({ opacity: .0 });
  $("#s3430710e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="3430711"]').val() == "7, 8 MP")
  {
  $("#s3430711c").css({ opacity: .7, "z-index": "2" });
  $("#s3430711e").css({ opacity: .0 });
  }
  else
  {
  $("#s3430711c").css({ opacity: .0 });
  $("#s3430711e").css({ opacity: .7, "z-index": "2" });
  }
//#8
  if ($('input[id="343081"]').val() == "(A • C) ⊃ L")
  {
  $("#s343081c").css({ opacity: .7, "z-index": "2" });
  $("#s343081e").css({ opacity: .0 });
  }
  else
  {
  $("#s343081c").css({ opacity: .0 });
  $("#s343081e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343082"]').val() == "1 Impl.")
  {
  $("#s343082c").css({ opacity: .7, "z-index": "2" });
  $("#s343082e").css({ opacity: .0 });
  }
  else
  {
  $("#s343082c").css({ opacity: .0 });
  $("#s343082e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343083"]').val() == "A ⊃ (C ⊃ L)")
  {
  $("#s343083c").css({ opacity: .7, "z-index": "2" });
  $("#s343083e").css({ opacity: .0 });
  }
  else
  {
  $("#s343083c").css({ opacity: .0 });
  $("#s343083e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343084"]').val() == "3 Exp.")
  {
  $("#s343084c").css({ opacity: .7, "z-index": "2" });
  $("#s343084e").css({ opacity: .0 });
  }
  else
  {
  $("#s343084c").css({ opacity: .0 });
  $("#s343084e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343085"]').val() == "2, 4 MT")
  {
  $("#s343085c").css({ opacity: .7, "z-index": "2" });
  $("#s343085e").css({ opacity: .0 });
  }
  else
  {
  $("#s343085c").css({ opacity: .0 });
  $("#s343085e").css({ opacity: .7, "z-index": "2" });
  }
//#9
  if ($('input[id="343091"]').val() == "(∼A ∨ ∼C) ∨ L")
  {
  $("#s343091c").css({ opacity: .7, "z-index": "2" });
  $("#s343091e").css({ opacity: .0 });
  }
  else
  {
  $("#s343091c").css({ opacity: .0 });
  $("#s343091e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343092"]').val() == "1 DM")
  {
  $("#s343092c").css({ opacity: .7, "z-index": "2" });
  $("#s343092e").css({ opacity: .0 });
  }
  else
  {
  $("#s343092c").css({ opacity: .0 });
  $("#s343092e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343093"]').val() == "∼A ∨ (∼C ∨ L)")
  {
  $("#s343093c").css({ opacity: .7, "z-index": "2" });
  $("#s343093e").css({ opacity: .0 });
  }
  else
  {
  $("#s343093c").css({ opacity: .0 });
  $("#s343093e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343094"]').val() == "3 Assoc.")
  {
  $("#s343094c").css({ opacity: .7, "z-index": "2" });
  $("#s343094e").css({ opacity: .0 });
  }
  else
  {
  $("#s343094c").css({ opacity: .0 });
  $("#s343094e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343095"]').val() == "∼A ∨ (C ⊃ L)" ||
      $('input[id="343095"]').val() == "A ⊃ (∼C ∨ L)")
  {
  $("#s343095c").css({ opacity: .7, "z-index": "2" });
  $("#s343095e").css({ opacity: .0 });
  }
  else
  {
  $("#s343095c").css({ opacity: .0 });
  $("#s343095e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343096"]').val() == "4 Impl.")
  {
  $("#s343096c").css({ opacity: .7, "z-index": "2" });
  $("#s343096e").css({ opacity: .0 });
  }
  else
  {
  $("#s343096c").css({ opacity: .0 });
  $("#s343096e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343097"]').val() == "A ⊃ (C ⊃ L)")
  {
  $("#s343097c").css({ opacity: .7, "z-index": "2" });
  $("#s343097e").css({ opacity: .0 });
  }
  else
  {
  $("#s343097c").css({ opacity: .0 });
  $("#s343097e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343098"]').val() == "5 Impl.")
  {
  $("#s343098c").css({ opacity: .7, "z-index": "2" });
  $("#s343098e").css({ opacity: .0 });
  }
  else
  {
  $("#s343098c").css({ opacity: .0 });
  $("#s343098e").css({ opacity: .7, "z-index": "2" });
  }
  if ($('input[id="343099"]').val() == "2, 6 MT")
  {
  $("#s343099c").css({ opacity: .7, "z-index": "2" });
  $("#s343099e").css({ opacity: .0 });
  }
  else
  {
  $("#s343099c").css({ opacity: .0 });
  $("#s343099e").css({ opacity: .7, "z-index": "2" });
  }

  document.getElementById("chan3").blur();
  window.location.replace('iLogic_3_4.html#ex343');
}