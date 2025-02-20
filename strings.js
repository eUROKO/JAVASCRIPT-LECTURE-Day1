let xl = "mac";
let hh = "20";
let tt = "10";

console.log(tt + hh); //output is 1020 because JS simply joined the value. it sees the value as a text/string not a number.

//methods - this are actions that can be performed in a datatype

//length - count things

let text = "Today is Saturday";

console.log(text.length); // output is 17 because of the included space

//by default JS is zero indexed in its count, only the length begins from 1.

// STRINGS METHOD :

// 1. slice method - extracts the part of a strings and it takes two arguments. first the starting position to be sliced and
//the end position. if you omit the end position JS will slice from the start position till the end of the strings.//

console.log(text.slice(6, 8));

// the replace method - this replaces a word with another in a string. it takes 2 arguments - the word to be replaced and the new word to be added

let newText = "i have a book";

console.log(newText.replace("have", "own")); // the replace methods only replace the first match it finds

newText = "i own a laptop and own a book";
console.log(newText.replace("own", "have"));

//replaceAll method only replaces the first match it finds
let food = "I love rice, Rice is my best food, Rice is delicious";
console.log(food.replaceAll("Rice", "Beans"));

//to upper or lowered case
let Text1 = " I have a shoe";
console.log(Text1.toUpperCase());
console.log(Text1.toLowerCase());

// concatenate - join two or more things together.
console.log(newText + Text1);
console.log(newText.concat(Text1));

//indexOf - returns the index position of the first occurrence of the word in a string
console.log(food.indexOf("delicious"));

//lastIndexOf - finds the last occurrence
console.log(food.lastIndexOf("Rice"));

// accessing strings characters
let message = "hello";
console.log(message[0]);

//using charAt() method - find the character position
console.log(message.charAt(1)); //ans is e

//side note - strings are immutable - means it cannot be changed
message[0] = "k";
console.log(message); //this cannot change from h to t because strings are immutable in nature.

//trim method removes spaces from both side of the string
message = "       javascript is fun";
console.log(message.trim());

// includes method - checks if a text can be found in a string. returns a boolean value
message = "javascript is not boring";
console.log(message.includes("at")); //returns false because at is not in the sentence

//convert a string to an array using the split method
let items = "pen, paper, tables, chair";
console.log(items);
console.log(items.split(" ")); // arrays are denoted with square brackets [] 

