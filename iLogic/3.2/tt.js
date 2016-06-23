$(function () {
    $.autotab({ tabOnSelect: true });
    $('.number').autotab('filter', 'number');
    $('.tv').autotab('filter', 'tv');
    $('.alpha').autotab('filter', 'alpha');
    $('.alphanumeric').autotab('filter', { format: 'alphanumeric', uppercase: true });
    $('#regex').autotab('filter', { format: 'custom', pattern: '[^0-9\.]', maxlength: 15 });
    $('#function').autotab('filter', function (value, element) {
        var parsedValue = parseInt(value, 10);

        if (!value || parsedValue != value) {
            return '';
        }

        var newValue = element.value + value;

        if (newValue > 12) {
            $.autotab.next();
            return 2;
        }
        else if (element.value.length == 0 && value > 1) {
            $.autotab.next();
            return value;
        }
        else if (element.value.length == 1 && parsedValue === 0 && newValue != 10) {
            $.autotab.next();
            return 1;
        }

        return value;
    });
    $('.hexadecimal').autotab('filter', 'hexadecimal');
    $('.ip').autotab('filter', { format: 'number', trigger: '.' });
    $('.pin').autotab('filter', 'number');

    $('#remove-autotab').on('click', function () {
        $.autotab.remove();
        $('#autotab-status span').removeClass('on').addClass('off').text('Off');
    });

    $('#restore-autotab').on('click', function () {
        $.autotab.restore();
        $('#autotab-status span').removeClass('off').addClass('on').text('On');
    });

    $('.remove-example').on('click', function () {
        $(this).parent().remove();
        $.autotab.refresh();
    });
});

