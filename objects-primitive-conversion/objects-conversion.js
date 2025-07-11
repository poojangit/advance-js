//todo --------Objects to primitive conversion ---------------------

//^ In JavaScript, when you try to use an object like a primitive (e.g., in string concatenation, comparisons, arithmetic), the JS engine automatically converts the object to a primitive value like a string, number, or boolean.

//^ How js converts an objects to primitive
//! 📍 Priority Order:
//! Check if obj[Symbol.toPrimitive] is defined
//! If not, use obj.valueOf()
//! If still not primitive, use obj.toString()

//~ Example 1
const obj = {
    toString() {
        return "Im an Object"
    },
    valueOf() {
        return 42
    }
}
console.log(String(obj));
console.log(Number(obj));
console.log(obj+8);

//~ Example 2

const user = {
    name : "Pooja",
    age : 24,
    [Symbol.toPrimitive](hint){
        if(hint === "string"){
            return `User : ${this.name}`
        }
        if(hint === "number"){
            return this.age
        }
        return this.name
    }
}
console.log(String(user));
console.log(Number(user));
console.log(user + " Smith");


