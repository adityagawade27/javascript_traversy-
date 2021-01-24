// Arrays - vars that hold mult values 
/* 
Multiline comment 
*/ 

/*
// new is a constructor 
const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears'];

console.log(numbers);

fruits[3] = 'grapes';

// at the end
fruits.push('mangos');

// at the start 
fruits.unshift('strawberries');

// check if it's an Array 
console.log(Array.isArray(fruits));

// index of certain val 
console.log(fruits.indexOf('oranges'));

console.log(fruits);
*/

/*
const person = {
    firstName: 'Aditya',
    lastName: 'Gawade',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'San Jose',
        state: 'CA'
    }
}
console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);

// To pull certain values out of a objeect you can do this: 
const { firstName, lastName, address: { city } } = person; 

person.email = 'aditya@example.com';

console.log(person);
*/


/*
const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true 
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true 
    },
    {
        id: 3,
        text: 'doctor appointment',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);

//console.log(todoJSON);

//console.log(todos[1].text);

// For loop 
for(let i = 0; i <= 10; i++) {
    console.log(`For loop No: ${i}`);
}

// while loop 
let i = 0; 

while(i < 10) {
    console.log(`While loop No: ${i}`);
    i++
}

// Arrray Iterate 
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
}

// Array Iterate2 
for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter 
todos.forEach(function (todo) {
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText)

// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);
*/


/*
const x =6;
const y = 11; 

if (x === 10){
    console.log('x is 10');   
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

if (x > 5 && y > 10) {
    console.log('x is more than 5 and y is more than 10');
}

const z = 6;

// Ternary Operator 
const color = z > 10 ? 'red' : 'green';

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT reed or blue');
        break;
}
*/

/*
function addeNums(num1=1, num2=2) {
    return num1 + num2;
}

console.log(addeNums(5,5));


const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5,5));
*/ 


/*
// OOP 

// Constructor Functions 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
// Instantiate Object 
const person1 = new Person('Aditya', 'Gawade', '6-27-1992');
const person2 = new Person('Mary', 'Smith', '3-3-1980');


//console.log(person1);
//console.log(person2.dob.getFullYear());

//console.log(person2.getBirthYear());
//console.log(person2.getFullName());

console.log(person1)

*/ 

// ES6 Class 

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

// Instantiate the object 
const person1 = new Person('Aditya', 'Gawade', '6-27-1992');

console.log(person1);