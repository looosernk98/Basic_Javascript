/*
  A Set is a special type collection – “set of values” (without keys), where each 
  value may occur only once.

1. new Set([iterable]) – creates the set, and if an iterable object is provided 
                        (usually an array), copies values from it into the set.
2. set.add(value) – adds a value, returns the set itself.
3. set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
4. set.has(value) – returns true if the value exists in the set, otherwise false.
5. set.clear() – removes everything from the set.
6. set.size – is the elements count.

*/

let set = new Set();

let john = { name: "John" };
let john2 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(john2);  // in case of non-primitive, map checks address not value , but in case of primitive it compares value

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}


//We can loop over a set either with for..of or using forEach:
let setB = new Set(["oranges", "apples", "bananas"]);

for (let value of setB) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});