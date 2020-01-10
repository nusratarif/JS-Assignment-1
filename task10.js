var initialValue;
document.write("Value after variable declaration is "  +  initialValue +  "<br>");

initialValue = 5;
document.write("Initial value is: " +  initialValue + "<br>");

var incValue = ++initialValue;
document.write("Value after increment is: "  +  incValue + "<br>");

var newValue = incValue + 7;
document.write("Value after addition is: " +  newValue + "<br>");

var decValue = --newValue;
document.write("Value after decrement is: " +  decValue + "<br>");

var remainder = decValue % 3;
document.write("The remainder is: " + remainder + "<br>");