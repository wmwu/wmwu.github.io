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
}

//Writes Nq random questions to the webpage
function write_random_questions()
{
	var N = new Array();  //Creates an array of number from 1 to Q.length
	for (i = 1; i < Q.length ; i++)
	{ 
		N[i-1] = i;
	}
	for (i = 1; i <=10; i++)
	{
	    N.sort(function (){return (Math.round(Math.random())-0.5);}); //Sort numbers between 1 and Q.length randomly
	}
	//alert(N);
	document.write("<ol class=\"ex_sec\">");
	document.write("<li>True or False</li>");
	document.write("</ol>");
	document.write("<ol class=\"ex_q1\">");
	for (k = 1; k < Q.length; k++)  //Loop that writes a set of 30 questions
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
			var button1 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"T\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " True" + "<br" + " />";
			var button2 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"F\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " False" + "<br" + " />";
		}
		
	}
	document.write("</ol>");
	document.write("<input type=\"hidden\" id=\"storeN\" value=\"" + N + "\" />"); //Store N array as a string in html file to be used in get_radio_value()
	//alert(N);
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
	u = 0;
	document.getElementById("number-of-answered").innerHTML = u;
	document.getElementById("number-of-correct-answers").innerHTML = s;
	var V = new Array();
	for (k = 1; k < Q.length; k++)  //Check_Answer -- Loop to check all Q[i]s
	{
		i = N[k-1];
		var T = "A" + i + "_0";  //Find out which radio button was checked
		//alert(T);
		var F = "A" + i + "_1";
		//alert(F);
		if (k <= Nq) //Do not getElementById for unwritten questions
		{
			var TC = document.getElementById(T).checked;
			//alert(document.getElementById(T).checked);		
			var FC = document.getElementById(F).checked;
			//alert(document.getElementById(F).checked);
			if (TC==true)
			{
				V[k] = "T";
			}
			else if (FC==true)
			{
				V[k] = "F";
			}
			else
			{
				V[k] = "";
				u = u + 1; //Counter for the number of unanswered questions
				document.getElementById("number-of-answered").innerHTML = 15 - u;
			}
			//alert(V);
			Vc = Q[i].answer;
			//alert(Vc);
			if (V[k]==Vc)
			{
				s = s + 1;  //Counter for the number of correct answers
				//alert(s);
				document.getElementById("number-of-correct-answers").innerHTML = s;
			}
		}
	}
	if (u == 0)
	{
		document.getElementById("number-of-answered").innerHTML = 15;
	}
	//alert(V);
}
