/*
  The destructuring assignment syntax is a JavaScript expression that makes it possible to 
  unpack values from arrays, or properties from objects, into distinct variables.
*/

// normal way to access value from object
const obj = {
    // firstName: 'nirajan',
    middleName: 'kumar',
    lastName: 'poddar',
    age: 26,
    state: 'New delhi',
    credentials: { email: 'abc@gmail.com', password: '12345'},
    loggedIn: false,
    // dob: '10-12-2002'
};

let _firstName = obj.firstName;
let _middleName = obj.middleName
let _lastName = obj.lastName;

console.log(_firstName, _middleName, _lastName);


// **************** Accesing values using destructing *****************

const { loggedIn, credentials, firstName, lastName, age} = obj
console.log('loggedIn: ', loggedIn);
console.log('credentials: ', credentials); // output : { email: 'abc@gmail.com', password: '12345' }

// renaming & rest values exmaple
const {firstName: firstName1 = 'Ruchi', ...rest} = obj
console.log('firstName: ', firstName1);
console.log('rest: ', rest);
console.log('lastName: ', rest.lastName)

// default values
const { dob = '2-2-1998' } = obj
console.log('dob: ', dob);



