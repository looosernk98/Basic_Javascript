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