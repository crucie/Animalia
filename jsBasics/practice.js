//this is my first javascript code!
console.log("hello world!");

let name = 'yeahhh';
console.log(name);

//cannot be reserved keywords

//constants

const interestRate= 0.3;
//un-commenting the line below wil give an error due to constant
//interestRate = 1;
console.log(interestRate);

name = " lolol" // string Literal
let age = 20 //number Literal
let isApproved = false; // boolean Literal
let firstName = undefined;
let selectedColor = null; 

console.log(name, age , isApproved, firstName, selectedColor);

let person = {
    name: 'LAW',
    age: 30

}
//dot Notation
person.name = "Water";

// bracket notation
let selection = 'name';
person[selection] = "dummy";

console.log(person.name);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

console.log(selectedColors[0]);

//functions

function greet(N){
    console.log('hello world!  '+ N);

}

greet('jhonny')