// Section 2 #1
function b01b1()
{
  if ($("#201b1").css("visibility") == "hidden")
  {
    $("#201b1").css("visibility","visible");
    $("#201b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#201b1").css("visibility","hidden");
    $("#201b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b01b2()
{
  if ($("#201b2").css("visibility") == "hidden")
  {
    $("#201b2").css("visibility","visible");
    $("#201b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#201b2").css("visibility","hidden");
    $("#201b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer21()
{
  var bn = 0;
  var tn = 0;
  if ($('input[id="tv20101"]').val() !== "f" && $('input[id="tv20101"]').val() !== "F")
  {
    $('input[id="tv20101"]').css({ opacity: .5 });
    $("#tv20101e").css("visibility","visible");
  	$("#tv20101e").css({ opacity: 0.5, "z-index": "-2" });
    $("#201ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20101"]').css({ opacity: 1 });
    $("#tv20101e").css("visibility","hidden");
  }
  if ($('input[id="tv20102"]').val() !== "t" && $('input[id="tv20102"]').val() !== "T")
  {
    // alert($('input[id="tv2"]').val());
    $('input[id="tv20102"]').css({ opacity: .5 });
    $("#tv20102e").css("visibility","visible");
  	$("#tv20102e").css({ opacity: 0.5, "z-index": "-2" });
    $("#201ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20102"]').css({ opacity: 1 });
    $("#tv20102e").css("visibility","hidden");
  }
  if ($('input[id="tv20103"]').val() !== "t" && $('input[id="tv20103"]').val() !== "T")
  {
    // alert($('input[id="tv3"]').val());
    $('input[id="tv20103"]').css({ opacity: .5 });
    $("#tv20103e").css("visibility","visible");
  	$("#tv20103e").css({ opacity: 0.5, "z-index": "-2" });
    $("#201ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20103"]').css({ opacity: 1 });
    $("#tv20103e").css("visibility","hidden");
  }
  if ($('input[id="tv20104"]').val() !== "f" && $('input[id="tv20104"]').val() !== "F")
    {
    $('input[id="tv20104"]').css({ opacity: .5 });
    $("#tv20104e").css("visibility","visible");
  	$("#tv20104e").css({ opacity: 0.5, "z-index": "-2" });
    $("#201ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20104"]').css({ opacity: 1 });
    $("#tv20104e").css("visibility","hidden");
  }
  if ($("#201b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#201b2").css("visibility") == "visible")
  {
    bn = bn + 2;
  }
  if (bn == 0)
  {
    $("#201mb").css("visibility","visible");
    $("#201mb").css({ opacity: 0.7 });
    $("#201wb").css("visibility","hidden");
    $("#201ct").css("visibility","hidden");
  } else if (bn != 0 && bn != 2)
  {
    $("#201wb").css("visibility","visible");
    $("#201wb").css({ opacity: 0.7 });
    $("#201mb").css("visibility","hidden");
    $("#201ct").css("visibility","hidden");
  }
  if (bn == 2)
  {
    $("#201mb").css("visibility","hidden");
    $("#201wb").css("visibility","hidden");
    if (tn == 4)
    {
    $("#201ct").css("visibility","visible");
    $("#201ct").css({ opacity: 0.7 })
    }
  }
  if ($('input[name="p1"]:checked').val() == "T")
  {
    // alert($('input[name="p1"]:checked').val());
    $('input[name="p1"]').css({ opacity: .5 });
    $("#201te").css("visibility","visible");
    $("#201te").css({ opacity: 0.5 });
    $("#201se").css("visibility","hidden");
    $("#201ce").css("visibility","hidden");
    $("#201cc").css("visibility","hidden");
    $("#201wp").css("visibility","hidden");
  } else if ($('input[name="p1"]:checked').val() == "S")
  {
    // alert($('input[name="p1"]:checked').val());
    $('input[name="p1"]').css({ opacity: .5 });
    $("#201te").css("visibility","hidden");
    $("#201se").css("visibility","visible");
    $("#201se").css({ opacity: 0.5 });
    $("#201ce").css("visibility","hidden");
    $("#201cc").css("visibility","hidden");
    $("#201wp").css("visibility","hidden");
  } else if ($('input[name="p1"]:checked').val() == "C")
  {
    $('input[name="p1"]').css({ opacity: .5 });
    $("#201te").css("visibility","hidden");
    $("#201se").css("visibility","hidden");
    $("#201ce").css("visibility","hidden");
    $("#201cc").css("visibility","visible");
    $("#201cc").css({ opacity: 0.5 });
    $("#201wp").css("visibility","hidden");
  } else
  {
  // alert($('input[name="p1"]:checked').val());
    $('input[name="p1"]').css({ opacity: .5 });
    $("#201wp").css("visibility","visible");
    $("#201wp").css({ opacity: 0.7 });
  }
}
// Section 2 #2
function b02b1()
{
  if ($("#202b1").css("visibility") == "hidden")
  {
    $("#202b1").css("visibility","visible");
    $("#202b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#202b1").css("visibility","hidden");
    $("#202b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b02b2()
{
  if ($("#202b2").css("visibility") == "hidden")
  {
    $("#202b2").css("visibility","visible");
    $("#202b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#202b2").css("visibility","hidden");
    $("#202b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b02b3()
{
  if ($("#202b3").css("visibility") == "hidden")
  {
    $("#202b3").css("visibility","visible");
    $("#202b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#202b3").css("visibility","hidden");
    $("#202b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer22()
{
  var bn = 0;
  var tn = 0;
  if ($('input[id="tv20201"]').val() !== "f" && $('input[id="tv20201"]').val() !== "F")
  {
    $('input[id="tv20201"]').css({ opacity: .5 });
    $("#tv20201e").css("visibility","visible");
  	$("#tv20201e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20201"]').css({ opacity: 1 });
    $("#tv20201e").css("visibility","hidden");
  }
  if ($('input[id="tv20202"]').val() !== "t" && $('input[id="tv20202"]').val() !== "T")
  {
    $('input[id="tv20202"]').css({ opacity: .5 });
    $("#tv20202e").css("visibility","visible");
  	$("#tv20202e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20202"]').css({ opacity: 1 });
    $("#tv20202e").css("visibility","hidden");
  }
  if ($('input[id="tv20203"]').val() !== "f" && $('input[id="tv20203"]').val() !== "F")
  {
    $('input[id="tv20203"]').css({ opacity: .5 });
    $("#tv20203e").css("visibility","visible");
  	$("#tv20203e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20203"]').css({ opacity: 1 });
    $("#tv20203e").css("visibility","hidden");
  }
  if ($('input[id="tv20204"]').val() !== "t" && $('input[id="tv20204"]').val() !== "T")
    {
    $('input[id="tv20204"]').css({ opacity: .5 });
    $("#tv20204e").css("visibility","visible");
  	$("#tv20204e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20204"]').css({ opacity: 1 });
    $("#tv20204e").css("visibility","hidden");
  }
  if ($('input[id="tv20205"]').val() !== "t" && $('input[id="tv20205"]').val() !== "T")
  {
    $('input[id="tv20205"]').css({ opacity: .5 });
    $("#tv20205e").css("visibility","visible");
  	$("#tv20205e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20205"]').css({ opacity: 1 });
    $("#tv20205e").css("visibility","hidden");
  }
  if ($('input[id="tv20206"]').val() !== "t" && $('input[id="tv20206"]').val() !== "T")
  {
    $('input[id="tv20206"]').css({ opacity: .5 });
    $("#tv20206e").css("visibility","visible");
  	$("#tv20206e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20206"]').css({ opacity: 1 });
    $("#tv20206e").css("visibility","hidden");
  }
  if ($('input[id="tv20207"]').val() !== "t" && $('input[id="tv20207"]').val() !== "T")
  {
    $('input[id="tv20207"]').css({ opacity: .5 });
    $("#tv20207e").css("visibility","visible");
  	$("#tv20207e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20207"]').css({ opacity: 1 });
    $("#tv20207e").css("visibility","hidden");
  }
  if ($('input[id="tv20208"]').val() !== "t" && $('input[id="tv20208"]').val() !== "T")
  {
    $('input[id="tv20208"]').css({ opacity: .5 });
    $("#tv20208e").css("visibility","visible");
  	$("#tv20208e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20208"]').css({ opacity: 1 });
    $("#tv20208e").css("visibility","hidden");
  }
  if ($('input[id="tv20209"]').val() !== "t" && $('input[id="tv20209"]').val() !== "T")
  {
    $('input[id="tv20209"]').css({ opacity: .5 });
    $("#tv20209e").css("visibility","visible");
  	$("#tv20209e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20209"]').css({ opacity: 1 });
    $("#tv20209e").css("visibility","hidden");
  }
  if ($('input[id="tv20210"]').val() !== "t" && $('input[id="tv20210"]').val() !== "T")
  {
    $('input[id="tv20210"]').css({ opacity: .5 });
    $("#tv20210e").css("visibility","visible");
  	$("#tv20210e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20210"]').css({ opacity: 1 });
    $("#tv20210e").css("visibility","hidden");
  }
  if ($('input[id="tv20211"]').val() !== "t" && $('input[id="tv20211"]').val() !== "T")
  {
    $('input[id="tv20211"]').css({ opacity: .5 });
    $("#tv20211e").css("visibility","visible");
  	$("#tv20211e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20211"]').css({ opacity: 1 });
    $("#tv20211e").css("visibility","hidden");
  }
  if ($('input[id="tv20212"]').val() !== "t" && $('input[id="tv20212"]').val() !== "T")
  {
    $('input[id="tv20212"]').css({ opacity: .5 });
    $("#tv20212e").css("visibility","visible");
  	$("#tv20212e").css({ opacity: 0.5, "z-index": "-2" });
    $("#202ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20212"]').css({ opacity: 1 });
    $("#tv20212e").css("visibility","hidden");
  }
  if ($("#202b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#202b2").css("visibility") == "visible")
  {
    bn = bn + 2;
  }
  if ($("#202b3").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if (bn == 0)
  {
    $("#202mb").css("visibility","visible");
    $("#202mb").css({ opacity: 0.7 });
    $("#202wb").css("visibility","hidden");
    $("#202ct").css("visibility","hidden");
  } else if (bn == 1)
  {
    $("#202mb").css("visibility","hidden");
    $("#202wb").css("visibility","hidden");
      if (tn == 12)
      {
      $("#202ct").css("visibility","visible");
      $("#202ct").css({ opacity: 0.7 });
      }
  } else
  {
    // alert(bn);
    $("#202wb").css("visibility","visible");
    $("#202wb").css({ opacity: 0.7 });
    $("#202mb").css("visibility","hidden");
    $("#202ct").css("visibility","hidden");
  }
  if ($('input[name="p2"]:checked').val() == "T")
  {
    $('input[name="p2"]').css({ opacity: .5 });
    $("#202tc").css("visibility","visible");
    $("#202tc").css({ opacity: 0.5 });
    $("#202te").css("visibility","hidden");
    $("#202sc").css("visibility","hidden");
    $("#202se").css("visibility","hidden");
    $("#202ce").css("visibility","hidden");
    $("#202cc").css("visibility","hidden");
    $("#202wp").css("visibility","hidden");
  } else if ($('input[name="p2"]:checked').val() == "S")
  {
    $('input[name="p2"]').css({ opacity: .5 });
    $("#202tc").css("visibility","hidden");
    $("#202te").css("visibility","hidden");
    $("#202sc").css("visibility","hidden");
    $("#202se").css("visibility","visible");
    $("#202se").css({ opacity: 0.5 });
    $("#202ce").css("visibility","hidden");
    $("#202cc").css("visibility","hidden");
    $("#202wp").css("visibility","hidden");
  } else if ($('input[name="p2"]:checked').val() == "C")
  {
    $('input[name="p2"]').css({ opacity: .5 });
    $("#202tc").css("visibility","hidden");
    $("#202te").css("visibility","hidden");
    $("#202sc").css("visibility","hidden");
    $("#202se").css("visibility","hidden");
    $("#202cc").css("visibility","hidden");
    $("#202ce").css("visibility","visible");
    $("#202ce").css({ opacity: 0.5 });
    $("#202wp").css("visibility","hidden");
  } else
  {
    $('input[name="p2"]').css({ opacity: .5 });
    $("#202wp").css("visibility","visible");
    $("#202wp").css({ opacity: 0.7 });
  }
}
// Section 2 #3
function b03b1()
{
  if ($("#203b1").css("visibility") == "hidden")
  {
    $("#203b1").css("visibility","visible");
    $("#203b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#203b1").css("visibility","hidden");
    $("#203b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b03b2()
{
  if ($("#203b2").css("visibility") == "hidden")
  {
    $("#203b2").css("visibility","visible");
    $("#203b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#203b2").css("visibility","hidden");
    $("#203b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b03b3()
{
  if ($("#203b3").css("visibility") == "hidden")
  {
    $("#203b3").css("visibility","visible");
    $("#203b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#203b3").css("visibility","hidden");
    $("#203b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b03b4()
{
  if ($("#203b4").css("visibility") == "hidden")
  {
    $("#203b4").css("visibility","visible");
    $("#203b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#203b4").css("visibility","hidden");
    $("#203b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer23()
{
  var bn = 0;
  var tn = 0;
  if ($('input[id="tv20301"]').val() !== "f" && $('input[id="tv20301"]').val() !== "F")
  {
    $('input[id="tv20301"]').css({ opacity: .5 });
    $("#tv20301e").css("visibility","visible");
  	$("#tv20301e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20301"]').css({ opacity: 1 });
    $("#tv20301e").css("visibility","hidden");
  }
  if ($('input[id="tv20302"]').val() !== "t" && $('input[id="tv20302"]').val() !== "T")
  {
    $('input[id="tv20302"]').css({ opacity: .5 });
    $("#tv20302e").css("visibility","visible");
  	$("#tv20302e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20302"]').css({ opacity: 1 });
    $("#tv20302e").css("visibility","hidden");
  }
  if ($('input[id="tv20303"]').val() !== "f" && $('input[id="tv20303"]').val() !== "F")
  {
    $('input[id="tv20303"]').css({ opacity: .5 });
    $("#tv20303e").css("visibility","visible");
  	$("#tv20303e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20303"]').css({ opacity: 1 });
    $("#tv20303e").css("visibility","hidden");
  }
  if ($('input[id="tv20304"]').val() !== "t" && $('input[id="tv20304"]').val() !== "T")
    {
    $('input[id="tv20304"]').css({ opacity: .5 });
    $("#tv20304e").css("visibility","visible");
  	$("#tv20304e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20304"]').css({ opacity: 1 });
    $("#tv20304e").css("visibility","hidden");
  }
  if ($('input[id="tv20305"]').val() !== "f" && $('input[id="tv20305"]').val() !== "F")
  {
    $('input[id="tv20305"]').css({ opacity: .5 });
    $("#tv20305e").css("visibility","visible");
  	$("#tv20305e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20305"]').css({ opacity: 1 });
    $("#tv20305e").css("visibility","hidden");
  }
  if ($('input[id="tv20306"]').val() !== "f" && $('input[id="tv20306"]').val() !== "F")
  {
    $('input[id="tv20306"]').css({ opacity: .5 });
    $("#tv20306e").css("visibility","visible");
  	$("#tv20306e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20306"]').css({ opacity: 1 });
    $("#tv20306e").css("visibility","hidden");
  }
  if ($('input[id="tv20307"]').val() !== "t" && $('input[id="tv20307"]').val() !== "T")
  {
    $('input[id="tv20307"]').css({ opacity: .5 });
    $("#tv20307e").css("visibility","visible");
  	$("#tv20307e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20307"]').css({ opacity: 1 });
    $("#tv20307e").css("visibility","hidden");
  }
  if ($('input[id="tv20308"]').val() !== "t" && $('input[id="tv20308"]').val() !== "T")
  {
    $('input[id="tv20308"]').css({ opacity: .5 });
    $("#tv20308e").css("visibility","visible");
  	$("#tv20308e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20308"]').css({ opacity: 1 });
    $("#tv20308e").css("visibility","hidden");
  }
  if ($('input[id="tv20309"]').val() !== "f" && $('input[id="tv20309"]').val() !== "F")
  {
    $('input[id="tv20309"]').css({ opacity: .5 });
    $("#tv20309e").css("visibility","visible");
  	$("#tv20309e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20309"]').css({ opacity: 1 });
    $("#tv20309e").css("visibility","hidden");
  }
  if ($('input[id="tv20310"]').val() !== "t" && $('input[id="tv20310"]').val() !== "T")
  {
    $('input[id="tv20310"]').css({ opacity: .5 });
    $("#tv20310e").css("visibility","visible");
  	$("#tv20310e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20310"]').css({ opacity: 1 });
    $("#tv20310e").css("visibility","hidden");
  }
  if ($('input[id="tv20311"]').val() !== "t" && $('input[id="tv20311"]').val() !== "T")
  {
    $('input[id="tv20311"]').css({ opacity: .5 });
    $("#tv20311e").css("visibility","visible");
  	$("#tv20311e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20311"]').css({ opacity: 1 });
    $("#tv20311e").css("visibility","hidden");
  }
  if ($('input[id="tv20312"]').val() !== "t" && $('input[id="tv20312"]').val() !== "T")
  {
    $('input[id="tv20312"]').css({ opacity: .5 });
    $("#tv20312e").css("visibility","visible");
  	$("#tv20312e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20312"]').css({ opacity: 1 });
    $("#tv20312e").css("visibility","hidden");
  }
  if ($('input[id="tv20313"]').val() !== "f" && $('input[id="tv20313"]').val() !== "F")
  {
    $('input[id="tv20313"]').css({ opacity: .5 });
    $("#tv20313e").css("visibility","visible");
  	$("#tv20313e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20313"]').css({ opacity: 1 });
    $("#tv20313e").css("visibility","hidden");
  }
  if ($('input[id="tv20314"]').val() !== "t" && $('input[id="tv20314"]').val() !== "T")
  {
    $('input[id="tv20314"]').css({ opacity: .5 });
    $("#tv20314e").css("visibility","visible");
  	$("#tv20314e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20314"]').css({ opacity: 1 });
    $("#tv20314e").css("visibility","hidden");
  }
  if ($('input[id="tv20315"]').val() !== "f" && $('input[id="tv20315"]').val() !== "F")
  {
    $('input[id="tv20315"]').css({ opacity: .5 });
    $("#tv20315e").css("visibility","visible");
  	$("#tv20315e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20315"]').css({ opacity: 1 });
    $("#tv20315e").css("visibility","hidden");
  }
  if ($('input[id="tv20316"]').val() !== "f" && $('input[id="tv20316"]').val() !== "F")
  {
    $('input[id="tv20316"]').css({ opacity: .5 });
    $("#tv20316e").css("visibility","visible");
  	$("#tv20316e").css({ opacity: 0.5, "z-index": "-2" });
    $("#203ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20316"]').css({ opacity: 1 });
    $("#tv20316e").css("visibility","hidden");
  }
  if ($("#203b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#203b2").css("visibility") == "visible")
  {
    bn = bn + 2;
  }
  if ($("#203b3").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#203b4").css("visibility") == "visible")
  {
    bn = bn + 4;
  }
  if (bn == 0)
  {
    $("#203mb").css("visibility","visible");
    $("#203mb").css({ opacity: 0.7 });
    $("#203wb").css("visibility","hidden");
    $("#203ct").css("visibility","hidden");
  } else if (bn == 1)
  {
    $("#203mb").css("visibility","hidden");
    $("#203wb").css("visibility","hidden");
      if (tn == 16)
      {
      $("#203ct").css("visibility","visible");
      $("#203ct").css({ opacity: 0.7 });
      }
  } else
  {
    // alert(bn);
    $("#203wb").css("visibility","visible");
    $("#203wb").css({ opacity: 0.7 });
    $("#203mb").css("visibility","hidden");
    $("#203ct").css("visibility","hidden");
  }
  if ($('input[name="p3"]:checked').val() == "T")
  {
    $('input[name="p3"]').css({ opacity: .5 });
    $("#203tc").css("visibility","hidden");
    $("#203te").css("visibility","visible");
    $("#203te").css({ opacity: 0.5 });
    $("#203sc").css("visibility","hidden");
    $("#203se").css("visibility","hidden");
    $("#203ce").css("visibility","hidden");
    $("#203cc").css("visibility","hidden");
    $("#203wp").css("visibility","hidden");
  } else if ($('input[name="p3"]:checked').val() == "S")
  {
    $('input[name="p3"]').css({ opacity: .5 });
    $("#203tc").css("visibility","hidden");
    $("#203te").css("visibility","hidden");
    $("#203sc").css("visibility","hidden");
    $("#203se").css("visibility","visible");
    $("#203se").css({ opacity: 0.5 });
    $("#203ce").css("visibility","hidden");
    $("#203cc").css("visibility","hidden");
    $("#203wp").css("visibility","hidden");
  } else if ($('input[name="p3"]:checked').val() == "C")
  {
    $('input[name="p3"]').css({ opacity: .5 });
    $("#203tc").css("visibility","hidden");
    $("#203te").css("visibility","hidden");
    $("#203sc").css("visibility","hidden");
    $("#203se").css("visibility","hidden");
    $("#203cc").css("visibility","visible");
    $("#203cc").css({ opacity: 0.5 });
    $("#203ce").css("visibility","hidden");
    $("#203wp").css("visibility","hidden");
  } else
  {
    $('input[name="p3"]').css({ opacity: .5 });
    $("#203wp").css("visibility","visible");
    $("#203wp").css({ opacity: 0.7 });
  }
}
// Section 2 #4
function b04b1()
{
  if ($("#204b1").css("visibility") == "hidden")
  {
    $("#204b1").css("visibility","visible");
    $("#204b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#204b1").css("visibility","hidden");
    $("#204b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b04b2()
{
  if ($("#204b2").css("visibility") == "hidden")
  {
    $("#204b2").css("visibility","visible");
    $("#204b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#204b2").css("visibility","hidden");
    $("#204b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b04b3()
{
  if ($("#204b3").css("visibility") == "hidden")
  {
    $("#204b3").css("visibility","visible");
    $("#204b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#204b3").css("visibility","hidden");
    $("#204b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b04b4()
{
  if ($("#204b4").css("visibility") == "hidden")
  {
    $("#204b4").css("visibility","visible");
    $("#204b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#204b4").css("visibility","hidden");
    $("#204b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer24()
{
  var bn = 0;
  var tn = 0;
  if ($('input[id="tv20401"]').val() !== "t" && $('input[id="tv20401"]').val() !== "T")
  {
    $('input[id="tv20401"]').css({ opacity: .5 });
    $("#tv20401e").css("visibility","visible");
  	$("#tv20401e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20401"]').css({ opacity: 1 });
    $("#tv20401e").css("visibility","hidden");
  }
  if ($('input[id="tv20402"]').val() !== "f" && $('input[id="tv20402"]').val() !== "F")
  {
    $('input[id="tv20402"]').css({ opacity: .5 });
    $("#tv20402e").css("visibility","visible");
  	$("#tv20402e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20402"]').css({ opacity: 1 });
    $("#tv20402e").css("visibility","hidden");
  }
  if ($('input[id="tv20403"]').val() !== "t" && $('input[id="tv20403"]').val() !== "T")
  {
    $('input[id="tv20403"]').css({ opacity: .5 });
    $("#tv20403e").css("visibility","visible");
  	$("#tv20403e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20403"]').css({ opacity: 1 });
    $("#tv20403e").css("visibility","hidden");
  }
  if ($('input[id="tv20404"]').val() !== "t" && $('input[id="tv20404"]').val() !== "T")
    {
    $('input[id="tv20404"]').css({ opacity: .5 });
    $("#tv20404e").css("visibility","visible");
  	$("#tv20404e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20404"]').css({ opacity: 1 });
    $("#tv20404e").css("visibility","hidden");
  }
  if ($('input[id="tv20405"]').val() !== "f" && $('input[id="tv20405"]').val() !== "F")
  {
    $('input[id="tv20405"]').css({ opacity: .5 });
    $("#tv20405e").css("visibility","visible");
  	$("#tv20405e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20405"]').css({ opacity: 1 });
    $("#tv20405e").css("visibility","hidden");
  }
  if ($('input[id="tv20406"]').val() !== "t" && $('input[id="tv20406"]').val() !== "T")
  {
    $('input[id="tv20406"]').css({ opacity: .5 });
    $("#tv20406e").css("visibility","visible");
  	$("#tv20406e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20406"]').css({ opacity: 1 });
    $("#tv20406e").css("visibility","hidden");
  }
  if ($('input[id="tv20407"]').val() !== "f" && $('input[id="tv20407"]').val() !== "F")
  {
    $('input[id="tv20407"]').css({ opacity: .5 });
    $("#tv20407e").css("visibility","visible");
  	$("#tv20407e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20407"]').css({ opacity: 1 });
    $("#tv20407e").css("visibility","hidden");
  }
  if ($('input[id="tv20408"]').val() !== "t" && $('input[id="tv20408"]').val() !== "T")
  {
    $('input[id="tv20408"]').css({ opacity: .5 });
    $("#tv20408e").css("visibility","visible");
  	$("#tv20408e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20408"]').css({ opacity: 1 });
    $("#tv20408e").css("visibility","hidden");
  }
  if ($('input[id="tv20409"]').val() !== "f" && $('input[id="tv20409"]').val() !== "F")
  {
    $('input[id="tv20409"]').css({ opacity: .5 });
    $("#tv20409e").css("visibility","visible");
  	$("#tv20409e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20409"]').css({ opacity: 1 });
    $("#tv20409e").css("visibility","hidden");
  }
  if ($('input[id="tv20410"]').val() !== "t" && $('input[id="tv20410"]').val() !== "T")
  {
    $('input[id="tv20410"]').css({ opacity: .5 });
    $("#tv20410e").css("visibility","visible");
  	$("#tv20410e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20410"]').css({ opacity: 1 });
    $("#tv20410e").css("visibility","hidden");
  }
  if ($('input[id="tv20411"]').val() !== "f" && $('input[id="tv20411"]').val() !== "F")
  {
    $('input[id="tv20411"]').css({ opacity: .5 });
    $("#tv20411e").css("visibility","visible");
  	$("#tv20411e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20411"]').css({ opacity: 1 });
    $("#tv20411e").css("visibility","hidden");
  }
  if ($('input[id="tv20412"]').val() !== "f" && $('input[id="tv20412"]').val() !== "F")
  {
    $('input[id="tv20412"]').css({ opacity: .5 });
    $("#tv20412e").css("visibility","visible");
  	$("#tv20412e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20412"]').css({ opacity: 1 });
    $("#tv20412e").css("visibility","hidden");
  }
  if ($('input[id="tv20413"]').val() !== "f" && $('input[id="tv20413"]').val() !== "F")
  {
    $('input[id="tv20413"]').css({ opacity: .5 });
    $("#tv20413e").css("visibility","visible");
  	$("#tv20413e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20413"]').css({ opacity: 1 });
    $("#tv20413e").css("visibility","hidden");
  }
  if ($('input[id="tv20414"]').val() !== "f" && $('input[id="tv20414"]').val() !== "F")
  {
    $('input[id="tv20414"]').css({ opacity: .5 });
    $("#tv20414e").css("visibility","visible");
  	$("#tv20414e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20414"]').css({ opacity: 1 });
    $("#tv20414e").css("visibility","hidden");
  }
  if ($('input[id="tv20415"]').val() !== "f" && $('input[id="tv20415"]').val() !== "F")
  {
    $('input[id="tv20415"]').css({ opacity: .5 });
    $("#tv20415e").css("visibility","visible");
  	$("#tv20415e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20415"]').css({ opacity: 1 });
    $("#tv20415e").css("visibility","hidden");
  }
  if ($('input[id="tv20416"]').val() !== "f" && $('input[id="tv20416"]').val() !== "F")
  {
    $('input[id="tv20416"]').css({ opacity: .5 });
    $("#tv20416e").css("visibility","visible");
  	$("#tv20416e").css({ opacity: 0.5, "z-index": "-2" });
    $("#204ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20416"]').css({ opacity: 1 });
    $("#tv20416e").css("visibility","hidden");
  }
  if ($("#204b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#204b2").css("visibility") == "visible")
  {
    bn = bn + 2;
  }
  if ($("#204b3").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#204b4").css("visibility") == "visible")
  {
    bn = bn + 4;
  }
  if (bn == 0)
  {
    $("#204mb").css("visibility","visible");
    $("#204mb").css({ opacity: 0.7 });
    $("#204wb").css("visibility","hidden");
    $("#204ct").css("visibility","hidden");
  } else if (bn == 2)
  {
    $("#204mb").css("visibility","hidden");
    $("#204wb").css("visibility","hidden");
      if (tn == 16)
      {
      $("#204ct").css("visibility","visible");
      $("#204ct").css({ opacity: 0.7 });
      }
  } else
  {
    // alert(bn);
    $("#204wb").css("visibility","visible");
    $("#204wb").css({ opacity: 0.7 });
    $("#204mb").css("visibility","hidden");
    $("#204ct").css("visibility","hidden");
  }
  if ($('input[name="p4"]:checked').val() == "T")
  {
    $('input[name="p4"]').css({ opacity: .5 });
    $("#204tc").css("visibility","hidden");
    $("#204te").css("visibility","visible");
    $("#204te").css({ opacity: 0.5 });
    $("#204sc").css("visibility","hidden");
    $("#204se").css("visibility","hidden");
    $("#204ce").css("visibility","hidden");
    $("#204cc").css("visibility","hidden");
    $("#204wp").css("visibility","hidden");
  } else if ($('input[name="p4"]:checked').val() == "S")
  {
    $('input[name="p4"]').css({ opacity: .5 });
    $("#204tc").css("visibility","hidden");
    $("#204te").css("visibility","hidden");
    $("#204sc").css("visibility","visible");
    $("#204sc").css({ opacity: 0.5 });
    $("#204se").css("visibility","hidden");
    $("#204ce").css("visibility","hidden");
    $("#204cc").css("visibility","hidden");
    $("#204wp").css("visibility","hidden");
  } else if ($('input[name="p4"]:checked').val() == "C")
  {
    $('input[name="p4"]').css({ opacity: .5 });
    $("#204tc").css("visibility","hidden");
    $("#204te").css("visibility","hidden");
    $("#204sc").css("visibility","hidden");
    $("#204se").css("visibility","hidden");
    $("#204cc").css("visibility","hidden");
    $("#204ce").css("visibility","visible");
    $("#204ce").css({ opacity: 0.5 });
    $("#204wp").css("visibility","hidden");
  } else
  {
    $('input[name="p4"]').css({ opacity: .5 });
    $("#204wp").css("visibility","visible");
    $("#204wp").css({ opacity: 0.7 });
  }
}
// Section 2 #5
function b05b1()
{
  if ($("#205b1").css("visibility") == "hidden")
  {
    $("#205b1").css("visibility","visible");
    $("#205b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#205b1").css("visibility","hidden");
    $("#205b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b05b2()
{
  if ($("#205b2").css("visibility") == "hidden")
  {
    $("#205b2").css("visibility","visible");
    $("#205b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#205b2").css("visibility","hidden");
    $("#205b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b05b3()
{
  if ($("#205b3").css("visibility") == "hidden")
  {
    $("#205b3").css("visibility","visible");
    $("#205b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#205b3").css("visibility","hidden");
    $("#205b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b05b4()
{
  if ($("#205b4").css("visibility") == "hidden")
  {
    $("#205b4").css("visibility","visible");
    $("#205b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#205b4").css("visibility","hidden");
    $("#205b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer25()
{
  var bn = 0;
  var tn = 0;
  if ($('input[id="tv20501"]').val() !== "t" && $('input[id="tv20501"]').val() !== "T")
  {
    $('input[id="tv20501"]').css({ opacity: .5 });
    $("#tv20501e").css("visibility","visible");
  	$("#tv20501e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20501"]').css({ opacity: 1 });
    $("#tv20501e").css("visibility","hidden");
  }
  if ($('input[id="tv20502"]').val() !== "t" && $('input[id="tv20502"]').val() !== "T")
  {
    $('input[id="tv20502"]').css({ opacity: .5 });
    $("#tv20502e").css("visibility","visible");
  	$("#tv20502e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20502"]').css({ opacity: 1 });
    $("#tv20502e").css("visibility","hidden");
  }
  if ($('input[id="tv20503"]').val() !== "f" && $('input[id="tv20503"]').val() !== "F")
  {
    $('input[id="tv20503"]').css({ opacity: .5 });
    $("#tv20503e").css("visibility","visible");
  	$("#tv20503e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20503"]').css({ opacity: 1 });
    $("#tv20503e").css("visibility","hidden");
  }
  if ($('input[id="tv20504"]').val() !== "f" && $('input[id="tv20504"]').val() !== "F")
    {
    $('input[id="tv20504"]').css({ opacity: .5 });
    $("#tv20504e").css("visibility","visible");
  	$("#tv20504e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20504"]').css({ opacity: 1 });
    $("#tv20504e").css("visibility","hidden");
  }
  if ($('input[id="tv20505"]').val() !== "t" && $('input[id="tv20505"]').val() !== "T")
  {
    $('input[id="tv20505"]').css({ opacity: .5 });
    $("#tv20505e").css("visibility","visible");
  	$("#tv20505e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20505"]').css({ opacity: 1 });
    $("#tv20505e").css("visibility","hidden");
  }
  if ($('input[id="tv20506"]').val() !== "t" && $('input[id="tv20506"]').val() !== "T")
  {
    $('input[id="tv20506"]').css({ opacity: .5 });
    $("#tv20506e").css("visibility","visible");
  	$("#tv20506e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20506"]').css({ opacity: 1 });
    $("#tv20506e").css("visibility","hidden");
  }
  if ($('input[id="tv20507"]').val() !== "t" && $('input[id="tv20507"]').val() !== "T")
  {
    $('input[id="tv20507"]').css({ opacity: .5 });
    $("#tv20507e").css("visibility","visible");
  	$("#tv20507e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20507"]').css({ opacity: 1 });
    $("#tv20507e").css("visibility","hidden");
  }
  if ($('input[id="tv20508"]').val() !== "t" && $('input[id="tv20508"]').val() !== "T")
  {
    $('input[id="tv20508"]').css({ opacity: .5 });
    $("#tv20508e").css("visibility","visible");
  	$("#tv20508e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20508"]').css({ opacity: 1 });
    $("#tv20508e").css("visibility","hidden");
  }
  if ($('input[id="tv20509"]').val() !== "f" && $('input[id="tv20509"]').val() !== "F")
  {
    $('input[id="tv20509"]').css({ opacity: .5 });
    $("#tv20509e").css("visibility","visible");
  	$("#tv20509e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20509"]').css({ opacity: 1 });
    $("#tv20509e").css("visibility","hidden");
  }
  if ($('input[id="tv20510"]').val() !== "t" && $('input[id="tv20510"]').val() !== "T")
  {
    $('input[id="tv20510"]').css({ opacity: .5 });
    $("#tv20510e").css("visibility","visible");
  	$("#tv20510e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20510"]').css({ opacity: 1 });
    $("#tv20510e").css("visibility","hidden");
  }
  if ($('input[id="tv20511"]').val() !== "f" && $('input[id="tv20511"]').val() !== "F")
  {
    $('input[id="tv20511"]').css({ opacity: .5 });
    $("#tv20511e").css("visibility","visible");
  	$("#tv20511e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20511"]').css({ opacity: 1 });
    $("#tv20511e").css("visibility","hidden");
  }
  if ($('input[id="tv20512"]').val() !== "t" && $('input[id="tv20512"]').val() !== "T")
  {
    $('input[id="tv20512"]').css({ opacity: .5 });
    $("#tv20512e").css("visibility","visible");
  	$("#tv20512e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20512"]').css({ opacity: 1 });
    $("#tv20512e").css("visibility","hidden");
  }
  if ($('input[id="tv20513"]').val() !== "f" && $('input[id="tv20513"]').val() !== "F")
  {
    $('input[id="tv20513"]').css({ opacity: .5 });
    $("#tv20513e").css("visibility","visible");
  	$("#tv20513e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20513"]').css({ opacity: 1 });
    $("#tv20513e").css("visibility","hidden");
  }
  if ($('input[id="tv20514"]').val() !== "t" && $('input[id="tv20514"]').val() !== "T")
  {
    $('input[id="tv20514"]').css({ opacity: .5 });
    $("#tv20514e").css("visibility","visible");
  	$("#tv20514e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20514"]').css({ opacity: 1 });
    $("#tv20514e").css("visibility","hidden");
  }
  if ($('input[id="tv20515"]').val() !== "f" && $('input[id="tv20515"]').val() !== "F")
  {
    $('input[id="tv20515"]').css({ opacity: .5 });
    $("#tv20515e").css("visibility","visible");
  	$("#tv20515e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20515"]').css({ opacity: 1 });
    $("#tv20515e").css("visibility","hidden");
  }
  if ($('input[id="tv20516"]').val() !== "t" && $('input[id="tv20516"]').val() !== "T")
  {
    $('input[id="tv20516"]').css({ opacity: .5 });
    $("#tv20516e").css("visibility","visible");
  	$("#tv20516e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20516"]').css({ opacity: 1 });
    $("#tv20516e").css("visibility","hidden");
  }
  if ($('input[id="tv20517"]').val() !== "f" && $('input[id="tv20517"]').val() !== "F")
  {
    $('input[id="tv20517"]').css({ opacity: .5 });
    $("#tv20517e").css("visibility","visible");
  	$("#tv20517e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20517"]').css({ opacity: 1 });
    $("#tv20517e").css("visibility","hidden");
  }
  if ($('input[id="tv20518"]').val() !== "t" && $('input[id="tv20518"]').val() !== "T")
  {
    $('input[id="tv20518"]').css({ opacity: .5 });
    $("#tv20518e").css("visibility","visible");
  	$("#tv20518e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20518"]').css({ opacity: 1 });
    $("#tv20518e").css("visibility","hidden");
  }
  if ($('input[id="tv20519"]').val() !== "t" && $('input[id="tv20519"]').val() !== "T")
  {
    $('input[id="tv20519"]').css({ opacity: .5 });
    $("#tv20519e").css("visibility","visible");
  	$("#tv20519e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20519"]').css({ opacity: 1 });
    $("#tv20519e").css("visibility","hidden");
  }
  if ($('input[id="tv20520"]').val() !== "t" && $('input[id="tv20520"]').val() !== "T")
  {
    $('input[id="tv20520"]').css({ opacity: .5 });
    $("#tv20520e").css("visibility","visible");
  	$("#tv20520e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20520"]').css({ opacity: 1 });
    $("#tv20520e").css("visibility","hidden");
  }
  if ($('input[id="tv20521"]').val() !== "f" && $('input[id="tv20521"]').val() !== "F")
  {
    $('input[id="tv20521"]').css({ opacity: .5 });
    $("#tv20521e").css("visibility","visible");
    $("#tv20521e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20521"]').css({ opacity: 1 });
    $("#tv20521e").css("visibility","hidden");
  }
  if ($('input[id="tv20522"]').val() !== "t" && $('input[id="tv20522"]').val() !== "T")
  {
    $('input[id="tv20522"]').css({ opacity: .5 });
    $("#tv20522e").css("visibility","visible");
    $("#tv20522e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20522"]').css({ opacity: 1 });
    $("#tv20522e").css("visibility","hidden");
  }
  if ($('input[id="tv20523"]').val() !== "f" && $('input[id="tv20523"]').val() !== "F")
  {
    $('input[id="tv20523"]').css({ opacity: .5 });
    $("#tv20523e").css("visibility","visible");
    $("#tv20523e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20523"]').css({ opacity: 1 });
    $("#tv20523e").css("visibility","hidden");
  }
  if ($('input[id="tv20524"]').val() !== "t" && $('input[id="tv20524"]').val() !== "T")
  {
    $('input[id="tv20524"]').css({ opacity: .5 });
    $("#tv20524e").css("visibility","visible");
    $("#tv20524e").css({ opacity: 0.5, "z-index": "-2" });
    $("#205ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20524"]').css({ opacity: 1 });
    $("#tv20524e").css("visibility","hidden");
  }
  if ($("#205b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#205b2").css("visibility") == "visible")
  {
    bn = bn + 2;
  }
  if ($("#205b3").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if (bn == 0)
  {
    $("#205mb").css("visibility","visible");
    $("#205mb").css({ opacity: 0.7 });
    $("#205wb").css("visibility","hidden");
    $("#205ct").css("visibility","hidden");
  } else if (bn == 2)
  {
    $("#205mb").css("visibility","hidden");
    $("#205wb").css("visibility","hidden");
      if (tn == 24)
      {
      $("#205ct").css("visibility","visible");
      $("#205ct").css({ opacity: 0.7 });
      }
  } else
  {
    // alert(bn);
    $("#205wb").css("visibility","visible");
    $("#205wb").css({ opacity: 0.7 });
    $("#205mb").css("visibility","hidden");
    $("#205ct").css("visibility","hidden");
  }
  if ($('input[name="p5"]:checked').val() == "T")
  {
    $('input[name="p5"]').css({ opacity: .5 });
    $("#205tc").css("visibility","hidden");
    $("#205te").css("visibility","visible");
    $("#205te").css({ opacity: 0.5 });
    $("#205sc").css("visibility","hidden");
    $("#205se").css("visibility","hidden");
    $("#205ce").css("visibility","hidden");
    $("#205cc").css("visibility","hidden");
    $("#205wp").css("visibility","hidden");
  } else if ($('input[name="p5"]:checked').val() == "S")
  {
    $('input[name="p5"]').css({ opacity: .5 });
    $("#205tc").css("visibility","hidden");
    $("#205te").css("visibility","hidden");
    $("#205sc").css("visibility","hidden");
    $("#205se").css("visibility","visible");
    $("#205se").css({ opacity: 0.5 });
    $("#205ce").css("visibility","hidden");
    $("#205cc").css("visibility","hidden");
    $("#205wp").css("visibility","hidden");
  } else if ($('input[name="p5"]:checked').val() == "C")
  {
    $('input[name="p5"]').css({ opacity: .5 });
    $("#205tc").css("visibility","hidden");
    $("#205te").css("visibility","hidden");
    $("#205sc").css("visibility","hidden");
    $("#205se").css("visibility","hidden");
    $("#205cc").css("visibility","visible");
    $("#205cc").css({ opacity: 0.5 });
    $("#205ce").css("visibility","hidden");
    $("#205wp").css("visibility","hidden");
  } else
  {
    $('input[name="p5"]').css({ opacity: .5 });
    $("#205wp").css("visibility","visible");
    $("#205wp").css({ opacity: 0.7 });
  }
}
// Section 2 #6
function b06b1()
{
  if ($("#206b1").css("visibility") == "hidden")
  {
    $("#206b1").css("visibility","visible");
    $("#206b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#206b1").css("visibility","hidden");
    $("#206b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b06b2()
{
  if ($("#206b2").css("visibility") == "hidden")
  {
    $("#206b2").css("visibility","visible");
    $("#206b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#206b2").css("visibility","hidden");
    $("#206b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b06b3()
{
  if ($("#206b3").css("visibility") == "hidden")
  {
    $("#206b3").css("visibility","visible");
    $("#206b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#206b3").css("visibility","hidden");
    $("#206b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b06b4()
{
  if ($("#206b4").css("visibility") == "hidden")
  {
    $("#206b4").css("visibility","visible");
    $("#206b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#206b4").css("visibility","hidden");
    $("#206b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function b06b5()
{
  if ($("#206b5").css("visibility") == "hidden")
  {
    $("#206b5").css("visibility","visible");
    $("#206b5").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#206b5").css("visibility","hidden");
    $("#206b5").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer26()
{
  var bn = 0;
  var tn = 0;
  if ($('input[id="tv20601"]').val() !== "f" && $('input[id="tv20601"]').val() !== "F")
  {
    $('input[id="tv20601"]').css({ opacity: .5 });
    $("#tv20601e").css("visibility","visible");
  	$("#tv20601e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20601"]').css({ opacity: 1 });
    $("#tv20601e").css("visibility","hidden");
  }
  if ($('input[id="tv20602"]').val() !== "t" && $('input[id="tv20602"]').val() !== "T")
  {
    $('input[id="tv20602"]').css({ opacity: .5 });
    $("#tv20602e").css("visibility","visible");
  	$("#tv20602e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20602"]').css({ opacity: 1 });
    $("#tv20602e").css("visibility","hidden");
  }
  if ($('input[id="tv20603"]').val() !== "f" && $('input[id="tv20603"]').val() !== "F")
  {
    $('input[id="tv20603"]').css({ opacity: .5 });
    $("#tv20603e").css("visibility","visible");
  	$("#tv20603e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20603"]').css({ opacity: 1 });
    $("#tv20603e").css("visibility","hidden");
  }
  if ($('input[id="tv20604"]').val() !== "t" && $('input[id="tv20604"]').val() !== "T")
    {
    $('input[id="tv20604"]').css({ opacity: .5 });
    $("#tv20604e").css("visibility","visible");
  	$("#tv20604e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20604"]').css({ opacity: 1 });
    $("#tv20604e").css("visibility","hidden");
  }
  if ($('input[id="tv20605"]').val() !== "f" && $('input[id="tv20605"]').val() !== "F")
  {
    $('input[id="tv20605"]').css({ opacity: .5 });
    $("#tv20605e").css("visibility","visible");
  	$("#tv20605e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20605"]').css({ opacity: 1 });
    $("#tv20605e").css("visibility","hidden");
  }
  if ($('input[id="tv20606"]').val() !== "t" && $('input[id="tv20606"]').val() !== "T")
  {
    $('input[id="tv20606"]').css({ opacity: .5 });
    $("#tv20606e").css("visibility","visible");
  	$("#tv20606e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20606"]').css({ opacity: 1 });
    $("#tv20606e").css("visibility","hidden");
  }
  if ($('input[id="tv20607"]').val() !== "f" && $('input[id="tv20607"]').val() !== "F")
  {
    $('input[id="tv20607"]').css({ opacity: .5 });
    $("#tv20607e").css("visibility","visible");
  	$("#tv20607e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20607"]').css({ opacity: 1 });
    $("#tv20607e").css("visibility","hidden");
  }
  if ($('input[id="tv20608"]').val() !== "t" && $('input[id="tv20608"]').val() !== "T")
  {
    $('input[id="tv20608"]').css({ opacity: .5 });
    $("#tv20608e").css("visibility","visible");
  	$("#tv20608e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20608"]').css({ opacity: 1 });
    $("#tv20608e").css("visibility","hidden");
  }
  if ($('input[id="tv20609"]').val() !== "t" && $('input[id="tv20609"]').val() !== "T")
  {
    $('input[id="tv20609"]').css({ opacity: .5 });
    $("#tv20609e").css("visibility","visible");
  	$("#tv20609e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20609"]').css({ opacity: 1 });
    $("#tv20609e").css("visibility","hidden");
  }
  if ($('input[id="tv20610"]').val() !== "t" && $('input[id="tv20610"]').val() !== "T")
  {
    $('input[id="tv20610"]').css({ opacity: .5 });
    $("#tv20610e").css("visibility","visible");
  	$("#tv20610e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20610"]').css({ opacity: 1 });
    $("#tv20610e").css("visibility","hidden");
  }
  if ($('input[id="tv20611"]').val() !== "f" && $('input[id="tv20611"]').val() !== "F")
  {
    $('input[id="tv20611"]').css({ opacity: .5 });
    $("#tv20611e").css("visibility","visible");
  	$("#tv20611e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20611"]').css({ opacity: 1 });
    $("#tv20611e").css("visibility","hidden");
  }
  if ($('input[id="tv20612"]').val() !== "t" && $('input[id="tv20612"]').val() !== "T")
  {
    $('input[id="tv20612"]').css({ opacity: .5 });
    $("#tv20612e").css("visibility","visible");
  	$("#tv20612e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20612"]').css({ opacity: 1 });
    $("#tv20612e").css("visibility","hidden");
  }
  if ($('input[id="tv20613"]').val() !== "t" && $('input[id="tv20613"]').val() !== "T")
  {
    $('input[id="tv20613"]').css({ opacity: .5 });
    $("#tv20613e").css("visibility","visible");
  	$("#tv20613e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20613"]').css({ opacity: 1 });
    $("#tv20613e").css("visibility","hidden");
  }
  if ($('input[id="tv20614"]').val() !== "t" && $('input[id="tv20614"]').val() !== "T")
  {
    $('input[id="tv20614"]').css({ opacity: .5 });
    $("#tv20614e").css("visibility","visible");
  	$("#tv20614e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20614"]').css({ opacity: 1 });
    $("#tv20614e").css("visibility","hidden");
  }
  if ($('input[id="tv20615"]').val() !== "f" && $('input[id="tv20615"]').val() !== "F")
  {
    $('input[id="tv20615"]').css({ opacity: .5 });
    $("#tv20615e").css("visibility","visible");
  	$("#tv20615e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20615"]').css({ opacity: 1 });
    $("#tv20615e").css("visibility","hidden");
  }
  if ($('input[id="tv20616"]').val() !== "t" && $('input[id="tv20616"]').val() !== "T")
  {
    $('input[id="tv20616"]').css({ opacity: .5 });
    $("#tv20616e").css("visibility","visible");
  	$("#tv20616e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20616"]').css({ opacity: 1 });
    $("#tv20616e").css("visibility","hidden");
  }
  if ($('input[id="tv20617"]').val() !== "f" && $('input[id="tv20617"]').val() !== "F")
  {
    $('input[id="tv20617"]').css({ opacity: .5 });
    $("#tv20617e").css("visibility","visible");
  	$("#tv20617e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20617"]').css({ opacity: 1 });
    $("#tv20617e").css("visibility","hidden");
  }
  if ($('input[id="tv20618"]').val() !== "f" && $('input[id="tv20618"]').val() !== "F")
  {
    $('input[id="tv20618"]').css({ opacity: .5 });
    $("#tv20618e").css("visibility","visible");
  	$("#tv20618e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20618"]').css({ opacity: 1 });
    $("#tv20618e").css("visibility","hidden");
  }
  if ($('input[id="tv20619"]').val() !== "t" && $('input[id="tv20619"]').val() !== "T")
  {
    $('input[id="tv20619"]').css({ opacity: .5 });
    $("#tv20619e").css("visibility","visible");
  	$("#tv20619e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20619"]').css({ opacity: 1 });
    $("#tv20619e").css("visibility","hidden");
  }
  if ($('input[id="tv20620"]').val() !== "f" && $('input[id="tv20620"]').val() !== "F")
  {
    $('input[id="tv20620"]').css({ opacity: .5 });
    $("#tv20620e").css("visibility","visible");
  	$("#tv20620e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20620"]').css({ opacity: 1 });
    $("#tv20620e").css("visibility","hidden");
  }
  if ($('input[id="tv20621"]').val() !== "f" && $('input[id="tv20621"]').val() !== "F")
  {
    $('input[id="tv20621"]').css({ opacity: .5 });
    $("#tv20621e").css("visibility","visible");
    $("#tv20621e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20621"]').css({ opacity: 1 });
    $("#tv20621e").css("visibility","hidden");
  }
  if ($('input[id="tv20622"]').val() !== "f" && $('input[id="tv20622"]').val() !== "F")
  {
    $('input[id="tv20622"]').css({ opacity: .5 });
    $("#tv20622e").css("visibility","visible");
    $("#tv20622e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20622"]').css({ opacity: 1 });
    $("#tv20622e").css("visibility","hidden");
  }
  if ($('input[id="tv20623"]').val() !== "t" && $('input[id="tv20623"]').val() !== "T")
  {
    $('input[id="tv20623"]').css({ opacity: .5 });
    $("#tv20623e").css("visibility","visible");
    $("#tv20623e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20623"]').css({ opacity: 1 });
    $("#tv20623e").css("visibility","hidden");
  }
  if ($('input[id="tv20624"]').val() !== "f" && $('input[id="tv20624"]').val() !== "F")
  {
    $('input[id="tv20624"]').css({ opacity: .5 });
    $("#tv20624e").css("visibility","visible");
    $("#tv20624e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20624"]').css({ opacity: 1 });
    $("#tv20624e").css("visibility","hidden");
  }
  if ($('input[id="tv20625"]').val() !== "f" && $('input[id="tv20625"]').val() !== "F")
  {
    $('input[id="tv20625"]').css({ opacity: .5 });
    $("#tv20625e").css("visibility","visible");
    $("#tv20625e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20625"]').css({ opacity: 1 });
    $("#tv20625e").css("visibility","hidden");
  }
  if ($('input[id="tv20626"]').val() !== "f" && $('input[id="tv20626"]').val() !== "F")
  {
    $('input[id="tv20626"]').css({ opacity: .5 });
    $("#tv20626e").css("visibility","visible");
    $("#tv20626e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20626"]').css({ opacity: 1 });
    $("#tv20626e").css("visibility","hidden");
  }
  if ($('input[id="tv20627"]').val() !== "t" && $('input[id="tv20627"]').val() !== "T")
  {
    $('input[id="tv20627"]').css({ opacity: .5 });
    $("#tv20627e").css("visibility","visible");
    $("#tv20627e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20627"]').css({ opacity: 1 });
    $("#tv20627e").css("visibility","hidden");
  }
  if ($('input[id="tv20628"]').val() !== "f" && $('input[id="tv20628"]').val() !== "F")
  {
    $('input[id="tv20628"]').css({ opacity: .5 });
    $("#tv20628e").css("visibility","visible");
    $("#tv20628e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20628"]').css({ opacity: 1 });
    $("#tv20628e").css("visibility","hidden");
  }
  if ($('input[id="tv20629"]').val() !== "f" && $('input[id="tv20629"]').val() !== "F")
  {
    $('input[id="tv20629"]').css({ opacity: .5 });
    $("#tv20629e").css("visibility","visible");
    $("#tv20629e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20629"]').css({ opacity: 1 });
    $("#tv20629e").css("visibility","hidden");
  }
  if ($('input[id="tv20630"]').val() !== "f" && $('input[id="tv20630"]').val() !== "F")
  {
    $('input[id="tv20630"]').css({ opacity: .5 });
    $("#tv20630e").css("visibility","visible");
    $("#tv20630e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20630"]').css({ opacity: 1 });
    $("#tv20630e").css("visibility","hidden");
  }
  if ($('input[id="tv20631"]').val() !== "f" && $('input[id="tv20631"]').val() !== "F")
  {
    $('input[id="tv20631"]').css({ opacity: .5 });
    $("#tv20631e").css("visibility","visible");
    $("#tv20631e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20631"]').css({ opacity: 1 });
    $("#tv20631e").css("visibility","hidden");
  }
  if ($('input[id="tv20632"]').val() !== "f" && $('input[id="tv20632"]').val() !== "F")
  {
    $('input[id="tv20632"]').css({ opacity: .5 });
    $("#tv20632e").css("visibility","visible");
    $("#tv20632e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20632"]').css({ opacity: 1 });
    $("#tv20632e").css("visibility","hidden");
  }
  if ($('input[id="tv20633"]').val() !== "f" && $('input[id="tv20633"]').val() !== "F")
  {
    $('input[id="tv20633"]').css({ opacity: .5 });
    $("#tv20633e").css("visibility","visible");
    $("#tv20633e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20633"]').css({ opacity: 1 });
    $("#tv20633e").css("visibility","hidden");
  }
  if ($('input[id="tv20634"]').val() !== "f" && $('input[id="tv20634"]').val() !== "F")
  {
    $('input[id="tv20634"]').css({ opacity: .5 });
    $("#tv20634e").css("visibility","visible");
    $("#tv20634e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20634"]').css({ opacity: 1 });
    $("#tv20634e").css("visibility","hidden");
  }
  if ($('input[id="tv20635"]').val() !== "f" && $('input[id="tv20635"]').val() !== "F")
  {
    $('input[id="tv20635"]').css({ opacity: .5 });
    $("#tv20635e").css("visibility","visible");
    $("#tv20635e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20635"]').css({ opacity: 1 });
    $("#tv20635e").css("visibility","hidden");
  }
  if ($('input[id="tv20636"]').val() !== "t" && $('input[id="tv20636"]').val() !== "T")
  {
    $('input[id="tv20636"]').css({ opacity: .5 });
    $("#tv20636e").css("visibility","visible");
    $("#tv20636e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20636"]').css({ opacity: 1 });
    $("#tv20636e").css("visibility","hidden");
  }
  if ($('input[id="tv20637"]').val() !== "f" && $('input[id="tv20637"]').val() !== "F")
  {
    $('input[id="tv20637"]').css({ opacity: .5 });
    $("#tv20637e").css("visibility","visible");
    $("#tv20637e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20637"]').css({ opacity: 1 });
    $("#tv20637e").css("visibility","hidden");
  }
  if ($('input[id="tv20638"]').val() !== "f" && $('input[id="tv20638"]').val() !== "F")
  {
    $('input[id="tv20638"]').css({ opacity: .5 });
    $("#tv20638e").css("visibility","visible");
    $("#tv20638e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20638"]').css({ opacity: 1 });
    $("#tv20638e").css("visibility","hidden");
  }
  if ($('input[id="tv20639"]').val() !== "t" && $('input[id="tv20639"]').val() !== "T")
  {
    $('input[id="tv20639"]').css({ opacity: .5 });
    $("#tv20639e").css("visibility","visible");
    $("#tv20639e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20639"]').css({ opacity: 1 });
    $("#tv20639e").css("visibility","hidden");
  }
  if ($('input[id="tv20640"]').val() !== "t" && $('input[id="tv20640"]').val() !== "T")
  {
    $('input[id="tv20640"]').css({ opacity: .5 });
    $("#tv20640e").css("visibility","visible");
    $("#tv20640e").css({ opacity: 0.5, "z-index": "-2" });
    $("#206ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv20640"]').css({ opacity: 1 });
    $("#tv20640e").css("visibility","hidden");
  }
  if ($("#206b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#206b2").css("visibility") == "visible")
  {
    bn = bn + 2;
  }
  if ($("#206b3").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#206b4").css("visibility") == "visible")
  {
    bn = bn + 4;
  }
  if ($("#206b5").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if (bn == 0)
  {
    $("#206mb").css("visibility","visible");
    $("#206mb").css({ opacity: 0.7 });
    $("#206wb").css("visibility","hidden");
    $("#206ct").css("visibility","hidden");
  } else if (bn == 5)
  {
    $("#206mb").css("visibility","hidden");
    $("#206wb").css("visibility","hidden");
      if (tn == 40)
      {
      $("#206ct").css("visibility","visible");
      $("#206ct").css({ opacity: 0.7 });
      }
  } else
  {
    // alert(bn);
    $("#206wb").css("visibility","visible");
    $("#206wb").css({ opacity: 0.7 });
    $("#206mb").css("visibility","hidden");
    $("#206ct").css("visibility","hidden");
  }
  if ($('input[name="p6"]:checked').val() == "T")
  {
    $('input[name="p6"]').css({ opacity: .5 });
    $("#206tc").css("visibility","hidden");
    $("#206te").css("visibility","visible");
    $("#206te").css({ opacity: 0.5 });
    $("#206sc").css("visibility","hidden");
    $("#206se").css("visibility","hidden");
    $("#206ce").css("visibility","hidden");
    $("#206cc").css("visibility","hidden");
    $("#206wp").css("visibility","hidden");
  } else if ($('input[name="p6"]:checked').val() == "S")
  {
    $('input[name="p6"]').css({ opacity: .5 });
    $("#206tc").css("visibility","hidden");
    $("#206te").css("visibility","hidden");
    $("#206sc").css("visibility","hidden");
    $("#206se").css("visibility","visible");
    $("#206se").css({ opacity: 0.5 });
    $("#206ce").css("visibility","hidden");
    $("#206cc").css("visibility","hidden");
    $("#206wp").css("visibility","hidden");
  } else if ($('input[name="p6"]:checked').val() == "C")
  {
    $('input[name="p6"]').css({ opacity: .5 });
    $("#206tc").css("visibility","hidden");
    $("#206te").css("visibility","hidden");
    $("#206sc").css("visibility","hidden");
    $("#206se").css("visibility","hidden");
    $("#206cc").css("visibility","visible");
    $("#206cc").css({ opacity: 0.5 });
    $("#206ce").css("visibility","hidden");
    $("#206wp").css("visibility","hidden");
  } else
  {
    $('input[name="p6"]').css({ opacity: .5 });
    $("#206wp").css("visibility","visible");
    $("#206wp").css({ opacity: 0.7 });
  }
}
// Section 3 #1
function b31b1()
{
  if ($("#301b1").css("visibility") == "hidden")
  {
    $("#301b1").css("visibility","visible");
    $("#301b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#301b1").css("visibility","hidden");
    $("#301b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b31b2()
{
  if ($("#301b2").css("visibility") == "hidden")
  {
    $("#301b2").css("visibility","visible");
    $("#301b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#301b2").css("visibility","hidden");
    $("#301b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b31b3()
{
  if ($("#301b3").css("visibility") == "hidden")
  {
    $("#301b3").css("visibility","visible");
    $("#301b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#301b3").css("visibility","hidden");
    $("#301b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b31b4()
{
  if ($("#301b4").css("visibility") == "hidden")
  {
    $("#301b4").css("visibility","visible");
    $("#301b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#301b4").css("visibility","hidden");
    $("#301b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer31()
{
  var bn = 0;
  var tn = 0;
  var rn = 0;
  if ($('input[id="tv30101"]').val() !== "f" && $('input[id="tv30101"]').val() !== "F")
  {
    $('input[id="tv30101"]').css({ opacity: .5 });
    $("#tv30101e").css("visibility","visible");
  	$("#tv30101e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30101"]').css({ opacity: 1 });
    $("#tv30101e").css("visibility","hidden");
  }
  if ($('input[id="tv30102"]').val() !== "t" && $('input[id="tv30102"]').val() !== "T")
  {
    $('input[id="tv30102"]').css({ opacity: .5 });
    $("#tv30102e").css("visibility","visible");
  	$("#tv30102e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30102"]').css({ opacity: 1 });
    $("#tv30102e").css("visibility","hidden");
  }
  if ($('input[id="tv30103"]').val() !== "f" && $('input[id="tv30103"]').val() !== "F")
  {
    $('input[id="tv30103"]').css({ opacity: .5 });
    $("#tv30103e").css("visibility","visible");
  	$("#tv30103e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30103"]').css({ opacity: 1 });
    $("#tv30103e").css("visibility","hidden");
  }
  if ($('input[id="tv30104"]').val() !== "t" && $('input[id="tv30104"]').val() !== "T")
    {
    $('input[id="tv30104"]').css({ opacity: .5 });
    $("#tv30104e").css("visibility","visible");
  	$("#tv30104e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30104"]').css({ opacity: 1 });
    $("#tv30104e").css("visibility","hidden");
  }
  if ($('input[id="tv30105"]').val() !== "f" && $('input[id="tv30105"]').val() !== "F")
  {
    $('input[id="tv30105"]').css({ opacity: .5 });
    $("#tv30105e").css("visibility","visible");
  	$("#tv30105e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30105"]').css({ opacity: 1 });
    $("#tv30105e").css("visibility","hidden");
  }
  if ($('input[id="tv30106"]').val() !== "t" && $('input[id="tv30106"]').val() !== "T")
  {
    $('input[id="tv30106"]').css({ opacity: .5 });
    $("#tv30106e").css("visibility","visible");
  	$("#tv30106e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30106"]').css({ opacity: 1 });
    $("#tv30106e").css("visibility","hidden");
  }
  if ($('input[id="tv30107"]').val() !== "f" && $('input[id="tv30107"]').val() !== "F")
  {
    $('input[id="tv30107"]').css({ opacity: .5 });
    $("#tv30107e").css("visibility","visible");
  	$("#tv30107e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30107"]').css({ opacity: 1 });
    $("#tv30107e").css("visibility","hidden");
  }
  if ($('input[id="tv30108"]').val() !== "f" && $('input[id="tv30108"]').val() !== "F")
  {
    $('input[id="tv30108"]').css({ opacity: .5 });
    $("#tv30108e").css("visibility","visible");
  	$("#tv30108e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30108"]').css({ opacity: 1 });
    $("#tv30108e").css("visibility","hidden");
  }
  if ($('input[id="tv30109"]').val() !== "f" && $('input[id="tv30109"]').val() !== "F")
  {
    $('input[id="tv30109"]').css({ opacity: .5 });
    $("#tv30109e").css("visibility","visible");
  	$("#tv30109e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30109"]').css({ opacity: 1 });
    $("#tv30109e").css("visibility","hidden");
  }
  if ($('input[id="tv30110"]').val() !== "f" && $('input[id="tv30110"]').val() !== "F")
  {
    $('input[id="tv30110"]').css({ opacity: .5 });
    $("#tv30110e").css("visibility","visible");
  	$("#tv30110e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30110"]').css({ opacity: 1 });
    $("#tv30110e").css("visibility","hidden");
  }
  if ($('input[id="tv30111"]').val() !== "t" && $('input[id="tv30111"]').val() !== "T")
  {
    $('input[id="tv30111"]').css({ opacity: .5 });
    $("#tv30111e").css("visibility","visible");
  	$("#tv30111e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30111"]').css({ opacity: 1 });
    $("#tv30111e").css("visibility","hidden");
  }
  if ($('input[id="tv30112"]').val() !== "t" && $('input[id="tv30112"]').val() !== "T")
  {
    $('input[id="tv30112"]').css({ opacity: .5 });
    $("#tv30112e").css("visibility","visible");
  	$("#tv30112e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30112"]').css({ opacity: 1 });
    $("#tv30112e").css("visibility","hidden");
  }
  if ($('input[id="tv30113"]').val() !== "t" && $('input[id="tv30113"]').val() !== "T")
  {
    $('input[id="tv30113"]').css({ opacity: .5 });
    $("#tv30113e").css("visibility","visible");
  	$("#tv30113e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30113"]').css({ opacity: 1 });
    $("#tv30113e").css("visibility","hidden");
  }
  if ($('input[id="tv30114"]').val() !== "f" && $('input[id="tv30114"]').val() !== "F")
  {
    $('input[id="tv30114"]').css({ opacity: .5 });
    $("#tv30114e").css("visibility","visible");
  	$("#tv30114e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30114"]').css({ opacity: 1 });
    $("#tv30114e").css("visibility","hidden");
  }
  if ($('input[id="tv30115"]').val() !== "t" && $('input[id="tv30115"]').val() !== "T")
  {
    $('input[id="tv30115"]').css({ opacity: .5 });
    $("#tv30115e").css("visibility","visible");
  	$("#tv30115e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30115"]').css({ opacity: 1 });
    $("#tv30115e").css("visibility","hidden");
  }
  if ($('input[id="tv30116"]').val() !== "t" && $('input[id="tv30116"]').val() !== "T")
  {
    $('input[id="tv30116"]').css({ opacity: .5 });
    $("#tv30116e").css("visibility","visible");
  	$("#tv30116e").css({ opacity: 0.5, "z-index": "-2" });
    $("#301ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30116"]').css({ opacity: 1 });
    $("#tv30116e").css("visibility","hidden");
  }
  if ($("#301b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#301b2").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#301b3").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if ($("#301b4").css("visibility") == "visible")
  {
    bn = bn + 7;
  }
  if (bn == 0 || bn == 1 || bn == 5)
  {
    $("#301mb").css("visibility","visible");
    $("#301mb").css({ opacity: 0.7 });
    $("#301wb").css("visibility","hidden");
    $("#301cts").css("visibility","hidden");
  } else if (bn == 6)
  {
    $("#301mb").css("visibility","hidden");
    $("#301wb").css("visibility","hidden");
      if (tn == 16)
      {
      $("#301cts").css("visibility","visible");
      $("#301cts").css({ opacity: 0.7 });
      } else
      {
      $("#301cts").css("visibility","hidden");
      $("#301cts").css({ opacity: 0.0 });
      }
  } else
  {
    // alert(bn);
    $("#301wb").css("visibility","visible");
    $("#301wb").css({ opacity: 0.7 });
    $("#301mb").css("visibility","hidden");
    $("#301cts").css("visibility","hidden");
  }
  if ($('input[id="301rle"]').is(":checked"))
  {
    rn = rn + 1;
  }
  if ($('input[id="301rct"]').is(":checked"))
  {
    rn = rn + 3;
  }
  if ($('input[id="301rcs"]').is(":checked"))
  {
    rn = rn + 5;
  }
  if ($('input[id="301ric"]').is(":checked"))
  {
    rn = rn + 7;
  }
  if (rn == 0)
  {
    $("#301wrs").css("visibility","visible");
    $("#301wrs").css({ opacity: 0.7 });
    $("#301omr").css("visibility","hidden");
    $("#301ers").css("visibility","hidden");
    $("#301crs").css("visibility","hidden");
  }
  else if (rn == 3)
  {
    $("#301omr").css("visibility","visible");
    $("#301omr").css({ opacity: 0.7 });
    $("#301wrs").css("visibility","hidden");
    $("#301ers").css("visibility","hidden");
    $("#301crs").css("visibility","hidden");
  }
  else if (rn == 7)
  {
    $("#301omr").css("visibility","visible");
    $("#301omr").css({ opacity: 0.7 });
    $("#301wrs").css("visibility","hidden");
    $("#301ers").css("visibility","hidden");
    $("#301crs").css("visibility","hidden");
  }
  else if (rn == 10)
    {
    $("#301wrs").css("visibility","hidden");
    $("#301omr").css("visibility","hidden");
    $("#301ers").css("visibility","hidden");
    $("#301crs").css("visibility","visible");
    $("#301crs").css({ opacity: 0.7 });
  } else
  {
    $("#301wrs").css("visibility","hidden");
    $("#301omr").css("visibility","hidden");
    $("#301ers").css("visibility","visible");
    $("#301ers").css({ opacity: 0.7 });
    $("#301crs").css("visibility","hidden");
  }
}
// Section 3 #2
function b32b1()
{
  if ($("#302b1").css("visibility") == "hidden")
  {
    $("#302b1").css("visibility","visible");
    $("#302b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#302b1").css("visibility","hidden");
    $("#302b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b32b2()
{
  if ($("#302b2").css("visibility") == "hidden")
  {
    $("#302b2").css("visibility","visible");
    $("#302b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#302b2").css("visibility","hidden");
    $("#302b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b32b3()
{
  if ($("#302b3").css("visibility") == "hidden")
  {
    $("#302b3").css("visibility","visible");
    $("#302b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#302b3").css("visibility","hidden");
    $("#302b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b32b4()
{
  if ($("#302b4").css("visibility") == "hidden")
  {
    $("#302b4").css("visibility","visible");
    $("#302b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#302b4").css("visibility","hidden");
    $("#302b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function b32b5()
{
  if ($("#302b5").css("visibility") == "hidden")
  {
    $("#302b5").css("visibility","visible");
    $("#302b5").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#302b5").css("visibility","hidden");
    $("#302b5").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer32()
{
  var bn = 0;
  var tn = 0;
  var rn = 0;
  if ($('input[id="tv30201"]').val() !== "t" && $('input[id="tv30201"]').val() !== "T")
  {
    $('input[id="tv30201"]').css({ opacity: .5 });
    $("#tv30201e").css("visibility","visible");
  	$("#tv30201e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30201"]').css({ opacity: 1 });
    $("#tv30201e").css("visibility","hidden");
  }
  if ($('input[id="tv30202"]').val() !== "f" && $('input[id="tv30202"]').val() !== "F")
  {
    $('input[id="tv30202"]').css({ opacity: .5 });
    $("#tv30202e").css("visibility","visible");
  	$("#tv30202e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30202"]').css({ opacity: 1 });
    $("#tv30202e").css("visibility","hidden");
  }
  if ($('input[id="tv30203"]').val() !== "t" && $('input[id="tv30203"]').val() !== "T")
  {
    $('input[id="tv30203"]').css({ opacity: .5 });
    $("#tv30203e").css("visibility","visible");
  	$("#tv30203e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30203"]').css({ opacity: 1 });
    $("#tv30203e").css("visibility","hidden");
  }
  if ($('input[id="tv30204"]').val() !== "t" && $('input[id="tv30204"]').val() !== "T")
    {
    $('input[id="tv30204"]').css({ opacity: .5 });
    $("#tv30204e").css("visibility","visible");
  	$("#tv30204e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30204"]').css({ opacity: 1 });
    $("#tv30204e").css("visibility","hidden");
  }
  if ($('input[id="tv30205"]').val() !== "f" && $('input[id="tv30205"]').val() !== "F")
  {
    $('input[id="tv30205"]').css({ opacity: .5 });
    $("#tv30205e").css("visibility","visible");
  	$("#tv30205e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30205"]').css({ opacity: 1 });
    $("#tv30205e").css("visibility","hidden");
  }
  if ($('input[id="tv30206"]').val() !== "t" && $('input[id="tv30206"]').val() !== "T")
  {
    $('input[id="tv30206"]').css({ opacity: .5 });
    $("#tv30206e").css("visibility","visible");
  	$("#tv30206e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30206"]').css({ opacity: 1 });
    $("#tv30206e").css("visibility","hidden");
  }
  if ($('input[id="tv30207"]').val() !== "f" && $('input[id="tv30207"]').val() !== "F")
  {
    $('input[id="tv30207"]').css({ opacity: .5 });
    $("#tv30207e").css("visibility","visible");
  	$("#tv30207e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30207"]').css({ opacity: 1 });
    $("#tv30207e").css("visibility","hidden");
  }
  if ($('input[id="tv30208"]').val() !== "f" && $('input[id="tv30208"]').val() !== "F")
  {
    $('input[id="tv30208"]').css({ opacity: .5 });
    $("#tv30208e").css("visibility","visible");
  	$("#tv30208e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30208"]').css({ opacity: 1 });
    $("#tv30208e").css("visibility","hidden");
  }
  if ($('input[id="tv30209"]').val() !== "f" && $('input[id="tv30209"]').val() !== "F")
  {
    $('input[id="tv30209"]').css({ opacity: .5 });
    $("#tv30209e").css("visibility","visible");
  	$("#tv30209e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30209"]').css({ opacity: 1 });
    $("#tv30209e").css("visibility","hidden");
  }
  if ($('input[id="tv30210"]').val() !== "t" && $('input[id="tv30210"]').val() !== "T")
  {
    $('input[id="tv30210"]').css({ opacity: .5 });
    $("#tv30210e").css("visibility","visible");
  	$("#tv30210e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30210"]').css({ opacity: 1 });
    $("#tv30210e").css("visibility","hidden");
  }
  if ($('input[id="tv30211"]').val() !== "f" && $('input[id="tv30211"]').val() !== "F")
  {
    $('input[id="tv30211"]').css({ opacity: .5 });
    $("#tv30211e").css("visibility","visible");
  	$("#tv30211e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30211"]').css({ opacity: 1 });
    $("#tv30211e").css("visibility","hidden");
  }
  if ($('input[id="tv30212"]').val() !== "t" && $('input[id="tv30212"]').val() !== "T")
  {
    $('input[id="tv30212"]').css({ opacity: .5 });
    $("#tv30212e").css("visibility","visible");
  	$("#tv30212e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30212"]').css({ opacity: 1 });
    $("#tv30212e").css("visibility","hidden");
  }
  if ($('input[id="tv30213"]').val() !== "f" && $('input[id="tv30213"]').val() !== "F")
  {
    $('input[id="tv30213"]').css({ opacity: .5 });
    $("#tv30213e").css("visibility","visible");
  	$("#tv30213e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30213"]').css({ opacity: 1 });
    $("#tv30213e").css("visibility","hidden");
  }
  if ($('input[id="tv30214"]').val() !== "f" && $('input[id="tv30214"]').val() !== "F")
  {
    $('input[id="tv30214"]').css({ opacity: .5 });
    $("#tv30214e").css("visibility","visible");
  	$("#tv30214e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30214"]').css({ opacity: 1 });
    $("#tv30214e").css("visibility","hidden");
  }
  if ($('input[id="tv30215"]').val() !== "t" && $('input[id="tv30215"]').val() !== "T")
  {
    $('input[id="tv30215"]').css({ opacity: .5 });
    $("#tv30215e").css("visibility","visible");
  	$("#tv30215e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30215"]').css({ opacity: 1 });
    $("#tv30215e").css("visibility","hidden");
  }
  if ($('input[id="tv30216"]').val() !== "t" && $('input[id="tv30216"]').val() !== "T")
  {
    $('input[id="tv30216"]').css({ opacity: .5 });
    $("#tv30216e").css("visibility","visible");
  	$("#tv30216e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30216"]').css({ opacity: 1 });
    $("#tv30216e").css("visibility","hidden");
  }
  if ($('input[id="tv30217"]').val() !== "f" && $('input[id="tv30217"]').val() !== "F")
  {
    $('input[id="tv30217"]').css({ opacity: .5 });
    $("#tv30217e").css("visibility","visible");
  	$("#tv30217e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30217"]').css({ opacity: 1 });
    $("#tv30217e").css("visibility","hidden");
  }
  if ($('input[id="tv30218"]').val() !== "f" && $('input[id="tv30218"]').val() !== "F")
  {
    $('input[id="tv30218"]').css({ opacity: .5 });
    $("#tv30218e").css("visibility","visible");
  	$("#tv30218e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30218"]').css({ opacity: 1 });
    $("#tv30218e").css("visibility","hidden");
  }
  if ($('input[id="tv30219"]').val() !== "f" && $('input[id="tv30219"]').val() !== "F")
  {
    $('input[id="tv30219"]').css({ opacity: .5 });
    $("#tv30219e").css("visibility","visible");
  	$("#tv30219e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30219"]').css({ opacity: 1 });
    $("#tv30219e").css("visibility","hidden");
  }
  if ($('input[id="tv30220"]').val() !== "t" && $('input[id="tv30220"]').val() !== "T")
  {
    $('input[id="tv30220"]').css({ opacity: .5 });
    $("#tv30220e").css("visibility","visible");
  	$("#tv30220e").css({ opacity: 0.5, "z-index": "-2" });
    $("#302ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30220"]').css({ opacity: 1 });
    $("#tv30220e").css("visibility","hidden");
  }
  if ($("#302b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#302b2").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#302b3").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if ($("#302b4").css("visibility") == "visible")
  {
    bn = bn + 7;
  }
  if ($("#302b5").css("visibility") == "visible")
  {
    bn = bn + 9;
  }
  if (bn == 0 || bn == 1 || bn == 7)
  {
    $("#302mb").css("visibility","visible");
    $("#302mb").css({ opacity: 0.7 });
    $("#302wb").css("visibility","hidden");
    $("#302cts").css("visibility","hidden");
  } else if (bn == 8)
  {
    $("#302mb").css("visibility","hidden");
    $("#302wb").css("visibility","hidden");
      if (tn == 20)
      {
      $("#302cts").css("visibility","visible");
      $("#302cts").css({ opacity: 0.7 });
      } else
      {
      $("#302cts").css("visibility","hidden");
      $("#302cts").css({ opacity: 0.0 });
      }
  } else
  {
    // alert(bn);
    $("#302wb").css("visibility","visible");
    $("#302wb").css({ opacity: 0.7 });
    $("#302mb").css("visibility","hidden");
    $("#302cts").css("visibility","hidden");
  }
  if ($('input[id="302rle"]').is(":checked"))
  {
    rn = rn + 1;
  }
  if ($('input[id="302rct"]').is(":checked"))
  {
    rn = rn + 3;
  }
  if ($('input[id="302rcs"]').is(":checked"))
  {
    rn = rn + 5;
  }
  if ($('input[id="302ric"]').is(":checked"))
  {
    rn = rn + 7;
  }
  if (rn == 0)
  {
    $("#302wrs").css("visibility","visible");
    $("#302wrs").css({ opacity: 0.7 });
    $("#302omr").css("visibility","hidden");
    $("#302ers").css("visibility","hidden");
    $("#302crs").css("visibility","hidden");
  }
  // else if (rn == 3)
  // {
  //   $("#302omr").css("visibility","visible");
  //   $("#302omr").css({ opacity: 0.7 });
  //   $("#302wrs").css("visibility","hidden");
  //   $("#302ers").css("visibility","hidden");
  //   $("#302crs").css("visibility","hidden");
  // }
  // else if (rn == 7)
  // {
  //   $("#302omr").css("visibility","visible");
  //   $("#302omr").css({ opacity: 0.7 });
  //   $("#302wrs").css("visibility","hidden");
  //   $("#302ers").css("visibility","hidden");
  //   $("#302crs").css("visibility","hidden");
  // }
  else if (rn == 7)
    {
    $("#302wrs").css("visibility","hidden");
    $("#302omr").css("visibility","hidden");
    $("#302ers").css("visibility","hidden");
    $("#302crs").css("visibility","visible");
    $("#302crs").css({ opacity: 0.7 });
  } else
  {
    $("#302wrs").css("visibility","hidden");
    $("#302omr").css("visibility","hidden");
    $("#302ers").css("visibility","visible");
    $("#302ers").css({ opacity: 0.7 });
    $("#302crs").css("visibility","hidden");
  }
}
// Section 3 #3
function b33b1()
{
  if ($("#303b1").css("visibility") == "hidden")
  {
    $("#303b1").css("visibility","visible");
    $("#303b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b1").css("visibility","hidden");
    $("#303b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b33b2()
{
  if ($("#303b2").css("visibility") == "hidden")
  {
    $("#303b2").css("visibility","visible");
    $("#303b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b2").css("visibility","hidden");
    $("#303b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b33b3()
{
  if ($("#303b3").css("visibility") == "hidden")
  {
    $("#303b3").css("visibility","visible");
    $("#303b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b3").css("visibility","hidden");
    $("#303b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b33b4()
{
  if ($("#303b4").css("visibility") == "hidden")
  {
    $("#303b4").css("visibility","visible");
    $("#303b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b4").css("visibility","hidden");
    $("#303b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function b33b5()
{
  if ($("#303b5").css("visibility") == "hidden")
  {
    $("#303b5").css("visibility","visible");
    $("#303b5").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b5").css("visibility","hidden");
    $("#303b5").css({ opacity: 1, "z-index": "-3" });
  }
}

function b33b6()
{
  if ($("#303b6").css("visibility") == "hidden")
  {
    $("#303b6").css("visibility","visible");
    $("#303b6").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b6").css("visibility","hidden");
    $("#303b6").css({ opacity: 1, "z-index": "-3" });
  }
}

function b33b7()
{
  if ($("#303b7").css("visibility") == "hidden")
  {
    $("#303b7").css("visibility","visible");
    $("#303b7").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#303b7").css("visibility","hidden");
    $("#303b7").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer33()
{
  var bn = 0;
  var tn = 0;
  var rn = 0;
  if ($('input[id="tv30301"]').val() !== "f" && $('input[id="tv30301"]').val() !== "F")
  {
    $('input[id="tv30301"]').css({ opacity: .5 });
    $("#tv30301e").css("visibility","visible");
  	$("#tv30301e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30301"]').css({ opacity: 1 });
    $("#tv30301e").css("visibility","hidden");
  }
  if ($('input[id="tv30302"]').val() !== "f" && $('input[id="tv30302"]').val() !== "F")
  {
    $('input[id="tv30302"]').css({ opacity: .5 });
    $("#tv30302e").css("visibility","visible");
  	$("#tv30302e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30302"]').css({ opacity: 1 });
    $("#tv30302e").css("visibility","hidden");
  }
  if ($('input[id="tv30303"]').val() !== "t" && $('input[id="tv30303"]').val() !== "T")
  {
    $('input[id="tv30303"]').css({ opacity: .5 });
    $("#tv30303e").css("visibility","visible");
  	$("#tv30303e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30303"]').css({ opacity: 1 });
    $("#tv30303e").css("visibility","hidden");
  }
  if ($('input[id="tv30304"]').val() !== "t" && $('input[id="tv30304"]').val() !== "T")
    {
    $('input[id="tv30304"]').css({ opacity: .5 });
    $("#tv30304e").css("visibility","visible");
  	$("#tv30304e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30304"]').css({ opacity: 1 });
    $("#tv30304e").css("visibility","hidden");
  }
  if ($('input[id="tv30305"]').val() !== "f" && $('input[id="tv30305"]').val() !== "F")
  {
    $('input[id="tv30305"]').css({ opacity: .5 });
    $("#tv30305e").css("visibility","visible");
  	$("#tv30305e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30305"]').css({ opacity: 1 });
    $("#tv30305e").css("visibility","hidden");
  }
  if ($('input[id="tv30306"]').val() !== "t" && $('input[id="tv30306"]').val() !== "T")
  {
    $('input[id="tv30306"]').css({ opacity: .5 });
    $("#tv30306e").css("visibility","visible");
  	$("#tv30306e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30306"]').css({ opacity: 1 });
    $("#tv30306e").css("visibility","hidden");
  }
  if ($('input[id="tv30307"]').val() !== "t" && $('input[id="tv30307"]').val() !== "T")
  {
    $('input[id="tv30307"]').css({ opacity: .5 });
    $("#tv30307e").css("visibility","visible");
  	$("#tv30307e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30307"]').css({ opacity: 1 });
    $("#tv30307e").css("visibility","hidden");
  }
  if ($('input[id="tv30308"]').val() !== "f" && $('input[id="tv30308"]').val() !== "F")
  {
    $('input[id="tv30308"]').css({ opacity: .5 });
    $("#tv30308e").css("visibility","visible");
  	$("#tv30308e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30308"]').css({ opacity: 1 });
    $("#tv30308e").css("visibility","hidden");
  }
  if ($('input[id="tv30309"]').val() !== "f" && $('input[id="tv30309"]').val() !== "F")
  {
    $('input[id="tv30309"]').css({ opacity: .5 });
    $("#tv30309e").css("visibility","visible");
  	$("#tv30309e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30309"]').css({ opacity: 1 });
    $("#tv30309e").css("visibility","hidden");
  }
  if ($('input[id="tv30310"]').val() !== "t" && $('input[id="tv30310"]').val() !== "T")
  {
    $('input[id="tv30310"]').css({ opacity: .5 });
    $("#tv30310e").css("visibility","visible");
  	$("#tv30310e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30310"]').css({ opacity: 1 });
    $("#tv30310e").css("visibility","hidden");
  }
  if ($('input[id="tv30311"]').val() !== "f" && $('input[id="tv30311"]').val() !== "F")
  {
    $('input[id="tv30311"]').css({ opacity: .5 });
    $("#tv30311e").css("visibility","visible");
  	$("#tv30311e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30311"]').css({ opacity: 1 });
    $("#tv30311e").css("visibility","hidden");
  }
  if ($('input[id="tv30312"]').val() !== "t" && $('input[id="tv30312"]').val() !== "T")
  {
    $('input[id="tv30312"]').css({ opacity: .5 });
    $("#tv30312e").css("visibility","visible");
  	$("#tv30312e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30312"]').css({ opacity: 1 });
    $("#tv30312e").css("visibility","hidden");
  }
  if ($('input[id="tv30313"]').val() !== "f" && $('input[id="tv30313"]').val() !== "F")
  {
    $('input[id="tv30313"]').css({ opacity: .5 });
    $("#tv30313e").css("visibility","visible");
  	$("#tv30313e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30313"]').css({ opacity: 1 });
    $("#tv30313e").css("visibility","hidden");
  }
  if ($('input[id="tv30314"]').val() !== "t" && $('input[id="tv30314"]').val() !== "T")
  {
    $('input[id="tv30314"]').css({ opacity: .5 });
    $("#tv30314e").css("visibility","visible");
  	$("#tv30314e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30314"]').css({ opacity: 1 });
    $("#tv30314e").css("visibility","hidden");
  }
  if ($('input[id="tv30315"]').val() !== "f" && $('input[id="tv30315"]').val() !== "F")
  {
    $('input[id="tv30315"]').css({ opacity: .5 });
    $("#tv30315e").css("visibility","visible");
  	$("#tv30315e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30315"]').css({ opacity: 1 });
    $("#tv30315e").css("visibility","hidden");
  }
  if ($('input[id="tv30316"]').val() !== "f" && $('input[id="tv30316"]').val() !== "F")
  {
    $('input[id="tv30316"]').css({ opacity: .5 });
    $("#tv30316e").css("visibility","visible");
  	$("#tv30316e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30316"]').css({ opacity: 1 });
    $("#tv30316e").css("visibility","hidden");
  }
  if ($('input[id="tv30317"]').val() !== "f" && $('input[id="tv30317"]').val() !== "F")
  {
    $('input[id="tv30317"]').css({ opacity: .5 });
    $("#tv30317e").css("visibility","visible");
  	$("#tv30317e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30317"]').css({ opacity: 1 });
    $("#tv30317e").css("visibility","hidden");
  }
  if ($('input[id="tv30318"]').val() !== "f" && $('input[id="tv30318"]').val() !== "F")
  {
    $('input[id="tv30318"]').css({ opacity: .5 });
    $("#tv30318e").css("visibility","visible");
  	$("#tv30318e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30318"]').css({ opacity: 1 });
    $("#tv30318e").css("visibility","hidden");
  }
  if ($('input[id="tv30319"]').val() !== "t" && $('input[id="tv30319"]').val() !== "T")
  {
    $('input[id="tv30319"]').css({ opacity: .5 });
    $("#tv30319e").css("visibility","visible");
  	$("#tv30319e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30319"]').css({ opacity: 1 });
    $("#tv30319e").css("visibility","hidden");
  }
  if ($('input[id="tv30320"]').val() !== "t" && $('input[id="tv30320"]').val() !== "T")
  {
    $('input[id="tv30320"]').css({ opacity: .5 });
    $("#tv30320e").css("visibility","visible");
  	$("#tv30320e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30320"]').css({ opacity: 1 });
    $("#tv30320e").css("visibility","hidden");
  }
  if ($('input[id="tv30321"]').val() !== "f" && $('input[id="tv30321"]').val() !== "F")
  {
    $('input[id="tv30321"]').css({ opacity: .5 });
    $("#tv30321e").css("visibility","visible");
  	$("#tv30321e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30321"]').css({ opacity: 1 });
    $("#tv30321e").css("visibility","hidden");
  }
  if ($('input[id="tv30322"]').val() !== "f" && $('input[id="tv30322"]').val() !== "F")
  {
    $('input[id="tv30322"]').css({ opacity: .5 });
    $("#tv30322e").css("visibility","visible");
  	$("#tv30322e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30322"]').css({ opacity: 1 });
    $("#tv30322e").css("visibility","hidden");
  }
  if ($('input[id="tv30323"]').val() !== "t" && $('input[id="tv30323"]').val() !== "T")
  {
    $('input[id="tv30323"]').css({ opacity: .5 });
    $("#tv30323e").css("visibility","visible");
  	$("#tv30323e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30323"]').css({ opacity: 1 });
    $("#tv30323e").css("visibility","hidden");
  }
  if ($('input[id="tv30324"]').val() !== "f" && $('input[id="tv30324"]').val() !== "F")
  {
    $('input[id="tv30324"]').css({ opacity: .5 });
    $("#tv30324e").css("visibility","visible");
  	$("#tv30324e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30324"]').css({ opacity: 1 });
    $("#tv30324e").css("visibility","hidden");
  }
  if ($('input[id="tv30325"]').val() !== "f" && $('input[id="tv30325"]').val() !== "F")
  {
    $('input[id="tv30325"]').css({ opacity: .5 });
    $("#tv30325e").css("visibility","visible");
  	$("#tv30325e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30325"]').css({ opacity: 1 });
    $("#tv30325e").css("visibility","hidden");
  }
  if ($('input[id="tv30326"]').val() !== "t" && $('input[id="tv30326"]').val() !== "T")
  {
    $('input[id="tv30326"]').css({ opacity: .5 });
    $("#tv30326e").css("visibility","visible");
  	$("#tv30326e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30326"]').css({ opacity: 1 });
    $("#tv30326e").css("visibility","hidden");
  }
  if ($('input[id="tv30327"]').val() !== "t" && $('input[id="tv30327"]').val() !== "T")
  {
    $('input[id="tv30327"]').css({ opacity: .5 });
    $("#tv30327e").css("visibility","visible");
  	$("#tv30327e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30327"]').css({ opacity: 1 });
    $("#tv30327e").css("visibility","hidden");
  }
  if ($('input[id="tv30328"]').val() !== "f" && $('input[id="tv30328"]').val() !== "F")
  {
    $('input[id="tv30328"]').css({ opacity: .5 });
    $("#tv30328e").css("visibility","visible");
  	$("#tv30328e").css({ opacity: 0.5, "z-index": "-2" });
    $("#303ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30328"]').css({ opacity: 1 });
    $("#tv30328e").css("visibility","hidden");
  }
  if ($("#303b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#303b2").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#303b3").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if ($("#303b4").css("visibility") == "visible")
  {
    bn = bn + 7;
  }
  if ($("#303b5").css("visibility") == "visible")
  {
    bn = bn + 9;
  }
  if ($("#303b6").css("visibility") == "visible")
  {
    bn = bn + 11;
  }
  if ($("#303b7").css("visibility") == "visible")
  {
    bn = bn + 13;
  }
  if (bn == 0 || bn == 3 || bn == 9)
  {
    $("#303mb").css("visibility","visible");
    $("#303mb").css({ opacity: 0.7 });
    $("#303wb").css("visibility","hidden");
    $("#303cts").css("visibility","hidden");
  } else if (bn == 12)
  {
    $("#303mb").css("visibility","hidden");
    $("#303wb").css("visibility","hidden");
      if (tn == 28)
      {
      $("#303cts").css("visibility","visible");
      $("#303cts").css({ opacity: 0.7 });
      } else
      {
      $("#303cts").css("visibility","hidden");
      $("#303cts").css({ opacity: 0.0 });
      }
  } else
  {
    // alert(bn);
    $("#303wb").css("visibility","visible");
    $("#303wb").css({ opacity: 0.7 });
    $("#303mb").css("visibility","hidden");
    $("#303cts").css("visibility","hidden");
  }
  if ($('input[id="303rle"]').is(":checked"))
  {
    rn = rn + 1;
  }
  if ($('input[id="303rct"]').is(":checked"))
  {
    rn = rn + 3;
  }
  if ($('input[id="303rcs"]').is(":checked"))
  {
    rn = rn + 5;
  }
  if ($('input[id="303ric"]').is(":checked"))
  {
    rn = rn + 7;
  }
  if (rn == 0)
  {
    $("#303wrs").css("visibility","visible");
    $("#303wrs").css({ opacity: 0.7 });
    $("#303omr").css("visibility","hidden");
    $("#303ers").css("visibility","hidden");
    $("#303crs").css("visibility","hidden");
  }
  else if (rn == 1)
  {
    $("#303omr").css("visibility","visible");
    $("#303omr").css({ opacity: 0.7 });
    $("#303wrs").css("visibility","hidden");
    $("#303ers").css("visibility","hidden");
    $("#303crs").css("visibility","hidden");
  }
  else if (rn == 5)
  {
    $("#303omr").css("visibility","visible");
    $("#303omr").css({ opacity: 0.7 });
    $("#303wrs").css("visibility","hidden");
    $("#303ers").css("visibility","hidden");
    $("#303crs").css("visibility","hidden");
  }
  else if (rn == 6)
    {
    $("#303wrs").css("visibility","hidden");
    $("#303omr").css("visibility","hidden");
    $("#303ers").css("visibility","hidden");
    $("#303crs").css("visibility","visible");
    $("#303crs").css({ opacity: 0.7 });
  } else
  {
    $("#303wrs").css("visibility","hidden");
    $("#303omr").css("visibility","hidden");
    $("#303ers").css("visibility","visible");
    $("#303ers").css({ opacity: 0.7 });
    $("#303crs").css("visibility","hidden");
  }
}
// Section 3 #4
function b34b1()
{
  if ($("#304b1").css("visibility") == "hidden")
  {
    $("#304b1").css("visibility","visible");
    $("#304b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b1").css("visibility","hidden");
    $("#304b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b34b2()
{
  if ($("#304b2").css("visibility") == "hidden")
  {
    $("#304b2").css("visibility","visible");
    $("#304b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b2").css("visibility","hidden");
    $("#304b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b34b3()
{
  if ($("#304b3").css("visibility") == "hidden")
  {
    $("#304b3").css("visibility","visible");
    $("#304b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b3").css("visibility","hidden");
    $("#304b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b34b4()
{
  if ($("#304b4").css("visibility") == "hidden")
  {
    $("#304b4").css("visibility","visible");
    $("#304b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b4").css("visibility","hidden");
    $("#304b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function b34b5()
{
  if ($("#304b5").css("visibility") == "hidden")
  {
    $("#304b5").css("visibility","visible");
    $("#304b5").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b5").css("visibility","hidden");
    $("#304b5").css({ opacity: 1, "z-index": "-3" });
  }
}

function b34b6()
{
  if ($("#304b6").css("visibility") == "hidden")
  {
    $("#304b6").css("visibility","visible");
    $("#304b6").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b6").css("visibility","hidden");
    $("#304b6").css({ opacity: 1, "z-index": "-3" });
  }
}

function b34b7()
{
  if ($("#304b7").css("visibility") == "hidden")
  {
    $("#304b7").css("visibility","visible");
    $("#304b7").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#304b7").css("visibility","hidden");
    $("#304b7").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer34()
{
  var bn = 0;
  var tn = 0;
  var rn = 0;
  if ($('input[id="tv30401"]').val() !== "t" && $('input[id="tv30401"]').val() !== "T")
  {
    $('input[id="tv30401"]').css({ opacity: .5 });
    $("#tv30401e").css("visibility","visible");
  	$("#tv30401e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30401"]').css({ opacity: 1 });
    $("#tv30401e").css("visibility","hidden");
  }
  if ($('input[id="tv30402"]').val() !== "t" && $('input[id="tv30402"]').val() !== "T")
  {
    $('input[id="tv30402"]').css({ opacity: .5 });
    $("#tv30402e").css("visibility","visible");
  	$("#tv30402e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30402"]').css({ opacity: 1 });
    $("#tv30402e").css("visibility","hidden");
  }
  if ($('input[id="tv30403"]').val() !== "t" && $('input[id="tv30403"]').val() !== "T")
  {
    $('input[id="tv30403"]').css({ opacity: .5 });
    $("#tv30403e").css("visibility","visible");
  	$("#tv30403e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30403"]').css({ opacity: 1 });
    $("#tv30403e").css("visibility","hidden");
  }
  if ($('input[id="tv30404"]').val() !== "f" && $('input[id="tv30404"]').val() !== "F")
    {
    $('input[id="tv30404"]').css({ opacity: .5 });
    $("#tv30404e").css("visibility","visible");
  	$("#tv30404e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30404"]').css({ opacity: 1 });
    $("#tv30404e").css("visibility","hidden");
  }
  if ($('input[id="tv30405"]').val() !== "t" && $('input[id="tv30405"]').val() !== "T")
  {
    $('input[id="tv30405"]').css({ opacity: .5 });
    $("#tv30405e").css("visibility","visible");
  	$("#tv30405e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30405"]').css({ opacity: 1 });
    $("#tv30405e").css("visibility","hidden");
  }
  if ($('input[id="tv30406"]').val() !== "t" && $('input[id="tv30406"]').val() !== "T")
  {
    $('input[id="tv30406"]').css({ opacity: .5 });
    $("#tv30406e").css("visibility","visible");
  	$("#tv30406e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30406"]').css({ opacity: 1 });
    $("#tv30406e").css("visibility","hidden");
  }
  if ($('input[id="tv30407"]').val() !== "t" && $('input[id="tv30407"]').val() !== "T")
  {
    $('input[id="tv30407"]').css({ opacity: .5 });
    $("#tv30407e").css("visibility","visible");
  	$("#tv30407e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30407"]').css({ opacity: 1 });
    $("#tv30407e").css("visibility","hidden");
  }
  if ($('input[id="tv30408"]').val() !== "f" && $('input[id="tv30408"]').val() !== "F")
  {
    $('input[id="tv30408"]').css({ opacity: .5 });
    $("#tv30408e").css("visibility","visible");
  	$("#tv30408e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30408"]').css({ opacity: 1 });
    $("#tv30408e").css("visibility","hidden");
  }
  if ($('input[id="tv30409"]').val() !== "f" && $('input[id="tv30409"]').val() !== "F")
  {
    $('input[id="tv30409"]').css({ opacity: .5 });
    $("#tv30409e").css("visibility","visible");
  	$("#tv30409e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30409"]').css({ opacity: 1 });
    $("#tv30409e").css("visibility","hidden");
  }
  if ($('input[id="tv30410"]').val() !== "f" && $('input[id="tv30410"]').val() !== "F")
  {
    $('input[id="tv30410"]').css({ opacity: .5 });
    $("#tv30410e").css("visibility","visible");
  	$("#tv30410e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30410"]').css({ opacity: 1 });
    $("#tv30410e").css("visibility","hidden");
  }
  if ($('input[id="tv30411"]').val() !== "f" && $('input[id="tv30411"]').val() !== "F")
  {
    $('input[id="tv30411"]').css({ opacity: .5 });
    $("#tv30411e").css("visibility","visible");
  	$("#tv30411e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30411"]').css({ opacity: 1 });
    $("#tv30411e").css("visibility","hidden");
  }
  if ($('input[id="tv30412"]').val() !== "t" && $('input[id="tv30412"]').val() !== "T")
  {
    $('input[id="tv30412"]').css({ opacity: .5 });
    $("#tv30412e").css("visibility","visible");
  	$("#tv30412e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30412"]').css({ opacity: 1 });
    $("#tv30412e").css("visibility","hidden");
  }
  if ($('input[id="tv30413"]').val() !== "f" && $('input[id="tv30413"]').val() !== "F")
  {
    $('input[id="tv30413"]').css({ opacity: .5 });
    $("#tv30413e").css("visibility","visible");
  	$("#tv30413e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30413"]').css({ opacity: 1 });
    $("#tv30413e").css("visibility","hidden");
  }
  if ($('input[id="tv30414"]').val() !== "f" && $('input[id="tv30414"]').val() !== "F")
  {
    $('input[id="tv30414"]').css({ opacity: .5 });
    $("#tv30414e").css("visibility","visible");
  	$("#tv30414e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30414"]').css({ opacity: 1 });
    $("#tv30414e").css("visibility","hidden");
  }
  if ($('input[id="tv30415"]').val() !== "f" && $('input[id="tv30415"]').val() !== "F")
  {
    $('input[id="tv30415"]').css({ opacity: .5 });
    $("#tv30415e").css("visibility","visible");
  	$("#tv30415e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30415"]').css({ opacity: 1 });
    $("#tv30415e").css("visibility","hidden");
  }
  if ($('input[id="tv30416"]').val() !== "t" && $('input[id="tv30416"]').val() !== "T")
  {
    $('input[id="tv30416"]').css({ opacity: .5 });
    $("#tv30416e").css("visibility","visible");
  	$("#tv30416e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30416"]').css({ opacity: 1 });
    $("#tv30416e").css("visibility","hidden");
  }
  if ($('input[id="tv30417"]').val() !== "f" && $('input[id="tv30417"]').val() !== "F")
  {
    $('input[id="tv30417"]').css({ opacity: .5 });
    $("#tv30417e").css("visibility","visible");
  	$("#tv30417e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30417"]').css({ opacity: 1 });
    $("#tv30417e").css("visibility","hidden");
  }
  if ($('input[id="tv30418"]').val() !== "f" && $('input[id="tv30418"]').val() !== "F")
  {
    $('input[id="tv30418"]').css({ opacity: .5 });
    $("#tv30418e").css("visibility","visible");
  	$("#tv30418e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30418"]').css({ opacity: 1 });
    $("#tv30418e").css("visibility","hidden");
  }
  if ($('input[id="tv30419"]').val() !== "f" && $('input[id="tv30419"]').val() !== "F")
  {
    $('input[id="tv30419"]').css({ opacity: .5 });
    $("#tv30419e").css("visibility","visible");
  	$("#tv30419e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30419"]').css({ opacity: 1 });
    $("#tv30419e").css("visibility","hidden");
  }
  if ($('input[id="tv30420"]').val() !== "t" && $('input[id="tv30420"]').val() !== "T")
  {
    $('input[id="tv30420"]').css({ opacity: .5 });
    $("#tv30420e").css("visibility","visible");
  	$("#tv30420e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30420"]').css({ opacity: 1 });
    $("#tv30420e").css("visibility","hidden");
  }
  if ($('input[id="tv30421"]').val() !== "t" && $('input[id="tv30421"]').val() !== "T")
  {
    $('input[id="tv30421"]').css({ opacity: .5 });
    $("#tv30421e").css("visibility","visible");
  	$("#tv30421e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30421"]').css({ opacity: 1 });
    $("#tv30421e").css("visibility","hidden");
  }
  if ($('input[id="tv30422"]').val() !== "t" && $('input[id="tv30422"]').val() !== "T")
  {
    $('input[id="tv30422"]').css({ opacity: .5 });
    $("#tv30422e").css("visibility","visible");
  	$("#tv30422e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30422"]').css({ opacity: 1 });
    $("#tv30422e").css("visibility","hidden");
  }
  if ($('input[id="tv30423"]').val() !== "t" && $('input[id="tv30423"]').val() !== "T")
  {
    $('input[id="tv30423"]').css({ opacity: .5 });
    $("#tv30423e").css("visibility","visible");
  	$("#tv30423e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30423"]').css({ opacity: 1 });
    $("#tv30423e").css("visibility","hidden");
  }
  if ($('input[id="tv30424"]').val() !== "t" && $('input[id="tv30424"]').val() !== "T")
  {
    $('input[id="tv30424"]').css({ opacity: .5 });
    $("#tv30424e").css("visibility","visible");
  	$("#tv30424e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30424"]').css({ opacity: 1 });
    $("#tv30424e").css("visibility","hidden");
  }
  if ($('input[id="tv30425"]').val() !== "f" && $('input[id="tv30425"]').val() !== "F")
  {
    $('input[id="tv30425"]').css({ opacity: .5 });
    $("#tv30425e").css("visibility","visible");
  	$("#tv30425e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30425"]').css({ opacity: 1 });
    $("#tv30425e").css("visibility","hidden");
  }
  if ($('input[id="tv30426"]').val() !== "f" && $('input[id="tv30426"]').val() !== "F")
  {
    $('input[id="tv30426"]').css({ opacity: .5 });
    $("#tv30426e").css("visibility","visible");
  	$("#tv30426e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30426"]').css({ opacity: 1 });
    $("#tv30426e").css("visibility","hidden");
  }
  if ($('input[id="tv30427"]').val() !== "t" && $('input[id="tv30427"]').val() !== "T")
  {
    $('input[id="tv30427"]').css({ opacity: .5 });
    $("#tv30427e").css("visibility","visible");
  	$("#tv30427e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30427"]').css({ opacity: 1 });
    $("#tv30427e").css("visibility","hidden");
  }
  if ($('input[id="tv30428"]').val() !== "t" && $('input[id="tv30428"]').val() !== "T")
  {
    $('input[id="tv30428"]').css({ opacity: .5 });
    $("#tv30428e").css("visibility","visible");
  	$("#tv30428e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30428"]').css({ opacity: 1 });
    $("#tv30428e").css("visibility","hidden");
  }
  if ($('input[id="tv30429"]').val() !== "f" && $('input[id="tv30429"]').val() !== "F")
  {
    $('input[id="tv30429"]').css({ opacity: .5 });
    $("#tv30429e").css("visibility","visible");
  	$("#tv30429e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30429"]').css({ opacity: 1 });
    $("#tv30429e").css("visibility","hidden");
  }
  if ($('input[id="tv30430"]').val() !== "f" && $('input[id="tv30430"]').val() !== "F")
  {
    $('input[id="tv30430"]').css({ opacity: .5 });
    $("#tv30430e").css("visibility","visible");
  	$("#tv30430e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30430"]').css({ opacity: 1 });
    $("#tv30430e").css("visibility","hidden");
  }
  if ($('input[id="tv30431"]').val() !== "t" && $('input[id="tv30431"]').val() !== "T")
  {
    $('input[id="tv30431"]').css({ opacity: .5 });
    $("#tv30431e").css("visibility","visible");
  	$("#tv30431e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30431"]').css({ opacity: 1 });
    $("#tv30431e").css("visibility","hidden");
  }
  if ($('input[id="tv30432"]').val() !== "t" && $('input[id="tv30432"]').val() !== "T")
  {
    $('input[id="tv30432"]').css({ opacity: .5 });
    $("#tv30432e").css("visibility","visible");
  	$("#tv30432e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30432"]').css({ opacity: 1 });
    $("#tv30432e").css("visibility","hidden");
  }
  if ($('input[id="tv30433"]').val() !== "t" && $('input[id="tv30433"]').val() !== "T")
  {
    $('input[id="tv30433"]').css({ opacity: .5 });
    $("#tv30433e").css("visibility","visible");
  	$("#tv30433e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30433"]').css({ opacity: 1 });
    $("#tv30433e").css("visibility","hidden");
  }
  if ($('input[id="tv30434"]').val() !== "t" && $('input[id="tv30434"]').val() !== "T")
  {
    $('input[id="tv30434"]').css({ opacity: .5 });
    $("#tv30434e").css("visibility","visible");
  	$("#tv30434e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30434"]').css({ opacity: 1 });
    $("#tv30434e").css("visibility","hidden");
  }
  if ($('input[id="tv30435"]').val() !== "t" && $('input[id="tv30435"]').val() !== "T")
  {
    $('input[id="tv30435"]').css({ opacity: .5 });
    $("#tv30435e").css("visibility","visible");
  	$("#tv30435e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30435"]').css({ opacity: 1 });
    $("#tv30435e").css("visibility","hidden");
  }
  if ($('input[id="tv30436"]').val() !== "f" && $('input[id="tv30436"]').val() !== "F")
  {
    $('input[id="tv30436"]').css({ opacity: .5 });
    $("#tv30436e").css("visibility","visible");
  	$("#tv30436e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30436"]').css({ opacity: 1 });
    $("#tv30436e").css("visibility","hidden");
  }
  if ($('input[id="tv30437"]').val() !== "t" && $('input[id="tv30437"]').val() !== "T")
  {
    $('input[id="tv30437"]').css({ opacity: .5 });
    $("#tv30437e").css("visibility","visible");
  	$("#tv30437e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30437"]').css({ opacity: 1 });
    $("#tv30437e").css("visibility","hidden");
  }
  if ($('input[id="tv30438"]').val() !== "t" && $('input[id="tv30438"]').val() !== "T")
  {
    $('input[id="tv30438"]').css({ opacity: .5 });
    $("#tv30438e").css("visibility","visible");
  	$("#tv30438e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30438"]').css({ opacity: 1 });
    $("#tv30438e").css("visibility","hidden");
  }
  if ($('input[id="tv30439"]').val() !== "t" && $('input[id="tv30439"]').val() !== "T")
  {
    $('input[id="tv30439"]').css({ opacity: .5 });
    $("#tv30439e").css("visibility","visible");
  	$("#tv30439e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30439"]').css({ opacity: 1 });
    $("#tv30439e").css("visibility","hidden");
  }
  if ($('input[id="tv30440"]').val() !== "f" && $('input[id="tv30440"]').val() !== "F")
  {
    $('input[id="tv30440"]').css({ opacity: .5 });
    $("#tv30440e").css("visibility","visible");
  	$("#tv30440e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30440"]').css({ opacity: 1 });
    $("#tv30440e").css("visibility","hidden");
  }
  if ($('input[id="tv30441"]').val() !== "t" && $('input[id="tv30441"]').val() !== "T")
  {
    $('input[id="tv30441"]').css({ opacity: .5 });
    $("#tv30441e").css("visibility","visible");
  	$("#tv30441e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30441"]').css({ opacity: 1 });
    $("#tv30441e").css("visibility","hidden");
  }
  if ($('input[id="tv30442"]').val() !== "t" && $('input[id="tv30442"]').val() !== "T")
  {
    $('input[id="tv30442"]').css({ opacity: .5 });
    $("#tv30442e").css("visibility","visible");
  	$("#tv30442e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30442"]').css({ opacity: 1 });
    $("#tv30442e").css("visibility","hidden");
  }
  if ($('input[id="tv30443"]').val() !== "t" && $('input[id="tv30443"]').val() !== "T")
  {
    $('input[id="tv30443"]').css({ opacity: .5 });
    $("#tv30443e").css("visibility","visible");
  	$("#tv30443e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30443"]').css({ opacity: 1 });
    $("#tv30443e").css("visibility","hidden");
  }
  if ($('input[id="tv30444"]').val() !== "f" && $('input[id="tv30444"]').val() !== "F")
  {
    $('input[id="tv30444"]').css({ opacity: .5 });
    $("#tv30444e").css("visibility","visible");
  	$("#tv30444e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30444"]').css({ opacity: 1 });
    $("#tv30444e").css("visibility","hidden");
  }
  if ($('input[id="tv30445"]').val() !== "f" && $('input[id="tv30445"]').val() !== "F")
  {
    $('input[id="tv30445"]').css({ opacity: .5 });
    $("#tv30445e").css("visibility","visible");
  	$("#tv30445e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30445"]').css({ opacity: 1 });
    $("#tv30445e").css("visibility","hidden");
  }
  if ($('input[id="tv30446"]').val() !== "f" && $('input[id="tv30446"]').val() !== "F")
  {
    $('input[id="tv30446"]').css({ opacity: .5 });
    $("#tv30446e").css("visibility","visible");
  	$("#tv30446e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30446"]').css({ opacity: 1 });
    $("#tv30446e").css("visibility","hidden");
  }
  if ($('input[id="tv30447"]').val() !== "f" && $('input[id="tv30447"]').val() !== "F")
  {
    $('input[id="tv30447"]').css({ opacity: .5 });
    $("#tv30447e").css("visibility","visible");
  	$("#tv30447e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30447"]').css({ opacity: 1 });
    $("#tv30447e").css("visibility","hidden");
  }
if ($('input[id="tv30448"]').val() !== "f" && $('input[id="tv30448"]').val() !== "F")
  {
    $('input[id="tv30448"]').css({ opacity: .5 });
    $("#tv30448e").css("visibility","visible");
  	$("#tv30448e").css({ opacity: 0.5, "z-index": "-2" });
    $("#304ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30448"]').css({ opacity: 1 });
    $("#tv30448e").css("visibility","hidden");
  }
  if ($("#304b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#304b2").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#304b3").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if ($("#304b4").css("visibility") == "visible")
  {
    bn = bn + 7;
  }
  if ($("#304b5").css("visibility") == "visible")
  {
    bn = bn + 9;
  }
  if ($("#304b6").css("visibility") == "visible")
  {
    bn = bn + 11;
  }
  if (bn == 0 || bn == 1 || bn == 11)
  {
    $("#304mb").css("visibility","visible");
    $("#304mb").css({ opacity: 0.7 });
    $("#304wb").css("visibility","hidden");
    $("#304cts").css("visibility","hidden");
  } else if (bn == 12)
  {
    $("#304mb").css("visibility","hidden");
    $("#304wb").css("visibility","hidden");
      if (tn == 48)
      {
      $("#304cts").css("visibility","visible");
      $("#304cts").css({ opacity: 0.7 });
      } else
      {
      $("#304cts").css("visibility","hidden");
      $("#304cts").css({ opacity: 0.0 });
      }
  } else
  {
    // alert(bn);
    $("#304wb").css("visibility","visible");
    $("#304wb").css({ opacity: 0.7 });
    $("#304mb").css("visibility","hidden");
    $("#304cts").css("visibility","hidden");
  }
  if ($('input[id="304rle"]').is(":checked"))
  {
    rn = rn + 1;
  }
  if ($('input[id="304rct"]').is(":checked"))
  {
    rn = rn + 3;
  }
  if ($('input[id="304rcs"]').is(":checked"))
  {
    rn = rn + 5;
  }
  if ($('input[id="304ric"]').is(":checked"))
  {
    rn = rn + 7;
  }
  if (rn == 0)
  {
    $("#304wrs").css("visibility","visible");
    $("#304wrs").css({ opacity: 0.7 });
    $("#304omr").css("visibility","hidden");
    $("#304ers").css("visibility","hidden");
    $("#304crs").css("visibility","hidden");
  }
  else if (rn == 3)
  {
    $("#304omr").css("visibility","visible");
    $("#304omr").css({ opacity: 0.7 });
    $("#304wrs").css("visibility","hidden");
    $("#304ers").css("visibility","hidden");
    $("#304crs").css("visibility","hidden");
  }
  else if (rn == 7)
  {
    $("#304omr").css("visibility","visible");
    $("#304omr").css({ opacity: 0.7 });
    $("#304wrs").css("visibility","hidden");
    $("#304ers").css("visibility","hidden");
    $("#304crs").css("visibility","hidden");
  }
  else if (rn == 10)
    {
    $("#304wrs").css("visibility","hidden");
    $("#304omr").css("visibility","hidden");
    $("#304ers").css("visibility","hidden");
    $("#304crs").css("visibility","visible");
    $("#304crs").css({ opacity: 0.7 });
  } else
  {
    $("#304wrs").css("visibility","hidden");
    $("#304omr").css("visibility","hidden");
    $("#304ers").css("visibility","visible");
    $("#304ers").css({ opacity: 0.7 });
    $("#304crs").css("visibility","hidden");
  }
}
// Section 3 #5
function b35b1()
{
  if ($("#305b1").css("visibility") == "hidden")
  {
    $("#305b1").css("visibility","visible");
    $("#305b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b1").css("visibility","hidden");
    $("#305b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b35b2()
{
  if ($("#305b2").css("visibility") == "hidden")
  {
    $("#305b2").css("visibility","visible");
    $("#305b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b2").css("visibility","hidden");
    $("#305b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b35b3()
{
  if ($("#305b3").css("visibility") == "hidden")
  {
    $("#305b3").css("visibility","visible");
    $("#305b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b3").css("visibility","hidden");
    $("#305b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b35b4()
{
  if ($("#305b4").css("visibility") == "hidden")
  {
    $("#305b4").css("visibility","visible");
    $("#305b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b4").css("visibility","hidden");
    $("#305b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function b35b5()
{
  if ($("#305b5").css("visibility") == "hidden")
  {
    $("#305b5").css("visibility","visible");
    $("#305b5").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b5").css("visibility","hidden");
    $("#305b5").css({ opacity: 1, "z-index": "-3" });
  }
}

function b35b6()
{
  if ($("#305b6").css("visibility") == "hidden")
  {
    $("#305b6").css("visibility","visible");
    $("#305b6").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b6").css("visibility","hidden");
    $("#305b6").css({ opacity: 1, "z-index": "-3" });
  }
}

function b35b7()
{
  if ($("#305b7").css("visibility") == "hidden")
  {
    $("#305b7").css("visibility","visible");
    $("#305b7").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#305b7").css("visibility","hidden");
    $("#305b7").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer35()
{
  var bn = 0;
  var tn = 0;
  var rn = 0;
  if ($('input[id="tv30501"]').val() !== "t" && $('input[id="tv30501"]').val() !== "T")
  {
    $('input[id="tv30501"]').css({ opacity: .5 });
    $("#tv30501e").css("visibility","visible");
  	$("#tv30501e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30501"]').css({ opacity: 1 });
    $("#tv30501e").css("visibility","hidden");
  }
  if ($('input[id="tv30502"]').val() !== "t" && $('input[id="tv30502"]').val() !== "T")
  {
    $('input[id="tv30502"]').css({ opacity: .5 });
    $("#tv30502e").css("visibility","visible");
  	$("#tv30502e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30502"]').css({ opacity: 1 });
    $("#tv30502e").css("visibility","hidden");
  }
  if ($('input[id="tv30503"]').val() !== "f" && $('input[id="tv30503"]').val() !== "F")
  {
    $('input[id="tv30503"]').css({ opacity: .5 });
    $("#tv30503e").css("visibility","visible");
  	$("#tv30503e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30503"]').css({ opacity: 1 });
    $("#tv30503e").css("visibility","hidden");
  }
  if ($('input[id="tv30504"]').val() !== "f" && $('input[id="tv30504"]').val() !== "F")
    {
    $('input[id="tv30504"]').css({ opacity: .5 });
    $("#tv30504e").css("visibility","visible");
  	$("#tv30504e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30504"]').css({ opacity: 1 });
    $("#tv30504e").css("visibility","hidden");
  }
  if ($('input[id="tv30505"]').val() !== "t" && $('input[id="tv30505"]').val() !== "T")
  {
    $('input[id="tv30505"]').css({ opacity: .5 });
    $("#tv30505e").css("visibility","visible");
  	$("#tv30505e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30505"]').css({ opacity: 1 });
    $("#tv30505e").css("visibility","hidden");
  }
  if ($('input[id="tv30506"]').val() !== "t" && $('input[id="tv30506"]').val() !== "T")
  {
    $('input[id="tv30506"]').css({ opacity: .5 });
    $("#tv30506e").css("visibility","visible");
  	$("#tv30506e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30506"]').css({ opacity: 1 });
    $("#tv30506e").css("visibility","hidden");
  }
  if ($('input[id="tv30507"]').val() !== "t" && $('input[id="tv30507"]').val() !== "T")
  {
    $('input[id="tv30507"]').css({ opacity: .5 });
    $("#tv30507e").css("visibility","visible");
  	$("#tv30507e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30507"]').css({ opacity: 1 });
    $("#tv30507e").css("visibility","hidden");
  }
  if ($('input[id="tv30508"]').val() !== "t" && $('input[id="tv30508"]').val() !== "T")
  {
    $('input[id="tv30508"]').css({ opacity: .5 });
    $("#tv30508e").css("visibility","visible");
  	$("#tv30508e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30508"]').css({ opacity: 1 });
    $("#tv30508e").css("visibility","hidden");
  }
  if ($('input[id="tv30509"]').val() !== "f" && $('input[id="tv30509"]').val() !== "F")
  {
    $('input[id="tv30509"]').css({ opacity: .5 });
    $("#tv30509e").css("visibility","visible");
  	$("#tv30509e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30509"]').css({ opacity: 1 });
    $("#tv30509e").css("visibility","hidden");
  }
  if ($('input[id="tv30510"]').val() !== "t" && $('input[id="tv30510"]').val() !== "T")
  {
    $('input[id="tv30510"]').css({ opacity: .5 });
    $("#tv30510e").css("visibility","visible");
  	$("#tv30510e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30510"]').css({ opacity: 1 });
    $("#tv30510e").css("visibility","hidden");
  }
  if ($('input[id="tv30511"]').val() !== "f" && $('input[id="tv30511"]').val() !== "F")
  {
    $('input[id="tv30511"]').css({ opacity: .5 });
    $("#tv30511e").css("visibility","visible");
  	$("#tv30511e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30511"]').css({ opacity: 1 });
    $("#tv30511e").css("visibility","hidden");
  }
  if ($('input[id="tv30512"]').val() !== "t" && $('input[id="tv30512"]').val() !== "T")
  {
    $('input[id="tv30512"]').css({ opacity: .5 });
    $("#tv30512e").css("visibility","visible");
  	$("#tv30512e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30512"]').css({ opacity: 1 });
    $("#tv30512e").css("visibility","hidden");
  }
  if ($('input[id="tv30513"]').val() !== "f" && $('input[id="tv30513"]').val() !== "F")
  {
    $('input[id="tv30513"]').css({ opacity: .5 });
    $("#tv30513e").css("visibility","visible");
  	$("#tv30513e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30513"]').css({ opacity: 1 });
    $("#tv30513e").css("visibility","hidden");
  }
  if ($('input[id="tv30514"]').val() !== "t" && $('input[id="tv30514"]').val() !== "T")
  {
    $('input[id="tv30514"]').css({ opacity: .5 });
    $("#tv30514e").css("visibility","visible");
  	$("#tv30514e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30514"]').css({ opacity: 1 });
    $("#tv30514e").css("visibility","hidden");
  }
  if ($('input[id="tv30515"]').val() !== "f" && $('input[id="tv30515"]').val() !== "F")
  {
    $('input[id="tv30515"]').css({ opacity: .5 });
    $("#tv30515e").css("visibility","visible");
  	$("#tv30515e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30515"]').css({ opacity: 1 });
    $("#tv30515e").css("visibility","hidden");
  }
  if ($('input[id="tv30516"]').val() !== "t" && $('input[id="tv30516"]').val() !== "T")
  {
    $('input[id="tv30516"]').css({ opacity: .5 });
    $("#tv30516e").css("visibility","visible");
  	$("#tv30516e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30516"]').css({ opacity: 1 });
    $("#tv30516e").css("visibility","hidden");
  }
  if ($('input[id="tv30517"]').val() !== "f" && $('input[id="tv30517"]').val() !== "F")
  {
    $('input[id="tv30517"]').css({ opacity: .5 });
    $("#tv30517e").css("visibility","visible");
  	$("#tv30517e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30517"]').css({ opacity: 1 });
    $("#tv30517e").css("visibility","hidden");
  }
  if ($('input[id="tv30518"]').val() !== "t" && $('input[id="tv30518"]').val() !== "T")
  {
    $('input[id="tv30518"]').css({ opacity: .5 });
    $("#tv30518e").css("visibility","visible");
  	$("#tv30518e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30518"]').css({ opacity: 1 });
    $("#tv30518e").css("visibility","hidden");
  }
  if ($('input[id="tv30519"]').val() !== "f" && $('input[id="tv30519"]').val() !== "F")
  {
    $('input[id="tv30519"]').css({ opacity: .5 });
    $("#tv30519e").css("visibility","visible");
  	$("#tv30519e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30519"]').css({ opacity: 1 });
    $("#tv30519e").css("visibility","hidden");
  }
  if ($('input[id="tv30520"]').val() !== "f" && $('input[id="tv30520"]').val() !== "F")
  {
    $('input[id="tv30520"]').css({ opacity: .5 });
    $("#tv30520e").css("visibility","visible");
  	$("#tv30520e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30520"]').css({ opacity: 1 });
    $("#tv30520e").css("visibility","hidden");
  }
  if ($('input[id="tv30521"]').val() !== "f" && $('input[id="tv30521"]').val() !== "F")
  {
    $('input[id="tv30521"]').css({ opacity: .5 });
    $("#tv30521e").css("visibility","visible");
  	$("#tv30521e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30521"]').css({ opacity: 1 });
    $("#tv30521e").css("visibility","hidden");
  }
  if ($('input[id="tv30522"]').val() !== "t" && $('input[id="tv30522"]').val() !== "T")
  {
    $('input[id="tv30522"]').css({ opacity: .5 });
    $("#tv30522e").css("visibility","visible");
  	$("#tv30522e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30522"]').css({ opacity: 1 });
    $("#tv30522e").css("visibility","hidden");
  }
  if ($('input[id="tv30523"]').val() !== "f" && $('input[id="tv30523"]').val() !== "F")
  {
    $('input[id="tv30523"]').css({ opacity: .5 });
    $("#tv30523e").css("visibility","visible");
  	$("#tv30523e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30523"]').css({ opacity: 1 });
    $("#tv30523e").css("visibility","hidden");
  }
  if ($('input[id="tv30524"]').val() !== "t" && $('input[id="tv30524"]').val() !== "T")
  {
    $('input[id="tv30524"]').css({ opacity: .5 });
    $("#tv30524e").css("visibility","visible");
  	$("#tv30524e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30524"]').css({ opacity: 1 });
    $("#tv30524e").css("visibility","hidden");
  }
  if ($('input[id="tv30525"]').val() !== "t" && $('input[id="tv30525"]').val() !== "T")
  {
    $('input[id="tv30525"]').css({ opacity: .5 });
    $("#tv30525e").css("visibility","visible");
  	$("#tv30525e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30525"]').css({ opacity: 1 });
    $("#tv30525e").css("visibility","hidden");
  }
  if ($('input[id="tv30526"]').val() !== "f" && $('input[id="tv30526"]').val() !== "F")
  {
    $('input[id="tv30526"]').css({ opacity: .5 });
    $("#tv30526e").css("visibility","visible");
  	$("#tv30526e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30526"]').css({ opacity: 1 });
    $("#tv30526e").css("visibility","hidden");
  }
  if ($('input[id="tv30527"]').val() !== "t" && $('input[id="tv30527"]').val() !== "T")
  {
    $('input[id="tv30527"]').css({ opacity: .5 });
    $("#tv30527e").css("visibility","visible");
  	$("#tv30527e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30527"]').css({ opacity: 1 });
    $("#tv30527e").css("visibility","hidden");
  }
  if ($('input[id="tv30528"]').val() !== "t" && $('input[id="tv30528"]').val() !== "T")
  {
    $('input[id="tv30528"]').css({ opacity: .5 });
    $("#tv30528e").css("visibility","visible");
  	$("#tv30528e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30528"]').css({ opacity: 1 });
    $("#tv30528e").css("visibility","hidden");
  }
  if ($('input[id="tv30529"]').val() !== "t" && $('input[id="tv30529"]').val() !== "T")
  {
    $('input[id="tv30529"]').css({ opacity: .5 });
    $("#tv30529e").css("visibility","visible");
  	$("#tv30529e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30529"]').css({ opacity: 1 });
    $("#tv30529e").css("visibility","hidden");
  }
  if ($('input[id="tv30530"]').val() !== "f" && $('input[id="tv30530"]').val() !== "F")
  {
    $('input[id="tv30530"]').css({ opacity: .5 });
    $("#tv30530e").css("visibility","visible");
  	$("#tv30530e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30530"]').css({ opacity: 1 });
    $("#tv30530e").css("visibility","hidden");
  }
  if ($('input[id="tv30531"]').val() !== "t" && $('input[id="tv30531"]').val() !== "T")
  {
    $('input[id="tv30531"]').css({ opacity: .5 });
    $("#tv30531e").css("visibility","visible");
  	$("#tv30531e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30531"]').css({ opacity: 1 });
    $("#tv30531e").css("visibility","hidden");
  }
  if ($('input[id="tv30532"]').val() !== "f" && $('input[id="tv30532"]').val() !== "F")
  {
    $('input[id="tv30532"]').css({ opacity: .5 });
    $("#tv30532e").css("visibility","visible");
  	$("#tv30532e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30532"]').css({ opacity: 1 });
    $("#tv30532e").css("visibility","hidden");
  }
  if ($('input[id="tv30533"]').val() !== "f" && $('input[id="tv30533"]').val() !== "F")
  {
    $('input[id="tv30533"]').css({ opacity: .5 });
    $("#tv30533e").css("visibility","visible");
  	$("#tv30533e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30533"]').css({ opacity: 1 });
    $("#tv30533e").css("visibility","hidden");
  }
  if ($('input[id="tv30534"]').val() !== "f" && $('input[id="tv30534"]').val() !== "F")
  {
    $('input[id="tv30534"]').css({ opacity: .5 });
    $("#tv30534e").css("visibility","visible");
  	$("#tv30534e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30534"]').css({ opacity: 1 });
    $("#tv30534e").css("visibility","hidden");
  }
  if ($('input[id="tv30535"]').val() !== "t" && $('input[id="tv30535"]').val() !== "T")
  {
    $('input[id="tv30535"]').css({ opacity: .5 });
    $("#tv30535e").css("visibility","visible");
  	$("#tv30535e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30535"]').css({ opacity: 1 });
    $("#tv30535e").css("visibility","hidden");
  }
  if ($('input[id="tv30536"]').val() !== "t" && $('input[id="tv30536"]').val() !== "T")
  {
    $('input[id="tv30536"]').css({ opacity: .5 });
    $("#tv30536e").css("visibility","visible");
  	$("#tv30536e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30536"]').css({ opacity: 1 });
    $("#tv30536e").css("visibility","hidden");
  }
  if ($('input[id="tv30537"]').val() !== "f" && $('input[id="tv30537"]').val() !== "F")
  {
    $('input[id="tv30537"]').css({ opacity: .5 });
    $("#tv30537e").css("visibility","visible");
  	$("#tv30537e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30537"]').css({ opacity: 1 });
    $("#tv30537e").css("visibility","hidden");
  }
  if ($('input[id="tv30538"]').val() !== "f" && $('input[id="tv30538"]').val() !== "F")
  {
    $('input[id="tv30538"]').css({ opacity: .5 });
    $("#tv30538e").css("visibility","visible");
  	$("#tv30538e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30538"]').css({ opacity: 1 });
    $("#tv30538e").css("visibility","hidden");
  }
  if ($('input[id="tv30539"]').val() !== "t" && $('input[id="tv30539"]').val() !== "T")
  {
    $('input[id="tv30539"]').css({ opacity: .5 });
    $("#tv30539e").css("visibility","visible");
  	$("#tv30539e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30539"]').css({ opacity: 1 });
    $("#tv30539e").css("visibility","hidden");
  }
  if ($('input[id="tv30540"]').val() !== "t" && $('input[id="tv30540"]').val() !== "T")
  {
    $('input[id="tv30540"]').css({ opacity: .5 });
    $("#tv30540e").css("visibility","visible");
  	$("#tv30540e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30540"]').css({ opacity: 1 });
    $("#tv30540e").css("visibility","hidden");
  }
  if ($('input[id="tv30541"]').val() !== "f" && $('input[id="tv30541"]').val() !== "F")
  {
    $('input[id="tv30541"]').css({ opacity: .5 });
    $("#tv30541e").css("visibility","visible");
  	$("#tv30541e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30541"]').css({ opacity: 1 });
    $("#tv30541e").css("visibility","hidden");
  }
  if ($('input[id="tv30542"]').val() !== "f" && $('input[id="tv30542"]').val() !== "F")
  {
    $('input[id="tv30542"]').css({ opacity: .5 });
    $("#tv30542e").css("visibility","visible");
  	$("#tv30542e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30542"]').css({ opacity: 1 });
    $("#tv30542e").css("visibility","hidden");
  }
  if ($('input[id="tv30543"]').val() !== "t" && $('input[id="tv30543"]').val() !== "T")
  {
    $('input[id="tv30543"]').css({ opacity: .5 });
    $("#tv30543e").css("visibility","visible");
  	$("#tv30543e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30543"]').css({ opacity: 1 });
    $("#tv30543e").css("visibility","hidden");
  }
  if ($('input[id="tv30544"]').val() !== "t" && $('input[id="tv30544"]').val() !== "T")
  {
    $('input[id="tv30544"]').css({ opacity: .5 });
    $("#tv30544e").css("visibility","visible");
  	$("#tv30544e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30544"]').css({ opacity: 1 });
    $("#tv30544e").css("visibility","hidden");
  }
  if ($('input[id="tv30545"]').val() !== "f" && $('input[id="tv30545"]').val() !== "F")
  {
    $('input[id="tv30545"]').css({ opacity: .5 });
    $("#tv30545e").css("visibility","visible");
  	$("#tv30545e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30545"]').css({ opacity: 1 });
    $("#tv30545e").css("visibility","hidden");
  }
  if ($('input[id="tv30546"]').val() !== "f" && $('input[id="tv30546"]').val() !== "F")
  {
    $('input[id="tv30546"]').css({ opacity: .5 });
    $("#tv30546e").css("visibility","visible");
  	$("#tv30546e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30546"]').css({ opacity: 1 });
    $("#tv30546e").css("visibility","hidden");
  }
  if ($('input[id="tv30547"]').val() !== "f" && $('input[id="tv30547"]').val() !== "F")
  {
    $('input[id="tv30547"]').css({ opacity: .5 });
    $("#tv30547e").css("visibility","visible");
  	$("#tv30547e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30547"]').css({ opacity: 1 });
    $("#tv30547e").css("visibility","hidden");
  }
if ($('input[id="tv30548"]').val() !== "f" && $('input[id="tv30548"]').val() !== "F")
  {
    $('input[id="tv30548"]').css({ opacity: .5 });
    $("#tv30548e").css("visibility","visible");
  	$("#tv30548e").css({ opacity: 0.5, "z-index": "-2" });
    $("#305ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30548"]').css({ opacity: 1 });
    $("#tv30548e").css("visibility","hidden");
  }
  if ($('input[id="tv30549"]').val() !== "t" && $('input[id="tv30549"]').val() !== "T")
    {
      $('input[id="tv30549"]').css({ opacity: .5 });
      $("#tv30549e").css("visibility","visible");
      $("#tv30549e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30549"]').css({ opacity: 1 });
      $("#tv30549e").css("visibility","hidden");
    }
  if ($('input[id="tv30550"]').val() !== "f" && $('input[id="tv30550"]').val() !== "F")
    {
      $('input[id="tv30550"]').css({ opacity: .5 });
      $("#tv30550e").css("visibility","visible");
      $("#tv30550e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30550"]').css({ opacity: 1 });
      $("#tv30550e").css("visibility","hidden");
    }
  if ($('input[id="tv30551"]').val() !== "t" && $('input[id="tv30551"]').val() !== "T")
    {
      $('input[id="tv30551"]').css({ opacity: .5 });
      $("#tv30551e").css("visibility","visible");
      $("#tv30551e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30551"]').css({ opacity: 1 });
      $("#tv30551e").css("visibility","hidden");
    }
  if ($('input[id="tv30552"]').val() !== "t" && $('input[id="tv30552"]').val() !== "T")
    {
      $('input[id="tv30552"]').css({ opacity: .5 });
      $("#tv30552e").css("visibility","visible");
      $("#tv30552e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30552"]').css({ opacity: 1 });
      $("#tv30552e").css("visibility","hidden");
    }
  if ($('input[id="tv30553"]').val() !== "t" && $('input[id="tv30553"]').val() !== "T")
    {
      $('input[id="tv30553"]').css({ opacity: .5 });
      $("#tv30553e").css("visibility","visible");
      $("#tv30553e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30553"]').css({ opacity: 1 });
      $("#tv30553e").css("visibility","hidden");
    }
  if ($('input[id="tv30554"]').val() !== "f" && $('input[id="tv30554"]').val() !== "F")
    {
      $('input[id="tv30554"]').css({ opacity: .5 });
      $("#tv30554e").css("visibility","visible");
      $("#tv30554e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30554"]').css({ opacity: 1 });
      $("#tv30554e").css("visibility","hidden");
    }
  if ($('input[id="tv30555"]').val() !== "t" && $('input[id="tv30555"]').val() !== "T")
    {
      $('input[id="tv30555"]').css({ opacity: .5 });
      $("#tv30555e").css("visibility","visible");
      $("#tv30555e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30555"]').css({ opacity: 1 });
      $("#tv30555e").css("visibility","hidden");
    }
  if ($('input[id="tv30556"]').val() !== "f" && $('input[id="tv30556"]').val() !== "F")
    {
      $('input[id="tv30556"]').css({ opacity: .5 });
      $("#tv30556e").css("visibility","visible");
      $("#tv30556e").css({ opacity: 0.5, "z-index": "-2" });
      $("#305ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30556"]').css({ opacity: 1 });
      $("#tv30556e").css("visibility","hidden");
    }
  if ($("#305b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#305b2").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#305b3").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if ($("#305b4").css("visibility") == "visible")
  {
    bn = bn + 7;
  }
  if ($("#305b5").css("visibility") == "visible")
  {
    bn = bn + 9;
  }
  if ($("#305b6").css("visibility") == "visible")
  {
    bn = bn + 11;
  }
  if ($("#305b7").css("visibility") == "visible")
  {
    bn = bn + 13;
  }
  if (bn == 0 || bn == 1 || bn == 9)
  {
    $("#305mb").css("visibility","visible");
    $("#305mb").css({ opacity: 0.7 });
    $("#305wb").css("visibility","hidden");
    $("#305cts").css("visibility","hidden");
  } else if (bn == 10)
  {
    $("#305mb").css("visibility","hidden");
    $("#305wb").css("visibility","hidden");
      if (tn == 56)
      {
      $("#305cts").css("visibility","visible");
      $("#305cts").css({ opacity: 0.7 });
      } else
      {
      $("#305cts").css("visibility","hidden");
      $("#305cts").css({ opacity: 0.0 });
      }
  } else
  {
    // alert(bn);
    $("#305wb").css("visibility","visible");
    $("#305wb").css({ opacity: 0.7 });
    $("#305mb").css("visibility","hidden");
    $("#305cts").css("visibility","hidden");
  }
  if ($('input[id="305rle"]').is(":checked"))
  {
    rn = rn + 1;
  }
  if ($('input[id="305rct"]').is(":checked"))
  {
    rn = rn + 3;
  }
  if ($('input[id="305rcs"]').is(":checked"))
  {
    rn = rn + 5;
  }
  if ($('input[id="305ric"]').is(":checked"))
  {
    rn = rn + 7;
  }
  if (rn == 0)
  {
    $("#305wrs").css("visibility","visible");
    $("#305wrs").css({ opacity: 0.7 });
    $("#305omr").css("visibility","hidden");
    $("#305ers").css("visibility","hidden");
    $("#305crs").css("visibility","hidden");
  }
  else if (rn == 1)
  {
    $("#305omr").css("visibility","visible");
    $("#305omr").css({ opacity: 0.7 });
    $("#305wrs").css("visibility","hidden");
    $("#305ers").css("visibility","hidden");
    $("#305crs").css("visibility","hidden");
  }
  else if (rn == 5)
  {
    $("#305omr").css("visibility","visible");
    $("#305omr").css({ opacity: 0.7 });
    $("#305wrs").css("visibility","hidden");
    $("#305ers").css("visibility","hidden");
    $("#305crs").css("visibility","hidden");
  }
  else if (rn == 6)
    {
    $("#305wrs").css("visibility","hidden");
    $("#305omr").css("visibility","hidden");
    $("#305ers").css("visibility","hidden");
    $("#305crs").css("visibility","visible");
    $("#305crs").css({ opacity: 0.7 });
  } else
  {
    $("#305wrs").css("visibility","hidden");
    $("#305omr").css("visibility","hidden");
    $("#305ers").css("visibility","visible");
    $("#305ers").css({ opacity: 0.7 });
    $("#305crs").css("visibility","hidden");
  }
}
// Section 3 #6
function b36b1()
{
  if ($("#306b1").css("visibility") == "hidden")
  {
    $("#306b1").css("visibility","visible");
    $("#306b1").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b1").css("visibility","hidden");
    $("#306b1").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b2()
{
  if ($("#306b2").css("visibility") == "hidden")
  {
    $("#306b2").css("visibility","visible");
    $("#306b2").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b2").css("visibility","hidden");
    $("#306b2").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b3()
{
  if ($("#306b3").css("visibility") == "hidden")
  {
    $("#306b3").css("visibility","visible");
    $("#306b3").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b3").css("visibility","hidden");
    $("#306b3").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b4()
{
  if ($("#306b4").css("visibility") == "hidden")
  {
    $("#306b4").css("visibility","visible");
    $("#306b4").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b4").css("visibility","hidden");
    $("#306b4").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b5()
{
  if ($("#306b5").css("visibility") == "hidden")
  {
    $("#306b5").css("visibility","visible");
    $("#306b5").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b5").css("visibility","hidden");
    $("#306b5").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b6()
{
  if ($("#306b6").css("visibility") == "hidden")
  {
    $("#306b6").css("visibility","visible");
    $("#306b6").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b6").css("visibility","hidden");
    $("#306b6").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b7()
{
  if ($("#306b7").css("visibility") == "hidden")
  {
    $("#306b7").css("visibility","visible");
    $("#306b7").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b7").css("visibility","hidden");
    $("#306b7").css({ opacity: 1, "z-index": "-3" });
  }
}

function b36b8()
{
  if ($("#306b8").css("visibility") == "hidden")
  {
    $("#306b8").css("visibility","visible");
    $("#306b8").css({ opacity: 1, "z-index": "-1" });
  } else
  {
    $("#306b8").css("visibility","hidden");
    $("#306b8").css({ opacity: 1, "z-index": "-3" });
  }
}

function checkanswer36()
{
  var bn = 0;
  var tn = 0;
  var rn = 0;
  if ($('input[id="tv30601"]').val() !== "t" && $('input[id="tv30601"]').val() !== "T")
  {
    $('input[id="tv30601"]').css({ opacity: .5 });
    $("#tv30601e").css("visibility","visible");
  	$("#tv30601e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30601"]').css({ opacity: 1 });
    $("#tv30601e").css("visibility","hidden");
  }
  if ($('input[id="tv30602"]').val() !== "f" && $('input[id="tv30602"]').val() !== "F")
  {
    $('input[id="tv30602"]').css({ opacity: .5 });
    $("#tv30602e").css("visibility","visible");
  	$("#tv30602e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30602"]').css({ opacity: 1 });
    $("#tv30602e").css("visibility","hidden");
  }
  if ($('input[id="tv30603"]').val() !== "f" && $('input[id="tv30603"]').val() !== "F")
  {
    $('input[id="tv30603"]').css({ opacity: .5 });
    $("#tv30603e").css("visibility","visible");
  	$("#tv30603e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30603"]').css({ opacity: 1 });
    $("#tv30603e").css("visibility","hidden");
  }
  if ($('input[id="tv30604"]').val() !== "f" && $('input[id="tv30604"]').val() !== "F")
    {
    $('input[id="tv30604"]').css({ opacity: .5 });
    $("#tv30604e").css("visibility","visible");
  	$("#tv30604e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30604"]').css({ opacity: 1 });
    $("#tv30604e").css("visibility","hidden");
  }
  if ($('input[id="tv30605"]').val() !== "t" && $('input[id="tv30605"]').val() !== "T")
  {
    $('input[id="tv30605"]').css({ opacity: .5 });
    $("#tv30605e").css("visibility","visible");
  	$("#tv30605e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30605"]').css({ opacity: 1 });
    $("#tv30605e").css("visibility","hidden");
  }
  if ($('input[id="tv30606"]').val() !== "f" && $('input[id="tv30606"]').val() !== "F")
  {
    $('input[id="tv30606"]').css({ opacity: .5 });
    $("#tv30606e").css("visibility","visible");
  	$("#tv30606e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30606"]').css({ opacity: 1 });
    $("#tv30606e").css("visibility","hidden");
  }
  if ($('input[id="tv30607"]').val() !== "f" && $('input[id="tv30607"]').val() !== "F")
  {
    $('input[id="tv30607"]').css({ opacity: .5 });
    $("#tv30607e").css("visibility","visible");
  	$("#tv30607e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30607"]').css({ opacity: 1 });
    $("#tv30607e").css("visibility","hidden");
  }
  if ($('input[id="tv30608"]').val() !== "f" && $('input[id="tv30608"]').val() !== "F")
  {
    $('input[id="tv30608"]').css({ opacity: .5 });
    $("#tv30608e").css("visibility","visible");
  	$("#tv30608e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30608"]').css({ opacity: 1 });
    $("#tv30608e").css("visibility","hidden");
  }
  if ($('input[id="tv30609"]').val() !== "f" && $('input[id="tv30609"]').val() !== "F")
  {
    $('input[id="tv30609"]').css({ opacity: .5 });
    $("#tv30609e").css("visibility","visible");
  	$("#tv30609e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30609"]').css({ opacity: 1 });
    $("#tv30609e").css("visibility","hidden");
  }
  if ($('input[id="tv30610"]').val() !== "t" && $('input[id="tv30610"]').val() !== "T")
  {
    $('input[id="tv30610"]').css({ opacity: .5 });
    $("#tv30610e").css("visibility","visible");
  	$("#tv30610e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30610"]').css({ opacity: 1 });
    $("#tv30610e").css("visibility","hidden");
  }
  if ($('input[id="tv30611"]').val() !== "t" && $('input[id="tv30611"]').val() !== "T")
  {
    $('input[id="tv30611"]').css({ opacity: .5 });
    $("#tv30611e").css("visibility","visible");
  	$("#tv30611e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30611"]').css({ opacity: 1 });
    $("#tv30611e").css("visibility","hidden");
  }
  if ($('input[id="tv30612"]').val() !== "t" && $('input[id="tv30612"]').val() !== "T")
  {
    $('input[id="tv30612"]').css({ opacity: .5 });
    $("#tv30612e").css("visibility","visible");
  	$("#tv30612e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30612"]').css({ opacity: 1 });
    $("#tv30612e").css("visibility","hidden");
  }
  if ($('input[id="tv30613"]').val() !== "f" && $('input[id="tv30613"]').val() !== "F")
  {
    $('input[id="tv30613"]').css({ opacity: .5 });
    $("#tv30613e").css("visibility","visible");
  	$("#tv30613e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30613"]').css({ opacity: 1 });
    $("#tv30613e").css("visibility","hidden");
  }
  if ($('input[id="tv30614"]').val() !== "t" && $('input[id="tv30614"]').val() !== "T")
  {
    $('input[id="tv30614"]').css({ opacity: .5 });
    $("#tv30614e").css("visibility","visible");
  	$("#tv30614e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30614"]').css({ opacity: 1 });
    $("#tv30614e").css("visibility","hidden");
  }
  if ($('input[id="tv30615"]').val() !== "t" && $('input[id="tv30615"]').val() !== "T")
  {
    $('input[id="tv30615"]').css({ opacity: .5 });
    $("#tv30615e").css("visibility","visible");
  	$("#tv30615e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30615"]').css({ opacity: 1 });
    $("#tv30615e").css("visibility","hidden");
  }
  if ($('input[id="tv30616"]').val() !== "t" && $('input[id="tv30616"]').val() !== "T")
  {
    $('input[id="tv30616"]').css({ opacity: .5 });
    $("#tv30616e").css("visibility","visible");
  	$("#tv30616e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30616"]').css({ opacity: 1 });
    $("#tv30616e").css("visibility","hidden");
  }
  if ($('input[id="tv30617"]').val() !== "t" && $('input[id="tv30617"]').val() !== "T")
  {
    $('input[id="tv30617"]').css({ opacity: .5 });
    $("#tv30617e").css("visibility","visible");
  	$("#tv30617e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30617"]').css({ opacity: 1 });
    $("#tv30617e").css("visibility","hidden");
  }
  if ($('input[id="tv30618"]').val() !== "t" && $('input[id="tv30618"]').val() !== "T")
  {
    $('input[id="tv30618"]').css({ opacity: .5 });
    $("#tv30618e").css("visibility","visible");
  	$("#tv30618e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30618"]').css({ opacity: 1 });
    $("#tv30618e").css("visibility","hidden");
  }
  if ($('input[id="tv30619"]').val() !== "t" && $('input[id="tv30619"]').val() !== "T")
  {
    $('input[id="tv30619"]').css({ opacity: .5 });
    $("#tv30619e").css("visibility","visible");
  	$("#tv30619e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30619"]').css({ opacity: 1 });
    $("#tv30619e").css("visibility","hidden");
  }
  if ($('input[id="tv30620"]').val() !== "t" && $('input[id="tv30620"]').val() !== "T")
  {
    $('input[id="tv30620"]').css({ opacity: .5 });
    $("#tv30620e").css("visibility","visible");
  	$("#tv30620e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30620"]').css({ opacity: 1 });
    $("#tv30620e").css("visibility","hidden");
  }
  if ($('input[id="tv30621"]').val() !== "f" && $('input[id="tv30621"]').val() !== "F")
  {
    $('input[id="tv30621"]').css({ opacity: .5 });
    $("#tv30621e").css("visibility","visible");
  	$("#tv30621e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30621"]').css({ opacity: 1 });
    $("#tv30621e").css("visibility","hidden");
  }
  if ($('input[id="tv30622"]').val() !== "t" && $('input[id="tv30622"]').val() !== "T")
  {
    $('input[id="tv30622"]').css({ opacity: .5 });
    $("#tv30622e").css("visibility","visible");
  	$("#tv30622e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30622"]').css({ opacity: 1 });
    $("#tv30622e").css("visibility","hidden");
  }
  if ($('input[id="tv30623"]').val() !== "t" && $('input[id="tv30623"]').val() !== "T")
  {
    $('input[id="tv30623"]').css({ opacity: .5 });
    $("#tv30623e").css("visibility","visible");
  	$("#tv30623e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30623"]').css({ opacity: 1 });
    $("#tv30623e").css("visibility","hidden");
  }
  if ($('input[id="tv30624"]').val() !== "t" && $('input[id="tv30624"]').val() !== "T")
  {
    $('input[id="tv30624"]').css({ opacity: .5 });
    $("#tv30624e").css("visibility","visible");
  	$("#tv30624e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30624"]').css({ opacity: 1 });
    $("#tv30624e").css("visibility","hidden");
  }
  if ($('input[id="tv30625"]').val() !== "f" && $('input[id="tv30625"]').val() !== "F")
  {
    $('input[id="tv30625"]').css({ opacity: .5 });
    $("#tv30625e").css("visibility","visible");
  	$("#tv30625e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30625"]').css({ opacity: 1 });
    $("#tv30625e").css("visibility","hidden");
  }
  if ($('input[id="tv30626"]').val() !== "f" && $('input[id="tv30626"]').val() !== "F")
  {
    $('input[id="tv30626"]').css({ opacity: .5 });
    $("#tv30626e").css("visibility","visible");
  	$("#tv30626e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30626"]').css({ opacity: 1 });
    $("#tv30626e").css("visibility","hidden");
  }
  if ($('input[id="tv30627"]').val() !== "f" && $('input[id="tv30627"]').val() !== "F")
  {
    $('input[id="tv30627"]').css({ opacity: .5 });
    $("#tv30627e").css("visibility","visible");
  	$("#tv30627e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30627"]').css({ opacity: 1 });
    $("#tv30627e").css("visibility","hidden");
  }
  if ($('input[id="tv30628"]').val() !== "f" && $('input[id="tv30628"]').val() !== "F")
  {
    $('input[id="tv30628"]').css({ opacity: .5 });
    $("#tv30628e").css("visibility","visible");
  	$("#tv30628e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30628"]').css({ opacity: 1 });
    $("#tv30628e").css("visibility","hidden");
  }
  if ($('input[id="tv30629"]').val() !== "t" && $('input[id="tv30629"]').val() !== "T")
  {
    $('input[id="tv30629"]').css({ opacity: .5 });
    $("#tv30629e").css("visibility","visible");
  	$("#tv30629e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30629"]').css({ opacity: 1 });
    $("#tv30629e").css("visibility","hidden");
  }
  if ($('input[id="tv30630"]').val() !== "f" && $('input[id="tv30630"]').val() !== "F")
  {
    $('input[id="tv30630"]').css({ opacity: .5 });
    $("#tv30630e").css("visibility","visible");
  	$("#tv30630e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30630"]').css({ opacity: 1 });
    $("#tv30630e").css("visibility","hidden");
  }
  if ($('input[id="tv30631"]').val() !== "f" && $('input[id="tv30631"]').val() !== "F")
  {
    $('input[id="tv30631"]').css({ opacity: .5 });
    $("#tv30631e").css("visibility","visible");
  	$("#tv30631e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30631"]').css({ opacity: 1 });
    $("#tv30631e").css("visibility","hidden");
  }
  if ($('input[id="tv30632"]').val() !== "f" && $('input[id="tv30632"]').val() !== "F")
  {
    $('input[id="tv30632"]').css({ opacity: .5 });
    $("#tv30632e").css("visibility","visible");
  	$("#tv30632e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30632"]').css({ opacity: 1 });
    $("#tv30632e").css("visibility","hidden");
  }
  if ($('input[id="tv30633"]').val() !== "f" && $('input[id="tv30633"]').val() !== "F")
  {
    $('input[id="tv30633"]').css({ opacity: .5 });
    $("#tv30633e").css("visibility","visible");
  	$("#tv30633e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30633"]').css({ opacity: 1 });
    $("#tv30633e").css("visibility","hidden");
  }
  if ($('input[id="tv30634"]').val() !== "t" && $('input[id="tv30634"]').val() !== "T")
  {
    $('input[id="tv30634"]').css({ opacity: .5 });
    $("#tv30634e").css("visibility","visible");
  	$("#tv30634e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30634"]').css({ opacity: 1 });
    $("#tv30634e").css("visibility","hidden");
  }
  if ($('input[id="tv30635"]').val() !== "f" && $('input[id="tv30635"]').val() !== "F")
  {
    $('input[id="tv30635"]').css({ opacity: .5 });
    $("#tv30635e").css("visibility","visible");
  	$("#tv30635e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30635"]').css({ opacity: 1 });
    $("#tv30635e").css("visibility","hidden");
  }
  if ($('input[id="tv30636"]').val() !== "t" && $('input[id="tv30636"]').val() !== "T")
  {
    $('input[id="tv30636"]').css({ opacity: .5 });
    $("#tv30636e").css("visibility","visible");
  	$("#tv30636e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30636"]').css({ opacity: 1 });
    $("#tv30636e").css("visibility","hidden");
  }
  if ($('input[id="tv30637"]').val() !== "f" && $('input[id="tv30637"]').val() !== "F")
  {
    $('input[id="tv30637"]').css({ opacity: .5 });
    $("#tv30637e").css("visibility","visible");
  	$("#tv30637e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30637"]').css({ opacity: 1 });
    $("#tv30637e").css("visibility","hidden");
  }
  if ($('input[id="tv30638"]').val() !== "t" && $('input[id="tv30638"]').val() !== "T")
  {
    $('input[id="tv30638"]').css({ opacity: .5 });
    $("#tv30638e").css("visibility","visible");
  	$("#tv30638e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30638"]').css({ opacity: 1 });
    $("#tv30638e").css("visibility","hidden");
  }
  if ($('input[id="tv30639"]').val() !== "f" && $('input[id="tv30639"]').val() !== "F")
  {
    $('input[id="tv30639"]').css({ opacity: .5 });
    $("#tv30639e").css("visibility","visible");
  	$("#tv30639e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30639"]').css({ opacity: 1 });
    $("#tv30639e").css("visibility","hidden");
  }
  if ($('input[id="tv30640"]').val() !== "t" && $('input[id="tv30640"]').val() !== "T")
  {
    $('input[id="tv30640"]').css({ opacity: .5 });
    $("#tv30640e").css("visibility","visible");
  	$("#tv30640e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30640"]').css({ opacity: 1 });
    $("#tv30640e").css("visibility","hidden");
  }
  if ($('input[id="tv30641"]').val() !== "f" && $('input[id="tv30641"]').val() !== "F")
  {
    $('input[id="tv30641"]').css({ opacity: .5 });
    $("#tv30641e").css("visibility","visible");
  	$("#tv30641e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30641"]').css({ opacity: 1 });
    $("#tv30641e").css("visibility","hidden");
  }
  if ($('input[id="tv30642"]').val() !== "t" && $('input[id="tv30642"]').val() !== "T")
  {
    $('input[id="tv30642"]').css({ opacity: .5 });
    $("#tv30642e").css("visibility","visible");
  	$("#tv30642e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30642"]').css({ opacity: 1 });
    $("#tv30642e").css("visibility","hidden");
  }
  if ($('input[id="tv30643"]').val() !== "f" && $('input[id="tv30643"]').val() !== "F")
  {
    $('input[id="tv30643"]').css({ opacity: .5 });
    $("#tv30643e").css("visibility","visible");
  	$("#tv30643e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30643"]').css({ opacity: 1 });
    $("#tv30643e").css("visibility","hidden");
  }
  if ($('input[id="tv30644"]').val() !== "f" && $('input[id="tv30644"]').val() !== "F")
  {
    $('input[id="tv30644"]').css({ opacity: .5 });
    $("#tv30644e").css("visibility","visible");
  	$("#tv30644e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30644"]').css({ opacity: 1 });
    $("#tv30644e").css("visibility","hidden");
  }
  if ($('input[id="tv30645"]').val() !== "f" && $('input[id="tv30645"]').val() !== "F")
  {
    $('input[id="tv30645"]').css({ opacity: .5 });
    $("#tv30645e").css("visibility","visible");
  	$("#tv30645e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30645"]').css({ opacity: 1 });
    $("#tv30645e").css("visibility","hidden");
  }
  if ($('input[id="tv30646"]').val() !== "t" && $('input[id="tv30646"]').val() !== "T")
  {
    $('input[id="tv30646"]').css({ opacity: .5 });
    $("#tv30646e").css("visibility","visible");
  	$("#tv30646e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30646"]').css({ opacity: 1 });
    $("#tv30646e").css("visibility","hidden");
  }
  if ($('input[id="tv30647"]').val() !== "f" && $('input[id="tv30647"]').val() !== "F")
  {
    $('input[id="tv30647"]').css({ opacity: .5 });
    $("#tv30647e").css("visibility","visible");
  	$("#tv30647e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30647"]').css({ opacity: 1 });
    $("#tv30647e").css("visibility","hidden");
  }
if ($('input[id="tv30648"]').val() !== "f" && $('input[id="tv30648"]').val() !== "F")
  {
    $('input[id="tv30648"]').css({ opacity: .5 });
    $("#tv30648e").css("visibility","visible");
  	$("#tv30648e").css({ opacity: 0.5, "z-index": "-2" });
    $("#306ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv30648"]').css({ opacity: 1 });
    $("#tv30648e").css("visibility","hidden");
  }
  if ($('input[id="tv30649"]').val() !== "f" && $('input[id="tv30649"]').val() !== "F")
    {
      $('input[id="tv30649"]').css({ opacity: .5 });
      $("#tv30649e").css("visibility","visible");
      $("#tv30649e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30649"]').css({ opacity: 1 });
      $("#tv30649e").css("visibility","hidden");
    }
  if ($('input[id="tv30650"]').val() !== "f" && $('input[id="tv30650"]').val() !== "F")
    {
      $('input[id="tv30650"]').css({ opacity: .5 });
      $("#tv30650e").css("visibility","visible");
      $("#tv30650e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30650"]').css({ opacity: 1 });
      $("#tv30650e").css("visibility","hidden");
    }
  if ($('input[id="tv30651"]').val() !== "f" && $('input[id="tv30651"]').val() !== "F")
    {
      $('input[id="tv30651"]').css({ opacity: .5 });
      $("#tv30651e").css("visibility","visible");
      $("#tv30651e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30651"]').css({ opacity: 1 });
      $("#tv30651e").css("visibility","hidden");
    }
  if ($('input[id="tv30652"]').val() !== "f" && $('input[id="tv30652"]').val() !== "F")
    {
      $('input[id="tv30652"]').css({ opacity: .5 });
      $("#tv30652e").css("visibility","visible");
      $("#tv30652e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30652"]').css({ opacity: 1 });
      $("#tv30652e").css("visibility","hidden");
    }
  if ($('input[id="tv30653"]').val() !== "t" && $('input[id="tv30653"]').val() !== "T")
    {
      $('input[id="tv30653"]').css({ opacity: .5 });
      $("#tv30653e").css("visibility","visible");
      $("#tv30653e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30653"]').css({ opacity: 1 });
      $("#tv30653e").css("visibility","hidden");
    }
  if ($('input[id="tv30654"]').val() !== "t" && $('input[id="tv30654"]').val() !== "T")
    {
      $('input[id="tv30654"]').css({ opacity: .5 });
      $("#tv30654e").css("visibility","visible");
      $("#tv30654e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30654"]').css({ opacity: 1 });
      $("#tv30654e").css("visibility","hidden");
    }
  if ($('input[id="tv30655"]').val() !== "t" && $('input[id="tv30655"]').val() !== "T")
    {
      $('input[id="tv30655"]').css({ opacity: .5 });
      $("#tv30655e").css("visibility","visible");
      $("#tv30655e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30655"]').css({ opacity: 1 });
      $("#tv30655e").css("visibility","hidden");
    }
  if ($('input[id="tv30656"]').val() !== "t" && $('input[id="tv30656"]').val() !== "T")
    {
      $('input[id="tv30656"]').css({ opacity: .5 });
      $("#tv30656e").css("visibility","visible");
      $("#tv30656e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30656"]').css({ opacity: 1 });
      $("#tv30656e").css("visibility","hidden");
    }
  if ($('input[id="tv30657"]').val() !== "t" && $('input[id="tv30657"]').val() !== "T")
    {
      $('input[id="tv30657"]').css({ opacity: .5 });
      $("#tv30657e").css("visibility","visible");
      $("#tv30657e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30657"]').css({ opacity: 1 });
      $("#tv30657e").css("visibility","hidden");
    }
  if ($('input[id="tv30658"]').val() !== "f" && $('input[id="tv30658"]').val() !== "F")
    {
      $('input[id="tv30658"]').css({ opacity: .5 });
      $("#tv30658e").css("visibility","visible");
      $("#tv30658e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30658"]').css({ opacity: 1 });
      $("#tv30658e").css("visibility","hidden");
    }
  if ($('input[id="tv30659"]').val() !== "t" && $('input[id="tv30659"]').val() !== "T")
    {
      $('input[id="tv30659"]').css({ opacity: .5 });
      $("#tv30659e").css("visibility","visible");
      $("#tv30659e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30659"]').css({ opacity: 1 });
      $("#tv30659e").css("visibility","hidden");
    }
  if ($('input[id="tv30660"]').val() !== "t" && $('input[id="tv30660"]').val() !== "T")
    {
      $('input[id="tv30660"]').css({ opacity: .5 });
      $("#tv30660e").css("visibility","visible");
      $("#tv30660e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30660"]').css({ opacity: 1 });
      $("#tv30660e").css("visibility","hidden");
    }
  if ($('input[id="tv30661"]').val() !== "t" && $('input[id="tv30661"]').val() !== "T")
    {
      $('input[id="tv30661"]').css({ opacity: .5 });
      $("#tv30661e").css("visibility","visible");
      $("#tv30661e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30661"]').css({ opacity: 1 });
      $("#tv30661e").css("visibility","hidden");
    }
  if ($('input[id="tv30662"]').val() !== "t" && $('input[id="tv30662"]').val() !== "T")
    {
      $('input[id="tv30662"]').css({ opacity: .5 });
      $("#tv30662e").css("visibility","visible");
      $("#tv30662e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30662"]').css({ opacity: 1 });
      $("#tv30662e").css("visibility","hidden");
    }
  if ($('input[id="tv30663"]').val() !== "t" && $('input[id="tv30663"]').val() !== "T")
    {
      $('input[id="tv30663"]').css({ opacity: .5 });
      $("#tv30663e").css("visibility","visible");
      $("#tv30663e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30663"]').css({ opacity: 1 });
      $("#tv30663e").css("visibility","hidden");
    }
  if ($('input[id="tv30664"]').val() !== "t" && $('input[id="tv30664"]').val() !== "T")
    {
      $('input[id="tv30664"]').css({ opacity: .5 });
      $("#tv30664e").css("visibility","visible");
      $("#tv30664e").css({ opacity: 0.5, "z-index": "-2" });
      $("#306ct").css("visibility","hidden");
    } else
    {
      tn++;
      $('input[id="tv30664"]').css({ opacity: 1 });
      $("#tv30664e").css("visibility","hidden");
    }
  if ($("#306b1").css("visibility") == "visible")
  {
    bn = bn + 1;
  }
  if ($("#306b2").css("visibility") == "visible")
  {
    bn = bn + 3;
  }
  if ($("#306b3").css("visibility") == "visible")
  {
    bn = bn + 5;
  }
  if ($("#306b4").css("visibility") == "visible")
  {
    bn = bn + 7;
  }
  if ($("#306b5").css("visibility") == "visible")
  {
    bn = bn + 9;
  }
  if ($("#306b6").css("visibility") == "visible")
  {
    bn = bn + 11;
  }
  if ($("#306b7").css("visibility") == "visible")
  {
    bn = bn + 13;
  }
  if ($("#306b8").css("visibility") == "visible")
  {
    bn = bn + 15;
  }
  if (bn == 0 || bn == 1 || bn == 13)
  {
    $("#306mb").css("visibility","visible");
    $("#306mb").css({ opacity: 0.7 });
    $("#306wb").css("visibility","hidden");
    $("#306cts").css("visibility","hidden");
  } else if (bn == 14)
  {
    $("#306mb").css("visibility","hidden");
    $("#306wb").css("visibility","hidden");
      if (tn == 64)
      {
      $("#306cts").css("visibility","visible");
      $("#306cts").css({ opacity: 0.7 });
      } else
      {
      $("#306cts").css("visibility","hidden");
      $("#306cts").css({ opacity: 0.0 });
      }
  } else
  {
    // alert(bn);
    $("#306wb").css("visibility","visible");
    $("#306wb").css({ opacity: 0.7 });
    $("#306mb").css("visibility","hidden");
    $("#306cts").css("visibility","hidden");
  }
  if ($('input[id="306rle"]').is(":checked"))
  {
    rn = rn + 1;
  }
  if ($('input[id="306rct"]').is(":checked"))
  {
    rn = rn + 3;
  }
  if ($('input[id="306rcs"]').is(":checked"))
  {
    rn = rn + 5;
  }
  if ($('input[id="306ric"]').is(":checked"))
  {
    rn = rn + 7;
  }
  if (rn == 0)
  {
    $("#306wrs").css("visibility","visible");
    $("#306wrs").css({ opacity: 0.7 });
    $("#306omr").css("visibility","hidden");
    $("#306ers").css("visibility","hidden");
    $("#306crs").css("visibility","hidden");
  }
  // else if (rn == 1)
  // {
  //   $("#306omr").css("visibility","visible");
  //   $("#306omr").css({ opacity: 0.7 });
  //   $("#306wrs").css("visibility","hidden");
  //   $("#306ers").css("visibility","hidden");
  //   $("#306crs").css("visibility","hidden");
  // }
  // else if (rn == 5)
  // {
  //   $("#306omr").css("visibility","visible");
  //   $("#306omr").css({ opacity: 0.7 });
  //   $("#306wrs").css("visibility","hidden");
  //   $("#306ers").css("visibility","hidden");
  //   $("#306crs").css("visibility","hidden");
  // }
  else if (rn == 5)
    {
    $("#306wrs").css("visibility","hidden");
    $("#306omr").css("visibility","hidden");
    $("#306ers").css("visibility","hidden");
    $("#306crs").css("visibility","visible");
    $("#306crs").css({ opacity: 0.7 });
  } else
  {
    $("#306wrs").css("visibility","hidden");
    $("#306omr").css("visibility","hidden");
    $("#306ers").css("visibility","visible");
    $("#306ers").css({ opacity: 0.7 });
    $("#306crs").css("visibility","hidden");
  }
}

// Section 4 #1
var b1n = 0;
var c1n = 0;
var r1n = 0;
function b41b1()
{
  if ($("#401b1").css("visibility") == "hidden")
  {
    $("#401b1").css("visibility","visible");
    $("#401b1").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n + 1;
  } else
  {
    $("#401b1").css("visibility","hidden");
    $("#401b1").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n - 1;
  }
}

function b41b2()
{
  if ($("#401b2").css("visibility") == "hidden")
  {
    $("#401b2").css("visibility","visible");
    $("#401b2").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n + 3;
  } else
  {
    $("#401b2").css("visibility","hidden");
    $("#401b2").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n - 3;
  }
}

function b41b3()
{
  if ($("#401b3").css("visibility") == "hidden")
  {
    $("#401b3").css("visibility","visible");
    $("#401b3").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n + 5;
  } else
  {
    $("#401b3").css("visibility","hidden");
    $("#401b3").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n - 5;
  }
}

function b41b4()
{
  if ($("#401b4").css("visibility") == "hidden")
  {
    $("#401b4").css("visibility","visible");
    $("#401b4").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n + 7;
  } else
  {
    $("#401b4").css("visibility","hidden");
    $("#401b4").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n - 7;
  }
}

function b41b5()
{
  if ($("#401b5").css("visibility") == "hidden")
  {
    $("#401b5").css("visibility","visible");
    $("#401b5").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n + 9;
  } else
  {
    $("#401b5").css("visibility","hidden");
    $("#401b5").css({ opacity: 1, "z-index": "-4" });
    b1n = b1n - 9;
  }
}

function b41c1()
{
  if (b1n == 0 || b1n == 1 || b1n == 7 || b1n == 9 || b1n == 8 || b1n == 10 || b1n == 16)
  {
    $("#401mb").css("visibility","visible");
    $("#401mb").css({ opacity: 0.7 });
    $("#401wb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
  else if (b1n == 17)
  {
    $("#401mb").css("visibility","hidden");
    $("#401wb").css("visibility","hidden")
    {
      if ($("#401c11").css("visibility") == "hidden")
      {
        $("#401c11").css("visibility","visible");
        $("#401c11").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n + 1;
      } else
      {
        $("#401c11").css("visibility","hidden");
        $("#401c11").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n - 1;
      }
      if ($("#401c41").css("visibility") == "hidden")
      {
        $("#401c41").css("visibility","visible");
        $("#401c41").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c41").css("visibility","hidden");
        $("#401c41").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#401c51").css("visibility") == "hidden")
      {
        $("#401c51").css("visibility","visible");
        $("#401c51").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c51").css("visibility","hidden");
        $("#401c51").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#401wb").css("visibility","visible");
    $("#401wb").css({ opacity: 0.7 });
    $("#401mb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
}

function b41c2()
{
  if (b1n == 0 || b1n == 1 || b1n == 7 || b1n == 9 || b1n == 8 || b1n == 10 || b1n == 16)
  {
    $("#401mb").css("visibility","visible");
    $("#401mb").css({ opacity: 0.7 });
    $("#401wb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
  else if (b1n == 17)
  {
    $("#401mb").css("visibility","hidden");
    $("#401wb").css("visibility","hidden")
    {
      if ($("#401c12").css("visibility") == "hidden")
      {
        $("#401c12").css("visibility","visible");
        $("#401c12").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n + 3;
      } else
      {
        $("#401c12").css("visibility","hidden");
        $("#401c12").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n - 3;
      }
      if ($("#401c42").css("visibility") == "hidden")
      {
        $("#401c42").css("visibility","visible");
        $("#401c42").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c42").css("visibility","hidden");
        $("#401c42").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#401c52").css("visibility") == "hidden")
      {
        $("#401c52").css("visibility","visible");
        $("#401c52").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c52").css("visibility","hidden");
        $("#401c52").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#401wb").css("visibility","visible");
    $("#401wb").css({ opacity: 0.7 });
    $("#401mb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
}

function b41c3()
{
  if (b1n == 0 || b1n == 1 || b1n == 7 || b1n == 9 || b1n == 8 || b1n == 10 || b1n == 16)
  {
    $("#401mb").css("visibility","visible");
    $("#401mb").css({ opacity: 0.7 });
    $("#401wb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
  else if (b1n == 17)
  {
    $("#401mb").css("visibility","hidden");
    $("#401wb").css("visibility","hidden")
    {
      if ($("#401c13").css("visibility") == "hidden")
      {
        $("#401c13").css("visibility","visible");
        $("#401c13").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n + 5;
      } else
      {
        $("#401c13").css("visibility","hidden");
        $("#401c13").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n - 5;
      }
      if ($("#401c43").css("visibility") == "hidden")
      {
        $("#401c43").css("visibility","visible");
        $("#401c43").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c43").css("visibility","hidden");
        $("#401c43").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#401c53").css("visibility") == "hidden")
      {
        $("#401c53").css("visibility","visible");
        $("#401c53").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c53").css("visibility","hidden");
        $("#401c53").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#401wb").css("visibility","visible");
    $("#401wb").css({ opacity: 0.7 });
    $("#401mb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
}

function b41c4()
{
  if (b1n == 0 || b1n == 1 || b1n == 7 || b1n == 9 || b1n == 8 || b1n == 10 || b1n == 16)
  {
    $("#401mb").css("visibility","visible");
    $("#401mb").css({ opacity: 0.7 });
    $("#401wb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
  else if (b1n == 17)
  {
    $("#401mb").css("visibility","hidden");
    $("#401wb").css("visibility","hidden")
    {
      if ($("#401c14").css("visibility") == "hidden")
      {
        $("#401c14").css("visibility","visible");
        $("#401c14").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n + 7;
      } else
      {
        $("#401c14").css("visibility","hidden");
        $("#401c14").css({ opacity: 1, "z-index": "-3" });
        c1n = c1n - 7;
      }
      if ($("#401c44").css("visibility") == "hidden")
      {
        $("#401c44").css("visibility","visible");
        $("#401c44").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c44").css("visibility","hidden");
        $("#401c44").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#401c54").css("visibility") == "hidden")
      {
        $("#401c54").css("visibility","visible");
        $("#401c54").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#401c54").css("visibility","hidden");
        $("#401c54").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#401wb").css("visibility","visible");
    $("#401wb").css({ opacity: 0.7 });
    $("#401mb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
}

function checkanswer41()
{
  var tn = 0;
  if ($('input[id="tv40101"]').val() !== "t" && $('input[id="tv40101"]').val() !== "T")
  {
    $('input[id="tv40101"]').css({ opacity: .5 });
    $("#tv40101e").css("visibility","visible");
  	$("#tv40101e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40101"]').css({ opacity: 1 });
    $("#tv40101e").css("visibility","hidden");
  }
  if ($('input[id="tv40102"]').val() !== "t" && $('input[id="tv40102"]').val() !== "T")
  {
    $('input[id="tv40102"]').css({ opacity: .5 });
    $("#tv40102e").css("visibility","visible");
  	$("#tv40102e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40102"]').css({ opacity: 1 });
    $("#tv40102e").css("visibility","hidden");
  }
  if ($('input[id="tv40103"]').val() !== "t" && $('input[id="tv40103"]').val() !== "T")
  {
    $('input[id="tv40103"]').css({ opacity: .5 });
    $("#tv40103e").css("visibility","visible");
  	$("#tv40103e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40103"]').css({ opacity: 1 });
    $("#tv40103e").css("visibility","hidden");
  }
  if ($('input[id="tv40104"]').val() !== "f" && $('input[id="tv40104"]').val() !== "F")
    {
    $('input[id="tv40104"]').css({ opacity: .5 });
    $("#tv40104e").css("visibility","visible");
  	$("#tv40104e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40104"]').css({ opacity: 1 });
    $("#tv40104e").css("visibility","hidden");
  }
  if ($('input[id="tv40105"]').val() !== "f" && $('input[id="tv40105"]').val() !== "F")
  {
    $('input[id="tv40105"]').css({ opacity: .5 });
    $("#tv40105e").css("visibility","visible");
  	$("#tv40105e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40105"]').css({ opacity: 1 });
    $("#tv40105e").css("visibility","hidden");
  }
  if ($('input[id="tv40106"]').val() !== "f" && $('input[id="tv40106"]').val() !== "F")
  {
    $('input[id="tv40106"]').css({ opacity: .5 });
    $("#tv40106e").css("visibility","visible");
  	$("#tv40106e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40106"]').css({ opacity: 1 });
    $("#tv40106e").css("visibility","hidden");
  }
  if ($('input[id="tv40107"]').val() !== "f" && $('input[id="tv40107"]').val() !== "F")
  {
    $('input[id="tv40107"]').css({ opacity: .5 });
    $("#tv40107e").css("visibility","visible");
  	$("#tv40107e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40107"]').css({ opacity: 1 });
    $("#tv40107e").css("visibility","hidden");
  }
  if ($('input[id="tv40108"]').val() !== "t" && $('input[id="tv40108"]').val() !== "T")
  {
    $('input[id="tv40108"]').css({ opacity: .5 });
    $("#tv40108e").css("visibility","visible");
  	$("#tv40108e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40108"]').css({ opacity: 1 });
    $("#tv40108e").css("visibility","hidden");
  }
  if ($('input[id="tv40109"]').val() !== "f" && $('input[id="tv40109"]').val() !== "F")
  {
    $('input[id="tv40109"]').css({ opacity: .5 });
    $("#tv40109e").css("visibility","visible");
  	$("#tv40109e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40109"]').css({ opacity: 1 });
    $("#tv40109e").css("visibility","hidden");
  }
  if ($('input[id="tv40110"]').val() !== "f" && $('input[id="tv40110"]').val() !== "F")
  {
    $('input[id="tv40110"]').css({ opacity: .5 });
    $("#tv40110e").css("visibility","visible");
  	$("#tv40110e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40110"]').css({ opacity: 1 });
    $("#tv40110e").css("visibility","hidden");
  }
  if ($('input[id="tv40111"]').val() !== "t" && $('input[id="tv40111"]').val() !== "T")
  {
    $('input[id="tv40111"]').css({ opacity: .5 });
    $("#tv40111e").css("visibility","visible");
  	$("#tv40111e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40111"]').css({ opacity: 1 });
    $("#tv40111e").css("visibility","hidden");
  }
  if ($('input[id="tv40112"]').val() !== "t" && $('input[id="tv40112"]').val() !== "T")
  {
    $('input[id="tv40112"]').css({ opacity: .5 });
    $("#tv40112e").css("visibility","visible");
  	$("#tv40112e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40112"]').css({ opacity: 1 });
    $("#tv40112e").css("visibility","hidden");
  }
  if ($('input[id="tv40113"]').val() !== "t" && $('input[id="tv40113"]').val() !== "T")
  {
    $('input[id="tv40113"]').css({ opacity: .5 });
    $("#tv40113e").css("visibility","visible");
  	$("#tv40113e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40113"]').css({ opacity: 1 });
    $("#tv40113e").css("visibility","hidden");
  }
  if ($('input[id="tv40114"]').val() !== "t" && $('input[id="tv40114"]').val() !== "T")
  {
    $('input[id="tv40114"]').css({ opacity: .5 });
    $("#tv40114e").css("visibility","visible");
  	$("#tv40114e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40114"]').css({ opacity: 1 });
    $("#tv40114e").css("visibility","hidden");
  }
  if ($('input[id="tv40115"]').val() !== "t" && $('input[id="tv40115"]').val() !== "T")
  {
    $('input[id="tv40115"]').css({ opacity: .5 });
    $("#tv40115e").css("visibility","visible");
  	$("#tv40115e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40115"]').css({ opacity: 1 });
    $("#tv40115e").css("visibility","hidden");
  }
  if ($('input[id="tv40116"]').val() !== "f" && $('input[id="tv40116"]').val() !== "F")
  {
    $('input[id="tv40116"]').css({ opacity: .5 });
    $("#tv40116e").css("visibility","visible");
  	$("#tv40116e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40116"]').css({ opacity: 1 });
    $("#tv40116e").css("visibility","hidden");
  }
  if ($('input[id="tv40117"]').val() !== "f" && $('input[id="tv40117"]').val() !== "F")
  {
    $('input[id="tv40117"]').css({ opacity: .5 });
    $("#tv40117e").css("visibility","visible");
  	$("#tv40117e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40117"]').css({ opacity: 1 });
    $("#tv40117e").css("visibility","hidden");
  }
  if ($('input[id="tv40118"]').val() !== "t" && $('input[id="tv40118"]').val() !== "T")
  {
    $('input[id="tv40118"]').css({ opacity: .5 });
    $("#tv40118e").css("visibility","visible");
  	$("#tv40118e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40118"]').css({ opacity: 1 });
    $("#tv40118e").css("visibility","hidden");
  }
  if ($('input[id="tv40119"]').val() !== "f" && $('input[id="tv40119"]').val() !== "F")
  {
    $('input[id="tv40119"]').css({ opacity: .5 });
    $("#tv40119e").css("visibility","visible");
  	$("#tv40119e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40119"]').css({ opacity: 1 });
    $("#tv40119e").css("visibility","hidden");
  }
  if ($('input[id="tv40120"]').val() !== "t" && $('input[id="tv40120"]').val() !== "T")
  {
    $('input[id="tv40120"]').css({ opacity: .5 });
    $("#tv40120e").css("visibility","visible");
  	$("#tv40120e").css({ opacity: 0.5, "z-index": "-2" });
    $("#401ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40120"]').css({ opacity: 1 });
    $("#tv40120e").css("visibility","hidden");
  }
  if (b1n == 0 || b1n == 1 || b1n == 7 || b1n == 9 || b1n == 8 || b1n == 10 || b1n == 16)
  {
    $("#401mb").css("visibility","visible");
    $("#401mb").css({ opacity: 0.7 });
    $("#401wb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  } else if (b1n == 17 && c1n == 0)
  {
    $("#401mb").css("visibility","hidden");
    $("#401wb").css("visibility","hidden");
    $("#401wrv").css("visibility","hidden");
      if (tn == 20)
      {
      $("#401ct").css("visibility","visible");
      $("#401ct").css({ opacity: 0.7 });
      }
  } else if (c1n != 0)
  {
    if (b1n != 17)
    {
      $("#401wrv").css("visibility","visible");
      $("#401wrv").css({ opacity: 0.7 });
      $("#401wb").css("visibility","visible");
      $("#401mb").css("visibility","hidden");
      $("#401ct").css("visibility","hidden");
    } else
    {
      $("#401wrv").css("visibility","visible");
      $("#401wrv").css({ opacity: 0.7 });
      $("#401wb").css("visibility","hidden");
      $("#401mb").css("visibility","hidden");
      $("#401ct").css("visibility","hidden");
    }
  } else
  {
    $("#401wb").css("visibility","visible");
    $("#401wb").css({ opacity: 0.7 });
    $("#401wrv").css("visibility","hidden");
    $("#401mb").css("visibility","hidden");
    $("#401ct").css("visibility","hidden");
  }
  if ($('input[name="v1"]:checked').val() == "V")
  {
    $('input[name="v1"]').css({ opacity: .5 });
    $("#401vc").css("visibility","visible");
    $("#401vc").css({ opacity: 0.5 });
    $("#401ve").css("visibility","hidden");
    $("#401ic").css("visibility","hidden");
    $("#401ie").css("visibility","hidden");
    $("#401wv").css("visibility","hidden");
  } else if ($('input[name="v1"]:checked').val() == "I")
  {
    $('input[name="v1"]').css({ opacity: .5 });
    $("#401vc").css("visibility","hidden");
    $("#401ve").css("visibility","hidden");
    $("#401ic").css("visibility","hidden");
    $("#401ie").css("visibility","visible");
    $("#401ie").css({ opacity: 0.5 });
    $("#401wv").css("visibility","hidden");
  } else
  {
    $('input[name="v1"]').css({ opacity: .5 });
    $("#401wv").css("visibility","visible");
    $("#401wv").css({ opacity: 0.7 });
  }
}
// Section 4 #2
var b2n = 0;
var c2n = 0;

function b42b1()
{
  if ($("#402b1").css("visibility") == "hidden")
  {
    $("#402b1").css("visibility","visible");
    $("#402b1").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n + 1;
  } else
  {
    $("#402b1").css("visibility","hidden");
    $("#402b1").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n - 1;
  }
}

function b42b2()
{
  if ($("#402b2").css("visibility") == "hidden")
  {
    $("#402b2").css("visibility","visible");
    $("#402b2").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n + 3;
  } else
  {
    $("#402b2").css("visibility","hidden");
    $("#402b2").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n - 3;
  }
}

function b42b3()
{
  if ($("#402b3").css("visibility") == "hidden")
  {
    $("#402b3").css("visibility","visible");
    $("#402b3").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n + 5;
  } else
  {
    $("#402b3").css("visibility","hidden");
    $("#402b3").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n - 5;
  }
}

function b42b4()
{
  if ($("#402b4").css("visibility") == "hidden")
  {
    $("#402b4").css("visibility","visible");
    $("#402b4").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n + 7;
  } else
  {
    $("#402b4").css("visibility","hidden");
    $("#402b4").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n - 7;
  }
}

function b42b5()
{
  if ($("#402b5").css("visibility") == "hidden")
  {
    $("#402b5").css("visibility","visible");
    $("#402b5").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n + 9;
  } else
  {
    $("#402b5").css("visibility","hidden");
    $("#402b5").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n - 9;
  }
}

function b42b6()
{
  if ($("#402b6").css("visibility") == "hidden")
  {
    $("#402b6").css("visibility","visible");
    $("#402b6").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n + 11;
  } else
  {
    $("#402b6").css("visibility","hidden");
    $("#402b6").css({ opacity: 1, "z-index": "-4" });
    b2n = b2n - 11;
  }
}

function b42c1()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c21").css("visibility") == "hidden")
      {
        $("#402c21").css("visibility","visible");
        $("#402c21").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 1;
      } else
      {
        $("#402c21").css("visibility","hidden");
        $("#402c21").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 1;
      }
      if ($("#402c41").css("visibility") == "hidden")
      {
        $("#402c41").css("visibility","visible");
        $("#402c41").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c41").css("visibility","hidden");
        $("#402c41").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c61").css("visibility") == "hidden")
      {
        $("#402c61").css("visibility","visible");
        $("#402c61").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c61").css("visibility","hidden");
        $("#402c61").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c2()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c22").css("visibility") == "hidden")
      {
        $("#402c22").css("visibility","visible");
        $("#402c22").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 3;
      } else
      {
        $("#402c22").css("visibility","hidden");
        $("#402c22").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 3;
      }
      if ($("#402c42").css("visibility") == "hidden")
      {
        $("#402c42").css("visibility","visible");
        $("#402c42").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c42").css("visibility","hidden");
        $("#402c42").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c62").css("visibility") == "hidden")
      {
        $("#402c62").css("visibility","visible");
        $("#402c62").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c62").css("visibility","hidden");
        $("#402c62").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c3()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c23").css("visibility") == "hidden")
      {
        $("#402c23").css("visibility","visible");
        $("#402c23").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 5;
      } else
      {
        $("#402c23").css("visibility","hidden");
        $("#402c23").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 5;
      }
      if ($("#402c43").css("visibility") == "hidden")
      {
        $("#402c43").css("visibility","visible");
        $("#402c43").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c43").css("visibility","hidden");
        $("#402c43").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c63").css("visibility") == "hidden")
      {
        $("#402c63").css("visibility","visible");
        $("#402c63").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c63").css("visibility","hidden");
        $("#402c63").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c4()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c24").css("visibility") == "hidden")
      {
        $("#402c24").css("visibility","visible");
        $("#402c24").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 7;
      } else
      {
        $("#402c24").css("visibility","hidden");
        $("#402c24").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 7;
      }
      if ($("#402c44").css("visibility") == "hidden")
      {
        $("#402c44").css("visibility","visible");
        $("#402c44").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c44").css("visibility","hidden");
        $("#402c44").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c64").css("visibility") == "hidden")
      {
        $("#402c64").css("visibility","visible");
        $("#402c64").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c64").css("visibility","hidden");
        $("#402c64").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c5()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c25").css("visibility") == "hidden")
      {
        $("#402c25").css("visibility","visible");
        $("#402c25").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 9;
      } else
      {
        $("#402c25").css("visibility","hidden");
        $("#402c25").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 9;
      }
      if ($("#402c45").css("visibility") == "hidden")
      {
        $("#402c45").css("visibility","visible");
        $("#402c45").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c45").css("visibility","hidden");
        $("#402c45").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c65").css("visibility") == "hidden")
      {
        $("#402c65").css("visibility","visible");
        $("#402c65").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c65").css("visibility","hidden");
        $("#402c65").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c6()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c26").css("visibility") == "hidden")
      {
        $("#402c26").css("visibility","visible");
        $("#402c26").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 11;
      } else
      {
        $("#402c26").css("visibility","hidden");
        $("#402c26").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 11;
      }
      if ($("#402c46").css("visibility") == "hidden")
      {
        $("#402c46").css("visibility","visible");
        $("#402c46").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c46").css("visibility","hidden");
        $("#402c46").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c66").css("visibility") == "hidden")
      {
        $("#402c66").css("visibility","visible");
        $("#402c66").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c66").css("visibility","hidden");
        $("#402c66").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c7()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c27").css("visibility") == "hidden")
      {
        $("#402c27").css("visibility","visible");
        $("#402c27").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 13;
      } else
      {
        $("#402c27").css("visibility","hidden");
        $("#402c27").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 13;
      }
      if ($("#402c47").css("visibility") == "hidden")
      {
        $("#402c47").css("visibility","visible");
        $("#402c47").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c47").css("visibility","hidden");
        $("#402c47").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c67").css("visibility") == "hidden")
      {
        $("#402c67").css("visibility","visible");
        $("#402c67").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c67").css("visibility","hidden");
        $("#402c67").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function b42c8()
{
  if (b2n == 0 || b2n == 3 || b2n == 7 || b2n == 11 || b2n == 10 || b2n == 14 || b2n == 18)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  else if (b2n == 21)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden")
    {
      if ($("#402c28").css("visibility") == "hidden")
      {
        $("#402c28").css("visibility","visible");
        $("#402c28").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n + 15;
      } else
      {
        $("#402c28").css("visibility","hidden");
        $("#402c28").css({ opacity: 1, "z-index": "-3" });
        c2n = c2n - 15;
      }
      if ($("#402c48").css("visibility") == "hidden")
      {
        $("#402c48").css("visibility","visible");
        $("#402c48").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c48").css("visibility","hidden");
        $("#402c48").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#402c68").css("visibility") == "hidden")
      {
        $("#402c68").css("visibility","visible");
        $("#402c68").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#402c68").css("visibility","hidden");
        $("#402c68").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
}

function checkanswer42()
{
  var tn = 0;
  if ($('input[id="tv40201"]').val() !== "f" && $('input[id="tv40201"]').val() !== "F")
  {
    $('input[id="tv40201"]').css({ opacity: .5 });
    $("#tv40201e").css("visibility","visible");
  	$("#tv40201e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40201"]').css({ opacity: 1 });
    $("#tv40201e").css("visibility","hidden");
  }
  if ($('input[id="tv40202"]').val() !== "f" && $('input[id="tv40202"]').val() !== "F")
  {
    $('input[id="tv40202"]').css({ opacity: .5 });
    $("#tv40202e").css("visibility","visible");
  	$("#tv40202e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40202"]').css({ opacity: 1 });
    $("#tv40202e").css("visibility","hidden");
  }
  if ($('input[id="tv40203"]').val() !== "f" && $('input[id="tv40203"]').val() !== "F")
  {
    $('input[id="tv40203"]').css({ opacity: .5 });
    $("#tv40203e").css("visibility","visible");
  	$("#tv40203e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40203"]').css({ opacity: 1 });
    $("#tv40203e").css("visibility","hidden");
  }
  if ($('input[id="tv40204"]').val() !== "f" && $('input[id="tv40204"]').val() !== "F")
    {
    $('input[id="tv40204"]').css({ opacity: .5 });
    $("#tv40204e").css("visibility","visible");
  	$("#tv40204e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40204"]').css({ opacity: 1 });
    $("#tv40204e").css("visibility","hidden");
  }
  if ($('input[id="tv40205"]').val() !== "t" && $('input[id="tv40205"]').val() !== "T")
  {
    $('input[id="tv40205"]').css({ opacity: .5 });
    $("#tv40205e").css("visibility","visible");
  	$("#tv40205e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40205"]').css({ opacity: 1 });
    $("#tv40205e").css("visibility","hidden");
  }
  if ($('input[id="tv40206"]').val() !== "t" && $('input[id="tv40206"]').val() !== "T")
  {
    $('input[id="tv40206"]').css({ opacity: .5 });
    $("#tv40206e").css("visibility","visible");
  	$("#tv40206e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40206"]').css({ opacity: 1 });
    $("#tv40206e").css("visibility","hidden");
  }
  if ($('input[id="tv40207"]').val() !== "t" && $('input[id="tv40207"]').val() !== "T")
  {
    $('input[id="tv40207"]').css({ opacity: .5 });
    $("#tv40207e").css("visibility","visible");
  	$("#tv40207e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40207"]').css({ opacity: 1 });
    $("#tv40207e").css("visibility","hidden");
  }
  if ($('input[id="tv40208"]').val() !== "t" && $('input[id="tv40208"]').val() !== "T")
  {
    $('input[id="tv40208"]').css({ opacity: .5 });
    $("#tv40208e").css("visibility","visible");
  	$("#tv40208e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40208"]').css({ opacity: 1 });
    $("#tv40208e").css("visibility","hidden");
  }
  if ($('input[id="tv40209"]').val() !== "t" && $('input[id="tv40209"]').val() !== "T")
  {
    $('input[id="tv40209"]').css({ opacity: .5 });
    $("#tv40209e").css("visibility","visible");
  	$("#tv40209e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40209"]').css({ opacity: 1 });
    $("#tv40209e").css("visibility","hidden");
  }
  if ($('input[id="tv40210"]').val() !== "f" && $('input[id="tv40210"]').val() !== "F")
  {
    $('input[id="tv40210"]').css({ opacity: .5 });
    $("#tv40210e").css("visibility","visible");
  	$("#tv40210e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40210"]').css({ opacity: 1 });
    $("#tv40210e").css("visibility","hidden");
  }
  if ($('input[id="tv40211"]').val() !== "f" && $('input[id="tv40211"]').val() !== "F")
  {
    $('input[id="tv40211"]').css({ opacity: .5 });
    $("#tv40211e").css("visibility","visible");
  	$("#tv40211e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40211"]').css({ opacity: 1 });
    $("#tv40211e").css("visibility","hidden");
  }
  if ($('input[id="tv40212"]').val() !== "t" && $('input[id="tv40212"]').val() !== "T")
  {
    $('input[id="tv40212"]').css({ opacity: .5 });
    $("#tv40212e").css("visibility","visible");
  	$("#tv40212e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40212"]').css({ opacity: 1 });
    $("#tv40212e").css("visibility","hidden");
  }
  if ($('input[id="tv40213"]').val() !== "t" && $('input[id="tv40213"]').val() !== "T")
  {
    $('input[id="tv40213"]').css({ opacity: .5 });
    $("#tv40213e").css("visibility","visible");
  	$("#tv40213e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40213"]').css({ opacity: 1 });
    $("#tv40213e").css("visibility","hidden");
  }
  if ($('input[id="tv40214"]').val() !== "f" && $('input[id="tv40214"]').val() !== "F")
  {
    $('input[id="tv40214"]').css({ opacity: .5 });
    $("#tv40214e").css("visibility","visible");
  	$("#tv40214e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40214"]').css({ opacity: 1 });
    $("#tv40214e").css("visibility","hidden");
  }
  if ($('input[id="tv40215"]').val() !== "f" && $('input[id="tv40215"]').val() !== "F")
  {
    $('input[id="tv40215"]').css({ opacity: .5 });
    $("#tv40215e").css("visibility","visible");
  	$("#tv40215e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40215"]').css({ opacity: 1 });
    $("#tv40215e").css("visibility","hidden");
  }
  if ($('input[id="tv40216"]').val() !== "t" && $('input[id="tv40216"]').val() !== "T")
  {
    $('input[id="tv40216"]').css({ opacity: .5 });
    $("#tv40216e").css("visibility","visible");
  	$("#tv40216e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40216"]').css({ opacity: 1 });
    $("#tv40216e").css("visibility","hidden");
  }
  if ($('input[id="tv40217"]').val() !== "t" && $('input[id="tv40217"]').val() !== "T")
  {
    $('input[id="tv40217"]').css({ opacity: .5 });
    $("#tv40217e").css("visibility","visible");
  	$("#tv40217e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40217"]').css({ opacity: 1 });
    $("#tv40217e").css("visibility","hidden");
  }
  if ($('input[id="tv40218"]').val() !== "f" && $('input[id="tv40218"]').val() !== "F")
  {
    $('input[id="tv40218"]').css({ opacity: .5 });
    $("#tv40218e").css("visibility","visible");
  	$("#tv40218e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40218"]').css({ opacity: 1 });
    $("#tv40218e").css("visibility","hidden");
  }
  if ($('input[id="tv40219"]').val() !== "f" && $('input[id="tv40219"]').val() !== "F")
  {
    $('input[id="tv40219"]').css({ opacity: .5 });
    $("#tv40219e").css("visibility","visible");
  	$("#tv40219e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40219"]').css({ opacity: 1 });
    $("#tv40219e").css("visibility","hidden");
  }
  if ($('input[id="tv40220"]').val() !== "t" && $('input[id="tv40220"]').val() !== "T")
  {
    $('input[id="tv40220"]').css({ opacity: .5 });
    $("#tv40220e").css("visibility","visible");
  	$("#tv40220e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40220"]').css({ opacity: 1 });
    $("#tv40220e").css("visibility","hidden");
  }
  if ($('input[id="tv40221"]').val() !== "t" && $('input[id="tv40221"]').val() !== "T")
  {
    $('input[id="tv40221"]').css({ opacity: .5 });
    $("#tv40221e").css("visibility","visible");
  	$("#tv40221e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40221"]').css({ opacity: 1 });
    $("#tv40221e").css("visibility","hidden");
  }
  if ($('input[id="tv40222"]').val() !== "t" && $('input[id="tv40222"]').val() !== "T")
  {
    $('input[id="tv40222"]').css({ opacity: .5 });
    $("#tv40222e").css("visibility","visible");
  	$("#tv40222e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40222"]').css({ opacity: 1 });
    $("#tv40222e").css("visibility","hidden");
  }
  if ($('input[id="tv40223"]').val() !== "t" && $('input[id="tv40223"]').val() !== "T")
  {
    $('input[id="tv40223"]').css({ opacity: .5 });
    $("#tv40223e").css("visibility","visible");
  	$("#tv40223e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40223"]').css({ opacity: 1 });
    $("#tv40223e").css("visibility","hidden");
  }
  if ($('input[id="tv40224"]').val() !== "t" && $('input[id="tv40224"]').val() !== "T")
  {
    $('input[id="tv40224"]').css({ opacity: .5 });
    $("#tv40224e").css("visibility","visible");
  	$("#tv40224e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40224"]').css({ opacity: 1 });
    $("#tv40224e").css("visibility","hidden");
  }
  if ($('input[id="tv40225"]').val() !== "t" && $('input[id="tv40225"]').val() !== "T")
  {
    $('input[id="tv40225"]').css({ opacity: .5 });
    $("#tv40225e").css("visibility","visible");
  	$("#tv40225e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40225"]').css({ opacity: 1 });
    $("#tv40225e").css("visibility","hidden");
  }
  if ($('input[id="tv40226"]').val() !== "f" && $('input[id="tv40226"]').val() !== "F")
  {
    $('input[id="tv40226"]').css({ opacity: .5 });
    $("#tv40226e").css("visibility","visible");
  	$("#tv40226e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40226"]').css({ opacity: 1 });
    $("#tv40226e").css("visibility","hidden");
  }
  if ($('input[id="tv40227"]').val() !== "f" && $('input[id="tv40227"]').val() !== "F")
  {
    $('input[id="tv40227"]').css({ opacity: .5 });
    $("#tv40227e").css("visibility","visible");
  	$("#tv40227e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40227"]').css({ opacity: 1 });
    $("#tv40227e").css("visibility","hidden");
  }
  if ($('input[id="tv40228"]').val() !== "f" && $('input[id="tv40228"]').val() !== "F")
  {
    $('input[id="tv40228"]').css({ opacity: .5 });
    $("#tv40228e").css("visibility","visible");
  	$("#tv40228e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40228"]').css({ opacity: 1 });
    $("#tv40228e").css("visibility","hidden");
  }
  if ($('input[id="tv40229"]').val() !== "t" && $('input[id="tv40229"]').val() !== "T")
  {
    $('input[id="tv40229"]').css({ opacity: .5 });
    $("#tv40229e").css("visibility","visible");
  	$("#tv40229e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40229"]').css({ opacity: 1 });
    $("#tv40229e").css("visibility","hidden");
  }
  if ($('input[id="tv40230"]').val() !== "f" && $('input[id="tv40230"]').val() !== "F")
  {
    $('input[id="tv40230"]').css({ opacity: .5 });
    $("#tv40230e").css("visibility","visible");
  	$("#tv40230e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40230"]').css({ opacity: 1 });
    $("#tv40230e").css("visibility","hidden");
  }
  if ($('input[id="tv40231"]').val() !== "f" && $('input[id="tv40231"]').val() !== "F")
  {
    $('input[id="tv40231"]').css({ opacity: .5 });
    $("#tv40231e").css("visibility","visible");
  	$("#tv40231e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40231"]').css({ opacity: 1 });
    $("#tv40231e").css("visibility","hidden");
  }
  if ($('input[id="tv40232"]').val() !== "f" && $('input[id="tv40232"]').val() !== "F")
  {
    $('input[id="tv40232"]').css({ opacity: .5 });
    $("#tv40232e").css("visibility","visible");
  	$("#tv40232e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40232"]').css({ opacity: 1 });
    $("#tv40232e").css("visibility","hidden");
  }
  if ($('input[id="tv40233"]').val() !== "f" && $('input[id="tv40233"]').val() !== "F")
  {
    $('input[id="tv40233"]').css({ opacity: .5 });
    $("#tv40233e").css("visibility","visible");
  	$("#tv40233e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40233"]').css({ opacity: 1 });
    $("#tv40233e").css("visibility","hidden");
  }
  if ($('input[id="tv40234"]').val() !== "t" && $('input[id="tv40234"]').val() !== "T")
  {
    $('input[id="tv40234"]').css({ opacity: .5 });
    $("#tv40234e").css("visibility","visible");
  	$("#tv40234e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40234"]').css({ opacity: 1 });
    $("#tv40234e").css("visibility","hidden");
  }
  if ($('input[id="tv40235"]').val() !== "t" && $('input[id="tv40235"]').val() !== "T")
  {
    $('input[id="tv40235"]').css({ opacity: .5 });
    $("#tv40235e").css("visibility","visible");
  	$("#tv40235e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40235"]').css({ opacity: 1 });
    $("#tv40235e").css("visibility","hidden");
  }
  if ($('input[id="tv40236"]').val() !== "t" && $('input[id="tv40236"]').val() !== "T")
  {
    $('input[id="tv40236"]').css({ opacity: .5 });
    $("#tv40236e").css("visibility","visible");
  	$("#tv40236e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40236"]').css({ opacity: 1 });
    $("#tv40236e").css("visibility","hidden");
  }
  if ($('input[id="tv40237"]').val() !== "f" && $('input[id="tv40237"]').val() !== "F")
  {
    $('input[id="tv40237"]').css({ opacity: .5 });
    $("#tv40237e").css("visibility","visible");
  	$("#tv40237e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40237"]').css({ opacity: 1 });
    $("#tv40237e").css("visibility","hidden");
  }
  if ($('input[id="tv40238"]').val() !== "t" && $('input[id="tv40238"]').val() !== "T")
  {
    $('input[id="tv40238"]').css({ opacity: .5 });
    $("#tv40238e").css("visibility","visible");
  	$("#tv40238e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40238"]').css({ opacity: 1 });
    $("#tv40238e").css("visibility","hidden");
  }
  if ($('input[id="tv40239"]').val() !== "t" && $('input[id="tv40239"]').val() !== "T")
  {
    $('input[id="tv40239"]').css({ opacity: .5 });
    $("#tv40239e").css("visibility","visible");
  	$("#tv40239e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40239"]').css({ opacity: 1 });
    $("#tv40239e").css("visibility","hidden");
  }
  if ($('input[id="tv40240"]').val() !== "t" && $('input[id="tv40240"]').val() !== "T")
  {
    $('input[id="tv40240"]').css({ opacity: .5 });
    $("#tv40240e").css("visibility","visible");
  	$("#tv40240e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40240"]').css({ opacity: 1 });
    $("#tv40240e").css("visibility","hidden");
  }
  if ($('input[id="tv40241"]').val() !== "f" && $('input[id="tv40241"]').val() !== "F")
  {
    $('input[id="tv40241"]').css({ opacity: .5 });
    $("#tv40241e").css("visibility","visible");
  	$("#tv40241e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40241"]').css({ opacity: 1 });
    $("#tv40241e").css("visibility","hidden");
  }
  if ($('input[id="tv40242"]').val() !== "f" && $('input[id="tv40242"]').val() !== "F")
  {
    $('input[id="tv40242"]').css({ opacity: .5 });
    $("#tv40242e").css("visibility","visible");
  	$("#tv40242e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40242"]').css({ opacity: 1 });
    $("#tv40242e").css("visibility","hidden");
  }
  if ($('input[id="tv40243"]').val() !== "f" && $('input[id="tv40243"]').val() !== "F")
  {
    $('input[id="tv40243"]').css({ opacity: .5 });
    $("#tv40243e").css("visibility","visible");
  	$("#tv40243e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40243"]').css({ opacity: 1 });
    $("#tv40243e").css("visibility","hidden");
  }
  if ($('input[id="tv40244"]').val() !== "f" && $('input[id="tv40244"]').val() !== "F")
  {
    $('input[id="tv40244"]').css({ opacity: .5 });
    $("#tv40244e").css("visibility","visible");
  	$("#tv40244e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40244"]').css({ opacity: 1 });
    $("#tv40244e").css("visibility","hidden");
  }
  if ($('input[id="tv40245"]').val() !== "t" && $('input[id="tv40245"]').val() !== "T")
  {
    $('input[id="tv40245"]').css({ opacity: .5 });
    $("#tv40245e").css("visibility","visible");
  	$("#tv40245e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40245"]').css({ opacity: 1 });
    $("#tv40245e").css("visibility","hidden");
  }
  if ($('input[id="tv40246"]').val() !== "t" && $('input[id="tv40246"]').val() !== "T")
  {
    $('input[id="tv40246"]').css({ opacity: .5 });
    $("#tv40246e").css("visibility","visible");
  	$("#tv40246e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40246"]').css({ opacity: 1 });
    $("#tv40246e").css("visibility","hidden");
  }
  if ($('input[id="tv40247"]').val() !== "t" && $('input[id="tv40247"]').val() !== "T")
  {
    $('input[id="tv40247"]').css({ opacity: .5 });
    $("#tv40247e").css("visibility","visible");
  	$("#tv40247e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40247"]').css({ opacity: 1 });
    $("#tv40247e").css("visibility","hidden");
  }
  if ($('input[id="tv40248"]').val() !== "t" && $('input[id="tv40248"]').val() !== "T")
  {
    $('input[id="tv40248"]').css({ opacity: .5 });
    $("#tv40248e").css("visibility","visible");
  	$("#tv40248e").css({ opacity: 0.5, "z-index": "-2" });
    $("#402ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40248"]').css({ opacity: 1 });
    $("#tv40248e").css("visibility","hidden");
  }
  if (b2n == 0 || b2n == 1 || b2n == 7 || b2n == 9 || b2n == 8 || b2n == 10 || b2n == 16)
  {
    $("#402mb").css("visibility","visible");
    $("#402mb").css({ opacity: 0.7 });
    $("#402wb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  } else if (b2n == 21 && c2n == 7)
  {
    $("#402mb").css("visibility","hidden");
    $("#402wb").css("visibility","hidden");
    $("#402wrv").css("visibility","hidden");
      if (tn == 48)
      {
      $("#402ct").css("visibility","visible");
      $("#402ct").css({ opacity: 0.7 });
      }
  } else if (c2n != 7)
  {
    if (b2n != 21)
    {
      $("#402wrv").css("visibility","visible");
      $("#402wrv").css({ opacity: 0.7 });
      $("#402wb").css("visibility","visible");
      $("#402wb").css({ opacity: 0.7 });
      $("#402mb").css("visibility","hidden");
      $("#402ct").css("visibility","hidden");
    } else
    {
      $("#402wrv").css("visibility","visible");
      $("#402wrv").css({ opacity: 0.7 });
      $("#402wb").css("visibility","hidden");
      $("#402mb").css("visibility","hidden");
      $("#402ct").css("visibility","hidden");
    }
  } else
  {
    $("#402wb").css("visibility","visible");
    $("#402wb").css({ opacity: 0.7 });
    $("#402wrv").css("visibility","hidden");
    $("#402mb").css("visibility","hidden");
    $("#402ct").css("visibility","hidden");
  }
  if ($('input[name="v2"]:checked').val() == "V")
  {
    $('input[name="v2"]').css({ opacity: .5 });
    $("#402vc").css("visibility","hidden");
    $("#402ve").css("visibility","visible");
    $("#402ve").css({ opacity: 0.5 });
    $("#402ic").css("visibility","hidden");
    $("#402ie").css("visibility","hidden");
    $("#402wv").css("visibility","hidden");
  } else if ($('input[name="v2"]:checked').val() == "I")
  {
    $('input[name="v2"]').css({ opacity: .5 });
    $("#402vc").css("visibility","hidden");
    $("#402ve").css("visibility","hidden");
    $("#402ic").css("visibility","visible");
    $("#402ic").css({ opacity: 0.5 });
    $("#402ie").css("visibility","hidden");
    $("#402wv").css("visibility","hidden");
  } else
  {
    $('input[name="v2"]').css({ opacity: .5 });
    $("#402wv").css("visibility","visible");
    $("#402wv").css({ opacity: 0.7 });
  }
}
// Section 4 #3
var b3n = 0;
var c3n = 0;

function b43b1()
{
  if ($("#403b1").css("visibility") == "hidden")
  {
    $("#403b1").css("visibility","visible");
    $("#403b1").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n + 1;
  } else
  {
    $("#403b1").css("visibility","hidden");
    $("#403b1").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n - 1;
  }
}

function b43b2()
{
  if ($("#403b2").css("visibility") == "hidden")
  {
    $("#403b2").css("visibility","visible");
    $("#403b2").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n + 3;
  } else
  {
    $("#403b2").css("visibility","hidden");
    $("#403b2").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n - 3;
  }
}

function b43b3()
{
  if ($("#403b3").css("visibility") == "hidden")
  {
    $("#403b3").css("visibility","visible");
    $("#403b3").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n + 5;
  } else
  {
    $("#403b3").css("visibility","hidden");
    $("#403b3").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n - 5;
  }
}

function b43b4()
{
  if ($("#403b4").css("visibility") == "hidden")
  {
    $("#403b4").css("visibility","visible");
    $("#403b4").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n + 7;
  } else
  {
    $("#403b4").css("visibility","hidden");
    $("#403b4").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n - 7;
  }
}

function b43b5()
{
  if ($("#403b5").css("visibility") == "hidden")
  {
    $("#403b5").css("visibility","visible");
    $("#403b5").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n + 9;
  } else
  {
    $("#403b5").css("visibility","hidden");
    $("#403b5").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n - 9;
  }
}

function b43b6()
{
  if ($("#403b6").css("visibility") == "hidden")
  {
    $("#403b6").css("visibility","visible");
    $("#403b6").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n + 11;
  } else
  {
    $("#403b6").css("visibility","hidden");
    $("#403b6").css({ opacity: 1, "z-index": "-4" });
    b3n = b3n - 11;
  }
}

function b43c1()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c11").css("visibility") == "hidden")
      {
        $("#403c11").css("visibility","visible");
        $("#403c11").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 1;
      } else
      {
        $("#403c11").css("visibility","hidden");
        $("#403c11").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 1;
      }
      if ($("#403c51").css("visibility") == "hidden")
      {
        $("#403c51").css("visibility","visible");
        $("#403c51").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c51").css("visibility","hidden");
        $("#403c51").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c61").css("visibility") == "hidden")
      {
        $("#403c61").css("visibility","visible");
        $("#403c61").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c61").css("visibility","hidden");
        $("#403c61").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c2()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c12").css("visibility") == "hidden")
      {
        $("#403c12").css("visibility","visible");
        $("#403c12").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 3;
      } else
      {
        $("#403c12").css("visibility","hidden");
        $("#403c12").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 3;
      }
      if ($("#403c52").css("visibility") == "hidden")
      {
        $("#403c52").css("visibility","visible");
        $("#403c52").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c52").css("visibility","hidden");
        $("#403c52").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c62").css("visibility") == "hidden")
      {
        $("#403c62").css("visibility","visible");
        $("#403c62").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c62").css("visibility","hidden");
        $("#403c62").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c3()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c13").css("visibility") == "hidden")
      {
        $("#403c13").css("visibility","visible");
        $("#403c13").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 5;
      } else
      {
        $("#403c13").css("visibility","hidden");
        $("#403c13").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 5;
      }
      if ($("#403c53").css("visibility") == "hidden")
      {
        $("#403c53").css("visibility","visible");
        $("#403c53").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c53").css("visibility","hidden");
        $("#403c53").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c63").css("visibility") == "hidden")
      {
        $("#403c63").css("visibility","visible");
        $("#403c63").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c63").css("visibility","hidden");
        $("#403c63").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c4()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c14").css("visibility") == "hidden")
      {
        $("#403c14").css("visibility","visible");
        $("#403c14").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 7;
      } else
      {
        $("#403c14").css("visibility","hidden");
        $("#403c14").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 7;
      }
      if ($("#403c54").css("visibility") == "hidden")
      {
        $("#403c54").css("visibility","visible");
        $("#403c54").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c54").css("visibility","hidden");
        $("#403c54").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c64").css("visibility") == "hidden")
      {
        $("#403c64").css("visibility","visible");
        $("#403c64").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c64").css("visibility","hidden");
        $("#403c64").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c5()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c15").css("visibility") == "hidden")
      {
        $("#403c15").css("visibility","visible");
        $("#403c15").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 9;
      } else
      {
        $("#403c15").css("visibility","hidden");
        $("#403c15").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 9;
      }
      if ($("#403c55").css("visibility") == "hidden")
      {
        $("#403c55").css("visibility","visible");
        $("#403c55").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c55").css("visibility","hidden");
        $("#403c55").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c65").css("visibility") == "hidden")
      {
        $("#403c65").css("visibility","visible");
        $("#403c65").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c65").css("visibility","hidden");
        $("#403c65").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c6()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c16").css("visibility") == "hidden")
      {
        $("#403c16").css("visibility","visible");
        $("#403c16").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 11;
      } else
      {
        $("#403c16").css("visibility","hidden");
        $("#403c16").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 11;
      }
      if ($("#403c56").css("visibility") == "hidden")
      {
        $("#403c56").css("visibility","visible");
        $("#403c56").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c56").css("visibility","hidden");
        $("#403c56").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c66").css("visibility") == "hidden")
      {
        $("#403c66").css("visibility","visible");
        $("#403c66").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c66").css("visibility","hidden");
        $("#403c66").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c7()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c17").css("visibility") == "hidden")
      {
        $("#403c17").css("visibility","visible");
        $("#403c17").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 13;
      } else
      {
        $("#403c17").css("visibility","hidden");
        $("#403c17").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 13;
      }
      if ($("#403c57").css("visibility") == "hidden")
      {
        $("#403c57").css("visibility","visible");
        $("#403c57").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c57").css("visibility","hidden");
        $("#403c57").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c67").css("visibility") == "hidden")
      {
        $("#403c67").css("visibility","visible");
        $("#403c67").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c67").css("visibility","hidden");
        $("#403c67").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function b43c8()
{
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  else if (b3n == 21)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden")
    {
      if ($("#403c18").css("visibility") == "hidden")
      {
        $("#403c18").css("visibility","visible");
        $("#403c18").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n + 15;
      } else
      {
        $("#403c18").css("visibility","hidden");
        $("#403c18").css({ opacity: 1, "z-index": "-3" });
        c3n = c3n - 15;
      }
      if ($("#403c58").css("visibility") == "hidden")
      {
        $("#403c58").css("visibility","visible");
        $("#403c58").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c58").css("visibility","hidden");
        $("#403c58").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#403c68").css("visibility") == "hidden")
      {
        $("#403c68").css("visibility","visible");
        $("#403c68").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#403c68").css("visibility","hidden");
        $("#403c68").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
}

function checkanswer43()
{
  var tn = 0;
  if ($('input[id="tv40301"]').val() !== "f" && $('input[id="tv40301"]').val() !== "F")
  {
    $('input[id="tv40301"]').css({ opacity: .5 });
    $("#tv40301e").css("visibility","visible");
  	$("#tv40301e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40301"]').css({ opacity: 1 });
    $("#tv40301e").css("visibility","hidden");
  }
  if ($('input[id="tv40302"]').val() !== "f" && $('input[id="tv40302"]').val() !== "F")
  {
    $('input[id="tv40302"]').css({ opacity: .5 });
    $("#tv40302e").css("visibility","visible");
  	$("#tv40302e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40302"]').css({ opacity: 1 });
    $("#tv40302e").css("visibility","hidden");
  }
  if ($('input[id="tv40303"]').val() !== "t" && $('input[id="tv40303"]').val() !== "T")
  {
    $('input[id="tv40303"]').css({ opacity: .5 });
    $("#tv40303e").css("visibility","visible");
  	$("#tv40303e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40303"]').css({ opacity: 1 });
    $("#tv40303e").css("visibility","hidden");
  }
  if ($('input[id="tv40304"]').val() !== "t" && $('input[id="tv40304"]').val() !== "T")
    {
    $('input[id="tv40304"]').css({ opacity: .5 });
    $("#tv40304e").css("visibility","visible");
  	$("#tv40304e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40304"]').css({ opacity: 1 });
    $("#tv40304e").css("visibility","hidden");
  }
  if ($('input[id="tv40305"]').val() !== "f" && $('input[id="tv40305"]').val() !== "F")
  {
    $('input[id="tv40305"]').css({ opacity: .5 });
    $("#tv40305e").css("visibility","visible");
  	$("#tv40305e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40305"]').css({ opacity: 1 });
    $("#tv40305e").css("visibility","hidden");
  }
  if ($('input[id="tv40306"]').val() !== "f" && $('input[id="tv40306"]').val() !== "F")
  {
    $('input[id="tv40306"]').css({ opacity: .5 });
    $("#tv40306e").css("visibility","visible");
  	$("#tv40306e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40306"]').css({ opacity: 1 });
    $("#tv40306e").css("visibility","hidden");
  }
  if ($('input[id="tv40307"]').val() !== "t" && $('input[id="tv40307"]').val() !== "T")
  {
    $('input[id="tv40307"]').css({ opacity: .5 });
    $("#tv40307e").css("visibility","visible");
  	$("#tv40307e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40307"]').css({ opacity: 1 });
    $("#tv40307e").css("visibility","hidden");
  }
  if ($('input[id="tv40308"]').val() !== "t" && $('input[id="tv40308"]').val() !== "T")
  {
    $('input[id="tv40308"]').css({ opacity: .5 });
    $("#tv40308e").css("visibility","visible");
  	$("#tv40308e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40308"]').css({ opacity: 1 });
    $("#tv40308e").css("visibility","hidden");
  }
  if ($('input[id="tv40309"]').val() !== "f" && $('input[id="tv40309"]').val() !== "F")
  {
    $('input[id="tv40309"]').css({ opacity: .5 });
    $("#tv40309e").css("visibility","visible");
  	$("#tv40309e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40309"]').css({ opacity: 1 });
    $("#tv40309e").css("visibility","hidden");
  }
  if ($('input[id="tv40310"]').val() !== "f" && $('input[id="tv40310"]').val() !== "F")
  {
    $('input[id="tv40310"]').css({ opacity: .5 });
    $("#tv40310e").css("visibility","visible");
  	$("#tv40310e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40310"]').css({ opacity: 1 });
    $("#tv40310e").css("visibility","hidden");
  }
  if ($('input[id="tv40311"]').val() !== "t" && $('input[id="tv40311"]').val() !== "T")
  {
    $('input[id="tv40311"]').css({ opacity: .5 });
    $("#tv40311e").css("visibility","visible");
  	$("#tv40311e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40311"]').css({ opacity: 1 });
    $("#tv40311e").css("visibility","hidden");
  }
  if ($('input[id="tv40312"]').val() !== "t" && $('input[id="tv40312"]').val() !== "T")
  {
    $('input[id="tv40312"]').css({ opacity: .5 });
    $("#tv40312e").css("visibility","visible");
  	$("#tv40312e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40312"]').css({ opacity: 1 });
    $("#tv40312e").css("visibility","hidden");
  }
  if ($('input[id="tv40313"]').val() !== "t" && $('input[id="tv40313"]').val() !== "T")
  {
    $('input[id="tv40313"]').css({ opacity: .5 });
    $("#tv40313e").css("visibility","visible");
  	$("#tv40313e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40313"]').css({ opacity: 1 });
    $("#tv40313e").css("visibility","hidden");
  }
  if ($('input[id="tv40314"]').val() !== "t" && $('input[id="tv40314"]').val() !== "T")
  {
    $('input[id="tv40314"]').css({ opacity: .5 });
    $("#tv40314e").css("visibility","visible");
  	$("#tv40314e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40314"]').css({ opacity: 1 });
    $("#tv40314e").css("visibility","hidden");
  }
  if ($('input[id="tv40315"]').val() !== "t" && $('input[id="tv40315"]').val() !== "T")
  {
    $('input[id="tv40315"]').css({ opacity: .5 });
    $("#tv40315e").css("visibility","visible");
  	$("#tv40315e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40315"]').css({ opacity: 1 });
    $("#tv40315e").css("visibility","hidden");
  }
  if ($('input[id="tv40316"]').val() !== "t" && $('input[id="tv40316"]').val() !== "T")
  {
    $('input[id="tv40316"]').css({ opacity: .5 });
    $("#tv40316e").css("visibility","visible");
  	$("#tv40316e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40316"]').css({ opacity: 1 });
    $("#tv40316e").css("visibility","hidden");
  }
  if ($('input[id="tv40317"]').val() !== "f" && $('input[id="tv40317"]').val() !== "F")
  {
    $('input[id="tv40317"]').css({ opacity: .5 });
    $("#tv40317e").css("visibility","visible");
  	$("#tv40317e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40317"]').css({ opacity: 1 });
    $("#tv40317e").css("visibility","hidden");
  }
  if ($('input[id="tv40318"]').val() !== "t" && $('input[id="tv40318"]').val() !== "T")
  {
    $('input[id="tv40318"]').css({ opacity: .5 });
    $("#tv40318e").css("visibility","visible");
  	$("#tv40318e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40318"]').css({ opacity: 1 });
    $("#tv40318e").css("visibility","hidden");
  }
  if ($('input[id="tv40319"]').val() !== "f" && $('input[id="tv40319"]').val() !== "F")
  {
    $('input[id="tv40319"]').css({ opacity: .5 });
    $("#tv40319e").css("visibility","visible");
  	$("#tv40319e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40319"]').css({ opacity: 1 });
    $("#tv40319e").css("visibility","hidden");
  }
  if ($('input[id="tv40320"]').val() !== "t" && $('input[id="tv40320"]').val() !== "T")
  {
    $('input[id="tv40320"]').css({ opacity: .5 });
    $("#tv40320e").css("visibility","visible");
  	$("#tv40320e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40320"]').css({ opacity: 1 });
    $("#tv40320e").css("visibility","hidden");
  }
  if ($('input[id="tv40321"]').val() !== "f" && $('input[id="tv40321"]').val() !== "F")
  {
    $('input[id="tv40321"]').css({ opacity: .5 });
    $("#tv40321e").css("visibility","visible");
  	$("#tv40321e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40321"]').css({ opacity: 1 });
    $("#tv40321e").css("visibility","hidden");
  }
  if ($('input[id="tv40322"]').val() !== "t" && $('input[id="tv40322"]').val() !== "T")
  {
    $('input[id="tv40322"]').css({ opacity: .5 });
    $("#tv40322e").css("visibility","visible");
  	$("#tv40322e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40322"]').css({ opacity: 1 });
    $("#tv40322e").css("visibility","hidden");
  }
  if ($('input[id="tv40323"]').val() !== "f" && $('input[id="tv40323"]').val() !== "F")
  {
    $('input[id="tv40323"]').css({ opacity: .5 });
    $("#tv40323e").css("visibility","visible");
  	$("#tv40323e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40323"]').css({ opacity: 1 });
    $("#tv40323e").css("visibility","hidden");
  }
  if ($('input[id="tv40324"]').val() !== "t" && $('input[id="tv40324"]').val() !== "T")
  {
    $('input[id="tv40324"]').css({ opacity: .5 });
    $("#tv40324e").css("visibility","visible");
  	$("#tv40324e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40324"]').css({ opacity: 1 });
    $("#tv40324e").css("visibility","hidden");
  }
  if ($('input[id="tv40325"]').val() !== "t" && $('input[id="tv40325"]').val() !== "T")
  {
    $('input[id="tv40325"]').css({ opacity: .5 });
    $("#tv40325e").css("visibility","visible");
  	$("#tv40325e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40325"]').css({ opacity: 1 });
    $("#tv40325e").css("visibility","hidden");
  }
  if ($('input[id="tv40326"]').val() !== "t" && $('input[id="tv40326"]').val() !== "T")
  {
    $('input[id="tv40326"]').css({ opacity: .5 });
    $("#tv40326e").css("visibility","visible");
  	$("#tv40326e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40326"]').css({ opacity: 1 });
    $("#tv40326e").css("visibility","hidden");
  }
  if ($('input[id="tv40327"]').val() !== "t" && $('input[id="tv40327"]').val() !== "T")
  {
    $('input[id="tv40327"]').css({ opacity: .5 });
    $("#tv40327e").css("visibility","visible");
  	$("#tv40327e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40327"]').css({ opacity: 1 });
    $("#tv40327e").css("visibility","hidden");
  }
  if ($('input[id="tv40328"]').val() !== "f" && $('input[id="tv40328"]').val() !== "F")
  {
    $('input[id="tv40328"]').css({ opacity: .5 });
    $("#tv40328e").css("visibility","visible");
  	$("#tv40328e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40328"]').css({ opacity: 1 });
    $("#tv40328e").css("visibility","hidden");
  }
  if ($('input[id="tv40329"]').val() !== "t" && $('input[id="tv40329"]').val() !== "T")
  {
    $('input[id="tv40329"]').css({ opacity: .5 });
    $("#tv40329e").css("visibility","visible");
  	$("#tv40329e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40329"]').css({ opacity: 1 });
    $("#tv40329e").css("visibility","hidden");
  }
  if ($('input[id="tv40330"]').val() !== "t" && $('input[id="tv40330"]').val() !== "T")
  {
    $('input[id="tv40330"]').css({ opacity: .5 });
    $("#tv40330e").css("visibility","visible");
  	$("#tv40330e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40330"]').css({ opacity: 1 });
    $("#tv40330e").css("visibility","hidden");
  }
  if ($('input[id="tv40331"]').val() !== "t" && $('input[id="tv40331"]').val() !== "T")
  {
    $('input[id="tv40331"]').css({ opacity: .5 });
    $("#tv40331e").css("visibility","visible");
  	$("#tv40331e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40331"]').css({ opacity: 1 });
    $("#tv40331e").css("visibility","hidden");
  }
  if ($('input[id="tv40332"]').val() !== "f" && $('input[id="tv40332"]').val() !== "F")
  {
    $('input[id="tv40332"]').css({ opacity: .5 });
    $("#tv40332e").css("visibility","visible");
  	$("#tv40332e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40332"]').css({ opacity: 1 });
    $("#tv40332e").css("visibility","hidden");
  }
  if ($('input[id="tv40333"]').val() !== "t" && $('input[id="tv40333"]').val() !== "T")
  {
    $('input[id="tv40333"]').css({ opacity: .5 });
    $("#tv40333e").css("visibility","visible");
  	$("#tv40333e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40333"]').css({ opacity: 1 });
    $("#tv40333e").css("visibility","hidden");
  }
  if ($('input[id="tv40334"]').val() !== "t" && $('input[id="tv40334"]').val() !== "T")
  {
    $('input[id="tv40334"]').css({ opacity: .5 });
    $("#tv40334e").css("visibility","visible");
  	$("#tv40334e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40334"]').css({ opacity: 1 });
    $("#tv40334e").css("visibility","hidden");
  }
  if ($('input[id="tv40335"]').val() !== "t" && $('input[id="tv40335"]').val() !== "T")
  {
    $('input[id="tv40335"]').css({ opacity: .5 });
    $("#tv40335e").css("visibility","visible");
  	$("#tv40335e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40335"]').css({ opacity: 1 });
    $("#tv40335e").css("visibility","hidden");
  }
  if ($('input[id="tv40336"]').val() !== "t" && $('input[id="tv40336"]').val() !== "T")
  {
    $('input[id="tv40336"]').css({ opacity: .5 });
    $("#tv40336e").css("visibility","visible");
  	$("#tv40336e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40336"]').css({ opacity: 1 });
    $("#tv40336e").css("visibility","hidden");
  }
  if ($('input[id="tv40337"]').val() !== "t" && $('input[id="tv40337"]').val() !== "T")
  {
    $('input[id="tv40337"]').css({ opacity: .5 });
    $("#tv40337e").css("visibility","visible");
  	$("#tv40337e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40337"]').css({ opacity: 1 });
    $("#tv40337e").css("visibility","hidden");
  }
  if ($('input[id="tv40338"]').val() !== "t" && $('input[id="tv40338"]').val() !== "T")
  {
    $('input[id="tv40338"]').css({ opacity: .5 });
    $("#tv40338e").css("visibility","visible");
  	$("#tv40338e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40338"]').css({ opacity: 1 });
    $("#tv40338e").css("visibility","hidden");
  }
  if ($('input[id="tv40339"]').val() !== "t" && $('input[id="tv40339"]').val() !== "T")
  {
    $('input[id="tv40339"]').css({ opacity: .5 });
    $("#tv40339e").css("visibility","visible");
  	$("#tv40339e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40339"]').css({ opacity: 1 });
    $("#tv40339e").css("visibility","hidden");
  }
  if ($('input[id="tv40340"]').val() !== "f" && $('input[id="tv40340"]').val() !== "F")
  {
    $('input[id="tv40340"]').css({ opacity: .5 });
    $("#tv40340e").css("visibility","visible");
  	$("#tv40340e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40340"]').css({ opacity: 1 });
    $("#tv40340e").css("visibility","hidden");
  }
  if ($('input[id="tv40341"]').val() !== "t" && $('input[id="tv40341"]').val() !== "T")
  {
    $('input[id="tv40341"]').css({ opacity: .5 });
    $("#tv40341e").css("visibility","visible");
  	$("#tv40341e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40341"]').css({ opacity: 1 });
    $("#tv40341e").css("visibility","hidden");
  }
  if ($('input[id="tv40342"]').val() !== "t" && $('input[id="tv40342"]').val() !== "T")
  {
    $('input[id="tv40342"]').css({ opacity: .5 });
    $("#tv40342e").css("visibility","visible");
  	$("#tv40342e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40342"]').css({ opacity: 1 });
    $("#tv40342e").css("visibility","hidden");
  }
  if ($('input[id="tv40343"]').val() !== "t" && $('input[id="tv40343"]').val() !== "T")
  {
    $('input[id="tv40343"]').css({ opacity: .5 });
    $("#tv40343e").css("visibility","visible");
  	$("#tv40343e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40343"]').css({ opacity: 1 });
    $("#tv40343e").css("visibility","hidden");
  }
  if ($('input[id="tv40344"]').val() !== "t" && $('input[id="tv40344"]').val() !== "T")
  {
    $('input[id="tv40344"]').css({ opacity: .5 });
    $("#tv40344e").css("visibility","visible");
  	$("#tv40344e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40344"]').css({ opacity: 1 });
    $("#tv40344e").css("visibility","hidden");
  }
  if ($('input[id="tv40345"]').val() !== "f" && $('input[id="tv40345"]').val() !== "F")
  {
    $('input[id="tv40345"]').css({ opacity: .5 });
    $("#tv40345e").css("visibility","visible");
  	$("#tv40345e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40345"]').css({ opacity: 1 });
    $("#tv40345e").css("visibility","hidden");
  }
  if ($('input[id="tv40346"]').val() !== "t" && $('input[id="tv40346"]').val() !== "T")
  {
    $('input[id="tv40346"]').css({ opacity: .5 });
    $("#tv40346e").css("visibility","visible");
  	$("#tv40346e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40346"]').css({ opacity: 1 });
    $("#tv40346e").css("visibility","hidden");
  }
  if ($('input[id="tv40347"]').val() !== "f" && $('input[id="tv40347"]').val() !== "F")
  {
    $('input[id="tv40347"]').css({ opacity: .5 });
    $("#tv40347e").css("visibility","visible");
  	$("#tv40347e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40347"]').css({ opacity: 1 });
    $("#tv40347e").css("visibility","hidden");
  }
  if ($('input[id="tv40348"]').val() !== "t" && $('input[id="tv40348"]').val() !== "T")
  {
    $('input[id="tv40348"]').css({ opacity: .5 });
    $("#tv40348e").css("visibility","visible");
  	$("#tv40348e").css({ opacity: 0.5, "z-index": "-2" });
    $("#403ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40348"]').css({ opacity: 1 });
    $("#tv40348e").css("visibility","hidden");
  }
  if (b3n == 0 || b3n == 1 || b3n == 9 || b3n == 11 || b3n == 10 || b3n == 12 || b3n == 20)
  {
    $("#403mb").css("visibility","visible");
    $("#403mb").css({ opacity: 0.7 });
    $("#403wb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  } else if (b3n == 21 && c3n == 22)
  {
    $("#403mb").css("visibility","hidden");
    $("#403wb").css("visibility","hidden");
    $("#403wrv").css("visibility","hidden");
      if (tn == 48)
      {
      $("#403ct").css("visibility","visible");
      $("#403ct").css({ opacity: 0.7 });
      }
  } else if (c3n != 22)
  {
    if (b3n != 21)
    {
      $("#403wrv").css("visibility","visible");
      $("#403wrv").css({ opacity: 0.7 });
      $("#403wb").css("visibility","visible");
      $("#403wb").css({ opacity: 0.7 });
      $("#403mb").css("visibility","hidden");
      $("#403ct").css("visibility","hidden");
    } else
    {
      $("#403wrv").css("visibility","visible");
      $("#403wrv").css({ opacity: 0.7 });
      $("#403wb").css("visibility","hidden");
      $("#403mb").css("visibility","hidden");
      $("#403ct").css("visibility","hidden");
    }
  } else
  {
    $("#403wb").css("visibility","visible");
    $("#403wb").css({ opacity: 0.7 });
    $("#403wrv").css("visibility","hidden");
    $("#403mb").css("visibility","hidden");
    $("#403ct").css("visibility","hidden");
  }
  if ($('input[name="v3"]:checked').val() == "V")
  {
    $('input[name="v3"]').css({ opacity: .5 });
    $("#403vc").css("visibility","hidden");
    $("#403ve").css("visibility","visible");
    $("#403ve").css({ opacity: 0.5 });
    $("#403ic").css("visibility","hidden");
    $("#403ie").css("visibility","hidden");
    $("#403wv").css("visibility","hidden");
  } else if ($('input[name="v3"]:checked').val() == "I")
  {
    $('input[name="v3"]').css({ opacity: .5 });
    $("#403vc").css("visibility","hidden");
    $("#403ve").css("visibility","hidden");
    $("#403ic").css("visibility","visible");
    $("#403ic").css({ opacity: 0.5 });
    $("#403ie").css("visibility","hidden");
    $("#403wv").css("visibility","hidden");
  } else
  {
    $('input[name="v3"]').css({ opacity: .5 });
    $("#403wv").css("visibility","visible");
    $("#403wv").css({ opacity: 0.7 });
  }
}
// Section 4 #4
var b4n = 0;
var c4n = 0;

function b44b1()
{
  if ($("#404b1").css("visibility") == "hidden")
  {
    $("#404b1").css("visibility","visible");
    $("#404b1").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 1;
  } else
  {
    $("#404b1").css("visibility","hidden");
    $("#404b1").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 1;
  }
}

function b44b2()
{
  if ($("#404b2").css("visibility") == "hidden")
  {
    $("#404b2").css("visibility","visible");
    $("#404b2").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 3;
  } else
  {
    $("#404b2").css("visibility","hidden");
    $("#404b2").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 3;
  }
}

function b44b3()
{
  if ($("#404b3").css("visibility") == "hidden")
  {
    $("#404b3").css("visibility","visible");
    $("#404b3").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 5;
  } else
  {
    $("#404b3").css("visibility","hidden");
    $("#404b3").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 5;
  }
}

function b44b4()
{
  if ($("#404b4").css("visibility") == "hidden")
  {
    $("#404b4").css("visibility","visible");
    $("#404b4").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 7;
  } else
  {
    $("#404b4").css("visibility","hidden");
    $("#404b4").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 7;
  }
}

function b44b5()
{
  if ($("#404b5").css("visibility") == "hidden")
  {
    $("#404b5").css("visibility","visible");
    $("#404b5").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 9;
  } else
  {
    $("#404b5").css("visibility","hidden");
    $("#404b5").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 9;
  }
}

function b44b6()
{
  if ($("#404b6").css("visibility") == "hidden")
  {
    $("#404b6").css("visibility","visible");
    $("#404b6").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 11;
  } else
  {
    $("#404b6").css("visibility","hidden");
    $("#404b6").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 11;
  }
}

function b44b7()
{
  if ($("#404b7").css("visibility") == "hidden")
  {
    $("#404b7").css("visibility","visible");
    $("#404b7").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n + 13;
  } else
  {
    $("#404b7").css("visibility","hidden");
    $("#404b7").css({ opacity: 1, "z-index": "-4" });
    b4n = b4n - 13;
  }
}

function b44c1()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c11").css("visibility") == "hidden")
      {
        $("#404c11").css("visibility","visible");
        $("#404c11").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 1;
      } else
      {
        $("#404c11").css("visibility","hidden");
        $("#404c11").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 1;
      }
      if ($("#404c41").css("visibility") == "hidden")
      {
        $("#404c41").css("visibility","visible");
        $("#404c41").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c41").css("visibility","hidden");
        $("#404c41").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c71").css("visibility") == "hidden")
      {
        $("#404c71").css("visibility","visible");
        $("#404c71").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c71").css("visibility","hidden");
        $("#404c71").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c2()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c12").css("visibility") == "hidden")
      {
        $("#404c12").css("visibility","visible");
        $("#404c12").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 3;
      } else
      {
        $("#404c12").css("visibility","hidden");
        $("#404c12").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 3;
      }
      if ($("#404c42").css("visibility") == "hidden")
      {
        $("#404c42").css("visibility","visible");
        $("#404c42").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c42").css("visibility","hidden");
        $("#404c42").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c72").css("visibility") == "hidden")
      {
        $("#404c72").css("visibility","visible");
        $("#404c72").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c72").css("visibility","hidden");
        $("#404c72").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c3()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c13").css("visibility") == "hidden")
      {
        $("#404c13").css("visibility","visible");
        $("#404c13").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 5;
      } else
      {
        $("#404c13").css("visibility","hidden");
        $("#404c13").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 5;
      }
      if ($("#404c43").css("visibility") == "hidden")
      {
        $("#404c43").css("visibility","visible");
        $("#404c43").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c43").css("visibility","hidden");
        $("#404c43").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c73").css("visibility") == "hidden")
      {
        $("#404c73").css("visibility","visible");
        $("#404c73").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c73").css("visibility","hidden");
        $("#404c73").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c4()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c14").css("visibility") == "hidden")
      {
        $("#404c14").css("visibility","visible");
        $("#404c14").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 7;
      } else
      {
        $("#404c14").css("visibility","hidden");
        $("#404c14").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 7;
      }
      if ($("#404c44").css("visibility") == "hidden")
      {
        $("#404c44").css("visibility","visible");
        $("#404c44").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c44").css("visibility","hidden");
        $("#404c44").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c74").css("visibility") == "hidden")
      {
        $("#404c74").css("visibility","visible");
        $("#404c74").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c74").css("visibility","hidden");
        $("#404c74").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c5()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c15").css("visibility") == "hidden")
      {
        $("#404c15").css("visibility","visible");
        $("#404c15").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 9;
      } else
      {
        $("#404c15").css("visibility","hidden");
        $("#404c15").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 9;
      }
      if ($("#404c45").css("visibility") == "hidden")
      {
        $("#404c45").css("visibility","visible");
        $("#404c45").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c45").css("visibility","hidden");
        $("#404c45").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c75").css("visibility") == "hidden")
      {
        $("#404c75").css("visibility","visible");
        $("#404c75").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c75").css("visibility","hidden");
        $("#404c75").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c6()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c16").css("visibility") == "hidden")
      {
        $("#404c16").css("visibility","visible");
        $("#404c16").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 11;
      } else
      {
        $("#404c16").css("visibility","hidden");
        $("#404c16").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 11;
      }
      if ($("#404c46").css("visibility") == "hidden")
      {
        $("#404c46").css("visibility","visible");
        $("#404c46").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c46").css("visibility","hidden");
        $("#404c46").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c76").css("visibility") == "hidden")
      {
        $("#404c76").css("visibility","visible");
        $("#404c76").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c76").css("visibility","hidden");
        $("#404c76").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c7()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c17").css("visibility") == "hidden")
      {
        $("#404c17").css("visibility","visible");
        $("#404c17").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 13;
      } else
      {
        $("#404c17").css("visibility","hidden");
        $("#404c17").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 13;
      }
      if ($("#404c47").css("visibility") == "hidden")
      {
        $("#404c47").css("visibility","visible");
        $("#404c47").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c47").css("visibility","hidden");
        $("#404c47").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c77").css("visibility") == "hidden")
      {
        $("#404c77").css("visibility","visible");
        $("#404c77").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c77").css("visibility","hidden");
        $("#404c77").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function b44c8()
{
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  else if (b4n == 21)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden")
    {
      if ($("#404c18").css("visibility") == "hidden")
      {
        $("#404c18").css("visibility","visible");
        $("#404c18").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n + 15;
      } else
      {
        $("#404c18").css("visibility","hidden");
        $("#404c18").css({ opacity: 1, "z-index": "-3" });
        c4n = c4n - 15;
      }
      if ($("#404c48").css("visibility") == "hidden")
      {
        $("#404c48").css("visibility","visible");
        $("#404c48").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c48").css("visibility","hidden");
        $("#404c48").css({ opacity: 1, "z-index": "-3" });
      }
      if ($("#404c78").css("visibility") == "hidden")
      {
        $("#404c78").css("visibility","visible");
        $("#404c78").css({ opacity: 1, "z-index": "-3" });
      } else
      {
        $("#404c78").css("visibility","hidden");
        $("#404c78").css({ opacity: 1, "z-index": "-3" });
      }
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
}

function checkanswer44()
{
  var tn = 0;
  if ($('input[id="tv40401"]').val() !== "t" && $('input[id="tv40401"]').val() !== "T")
  {
    $('input[id="tv40401"]').css({ opacity: .5 });
    $("#tv40401e").css("visibility","visible");
  	$("#tv40401e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40401"]').css({ opacity: 1 });
    $("#tv40401e").css("visibility","hidden");
  }
  if ($('input[id="tv40402"]').val() !== "t" && $('input[id="tv40402"]').val() !== "T")
  {
    $('input[id="tv40402"]').css({ opacity: .5 });
    $("#tv40402e").css("visibility","visible");
  	$("#tv40402e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40402"]').css({ opacity: 1 });
    $("#tv40402e").css("visibility","hidden");
  }
  if ($('input[id="tv40403"]').val() !== "t" && $('input[id="tv40403"]').val() !== "T")
  {
    $('input[id="tv40403"]').css({ opacity: .5 });
    $("#tv40403e").css("visibility","visible");
  	$("#tv40403e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40403"]').css({ opacity: 1 });
    $("#tv40403e").css("visibility","hidden");
  }
  if ($('input[id="tv40404"]').val() !== "t" && $('input[id="tv40404"]').val() !== "T")
    {
    $('input[id="tv40404"]').css({ opacity: .5 });
    $("#tv40404e").css("visibility","visible");
  	$("#tv40404e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40404"]').css({ opacity: 1 });
    $("#tv40404e").css("visibility","hidden");
  }
  if ($('input[id="tv40405"]').val() !== "t" && $('input[id="tv40405"]').val() !== "T")
  {
    $('input[id="tv40405"]').css({ opacity: .5 });
    $("#tv40405e").css("visibility","visible");
  	$("#tv40405e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40405"]').css({ opacity: 1 });
    $("#tv40405e").css("visibility","hidden");
  }
  if ($('input[id="tv40406"]').val() !== "t" && $('input[id="tv40406"]').val() !== "T")
  {
    $('input[id="tv40406"]').css({ opacity: .5 });
    $("#tv40406e").css("visibility","visible");
  	$("#tv40406e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40406"]').css({ opacity: 1 });
    $("#tv40406e").css("visibility","hidden");
  }
  if ($('input[id="tv40407"]').val() !== "f" && $('input[id="tv40407"]').val() !== "F")
  {
    $('input[id="tv40407"]').css({ opacity: .5 });
    $("#tv40407e").css("visibility","visible");
  	$("#tv40407e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40407"]').css({ opacity: 1 });
    $("#tv40407e").css("visibility","hidden");
  }
  if ($('input[id="tv40408"]').val() !== "f" && $('input[id="tv40408"]').val() !== "F")
  {
    $('input[id="tv40408"]').css({ opacity: .5 });
    $("#tv40408e").css("visibility","visible");
  	$("#tv40408e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40408"]').css({ opacity: 1 });
    $("#tv40408e").css("visibility","hidden");
  }
  if ($('input[id="tv40409"]').val() !== "f" && $('input[id="tv40409"]').val() !== "F")
  {
    $('input[id="tv40409"]').css({ opacity: .5 });
    $("#tv40409e").css("visibility","visible");
  	$("#tv40409e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40409"]').css({ opacity: 1 });
    $("#tv40409e").css("visibility","hidden");
  }
  if ($('input[id="tv40410"]').val() !== "f" && $('input[id="tv40410"]').val() !== "F")
  {
    $('input[id="tv40410"]').css({ opacity: .5 });
    $("#tv40410e").css("visibility","visible");
  	$("#tv40410e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40410"]').css({ opacity: 1 });
    $("#tv40410e").css("visibility","hidden");
  }
  if ($('input[id="tv40411"]').val() !== "f" && $('input[id="tv40411"]').val() !== "F")
  {
    $('input[id="tv40411"]').css({ opacity: .5 });
    $("#tv40411e").css("visibility","visible");
  	$("#tv40411e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40411"]').css({ opacity: 1 });
    $("#tv40411e").css("visibility","hidden");
  }
  if ($('input[id="tv40412"]').val() !== "f" && $('input[id="tv40412"]').val() !== "F")
  {
    $('input[id="tv40412"]').css({ opacity: .5 });
    $("#tv40412e").css("visibility","visible");
  	$("#tv40412e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40412"]').css({ opacity: 1 });
    $("#tv40412e").css("visibility","hidden");
  }
  if ($('input[id="tv40413"]').val() !== "f" && $('input[id="tv40413"]').val() !== "F")
  {
    $('input[id="tv40413"]').css({ opacity: .5 });
    $("#tv40413e").css("visibility","visible");
  	$("#tv40413e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40413"]').css({ opacity: 1 });
    $("#tv40413e").css("visibility","hidden");
  }
  if ($('input[id="tv40414"]').val() !== "f" && $('input[id="tv40414"]').val() !== "F")
  {
    $('input[id="tv40414"]').css({ opacity: .5 });
    $("#tv40414e").css("visibility","visible");
  	$("#tv40414e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40414"]').css({ opacity: 1 });
    $("#tv40414e").css("visibility","hidden");
  }
  if ($('input[id="tv40415"]').val() !== "t" && $('input[id="tv40415"]').val() !== "T")
  {
    $('input[id="tv40415"]').css({ opacity: .5 });
    $("#tv40415e").css("visibility","visible");
  	$("#tv40415e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40415"]').css({ opacity: 1 });
    $("#tv40415e").css("visibility","hidden");
  }
  if ($('input[id="tv40416"]').val() !== "t" && $('input[id="tv40416"]').val() !== "T")
  {
    $('input[id="tv40416"]').css({ opacity: .5 });
    $("#tv40416e").css("visibility","visible");
  	$("#tv40416e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40416"]').css({ opacity: 1 });
    $("#tv40416e").css("visibility","hidden");
  }
  if ($('input[id="tv40417"]').val() !== "t" && $('input[id="tv40417"]').val() !== "T")
  {
    $('input[id="tv40417"]').css({ opacity: .5 });
    $("#tv40417e").css("visibility","visible");
  	$("#tv40417e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40417"]').css({ opacity: 1 });
    $("#tv40417e").css("visibility","hidden");
  }
  if ($('input[id="tv40418"]').val() !== "t" && $('input[id="tv40418"]').val() !== "T")
  {
    $('input[id="tv40418"]').css({ opacity: .5 });
    $("#tv40418e").css("visibility","visible");
  	$("#tv40418e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40418"]').css({ opacity: 1 });
    $("#tv40418e").css("visibility","hidden");
  }
  if ($('input[id="tv40419"]').val() !== "f" && $('input[id="tv40419"]').val() !== "F")
  {
    $('input[id="tv40419"]').css({ opacity: .5 });
    $("#tv40419e").css("visibility","visible");
  	$("#tv40419e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40419"]').css({ opacity: 1 });
    $("#tv40419e").css("visibility","hidden");
  }
  if ($('input[id="tv40420"]').val() !== "f" && $('input[id="tv40420"]').val() !== "F")
  {
    $('input[id="tv40420"]').css({ opacity: .5 });
    $("#tv40420e").css("visibility","visible");
  	$("#tv40420e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40420"]').css({ opacity: 1 });
    $("#tv40420e").css("visibility","hidden");
  }
  if ($('input[id="tv40421"]').val() !== "f" && $('input[id="tv40421"]').val() !== "F")
  {
    $('input[id="tv40421"]').css({ opacity: .5 });
    $("#tv40421e").css("visibility","visible");
  	$("#tv40421e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40421"]').css({ opacity: 1 });
    $("#tv40421e").css("visibility","hidden");
  }
  if ($('input[id="tv40422"]').val() !== "f" && $('input[id="tv40422"]').val() !== "f")
  {
    $('input[id="tv40422"]').css({ opacity: .5 });
    $("#tv40422e").css("visibility","visible");
  	$("#tv40422e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40422"]').css({ opacity: 1 });
    $("#tv40422e").css("visibility","hidden");
  }
  if ($('input[id="tv40423"]').val() !== "f" && $('input[id="tv40423"]').val() !== "F")
  {
    $('input[id="tv40423"]').css({ opacity: .5 });
    $("#tv40423e").css("visibility","visible");
  	$("#tv40423e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40423"]').css({ opacity: 1 });
    $("#tv40423e").css("visibility","hidden");
  }
  if ($('input[id="tv40424"]').val() !== "f" && $('input[id="tv40424"]').val() !== "F")
  {
    $('input[id="tv40424"]').css({ opacity: .5 });
    $("#tv40424e").css("visibility","visible");
  	$("#tv40424e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40424"]').css({ opacity: 1 });
    $("#tv40424e").css("visibility","hidden");
  }
  if ($('input[id="tv40425"]').val() !== "f" && $('input[id="tv40425"]').val() !== "F")
  {
    $('input[id="tv40425"]').css({ opacity: .5 });
    $("#tv40425e").css("visibility","visible");
  	$("#tv40425e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40425"]').css({ opacity: 1 });
    $("#tv40425e").css("visibility","hidden");
  }
  if ($('input[id="tv40426"]').val() !== "t" && $('input[id="tv40426"]').val() !== "T")
  {
    $('input[id="tv40426"]').css({ opacity: .5 });
    $("#tv40426e").css("visibility","visible");
  	$("#tv40426e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40426"]').css({ opacity: 1 });
    $("#tv40426e").css("visibility","hidden");
  }
  if ($('input[id="tv40427"]').val() !== "f" && $('input[id="tv40427"]').val() !== "F")
  {
    $('input[id="tv40427"]').css({ opacity: .5 });
    $("#tv40427e").css("visibility","visible");
  	$("#tv40427e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40427"]').css({ opacity: 1 });
    $("#tv40427e").css("visibility","hidden");
  }
  if ($('input[id="tv40428"]').val() !== "t" && $('input[id="tv40428"]').val() !== "T")
  {
    $('input[id="tv40428"]').css({ opacity: .5 });
    $("#tv40428e").css("visibility","visible");
  	$("#tv40428e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40428"]').css({ opacity: 1 });
    $("#tv40428e").css("visibility","hidden");
  }
  if ($('input[id="tv40429"]').val() !== "f" && $('input[id="tv40429"]').val() !== "F")
  {
    $('input[id="tv40429"]').css({ opacity: .5 });
    $("#tv40429e").css("visibility","visible");
  	$("#tv40429e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40429"]').css({ opacity: 1 });
    $("#tv40429e").css("visibility","hidden");
  }
  if ($('input[id="tv40430"]').val() !== "t" && $('input[id="tv40430"]').val() !== "T")
  {
    $('input[id="tv40430"]').css({ opacity: .5 });
    $("#tv40430e").css("visibility","visible");
  	$("#tv40430e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40430"]').css({ opacity: 1 });
    $("#tv40430e").css("visibility","hidden");
  }
  if ($('input[id="tv40431"]').val() !== "f" && $('input[id="tv40431"]').val() !== "F")
  {
    $('input[id="tv40431"]').css({ opacity: .5 });
    $("#tv40431e").css("visibility","visible");
  	$("#tv40431e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40431"]').css({ opacity: 1 });
    $("#tv40431e").css("visibility","hidden");
  }
  if ($('input[id="tv40432"]').val() !== "t" && $('input[id="tv40432"]').val() !== "T")
  {
    $('input[id="tv40432"]').css({ opacity: .5 });
    $("#tv40432e").css("visibility","visible");
  	$("#tv40432e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40432"]').css({ opacity: 1 });
    $("#tv40432e").css("visibility","hidden");
  }
  if ($('input[id="tv40433"]').val() !== "f" && $('input[id="tv40433"]').val() !== "F")
  {
    $('input[id="tv40433"]').css({ opacity: .5 });
    $("#tv40433e").css("visibility","visible");
  	$("#tv40433e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40433"]').css({ opacity: 1 });
    $("#tv40433e").css("visibility","hidden");
  }
  if ($('input[id="tv40434"]').val() !== "t" && $('input[id="tv40434"]').val() !== "T")
  {
    $('input[id="tv40434"]').css({ opacity: .5 });
    $("#tv40434e").css("visibility","visible");
  	$("#tv40434e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40434"]').css({ opacity: 1 });
    $("#tv40434e").css("visibility","hidden");
  }
  if ($('input[id="tv40435"]').val() !== "t" && $('input[id="tv40435"]').val() !== "T")
  {
    $('input[id="tv40435"]').css({ opacity: .5 });
    $("#tv40435e").css("visibility","visible");
  	$("#tv40435e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40435"]').css({ opacity: 1 });
    $("#tv40435e").css("visibility","hidden");
  }
  if ($('input[id="tv40436"]').val() !== "t" && $('input[id="tv40436"]').val() !== "T")
  {
    $('input[id="tv40436"]').css({ opacity: .5 });
    $("#tv40436e").css("visibility","visible");
  	$("#tv40436e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40436"]').css({ opacity: 1 });
    $("#tv40436e").css("visibility","hidden");
  }
  if ($('input[id="tv40437"]').val() !== "t" && $('input[id="tv40437"]').val() !== "T")
  {
    $('input[id="tv40437"]').css({ opacity: .5 });
    $("#tv40437e").css("visibility","visible");
  	$("#tv40437e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40437"]').css({ opacity: 1 });
    $("#tv40437e").css("visibility","hidden");
  }
  if ($('input[id="tv40438"]').val() !== "t" && $('input[id="tv40438"]').val() !== "T")
  {
    $('input[id="tv40438"]').css({ opacity: .5 });
    $("#tv40438e").css("visibility","visible");
  	$("#tv40438e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40438"]').css({ opacity: 1 });
    $("#tv40438e").css("visibility","hidden");
  }
  if ($('input[id="tv40439"]').val() !== "t" && $('input[id="tv40439"]').val() !== "T")
  {
    $('input[id="tv40439"]').css({ opacity: .5 });
    $("#tv40439e").css("visibility","visible");
  	$("#tv40439e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40439"]').css({ opacity: 1 });
    $("#tv40439e").css("visibility","hidden");
  }
  if ($('input[id="tv40440"]').val() !== "t" && $('input[id="tv40440"]').val() !== "T")
  {
    $('input[id="tv40440"]').css({ opacity: .5 });
    $("#tv40440e").css("visibility","visible");
  	$("#tv40440e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40440"]').css({ opacity: 1 });
    $("#tv40440e").css("visibility","hidden");
  }
  if ($('input[id="tv40441"]').val() !== "f" && $('input[id="tv40441"]').val() !== "F")
  {
    $('input[id="tv40441"]').css({ opacity: .5 });
    $("#tv40441e").css("visibility","visible");
  	$("#tv40441e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40441"]').css({ opacity: 1 });
    $("#tv40441e").css("visibility","hidden");
  }
  if ($('input[id="tv40442"]').val() !== "f" && $('input[id="tv40442"]').val() !== "F")
  {
    $('input[id="tv40442"]').css({ opacity: .5 });
    $("#tv40442e").css("visibility","visible");
  	$("#tv40442e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40442"]').css({ opacity: 1 });
    $("#tv40442e").css("visibility","hidden");
  }
  if ($('input[id="tv40443"]').val() !== "t" && $('input[id="tv40443"]').val() !== "T")
  {
    $('input[id="tv40443"]').css({ opacity: .5 });
    $("#tv40443e").css("visibility","visible");
  	$("#tv40443e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40443"]').css({ opacity: 1 });
    $("#tv40443e").css("visibility","hidden");
  }
  if ($('input[id="tv40444"]').val() !== "t" && $('input[id="tv40444"]').val() !== "T")
  {
    $('input[id="tv40444"]').css({ opacity: .5 });
    $("#tv40444e").css("visibility","visible");
  	$("#tv40444e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40444"]').css({ opacity: 1 });
    $("#tv40444e").css("visibility","hidden");
  }
  if ($('input[id="tv40445"]').val() !== "f" && $('input[id="tv40445"]').val() !== "F")
  {
    $('input[id="tv40445"]').css({ opacity: .5 });
    $("#tv40445e").css("visibility","visible");
  	$("#tv40445e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40445"]').css({ opacity: 1 });
    $("#tv40445e").css("visibility","hidden");
  }
  if ($('input[id="tv40446"]').val() !== "f" && $('input[id="tv40446"]').val() !== "F")
  {
    $('input[id="tv40446"]').css({ opacity: .5 });
    $("#tv40446e").css("visibility","visible");
  	$("#tv40446e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40446"]').css({ opacity: 1 });
    $("#tv40446e").css("visibility","hidden");
  }
  if ($('input[id="tv40447"]').val() !== "t" && $('input[id="tv40447"]').val() !== "T")
  {
    $('input[id="tv40447"]').css({ opacity: .5 });
    $("#tv40447e").css("visibility","visible");
  	$("#tv40447e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40447"]').css({ opacity: 1 });
    $("#tv40447e").css("visibility","hidden");
  }
  if ($('input[id="tv40448"]').val() !== "t" && $('input[id="tv40448"]').val() !== "T")
  {
    $('input[id="tv40448"]').css({ opacity: .5 });
    $("#tv40448e").css("visibility","visible");
  	$("#tv40448e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40448"]').css({ opacity: 1 });
    $("#tv40448e").css("visibility","hidden");
  }
  if ($('input[id="tv40449"]').val() !== "t" && $('input[id="tv40449"]').val() !== "T")
  {
    $('input[id="tv40449"]').css({ opacity: .5 });
    $("#tv40449e").css("visibility","visible");
  	$("#tv40449e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40449"]').css({ opacity: 1 });
    $("#tv40449e").css("visibility","hidden");
  }
  if ($('input[id="tv40450"]').val() !== "f" && $('input[id="tv40450"]').val() !== "F")
  {
    $('input[id="tv40450"]').css({ opacity: .5 });
    $("#tv40450e").css("visibility","visible");
  	$("#tv40450e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40450"]').css({ opacity: 1 });
    $("#tv40450e").css("visibility","hidden");
  }
  if ($('input[id="tv40451"]').val() !== "t" && $('input[id="tv40451"]').val() !== "T")
  {
    $('input[id="tv40451"]').css({ opacity: .5 });
    $("#tv40451e").css("visibility","visible");
  	$("#tv40451e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40451"]').css({ opacity: 1 });
    $("#tv40451e").css("visibility","hidden");
  }
  if ($('input[id="tv40452"]').val() !== "t" && $('input[id="tv40452"]').val() !== "T")
  {
    $('input[id="tv40452"]').css({ opacity: .5 });
    $("#tv40452e").css("visibility","visible");
  	$("#tv40452e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40452"]').css({ opacity: 1 });
    $("#tv40452e").css("visibility","hidden");
  }
  if ($('input[id="tv40453"]').val() !== "t" && $('input[id="tv40453"]').val() !== "T")
  {
    $('input[id="tv40453"]').css({ opacity: .5 });
    $("#tv40453e").css("visibility","visible");
  	$("#tv40453e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40453"]').css({ opacity: 1 });
    $("#tv40453e").css("visibility","hidden");
  }
  if ($('input[id="tv40454"]').val() !== "f" && $('input[id="tv40454"]').val() !== "F")
  {
    $('input[id="tv40454"]').css({ opacity: .5 });
    $("#tv40454e").css("visibility","visible");
  	$("#tv40454e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40454"]').css({ opacity: 1 });
    $("#tv40454e").css("visibility","hidden");
  }
  if ($('input[id="tv40455"]').val() !== "t" && $('input[id="tv40455"]').val() !== "T")
  {
    $('input[id="tv40455"]').css({ opacity: .5 });
    $("#tv40455e").css("visibility","visible");
  	$("#tv40455e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40455"]').css({ opacity: 1 });
    $("#tv40455e").css("visibility","hidden");
  }
  if ($('input[id="tv40456"]').val() !== "t" && $('input[id="tv40456"]').val() !== "T")
  {
    $('input[id="tv40456"]').css({ opacity: .5 });
    $("#tv40456e").css("visibility","visible");
  	$("#tv40456e").css({ opacity: 0.5, "z-index": "-2" });
    $("#404ct").css("visibility","hidden");
  } else
  {
    tn++;
    $('input[id="tv40456"]').css({ opacity: 1 });
    $("#tv40456e").css("visibility","hidden");
  }
  if (b4n == 0 || b4n == 1 || b4n == 7 || b4n == 13 || b4n == 8 || b4n == 14 || b4n == 20)
  {
    $("#404mb").css("visibility","visible");
    $("#404mb").css({ opacity: 0.7 });
    $("#404wb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  } else if (b4n == 21 && c4n == 0)
  {
    $("#404mb").css("visibility","hidden");
    $("#404wb").css("visibility","hidden");
    $("#404wrv").css("visibility","hidden");
      if (tn == 56)
      {
      $("#404ct").css("visibility","visible");
      $("#404ct").css({ opacity: 0.7 });
      }
  } else if (c4n != 0)
  {
    if (b4n != 21)
    {
      $("#404wrv").css("visibility","visible");
      $("#404wrv").css({ opacity: 0.7 });
      $("#404wb").css("visibility","visible");
      $("#404wb").css({ opacity: 0.7 });
      $("#404mb").css("visibility","hidden");
      $("#404ct").css("visibility","hidden");
    } else
    {
      $("#404wrv").css("visibility","visible");
      $("#404wrv").css({ opacity: 0.7 });
      $("#404wb").css("visibility","hidden");
      $("#404mb").css("visibility","hidden");
      $("#404ct").css("visibility","hidden");
    }
  } else
  {
    $("#404wb").css("visibility","visible");
    $("#404wb").css({ opacity: 0.7 });
    $("#404wrv").css("visibility","hidden");
    $("#404mb").css("visibility","hidden");
    $("#404ct").css("visibility","hidden");
  }
  if ($('input[name="v4"]:checked').val() == "V")
  {
    $('input[name="v4"]').css({ opacity: .5 });
    $("#404vc").css("visibility","visible");
    $("#404vc").css({ opacity: 0.5 });
    $("#404ve").css("visibility","hidden");
    $("#404ic").css("visibility","hidden");
    $("#404ie").css("visibility","hidden");
    $("#404wv").css("visibility","hidden");
  } else if ($('input[name="v4"]:checked').val() == "I")
  {
    $('input[name="v4"]').css({ opacity: .5 });
    $("#404vc").css("visibility","hidden");
    $("#404ve").css("visibility","hidden");
    $("#404ic").css("visibility","hidden");
    $("#404ie").css("visibility","visible");
    $("#404ie").css({ opacity: 0.5 });
    $("#404wv").css("visibility","hidden");
  } else
  {
    $('input[name="v4"]').css({ opacity: .5 });
    $("#404wv").css("visibility","visible");
    $("#404wv").css({ opacity: 0.7 });
  }
}
