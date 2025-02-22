//arrays can be used to create multiple values
// if we are to print out or list in class, we would hold them in seprate variables
const item1 = "Ac";
const item2 = "Fan";
const item3 = "chairs";

// the above is not an ideal way to list out things, hence the need for array. we can simply list out the items under a single variable name

const classItems = ["Ac", "Fan", "Chairs", "Desk"];
console.log(classItems);
// arrays are recognizable by the square brackets []

//how to create an array
//1. using the square bracket
const numms = [10, 20, 30, 40];

//2. we can initialise using an empty bracket and then we insert things via their index position

const randomStuff = []; //array are zero indexed. the count start from zero
randomStuff[0] = "shoe";
randomStuff[1] = "pen";
randomStuff[2] = "watch";
console.log(randomStuff); // inserting items into arrays  referencing the position where we want them to be.

//3. using the new array method to create an array.
const myColors = new Array("red", "blue", "green");
console.log(myColors);

//ACCESSING ITEMS IN AN ARRAY - Via index position
console.log(myColors[2]); // green

//modifying an array value
myColors[2] = "yellow";
console.log(myColors); // we updated green in myColors array to yellow

//converting and array to string
console.log(myColors.toString());

//adding new items to an array
//1. push method - this will add a new items FROM THE LAST position
myColors.push("purple");
console.log(myColors); // this adds purple as the last item in the array.

//2. unshift method - adds a new item from the first position in the array.
myColors.unshift("teal");
console.log(myColors); // adds teal to as the first item in the array

//removing items from an array
//1. pop method - this removes an items from an array.
myColors.pop(); //does not take any argument in the bracket
console.log(myColors);

//2. shift method - removes first items from the array.
myColors.shift(); // does not take in any value
console.log(myColors);

//slice Method() - return the selected items sliced in an array. it takes two argument - position to begin the slice and where it ends.
const meals = ["rice", "spag", "swallow", "salad", "snack"];
console.log(meals.slice(2, 4)); // returns swallow and salad

//merging array - 1. concatination method or we use the spread operator
const concatArrays = meals.concat(classItems);
console.log(concatArrays); // this merges meals and classItems arrays as one array

//2. using spread to merge array, we simply use the triple dor ...
const spreadArray = [...meals, ...classItems];
console.log(spreadArray);

//include method - this returns a boolean if an item exist in an array
console.log(meals.includes("salad")) // returns true
console.log(meals.includes("burges")) //returns false