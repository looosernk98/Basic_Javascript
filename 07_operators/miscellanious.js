
// **********  Nullish Colescing operator ( ?? ) *****************

// -> returns the second value (value2) if the first value (value2) is null or undefined. 

// Technically, the nullish coalescing operator is equivalent to the following block:
// const result = value1;
// if(result === null || result === undefined) {
//    result = value2;
// }

let a = null;
let b = 0;

let result = a ?? b;
// console.log('result: ', result);
// console.log( undefined ?? 'john')



// ***************** Ternary Operator ( ? : ) **************

 let naam = 'shyaam';
 let fullname = (naam == 'ram') ? `${naam} prasad` : `${naam} kumar`;
//  console.log('fullname: ', fullname);



// ****************** Optional Chaining ( ?.) ****************

// The optional chaining (?.) operator accesses an object's property or calls a 
// function. If the object accessed or function called using this operator
//  is undefined or null, the expression short circuits and evaluates to 
// undefined instead of throwing an error.


const user = {
    fullname: "hari prasad",
    age: 45,
    // state: 'Delhi'
}

console.log(user.age)
console.log(user?.state)

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
    },
  };
  
  const dogName = adventurer.dog?.name;
  console.log('dogname: ', dogName);



// !! -> used to cast a variable to be a Boolean (true or false) value.

let x = 0
console.log("0 is : ", !!x) // false
console.log(!!undefined) // false
console.log(!!null) // false
console.log(!!9) // true
console.log(!!{}) // true
console.log(!!'') // false
console.log(!!false) // false
console.log(!!'dog') // true

