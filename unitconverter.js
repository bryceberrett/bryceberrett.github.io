//var ConvertFrom = document.getElementById("ConvertFrom").value
//var ConvertTo = document.getElementById("ConvertTo").value
//console.log(document.getElementById("MyNumber"));
//var Answer2 = document.getElementById("Answer2");
//var Answer;
var general_answer=" Answer: ";
function Convert() {
var ConvertFrom = document.getElementById("ConvertFrom").value
var ConvertTo = document.getElementById("ConvertTo").value
var Mynumber = document.getElementById("MyNumber").value;
var Answer2 = document.getElementById("Answer2");
var Answer;
console.log(Mynumber);

//inches conversion
  if (ConvertFrom == "in" & ConvertTo == "cm") {
    console.log("first if");
    Answer = Number(Mynumber) * 2.54;
    console.log(Answer);

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "in" & ConvertTo == "ft") {
    Answer = Number(Mynumber) / 12
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "in" & ConvertTo == "m") {
    Answer = Number(Mynumber) / 0.0254
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "in" & ConvertTo == "miles") {
    Answer = Number(Mynumber) / 63360
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "in" & ConvertTo == "kilometer") {
    Answer = Number(Mynumber) / 39370.078740157
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  //Cm conversion
  else if (ConvertFrom == "cm" & ConvertTo == "in") {
    Answer = Number(Mynumber) / 2.54
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "cm" & ConvertTo == "ft") {
    Answer = Number(Mynumber) / 30.48
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "cm" & ConvertTo == "m") {
    Answer = Number(Mynumber) / 100
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "cm" & ConvertTo == "kilometer") {
    Answer = Number(Mynumber) / 100000
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "cm" & ConvertTo == "miles") {
    Answer = Number(Mynumber) / 160934.4
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  //ft conversion
  else if (ConvertFrom == "ft" & ConvertTo == "cm") {
    Answer = Number(Mynumber) / 0.032808398950131
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "ft" & ConvertTo == "in") {
    Answer = Number(Mynumber) *12
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "ft" & ConvertTo == "m") {
    Answer = Number(Mynumber) / 3.2808398950131
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "ft" & ConvertTo == "kilometer") {
    Answer = Number(Mynumber) / 3280.8398950131
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "ft" & ConvertTo == "miles") {
    Answer = Number(Mynumber) / 5280
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  //meters conversion
  else if (ConvertFrom == "m" & ConvertTo == "in") {
    Answer = Number(Mynumber) / 0.0254
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "m" & ConvertTo == "ft") {
    Answer = Number(Mynumber) / 0.3048
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "m" & ConvertTo == "cm") {
    Answer = Number(Mynumber) / .01
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "m" & ConvertTo == "miles") {
    Answer = Number(Mynumber) / 1609.344
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "m" & ConvertTo == "kilometer") {
    Answer = Number(Mynumber) / 1000
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  //Kilometers to miles
  else if (ConvertFrom == "kilometer" & ConvertTo == "miles") {
    Answer = Number(Mynumber) / 1.609344
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "kilometer" & ConvertTo == "in") {
    Answer = Number(Mynumber) / 0.0000254
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "kilometer" & ConvertTo == "cm") {
    Answer = Number(Mynumber) / 0.00001
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "kilometer" & ConvertTo == "ft") {
    Answer = Number(Mynumber) / 0.0003048
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "kilometer" & ConvertTo == "m") {
    Answer = Number(Mynumber) / 0.001
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  //Miles Conversion
  else if (ConvertFrom == "miles" & ConvertTo == "cm") {
    Answer = Number(Mynumber) / 0.0000062137119223733
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "miles" & ConvertTo == "in") {
    Answer = Number(Mynumber) / 	0.000015782828282828
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "miles" & ConvertTo == "m") {
    Answer = Number(Mynumber) / 0.00062137119223733
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "miles" & ConvertTo == "ft") {
    Answer = Number(Mynumber) / 0.00018939393939394
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  else if (ConvertFrom == "miles" & ConvertTo == "kilometer") {
    Answer = Number(Mynumber) / 0.62137119223733
    Answer2.innerHTML = Answer;

    Answer2.innerHTML = general_answer + Answer;
  }
  //  block of code to be executed if the condition1 is false and condition2 is true
  else {
      console.log("3 if");
    Answer = "You are not converting dummy! Those are the same units!"
    Answer2.innerHTML = Answer;


  }
  //  block of code to be executed if the condition1 is false and condition2 is false
};

    //Notes from class
    // Use valnum and turn into var and put into function. fill input box with something.
    //Use oninput for the command in the input.

  // Javascript
  //Variable
  //var Convert = document.getElementById(“Convert()”);Convert.addEventListener(“Convert”, Convert);
