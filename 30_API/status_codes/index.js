/*

HTTP response status codes indicate whether a specific HTTP request has been 
successfully completed. Responses are grouped in five classes:

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)


*/

// 100, 101, 102, 200, 201, 202, 204, 300, 301,302, 400, 401, 403,404, 500, 501

/*

=========================== Informational Codes (1xx) ========================

100 Continue: Server received the headers and the client should continue sending the 
              request body (useful for large uploads).

101 Switching Protocols: Client asked to switch protocols (e.g., HTTP → WebSocket) 
                         and the server agrees.
                         
=========================== Success Codes (2xx) ========================

200 OK : Standard response for a successful HTTP request.

201 Created: Indicates a new resource has been successfully created, often used 
             in POST requests.
             
204 No Content: Request was successful, but there’s no content to send in response. 
               Often used in DELETE requests.

=========================== Redirection Codes (3xx) =======================

301 Moved Permanently: The resource has been moved to a new URL permanently; 
                      the client should update its request.
302 Found: The resource is temporarily located at a different URL; the client 
           should use this URL for now.
304 Not Modified: Used for caching; indicates that the resource hasn’t changed 
                 since the last request.


=========================== Client Error Codes (4xx) =======================

400 Bad Request: The server could not understand the request due to invalid 
                 syntax; usually a client error.
401 Unauthorized: Authentication is required and has either failed or not been 
                 provided.
403 Forbidden: The server understands the request but refuses to authorize 
               it (usually due to permissions).
404 Not Found: The server couldn’t find the requested resource; common when an 
               endpoint or URL is incorrect.
405 Method Not Allowed: The request method is known by the server but not allowed 
                   for the requested resource (e.g., PUT on a GET-only endpoint).
429 Too Many Requests: The user has sent too many requests in a given amount of 
                    time; rate limiting is applied.


=========================== Server Error Codes (5xx) =======================

500 Internal Server Error: A generic error message when the server encounters an 
                         unexpected condition.
502 Bad Gateway: The server, while acting as a gateway or proxy, received an 
                 invalid response from an upstream server.
503 Service Unavailable: The server cannot handle the request due to temporary 
                 overload or maintenance.
504 Gateway Timeout: The server, acting as a gateway, did not receive a timely 
                  response from an upstream server.
*/