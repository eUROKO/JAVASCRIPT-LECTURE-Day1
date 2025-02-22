//if and else statement
//if statement evaluate statement in a bracket
//use if statement , if the condition to be executed is true, while use else if the same condition to be executed is false.
//additionally, we have elseIf, used to specify a new condition to be tested if the first condition fails.

//structure of the ifElse

//      if(condition to be tested){
//      code to be executed if condition is true
//      } else {
//            code to be executed if condition is false
//      }

const checkAmount = 1000;
if (checkAmount > 600) {
  console.log("i have more");
} else {
  console.log("i have less");
}

//using the elseIf to test more condition.

if (checkAmount >= 1200) {
  console.log("A");
} else if (checkAmount <= 500) {
  console.log("B");
} else if (checkAmount > 900 && checkAmount <= 1100) {
  console.log("C");
} else {
  console.log("D");
}

//=========================================>>>>>>>>>>>>>>>>>>>
//write a code that prompt a question.
//the question should say "who is there?"
// if question reply says "Dami", the it should prompt for a password
//if the question reply id not "Dami", it should alert "I dont know you"
// if the password is "Javascript", alert " welcome User"
//if the password is not "javascript" , alert "wrong password"
//if there is no answer to our question, then we alert "cancelled"

// let q = prompt("Who is there");
// if (q === "Dami") {
//   let password = prompt("Enter Password");
//   if (password === "Javascript"){
//     alert("Welcome user")
//   } else if (password !== "Javascript"){
//     alert("Wrong user")
//   }
// } else if (!q){
//     alert("cancelled")
// }else if (q !== "Dami"){
//     alert ("I don't know you")
// }

//=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SWITCH STATEMENT - this performs a series of actions based on different conditions
// if the specified condition is a match to the case, it will run the associated block of code designated to tha cause
// if there is no match, a default block of code is executed
//switch introduces the break keyword, the break is needed to stop the code execution from going on to the next case if it has found a match.
// the switch statement used strict comparison === when analyzing.

// // switch syntax
// switch (expression) {
//   case value1:
//     //code to execute
//     break;
//   case value2:
//     //code to execute
//     break;
//   default:
//     //code to execute
//     break;
// }

const getDay = new Date().getDay();
console.log(getDay);

switch (getDay){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Friday")
        break;
    case 5:
        console.log("saturday")
        break;
    case 6:
        console.log("Tuesday")
        break;
    case 7:
        console.log("Thursday")
        break;
    default:
        console.log("No day found")

}