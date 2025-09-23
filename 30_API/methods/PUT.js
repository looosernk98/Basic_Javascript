/*

Full update / replacement of a resource.

The client sends the entire resource, not just the fields to update.

If a field is missing, it is usually replaced with null or default.

Idempotent ✅ → calling it multiple times has the same effect as calling it once.

Resource Before: 
{
  "id": 1,
  "name": "Niru",
  "age": 25
}


PUT /users/1
Content-Type: application/json

{
  "id": 1,
  "name": "Niranjan",
  "age": 26
}

Result: entire user object is replaced with this new payload.

*/

