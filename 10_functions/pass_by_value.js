// https://www.javascripttutorial.net/javascript-pass-by-value/
// https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/
// https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
// https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175

let user = {
    name : 'peter',
    age: 23,
}
function hello(userDetails){
    userDetails.name = 'John'
    console.log('userDetails: ', userDetails);
    userDetails = { name : 'alex', age: 45};
    console.log('userDetails: ', userDetails);
 
}

hello(user)
console.log('user: ', user);


let userList = [
    { name : 'sam', age: 45},
    { name : 'hales', age: 45}
]
 
function printUserList(){
  
}

printUserList(userList)
