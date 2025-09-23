/*

Partial update of a resource.

Client sends only the fields that need to be updated.

Other fields remain unchanged.

Idempotent ❌ sometimes (depends on implementation) → repeating may have side effects if server logic isn’t careful.


Resource Before: 
{
  "id": 1,
  "name": "Niru",
  "age": 25
}

PATCH /users/1
Content-Type: application/json

{
  "age": 26
}


Result: only age is updated.
name remains "Niru".
*/

const URL = 'https://jsonplaceholder.typicode.com/posts'

fetch(URL, {
    method:'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body: [],
})
