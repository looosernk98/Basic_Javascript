/*
  The destructuring assignment syntax is a JavaScript expression that makes it possible to 
  unpack values from arrays, or properties from objects, into distinct variables.
*/

// normal way to access value from array
const arr = ['niranjan', 'kumar', 'poddar', 26, 'New delhi', { email: 'abc@gmail.com', password: '12345'}, false];

let firstName = arr[0];
let middleName = arr[1]
let lastName = arr[2];

console.log(firstName, middleName, lastName);


// **************** Accesing values using destructing *****************

// skipping values example
const [_firstName,_middleName, _lastName, , , credentials] = arr
console.log('_firstName, _middleName, _lastName, : ', _firstName, _lastName, _middleName);
console.log('credentials: ', credentials); // output : { email: 'abc@gmail.com', password: '12345' }

// rest values exmaple
const [firstName1, ...rest] = arr
console.log('firstName1: ', firstName1);
console.log('rest: ', rest);

// default values
const arr2 = ['hello', undefined, ,'niranjan', 26, true] 

const [ hello, someValue = 'i am default value', someValue2 = '2nd default', ...restEle] = arr2
console.log('someValue: ', someValue);
console.log('someValue2: ', someValue2);
console.log('age: ', restEle[1]);


