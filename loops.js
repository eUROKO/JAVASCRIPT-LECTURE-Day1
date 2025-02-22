//loops are used to perform and action a certain num,ber of times
const clubs = ["Madrid", "Chelsea", "Mancity"];
//if we were to print the name of the clubs, we do
clubs[0];
clubs[1];
clubs[2]; //etc
// thge above way is not an ideal way to list things especially if the data is large. hence loops

//types of loops
// 1. for loops
// the for loops iterate over an element ior an array for a fixed number of times. it takes three argument.
// 1. the initialization
// 2. the condition
// 3. increment

for (let i = 0; i < clubs.length; i++) {
  console.log(clubs[i]);
}
// the above, we first initialize by we want the loop to begin at index 0 in our club array
// the condition for loop to run is that 0 must be less than the length of the club array which is 3, this is true.
//if true, then the loop will iterate over the array element, printing out the club names until it gets to the last items and stops. i++

//2. for of loop - this iterates over Array, objects and strings
const testScore = [30, 40, 50, 60];
for (const score of testScore) {
  console.log(score + 10);
}

//double numbers and return them in an array using the for loop
const doubleNums = (numbers) => {
  let result = [];
  for (let num of numbers) {
    result.push(num * 2);
  }
  return result;
};
console.log(doubleNums(testScore));

// 3. for in loop - this is BEST SUITED if we are iterating over an object
const myObject = {
  name: "John",
  size: 45,
};
for (const items in myObject) {
  console.log(myObject[items]); // we used square bracket here because we want to reference the keys and not the value that dot notation do return
}

const newObjs = {
    a:4,
    b:8,
    c:12,
}

for (const num in newObjs){
    console.log(newObjs[num] + 4)
}

const numObjects = (num) =>{
    let result = []
    for (const rrr in num){
        result.push(num[rrr] *3)
    }
    return result;
}
console.log (numObjects(newObjs))


