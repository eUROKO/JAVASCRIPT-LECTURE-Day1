// Task 1: Simple Greeting
// Create a function that prompts the user with "What is your name?"
// If the user enters their name, display an alert with "Hello, [name]!"
// If the user does not enter anything, display an alert with "You didn't enter a name."

// Task 2: Even or Odd
// Create a function that asks the user to enter a number.
// If the number is even, display "Even number!"
// If the number is odd, display "Odd number!"
// If the input is not a number, display "Please enter a valid number."

// Task 3: Age Check
// Create a function that asks the user for their age.
// If the user is under 18, display "You are a minor."
// If the user is 18 or older, display "You are an adult."

// Task 4: Basic Calculator
// *Create a function that prompts the user to input two numbers and an operator (+, -, , /).
// The function should perform the calculation based on the operator and show the result.
// If the user enters an invalid operator, show "Invalid operator."

// Task 5: Favorite Color
// Create a function that asks the user, "What is your favorite color?"
// If the color is "blue", display "Great choice! Blue is a cool color."
// If the color is anything else, display "Nice choice!"

const simpleGreeting = () =>{
    let name = prompt("What is your name") //prompt the user to enter name
    if (name){ // check if name is not empty
        return "Hello " + name
    } else{
        return " You did not enter a name"
    }

}
console.log(simpleGreeting()) // calling the function

