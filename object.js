// Object can store multiple data in key value pairs
const student = {
  firstName: "Emmanuel",
  color: "red",
};

console.log(student);

//acessing he values in an object.
//using the dot notation. (widely used)
console.log(student.firstName); // dot notation. this returns Emmanuel
console.log(student.color);
console.log(student[color]); // using square bracket. returns red

//modifying an object

student.firstName = "Frank";
console.log(student);

//adding a new property to an existing object
student.course = "web development";
student.time = "10pm";
console.log(student);

//deleting an object property
delete student.time;
console.log(student);

// in method - this checks if a property exist in an object.
console.log("frank" in student); //returns false since we don't have a property/key named frank
console.log("color" in student); // return true cos we have color in student object

//object.assign - copies properties from one object to a target object
const movies = {
  deadpool: "wolverine",
};

console.log(Object.assign(student, movies)); //this joins both properties to a single unit

//array
const all = ["books", "chairs", "tables"]; //arrays is also used to list items, but you use a square bracket.
console.log(all);

//object.enteries - returns an array of key/value pairs of an object
const ObjectEntries = Object.entries(student);
console.log(ObjectEntries[3]);

//objectFromEntries : this is the reverse of object.array. it converts an array back to an object
console.log(Object.fromEntries(ObjectEntries)); // converting back to object

//object.keys - this returns an array of the keys of an object.
console.log(Object.keys(student)); // returns all the keys in the student object

//object.values returns an array of the values of an object

console.log(Object.values(student));

//how to create an object
// using an object literal
const list = {
  phone: "apple",
  country: "USA",
};

// using an instance of an object
const list2 = new Object({
  shoe: "Nike",
  score: {
    math: 90,
    English: 70,
  },
  hobbies: ["reading", "swimming"],
});

console.log(list2); // to access all properties and values in list2
console.log(list2.score.English); //90  //this will give you the value of English in the list2 object
console.log(list2.hobbies[0]); // reading //since hobbies is an array, you can access the properties in it using an index

//object.freeze - this prevents an object from being modified
Object.freeze(student); // this will prevent anyone from making a change to student object
student.color = "gray";
console.log(student); // will return the color as red instead of gray because we already freezed student

//object.create this creates a new object from an existing object
let Animal = {
  name: "dog",
  bark: true,
};
console.log(Animal);
console.log(Object.entries(Animal));

let snake = Object.create(Animal);
snake.name = "Python"
snake.bark = false
console.log(snake);
