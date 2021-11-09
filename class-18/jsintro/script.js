/*
  NOTE:
  In Javascript you can comment a single line with two slashes,
  or create a block-comment with this slash+asterisk syntax.
*/

//////////////////// Console + Alert ////////////////////

// sending messages to the developers console
// console.log("BOO!"); //included a string in quotation marks

//// Popping open an alert window
// alert("Le Boo.");

//////////////////// Variables / Types ////////////////////

/*
  What is a variable?
  a place to store data:
  string, integers (whole numebrs) & floats(decimal), boolean(true/false)
*/

//// defining variables
//// string: uses quotation marks to literally mark a string

var firstName = "Lil";
var lastName = "Pumpkin";
var space = "Soggy";

// //// concatinating variables

// console.log(lastName);
// console.log(firstName + " :) " + lastName); //option 1 for creating a space
// console.log(firstName, lastName, lastName, lastName); //option 2
// console.log(firstName + space + lastName); //option 3
// console.log(firstName + lastName);
//
//// storing integers
//
var num1 = 5;

// //// storing floats

var num2 = 5.4;
var num3 = 4;

// console.log("Output: " + (num1 + num2 + num3));

//
// //// 55.44-concatination if we don't use parenthesis
// //// 59.4-math if parenthesis are added to num2 + num3
//
// /*
//   math:
//   addition +
//   subtraction -
//   multiply *
//   divide /
// */

//////////////////// Arrays ////////////////////

//// creating arrays
//// what is an array? an array is a COLLECTION of items

/*
  NOTE:
  Items in an array are referenced by their "index"
  which starts at ZERO, not ONE.
*/

var firstArray = ["Lil", "Big", "DJ", "Dr.", "Dark", "Mx.", "Tik"];
var secondArray = ["Yeet", "Xan", "Kitten", "Pumpkin", "Tok", "Soup", "Nook"];

//// Print entire array...
// console.log(firstArray); //console log of the full array
// console.log(secondArray);


//// Print one item from the array...
// console.log(firstArray[0]);
// console.log(secondArray[4]);
// //DJ
// //Dr. Distancing

//////////////////// LOGIC with CONDITIONALS ////////////////////

/*
  Set up control flow with if/else statements
  < or >
  <= or >=
*/

//// js accepts equality as == or ===. When you use === you are ensureing TRUE equality.
//
// var num = 10;
//
// if (num == 2){
//    console.log('you have the correct number!')
// } else if (num > 15){
//    console.log('your number is too big')
// } else {
//    console.log('please choose another number')
// }



//////////////////// FUNCTIONS ////////////////////

/*
  There are many functions in JavaScript for modifying values, math, etc...
*/

//// Random FLOAT from 0-1
// console.log( Math.random() );

//// Random FLOAT from 0-50
// console.log(Math.random() * 50);
//
// //// Random INTEGER from 0-length of an array, giving us an INDEX...
// var secondArray = ["Animal Crossing", "Zoom Party", "Candy", "Yoga", "Netflix Party", "Bops"];

var randomIndex = Math.floor( Math.random() * secondArray.length );
// console.log(randomIndex);

//// Random item from array using our random index
// console.log(secondArray[randomIndex]);


//////////////////// CUSTOM FUNCTIONS ////////////////////

/*
  to make a procedure, set of instructions that make things easier
  compartamentalize setting up a small machine that performs a simple procedure
*/

//// Setting it up

function sayHello() {
    console.log("hellooooo!");
    console.log("sup.");
}

//// Calling the function

// sayHello();


//// Setting up a function with arguments / parameters

var myVariable = 444;

function addNumber(numberOne, numberTwo){
    var result = numberOne + numberTwo;
    console.log("Result: " + result);
}

// //// Calling the addNumber function

// addNumber(40, 60);
//
// //// RETURNING values from a function
//
// function addNumberAndReturn(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }
//
// console.log("Here's the value coming back from our function: " + addNumberAndReturn(400,200));
//
//////////////////// LOGICAL OPERATORS ////////////////////

/*
  create a function that acts like a virtual door
  if we call door #1, we will return Hall of Mirrors
  if we call door #2, we will return Mummy Bathroom
  if we call door #3, we will return Witchy Kitchen
*/

//// function that contains an if/else statement
//// test each of your doors by calling the function at least 3 times

function door(num){
  if (num == 0){
    console.log("Deadass Driveway");
  }
  else if (num == 1){
    return "Haunted Bathroom";
  }
  else if (num == 2){
    return "Spooky Bedroom";
  }
  else if (num == 3){
    return "Creepy Kitchen";
  }
  else if (num == 4){
    return "Boo-sment";
  }
  else if (num == 5){
    return "Acrid Attic";
  }
  else if (num == 6) {
    return "Boo-lcony";
  }
  else {
      return "There are only 6 doors!";
  }
}

// console.log(door(Math.floor(Math.random() * 6)));
// console.log(door(2));
door(2);

// console.log(door(3));
// console.log(door(5));
