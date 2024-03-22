/*

The fetch() method starts the process of fetching a resource/data from a server.

The fetch() method returns a Promise


*/

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'

const promise = fetch(API_URL,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })

console.log('promise: ', promise);

promise.then((response) => {
    console.log('response: ', response);
    return response.json();
})
.then((data) =>{
    console.log('data: ', data);
})
.catch((err) => {
    console.log('err: ', err);
})
