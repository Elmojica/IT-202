
/* add code here */

var days_of_week = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
days_of_week.push("Sat");
// document.write(days_of_week + "<br/>");


days_of_week.unshift("Sun");
// document.write(days_of_week + "<br/>");

document.write("<table border = 1>");
document.write("<tr>");

for( var i = 0; i < days_of_week.length; i++){
    if(days_of_week[i].length < 4)
        day = days_of_week[i];
    else 
        day = "<em>" + days_of_week[i] + "<em>";

    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

document.write("<tr>");
for(var j = 1; j <= 30; j++){
    
    document.write("<td>" + j + "</td>");

    if(j%7 == 0 ){
        document.write("</tr>");
        document.write("<tr>");
    }
}
document.write("</tr>");

document.write("</table>");
