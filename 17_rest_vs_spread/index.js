// https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/


// ********************* Rest operator  **************************

/*
The rest parameter syntax allows a function to accept an indefinite number
 of arguments as an array

 -> also while destructing
*/

const arr = [1,2,4,5,6]
const [first , sec, ...rest] = arr;
console.log('rest: ', rest);

const obj = {
    fullname : "alex peter",
    roll: 45,
    class: "10th",
    city: "delhi"
}

const { fullname, city, ...restData } = obj
console.log('restData: ', restData);

function createUser(firstName, middleName, lastName, ...rest){
    console.log('rest: ', rest); // output : [ 24, 'delhi', 110086 ]
    console.log('firstName, middleName, lastName: ', firstName, middleName, lastName);
}

createUser('alex', 'sam', 'peter', 24, 'delhi', 110086)



// ***********************  argument object   **********************

/*
   arguments is an array-like object accessible inside functions that 
   contains the values of the arguments passed to that function.
*/

/*

  blog link -> https://daily.dev/blog/why-do-you-need-to-know-about-array-like-objects
  blog link -> https://medium.com/globant/array-vs-array-like-objects-in-javascript-cc1523e21089
  array-like object is an object but have some similarity with array like indexing and length property
  but none of the Array methods are available.

  -> HTMLCollection is an Array-like object

*/

function func1() {
    console.log('arguments',arguments);
    console.log('typeof arguments: ', typeof arguments);
    console.log(arguments[3]);

    for(let i =0; i<arguments.length; i++){
        console.log(`${i}th argument is = `, arguments[i]);
    }
}
  
  func1(1, 2, 3, { name: "ruchi"});



  //************************ spread  operator ********************

 /*

 definition : The JavaScript spread operator (...) allows us to quickly copy 
              all or part of an existing array or object into another array
              or object.

 Spread syntax looks exactly like rest syntax. In a way, spread syntax is the 
 opposite of rest syntax. Spread syntax "expands" an array into its elements, 
 while rest syntax collects multiple elements and "condenses" them into a 
 single element.

Spread syntax can be used when all elements from an object or array need to be 
included in a new array or object, or should be applied one-by-one in a function 
call's arguments list. There are three distinct places that accept the 
spread syntax:

1. Function arguments list (myFunction(a, ...iterableObj, b))
2. Array literals ([1, ...iterableObj, '4', 'five', 6])
3. Object literals ({ ...obj, key: 'value' })

 */

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log('numbersCombined: ', numbersCombined);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log('myUpdatedVehicle: ', myUpdatedVehicle);


const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

/*   
  Only iterable values, like Array and String, can be spread in array literals
  and argument lists. Many objects are not iterable, including all plain 
  objects that lack a Symbol.iterator method:

  const obj = { key1: "value1" };
  const array = [...obj]; // TypeError: obj is not iterable

  On the other hand, spreading in object literals enumerates the own properties
  of the value. For typical arrays, all indices are enumerable own properties,
  so arrays can be spread into objects.
  
  
  const array = [1, 2, 3];
  const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

  All primitives can be spread in objects. Only strings have enumerable own 
  properties, and spreading anything else doesn't create properties on the new
  object.
  
 
  const obj = { ...true, ..."test", ...10 };
  // { '0': 't', '1': 'e', '2': 's', '3': 't' }

  When using spread syntax for function calls, be aware of the possibility
  of exceeding the JavaScript engine's argument length limit. 
  See Function.prototype.apply() for more details.

  */

  /*

  https://www.programiz.com/javascript/spread-operator
  */

