<!-- https://medium.com/sessionstack-blog/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec -->

<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management -->



## Stack Memory:

Stores: Primitive values and references to objects.
Size: Limited and fixed.
Speed: Faster access.
Memory management: Automatic (LIFO).


## Heap Memory:

Stores: Objects, functions, and dynamically allocated data.
Size: Larger and dynamically managed.
Speed: Slower access.
Memory management: Automatic garbage collection but can lead to memory leaks if not handled properly.


### Memory Life Cycle
Here is an overview of what happens at each step of the cycle:

1. `Allocate memory` — memory is allocated by the operating system which allows your program to use it. In low-level languages (e.g. C) this is an explicit operation that you as a developer should handle. In high-level languages, however, this is taken care of for you.

2. `Use memory` — this is the time when your program actually makes use of the previously allocated memory. Read and write operations are taking place as you’re using the allocated variables in your code.

3. `Release memory` — now is the time to release the entire memory that you don’t need so that it can become free and available again. As with the Allocate memory operation, this one is explicit in low-level languages.


## Best Practices for Memory Management

Use let/const (avoid accidental globals).
Clear intervals/timeouts when not needed (clearInterval, clearTimeout).
Remove event listeners when elements are removed.
Be careful with closures holding large data.
Use tools like Chrome DevTools → Memory tab to profile memory usage.


