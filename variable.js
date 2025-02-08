// JS is comprised of values, operators, expressions, keywords. it begins with a keyword that is used to identify the  javascript action that is to be performed. An expression is a combination of variables, operators and computes a value

console.log("Hello World");

// a variable is used to store information so that it can be used when needed

// how can we define variable name?
//  with alphabet -A-Z or a-z, or using a dollar sign ($)
// using and underscore  (_)

// ! but we cannot begin your variable name with a number. JS will not let you

lastname = "charles"; //loweredcased
console.log(lastname);

// JS is highly case sensitive
lastName = "Tope"; //camelcased  - popular
LASTNAME = "wilson"; //uppercased
LastName = "Aisha"; //pascalcased

//the above named variables are known as automatic variable declaration. -not good practice. could lead top errors

// you must use the var, let, const to declare a variable name
var mub1 = 1;
let book = "harry potter";
const phone = "apple";

console.log(book);

//when should we use var, let or const
//var - outdated, should only be used if you want to support an older browsers
//let - we should use if we know the value of a variable might be changed at some point in the future.
//const - we used if the value should not be changed

//redeclaring and reassigning  a variable.
// you cannot be declare a variable name that begin with let ro const keyword
// but you can reassign a value of a variable name that began with the let keyword as seen below.

//let book ="kk" // will not work because let book is already been declared
// this below would work - re-assigning book value from "harry potter" to "lord of the ring"
book = "lord of the rings";
console.log(book);

//phone = "samsung"; // value of phone cannot be update because it was initialized with the const keyword
console.log(phone);

//global scope and block scoped variables

//global scope e.g
let a = 40;
console.log(a);

//block scope
{
  let a = 50; //     a is unaffected because its in a blocked scope which is always started with a {curly bracket}
  console.log(a);
}
