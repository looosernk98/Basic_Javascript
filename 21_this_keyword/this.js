// "use strict";

/*

In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

1. In an object method, this refers to the object.
2. Alone, this refers to the global object.
3. In a function, this refers to the global object.
4. In a function, in strict mode, this is undefined.
5. In an event, this refers to the element that received the event.
6. Methods like call(), apply(), and bind() can refer this to any object.
7. this in arrow function

Note : this is not a variable. It is a keyword. You cannot change the value of this.
*/


// **************** this in a method ***********************

//When used in an object method, this refers to the object(self).
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() { // don't use arrow fn here, if used this will not refer to self object
        console.log("this: ", this);
      return this.firstName + " " + this.lastName;
    }
  };

// console.log(person.fullName());


// **************** this Alone ***********************

// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:

// console.log("window object :", window)
// console.log("this object :", this)
// console.log("isEqual: ", this === window);

// Note :  In strict mode, when used alone, this also refers to the global object:


// ****************** this in a Function (Default) *************

// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]:

function myFunction() {
    // console.log('this: ', this);
    return this;
}

const val = myFunction()
// console.log('val: ', val);


//************************ this in a Function (Strict) *****************

// JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is undefined.

function myFunction2() {
  console.log("this:: ", this);
}

// myFunction2()


// ********************** this in Event Handlers *****************

// In HTML event handlers, this refers to the HTML element that received the event:


// ******************** Explicit Function Binding *******************

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);



  // ***************** TODO : this in arrow function  ***************

  // In JavaScript, a new function defines its own this value. However, this is not the case for the arrow function

  const item = {
    name: 'abc',
    price: 267,
    isAvailable: true,
    color: 'blue',

    printName: () => {
       console.log('name: ', this.name);
       console.log('this: ', this);
    }
  }

item.printName()

const arrow = () => {
  console.log("this:: ",this);
}
arrow()
console.log(this);

//https://www.javascripttutorial.net/es6/javascript-arrow-function/
//https://www.w3schools.com/js/js_arrow_function.asp






