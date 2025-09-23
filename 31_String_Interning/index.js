/*

🔹 What is String Interning?

Interning = storing only one copy of each unique string value in memory.

If multiple variables use the same string literal (e.g., "hello"), they all point 
to the same memory location in the string pool, instead of duplicating "hello" 
every time.

This saves memory and makes equality checks faster.

*/
let a = "hello";
let b = "hello";
console.log(a === b); // true

// Both a and b don’t store "hello" separately.
// Instead, JavaScript puts "hello" in a string pool (managed by the JS engine, e.g., V8).
// Then both a and b point to the same memory address for "hello".

/*

📦 Memory View:

String Pool:
   "hello" ──> 0x9k

Variables:
   a ──> 0x9k
   b ──> 0x9k

*/

/*

🔹 Why does this work only for primitives like strings?

-> Strings in JavaScript are immutable.
    - "hello" can never be changed in place.
    - If you do a = "world", it just makes a point to a new string "world", 
      leaving "hello" untouched.

-> Since strings never change, sharing one memory copy is safe.


===========================================================================

If objects were interned the same way, modifying one would mess up all 
references → which is why objects aren’t pooled.

let a = "hello";
let b = "hello";
b = "world";

console.log(a); // "hello"
console.log(b); // "world"


String Pool:
   "hello" ──> 0x9k
   "world" ──> 0xAk

Variables:
   a ──> 0x9k ("hello")
   b ──> 0xAk ("world")


🔹 Benefits of String Interning

-> Memory efficiency → only one copy of each literal.
-> Fast equality checks →
   -> a === b can often be checked by comparing pointers (addresses), not every 
      character.
   -> Much faster for long strings.


*/


/*
🔹 Important Nuance in JavaScript

-> String literals ("hello", 'hello', `hello`) are interned automatically.
-> Dynamically created strings (like from new String("hello") or string operations) 
   may not be pooled unless explicitly optimized by the engine.

*/

let x = "hello";
let y = "hel" + "lo"; // compile-time concat → interned
console.log(x === y); // true

let z = "hel";
z = z + "lo";         // runtime concat → may create a new string
console.log(x === z); // true (value) but engine may optimize differently

