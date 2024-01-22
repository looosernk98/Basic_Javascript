let arr = [1, 2, { name: "alex", age: 23}, "Hello world!", 'A', true]

console.log(arr.length);

let arr2 = [ [1, 2], ['hi', 'bye'], { name: "alex", age: 23}, 90, false]

console.log(arr2.length)

console.log(arr[2].age)
let innerArr = arr2[1]
console.log('innerArr: ', innerArr);
console.log(innerArr[1])