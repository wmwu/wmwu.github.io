<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Exercise 3.3 III Results</title>
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
      <h3 id="Ex33">Exercise 3.3 III Results</h3>
      
      <ol class="ex_sec" start="3">
        <li>Decide whether each of the following arguments is valid by
            showing how it is constructed out of the common forms. Identify each
            common form with its abbreviated form name.
        </li>
      </ol>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1"  style="padding: 0px 6px 4px 6px">1.</td>
            <td class="c2a" width="70px">
              <span class="var">H </span><span
              class="symb">&sup;</span><span class="var"> G</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">D </span><span class="symb">&or;</span><span
              class="var"> H</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">H </span><span
              class="symb">&sup;</span><span class="var"> G</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">D </span><span class="symb">&or;</span><span class="var"> H</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">D</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s1b"],ENT_QUOTES,"ISO-8859-1") == "H") {
	      echo $_POST["s1b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s1b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">D</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s1a"],ENT_QUOTES,"ISO-8859-1") == "H") {
	      echo $_POST["s1a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s1a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">G</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">G</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf1a"] == "DS") {
	      echo $_POST["bf1a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf1a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf1b"] == "MP") {
	      echo $_POST["bf1b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf1b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv1"] == "Valid") {
	      echo "&nbsp;".$_POST["lv1"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv1"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 0px 6px 4px 6px">2.</td>
            <td class="c2a" width="70px">
              <span class="var">M </span><span class="symb">&sup;</span><span
              class="var"> B</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">M </span><span class="symb">&sup;</span><span
              class="var"> B</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">B </span><span class="symb">&sup;</span><span
              class="var">&nbsp</span><span class="symb">&sim;</span><span
              class="var">C</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="var">B </span><span class="symb">&sup;</span><span
              class="var">&nbsp</span><span class="symb">&sim;</span><span
              class="var">C</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">M</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s2b"],ENT_QUOTES,"ISO-8859-1") == "B") {
	      echo $_POST["s2b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s2b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">M</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s2a"],ENT_QUOTES,"ISO-8859-1") == "B") {
	      echo $_POST["s2a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s2a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">C</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">C</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf2a"] == "MP") {
	      echo $_POST["bf2a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf2a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf2b"] == "MP") {
	      echo $_POST["bf2b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf2b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv2"] == "Valid") {
	      echo "&nbsp;".$_POST["lv2"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv2"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 0px 6px 4px 6px">3.</td>
            <td class="c2a" width="70px">
              <span class="var">A </span><span class="symb">&sup;</span><span
              class="var"> E</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">A </span><span class="symb">&sup;</span><span
              class="var"> E</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="symb">&sim;</span><span class="var">A </span><span class="symb">&sup;</span><span
              class="var">&nbsp</span><span class="symb">&sim;</span><span
              class="var">S</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">A </span><span class="symb">&sup;</span><span
              class="var">&nbsp</span><span class="symb">&sim;</span><span
              class="var">S</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">E</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s3b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;A") {
	      echo $_POST["s3b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s3b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">E</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s3a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;A") {
	      echo $_POST["s3a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s3a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">S</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">S</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf3a"] == "MT") {
	      echo $_POST["bf3a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf3a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf3b"] == "MP") {
	      echo $_POST["bf3b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf3b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv3"] == "Valid") {
	      echo "&nbsp;".$_POST["lv3"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv3"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 0px 6px 4px 6px">4.</td>
            <td class="c2a" width="70px">
              <span class="var">K </span><span
              class="symb">&sup;</span><span class="var"> R</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">K </span><span
              class="symb">&sup;</span><span class="var"> R</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">K </span><span class="symb">&sup;</span><span
              class="var"> N</span>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">R </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">R</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s4b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;K") {
	      echo $_POST["s4b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s4b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">K </span><span class="symb">&sup;</span><span
              class="var"> N</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s4a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;K") {
	      echo $_POST["s4a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s4a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">N</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">N</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf4a"] == "MT") {
	      echo $_POST["bf4a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf4a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf4b"] == "DA") {
	      echo $_POST["bf4b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf4b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv4"] == "Invalid") {
	      echo "&nbsp;".$_POST["lv4"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv4"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 0px 6px 4px 6px">5.</td>
            <td class="c2a" width="70px">
              <span class="var">D </span><span class="symb">&or;</span><span
              class="var"> C</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="symb">&sim;</span><span class="var">D </span><span
              class="symb">&or;</span><span class="var"> </span><span
              class="symb">&sim;</span><span class="var">B</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">D </span><span class="symb">&or;</span><span
              class="var"> C</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">D </span><span
              class="symb">&or;</span><span class="var"> </span><span
              class="symb">&sim;</span><span class="var">B</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">B</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s5b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;D") {
	      echo $_POST["s5b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s5b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">B</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s5a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;D") {
	      echo $_POST["s5a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s5a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">C</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">C</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf5a"] == "DS") {
	      echo $_POST["bf5a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf5a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf5b"] == "DS") {
	      echo $_POST["bf5b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf5b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv5"] == "Valid") {
	      echo "&nbsp;".$_POST["lv5"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv5"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1"  style="padding: 0px 6px 4px 6px">6.</td>
            <td class="c2a" width="110px">
              <span class="symb">&sim;</span><span class="var">H </span><span
              class="symb">&sup;</span><span class="var">&nbsp;</span><span
              class="var2">(</span><span class="var">G </span><span
              class="symb">&equiv;</span><span class="var"> E</span><span
              class="var2">)</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="110px">
              <span class="symb">&sim;</span><span class="var">H </span><span
              class="symb">&sup;</span><span class="var">&nbsp;</span><span
              class="var2">(</span><span class="var">G </span><span
              class="symb">&equiv;</span><span class="var"> E</span><span
              class="var2">)</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">P </span><span
              class="symb">&sup;</span><span class="var"> H</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="var">P </span><span
              class="symb">&sup;</span><span class="var"> H</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var2">(</span><span
              class="var">G </span><span class="symb">&equiv;</span><span
              class="var"> E</span><span class="var2">)</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s6b"],ENT_QUOTES,"ISO-8859-1") == "H") {
	      echo $_POST["s6b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s6b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var2">(</span><span
              class="var">G </span><span class="symb">&equiv;</span><span
              class="var"> E</span><span class="var2">)</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s6a"],ENT_QUOTES,"ISO-8859-1") == "H") {
	      echo $_POST["s6a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s6a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">P</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">P</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf6a"] == "MT") {
	      echo $_POST["bf6a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf6a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf6b"] == "AC") {
	      echo $_POST["bf6b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf6b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv6"] == "Invalid") {
	      echo "&nbsp;".$_POST["lv6"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv6"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">7.</td>
            <td class="c2a" width="70px">
              <span class="var">A </span><span class="symb">&sup;</span><span
              class="var"> L</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">A </span><span class="symb">&sup;</span><span
              class="var"> L</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="80px" style="padding: 2px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s7b"],ENT_QUOTES,"ISO-8859-1") == "A &#8835; S") {
	      echo $_POST["s7b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s7b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">A </span><span
              class="symb">&or;</span><span class="var"> </span><span
              class="symb">&sim;</span><span class="var">M</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="var">A </span><span
              class="symb">&or;</span><span class="var"> </span><span
              class="symb">&sim;</span><span class="var">M</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">L </span><span class="symb">&sup;</span><span
              class="var"> S</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" width="80px" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">S</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s7d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;A") {
	      echo $_POST["s7d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s7d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">L </span><span class="symb">&sup;</span><span
              class="var"> S</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s7a"],ENT_QUOTES,"ISO-8859-1") == "A &#8835; S") {
	      echo $_POST["s7a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s7a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s7c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;A") {
	      echo $_POST["s7c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s7c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">M</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">S</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf7a"] == "HS") {
	      echo $_POST["bf7a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf7a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf7b"] == "MT") {
	      echo $_POST["bf7b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf7b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf7c"] == "DS") {
	      echo $_POST["bf7c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf7c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">M</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv7"] == "Valid") {
	      echo "&nbsp;".$_POST["lv7"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv7"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 0px 6px 4px 6px">8.</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">N </span><span
              class="symb">&sup;</span><span class="var">&nbsp;</span><span
              class="symb">&sim;</span><span class="var">K</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">R </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">O</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="symb">&sim;</span><span class="var">N </span><span
              class="symb">&or;</span><span class="var"> </span><span class="var">R</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="symb">&sim;</span><span class="var">N </span><span
              class="symb">&sup;</span><span class="var">&nbsp;</span><span
              class="symb">&sim;</span><span class="var">K</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">N </span><span
              class="symb">&or;</span><span class="var">&nbsp;</span><span
              class="var">R</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s8a"],ENT_QUOTES,"ISO-8859-1") == "O") {
	      echo $_POST["s8a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s8a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s8c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;R") {
	      echo $_POST["s8c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s8c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s8e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;N") {
	      echo $_POST["s8e"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s8e"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">R </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">O</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s8b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;R") {
	      echo $_POST["s8b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s8b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s8d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;N") {
	      echo $_POST["s8d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s8d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">K</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">O</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf8a"] == "MT") {
	      echo $_POST["bf8a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf8a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf8b"] == "DS") {
	      echo $_POST["bf8b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf8b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf8c"] == "MP") {
	      echo $_POST["bf8c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf8c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">K</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv8"] == "Valid") {
	      echo "&nbsp;".$_POST["lv8"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv8"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">9.</td>
            <td class="c2a" width="70px">
              <span class="var">C </span><span class="symb">&or;</span><span
              class="var">&nbsp;</span><span class="var">E</span>
            </td>
            <td width="80px">&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">C </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">B</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="90px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s9d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B &#8744; M") {
	      echo $_POST["s9d"];
	      }
	      elseif (html_entity_decode($_POST["s9d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;M") {
	      echo $_POST["s9d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s9d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="var">C </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">B</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s9a"],ENT_QUOTES,"ISO-8859-1") == "E &#8835; M") {
	      echo $_POST["s9a"];
	      }
	      elseif (html_entity_decode($_POST["s9a"],ENT_QUOTES,"ISO-8859-1") == "C &#8744; E") {
	      echo $_POST["s9a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s9a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s9e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B &#8744; M"
		&& html_entity_decode($_POST["s9d"],ENT_QUOTES,"ISO-8859-1") != "&#8764;B &#8744; M") {
	      echo $_POST["s9e"];
	      }
	      elseif (html_entity_decode($_POST["s9e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;M"
		&& html_entity_decode($_POST["s9d"],ENT_QUOTES,"ISO-8859-1") != "&#8764;M") {
	      echo $_POST["s9e"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s9e"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">E </span><span class="symb">&sup;</span><span
              class="var"> M</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s9b"],ENT_QUOTES,"ISO-8859-1") == "E &#8835; M"
		&& html_entity_decode($_POST["s9a"],ENT_QUOTES,"ISO-8859-1") != "E &#8835; M") {
	      echo $_POST["s9b"];
	      }
	      elseif (html_entity_decode($_POST["s9b"],ENT_QUOTES,"ISO-8859-1") == "C &#8744; E"
		&& html_entity_decode($_POST["s9a"],ENT_QUOTES,"ISO-8859-1") != "C &#8744; E") {
	      echo $_POST["s9b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s9b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px">
              <span class="symb">&sim;</span><span class="var">B</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">M</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s9c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B &#8744; M") {
	      echo $_POST["s9c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s9c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">B</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf9a"] == "CD") {
	      echo $_POST["bf9a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf9a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf9b"] == "DS") {
	      echo $_POST["bf9b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf9b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv9"] == "Valid") {
	      echo "&nbsp;".$_POST["lv9"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv9"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">10.</td>
            <td class="c2a" width="110px">
              <span class="var">W </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="var2">(</span><span
              class="symb">&sim;</span><span class="var">G </span><span
              class="symb">&sup;</span><span class="var"> H</span><span
              class="var2">)</span></span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a" width="110px">
              <span class="var">W </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="var2">(</span><span
              class="symb">&sim;</span><span class="var">G </span><span
              class="symb">&sup;</span><span class="var"> H</span><span
              class="var2">)</span></span>
            </td>
            <td width="40px">&nbsp;</td>
            <td style="padding: 2px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s10c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;G &#8835; H") {
	      echo $_POST["s10c"];
	      }
	      elseif (html_entity_decode($_POST["s10c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;H") {
	      echo $_POST["s10c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s10c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">W</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s10a"],ENT_QUOTES,"ISO-8859-1") == "W") {
	      echo $_POST["s10a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s10a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s10d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;G &#8835; H"
		&& html_entity_decode($_POST["s10c"],ENT_QUOTES,"ISO-8859-1") != "&#8764;G &#8835; H") {
	      echo $_POST["s10d"];
	      }
	      elseif (html_entity_decode($_POST["s10d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;H"
		&& html_entity_decode($_POST["s10c"],ENT_QUOTES,"ISO-8859-1") != "&#8764;H") {
	      echo $_POST["s10d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s10d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">H</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s10b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;G &#8835; H") {
	      echo $_POST["s10b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s10b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" width="80px">
              <span class="var">G</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">G</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf10a"] == "MP") {
	      echo $_POST["bf10a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf10a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf10b"] == "MT") {
	      echo $_POST["bf10b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf10b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv10"] == "Valid") {
	      echo "&nbsp;".$_POST["lv10"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv10"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">11.</td>
            <td class="c2a" width="110px">
              <span class="var2">(</span><span class="var">A </span><span
              class="symb">&sup;</span><span class="var"> </span><span
              class="var">D</span><span class="var2">)</span><span class="var">
              </span><span class="symb">&sup;</span><span class="var"> B</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td class="c2a">
              <span class="var">D </span><span class="symb">&or;</span><span
              class="var"> </span><span class="var2">(</span><span class="var">B
              </span><span class="symb">&sup;</span><span class="var">
              H</span><span class="var2">)</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11c"],ENT_QUOTES,"ISO-8859-1") == "B &#8835; H") {
	      echo $_POST["s11c"];
	      }
	      elseif (html_entity_decode($_POST["s11c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;H") {
	      echo $_POST["s11c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11f"],ENT_QUOTES,"ISO-8859-1") == "(A &#8835; D) &#8835; B") {
	      echo $_POST["s11f"];
	      }
	      elseif (html_entity_decode($_POST["s11f"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B") {
	      echo $_POST["s11f"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11f"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">D </span><span class="symb">&or;</span><span
              class="var"> </span><span class="var2">(</span><span class="var">B
              </span><span class="symb">&sup;</span><span class="var">
              H</span><span class="var2">)</span>
            </td>
            <td>&nbsp;</td>
            <td  width="130px" style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;D") {
	      echo $_POST["s11a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11d"],ENT_QUOTES,"ISO-8859-1") == "B &#8835; H"
		&& html_entity_decode($_POST["s11c"],ENT_QUOTES,"ISO-8859-1") != "B &#8835; H") {
	      echo $_POST["s11d"];
	      }
	      elseif (html_entity_decode($_POST["s11d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;H"
		&& html_entity_decode($_POST["s11c"],ENT_QUOTES,"ISO-8859-1") != "&#8764;H") {
	      echo $_POST["s11d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td> 
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11g"],ENT_QUOTES,"ISO-8859-1") == "(A &#8835; D) &#8835; B"
		&& html_entity_decode($_POST["s11f"],ENT_QUOTES,"ISO-8859-1") != "(A &#8835; D) &#8835; B") {
	      echo $_POST["s11g"];
	      }
	      elseif (html_entity_decode($_POST["s11g"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B"
		&& html_entity_decode($_POST["s11f"],ENT_QUOTES,"ISO-8859-1") != "&#8764;B") {
	      echo $_POST["s11g"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11g"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span
              class="var">H</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11b"],ENT_QUOTES,"ISO-8859-1") == "B &#8835; H") {
	      echo $_POST["s11b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s11e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B") {
	      echo $_POST["s11e"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s11e"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var2">(</span><span class="var">A </span><span
              class="symb">&sup;</span><span class="var"> </span><span
              class="var">D</span><span class="var2">)</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span
              class="var">D</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf11a"] == "DS") {
	      echo $_POST["bf11a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf11a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf11b"] == "MT") {
	      echo $_POST["bf11b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf11b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf11c"] == "MT") {
	      echo $_POST["bf11c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf11c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var2">(</span><span class="var">A </span><span
              class="symb">&sup;</span><span class="var"> </span><span
              class="var">D</span><span class="var2">)</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv11"] == "Valid") {
	      echo "&nbsp;".$_POST["lv11"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv11"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">12.</td>
            <td class="c2a" width="110px">
              <span class="symb">&sim;</span><span class="var2">(</span><span
              class="var">R </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">L</span><span class="var2">)</span><span
              class="var">&nbsp;</span><span class="symb">&sup;</span><span
              class="var"> P</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;(R &#8835; &#8764;L) &#8835; P") {
	      echo $_POST["s12a"];
	      }
	      elseif (html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L &#8744; P") {
	      echo $_POST["s12a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s12a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s12c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;(R &#8835; &#8764;L) &#8835; P"
		&& html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") != "&#8764;(R &#8835; &#8764;L) &#8835; P") {
	      echo $_POST["s12c"];
	      }
	      elseif (html_entity_decode($_POST["s12c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L &#8744; P"
		&& html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") != "&#8764;L &#8744; P") {
	      echo $_POST["s12c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s12c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s12e"],ENT_QUOTES,"ISO-8859-1") == "R &#8835; &#8764;L") {
	      echo $_POST["s12e"];
	      }
	      elseif (html_entity_decode($_POST["s12e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L") {
	      echo $_POST["s12e"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s12e"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">L </span><span
              class="symb">&or;</span><span class="var"> P</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">P</span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span class="var">P</span>
            </td> 
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s12f"],ENT_QUOTES,"ISO-8859-1") == "R &#8835; &#8764;L"
		&& html_entity_decode($_POST["s12e"],ENT_QUOTES,"ISO-8859-1") != "R &#8835; &#8764;L") {
	      echo $_POST["s12f"];
	      }
	      elseif (html_entity_decode($_POST["s12f"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L"
		&& html_entity_decode($_POST["s12e"],ENT_QUOTES,"ISO-8859-1") != "&#8764;L") {
	      echo $_POST["s12f"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s12f"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">P</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s12b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L"
		&& html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L &#8744; P") {
	      echo $_POST["s12b"];
	      }
	      elseif (html_entity_decode($_POST["s12b"],ENT_QUOTES,"ISO-8859-1") == "R &#8835; &#8764;L"
		&& html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;(R &#8835; &#8764;L) &#8835; P") {
	      echo $_POST["s12b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s12b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s12d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L"
		&& html_entity_decode($_POST["s12c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L &#8744; P") {
	      echo $_POST["s12d"];
	      }
	      elseif (html_entity_decode($_POST["s12d"],ENT_QUOTES,"ISO-8859-1") == "R &#8835; &#8764;L"
		&& html_entity_decode($_POST["s12c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;(R &#8835; &#8764;L) &#8835; P") {
	      echo $_POST["s12d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s12d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">R</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var">R</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf12a"] == "MT"
		&& html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;(R &#8835; &#8764;L) &#8835; P") {
	      echo $_POST["bf12a"];
	      }
	      elseif ($_POST["bf12a"] == "DS"
		&& html_entity_decode($_POST["s12a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L &#8744; P") {
	      echo $_POST["bf12a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf12a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf12b"] == "MT"
		&& html_entity_decode($_POST["s12c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;(R &#8835; &#8764;L) &#8835; P") {
	      echo $_POST["bf12b"];
	      }
	      elseif ($_POST["bf12b"] == "DS"
		&& html_entity_decode($_POST["s12c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;L &#8744; P") {
	      echo $_POST["bf12b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf12b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf12c"] == "AC") {
	      echo $_POST["bf12c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf12c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
              <span style="color:#663300">
	      <?php
	      if ($_POST["lv12"] == "Invalid") {
	      echo "&nbsp;".$_POST["lv12"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv12"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>
      
      <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">13.</td>
            <td class="c2a" width="120px">
              <span class="var">S </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="var">G</span>
            </td>
            <td width="30px">&nbsp;</td>
            <td class="c2a" width="120px">
              <span class="var">S </span><span class="symb">&sup;</span><span
              class="var"> G</span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s13d"],ENT_QUOTES,"ISO-8859-1") == "(&#8764;S &#8744; &#8764;N) &#8835; K") {
	      echo $_POST["s13d"];
	      }
	      elseif (html_entity_decode($_POST["s13d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;S &#8744; &#8764;N") {
	      echo $_POST["s13d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s13d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="var">N </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="var">D</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s13a"],ENT_QUOTES,"ISO-8859-1") == "N &#8835; D") {
	      echo $_POST["s13a"];
	      }
	      elseif (html_entity_decode($_POST["s13a"],ENT_QUOTES,"ISO-8859-1") == "&#8764;G &#8744; &#8764;D") {
	      echo $_POST["s13a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s13a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s13e"],ENT_QUOTES,"ISO-8859-1") == "(&#8764;S &#8744; &#8764;N) &#8835; K"
		&& html_entity_decode($_POST["s13d"],ENT_QUOTES,"ISO-8859-1") != "(&#8764;S &#8744; &#8764;N) &#8835; K") {
	      echo $_POST["s13e"];
	      }
	      elseif (html_entity_decode($_POST["s13e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;S &#8744; &#8764;N"
		&& html_entity_decode($_POST["s13d"],ENT_QUOTES,"ISO-8859-1") != "&#8764;S &#8744; &#8764;N") {
	      echo $_POST["s13e"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s13e"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">G </span><span
              class="symb">&or;</span><span class="var">&nbsp;</span><span
              class="symb">&sim;</span><span class="var">D</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s13b"],ENT_QUOTES,"ISO-8859-1") == "N &#8835; D"
		&& html_entity_decode($_POST["s13a"],ENT_QUOTES,"ISO-8859-1") != "N &#8835; D") {
	      echo $_POST["s13b"];
	      }
	      elseif (html_entity_decode($_POST["s13b"],ENT_QUOTES,"ISO-8859-1") == "&#8764;G &#8744; &#8764;D"
		&& html_entity_decode($_POST["s13a"],ENT_QUOTES,"ISO-8859-1") != "&#8764;G &#8744; &#8764;D") {
	      echo $_POST["s13b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s13b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px">
              <span class="var">K</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="var2">(</span><span class="symb">&sim;</span><span
              class="var">S </span><span class="symb">&or;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">N</span><span class="var2">)</span><span
              class="var">&nbsp;</span><span class="symb">&sup;</span><span
              class="var"> K</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s13c"],ENT_QUOTES,"ISO-8859-1") == "&#8764;S &#8744; &#8764;N") {
	      echo $_POST["s13c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s13c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">K</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf13a"] == "DD") {
	      echo $_POST["bf13a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf13a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf13b"] == "MP") {
	      echo $_POST["bf13b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf13b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv13"] == "Valid") {
	      echo "&nbsp;".$_POST["lv13"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv13"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
        </tbody>
      </table>

     <table class="ex" border="0">
        <tbody>
          <tr>
            <td class="c1" style="padding: 4px 6px 4px 6px">14.</td>
            <td class="c2a" width="120px">
              <span class="var2">(</span><span class="var">G </span><span
              class="symb">&#x2219;</span><span class="var"> </span><span
              class="var">M</span><span class="var2">)</span><span class="var">
              </span><span class="symb">&sup;</span><span class="var"> A</span>
            </td>
            <td width="30px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14a"],ENT_QUOTES,"ISO-8859-1") == "(G &#8729; M) &#8835; A") {
	      echo $_POST["s14a"];
	      }
	      elseif (html_entity_decode($_POST["s14a"],ENT_QUOTES,"ISO-8859-1") == "G &#8729; M") {
	      echo $_POST["s14a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14d"],ENT_QUOTES,"ISO-8859-1") == "&#8764;A &#8744; (&#8764;E &#8835; O)") {
	      echo $_POST["s14d"];
	      }
	      elseif (html_entity_decode($_POST["s14d"],ENT_QUOTES,"ISO-8859-1") == "A") {
	      echo $_POST["s14d"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14d"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td width="40px">&nbsp;</td>
            <td width="130px" style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14g"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B &#8835; &#8764;E") {
	      echo $_POST["s14g"];
	      }
	      elseif (html_entity_decode($_POST["s14g"],ENT_QUOTES,"ISO-8859-1") == "&#8764;E &#8835; O") {
	      echo $_POST["s14g"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14g"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" width="70px">
              <span class="symb">&sim;</span><span class="var">A </span><span
              class="symb">&or;</span><span class="var">&nbsp;</span><span
              class="var2">(</span><span class="symb">&sim;</span><span
              class="var">E </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="var">O</span><span
              class="var2">)</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14b"],ENT_QUOTES,"ISO-8859-1") == "(G &#8729; M) &#8835; A"
		&& html_entity_decode($_POST["s14a"],ENT_QUOTES,"ISO-8859-1") != "(G &#8729; M) &#8835; A") {
	      echo $_POST["s14b"];
	      }
	      elseif (html_entity_decode($_POST["s14b"],ENT_QUOTES,"ISO-8859-1") == "G &#8729; M"
		&& html_entity_decode($_POST["s14a"],ENT_QUOTES,"ISO-8859-1") != "G &#8729; M") {
	      echo $_POST["s14b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14e"],ENT_QUOTES,"ISO-8859-1") == "&#8764;A &#8744; (&#8764;E &#8835; O)"
		&& html_entity_decode($_POST["s14d"],ENT_QUOTES,"ISO-8859-1") != "&#8764;A &#8744; (&#8764;E &#8835; O)") {
	      echo $_POST["s14e"];
	      }
	      elseif (html_entity_decode($_POST["s14e"],ENT_QUOTES,"ISO-8859-1") == "A"
		&& html_entity_decode($_POST["s14d"],ENT_QUOTES,"ISO-8859-1") != "A") {
	      echo $_POST["s14e"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14e"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; border-bottom: 1px solid black; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14h"],ENT_QUOTES,"ISO-8859-1") == "&#8764;B &#8835; &#8764;E"
		&& html_entity_decode($_POST["s14g"],ENT_QUOTES,"ISO-8859-1") != "&#8764;B &#8835; &#8764;E") {
	      echo $_POST["s14h"];
	      }
	      elseif (html_entity_decode($_POST["s14h"],ENT_QUOTES,"ISO-8859-1") == "&#8764;E &#8835; O"
		&& html_entity_decode($_POST["s14g"],ENT_QUOTES,"ISO-8859-1") != "&#8764;E &#8835; O") {
	      echo $_POST["s14h"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14h"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="var">G </span><span
              class="symb">&#x2219;</span><span class="var"> </span><span
              class="var">M</span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14c"],ENT_QUOTES,"ISO-8859-1") == "A") {
	      echo $_POST["s14c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td style="padding: 4px 0 4px 4px; font-family: 'Arial Unicode MS', sans-serif">
              <span style="color:#663300">
	      <?php
	      if (html_entity_decode($_POST["s14f"],ENT_QUOTES,"ISO-8859-1") == "&#8764;E &#8835; O") {
	      echo $_POST["s14f"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["s14f"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
            </td>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">B </span><span
              class="symb">&sup;</span><span class="var">&nbsp;</span><span
              class="var">O</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a" style="border-bottom: 1px solid black">
              <span class="symb">&sim;</span><span
              class="var">B </span><span class="symb">&sup;</span><span
              class="var">&nbsp;</span><span class="symb">&sim;</span><span
              class="var">E</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf14a"] == "MP") {
	      echo $_POST["bf14a"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf14a"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf14b"] == "DS") {
	      echo $_POST["bf14b"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf14b"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            <td colspan="2" style="padding: 4px 0 2px 4px; font-family: 'Arial Unicode MS', sans-serif">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["bf14c"] == "HS") {
	      echo $_POST["bf14c"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["bf14c"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c2a">
              <span class="symb">&sim;</span><span class="var">B </span><span
              class="symb">&sup;</span><span class="var">&nbsp;</span><span
              class="var">O</span>
            </td>
            <td>&nbsp;</td>
            <td colspan="4" style="padding: 4px 0 0 1px; text-align: left; vertical-align: top">
              <input type="button" value=&sim; class="operator" onclick="tilde();" />
              <input type="button" value=&#x2219; class="operator" onclick="dot();" />
              <input type="button" value=&or; class="operator" onclick="wedge();" />
              <input type="button" value=&sup; class="operator" onclick="horseshoe();" />
              <input type="button" value=&equiv; class="operator" onclick="triplebar();" />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="c3" colspan="2">
	      <span style="color:#663300">
	      <?php
	      if ($_POST["lv14"] == "Valid") {
	      echo "&nbsp;".$_POST["lv14"];
	      } else {
	      echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["lv14"]."&nbsp;</span>";
	      }
	      ?>
	      </span>
	    </td>
            </td>
          </tr>
        </tbody>
      </table>

      <p style="margin-left: 60px"><input type="button" onclick="window.location.replace('iLogic_3_3.html#Ex333')" value="Return to Exercise to 3.3 III" style="font-size:13px; cursor: pointer" /></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
</body>
</html>
