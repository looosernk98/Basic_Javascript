//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object

//https://www.javatpoint.com/javascript-oops-constructor-method


/*

JavaScript Classes are templates/blueprint for JavaScript Objects.
Use the keyword class to create a class.
Always add a method named constructor()
A JavaScript class is not an object.


The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

*/

class User{

    constructor(fname, lname, age, state){
        this.firstName = fname
        this.lastName = lname,
        this.age = age;
        this.state = state
    }

    // empty contsructor ( by default)
    // constructor(){

    // }

    getFullName(){
        return this.firstName + " " + this.lastName
    }


}

let user1 = new User('rahul', 'dravid', 52, 'delhi')
console.log('user1: ', user1);
console.log('getFullName: ', user1.getFullName());
