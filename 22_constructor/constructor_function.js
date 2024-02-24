"use strict"

// https://www.w3schools.com/js/js_object_constructors.asp


/*

The regular {...} syntax allows us to create one object. But often we need to
 create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.


In a constructor function this does not have a value. It is a substitute for 
the new object. The value of this will become the new object when a new object
is created.

*/

function User(fname,lname, age, state){
  // creates a user object - this = { firstName: '', lastName: ''}
  this.firstName = fname
  this.lastName = lname,
  this.age = age;
  this.state = state

  // this.nationality

  // printName = function (){
  //   console.log(this.firstName, this.lastName)
  // }
  
}

const user1 = new User('virat', 'kohli', 38, 'delhi')
const user2 = new User('sachin', 'tendulkar', 50, 'mumbai')

// console.log('user2: ', user2);
// console.log('user1: ', user1);

//*********************** Constructor vs Object Literal ************************

/*
   An object literal is typically used to create a single object whereas a 
   constructor is useful for creating multiple similar objects:
*/

//Object literal - { }
const user = {
  firstName: "john",
  lastName: "de",
  age: 34,
  state: 'Uk'
}


/*

When a function is executed with new, it does the following steps:

-> A new empty object is created and assigned to this.
-> The function body executes. Usually it modifies this, adds new properties to it.
-> The value of this is returned.


*/
const user3 = new User()
// console.log('user3: ', user3);



//************************* Adding Properties And Methods in an Object **************

 
  const person = {
    name: 'alex',
    roll_no: 23,
  }

  person.state = 'delhi'
  // console.log('person: ', person);

  const person1 = new User('rohit', 'sharma', 56, 'mumbai')
  person1.nationality = 'indian'
  console.log('person1: ', person1);
  console.log('person1 nationality: ', person1.nationality);

  person1.printAge = function(){
    console.log('person1 age is ', this.age);
  }

  console.log(person1.printAge()) // output -> person1 age is 56


  const person2 = new User('yasashvi', 'jaiswal', 26, 'bihar')
  console.log('person2: ', person2);
  console.log('person2 nationality: ', person2.nationality);

  console.log(person2.printAge()) // error -> person2 dont have such method



  // Prototype

  User.prototype.nationality = "american"
  User.prototype.printName = function (){
    console.log(this.firstName, this.lastName)
  }

 person1.printName()
 console.log(' person1.nationality',  person1.nationality); // can't override object literal nationality
 console.log(' person2.nationality',  person2.nationality);














//******************************* Built-in Constructors ******************/

// JavaScript has some built-in constructors, including the following:

let a = new Object({name: 'niru'}); // typeof -> object
// console.log('a: ', a.name);

let b = new String(); // typeof -> object
let c = new String('Bob') // typeof -> object

let d = new Number();
// console.log('d: ', d);
let e = new Number(25); // typeof -> object
// console.log('e: ', typeof e);

let f = new Boolean();// typeof -> object
let g = new Boolean(true);// typeof -> object

// Although these constructors exist, it is recommended to use primitive data 
// types where possible, such as:

var _a = 'Bob';
var _b = 25;
var _c = true;






