function doItOnFocus(element)
{
    var textBoxId = element.id;
    window.textBoxId = textBoxId;
}

$('.c1v').autotab({ maxlength: 1 });
$('.c1tv').autotab({ maxlength: 1 });

function checkanswers1()
{

/*	var fn = [];
	for( var i = 1; i < 21; i++ ) {
		fn[i] = document.getElementById("fn" + i);
	} no longer needed if use $('input[id="fn1"]').val()*/

	if ($('input[id="fn1"]').val() == "Modus Ponens")
	{
	$("#s33101c1").css({ opacity: .7, "z-index": "2" });
	$("#s33101e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33101c1").css({ opacity: .0 });
	$("#s33101e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v1"]:checked').val() == "1")
	{
	$("#s33101c2").css({ opacity: .7, "z-index": "2" });
	$("#s33101e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33101c2").css({ opacity: .0 });
	$("#s33101e2").css({ opacity: .7, "z-index": "2" });
  }

	if ($('input[id="fn2"]').val() == "Denying the Antecedent")
	{
	$("#s33102c1").css({ opacity: .7, "z-index": "2" });
	$("#s33102e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33102c1").css({ opacity: .0 });
	$("#s33102e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v2"]:checked').val() == "0")
	{
	$("#s33102c2").css({ opacity: .7, "z-index": "2" });
	$("#s33102e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33102c2").css({ opacity: .0 });
	$("#s33102e2").css({ opacity: .7, "z-index": "2" });
  }

	if ($('input[id="fn3"]').val() == "Modus Tollens")
	{
	$("#s33103c1").css({ opacity: .7, "z-index": "2" });
	$("#s33103e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33103c1").css({ opacity: .0 });
	$("#s33103e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v3"]:checked').val() == "1")
	{
	$("#s33103c2").css({ opacity: .7, "z-index": "2" });
	$("#s33103e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33103c2").css({ opacity: .0 });
	$("#s33103e2").css({ opacity: .7, "z-index": "2" });
  }

	if ($('input[id="fn4"]').val() == "Modus Tollens")
	{
	$("#s33104c1").css({ opacity: .7, "z-index": "2" });
	$("#s33104e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33104c1").css({ opacity: .0 });
	$("#s33104e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v4"]:checked').val() == "1")
	{
	$("#s33104c2").css({ opacity: .7, "z-index": "2" });
	$("#s33104e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33104c2").css({ opacity: .0 });
	$("#s33104e2").css({ opacity: .7, "z-index": "2" });
  }

	if ($('input[id="fn5"]').val() == "Modus Ponens")
	{
	$("#s33105c1").css({ opacity: .7, "z-index": "2" });
	$("#s33105e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33105c1").css({ opacity: .0 });
	$("#s33105e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v5"]:checked').val() == "1")
	{
	$("#s33105c2").css({ opacity: .7, "z-index": "2" });
	$("#s33105e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33105c2").css({ opacity: .0 });
	$("#s33105e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn6"]').val() == "Modus Tollens")
	{
	$("#s33106c1").css({ opacity: .7, "z-index": "2" });
	$("#s33106e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33106c1").css({ opacity: .0 });
	$("#s33106e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v6"]:checked').val() == "1")
	{
	$("#s33106c2").css({ opacity: .7, "z-index": "2" });
	$("#s33106e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33106c2").css({ opacity: .0 });
	$("#s33106e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn7"]').val() == "Disjunctive Syllogism")
	{
	$("#s33107c1").css({ opacity: .7, "z-index": "2" });
	$("#s33107e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33107c1").css({ opacity: .0 });
	$("#s33107e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v7"]:checked').val() == "1")
	{
	$("#s33107c2").css({ opacity: .7, "z-index": "2" });
	$("#s33107e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33107c2").css({ opacity: .0 });
	$("#s33107e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn8"]').val() == "Affirming the Consequent")
	{
	$("#s33108c1").css({ opacity: .7, "z-index": "2" });
	$("#s33108e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33108c1").css({ opacity: .0 });
	$("#s33108e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v8"]:checked').val() == "0")
	{
	$("#s33108c2").css({ opacity: .7, "z-index": "2" });
	$("#s33108e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33108c2").css({ opacity: .0 });
	$("#s33108e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn9"]').val() == "No Form")
	{
	$("#s33109c1").css({ opacity: .7, "z-index": "2" });
	$("#s33109e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33109c1").css({ opacity: .0 });
	$("#s33109e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v9"]:checked').val() == "0")
	{
	$("#s33109c2").css({ opacity: .7, "z-index": "2" });
	$("#s33109e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33109c2").css({ opacity: .0 });
	$("#s33109e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn10"]').val() == "No Form")
	{
	$("#s33110c1").css({ opacity: .7, "z-index": "2" });
	$("#s33110e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33110c1").css({ opacity: .0 });
	$("#s33110e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v10"]:checked').val() == "0")
	{
	$("#s33110c2").css({ opacity: .7, "z-index": "2" });
	$("#s33110e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33110c2").css({ opacity: .0 });
	$("#s33110e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn11"]').val() == "Hypothetical Syllogism")
	{
	$("#s33111c1").css({ opacity: .7, "z-index": "2" });
	$("#s33111e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33111c1").css({ opacity: .0 });
	$("#s33111e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v11"]:checked').val() == "1")
	{
	$("#s33111c2").css({ opacity: .7, "z-index": "2" });
	$("#s33111e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33111c2").css({ opacity: .0 });
	$("#s33111e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn12"]').val() == "Destructive Dilemma")
	{
	$("#s33112c1").css({ opacity: .7, "z-index": "2" });
	$("#s33112e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33112c1").css({ opacity: .0 });
	$("#s33112e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v12"]:checked').val() == "1")
	{
	$("#s33112c2").css({ opacity: .7, "z-index": "2" });
	$("#s33112e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33112c2").css({ opacity: .0 });
	$("#s33112e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn13"]').val() == "Affirming the Consequent")
	{
	$("#s33113c1").css({ opacity: .7, "z-index": "2" });
	$("#s33113e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33113c1").css({ opacity: .0 });
	$("#s33113e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v13"]:checked').val() == "0")
	{
	$("#s33113c2").css({ opacity: .7, "z-index": "2" });
	$("#s33113e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33113c2").css({ opacity: .0 });
	$("#s33113e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn14"]').val() == "Constructive Dilemma")
	{
	$("#s33114c1").css({ opacity: .7, "z-index": "2" });
	$("#s33114e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33114c1").css({ opacity: .0 });
	$("#s33114e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v14"]:checked').val() == "1")
	{
	$("#s33114c2").css({ opacity: .7, "z-index": "2" });
	$("#s33114e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33114c2").css({ opacity: .0 });
	$("#s33114e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn15"]').val() == "Disjunctive Syllogism")
	{
	$("#s33115c1").css({ opacity: .7, "z-index": "2" });
	$("#s33115e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33115c1").css({ opacity: .0 });
	$("#s33115e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v15"]:checked').val() == "1")
	{
	$("#s33115c2").css({ opacity: .7, "z-index": "2" });
	$("#s33115e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33115c2").css({ opacity: .0 });
	$("#s33115e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn16"]').val() == "Denying the Antecedent")
	{
	$("#s33116c1").css({ opacity: .7, "z-index": "2" });
	$("#s33116e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33116c1").css({ opacity: .0 });
	$("#s33116e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v16"]:checked').val() == "0")
	{
	$("#s33116c2").css({ opacity: .7, "z-index": "2" });
	$("#s33116e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33116c2").css({ opacity: .0 });
	$("#s33116e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn17"]').val() == "No Form")
	{
	$("#s33117c1").css({ opacity: .7, "z-index": "2" });
	$("#s33117e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33117c1").css({ opacity: .0 });
	$("#s33117e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v17"]:checked').val() == "0")
	{
	$("#s33117c2").css({ opacity: .7, "z-index": "2" });
	$("#s33117e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33117c2").css({ opacity: .0 });
	$("#s33117e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn18"]').val() == "Modus Tollens")
	{
	$("#s33118c1").css({ opacity: .7, "z-index": "2" });
	$("#s33118e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33118c1").css({ opacity: .0 });
	$("#s33118e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v18"]:checked').val() == "1")
	{
	$("#s33118c2").css({ opacity: .7, "z-index": "2" });
	$("#s33118e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33118c2").css({ opacity: .0 });
	$("#s33118e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn19"]').val() == "No Form")
	{
	$("#s33119c1").css({ opacity: .7, "z-index": "2" });
	$("#s33119e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33119c1").css({ opacity: .0 });
	$("#s33119e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v19"]:checked').val() == "0")
	{
	$("#s33119c2").css({ opacity: .7, "z-index": "2" });
	$("#s33119e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33119c2").css({ opacity: .0 });
	$("#s33119e2").css({ opacity: .7, "z-index": "2" });
	}

	if ($('input[id="fn20"]').val() == "Hypothetical Syllogism")
	{
	$("#s33120c1").css({ opacity: .7, "z-index": "2" });
	$("#s33120e1").css({ opacity: .0 });
	}
	else
	{
	$("#s33120c1").css({ opacity: .0 });
	$("#s33120e1").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[name="v20"]:checked').val() == "1")
	{
	$("#s33120c2").css({ opacity: .7, "z-index": "2" });
	$("#s33120e2").css({ opacity: .0 });
	}
	else
	{
	$("#s33120c2").css({ opacity: .0 });
	$("#s33120e2").css({ opacity: .7, "z-index": "2" });
	}

	document.getElementById("chan1").blur();
	window.location.replace('iLogic_3_3.html#Ex33');
}

function checkanswers2()
{
	var c = [];
	var f = [];
	for( var i = 1; i < 17; i++ ) {
		c[i] = document.getElementById("c" + i);
		f[i] = document.getElementById("f" + i);
	}
	//#1
	if (c1.value == "A")
	{
	$("#s33201c1").css({ opacity: .7, "z-index": "2" });
	$("#s33201e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33201c1").css({ opacity: .0 });
	$("#s33201e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f1.value == "Modus Tollens")
	{
	$("#s33201c2").css({ opacity: .7, "z-index": "2" });
	$("#s33201e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33201c2").css({ opacity: .0 });
	$("#s33201e2").css({ opacity: .7, "z-index": "2" });
  }
	//#2
	if (c2.value == "∼H")
	{
	$("#s33202c1").css({ opacity: .7, "z-index": "2" });
	$("#s33202e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33202c1").css({ opacity: .0 });
	$("#s33202e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f2.value == "Denying the Antecedent")
	{
	$("#s33202c2").css({ opacity: .7, "z-index": "2" });
	$("#s33202e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33202c2").css({ opacity: .0 });
	$("#s33202e2").css({ opacity: .7, "z-index": "2" });
  }
	//#3
	if (c3.value == "C")
	{
	$("#s33203c1").css({ opacity: .7, "z-index": "2" });
	$("#s33203e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33203c1").css({ opacity: .0 });
	$("#s33203e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f3.value == "Affirming the Consequent")
	{
	$("#s33203c2").css({ opacity: .7, "z-index": "2" });
	$("#s33203e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33203c2").css({ opacity: .0 });
	$("#s33203e2").css({ opacity: .7, "z-index": "2" });
  }
	//#4
	if (c4.value == "K ⊃ R")
	{
	$("#s33204c1").css({ opacity: .7, "z-index": "2" });
	$("#s33204e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33204c1").css({ opacity: .0 });
	$("#s33204e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f4.value == "Hypothetical Syllogism")
	{
	$("#s33204c2").css({ opacity: .7, "z-index": "2" });
	$("#s33204e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33204c2").css({ opacity: .0 });
	$("#s33204e2").css({ opacity: .7, "z-index": "2" });
  }
	//#5
	if (c5.value == "∼N")
	{
	$("#s33205c1").css({ opacity: .7, "z-index": "2" });
	$("#s33205e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33205c1").css({ opacity: .0 });
	$("#s33205e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f5.value == "Modus Ponens")
	{
	$("#s33205c2").css({ opacity: .7, "z-index": "2" });
	$("#s33205e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33205c2").css({ opacity: .0 });
	$("#s33205e2").css({ opacity: .7, "z-index": "2" });
  }
	//#6
	if (c6.value == "K • A")
	{
	$("#s33206c1").css({ opacity: .7, "z-index": "2" });
	$("#s33206e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33206c1").css({ opacity: .0 });
	$("#s33206e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f6.value == "Affirming the Consequent")
	{
	$("#s33206c2").css({ opacity: .7, "z-index": "2" });
	$("#s33206e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33206c2").css({ opacity: .0 });
	$("#s33206e2").css({ opacity: .7, "z-index": "2" });
  }
	//#7
	if (c7.value == "∼L")
	{
	$("#s33207c1").css({ opacity: .7, "z-index": "2" });
	$("#s33207e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33207c1").css({ opacity: .0 });
	$("#s33207e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f7.value == "Disjunctive Syllogism")
	{
	$("#s33207c2").css({ opacity: .7, "z-index": "2" });
	$("#s33207e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33207c2").css({ opacity: .0 });
	$("#s33207e2").css({ opacity: .7, "z-index": "2" });
  }
	//#8
	if (c8.value == "R ∨ ∼S")
	{
	$("#s33208c1").css({ opacity: .7, "z-index": "2" });
	$("#s33208e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33208c1").css({ opacity: .0 });
	$("#s33208e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f8.value == "Constructive Dilemma")
	{
	$("#s33208c2").css({ opacity: .7, "z-index": "2" });
	$("#s33208e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33208c2").css({ opacity: .0 });
	$("#s33208e2").css({ opacity: .7, "z-index": "2" });
  }
	//#9
	if (c9.value == "∼C")
	{
	$("#s33209c1").css({ opacity: .7, "z-index": "2" });
	$("#s33209e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33209c1").css({ opacity: .0 });
	$("#s33209e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f9.value == "Modus Tollens")
	{
	$("#s33209c2").css({ opacity: .7, "z-index": "2" });
	$("#s33209e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33209c2").css({ opacity: .0 });
	$("#s33209e2").css({ opacity: .7, "z-index": "2" });
  }
	//#10
	if (c10.value == "A")
	{
	$("#s33210c1").css({ opacity: .7, "z-index": "2" });
	$("#s33210e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33210c1").css({ opacity: .0 });
	$("#s33210e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f10.value == "Disjunctive Syllogism")
	{
	$("#s33210c2").css({ opacity: .7, "z-index": "2" });
	$("#s33210e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33210c2").css({ opacity: .0 });
	$("#s33210e2").css({ opacity: .7, "z-index": "2" });
  }
	//#11
	if (c11.value == "∼N")
	{
	$("#s33211c1").css({ opacity: .7, "z-index": "2" });
	$("#s33211e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33211c1").css({ opacity: .0 });
	$("#s33211e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f11.value == "Denying the Antecedent")
	{
	$("#s33211c2").css({ opacity: .7, "z-index": "2" });
	$("#s33211e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33211c2").css({ opacity: .0 });
	$("#s33211e2").css({ opacity: .7, "z-index": "2" });
  }
	//#12
	if (c12.value == "∼G ∨ ∼B")
	{
	$("#s33212c1").css({ opacity: .7, "z-index": "2" });
	$("#s33212e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33212c1").css({ opacity: .0 });
	$("#s33212e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f12.value == "Destructive Dilemma")
	{
	$("#s33212c2").css({ opacity: .7, "z-index": "2" });
	$("#s33212e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33212c2").css({ opacity: .0 });
	$("#s33212e2").css({ opacity: .7, "z-index": "2" });
  }
	//#13
	if (c13.value == "S ⊃ ∼P")
	{
	$("#s33213c1").css({ opacity: .7, "z-index": "2" });
	$("#s33213e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33213c1").css({ opacity: .0 });
	$("#s33213e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f13.value == "Hypothetical Syllogism")
	{
	$("#s33213c2").css({ opacity: .7, "z-index": "2" });
	$("#s33213e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33213c2").css({ opacity: .0 });
	$("#s33213e2").css({ opacity: .7, "z-index": "2" });
  }
	//#14
	if (c14.value == "Q")
	{
	$("#s33214c1").css({ opacity: .7, "z-index": "2" });
	$("#s33214e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33214c1").css({ opacity: .0 });
	$("#s33214e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f14.value == "Modus Ponens")
	{
	$("#s33214c2").css({ opacity: .7, "z-index": "2" });
	$("#s33214e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33214c2").css({ opacity: .0 });
	$("#s33214e2").css({ opacity: .7, "z-index": "2" });
  }
	//#15
	if (c15.value == "G ≡ ∼N")
	{
	$("#s33215c1").css({ opacity: .7, "z-index": "2" });
	$("#s33215e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33215c1").css({ opacity: .0 });
	$("#s33215e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f15.value == "Modus Ponens")
	{
	$("#s33215c2").css({ opacity: .7, "z-index": "2" });
	$("#s33215e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33215c2").css({ opacity: .0 });
	$("#s33215e2").css({ opacity: .7, "z-index": "2" });
  }
	//#16
	if (c16.value == "B ∨ ∼C")
	{
	$("#s33216c1").css({ opacity: .7, "z-index": "2" });
	$("#s33216e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33216c1").css({ opacity: .0 });
	$("#s33216e1").css({ opacity: .7, "z-index": "2" });
  }
	if (f16.value == "Destructive Dilemma")
	{
	$("#s33216c2").css({ opacity: .7, "z-index": "2" });
	$("#s33216e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33216c2").css({ opacity: .0 });
	$("#s33216e2").css({ opacity: .7, "z-index": "2" });
  }
	document.getElementById("chan2").blur();
	window.location.replace('iLogic_3_3.html#Ex332');
}

function checkanswers3()
{
	//#1
	if ($('input[id="s1a"]').val() == "H")
	{
	$("#s33301c1").css({ opacity: .7, "z-index": "2" });
	$("#s33301e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33301c1").css({ opacity: .0 });
	$("#s33301e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s1b"]').val() == "H")
	{
	$("#s33301c2").css({ opacity: .7, "z-index": "2" });
	$("#s33301e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33301c2").css({ opacity: .0 });
	$("#s33301e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf1a"]').val() == "DS")
	{
	$("#s33301c3").css({ opacity: .7, "z-index": "2" });
	$("#s33301e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33301c3").css({ opacity: .0 });
	$("#s33301e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf1b"]').val() == "MP")
	{
	$("#s33301c4").css({ opacity: .7, "z-index": "2" });
	$("#s33301e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33301c4").css({ opacity: .0 });
	$("#s33301e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v301"]:checked').val() == "1")
	{
	$("#s33301c5").css({ opacity: .7, "z-index": "2" });
	$("#s33301e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33301c5").css({ opacity: .0 });
	$("#s33301e5").css({ opacity: .7, "z-index": "2" });
  }
	//#2
	if ($('input[id="s2a"]').val() == "B")
	{
	$("#s33302c1").css({ opacity: .7, "z-index": "2" });
	$("#s33302e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33302c1").css({ opacity: .0 });
	$("#s33302e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s2b"]').val() == "B")
	{
	$("#s33302c2").css({ opacity: .7, "z-index": "2" });
	$("#s33302e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33302c2").css({ opacity: .0 });
	$("#s33302e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf2a"]').val() == "MP")
	{
	$("#s33302c3").css({ opacity: .7, "z-index": "2" });
	$("#s33302e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33302c3").css({ opacity: .0 });
	$("#s33302e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf2b"]').val() == "MP")
	{
	$("#s33302c4").css({ opacity: .7, "z-index": "2" });
	$("#s33302e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33302c4").css({ opacity: .0 });
	$("#s33302e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v302"]:checked').val() == "1")
	{
	$("#s33302c5").css({ opacity: .7, "z-index": "2" });
	$("#s33302e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33302c5").css({ opacity: .0 });
	$("#s33302e5").css({ opacity: .7, "z-index": "2" });
  }
	//#3
	if ($('input[id="s3a"]').val() == "∼A")
	{
	$("#s33303c1").css({ opacity: .7, "z-index": "2" });
	$("#s33303e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33303c1").css({ opacity: .0 });
	$("#s33303e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s3b"]').val() == "∼A")
	{
	$("#s33303c2").css({ opacity: .7, "z-index": "2" });
	$("#s33303e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33303c2").css({ opacity: .0 });
	$("#s33303e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf3a"]').val() == "MT")
	{
	$("#s33303c3").css({ opacity: .7, "z-index": "2" });
	$("#s33303e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33303c3").css({ opacity: .0 });
	$("#s33303e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf3b"]').val() == "MP")
	{
	$("#s33303c4").css({ opacity: .7, "z-index": "2" });
	$("#s33303e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33303c4").css({ opacity: .0 });
	$("#s33303e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v303"]:checked').val() == "1")
	{
	$("#s33303c5").css({ opacity: .7, "z-index": "2" });
	$("#s33303e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33303c5").css({ opacity: .0 });
	$("#s33303e5").css({ opacity: .7, "z-index": "2" });
  }
	//#4
	if ($('input[id="s4a"]').val() == "∼K")
	{
	$("#s33304c1").css({ opacity: .7, "z-index": "2" });
	$("#s33304e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33304c1").css({ opacity: .0 });
	$("#s33304e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s4b"]').val() == "∼K")
	{
	$("#s33304c2").css({ opacity: .7, "z-index": "2" });
	$("#s33304e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33304c2").css({ opacity: .0 });
	$("#s33304e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf4a"]').val() == "MT")
	{
	$("#s33304c3").css({ opacity: .7, "z-index": "2" });
	$("#s33304e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33304c3").css({ opacity: .0 });
	$("#s33304e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf4b"]').val() == "DA")
	{
	$("#s33304c4").css({ opacity: .7, "z-index": "2" });
	$("#s33304e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33304c4").css({ opacity: .0 });
	$("#s33304e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v304"]:checked').val() == "0")
	{
	$("#s33304c5").css({ opacity: .7, "z-index": "2" });
	$("#s33304e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33304c5").css({ opacity: .0 });
	$("#s33304e5").css({ opacity: .7, "z-index": "2" });
  }
	//#5
	if ($('input[id="s5a"]').val() == "∼D")
	{
	$("#s33305c1").css({ opacity: .7, "z-index": "2" });
	$("#s33305e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33305c1").css({ opacity: .0 });
	$("#s33305e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s5b"]').val() == "∼D")
	{
	$("#s33305c2").css({ opacity: .7, "z-index": "2" });
	$("#s33305e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33305c2").css({ opacity: .0 });
	$("#s33305e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf5a"]').val() == "DS")
	{
	$("#s33305c3").css({ opacity: .7, "z-index": "2" });
	$("#s33305e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33305c3").css({ opacity: .0 });
	$("#s33305e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf5b"]').val() == "DS")
	{
	$("#s33305c4").css({ opacity: .7, "z-index": "2" });
	$("#s33305e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33305c4").css({ opacity: .0 });
	$("#s33305e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v305"]:checked').val() == "1")
	{
	$("#s33305c5").css({ opacity: .7, "z-index": "2" });
	$("#s33305e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33305c5").css({ opacity: .0 });
	$("#s33305e5").css({ opacity: .7, "z-index": "2" });
  }
	//#6
	if ($('input[id="s6a"]').val() == "H")
	{
	$("#s33306c1").css({ opacity: .7, "z-index": "2" });
	$("#s33306e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33306c1").css({ opacity: .0 });
	$("#s33306e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s6b"]').val() == "H")
	{
	$("#s33306c2").css({ opacity: .7, "z-index": "2" });
	$("#s33306e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33306c2").css({ opacity: .0 });
	$("#s33306e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf6a"]').val() == "MT")
	{
	$("#s33306c3").css({ opacity: .7, "z-index": "2" });
	$("#s33306e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33306c3").css({ opacity: .0 });
	$("#s33306e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf6b"]').val() == "AC")
	{
	$("#s33306c4").css({ opacity: .7, "z-index": "2" });
	$("#s33306e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33306c4").css({ opacity: .0 });
	$("#s33306e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v306"]:checked').val() == "0")
	{
	$("#s33306c5").css({ opacity: .7, "z-index": "2" });
	$("#s33306e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33306c5").css({ opacity: .0 });
	$("#s33306e5").css({ opacity: .7, "z-index": "2" });
  }
	//#7
	if ($('input[id="s7a"]').val() == "A ⊃ S")
	{
	$("#s33307c1").css({ opacity: .7, "z-index": "2" });
	$("#s33307e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c1").css({ opacity: .0 });
	$("#s33307e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s7b"]').val() == "A ⊃ S")
	{
	$("#s33307c2").css({ opacity: .7, "z-index": "2" });
	$("#s33307e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c2").css({ opacity: .0 });
	$("#s33307e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s7c"]').val() == "∼A")
	{
	$("#s33307c3").css({ opacity: .7, "z-index": "2" });
	$("#s33307e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c3").css({ opacity: .0 });
	$("#s33307e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s7d"]').val() == "∼A")
	{
	$("#s33307c4").css({ opacity: .7, "z-index": "2" });
	$("#s33307e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c4").css({ opacity: .0 });
	$("#s33307e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf7a"]').val() == "HS")
	{
	$("#s33307c5").css({ opacity: .7, "z-index": "2" });
	$("#s33307e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c5").css({ opacity: .0 });
	$("#s33307e5").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf7b"]').val() == "MT")
	{
	$("#s33307c6").css({ opacity: .7, "z-index": "2" });
	$("#s33307e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c6").css({ opacity: .0 });
	$("#s33307e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf7c"]').val() == "DS")
	{
	$("#s33307c7").css({ opacity: .7, "z-index": "2" });
	$("#s33307e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c7").css({ opacity: .0 });
	$("#s33307e7").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v307"]:checked').val() == "1")
	{
	$("#s33307c8").css({ opacity: .7, "z-index": "2" });
	$("#s33307e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33307c8").css({ opacity: .0 });
	$("#s33307e8").css({ opacity: .7, "z-index": "2" });
  }
	//#8
	if ($('input[id="s8a"]').val() == "O")
	{
	$("#s33308c1").css({ opacity: .7, "z-index": "2" });
	$("#s33308e1").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c1").css({ opacity: .0 });
	$("#s33308e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s8b"]').val() == "∼R")
	{
	$("#s33308c2").css({ opacity: .7, "z-index": "2" });
	$("#s33308e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c2").css({ opacity: .0 });
	$("#s33308e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s8c"]').val() == "∼R")
	{
	$("#s33308c3").css({ opacity: .7, "z-index": "2" });
	$("#s33308e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c3").css({ opacity: .0 });
	$("#s33308e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s8d"]').val() == "∼N")
	{
	$("#s33308c4").css({ opacity: .7, "z-index": "2" });
	$("#s33308e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c4").css({ opacity: .0 });
	$("#s33308e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s8e"]').val() == "∼N")
	{
	$("#s33308c5").css({ opacity: .7, "z-index": "2" });
	$("#s33308e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c5").css({ opacity: .0 });
	$("#s33308e5").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf8a"]').val() == "MT")
	{
	$("#s33308c6").css({ opacity: .7, "z-index": "2" });
	$("#s33308e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c6").css({ opacity: .0 });
	$("#s33308e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf8b"]').val() == "DS")
	{
	$("#s33308c7").css({ opacity: .7, "z-index": "2" });
	$("#s33308e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c7").css({ opacity: .0 });
	$("#s33308e7").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf8c"]').val() == "MP")
	{
	$("#s33308c8").css({ opacity: .7, "z-index": "2" });
	$("#s33308e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c8").css({ opacity: .0 });
	$("#s33308e8").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v308"]:checked').val() == "1")
	{
	$("#s33308c9").css({ opacity: .7, "z-index": "2" });
	$("#s33308e9").css({ opacity: .0 });
  }
  else
  {
	$("#s33308c9").css({ opacity: .0 });
	$("#s33308e9").css({ opacity: .7, "z-index": "2" });
  }
	//#9
	if ($('input[id="s9a"]').val() == "E ⊃ M")
	{
	$("#s33309c1").css({ opacity: .7, "z-index": "2" });
	$("#s33309e1").css({ opacity: .0 });
  }
  else if ($('input[id="s9a"]').val() == "C ∨ E")
	{
	$("#s33309c1").css({ opacity: .7, "z-index": "2" });
	$("#s33309e1").css({ opacity: .0 });
  }
	else
	{
	$("#s33309c1").css({ opacity: .0 });
	$("#s33309e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s9b"]').val() == "E ⊃ M" &&
			$('input[id="s9a"]').val() != "E ⊃ M")
	{
	$("#s33309c2").css({ opacity: .7, "z-index": "2" });
	$("#s33309e2").css({ opacity: .0 });
  }
	else if ($('input[id="s9b"]').val() == "C ∨ E" &&
					 $('input[id="s9a"]').val() != "C ∨ E")
	{
	$("#s33309c2").css({ opacity: .7, "z-index": "2" });
	$("#s33309e2").css({ opacity: .0 });
	}
  else
  {
	$("#s33309c2").css({ opacity: .0 });
	$("#s33309e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s9c"]').val() == "∼B ∨ M")
	{
	$("#s33309c3").css({ opacity: .7, "z-index": "2" });
	$("#s33309e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33309c3").css({ opacity: .0 });
	$("#s33309e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s9d"]').val() == "∼B ∨ M")
	{
	$("#s33309c4").css({ opacity: .7, "z-index": "2" });
	$("#s33309e4").css({ opacity: .0 });
  }
  else if ($('input[id="s9d"]').val() == "∼M")
	{
	$("#s33309c4").css({ opacity: .7, "z-index": "2" });
	$("#s33309e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33309c4").css({ opacity: .0 });
	$("#s33309e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s9e"]').val() == "∼B ∨ M" &&
			$('input[id="s9d"]').val() != "∼B ∨ M")
	{
	$("#s33309c5").css({ opacity: .7, "z-index": "2" });
	$("#s33309e5").css({ opacity: .0 });
  }
  else if ($('input[id="s9e"]').val() == "∼M" &&
					 $('input[id="s9d"]').val() != "∼M")
	{
	$("#s33309c5").css({ opacity: .7, "z-index": "2" });
	$("#s33309e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33309c5").css({ opacity: .0 });
	$("#s33309e5").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[id="bf9a"]').val() == "CD")
	{
	$("#s33309c6").css({ opacity: .7, "z-index": "2" });
	$("#s33309e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33309c6").css({ opacity: .0 });
	$("#s33309e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf9b"]').val() == "DS")
	{
	$("#s33309c7").css({ opacity: .7, "z-index": "2" });
	$("#s33309e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33309c7").css({ opacity: .0 });
	$("#s33309e7").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v309"]:checked').val() == "1")
	{
	$("#s33309c8").css({ opacity: .7, "z-index": "2" });
	$("#s33309e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33309c8").css({ opacity: .0 });
	$("#s33309e8").css({ opacity: .7, "z-index": "2" });
  }
	//#10
	if ($('input[id="s10a"]').val() == "W")
	{
	$("#s33310c1").css({ opacity: .7, "z-index": "2" });
	$("#s33310e1").css({ opacity: .0 });
  }
	else
	{
	$("#s33310c1").css({ opacity: .0 });
	$("#s33310e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s10b"]').val() == "∼G ⊃ H")
	{
	$("#s33310c2").css({ opacity: .7, "z-index": "2" });
	$("#s33310e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33310c2").css({ opacity: .0 });
	$("#s33310e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s10c"]').val() == "∼G ⊃ H")
	{
	$("#s33310c3").css({ opacity: .7, "z-index": "2" });
	$("#s33310e3").css({ opacity: .0 });
  }
	else if ($('input[id="s10c"]').val() == "∼H")
	{
	$("#s33310c3").css({ opacity: .7, "z-index": "2" });
	$("#s33310e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33310c3").css({ opacity: .0 });
	$("#s33310e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s10d"]').val() == "∼G ⊃ H" &&
			$('input[id="s10c"]').val() != "∼G ⊃ H")
	{
	$("#s33310c4").css({ opacity: .7, "z-index": "2" });
	$("#s33310e4").css({ opacity: .0 });
  }
	else if ($('input[id="s10d"]').val() == "∼H" &&
					 $('input[id="s10c"]').val() != "∼H")
	{
	$("#s33310c4").css({ opacity: .7, "z-index": "2" });
	$("#s33310e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33310c4").css({ opacity: .0 });
	$("#s33310e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf10a"]').val() == "MP")
	{
	$("#s33310c5").css({ opacity: .7, "z-index": "2" });
	$("#s33310e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33310c5").css({ opacity: .0 });
	$("#s33310e5").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[id="bf10b"]').val() == "MT")
	{
	$("#s33310c6").css({ opacity: .7, "z-index": "2" });
	$("#s33310e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33310c6").css({ opacity: .0 });
	$("#s33310e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v310"]:checked').val() == "1")
	{
	$("#s33310c7").css({ opacity: .7, "z-index": "2" });
	$("#s33310e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33310c7").css({ opacity: .0 });
	$("#s33310e7").css({ opacity: .7, "z-index": "2" });
  }
	//#11
	if ($('input[id="s11a"]').val() == "∼D")
	{
	$("#s33311c1").css({ opacity: .7, "z-index": "2" });
	$("#s33311e1").css({ opacity: .0 });
  }
	else
	{
	$("#s33311c1").css({ opacity: .0 });
	$("#s33311e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s11b"]').val() == "B ⊃ H")
	{
	$("#s33311c2").css({ opacity: .7, "z-index": "2" });
	$("#s33311e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c2").css({ opacity: .0 });
	$("#s33311e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s11c"]').val() == "B ⊃ H" ||
			$('input[id="s11c"]').val() == "(A ⊃ D) ⊃ B")
	{
	$("#s33311c3").css({ opacity: .7, "z-index": "2" });
	$("#s33311e3").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "∼H")
	{
	$("#s33311c3").css({ opacity: .7, "z-index": "2" });
	$("#s33311e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c3").css({ opacity: .0 });
	$("#s33311e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s11c"]').val() == "B ⊃ H" &&
			$('input[id="s11d"]').val() == "∼H")
	{
	$("#s33311c4").css({ opacity: .7, "z-index": "2" });
	$("#s33311e4").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "B ⊃ H" &&
					 $('input[id="s11d"]').val() == "(A ⊃ D) ⊃ B")
	{
	$("#s33311c4").css({ opacity: .7, "z-index": "2" });
	$("#s33311e4").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "∼H" &&
					 $('input[id="s11d"]').val() == "B ⊃ H")
	{
	$("#s33311c4").css({ opacity: .7, "z-index": "2" });
	$("#s33311e4").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "(A ⊃ D) ⊃ B" &&
					 $('input[id="s11d"]').val() == "B ⊃ H")
	{
	$("#s33311c4").css({ opacity: .7, "z-index": "2" });
	$("#s33311e4").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "" &&
					 ($('input[id="s11d"]').val() == "B ⊃ H" ||
				 		$('input[id="s11d"]').val() == "(A ⊃ D) ⊃ B" ||
						$('input[id="s11d"]').val() == "∼H"))
	{
	$("#s33311c4").css({ opacity: .7, "z-index": "2" });
	$("#s33311e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c4").css({ opacity: .0 });
	$("#s33311e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s11c"]').val() == "B ⊃ H" &&
			$('input[id="s11d"]').val() == "∼H" &&
			$('input[id="s11e"]').val() == "∼B")
	{
	$("#s33311c5").css({ opacity: .7, "z-index": "2" });
	$("#s33311e5").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "∼H" &&
					 $('input[id="s11d"]').val() == "B ⊃ H" &&
					 $('input[id="s11e"]').val() == "∼B")
	{
	$("#s33311c5").css({ opacity: .7, "z-index": "2" });
	$("#s33311e5").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "(A ⊃ D) ⊃ B" &&
					 $('input[id="s11d"]').val() == "B ⊃ H" &&
					 $('input[id="s11e"]').val() == "(A ⊃ D) ⊃ H")
	{
	$("#s33311c5").css({ opacity: .7, "z-index": "2" });
	$("#s33311e5").css({ opacity: .0 });
  }
	else if ($('input[id="s11c"]').val() == "B ⊃ H" &&
					 $('input[id="s11d"]').val() == "(A ⊃ D) ⊃ B" &&
					 $('input[id="s11e"]').val() == "(A ⊃ D) ⊃ H")
	{
	$("#s33311c5").css({ opacity: .7, "z-index": "2" });
	$("#s33311e5").css({ opacity: .0 });
  }
	else if (($('input[id="s11c"]').val() == "" &&
					 $('input[id="s11d"]').val() == "") &&
					 ($('input[id="s11e"]').val() == "∼B" ||
					 $('input[id="s11e"]').val() == "(A ⊃ D) ⊃ H"))
	{
	$("#s33311c5").css({ opacity: .7, "z-index": "2" });
	$("#s33311e5").css({ opacity: .0 });
  }
	else
	{
	$("#s33311c5").css({ opacity: .0 });
	$("#s33311e5").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s11f"]').val() == "(A ⊃ D) ⊃ B" &&
			$('input[id="s11c"]').val() != "(A ⊃ D) ⊃ B")
	{
	$("#s33311c6").css({ opacity: .7, "z-index": "2" });
	$("#s33311e6").css({ opacity: .0 });
  }
	else if ($('input[id="s11f"]').val() == "(A ⊃ D) ⊃ H" &&
					 $('input[id="s11c"]').val() != "(A ⊃ D) ⊃ H")
	{
	$("#s33311c6").css({ opacity: .7, "z-index": "2" });
	$("#s33311e6").css({ opacity: .0 });
  }
	else if ($('input[id="s11f"]').val() == "∼H" &&
					 $('input[id="s11c"]').val() != "∼H")
	{
	$("#s33311c6").css({ opacity: .7, "z-index": "2" });
	$("#s33311e6").css({ opacity: .0 });
  }
	else if ($('input[id="s11f"]').val() == "∼B" &&
					 $('input[id="s11c"]').val() != "∼B")
	{
	$("#s33311c6").css({ opacity: .7, "z-index": "2" });
	$("#s33311e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c6").css({ opacity: .0 });
	$("#s33311e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s11f"]').val() == "(A ⊃ D) ⊃ B" &&
			$('input[id="s11g"]').val() == "∼B")
	{
	$("#s33311c7").css({ opacity: .7, "z-index": "2" });
	$("#s33311e7").css({ opacity: .0 });
  }
	else if ($('input[id="s11f"]').val() == "∼B" &&
					 $('input[id="s11g"]').val() == "(A ⊃ D) ⊃ B")
	{
	$("#s33311c7").css({ opacity: .7, "z-index": "2" });
	$("#s33311e7").css({ opacity: .0 });
  }
	else if ($('input[id="s11f"]').val() == "(A ⊃ D) ⊃ H" &&
					 $('input[id="s11g"]').val() == "∼H")
	{
	$("#s33311c7").css({ opacity: .7, "z-index": "2" });
	$("#s33311e7").css({ opacity: .0 });
  }
	else if ($('input[id="s11f"]').val() == "∼H" &&
					 $('input[id="s11g"]').val() == "(A ⊃ D) ⊃ H")
	{
	$("#s33311c7").css({ opacity: .7, "z-index": "2" });
	$("#s33311e7").css({ opacity: .0 });
  }
	else if ($('input[id="s11e"]').val() == "(A ⊃ D) ⊃ H" &&
					 $('input[id="s11g"]').val() == "(A ⊃ D) ⊃ H")
	{
	$("#s33311c7").css({ opacity: .7, "z-index": "2" });
	$("#s33311e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c7").css({ opacity: .0 });
	$("#s33311e7").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf11a"]').val() == "DS")
	{
	$("#s33311c8").css({ opacity: .7, "z-index": "2" });
	$("#s33311e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c8").css({ opacity: .0 });
	$("#s33311e8").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[id="bf11b"]').val() == "MT" &&
			($('input[id="s11c"]').val() == "B ⊃ H" ||
			$('input[id="s11c"]').val() == "∼H"))
	{
	$("#s33311c9").css({ opacity: .7, "z-index": "2" });
	$("#s33311e9").css({ opacity: .0 });
  }
	else if ($('input[id="bf11b"]').val() == "HS" &&
			($('input[id="s11c"]').val() == "(A ⊃ D) ⊃ B" ||
			$('input[id="s11c"]').val() == "B ⊃ H"))
	{
	$("#s33311c9").css({ opacity: .7, "z-index": "2" });
	$("#s33311e9").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c9").css({ opacity: .0 });
	$("#s33311e9").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf11c"]').val() == "MT" &&
		 ($('input[id="s11f"]').val() == "(A ⊃ D) ⊃ B" ||
	 		$('input[id="s11f"]').val() == "∼B"))
	{
	$("#s33311c10").css({ opacity: .7, "z-index": "2" });
	$("#s33311e10").css({ opacity: .0 });
  }
	else if ($('input[id="bf11c"]').val() == "MT" &&
			($('input[id="s11f"]').val() == "B ⊃ H" ||
			 $('input[id="s11f"]').val() == "∼H"))
	{
	$("#s33311c10").css({ opacity: .7, "z-index": "2" });
	$("#s33311e10").css({ opacity: .0 });
  }
	else if ($('input[id="bf11c"]').val() == "MT" &&
			($('input[id="s11f"]').val() == "(A ⊃ D) ⊃ H" ||
			 $('input[id="s11f"]').val() == "∼H"))
	{
	$("#s33311c10").css({ opacity: .7, "z-index": "2" });
	$("#s33311e10").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c10").css({ opacity: .0 });
	$("#s33311e10").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v311"]:checked').val() == "1")
	{
	$("#s33311c11").css({ opacity: .7, "z-index": "2" });
	$("#s33311e11").css({ opacity: .0 });
  }
  else
  {
	$("#s33311c11").css({ opacity: .0 });
	$("#s33311e11").css({ opacity: .7, "z-index": "2" });
  }
	//#12
	if ($('input[id="s12a"]').val() == "∼(R ⊃ ∼L) ⊃ P" ||
			$('input[id="s12a"]').val() == "P ∨ ∼L")
	{
	$("#s33312c1").css({ opacity: .7, "z-index": "2" });
	$("#s33312e1").css({ opacity: .0 });
  }
	else
	{
	$("#s33312c1").css({ opacity: .0 });
	$("#s33312e1").css({ opacity: .7, "z-index": "2" });
  }
	if (($('input[id="s12b"]').val() == "R ⊃ ∼L" &&
			 $('input[id="s12a"]').val() == "∼(R ⊃ ∼L) ⊃ P") ||
			($('input[id="s12b"]').val() == "∼L" &&
			 $('input[id="s12a"]').val() == "P ∨ ∼L"))
	{
	$("#s33312c2").css({ opacity: .7, "z-index": "2" });
	$("#s33312e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c2").css({ opacity: .0 });
	$("#s33312e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s12c"]').val() == "∼(R ⊃ ∼L) ⊃ P" &&
			$('input[id="s12a"]').val() != "∼(R ⊃ ∼L) ⊃ P")
	{
	$("#s33312c3").css({ opacity: .7, "z-index": "2" });
	$("#s33312e3").css({ opacity: .0 });
  }
	else if ($('input[id="s12c"]').val() == "P ∨ ∼L" &&
					 $('input[id="s12a"]').val() != "P ∨ ∼L")
	{
	$("#s33312c3").css({ opacity: .7, "z-index": "2" });
	$("#s33312e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c3").css({ opacity: .0 });
	$("#s33312e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s12d"]').val() == "R ⊃ ∼L" &&
			$('input[id="s12c"]').val() == "∼(R ⊃ ∼L) ⊃ P")
	{
	$("#s33312c4").css({ opacity: .7, "z-index": "2" });
	$("#s33312e4").css({ opacity: .0 });
  }
	else if ($('input[id="s12d"]').val() == "R ⊃ ∼L" &&
					 $('input[id="s12b"]').val() != "R ⊃ ∼L")
	{
	$("#s33312c4").css({ opacity: .7, "z-index": "2" });
	$("#s33312e4").css({ opacity: .0 });
  }
	else if ($('input[id="s12d"]').val() == "∼L" &&
					 $('input[id="s12b"]').val() != "∼L")
	{
	$("#s33312c4").css({ opacity: .7, "z-index": "2" });
	$("#s33312e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c4").css({ opacity: .0 });
	$("#s33312e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s12e"]').val() == "R ⊃ ∼L" ||
			$('input[id="s12e"]').val() == "∼L")
	{
	$("#s33312c5").css({ opacity: .7, "z-index": "2" });
	$("#s33312e5").css({ opacity: .0 });
  }
	else
	{
	$("#s33312c5").css({ opacity: .0 });
	$("#s33312e5").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s12f"]').val() == "R ⊃ ∼L" &&
			$('input[id="s12e"]').val() != "R ⊃ ∼L")
	{
	$("#s33312c6").css({ opacity: .7, "z-index": "2" });
	$("#s33312e6").css({ opacity: .0 });
  }
	else if ($('input[id="s12f"]').val() == "∼L" &&
					 $('input[id="s12e"]').val() != "∼L")
	{
	$("#s33312c6").css({ opacity: .7, "z-index": "2" });
	$("#s33312e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c6").css({ opacity: .0 });
	$("#s33312e6").css({ opacity: .7, "z-index": "2" });
  }
	if (($('input[id="bf12a"]').val() == "MT" &&
			 $('input[id="s12a"]').val() == "∼(R ⊃ ∼L) ⊃ P") ||
			($('input[id="bf12a"]').val() == "DS" &&
			 $('input[id="s12a"]').val() == "P ∨ ∼L"))
	{
	$("#s33312c7").css({ opacity: .7, "z-index": "2" });
	$("#s33312e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c7").css({ opacity: .0 });
	$("#s33312e7").css({ opacity: .7, "z-index": "2" });
	}
	if (($('input[id="bf12b"]').val() == "MT" &&
			$('input[id="s12c"]').val() == "∼(R ⊃ ∼L) ⊃ P") &&
			$('input[id="bf12a"]').val() != "MT")
	{
	$("#s33312c8").css({ opacity: .7, "z-index": "2" });
	$("#s33312e8").css({ opacity: .0 });
  }
	else if (($('input[id="bf12b"]').val() == "DS" &&
			$('input[id="s12c"]').val() == "P ∨ ∼L") &&
			$('input[id="bf12a"]').val() != "DS")
	{
	$("#s33312c8").css({ opacity: .7, "z-index": "2" });
	$("#s33312e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c8").css({ opacity: .0 });
	$("#s33312e8").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf12c"]').val() == "AC")
	{
	$("#s33312c9").css({ opacity: .7, "z-index": "2" });
	$("#s33312e9").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c9").css({ opacity: .0 });
	$("#s33312e9").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v312"]:checked').val() == "0")
	{
	$("#s33312c10").css({ opacity: .7, "z-index": "2" });
	$("#s33312e10").css({ opacity: .0 });
  }
  else
  {
	$("#s33312c10").css({ opacity: .0 });
	$("#s33312e10").css({ opacity: .7, "z-index": "2" });
  }
	//#13
	if ($('input[id="s13a"]').val() == "E ⊃ M")
	{
	$("#s33313c1").css({ opacity: .7, "z-index": "2" });
	$("#s33313e1").css({ opacity: .0 });
  }
  else if ($('input[id="s13a"]').val() == "N ⊃ D" ||
					 $('input[id="s13a"]').val() == "∼G ∨ ∼D")
	{
	$("#s33313c1").css({ opacity: .7, "z-index": "2" });
	$("#s33313e1").css({ opacity: .0 });
  }
	else
	{
	$("#s33313c1").css({ opacity: .0 });
	$("#s33313e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s13b"]').val() == "N ⊃ D" &&
			$('input[id="s13a"]').val() != "N ⊃ D")
	{
	$("#s33313c2").css({ opacity: .7, "z-index": "2" });
	$("#s33313e2").css({ opacity: .0 });
  }
	else if ($('input[id="s13b"]').val() == "∼G ∨ ∼D" &&
					 $('input[id="s13a"]').val() != "∼G ∨ ∼D")
	{
	$("#s33313c2").css({ opacity: .7, "z-index": "2" });
	$("#s33313e2").css({ opacity: .0 });
	}
  else
  {
	$("#s33313c2").css({ opacity: .0 });
	$("#s33313e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s13c"]').val() == "∼S ∨ ∼N")
	{
	$("#s33313c3").css({ opacity: .7, "z-index": "2" });
	$("#s33313e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33313c3").css({ opacity: .0 });
	$("#s33313e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s13d"]').val() == "∼S ∨ ∼N" ||
			$('input[id="s13d"]').val() == "(∼S ∨ ∼N) ⊃ K")
	{
	$("#s33313c4").css({ opacity: .7, "z-index": "2" });
	$("#s33313e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33313c4").css({ opacity: .0 });
	$("#s33313e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s13e"]').val() == "∼S ∨ ∼N" &&
			$('input[id="s13d"]').val() != "∼S ∨ ∼N")
	{
	$("#s33313c5").css({ opacity: .7, "z-index": "2" });
	$("#s33313e5").css({ opacity: .0 });
  }
  else if ($('input[id="s13e"]').val() == "(∼S ∨ ∼N) ⊃ K" &&
					 $('input[id="s13d"]').val() != "(∼S ∨ ∼N) ⊃ K")
	{
	$("#s33313c5").css({ opacity: .7, "z-index": "2" });
	$("#s33313e5").css({ opacity: .0 });
  }
  else
  {
	$("#s33313c5").css({ opacity: .0 });
	$("#s33313e5").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[id="bf13a"]').val() == "DD")
	{
	$("#s33313c6").css({ opacity: .7, "z-index": "2" });
	$("#s33313e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33313c6").css({ opacity: .0 });
	$("#s33313e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf13b"]').val() == "MP")
	{
	$("#s33313c7").css({ opacity: .7, "z-index": "2" });
	$("#s33313e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33313c7").css({ opacity: .0 });
	$("#s33313e7").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v313"]:checked').val() == "1")
	{
	$("#s33313c8").css({ opacity: .7, "z-index": "2" });
	$("#s33313e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33313c8").css({ opacity: .0 });
	$("#s33313e8").css({ opacity: .7, "z-index": "2" });
  }
	//#14
	if ($('input[id="s14a"]').val() == "(G • M) ⊃ A" ||
			$('input[id="s14a"]').val() == "G • M")
	{
	$("#s33314c1").css({ opacity: .7, "z-index": "2" });
	$("#s33314e1").css({ opacity: .0 });
  }
	else
	{
	$("#s33314c1").css({ opacity: .0 });
	$("#s33314e1").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14b"]').val() == "(G • M) ⊃ A" &&
			$('input[id="s14a"]').val() != "(G • M) ⊃ A")
	{
	$("#s33314c2").css({ opacity: .7, "z-index": "2" });
	$("#s33314e2").css({ opacity: .0 });
  }
	else if ($('input[id="s14b"]').val() == "G • M" &&
					 $('input[id="s14a"]').val() != "G • M")
	{
	$("#s33314c2").css({ opacity: .7, "z-index": "2" });
	$("#s33314e2").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c2").css({ opacity: .0 });
	$("#s33314e2").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14c"]').val() == "A")
	{
	$("#s33314c3").css({ opacity: .7, "z-index": "2" });
	$("#s33314e3").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c3").css({ opacity: .0 });
	$("#s33314e3").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14d"]').val() == "∼A ∨ (∼E ⊃ O)" ||
			$('input[id="s14c"]').val() == "A")
	{
	$("#s33314c4").css({ opacity: .7, "z-index": "2" });
	$("#s33314e4").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c4").css({ opacity: .0 });
	$("#s33314e4").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14e"]').val() == "∼A ∨ (∼E ⊃ O)" &&
			$('input[id="s14d"]').val() != "∼A ∨ (∼E ⊃ O)")
	{
	$("#s33314c5").css({ opacity: .7, "z-index": "2" });
	$("#s33314e5").css({ opacity: .0 });
  }
	else if ($('input[id="s14e"]').val() == "A" &&
			$('input[id="s14d"]').val() != "A")
	{
	$("#s33314c5").css({ opacity: .7, "z-index": "2" });
	$("#s33314e5").css({ opacity: .0 });
  }
	else
	{
	$("#s33314c5").css({ opacity: .0 });
	$("#s33314e5").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14f"]').val() == "∼E ⊃ O")
	{
	$("#s33314c6").css({ opacity: .7, "z-index": "2" });
	$("#s33314e6").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c6").css({ opacity: .0 });
	$("#s33314e6").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14g"]').val() == "∼E ⊃ O" ||
			$('input[id="s14g"]').val() == "∼B ⊃ ∼E")
	{
	$("#s33314c7").css({ opacity: .7, "z-index": "2" });
	$("#s33314e7").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c7").css({ opacity: .0 });
	$("#s33314e7").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="s14h"]').val() == "∼E ⊃ O" &&
			$('input[id="s14g"]').val() != "∼E ⊃ O")
	{
	$("#s33314c8").css({ opacity: .7, "z-index": "2" });
	$("#s33314e8").css({ opacity: .0 });
  }
	else if ($('input[id="s14h"]').val() == "∼B ⊃ ∼E" &&
			$('input[id="s14g"]').val() != "∼B ⊃ ∼E")
	{
	$("#s33314c8").css({ opacity: .7, "z-index": "2" });
	$("#s33314e8").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c8").css({ opacity: .0 });
	$("#s33314e8").css({ opacity: .7, "z-index": "2" });
	}
	if ($('input[id="bf14a"]').val() == "MP")
	{
	$("#s33314c9").css({ opacity: .7, "z-index": "2" });
	$("#s33314e9").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c9").css({ opacity: .0 });
	$("#s33314e9").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf14b"]').val() == "DS")
	{
	$("#s33314c10").css({ opacity: .7, "z-index": "2" });
	$("#s33314e10").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c10").css({ opacity: .0 });
	$("#s33314e10").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[id="bf14c"]').val() == "HS")
	{
	$("#s33314c11").css({ opacity: .7, "z-index": "2" });
	$("#s33314e11").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c11").css({ opacity: .0 });
	$("#s33314e11").css({ opacity: .7, "z-index": "2" });
  }
	if ($('input[name="v314"]:checked').val() == "1")
	{
	$("#s33314c12").css({ opacity: .7, "z-index": "2" });
	$("#s33314e12").css({ opacity: .0 });
  }
  else
  {
	$("#s33314c12").css({ opacity: .0 });
	$("#s33314e12").css({ opacity: .7, "z-index": "2" });
  }

	document.getElementById("chan3").blur();
	window.location.replace('iLogic_3_3.html#Ex333');
}
