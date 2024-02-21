//https://javascript.info/localstorage
//https://blog.logrocket.com/localstorage-javascript-complete-guide/
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

// ****************** Local Storage ************************

/*
The localStorage object allows you to save key/value pairs in the browser.

The localStorage object stores data with no expiration date

The data is not deleted when the browser or tab is closed , and are available for future sessions.

*/

// ***************** Session Storage **************************

/*
sessionStorage is similar to localStorage; 
the difference is that while data in localStorage doesn't expire, 
data in sessionStorage is cleared when the page session ends.

Whenever a document is loaded in a particular tab in the browser, a unique page
session gets created and assigned to that particular tab. That page session
is valid only for that particular tab.

A page session lasts as long as the tab or the browser is open, and survives
over page reloads and restores.

Opening a page in a new tab or window creates a new session with the value of 
the top-level browsing context, which differs from how session cookies work.

Opening multiple tabs/windows with the same URL creates sessionStorage 
for each tab/window.

Duplicating a tab copies the tab's sessionStorage into the new tab.
But it is shared between iframes in the same tab (assuming they come from the same origin).
*/

// Both storage objects provide the same methods and properties:

// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

/* 
 storage = { 
      key1 : value1 ,
      key2: value2,
      length: 2
    }

*/

// primitive data type - string, boolean, number etc
const isUserLoggedIn = false;
const userId = 123;
const state = "delhi";

localStorage.setItem("isLoggedIn", isUserLoggedIn); // 'isLoggedIn' : 'false'
localStorage.setItem("userId", userId); // 'userId' : '123'
localStorage.setItem("state", state); // 'state' : 'delhi'

const isUserLoggedInFromStorage = localStorage.getItem("isLoggedIn");
console.log("isUserLoggedInFromStorage: ", typeof isUserLoggedInFromStorage);

const isUserLoggedInActual = Boolean(isUserLoggedInFromStorage);
console.log("isUserLoggedInActual: ", isUserLoggedInActual);

const userIdFromStorage = localStorage.getItem("userId");
console.log("userIdFromStorage: ", typeof userIdFromStorage);

const userIdActual = Number(userIdFromStorage);
console.log("userIdActual: ", userIdActual);

const stateFromStorage = localStorage.getItem("state");
console.log("stateFromStorage: ", typeof stateFromStorage);

// non-primitive data types - arrays, objects
const userDetails = {
  id: 123,
  fullname: "messi",
  isLoggedIn: false,
};

// always use JSON.stringify() to convert non-primitive(arrays, objects) values in strings to store in local storage
// always use JSON.parse() to convert string values(coming from storage) to actual data type ( arrays, objects)

localStorage.setItem("user-details", JSON.stringify(userDetails));

const userDetailsFromStorage = localStorage.getItem("user-details");
console.log("userDetailsFromStorage: ", userDetailsFromStorage);
const actualUserDetails = JSON.parse(userDetailsFromStorage);
console.log("actualUserDetails: ", actualUserDetails);

//*****************************************************************/

// object like access
// We can also use a plain object way of getting/setting keys, like this:
console.log('userId by dot accessor', localStorage?.userId); // not recoommended

// loclstoarge is object
console.log("localStorage", localStorage);

// delete a key 
localStorage.removeItem('state')
console.log("localStorage", localStorage);

// clear all data in storage
// localStorage.clear()

// getting key at particular index

const keyAt2 = localStorage.key(2);
console.log('keyAt2: ', keyAt2);

// length property of storage
console.log('length' , localStorage.length);


// storage event
// looping over storage
// advantages & disadvantages



//****************************************************************/

// NOTE : exmaple remains same for session storage just replace localStorage from sessionStorage
