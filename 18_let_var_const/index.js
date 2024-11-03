
/*
    type    scope                         reassign      redeclare

    var     golbal, function               true          true
    let     global,block,function          true          false
    const   global,block,function          false         false
*/

// varibale -> global variable, local variable


// ****************  var  ***********************

{
    var a = 10 // var is not blocked scope, we can acess it from outside of this block

}
console.log('a: ', a);

var c ;
function func1(){
    var b = 20
    c = 30;
    console.log('b: ', b); // b is accessible inside this function only bcoz var is function scoped
    console.log('c: ', c); // c is accessible here bcoz var is global scope
    console.log('a', a) // although a is declared in block but var is not blocked scoped that's why a is accessible here (bcoz var is global scope)
}

func1()
console.log('c: ', c);
console.log(b)

// console.log('b: ', b); // not accessible outside of func1 bcoz var is function scoped

console.log('a: ', a); // although a is declared in block, but var is not blocked scoped that's why a is accessible here (bcoz var is global scope)

// var varibales can be reassigned and redeclare

var name = "alex"
console.log('name: ', name);

{
    var name = "ravi"
    console.log('name: ', name);

}

var name = "pandey"
console.log('name: ', name);

name = "maxwell"

console.log('name: ', name);


// ****************  let, const  ***********************

let d = 100; // global variable
{
    let e = 200;
    console.log('d: ', d);
    console.log('e', e);
    const x = 20;
}
// console.log('x: ', x); // not accessible bcoz const is blocked scoped

// console.log('e ', e);// e is blocked scope

function func2(){
    let f = -18
}
// console.log('f', f);// f is not accessible here as let is function scoped


// can't redeclare in const , let

let age = 25
const city = 'delhi'

// const city = "dehradun"  // can't redecare
{
    let age = 28;
    const city = 'mumbai'
    console.log('city: ', city);
    console.log('age: ', age);
}

let firstName = "abcd"
const lastName = "xyz"
console.log('firstName: ', firstName);

// lastName = "wxy" // can't reassign
// console.log('lastName: ', lastName);

firstName = "efgh"
console.log('firstName: ', firstName);


// ______________________________________________________________

// let val = 23

// {
//     var val = 56; // can't redeclare blocked scope variable
// }


var value = 23

{
    let value = 56;
    console.log('value: ', value); //
}
console.log('value: ', value);




