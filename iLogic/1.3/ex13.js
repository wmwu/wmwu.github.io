function MultipleChoice(question,answer)  //Function to set up the Array template
{
this.question=question;
this.answer=answer;
}

var Q = new Array();  //Creates an array for questions
Q[1]=new MultipleChoice("Whether an argument is deductive or inductive is determined by the factual/normative claim.","F");
Q[2]=new MultipleChoice("A deductive argument with false premises and a false conclusion must be invalid.","F");
Q[3]=new MultipleChoice("A deductive argument with true premises and a true conclusion must be valid.","F");
Q[4]=new MultipleChoice("An unsound argument must have a false or unacceptable conclusion.","F");
Q[5]=new MultipleChoice("All unsound arguments are invalid.","F");
Q[6]=new MultipleChoice("All sound arguments are valid.","T");
Q[7]=new MultipleChoice("All invalid arguments are unsound.","T");
Q[8]=new MultipleChoice("The validity of a deductive argument is determined by whether its premises are true or acceptable.","F");
Q[9]=new MultipleChoice("A sound argument cannot have a false conclusion.","T");
Q[10]=new MultipleChoice("If it is claimed that the conclusion probably follows from the premises, then the argument is inductive.","T");
Q[11]=new MultipleChoice("The premises of a reliable inductive argument must be true or acceptable.","T");
Q[12]=new MultipleChoice("All unreliable arguments are weak.","F");
Q[13]=new MultipleChoice("All strong arguments are reliable.","F");
Q[14]=new MultipleChoice("All reliable arguments are strong.","T");
Q[15]=new MultipleChoice("The confirmation of scientific theories is based on inductive reasoning.","T");
Q[16]=new MultipleChoice("Whether an argument is deductive or inductive is determined by the inferential claim.","T");
Q[17]=new MultipleChoice("A deductive argument with true premises and a false conclusion cannot be valid.","T");
Q[18]=new MultipleChoice("All valid arguments are sound.","F");
Q[19]=new MultipleChoice("If it is claimed that the conclusion necessarily follows from the premises, then the argument is deductive.","T");
Q[20]=new MultipleChoice("All weak arguments are unreliable.","T");
Q[21]=new MultipleChoice("The confirmation of scientific theories is based on deductive reasoning.","F");
Q[22]=new MultipleChoice("The premises of a valid argument must be true or acceptable.","F");
Q[23]=new MultipleChoice("The premises of a sound argument must be true or acceptable.","T");
Q[24]=new MultipleChoice("The premises of an invalid argument must be false or unacceptable.","F");
Q[25]=new MultipleChoice("The premises of an unsound argument must be false or unacceptable.","F");
Q[26]=new MultipleChoice("A valid argument cannot have a false conclusion.","F");
Q[27]=new MultipleChoice("A valid argument cannot have a false premise.","F");
Q[28]=new MultipleChoice("An invalid argument cannot have a true premise.","F");
Q[29]=new MultipleChoice("The premises of a valid argument can be false or unacceptable.","T");
Q[30]=new MultipleChoice("The premises of an invalid argument can be true or acceptable.","T");

var Nq = 15;  //set number of questions to be written to 15

//Writes Nq questions to the webpage
function write_questions()
{
	var N = new Array();  //Creates an array of number from 1 to Q.length
	for (i = 1; i < Q.length ; i++)
	{ 
		N[i-1] = i;
	}
	N.sort(function (a,b){return a - b;}); //Sort 1 to Q.length in ascending order N[0]=1, N[1]=2 ...
	
	document.write("<ol class=\"ex_sec\">");
	document.write("<li>True or False</li>");
	document.write("</ol>");
	document.write("<ol class=\"ex_q1\">");
	for (k = 1; k < Q.length; k++)  //Loop that writes a set of Q.length questions
	{
		i=N[k-1];
		if (k <= Nq)
		{
			var question = "<li>" + Q[i].question + "</li>";
			document.write(question);
			var button1 = "<span style=\"margin: 10px 0 0 36px;\"><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"T\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " True" + "</span>";
			document.write(button1);
			var button2 = "<span style=\"margin: 10px 0 0 36px;\"><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"F\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " False" + "</span>";
			document.write(button2);
		}
		else
		{
			var button1 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"T\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " True" + "<br" + " />"
			var button2 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"F\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " False" + "<br" + " />"
		}
		
	}
	document.write("</ol>");
	document.write("<input type=\"hidden\" id=\"storeN\" value=\"" + N + "\" />"); //Store N array as a string in html file to be used in get_radio_value()
	//alert(N);
	document.write("<input type=\"button\" onclick=\"get_radio_value();\" value=\"Check Answers\" style=\"font:16px 'Noto Sans'; margin: 10px 0 0 90px; border-radius: 3px; border-width: 1px; height: 28px; cursor: default;\" />");
	window.scrollTo(0,0);
}

