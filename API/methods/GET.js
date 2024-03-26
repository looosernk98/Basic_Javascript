

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'


fetch(API_URL,{
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
    data: {}
})

// dynamic url
const URL = `api/v1/user/${id}`

// queryparams
const name = 'rohan';
const age = 21;
const URLS = `api/v1/users/?name=${name}&age=${age}`
