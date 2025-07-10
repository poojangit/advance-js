//todo -----Classes------------

//^ A class is a blueprint for creating objects with predefined properties and methods.

// class Person {
//     constructor(name , age) {
//         this.name = name 
//         this.age = age
//     }
//     greet() {
//         console.log(`Hello I'm ${this.name}`); 
//     }
// }
// console.log(person.name);
// person.greet()

//~ Example 2 

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    displayProduct() {
        console.log(`Product ${this.name}`);
        console.log(`price : $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price*salesTax)
    }
}
const salestax = 0.07
const product1 = new Product("Chips", 30.268)
const product2 = new Product("Chocolate" , 100.76)
product1.displayProduct()
product2.displayProduct()

const total = product1.calculateTotal(salestax)
console.log(total.toFixed(2));

//~ Example 3 - without classes

function Person(name){
    this.name = name
}
Person.prototype.greet = function(){
    console.log("Hi, " + this.name); 
}
const person = new Person("Pooja");
console.log(person);
person.greet()

