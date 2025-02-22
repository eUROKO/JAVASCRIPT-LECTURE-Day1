//functions are designed to perform a particular task. it is a reusable piece of code that the performs a logic, returning different results based on the value provided
//functions are executed when called upon by invoking/activating the function

//how to declear a function - 2 ways
//1 function declaration.
function myName() {
  console.log("hello Emmanuel");
}

//arrow function
const sayMyName = () => {
  console.log("Hello Emmanuel Uroko");
};

//invoking a function - a function will not run unless it is invoked
myName();
sayMyName();

//the return keyword - used only in function. they return he final value from your code logic. NOTHING SHOULD BE WRITTEMN after the return keyword, javascript will not recognize it.

function addMe() {
  return 4 + 3;
}

console.log(addMe()); // function addMe returns us a value of 7

//parameters and argument

//parameters are like placeHolder that receive variables, and they are used when defining function
//argument are the actual values the function receives

function sumUp(a, b, c) {
  //a,b,c are parameters that we can assign any value to
  return a + b + c;
}

console.log(sumUp(1, 2, 3)); //here a =1, b=2, c=3
console.log(sumUp(10, 20, 30)); //same function but different argument
console.log(sumUp(13, 26, 38));

const calcFoodTotal = (amt, tip) => {
  return amt + tip;
};
console.log(calcFoodTotal(6000, 500));

//write a function splitBill that split the bill to our calcFood among number of the individuals that ate the food. if its just one person, nit should return the total amount, but if its more than 1 person, then the bill should be divided amongst the number of person, returning how much each are to contribute.

function splitBill(amt, person) {
  if (person === 1) {
    return amt;
  } else if (person > 1) {
    const bill = amt / person;
    return bill;
  }
}
console.log(splitBill(6000, 1));
console.log(splitBill(calcFoodTotal(7000, 1500), 3));

// write a function that takes a parameter. the functions job is to return the words supplied bac as an array and all in upper cased.

const wordArray = (word) => {
  let result = []; // from your array class, this is one of the ways to add array. this is more suitable because we want to be passing values by ourself not automatically
  result.push(word[0].toUpperCase());
  result.push(word[1].toUpperCase());
  result.push(word[2].toUpperCase());
  return result;
};

console.log(wordArray(["hello ", "you", "hi"]));

//write a function cartQTy. take parameter called cart
//the cart argument will be an array of two argument
//the object will have the keys of price and qty
//the values of object should be of number datatype
//the function cartQty should be able to multiply the values of each property in the object, and then return the sum total of the values of the 2 objects.


function cartQty(cart){
    let total;
    const obj1 = cart[0].price * cart[0].qty
    const obj2 = cart[1].price * cart[1].qty
    total = obj1 + obj2;
    console.log(total)
    return total
}

cartQty([
    {
        price: 20,
        qty: 5
    },
    {
        price: 40,
        qty: 4
    }

])