//todo ---------Objects without __proto__ -------------

//^ __proto__ is a legacy accessor for viewing or setting an object’s prototype
//^ In JavaScript, most objects automatically inherit from Object.prototype via their internal [[Prototype]] link (accessed through __proto__):

//^ Why to use without __proto__
//! prevent prototype pollution
//! create a safe dictionary/object map
//! clean loops without inherited keys

//~ Example 1

const safeDict = Object.create(null)
console.log(safeDict);
safeDict["__proto__"] = "polluted?"
console.log(safeDict["__proto__"]); //safe - no inherited __proto__ so no security hole
