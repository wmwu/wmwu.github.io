function MultipleChoice(question,answer)  //Function to set up the Array template
{
this.question=question;
this.answer=answer;
}

var Q = new Array();  //Creates an array for questions
Q[1]=new MultipleChoice("Algebra is an easy subject.","E");
Q[2]=new MultipleChoice("No mammals lay eggs.","S");
Q[3]=new MultipleChoice("The universe is expanding.","S");
Q[4]=new MultipleChoice("Dogs are humans’ best friends.","E");
Q[5]=new MultipleChoice("Some animals can think.","S");
Q[6]=new MultipleChoice("Pepsi tastes better than Coke.","E");
Q[7]=new MultipleChoice("Nothing can travel faster than the speed of light.","S");
Q[8]=new MultipleChoice("Capital punishment is a deterrent to crime.","S");
Q[9]=new MultipleChoice("The death penalty is cruel and unusual punishment.","E");
Q[10]=new MultipleChoice("Many high school graduates can’t afford to go to college.","S");
Q[11]=new MultipleChoice("Space exploration is a waste of money.","E");
Q[12]=new MultipleChoice("There is too much violence on TV.","E");
Q[13]=new MultipleChoice("Drinking red wine can lower the risk of heart attack.","S");
Q[14]=new MultipleChoice("People need guns to protect themselves.","E");
Q[15]=new MultipleChoice("Tighter gun control can hinder criminals from getting guns.","S");
Q[16]=new MultipleChoice("Organic foods are more nutritious than non-organic foods.","S");
Q[17]=new MultipleChoice("Global trade lowers the price of consumer goods.","S");
Q[18]=new MultipleChoice("Psychics can predict future events.","S");
Q[19]=new MultipleChoice("Future robots will have consciousness.","S");
Q[20]=new MultipleChoice("Selfish people are not spiritual.","E");
Q[21]=new MultipleChoice("Suicide bombers are terrorists.","E");
Q[22]=new MultipleChoice("Suicide bombers are martyrs.","E");
Q[23]=new MultipleChoice("Church and state must stay separate.","E");
Q[24]=new MultipleChoice("Some people are born as homosexuals.","S");
Q[25]=new MultipleChoice("Same-sex marriage weakens the family values.","E");
Q[26]=new MultipleChoice("Some professions are not suitable for women.","E");
Q[27]=new MultipleChoice("Cheerleading in professional sports is sexist.","E");
Q[28]=new MultipleChoice("Mental illness is caused by demon possession.","S");
Q[29]=new MultipleChoice("No minor deserves the death penalty.","E");
Q[30]=new MultipleChoice("There is life after death.","S");
Q[31]=new MultipleChoice("Abraham Lincoln is tall.","S");
Q[32]=new MultipleChoice("Sex outside marriage is sin.","E");
Q[33]=new MultipleChoice("Gay couples deserve the equal right to get married.","E");
Q[34]=new MultipleChoice("Some mental illnesses are hereditary.","S");
Q[35]=new MultipleChoice("Justice is about retribution, not rehabilitation.","E");
Q[36]=new MultipleChoice("Genetically altered foods are unsafe.","S");
Q[37]=new MultipleChoice("The Constitution bans the death penalty for the mentally retarded.","E");
Q[38]=new MultipleChoice("The phrase “under God” in the pledge of allegiance is unconstitutional.","E");
Q[39]=new MultipleChoice("Dogs descend from wolves.","S");
Q[40]=new MultipleChoice("More funding for public schools can reduce crime rates.","S");
Q[41]=new MultipleChoice("Kids nowadays spend too much time playing video games.","E");
Q[42]=new MultipleChoice("It is discrimination to ban gay marriage.","E");
Q[43]=new MultipleChoice("Racial profiling is discrimination.","E");
Q[44]=new MultipleChoice("The federal government has the responsibility to provide universal health care.","E");
Q[45]=new MultipleChoice("Abstinence is more effective than contraception in preventing teen pregnancy.","S");
Q[46]=new MultipleChoice("The institution of marriage between a man and a woman is sacred.","E");
Q[47]=new MultipleChoice("Tax cuts for the wealthy can help create jobs.","S");
Q[48]=new MultipleChoice("It’s every child’s right to have access to education.","E");
Q[49]=new MultipleChoice("It’s every child’s right to have health care insurance.","E");
Q[50]=new MultipleChoice("People are poor because they do not work hard enough.","S");
Q[51]=new MultipleChoice("Humans have no right to use animals for medical researches.","E");
Q[52]=new MultipleChoice("Praying for someone can help the person heal.","S");
Q[53]=new MultipleChoice("Raising the minimum wage reduces the numbers of hourly-pay jobs.","S");
Q[54]=new MultipleChoice("Using a cell phone to videotape people is an invasion of privacy.","E");
Q[55]=new MultipleChoice("Sometimes torture is necessary to save life.","E");
Q[56]=new MultipleChoice("Migrant workers contribute to the U.S. economy.","S");
Q[57]=new MultipleChoice("People with certain genes are more likely to have Alzheimer’s disease.","S");
Q[58]=new MultipleChoice("People living in areas prone to wildfire should pay more for fire protection.","E");
Q[59]=new MultipleChoice("Healthcare is a basic human right.","E");
Q[60]=new MultipleChoice("Plants and animals exist for humans to use them.","E");

