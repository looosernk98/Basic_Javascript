// In Javascript, functions can also be defined as expressions

// storing a function in a variable, Here the function is treated as an expression
let sayHello = function(name){   //  anonymous function
    console.log('Hello World!', name)
}
// The function above is called an anonymous function.

// calling function using variable name
sayHello('Rahul')


// ******** calling a copied function************

let sayHi = sayHello // copy of sayHello gets stored in sayHi

sayHi('niranjan')
