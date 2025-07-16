//todo -------------Hoisting---------------------

//^ Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope (global or function) during the compilation phase — before code execution.

//~ var is hoisted

console.log(a);
var a = 100

//~ let and cost TDZ

// console.log(b);
// const b = 100

// console.log(c);
// let c = 20 

//~ Function declaration vs expression

greet(); // ✅ Works
function greet() {
  console.log("Hello!");
}

// sayHi(); // ❌ TypeError
// var sayHi = function () {
//   console.log("Hi!");
// };

//~ Hoisting inside function

function test() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); // 10
}
test();

