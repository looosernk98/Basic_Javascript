/*

 POST is used to send data to a server to create/update a resource.

 The type of the body of the request is indicated by the Content-Type header.

*/

const URL = 'https://jsonplaceholder.typicode.com/posts'

fetch(URL, {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: [],
})
