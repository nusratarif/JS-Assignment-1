var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a = 2 and b = 1" + "<br>");
document.write("result = --a - --b + ++b + b-- = ?" + "<br>");
document.write("<br>" + "--a = " + (--a) + "<br>" + "--a - --b = " + (--a - --b) + "<br>");
document.write("--a - --b + ++b = " + (--a - --b + ++b) + "<br>");
document.write("--a - --b + ++b + b-- = " + (--a - --b + ++b + b--) + "<br>");
document.write("<br>" + "a is " + a + "<br>" + "b is " + b + "<br>" + "result is " + result + "<br>");