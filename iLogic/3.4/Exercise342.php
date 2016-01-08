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

<h3 id="Ex33">Exercise 3.4 Section II Results</h3>
      
  <ol class="ex_sec" start="2">
    <li>Use equivalence rules to derive a new statement from the given
    statement.</li>
  </ol>

	<form name="ex342" action="Exercise342.php" method="post">

	<ol class="ex34" id="ex342">
		<li>&nbsp;</li>
			<ol>
				<li>
					<span class="var">N </span><span class="symb">&or;</span><span
					class="var2">&nbsp;</span><span class="symb">&sim;</span><span
					class="var">E</span>
				</li>
				<li>
					<span class="var">E</span>
				</li>
				<li>
					<span class="nd">
						<span class="var">N </span><span class="symb">&sup;</span><span
						class="var2">&nbsp;</span><span class="symb">&sim;</span><span
						class="var">B</span>
					</span>
					<span class="var2">/ </span>
					<span class="symb">&sim;</span><span class="var">B</span>
				</li>
				<li>
					<span class="nds">
						<?php
						    if ($_POST["nd211"] == "∼E ∨ N") {
						    echo "&nbsp;".$_POST["nd211"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd211"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					1 Com.
				</li>
				<li>
					<span class="nds">
						<?php
						    if ($_POST["nd212"] == "∼∼E") {
						    echo "&nbsp;".$_POST["nd212"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd212"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					2 DN
				</li>
				<li>
					<span class="nd"><span class="var">N</span>
					</span>
					4, 5 DS</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">B</span>
					</span>
					3, 6 MP</li>
			</ol>
		<li>&nbsp;</li>
			<ol>
				<li>
					<span class="var">V </span><span class="symb">&sup;</span><span
					class="var2"> (</span><span class="var">Q </span><span
					class="symb">&#x2022;</span><span class="var"> K</span><span
					class="var2">)</span>
				</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">K </span><span
						class="symb">&or;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">Q</span>
					</span>
						<span class="var2">/ </span>
						<span class="symb">&sim;</span><span class="var">V</span>
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd221"] == "V ⊃ (K • Q)") {
						    echo "&nbsp;".$_POST["nd221"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd221"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					1 Com.
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd222"] == "∼(K • Q)") {
						    echo "&nbsp;".$_POST["nd222"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd222"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					2 DM
				</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">V</span>
					</span>
					3, 4 MT
				</li>
			</ol>
		<li>&nbsp;</li>
			<ol>
				<li>
					<span class="symb">&sim;</span><span class="var">S </span><span
					class="symb">&sup;</span><span class="var2">&nbsp;</span><span
					class="symb">&sim;</span><span class="var">R</span>
				</li>
				<li>
					<span class="symb">&sim;</span><span class="var">P </span><span
					class="symb">&or;</span><span class="var"> C</span>
				</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">S </span><span
						class="symb">&or;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">C</span>
					</span>
						<span class="var2">/ </span>
						<span class="var">R </span><span class="symb">&sup;</span><span
						class="var2">&nbsp;</span><span class="symb">&sim;</span><span
						class="var">P</span>
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd231"] == "R ⊃ S") {
						    echo "&nbsp;".$_POST["nd231"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd231"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					1 Trans.
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd232"] == "P ⊃ C") {
						    echo "&nbsp;".$_POST["nd232"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd232"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					2 Impl.
				</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">R </span><span
						class="symb">&or;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">P</span>
					</span>
					3, 4, 5 DD
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd233"] == "R ⊃ ∼P") {
						    echo "&nbsp;".$_POST["nd233"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd233"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					6 Impl.
				</li>
			</ol>
		<li>&nbsp;</li>
			<ol>
				<li>
					<span class="symb">&sim;</span><span class="var2">(</span><span
					class="var">A&nbsp;</span><span class="symb">&#x2022;</span><span
					class="var">&nbsp;H</span><span class="var2">)</span>
				</li>
				<li>
					<span class="symb">&sim;</span><span class="var">O&nbsp;</span><span
					class="symb">&equiv;</span><span class="var2">&nbsp;</span><span
					class="symb">&sim;</span><span class="var">H</span>
				</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">S </span><span
						class="symb">&or;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">C</span>
					</span>
						<span class="var2">/ </span>
						<span class="var">A&nbsp;</span><span
						class="symb">&sup;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">O</span>
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd241"] == "∼A ∨ ∼H") {
						    echo "&nbsp;".$_POST["nd241"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd241"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					1 DM
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd242"] == "A ⊃ ∼H") {
						    echo "&nbsp;".$_POST["nd242"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd242"]."&nbsp;</span>";
						    }
						    ?>
						</span>
						4 Impl.
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd243"] == "(∼O ⊃ ∼H) • (∼H ⊃ ∼O)") {
						    echo "&nbsp;".$_POST["nd243"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd243"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					2 Equiv.
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd244"] == "(∼H ⊃ ∼O) • (∼O ⊃ ∼H)") {
						    echo "&nbsp;".$_POST["nd244"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd244"]."&nbsp;</span>";
						    }
						    ?>
					</span>
					6 Com.
				</li>
				<li>
					<span class="nd">
						<span class="symb">&sim;</span><span class="var">H&nbsp;</span><span
						class="symb">&sup;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">O</span>
					</span>
					7 Simp.
				</li>
				<li>
					<span class="nd">
						<span class="var">A&nbsp;</span><span
						class="symb">&sup;</span><span class="var2">&nbsp;</span><span
						class="symb">&sim;</span><span class="var">O</span>
					</span>
					5, 8 HS
				</li>
			</ol>
		<li>&nbsp;</li>
			<ol>
				<li>
					<span class="var2">(</span><span class="var">B&nbsp;</span><span
					class="symb">&#x2022;</span><span class="var">&nbsp;D</span><span
					class="var2">)</span><span class="var2">&nbsp;</span><span
					class="symb">&sup;</span><span class="var2">&nbsp;</span><span
					class="var">J</span>
				</li>
				<li>
					<span class="var2">(</span><span class="var">D</span><span
					class="var2">&nbsp;</span><span class="symb">&#x2022;</span><span
					class="var2">&nbsp;</span><span class="symb">&sim;</span><span
					class="var">J</span><span class="var2">)</span><span
					class="var2">&nbsp;</span><span class="symb">&or;</span><span
					class="var2">&nbsp;</span><span class="var">M</span>
				</li>
				<li>
					<span class="nd">
						<span class="var">B</span>
					</span>
						<span class="var2">/ </span>
						<span class="var">M</span>
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd251"] == "B ⊃ (D ⊃ J)") {
						    echo "&nbsp;".$_POST["nd251"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd251"]."&nbsp;</span>";
						    }
						    ?>
						</span>
					1 Exp.
				</li>
				<li>
					<span class="nd">
						<span class="var">D</span><span class="var2">&nbsp;</span><span
						class="symb">&sup;</span><span class="var2">&nbsp;</span><span
						class="var">J</span>
					</span>
					3, 4 MP
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd252"] == "∼D ∨ J") {
						    echo "&nbsp;".$_POST["nd252"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd252"]."&nbsp;</span>";
						    }
						    ?>
						</span>
					5 Impl.
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd253"] == "∼D ∨ ∼∼J") {
						    echo "&nbsp;".$_POST["nd253"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd253"]."&nbsp;</span>";
						    }
						    ?>
						</span>
					6 DN
				</li>
				<li>
					<span class="nds"><?php
						    if ($_POST["nd254"] == "∼(D • ∼J)") {
						    echo "&nbsp;".$_POST["nd254"];
						    } else {
						    echo "<span style=\"text-decoration:line-through\">&nbsp;".$_POST["nd254"]."&nbsp;</span>";
						    }
						    ?>
						</span>
					7 DM
				</li>
				<li>
					<span class="nd">
						<span class="var">M</span>
					</span>
					2, 8 DS
				</li>
			</ol>
		</ol>
	</form>

		<p style="margin: 36px 60px;"><input type="button" onclick="window.location.replace('iLogic_3_4.html#ex342')" value="Return to Exercise 3.4 II" style="font-size:16px; cursor: pointer" /></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
</body>
</html>
