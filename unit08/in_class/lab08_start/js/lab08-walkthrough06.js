/* add code below this */

var string_one = new String("Test");
var string_two = "Test";
var string_three = "Test";
var string_four = new String("Test");

// document.write(string_one);
document.write("<br> typeof string_one=" + typeof string_one);
document.write("<br> typeof string_three= " + typeof string_three);

if(string_one == string_two)
    document.write("<br> string_one has = value to string_two");

if(string_one == string_four)
    document.write("<br> typeof string_one has = value to string_four");

if(string_one === string_two)
    document.write("<br> typeof string_one has = value to string_two");

if(string_two === string_three)
    document.write("<br> typeof string_two has = value to string_three");

if(string_two === string_four)
    document.write("<br> typeof string_two has = value to string_four");

var date_one = new Date();

document.write("<p>" + date_one + "</p>");

document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>"); 