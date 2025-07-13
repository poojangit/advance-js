//todo -------Extending built-in classes---------------

//~ Extending Array class 

class MyArray extends Array {
    first() {
        return this[0]
    }
    last() {
        return this[this.length-1]
    }
}
const arr = new MyArray(4,7,9)
console.log(arr);
console.log(arr.at());
console.log(arr.first());
console.log(arr.last());
console.log(arr instanceof MyArray);
console.log(arr instanceof Array);

//~ Extending Error for custom errors

class validationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}
const err = new validationError("Invalid data")
console.log(err.message);
console.log(err.name);
console.log(err.stack);
console.log(err.cause);

//~Extending Map

class CaseInsensitiveMap extends Map {
    set(key,value){
        return super.set(key.toLowerCase(), value)
    }
    get(key){
        return super.get(key.toLowerCase())
    }
}
const myMap = new CaseInsensitiveMap()
myMap.set("Name", "Pooja")
console.log(myMap.get("name"));





