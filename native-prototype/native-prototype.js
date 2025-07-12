//todo ---------Native prototype--------------

//^ Native Prototypes are the built-in prototype objects created by JavaScript for every built-in type like:
//! Objects
//! Arrays
//! Function
//! String
//! Number
//! Boolean
//! Date
//! RegExp, etc

//~ Example 1 - Object prototype

const user = {}
console.log(user.toString());

//~ Example 2 - array prototype

const arr = [1,2,3]
console.log(arr.map(x=> x*2));

//~ Example 3 - function prototype

function greet() {}
console.log(greet.call);

//~ Example 4 - Prototype chaining

const arr1 = [1,2,3]
console.log(arr1);
console.log(arr1.toString());
console.log(Object.getOwnPropertyDescriptors(arr1));
console.log(Object.getOwnPropertyNames(arr1));
console.log(Object.getPrototypeOf(arr1)); //how to see the property chain
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr1)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr1))));
const check = arr1.__proto__ === Array.prototype
console.log(arr1.__proto__);
console.log(Array.prototype);
console.log(check);
const check2 = Array.prototype.__proto__ === Object.prototype
console.log(Array.prototype.__proto__);
console.log(Object.prototype);
console.log(check2);







