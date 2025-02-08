let num1 = 5;
let num2 = 3.5;
console.log(num1 + num2);

//NAN - not a number - this happen when js cannot compute a value from your math expression.
console.log(num1 - "hello"); //NAN

//convert to string
let po = 300;
console.log(po.toString());

//toFixed method - this rounds number to decimal places
let uu = 27.456;
console.log(uu.toFixed(2));

//parseFloat - convert a value to a number and returns the first number
let zzz = "440 600 year";
console.log(parseFloat(zzz));

//passInt - converts a string to a number and returns the first integer
let ppp = "10.99"
console.log(parseInt(ppp)) // ans is 10
console.log(parseInt("30, 50, 50"))
console.log(parseInt("henry 50"))

//number method - can be used to convert a string to a number
let ww = "50"
console.log(Number(ww));

//JS math Method such as
// Math.ceil() - rounds tto the nearest integer
let ii = 4.23
console.log(Math.ceil(ii)); // the M in math must be a capital letter
console.log(Math.ceil(0.8))
console.log(Math.ceil(-2.38))

//math.floor - rounds a number down to the nearest integer
console.log(Math.floor(4.23))