//Writes Nq random questions to the webpage
function write_random_questions()
{
	var N = new Array();  //Creates an array of number from 1 to Q.length
	for (i = 1; i < Q.length ; i++)
	{ 
		N[i-1] = i;
	}
	document.write("<script type=\"text/javascript\" src=\"ex13.js\"></script>");  //load js file so onclick can call a function note: Firefox and Opera load the js file before executing the function called by onclick. The solution is to move the code for N array inside each of the write question functions. But then N needs to be stored in html file to be used in get_radio_value.
	//alert(N);
	document.write("<link rel=\"stylesheet\" href=\"..\/iLogic.css\" type=\"text/css\" \/>");
	document.write("<div id=\"hwrap\">");
	document.write("<div id=\"hwrap2\">");
	document.write("<div id=\"header\">");
	document.write("<h1>iLogic<\/h1>");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");
	document.write("<div id=\"mwrap\">");
	document.write("<div id=\"mwrap2\">");
	document.write("<div id=\"main\">");
	document.write("<p style=\"margin-top: 50px; margin-left: 20px; font: 18px 'Noto Serif'; font-weight:bold; color:#0a2c02;\">Exercise 1.3</p>");
	for (i = 1; i <=10; i++)
	{
	    N.sort(function (){return (Math.round(Math.random())-0.5);}); //Sort numbers between 1 and Q.length randomly
	}
	//alert(N);
	document.write("<ol style=\"list-style-type: upper-roman;\">");
	document.write("<li style=\"margin-top: 10px; margin-left: 30px; font: 16px 'Noto Serif'; color:#0a2c02;\">True or False</li>");
	document.write("</ol>");
	document.write("<ol>");
	for (k = 1; k < Q.length; k++)  //Loop that writes a set of 30 questions
	{
		i=N[k-1];
		if (k <= Nq)
		{
//	does not work well in IE
//			document.write("<li style=\"margin-top:10px; font:16px 'Noto Serif'; color:#0a2c02;\">" + Q[i].question + "</li>");
//			document.write("<label style=\"margin-top:10px; font:16px 'Noto Serif'; color:#0a2c02;\">");  //Create a radio button for "True"
//			var button1 = "<input style=\"margin-top:10px;\" type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"T\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " True" + "<br" + " />";
//			document.write(button1);
//			document.write("</label>");
//			document.write("<label style=\"margin-top:10px; font:16px 'Noto Serif'; color:#0a2c02;\">");  //Creates a radio button for "False"
//			var button2 = "<input style=\"margin-top:10px;\" type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"F\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " False" + "<br" + " />";
//			document.write(button2);
//			document.write("</label>");
			var question = "<li style=\"margin: 20px 0 0 50px; font: 16px 'Noto Serif'; color:#0a2c02;\">" + Q[i].question + "<br />";
			document.write(question);
			var button1 = "<span style=\"display: block; margin: 10px 0 0 0; font:16px 'Noto Serif'; color:#0a2c02;\" ><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"T\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " True" + "</span>";
			document.write(button1);
			var button2 = "<span style=\"display: block; margin: 10px 0 0 0; font:16px 'Noto Serif'; color:#0a2c02;\" ><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"F\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " False" + "</span>";
			document.write(button2);
		}
		else
		{
			var button1 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"T\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " True" + "<br" + " />";
			var button2 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"F\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " False" + "<br" + " />";
		}
		
	}
	document.write("</li>");
	document.write("</ol>");
	document.write("<input type=\"hidden\" id=\"storeN\" value=\"" + N + "\" \/>");
	document.write("<input type=\"button\" onclick=\"get_radio_value();\" value=\"Check Answers\" style=\"font:16px 'Noto Sans'; margin-left: 60px; border-radius: 3px; border-width: 1px; height: 28px; cursor: default;\" />");
	document.write("</label> <br \/><br \/><br \/>");
	document.write("</div>");
	document.write("<div id=\"sidebar\">");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");
	document.write("<div id=\"fwrap\">");
	document.write("<div id=\"fwrap2\">");
	document.write("<div id=\"footer\">");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");
	window.scrollTo(0,0);
	document.close();
}

