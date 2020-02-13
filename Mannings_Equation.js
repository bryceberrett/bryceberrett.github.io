//var ConvertFrom = document.getElementById("ConvertFrom").value
//var ConvertTo = document.getElementById("ConvertTo").value
//console.log(document.getElementById("MyNumber"));
//var Answer2 = document.getElementById("Answer2");
//var Answer;

function Solve() {
var unitvalue;
var units;
var kn;
if (Metric1.checked) {unitvalue = " m/s^2"; units = "metric"; kn = 1.0}
else if (English1.checked) {unitvalue = " ft/s^2"; units = "english"; kn = 1.486};
var general_answer = "Computed flow velocity (v) is: ";


//console.log(kn);

//This was for a dropdown menu
//if (document.getElementById("units").value == 'metric') {kn = 1.0}
//else if (document.getElementById("units").value == 'english') {kn = 1.486};
//document.getElementById("kn_value").value = "Kn value: " + kn;

//This is for Radio buttons
//if (document.getElementById("Units1").value == 'Metric1') {kn = 1.0}
//else if (document.getElementById("Units1").value == 'English1') {kn = 1.486};
document.getElementById("kn_value").value = "Kn value: " + kn;

console.log(kn);
var n = document.getElementById("n").value;
var R = document.getElementById("R").value;
var S = document.getElementById("S").value;
var Answer = 0;
//console.log(n);
//console.log(R);
//console.log(S);
if (n < 0) {Answer2.innerHTML = ""; alert("n cannot be negative!")}
else if (R < 0) {Answer2.innerHTML = ""; alert("R cannot be negative!")}
else if (S < 0) {Answer2.innerHTML = ""; alert("S cannot be negative!")}
else if (S == 0) {Answer2.innerHTML = ""; alert("S cannot be zero!")}
else if (R == 0) {Answer2.innerHTML = ""; alert("R cannot be zero!")}
else if (n == 0) {Answer2.innerHTML = ""; alert("n cannot be zero! Super-Teflon does not exist yet!")}
else {
Answer = (kn/n)*Math.pow(R,2/3)*Math.pow(S,1/2);
Answer=Answer.toFixed(4)
console.log(Answer);
Answer2.innerHTML = general_answer + Answer + unitvalue;
}};
