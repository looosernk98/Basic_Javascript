/*
  find() returns the value of the first element that passes a test.
 find() method executes a function for each array element.
 find() method returns undefined if no elements are found.
 find() method does not execute the function for empty elements.
 find() method does not change the original array.


  __________ Syntax ______________

array.find(function(currentValue, index, arr),thisValue)

 => callback
The callback is a function that executes each element of the array.
 It takes three arguments:

 (1) element = is the current element.
 (2) index = the index of the current element.
 (3) array = the array that the find() was called upon.
 (4)  array  	Optional.    The array of the current element.
 (5) thisValue	Optional.   Default undefined.
*/

let array = [3, 9, 9, 2, 3];

let findFirstEle = array.find((element) => element % 2 == 0);
console.log("findFirstEle", findFirstEle);

let arr = [
  {
    name: "niranjan",
    age: 26,
  },
  {
    name: "tanya",
    age: 21,
  },
  {
    name: "robin",
    age: 20,
  },
  {
    name: "nobita",
    age: 20,
  },
  {
    name: "nobita",
    age: 22,
  },
];

const userWithAge20 = arr.find((ele) => ele.age == 20);
console.log("userWithAge20: ", userWithAge20);

const userWithAgeAndName = arr.find(
  (ele) => ele.age == 20 && ele.name == "nobita"
); // true && true => true
console.log("userWithAgeAndName: ", userWithAgeAndName);

const users = {
  user1: {
    name: "niranjan",
    age: 26,
  },
  user2: {
    name: "tanya",
    age: 21,
  },
  user3: {
    name: "robin",
    age: 20,
  },
  user4: {
    name: "nobita",
    age: 20,
  },
  user5: {
    name: "nobita",
    age: 22,
  },
};

const userArray = Object.entries(users);
// console.log("res: ", res);

// [
//   ["user1", { name: "niranjan", age: 26 }],
//   ["user2", { name: "tanya", age: 21 }],
//   ["user3", { name: "robin", age: 20 }],
//   ["user4", { name: "nobita", age: 20 }],
//   ["user5", { name: "nobita", age: 22 }],
// ];

const userWithNameAge = userArray.find(item => item[1].name == 'nobita' && item[1].age === 20)
console.log('userWithNameAge: ', userWithNameAge);

// using object.keys and object.values
const values = Object.values(users);
console.log('values: ', values);

const _userWithNameAge = values.find(item => item.age == 20 && item.name == 'robin')

console.log('_userWithNameAge: ', _userWithNameAge);



