/*
💡 What Object.assign() does:

 -> It copies properties from one or more source objects (car, user) into a target object ({ a: 10 }).
 -> If duplicate keys exist, the last one wins (overwrites the previous).

*/

const car = {
    name: "kia sonet",
    model: "HTX",
    warranty: {
        start: "2021",
        end: "2025"
    }
}

const user={
    name: "peter",
    age: 26,
}

const obj = Object.assign({a:10}, car, user);
console.log(obj)


// =================== Shallow copy only =====================
const obj2 = { name: "Niranjan", nested: { age: 25 } };

const copy = Object.assign({}, obj2);

copy.nested.age = 30;

console.log(obj2.nested.age); // 30 (❌ changed original too)

// 👉 Object.assign() only makes a shallow copy (nested objects are still references).
