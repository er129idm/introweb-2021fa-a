var heading;
var executeButton;
var outputParagraph;
var inputElement;

var fortunes = ["You will have a great day.", "You will have a terrible day.", "Zuck will consume your zZole."];

// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener('mousemove', mouseMovedFunc);

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateFortune();
  });

  document.addEventListener("mousemove", function(event) {
    mouseMovedFunc(event);
  })

});



//////////////////////////


function demonstrationFunction() {

  // console.log("Called function....");

  // alert("Yo!");


  // heading.style.fontSize = "5rem";
  // heading.style.textShadow = "0px 0px 10px #fff";
  // var randomRotation = -10 + (Math.random()*20)
  // heading.style.transform = "rotate(" + randomRotation + "deg)";

  /// Modifying classes
  // console.log("Class list BEFORE:");
  // console.log(heading.classList);
  //
  // heading.classList.toggle("specialTitle");
  //
  // console.log("Class list AFTER:");
  // console.log(heading.classList);



  // alert("HIIIIII.");
  // console.log("Hey there...");
  // var inputContents = document.getElementById("myInput").value;
  // alert("You input " + inputContents + "!");
}

///////

function mouseMovedFunc(eventDetails) {

  var mouseX = eventDetails.screenX;
  var mouseY = eventDetails.screenY;

  console.log("Cursor is at: " + mouseX + "," + mouseY + ".");

  executeButton.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";

}

function generateFortune(){
  /// Modifying HTML content
  // outputParagraph.innerText = "Some new text...";
  var currentInputText = inputElement.value;
  // var currentInputAsNumber = parseFloat(currentInputText);
  // console.log(currentInputText / 5.5);
  // console.log(currentInputAsNumber / 5.5);
  //
  //

  var randomFortuneIndex = Math.floor(Math.random()*fortunes.length);
  outputParagraph.innerText = currentInputText + " tomorrow I have a feeling that " + fortunes[randomFortuneIndex];
  //

  restyleOutput();

}

function restyleOutput() {

  /// Modifying css directly

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  // console.log("R: " + randomRed);
  // console.log("G: " + randomGreen);
  // console.log("B: " + randomBlue);

  // rgb(100,140,200);

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  // console.log(outputColorString);

  outputParagraph.style.color = outputColorString;


}
