//todo ------ Garbage collection -------------

//^ Garbage Collection (GC) in JavaScript is the process of automatically freeing memory that is no longer in use, so your application doesn’t run out of memory over time.

let user = {
  name: "Alice"
};

user = null; // 🚮 Now the object is unreachable and will be garbage collected

//^ Garbage collection works internally through mark and sweep algorithm
//^ WeakSet and WeakMap dont prevent garbage collection
