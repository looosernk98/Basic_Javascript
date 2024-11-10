/*

Map is a collection of keyed data items, just like an Object. 
But the main difference is that Map allows keys of any type.

Methods and properties are:

1. new Map() – creates the map.
2. map.set(key, value) – stores the value by the key.
3. map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
4. map.has(key) – returns true if the key exists, false otherwise.
5. map.delete(key) – removes the element (the key/value pair) by the key.
6. map.clear() – removes everything from the map.
7. map.size – returns the current element count.

*/

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log('map: ', map);

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3


// Every map.set call returns the map itself, so we can “chain” the calls:
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');


//The iteration goes in the same order as the values were inserted. Map 
// preserves this order, unlike a regular Object.

map.forEach((value, key, map) => {
  console.log('key: ', key);
  console.log('value: ', value);
})