//var ConvertFrom = document.getElementById("ConvertFrom").value
//var ConvertTo = document.getElementById("ConvertTo").value
//console.log(document.getElementById("MyNumber"));
//var Answer2 = document.getElementById("Answer2");
//var Answer;

function Solve() {
var unitvalue;
if (document.getElementById("units").value == 'metric') {unitvalue = " m/s^2"}
else if (document.getElementById("units").value == 'english') {unitvalue = " ft/s^2"};
var general_answer = "Computed flow velocity (v) is: ";

var units = document.getElementById("units").value;
var kn
//console.log(kn);
if (document.getElementById("units").value == 'metric') {kn = 1.0}
else if (document.getElementById("units").value == 'english') {kn = 1.486};
document.getElementById("kn_value").value = "Kn value: " + kn;
console.log(kn);
var n = document.getElementById("n").value;
var R = document.getElementById("R").value;
var S = document.getElementById("S").value;
var Answer = 0;
//console.log(n);
//console.log(R);
//console.log(S);
if (n < 0) {alert("n cannot be negative!")}
else if (R < 0) {alert("R cannot be negative!")}
else if (S < 0) {alert("S cannot be negative!")}
else if (S == 0) {alert("S cannot be zero!")}
else if (R == 0) {alert("R cannot be zero!")}
else if (n == 0) {alert("n cannot be zero! Super-Teflon does not exist yet!")}
else {
Answer = (kn/n)*Math.pow(R,2/3)*Math.pow(S,1/2);
console.log(Answer);
Answer2.innerHTML = general_answer + Answer + unitvalue;
}};
