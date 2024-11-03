// https://www.javascripttutorial.net/javascript-pass-by-value/
// https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/
// https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
// https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175

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
    // userDetails = { name : 'alex', age: 45};
    // console.log('userDetails: ', userDetails);
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
