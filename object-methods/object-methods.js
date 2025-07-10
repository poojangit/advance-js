//todo ------Object methods----------------

//^ object methods are functions defined as properties on objects. 
//^ They allow objects to perform actions, access or modify their own data, and interact with other objects.
//~ Example 1 

const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Alice

//^ Built-in Object methods 

//! Object.key(obj)
//! Object.values(obj)
//! Object.entries(obj)
//! Object.assign(target, src)
//! Object.freeze(obj)
//! Object.seal(obj)
//! Object.create(proto)
//! Object.hasOwnProperty(key)
//! Object.defineProperty()












