function check_answers()
      {
	var x1 = document.getElementById("tv1");
	var x2 = document.getElementById("tv2");
	var x3 = document.getElementById("tv3");
	var v1 = x1.value.toUpperCase();
	var v2 = x2.value.toUpperCase();
	var v3 = x3.value.toUpperCase();
	document.write("<!DOCTYPE html>");
	document.write("<html>");
	document.write("<head>");
	document.write("<title>Square of Opposition</title>");
	document.write("<script type=\"text\/javascript\" src=\"SO_7.js\"><\/script>");
	document.write("<script type=\"text\/javascript\" src=\"http:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.7.2\/jquery.min.js\"><\/script>");
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
	document.write("z-index: -1;");
	document.write("opacity: 0.0;");
	document.write("}");
	document.write("<\/style>");
	document.write("<\/head>");
	document.write("<body>");
	document.write("<div style=\"position: absolute\"><span class=\"cs\">A<\/span>: All <span class=\"term\">S<\/span> are <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div class=\"tv\" style=\"position: absolute; margin: 36px 0 0 31px\">F<\/div>");
	document.write("<div style=\"position: absolute; margin: 0 0 0 170px\"><span class=\"cs\">E<\/span>: No <span class=\"term\">S<\/span> are <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div style=\"position: absolute; margin: 33px 0 0 198px\"><input type=\"text\" class=\"tv\" name=\"tv1\" id=\"tv1\" value=\"" + v1 + "\" \/><\/div>");
	document.write("<div><iframe src=\"Traditional Square.svg\" style=\"width: 120px; height: 120px; position: absolute; margin: 74px 0 0 70px; border: 0; overflow: hidden\"><\/iframe><\/div>");
	document.write("<div style=\"position: absolute; margin: 248px 0 0 0\"><span class=\"cs\">I<\/span>: Some <span class=\"term\">S<\/span> are <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div style=\"position: absolute; margin: 204px 0 0 30px\"><input type=\"text\" class=\"tv\" name=\"tv2\" id=\"tv2\" value=\"" + v2 + "\" \/><\/div>");
	document.write("<div style=\"position: absolute; margin: 248px 0 0 170px\"><span class=\"cs\">O<\/span>: Some <span class=\"term\">S<\/span> are not <span class=\"term\">P<\/span>.<\/div>");
	document.write("<div style=\"position: absolute; margin: 204px 0 0 198px\"><input type=\"text\" class=\"tv\" name=\"tv3\" id=\"tv3\" value=\"" + v3 + "\" \/><\/div>");
	document.write("<div class=\"mark\" id=\"m1c\" style=\"position: absolute; margin: 29px 0 0 190px\"><img src=\"mc.png\"><\/div>");
	document.write("<div class=\"mark\" id=\"m1e\" style=\"position: absolute; margin: 29px 0 0 190px\"><img src=\"me.png\"><\/div>");
	document.write("<div class=\"mark\" id=\"m2c\" style=\"position: absolute; margin: 200px 0 0 22px\"><img src=\"mc.png\"><\/div>");
	document.write("<div class=\"mark\" id=\"m2e\" style=\"position: absolute; margin: 200px 0 0 22px\"><img src=\"me.png\"><\/div>");
	document.write("<div class=\"mark\" id=\"m3c\" style=\"position: absolute; margin: 200px 0 0 190px\"><img src=\"mc.png\"><\/div>");
	document.write("<div class=\"mark\" id=\"m3e\" style=\"position: absolute; margin: 200px 0 0 190px\"><img src=\"me.png\"><\/div>");
	document.write("<input type=\"button\" onclick=\"window.location.replace('SO_7.html')\" value=\"Redo\" style=\"font-size: 16px; position: absolute; margin: 290px 0 0 110px; cursor: pointer\" \/>");
	document.write("<\/body>");
	document.write("<\/html>");
   	  if (x1.value == "?")
	  {
		$("#m1c").css({ opacity: .7, "z-index": "2" });
		$("#m1e").css({ opacity: .0 });
	  }
	  else
	  {
		$("#m1c").css({ opacity: .0 });
		$("#m1e").css({ opacity: .7, "z-index": "2" });
	  }
      if (x2.value == "?")
	  {
		$("#m2c").css({ opacity: .7, "z-index": "2" });
		$("#m2e").css({ opacity: .0 });
	  }
	  else
	  {
		$("#m2c").css({ opacity: .0 });
		$("#m2e").css({ opacity: .7, "z-index": "2" });
	  }
      if (x3.value == "t" || x3.value == "T")
	  {
		$("#m3c").css({ opacity: .7, "z-index": "2" });
		$("#m3e").css({ opacity: .0 });
	  }
	  else
	  {
		$("#m3c").css({ opacity: .0 });
		$("#m3e").css({ opacity: .7, "z-index": "2" });
	  }
      }

