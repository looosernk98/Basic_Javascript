// Diff b/w require and import
/*

 ======================= require ==================

Module System: require is part of the CommonJS module system, which is used in 
                environments like Node.js.
Loading Style: require loads modules synchronously, meaning it blocks the 
               execution until the module is loaded. This can be inefficient for 
               larger modules but is generally fine in a server-side environment like Node.js.
Usage: You use require to import modules or packages.
Example:

const fs = require('fs'); // Importing the 'fs' module in Node.js
const myModule = require('./myModule'); // Importing a local module

Dynamic Loading: You can conditionally load modules using require at runtime.

    if (condition) {
      const module = require('some-module');
    }

 ======================= import ==================
 
Module System: import is part of the ES6 (ECMAScript 2015) module system. It is 
              commonly used in modern JavaScript, especially for frontend 
              development in browsers and supported environments.
Loading Style: import uses static loading, meaning that the imports are read 
              and loaded at compile time, not runtime. This helps optimize 
              bundling and tree-shaking (removing unused code) in modern JavaScript frameworks and tools like Webpack.
Usage: You use import to load ES6 modules.
Example:

import fs from 'fs'; // Importing the 'fs' module (may need configuration in Node.js)
import myModule from './myModule.js'; // Importing a local ES6 module

Dynamic Loading: You can use import() for dynamic, asynchronous module loading:

    if (condition) {
    import('some-module').then(module => {
        // Use the module
    });
    }

*/