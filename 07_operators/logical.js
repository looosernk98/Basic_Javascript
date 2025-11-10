
// Logical operators return one of the actual operands, not always just true or false.

/*
    1️⃣ AND (&&)

    -> Evaluates from left to right
    -> Returns the first falsy value it finds
    -> If all are truthy → returns the last value


    AND(&&) possible operations:

    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false
*/

console.log(true && false) // 👉 false (found falsy value in 2nd operand, so return false value)
console.log(false && true && false) // 👉 false ((found falsy value in ist operand, so return false value))
console.log(1 && 2);       // 👉 2  (both truthy → return last)
console.log(0 && 2);       // 👉 0  (first falsy → return it)
console.log("Hello" && 5); // 👉 5  (both truthy)
console.log(null && "Hi"); // 👉 null (first falsy)




/*

    2️⃣ OR (||)

    -> Evaluates from left to right
    -> Returns the first truthy value it finds
    -> If all are falsy → returns the last value


    OR(||) possible operations:

    true || true -> true
    true || false -> true
    false || true -> true
    false || false -> false

*/

console.log(true || false) // 👉 true (found truthy value in Ist operand, so return true value)
console.log(false || true || false) // 👉 true (found truthy value in 2nd operand, so return true value)
console.log(0 || 5);          // 👉 5  (first truthy)
console.log("Hello" || 0);    // 👉 "Hello"
console.log(null || undefined); // 👉 undefined (both falsy)
console.log(false || "Hi");   // 👉 "Hi"



/*

    3️⃣ NOT (!)

    -> Always returns a boolean
    -> Converts the value to boolean, then flips it
*/

console.log(!0);       // true ( first converted 0 to boolean i.e false. Then flip that converted value ( false -> true))
console.log(!"Hello"); // false ( "Hello" -> true -> false (after flip))
console.log(!null);    // true ( null -> false -> true (after flip))

