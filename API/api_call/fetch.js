/*

The fetch() method starts the process of fetching a resource/data from a server.

The fetch() method returns a Promise


*/

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'

console.log('start')

const promise = fetch(API_URL,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })

console.log('promise: ', promise);

promise.then((response) => {
console.log('promise state in then: ', promise);

    // console.log('response: ', response);
    return response.json();
})
.then((data) =>{
    console.log('data: ', data);
})
.catch((err) => {
console.log('promise state in catch: ', promise);

    console.log('err: ', err);
})

console.log('end')


// *************************** API call handling using async wait ******************

// async function getTodoDataWithID (){
//     let apiResponse = await fetch(API_URL,{
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })

//     const data = await apiResponse.json();
//     console.log('data', data)
// }

// console.log()
// getTodoDataWithID()




