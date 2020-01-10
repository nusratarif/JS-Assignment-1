//*TEMPERATURE CONVERTER*

//Celcius to Fahrenheit

var celcius = 36;
var fahrenheit = (celcius * 9/5) + 32;   //96.8F  
document.write(celcius + "0".sup() + "C" + " is " + fahrenheit + "0".sup() +  "F" + "<br>" );

//Fahrenheit to Celcius
var fahrenheit = 75;
var celcius = (fahrenheit - 32) * 5/9;   //23.88888888888889C
var up = "0";
var deg = up.sup();
document.write(fahrenheit + deg + "F" + " is " + celcius + deg + "C" ); 