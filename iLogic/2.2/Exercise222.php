<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Exercise 3.4 Results</title>
<link rel="stylesheet" href="../iLogic.css" type="text/css" />
<script type="text/javascript">
<!--
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
//-->
</script>
<style>
a:hover {
	color: #ffffff;
	text-decoration:none;
	}
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

<h3>Exercise 2.2 Section II Results</h3>
      
    <ol class="ex_sec" start="2">
      <li>You cannot see what is inside a box, but are told that it contains
      colored shapes. In each of the following questions, suppose the given
      sentence is the only information you have about the colored shapes in
      the box. Try to see if you can determine whether the other sentences
      are true (<span class="var2">T</span>) or false (<span
      class="var2">F</span>). If you think the truth value cannot be
      determined, identify it as undetermined (<span class="var2">?</span>).
      </li>
    </ol>

	<form name="ex222" action="Exercise222.php" method="post">

	<ol class="ex22">
      <li style="margin: 12px 0 0 40px;">Some squares are blue.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2211"] == "?") {
				    echo "&nbsp;".$_POST["so2211"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2211"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 All squares are blue.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2212"] == "F") {
				    echo "&nbsp;".$_POST["so2212"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2212"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 No squares are blue.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2213"] == "?") {
				    echo "&nbsp;".$_POST["so2213"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2213"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some squares are not blue.
			</li>
      <li style="margin: 12px 0 0 40px;">Some circles are not green.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2221"] == "F") {
				    echo "&nbsp;".$_POST["so2221"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2221"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 All circles are green.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2222"] == "?") {
				    echo "&nbsp;".$_POST["so2222"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2222"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 No circles are green.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2223"] == "?") {
				    echo "&nbsp;".$_POST["so2223"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2223"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some circles are green.
			</li>
      <li style="margin: 12px 0 0 40px;">No triangles are red.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2231"] == "F") {
				    echo "&nbsp;".$_POST["so2231"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2231"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 All triangles are red.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2232"] == "F") {
				    echo "&nbsp;".$_POST["so2232"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2232"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some triangles are red.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2233"] == "T") {
				    echo "&nbsp;".$_POST["so2233"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2233"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some triangles are not red.
			</li>
      <li style="margin: 12px 0 0 40px;">It is false that all octagons are
      gray.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2241"] == "?") {
				    echo "&nbsp;".$_POST["so2241"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2241"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 No octagons are gray.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2242"] == "?") {
				    echo "&nbsp;".$_POST["so2242"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2242"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some octagons are gray.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2243"] == "T") {
				    echo "&nbsp;".$_POST["so2243"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2243"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some octagons are not gray.
			</li>
      <li style="margin: 12px 0 0 40px;">It is false that some green shapes are
      hexagons.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2251"] == "F") {
				    echo "&nbsp;".$_POST["so2251"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2251"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 All green shapes are hexagons.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2252"] == "T") {
				    echo "&nbsp;".$_POST["so2252"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2252"]."&nbsp;</span>";
				    }
				    ?>
			</span> No green shapes are hexagons.<br>
			<span class="form22a">
				<?php
				    if ($_POST["so2253"] == "F") {
				    echo "&nbsp;".$_POST["so2253"]."&nbsp;";
				    } else {
				    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["so2253"]."&nbsp;</span>";
				    }
				    ?>
			</span>
			 Some green shapes are not hexagons.
			</li>
   </ol>

	</form>

		<p style="margin: 36px 60px;"><input type="button" onclick="window.location.replace('iLogic_2_2.html#ex222')" value="Return to Exercise 2.2 II" style="font-size:16px; cursor: pointer" /></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
</body>
</html>
