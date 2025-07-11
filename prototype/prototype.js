//todo ---------Prototype------------

//^ ✅ Every object has a hidden internal property called [[Prototype]], which refers to another object.
//^ That other object is called the prototype.
//^ It acts like a backup object, where JavaScript looks for properties or methods if they’re not found on the original object.

//! __proto__	The actual prototype of an object
//! prototype	The property used on constructor functions to define shared methods

//^ 🧩 How to Access/Set Prototypes
//! Object.getPrototypeOf(obj)	Get the prototype of obj
//! Object.setPrototypeOf(obj, proto)	Set the prototype of obj
//! Object.create(proto)	Create a new object with given prototype

//~ Example 1 

const user = {
    greet() {
        return "Hello!"
    }
}
const admin = {
    __proto__ : user
}
console.log(admin.greet());

//~ Example 2

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, I'm ${this.name}`;
};

const user1 = new User("Pooja");
console.log(user1.sayHi()); // "Hi, I’m Pooja"
