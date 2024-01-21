
// An anonymous function is a function without a name

// using immediately invoked function
(function(name){
    console.log('name1:', name);
})('Niranjan')

// assigning a anonymous function to a variable  OR storing a anonymous function to a variable
const prinMyName = function(name){
    console.log('name2 : ', name);
}
prinMyName('Niranjan')

// using arrow function
const prinMyName2 = (name) => {
    console.log('name3: ', name);
}
prinMyName2('Niranjan')





