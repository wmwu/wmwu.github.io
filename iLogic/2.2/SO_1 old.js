function check_answers()
      {
	var x1 = document.getElementById("tv1");
	var x2 = document.getElementById("tv2");
	var x3 = document.getElementById("tv3");
	document.write("<!DOCTYPE html>");
	document.write("<html>");
	document.write("<head>");
	document.write("<title>Square of Opposition<\/title>");
	document.write("<script type=\"text\/javascript\" src=\"SO_1.js\"><\/script>");
	document.write("<style type=\"text\/css\">");
	document.write(".tv {");
	document.write("width: 28px;");
	document.write("text-align: center;");
	document.write("text-transformation: uppercase;");
	document.write("font-family: verdana, sans-serif;");
	document.write("font-size: large;");
	document.write("font-weight: 150;");
	document.write("}");
	document.write(".cs {");
	document.write("font-family: verdana, sans-serif;");
	document.write("font-weight: 200;");
	document.write("}");
	document.write(".term {");
	document.write("font-family: verdana, sans-serif;");
	document.write("font-style: italic;");
	document.write("}");
	document.write(".mark {");
	document.write("font-family: verdana, sans-serif;");
	document.write("font-size: 200%;");
	document.write("font-weight: lighter;");
	document.write("color: orange;");
	document.write("opacity: 0.7;");
	document.write("}");
	document.write(".nomark {");
	document.write("font-family: verdana, sans-serif;");
	document.write("font-size: 200%;");
	document.write("font-weight: lighter;");
	document.write("color: white;");
	document.write("opacity: 1;");
	document.write("}");
	document.write("<\/style>");
	document.write("<\/head>");
	document.write("<body>");
	document.write("<div style=\"position: absolute\"><span class=\"cs\">A<\/span>: All <span class=\"term\">S<\/span> are <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div class=\"tv\" style=\"position: absolute; margin: 36px 0 0 31px\">F<\/div>");
	document.write("<div style=\"position: absolute; margin: 0 0 0 170px\"><span class=\"cs\">E<\/span>: No <span class=\"term\">S<\/span> are <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div style=\"position: absolute; margin: 33px 0 0 198px\"><input type=\"text\" class=\"tv\" name=\"tv1\" id=\"tv1\" value=\"" + x1.value.toUpperCase() + "\" /><\/div>");
	document.write("<div><iframe src=\"Modern Square.svg\" style=\"width: 120px; height: 120px; position: absolute; margin: 74px 0 0 70px; border: 0; overflow: hidden\"><\/iframe><\/div>");
	document.write("<div style=\"position: absolute; margin: 248px 0 0 0\"><span class=\"cs\">I<\/span>: Some <span class=\"term\">S<\/span> are <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div style=\"position: absolute; margin: 204px 0 0 28px\"><input type=\"text\" class=\"tv\" name=\"tv2\" id=\"tv2\" value=\"" + x2.value.toUpperCase() + "\" /><\/div>");
	document.write("<div style=\"position: absolute; margin: 248px 0 0 170px\"><span class=\"cs\">O<\/span>: Some <span class=\"term\">S<\/span> are not <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div style=\"position: absolute; margin: 204px 0 0 198px\"><input type=\"text\" class=\"tv\" name=\"tv3\" id=\"tv3\" value=\"" + x3.value.toUpperCase() + "\" /><\/div>");
	document.write("<input type=\"button\" onclick=\"check_answers()\" value=\"Check Answers\" style=\"font-size: 13px; position: absolute; margin: 290px 0 0 75px; cursor: pointer\" \/>");
        if (x1.value == "?")
	  {
		document.write("<div class=\"nomark\" style=\"position: absolute; margin: 22px 0 0 224px\">&#x2718;<\/div>");
		document.write("<div class=\"mark\" style=\"position: absolute; margin: 22px 0 0 224px\">&#x2714;<\/div>");
	  }
	  else
	  {
		document.write("<div class=\"mark\" style=\"position: absolute; margin: 22px 0 0 224px\">&#x2718;<\/div>");
	  }
	if (x2.value == "?")
	  {
		document.write("<div class=\"mark\" style=\"position: absolute; margin: 194px 0 0 54px\">&#x2714;<\/div>");
	  }
	  else
	  {
		document.write("<div class=\"mark\" style=\"position: absolute; margin: 194px 0 0 54px\">&#x2718;<\/div>");
	  }
	  if (x3.value == "T")
	  {
		document.write("<div class=\"mark\" style=\"position: absolute; margin: 194px 0 0 224px\">&#x2714;<\/div>");
	  }
	  else
	  {
		document.write("<div class=\"mark\" style=\"position: absolute; margin: 194px 0 0 224px\">&#x2718;<\/div>");
	  }
	document.write("<\/body>");
	document.write("<\/html>");
      }
