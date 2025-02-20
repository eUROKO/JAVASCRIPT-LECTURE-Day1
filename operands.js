//operators can be used to perform various operations
//we have different operators in JS

// assignment operator

let dd = 4; // the is the assignment operator

// Arithmetic operator

let ee = 5;

console.log(dd + ee); //addition
console.log(dd - ee); //subtraction
console.log(dd * ee); // multiplication
console.log(ee ** 4); // esponential
console.log(dd / ee); //division
console.log(ee % dd); //modulus or reminder of. THIS IS NOT USED FOR DIVISION.

//comparison operators. - used to determine difference between values
let ff = 30;
// equal to "==" : this operator is not strict. it only checks for same values between variables
console.log(ff == 20); //false
console.log(ff == 30); // true
console.log(ff == "30"); //true because it checks just the values and its not a strict operator

//strictly equal to "===" :it does not only check the value, it also ensures that the values are of the same datatypes
console.log(ff === "30"); // false
console.log(ff === 30); // true

// not equal to != : this checks for same value
console.log(ff != "30"); // false - because we know that our value is equal to 30 and saying otherwise is false
console.log(ff != 30); // false - because we know that oir value is equal to 30 and saying otherwise is false

// strictly not equal to !=== : this checks for same values and same data type
console.log(ff !== 30); // false
console.log(ff !== "30"); // true

//greater than >
console.log(30 > 30); // false
console.log(30 > "30"); // false

// less than <
console.log(30 < 30); //false

//greater than equal to >=
console.log(30 >= ff); //true

//less than equal to <=
console.log(30 <= ff); // true

// logical operators
// logical or     ||
// logical and     &&
// logical not     !

// logical or will evaluate your operands from left to right. it will try to convert
// your statements into a boolean value - truthy or falsy
// logical or will return the last value in your operand if all the values are false.
// logical or will return the first truthy value it sees in your operand

//numbers are regarded as truthy value except for ZERO

let fp = 10;
let gp = 15;
console.log(fp || gp); //since 10 is the first truthy value it returns 10
console.log(0 || 1); // since zero is falsy and 1 is the first truthy value, it returns 1
console.log(0 || 1 || 2); // returns 1 since 1 is the first truthy value in the operand
console.log(undefined || null);
console.log(undefined || null || 0 || 2);

// logical and - && :
// this will return true  if all operand are true,
// then if there is a false value in the operand it will return the first falsy value
// if all operands are true it will return the last operand
console.log(fp && gp); //15 -  since both values are true, this will return the last values
console.log(0 && 40); //0 - since 0 is the first falsy value in the operand, it will return 0.
console.log(true && true); //true
console.log(false && true); // false
console.log(undefined && null); // undefined
console.log(3 && 0 && 4); //0 - because it is the only falsy value and the first in the operand
console.log(null || (2 && 3) || 4); //3 - bracket takes priority in JS. amd under the && rules, if all
// values are true, it will return the last value = 3. SO we now have (null || 3 || 4). under the logical or ||
// it will return the first value that is true in your operands which is 3.

console.log(undefined || null || 0 || 2); //2 - because 2 is the first truthy value in the operand

//logical not ! - the operator seeks to convert truth to falsy and vice versa.
console.log(!true);
console.log(!false);
console.log(!40);

let pp = 2;
console.log(pp > 2 && pp < 2); // false - since both are false, it will return the first falsy value it sees.

let pen = true;
let eraser = 10;
console.log(eraser > 5 || eraser < 5);
console.log (!pen)