//Function to check the answers
function get_radio_value()
{
	var N = document.getElementById("storeN");  //get N from html file; N is a string array
//	X = new Array();
//	alert(N.value);
	N = N.value.split(',');  //split N with ',' as separator; effectively turn N into a number array
//	for (i = 0; i < N.length; i++)
//	{
//		X[i] = parseInt(N[i]);  // turn string array into number array (not needed anymore because N is already working as a number array due to the split method)
//	}
//	alert(X[5]);
	s = 0;
	var V = new Array();
	for (k = 1; k < Q.length; k++)  //Check_Answer -- Loop to check all Q[i]s
	{
		i = N[k-1];
		var S = "A" + i + "_0";  //Find out which radio button was checked
		//alert(S);
		var E = "A" + i + "_1";
		//alert(E);
		if (k <= Nq) //Do not getElementById for unwritten questions
		{
			var SC = document.getElementById(S).checked;
			//alert(document.getElementById(S).checked);		
			var EC = document.getElementById(E).checked;
			//alert(document.getElementById(E).checked);
			if (SC==true)
			{
				V[k] = "T";
			}
			else if (EC==true)
			{
				V[k] = "F";
			}
			else
			{
				V[k] = "";
			}
			//alert(V);
			Vc = Q[i].answer;
			//alert(Vc);
			if (V[k]==Vc)
			{
				s = s + 1;  //Counter for the number of correct answers
				//alert(s);
			}	
		}
	}
	//alert(V);
	document.write("<link rel=\"stylesheet\" href=\"..\/iLogic.css\" type=\"text/css\" \/>");
	document.write("<div id=\"hwrap\">");
	document.write("<div id=\"hwrap2\">");
	document.write("<div id=\"header\">");
	document.write("<h1>iLogic<\/h1>");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");
	document.write("<div id=\"mwrap\">");
	document.write("<div id=\"mwrap2\">");
	document.write("<div id=\"main\">");
	document.write("<p style=\"margin: 50px 0 0 20px; font: 18px georgia, serif; font-weight:bold; color:#0a2c02;\">Exercise 1.3 section I Results<\/p>");
	document.write("<p style=\"margin-top: 20px; margin-left: 30px; font-size: 20px\">You got " + "<span style=\"font-family: 'Noto Sans', sans-serif; font-weight: bold;\">" + s + "<\/span>" + " out of " + "<span style=\"font-family: 'Noto Sans', sans-serif\">" + "15<\/span>" + " correct.<\/span><br \/><\/p>");
	document.write("<p style=\"margin-top: 20px; margin-left: 30px; font: 16px 'Noto Serif', serif; color:#0a2c02;\">Here are the answers you submitted:");
	document.write("<ol>");
	for (k = 1; k <= Nq; k++)  //Loop that writes a set of 30 questions
	{
		i=N[k-1];
		document.write("<li style=\"margin-top: 10px; margin-left: 50px; font: 16px 'Noto Serif'; color:#0a2c02;\">" + Q[i].question + "<br />");
		if (V[k]=="T")
		{
			document.write("<p style=\"margin-left: -24px; font: 16px 'Noto Serif', serif; color:#0a2c02;\">Your answer: <span style=\"color:#2a9660;\">True</span> <\/p>");
		}
		else if (V[k]=="F")
		{
			document.write("<p style=\"margin-left: -24px; font: 16px 'Noto Serif', serif; color:#0a2c02;\">Your answer: <span style=\"color:#2a9660;\">False</span> <\/p>");
		}
		else
		{
			document.write("<p style=\"margin-left: -24px; font: 16px 'Noto Serif', serif; color:#0a2c02;\">Your answer: <span style=\"color:#2a9660;\"></span> <\/p>");
		}
	}
	document.write("</li>");
	document.write("</ol>");
	document.write("<script type=\"text\/javascript\" src=\"ex13.js\"><\/script>");
	document.write("<label style=\"margin-top: 20px; margin-left: 60px; font: 16px 'Noto Serif'; color:#0a2c02;\">");  //Create a button for "Redo the Exercise"
	document.write("<input type=\"button\" onclick=\"write_random_questions();\" value=\"Do Ex 1.3 sec I again with a different set of questions\" style=\"font-family: 'Noto Sans', sans-serif; font-size:16px; border-radius: 3px; border-width: 1px; height: 28px; cursor: default;\" />");
	//document.write("<input type=\"button\" onmouseover=\"this.style.color='#990000';\" onmouseout=\"this.style.color='#0a2c02';\" onclick=\"window.location.replace('iLogic_1_submit_answers_a.html#Ex13')\" value=\"Do the exercise again with a different set of questions\" style=\"font-size:13px; cursor: default;\" />");
	document.write("</label>");
	document.write("<label style=\"margin-top: 20px; margin-left: 20px; font: 16px 'Noto Serif'; color:#0a2c02;\">");  //Creates a button for "Return to 1.3"
	document.write("<input type=\"button\" onclick=\"window.location.replace('iLogic_1_3.html');\" value=\"Return to 1.3\" style=\"font-family: 'Noto Sans', sans-serif; font-size:16px; border-radius: 3px; border-width: 1px; height: 28px; cursor: default;\" />");
	//document.write("<input type=\"button\" onmouseover=\"this.style.color='#990000';\" onmouseout=\"this.style.color='#0a2c02';\" onclick=\"window.location.replace('iLogic_1_submit_answers.html')\" value=\"Return to 1.3\" style=\"font-size:13px; cursor: default;\" />");
	document.write("</label> <br \/><br \/><br \/>");
	document.write("</div>");
	document.write("<div id=\"sidebar\">");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");
	document.write("<div id=\"fwrap\">");
	document.write("<div id=\"fwrap2\">");
	document.write("<div id=\"footer\">");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");
	window.scrollTo(0,0);
	document.close();
}

function MM_goToURL()
{ //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}


