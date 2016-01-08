<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Exercise 3.3 I Results</title>
<link rel="stylesheet" href="../iLogic.css" type="text/css" />
<script type="text/javascript">
<!--
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
//-->
</script>
<style type="text/css">
<!--
a:hover {
	color: #ffffff;
	text-decoration:none;
	}
-->
</style>
</head>

<body>

<div id="hwrap">
  <div id="hwrap2">
    <div id="header">
      <h1>iLogic</h1>
    </div>
  </div>
</div>

<div id="nwrap">
  <div id="nwrap2">
    <div id="nav">
      <ul>
        <li><a href="javascript:;" onclick="window.location.assign('../../index.html');">HOME</a></li>
        <li><a href="javascript:;" onclick="window.location.assign('../Table of Contents.html');">TABLE OF CONTENTS</a></li>
      </ul>
    </div>
  </div>
</div>

<div id="mwrap">
  <div id="mwrap2">
    <div id="main">
      <h3 id="Ex33">Exercise 3.3 I Results</h3>
      
      <ol class="ex_sec">
        <li>Decide whether each of the arguments is one of the common forms. If
              it is, identify the name of the form and decide its validity. If
              it is not a common form, label it as &ldquo;No Form&rdquo; and
              use the truth table to determine its validity.
              </li>
      </ol>

      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">1.</td>
            <td class="c2" width="60px"><span
              class="var">A <span class="symb">&sup;</span> C</span><br />
              <span class="var">A</span></td>
            <td width="120px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">2.</td>
            <td class="c2" width="60px"><span
              class="var">H <span class="symb">&sup;</span> K<br />
              <span class="symb">&sim;</span>H</span></td>
            <td width="120px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">C</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="symb">&sim;</span><span class="var">K</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf1"] == "Modus Ponens") {
	    echo "&nbsp;".$_POST["bf1"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf1"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf2"] == "Denying the Antecedent") {
	    echo "&nbsp;".$_POST["bf2"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf2"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v1"] == "Valid") {
	    echo "&nbsp;".$_POST["v1"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v1"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v2"] == "Invalid") {
	    echo "&nbsp;".$_POST["v2"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v2"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">3.</td>
            <td class="c2" width="60px"><span
              class="var">E <span class="symb">&sup;</span> G</span><br />
              <span class="symb">&sim;</span><span class="var">G</span></td>
            <td width="120px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">4.</td>
            <td class="c2" width="70px"><span class="symb">&sim;</span><span
              class="var">S <span class="symb">&sup;</span> M<br />
              <span class="symb">&sim;</span>M</span></td>
            <td width="110px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="symb">&sim;</span><span class="var">E</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">S</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf3"] == "Modus Tollens") {
	    echo "&nbsp;".$_POST["bf3"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf3"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf4"] == "Modus Tollens") {
	    echo "&nbsp;".$_POST["bf4"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf4"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v3"] == "Valid") {
	    echo "&nbsp;".$_POST["v3"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v3"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v4"] == "Valid") {
	    echo "&nbsp;".$_POST["v4"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v4"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">5.</td>
            <td class="c2" width="70px"><span
              class="var">R <span class="symb">&sup;</span> <span class="symb">&sim;</span>D</span><br />
              <span class="var">R</span></td>
            <td width="110px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">6.</td>
            <td class="c2" width="80px"><span class="symb">&sim;</span><span
              class="var">F <span class="symb">&sup;</span> <span class="symb">&sim;</span>P</span><br />
              <span class="var">P</span></td>
            <td width="100px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="symb">&sim;</span><span class="var">D</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">F</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf5"] == "Modus Ponens") {
	    echo "&nbsp;".$_POST["bf5"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf5"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf6"] == "Modus Tollens") {
	    echo "&nbsp;".$_POST["bf6"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf6"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v5"] == "Valid") {
	    echo "&nbsp;".$_POST["v5"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v5"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v6"] == "Valid") {
	    echo "&nbsp;".$_POST["v6"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v6"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">7.</td>
            <td class="c2" width="70px"><span
              class="var">B <span class="symb">&or;</span> <span class="symb">&sim;</span>C</span><br />
              <span class="symb">&sim;</span><span class="var">C</span></td>
            <td width="110px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">8.</td>
            <td class="c2" width="70px"><span
              class="var">A <span class="symb">&sup;</span> <span class="symb">&sim;</span>L</span><br />
              <span class="var">L</span></td>
            <td width="110px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">B</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="symb">&sim;</span><span class="var">A</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf7"] == "Disjunctive Syllogism") {
	    echo "&nbsp;".$_POST["bf7"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf7"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf8"] == "Affirming the Consequent") {
	    echo "&nbsp;".$_POST["bf8"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf8"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v7"] == "Valid") {
	    echo "&nbsp;".$_POST["v7"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v7"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v8"] == "Invalid") {
	    echo "&nbsp;".$_POST["v8"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v8"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">9.</td>
            <td class="c2" width="70px"><span class="symb">&sim;</span><span
        class="var">N</span><span class="var2">&nbsp;</span><span
        class="symb">&or;</span><span class="var2">&nbsp;</span><span
        class="var">G</span>
				<br />
              <span class="var">N</span></td>
            <td width="110px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">10.</td>
            <td class="c2" width="70px"><span
              class="var">K <span class="symb">&sup;</span> M</span><br />
              <span class="symb">&sim;</span><span class="var">M <span class="symb">&sup;</span> E</span></td>
            <td width="110px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="symb">&sim;</span><span class="var">G</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">K <span
              class="symb">&sup;</span> E</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf9"] == "No Form") {
	    echo "&nbsp;".$_POST["bf9"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf9"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf10"] == "No Form") {
	    echo "&nbsp;".$_POST["bf10"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf10"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v9"] == "Invalid") {
	    echo "&nbsp;".$_POST["v9"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v9"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v10"] == "Invalid") {
	    echo "&nbsp;".$_POST["v10"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v10"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">11.</td>
            <td class="c2" width="70px"><span class="symb">&sim;</span><span
              class="var">D <span class="symb">&sup;</span> E</span><br />
              <span class="var">P <span class="symb">&sup;</span> <span class="symb">&sim;</span>D</span></td>
            <td width="110px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">12.</td>
            <td class="c2" width="170px"><span class="var2">(</span><span
              class="var">S <span class="symb">&sup;</span> <span class="symb">&sim;</span>V<span
              class="var2">)</span> <span
              class="symb">&#x2022;</span> <span class="var2">(</span><span class="symb">&sim;</span>A <span
              class="symb">&sup;</span> U<span class="var2">)</span></span><br />
              <span class="var">V <span class="symb">&or;</span> <span class="symb">&sim;</span>U</span></td>
            <td width="10px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">P <span
            class="symb">&sup;</span> E</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span
              class="symb">&sim;</span><span class="var">S <span
              class="symb">&or;</span> A</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf11"] == "Hypothetical Syllogism") {
	    echo "&nbsp;".$_POST["bf11"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf11"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf12"] == "Destructive Dilemma") {
	    echo "&nbsp;".$_POST["bf12"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf12"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v11"] == "Valid") {
	    echo "&nbsp;".$_POST["v11"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v11"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v12"] == "Valid") {
	    echo "&nbsp;".$_POST["v12"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v12"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">13.</td>
            <td class="c2" width="70px"><span
              class="var">C <span class="symb">&sup;</span> <span class="symb">&sim;</span>F</span><br />
              <span class="symb">&sim;</span><span class="var">F</span></td>
            <td width="110px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">14.</td>
            <td class="c2" width="160px"><span class="var2">(</span><span
              class="var">R <span class="symb">&sup;</span> L<span
              class="var2">)</span> <span
              class="symb">&#x2022;</span> </span><span class="var2">(</span><span class="symb">&sim;</span><span
              class="var">R <span class="symb">&sup;</span> E</span><span class="var2">)</span><br />
              <span class="var">R <span class="symb">&or;</span> <span class="symb">&sim;</span>R</span></td>
            <td width="20px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">C</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="var">L <span
              class="symb">&or;</span> E</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf13"] == "Affirming the Consequent") {
	    echo "&nbsp;".$_POST["bf13"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf13"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf14"] == "Constructive Dilemma") {
	    echo "&nbsp;".$_POST["bf14"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf14"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v13"] == "Invalid") {
	    echo "&nbsp;".$_POST["v13"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v13"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v14"] == "Valid") {
	    echo "&nbsp;".$_POST["v14"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v14"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">15.</td>
            <td class="c2" width="120px"><span
              class="var">S <span class="symb">&or;</span> <span class="symb">&sim;</span><span
              class="var2">(</span>H <span
              class="symb">&equiv;</span> N<span class="var2">)</span></span><br />
              <span class="var">H <span class="symb">&equiv;</span> N</span></td>
            <td width="60px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">16.</td>
            <td class="c2" width="110px"><span class="var2">(</span><span
              class="var">A <span class="symb">&#x2022;</span> <span class="symb">&sim;</span>B<span
              class="var2">)</span> <span class="symb">&sup;</span> K</span></span><br />
              <span class="symb">&sim;</span><span class="var2">(</span><span
              class="var">A <span class="symb">&#x2022;</span> <span class="symb">&sim;</span>B</span><span
              class="var2">)</span></td>
            <td width="70px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span
            class="var">S</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span
              class="symb">&sim;</span><span class="var">K</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf15"] == "Disjunctive Syllogism") {
	    echo "&nbsp;".$_POST["bf15"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf15"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf16"] == "Denying the Antecedent") {
	    echo "&nbsp;".$_POST["bf16"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf16"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v15"] == "Valid") {
	    echo "&nbsp;".$_POST["v15"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v15"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v16"] == "Invalid") {
	    echo "&nbsp;".$_POST["v16"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v16"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">17.</td>
            <td class="c2" width="160px"><span class="var2">(</span><span
              class="var">J <span class="symb">&sup;</span> M<span
              class="var2">)</span> </span><span
              class="symb">&#x2022;</span><span class="var"> </span><span class="var2">(</span><span
              class="var">P <span class="symb">&sup;</span> <span class="symb">&sim;</span>D</span><span class="var2">)</span><br />
              <span class="symb">&sim;</span><span class="var">J <span
              class="symb">&or; &sim;</span>P</span></td>
            <td width="20px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">18.</td>
            <td class="c2" width="110px"><span
              class="var">F <span class="symb">&sup;</span> <span
              class="var2">(</span><span class="symb">&sim;</span>D <span
              class="symb">&or;</span> E<span class="var2">)</span></span><br />
              <span class="symb">&sim;</span><span
              class="var2">(</span><span class="symb">&sim;</span><span class="var">D </span><span
              class="symb">&or;</span><span class="var"> E</span><span class="var2">)</span></td>
            <td width="70px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span
              class="symb">&sim;</span><span class="var">M <span
              class="symb">&or;</span> D</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span
              class="symb">&sim;</span><span class="var">F</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf17"] == "No Form") {
	    echo "&nbsp;".$_POST["bf17"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf17"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf18"] == "Modus Tollens") {
	    echo "&nbsp;".$_POST["bf18"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf18"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v17"] == "Invalid") {
	    echo "&nbsp;".$_POST["v17"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v17"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v18"] == "Valid") {
	    echo "&nbsp;".$_POST["v18"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v18"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex">
        <tbody>
          <tr>
            <td class="c1">19.</td>
            <td class="c2" width="70px"><span
              class="var">C </span><span class="symb">&or;</span> <span class="symb">&sim;</span><span class="var">A</span><br />
              <span class="symb">&sim;</span><span class="var">A </span><span
              class="symb">&or;</span><span class="var"> N</span></td>
            <td width="110px">&nbsp;</td>
            <td width="60px">&nbsp;</td>
            <td class="c1">20.</td>
            <td class="c2" width="120px"><span class="symb">&sim;</span><span class="var2">(</span><span
              class="var">R <span class="symb">&#x2022;</span> C<span
              class="var2">) </span><span class="symb">&sup;</span> <span class="symb">&sim;</span><span class="var">S</span></span><br />
              <span class="var">S <span class="symb">&sup;</span> T</span></td>
            <td width="60px">&nbsp;</td>
          </tr>
          <tr>
            <td class="c1">&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span
              class="var">C </span><span class="symb">&or;</span><span class="var"> N</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c2" style="border-top: 1px solid black;"><span class="symb">&sim;</span><span class="var2">(</span><span
              class="var">R <span class="symb">&#x2022;</span> C<span
              class="var2">)</span> <span class="symb">&sup;</span> T</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf19"] == "No Form") {
	    echo "&nbsp;".$_POST["bf19"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf19"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2">Your answers:<br />
	    <span class="ex33s">
	    <?php
	    if ($_POST["bf20"] == "Hypothetical Syllogism") {
	    echo "&nbsp;".$_POST["bf20"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf20"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v19"] == "Invalid") {
	    echo "&nbsp;".$_POST["v19"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v19"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="c3a" colspan="2"><span class="ex33s">
	    <?php
	    if ($_POST["v20"] == "Valid") {
	    echo "&nbsp;".$_POST["v20"];
	    } else {
	    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["v20"]."&nbsp;</span>";
	    }
	    ?>
	    </span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-left: 60px"><input type="button" onclick="window.location.replace('iLogic_3_3.html#Ex33')" value="Return to Exercise 3.3 I" style="font-size:16px; cursor: pointer" /></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
</body>
</html>
