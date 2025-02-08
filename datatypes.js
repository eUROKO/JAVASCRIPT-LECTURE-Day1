//JS has 8 data type to hold different values.

//datatypes can be classified into two types. primitive and non primitive datatypes
//primitive datatypes can hold just a single value while
// non primitive can hold multiple values

//strings, number, boolean, null, undefined, symbol, bigInt - primitive datatypes
// objects - non primitive datatype

//strings - they are used to output text and can be denoted using a single or double quote.

let color = "yellow";
color = "red";
color = `green`;

//number represent numerical values, both integer or floating point numbers

let rr = 3;
rr = -3.14; // floating value

console.log(typeof rr); // typeof is used to check what datatype yu are working with

//boolean is used for conditional logics they can only give two values - either true or false
let ab = true;
let cd = false;
console.log(typeof cd);

//undefined - a variable that has been declared without a value
let ada;
console.log(typeof ada);
ada = "sunday";

let oo = ""; // this is not undefined because a value has been assigned

//null = represent no value or nothing

let op = null;

// object - they hold data i key value pairs. they are denoted by a curly braces
let person = {
  name: "Tobi",
  location: "Lagos",
  food: "Rice",
  amount: 1000,
};

console.log(person);


