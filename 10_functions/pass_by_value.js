// https://www.javascripttutorial.net/javascript-pass-by-value/
// https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/
// https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
// https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175

/*
1. Pass by Value
-> Applies to primitive types: Number, String, Boolean, BigInt, undefined, null, Symbol.

When you pass a primitive to a function, JavaScript copies the actual value. 
Changing the parameter does not affect the original variable.

*/

let x = 10;

function change(val) {
  val = 20;
}

change(x);
console.log(x);  // 👉 10 (original unchanged)

/*
2. Pass by Reference (kind of)
 Applies to objects, including arrays and functions.

 When you pass an object, JavaScript passes a reference (the memory address) to that object. 
 However, the reference itself is passed by value.

 So:
✅ You can modify the object’s properties inside the function.
❌ But you can’t reassign the original object itself.
*/

// Example 1: Modify property (works)

let obj = { name: "Alex" };

function update(o) {
  o.name = "Sam";
}

update(obj);
console.log(obj.name);  // 👉 "Sam"

// Example 2: Reassign object (does not work)
let obj2 = { name: "Alex" };

function replace(o) {
  o = { name: "Sam" };  // This only affects the local copy
}

replace(obj2);
console.log(obj2.name);  // 👉 "Alex" (original is untouched)









// non-primtive value is passed by reference in a function
let user = {
    name : 'peter',
    age: 23,
}
let age = 26; // primtive value is passed by value in a function
function hello(userDetails, age){
    age = 56
    userDetails.name = 'John'
    console.log('userDetails: ', userDetails);
    userDetails = { name : 'alex', age: 45};
    console.log('userDetails: ', userDetails);
}

hello(user, age)
console.log('user: ', user);
console.log('age: ', age);



let userList = [
    { name : 'sam', age: 45},
    { name : 'hales', age: 45}
]
 
function printUserList(){
  
}

printUserList(userList)
