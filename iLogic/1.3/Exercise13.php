<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Exercise 1.3 Results</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" href="../iLogicButte.css" type="text/css" />
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

<body bgcolor="#999966">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
	<td width="15" nowrap="nowrap">&nbsp;</td>
	<td height="60" colspan="3" class="logo" nowrap="nowrap"><br />
	iLogic</td>
	<td width="603">&nbsp;</td>
  </tr>

	<tr bgcolor="#ffffff">
	<td colspan="5"><img src="../../mm_spacer.gif" alt="" width="1" height="1" border="0" /></td>
	</tr>

	<tr bgcolor="#a4c2c2">
	<td width="15" nowrap="nowrap">&nbsp;</td>
	<td height="36" colspan="2" id="navigation" class="navText">
    <a href="javascript:;" onclick="MM_goToURL('parent','../../index.html');return document.MM_returnValue">HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="javascript:;" onclick="MM_goToURL('parent','../Table of Contents.html');return document.MM_returnValue">TABLE OF CONTENTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </td>
	<td>&nbsp;</td>
	<td width="603">&nbsp;</td>
  </tr>

	<tr bgcolor="#ffffff">
	<td colspan="5"><img src="../../mm_spacer.gif" alt="" width="1" height="1" border="0" /></td>
	</tr>

	<tr bgcolor="#ffffff">
	<td valign="top" width="15"><img src="../../mm_spacer.gif" alt="" width="15" height="1" border="0" /></td>
	<td valign="top" width="140"><img src="../../mm_spacer.gif" alt="" width="140" height="1" border="0" /></td>
	<td width="596" valign="top"><br />
	<table border="0" cellspacing="0" cellpadding="2" width="590">
		<tr>
		<td width="586" class="pageName">Exercise 1.3 I Results</td>
		</tr>

		<tr>
		<td class="bodyText">
	<div id="content">
<?php
for ($i = 1; $i < 16; $i++)
{
if ($_POST["TF" . $i] == "") {
  $SE[$i-1] = "%";
  } else {
  $SE[$i-1] = $_POST["TF" . $i];
  }
}

$KEY = array("F","F","F","F","F",
             "T","T","F","T","T",
             "T","F","F","T","T");
$k = 0;
for ($i = 0; $i < 15; $i++)
{
if ($SE[$i] == $KEY[$i])
  $k = $k + 1;
}
for ($i = 0; $i < 15; $i++)
{
if ($SE[$i] == "%") {
  $Ans[$i] = "Not Answered";
  } elseif ($SE[$i] == "T") {
  $Ans[$i] = "True";
  } else {
  $Ans[$i] = "False";
  }
}
?>

<p style="font-size: 18px; margin-left: 10px"><b>You got <?php echo $k; ?> out of 15 correct!</b><br />
Here are the answers you submitted:</p>

<ol type="I">
  <li><p>True/False</p>
  </li>
</ol>
<ol style="margin-left: 20px">
  <li style="margin-top: 10px">Whether an argument is deductive or inductive is determined by the
   factual/normative claim.
  </li>
  <p>Your answer: <span style="font-weight:bold; color: #663300"><?php echo $Ans[0]; ?></span></p>
  <li style="margin-top: 10px">A deductive argument with false premises and a false conclusion must
   be invalid.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[1]; ?></span></p>
  <li style="margin-top: 10px">A deductive argument with true premises and a true conclusion must
   be valid.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[2]; ?></span></p>
  <li style="margin-top: 10px">An unsound argument must have a false or unacceptable conclusion.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[3]; ?></span></p>
  <li style="margin-top: 10px">All unsound arguments are invalid.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[4]; ?></span></p>
  <li style="margin-top: 10px">All sound arguments are valid.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[5]; ?></span></p>
  <li style="margin-top: 10px">All invalid arguments are unsound.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[6]; ?></span></p>
  <li style="margin-top: 10px">The validity of a deductive argument is determined by whether its 
   premises are true/acceptable.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[7]; ?></span></p>
  <li style="margin-top: 10px">A sound argument cannot have a false conclusion.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[8]; ?></span></p>
  <li style="margin-top: 10px">If it is claimed that the conclusion probably follows from the
   premises, then the argument is inductive.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[9]; ?></span></p>
  <li style="margin-top: 10px">The premises of a reliable inductive argument must be true/acceptable.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[10]; ?></span></p>
  <li style="margin-top: 10px">All unreliable arguments are weak.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[11]; ?></span></p>
  <li style="margin-top: 10px">All strong arguments are reliable.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[12]; ?></span></p>
  <li style="margin-top: 10px">All reliable arguments are strong.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[13]; ?></span></p>
  <li style="margin-top: 10px">The confirmation of scientific theories is based on inductive reasoning.
  </li>
  <p>Your answer: <span style="font-weight:bold; color:#663300"><?php echo $Ans[14]; ?></span></p>
</ol>


<p style="margin-left: 50px"><a href=javascript:;
    onclick="MM_goToURL('parent','../1.3/iLogic_1_3.html#Ex13');return document.MM_returnValue"><label>
<input type="button" name="Ex11" id="Ex11" value="Try Again!" style="font-size:13px; cursor: pointer;"></label></a>
</label></p>
<p>&nbsp;</p>

</div>
        

		<br /></td>
		</tr>
	</table>
	 <br />
	&nbsp;<br />	</td>
	<td valign="top">&nbsp;</td>
	<td width="603" align="center" valign="bottom">
    <br />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </td>
  </tr>

	<tr>
	<td width="15">&nbsp;</td>
    <td width="140">&nbsp;</td>
    <td width="596">&nbsp;</td>
    <td width="9">&nbsp;</td>
    <td width="603">&nbsp;</td>
  </tr>
</table>
</body>
</html>
