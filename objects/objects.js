//todo --------Object ------------

//^ an object is a javascript collection of properties each property has a key and value pair
//^ Ways of creating an objects\
//! Object literals
//! using new Object
//! using concstruction function
//! using class ES6
//! Using object.create()

//~ Example 1 

const person = {
    name : "Pooja",
    age : 25,
    greet: function (){
        console.log(`Hello ${this.name}`);
    }
}
person.greet()

//~ Example 2 

const employee = {
    empName : "Deepika",
    designation : "Software tester"
}
console.log(employee);

//~ Example 3 

const employee1 = new Object()
employee1["name"] = "Pooja"
employee1["designation"] = "Developer"
console.log(employee1);

//~ Example 4 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
const user1 = new Person("Yogesh", 56)
console.log(user1);

//~ Example 5 

const proto= {
    greet(){
        console.log("Hello proto"); 
    }
}
const obj = Object.create(proto)
console.log(obj);