var Nq = 30;  //set number of questions to be written to 30

//Writes Nq questions to the webpage
function write_questions()
{
	var N = new Array();  //Creates an array of number from 1 to 60
	for (i = 1; i < Q.length; i++)
	{ 
		N[i-1] = i;
	}
	N.sort(function (a,b){return a - b;}); //Sort 1 to 30 in ascending order N[0]=1, N[1]=2 ...
	
	document.write("<ol class=\"ex_sec\">");
	document.write("<li>Decide whether each of the following sentences is a statement or an evaluative sentence.<\/li>");
	document.write("</ol>");
	document.write("<ol class=\"ex_q1\">");
	for (k = 1; k < Q.length; k++)  //Loop that writes a set of 30 questions
	{
		i=N[k-1];
		if (k <= Nq)
		{
			var question = "<li>" + Q[i].question + "</li>";
			document.write(question);
			var button1 = "<span style=\"margin: 10px 0 0 36px;\"><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"S\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " Statement" + "</span>";
			document.write(button1);
			var button2 = "<span style=\"margin: 10px 0 0 36px;\"><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"E\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " Evaluative Sentence" + "</span>";
			document.write(button2);
		}
		else
		{
			var button1 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"S\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " Statement" + "<br" + " />"
			var button2 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"E\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " Evaluative Sentence" + "<br" + " />"
		}
		
	}
	document.write("</ol>");
	document.write("<input type=\"hidden\" id=\"storeN\" value=\"" + N + "\" \/>"); //Store N array as a string in html file to be used in get_radio_value()
}

//Writes Nq random questions to the webpage
function write_random_questions()
{
	var N = new Array();  //Creates an array of number from 1 to 60
	for (i = 1; i < Q.length; i++)
	{ 
		N[i-1] = i;
	}
	for (i = 1; i <=10; i++)
	{
	    N.sort(function (){return (Math.round(Math.random())-0.5);}); //Sort numbers between 1 and Q.length randomly
	}
	//alert(N);
	document.write("<ol class=\"ex_sec\">");
	document.write("<li>Decide whether each of the following sentences is a statement or an evaluative sentence.<\/li>");
	document.write("</ol>");
	document.write("<ol class=\"ex_q1\">");
	for (k = 1; k < Q.length; k++)  //Loop that writes a set of 30 questions
	{
		i=N[k-1];
		if (k <= Nq)
		{
			var question = "<li>" + Q[i].question + "</li>";
			document.write(question);
			var button1 = "<span style=\"margin: 10px 0 0 36px;\"><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"S\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " Statement" + "</span>";
			document.write(button1);
			var button2 = "<span style=\"margin: 10px 0 0 36px;\"><input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"E\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " Evaluative Sentence" + "</span>";
			document.write(button2);
		}
		else
		{
			var button1 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"S\" " + "id=\"" + "A" + [i] + "_0" + "\" " + "/>" + " Statement" + "<br" + " />"
			var button2 = "<input type=\"radio\" name=\"" + "A" + [i] + "\" " + "value=\"E\" " + "id=\"" + "A" + [i] + "_1" + "\" " + "/>" + " Evaluative Sentence" + "<br" + " />"
		}
		
	}
	document.write("</ol>");
	document.write("<input type=\"hidden\" id=\"storeN\" value=\"" + N + "\" \/>"); //Store N array as a string in html file to be used in get_radio_value()
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
				V[k] = "S";
			}
			else if (EC==true)
			{
				V[k] = "E";
			}
			else
			{
				V[k] = "";
				u = u + 1; //Counter for the number of unanswered questions
				document.getElementById("number-of-answered").innerHTML = 30 - u;
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
		document.getElementById("number-of-answered").innerHTML = 30;
	}
}
