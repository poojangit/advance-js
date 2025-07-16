//todo ---------Currying-----------------

//^ Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
//^ Each call returns a new function that accepts the next argument

//^ Why currying is useful?
//! Partial Application - allows you to partially apply a function by fixing some of its arguments
//! Reusability
//! Function Composition
//! Improved Readability

function add(a) {
    return function(b){
        return a+b
    }
}
console.log(add(1)(2));

//~ Example 2 

function greeting(greet){
    return function(name){
        return `${greet} ${name}`
    }
}
const sayHello = greeting("Hello")
console.log(sayHello("Pooja"));

//~ Exmample 3

function shoppingPriceCalculation(basePrice){
    return function(discount){
        return function(tax){
            return function(shippingCost){
                return basePrice-discount+(basePrice*tax)+shippingCost
            }
        }
    }
}

const calculatePrice = shoppingPriceCalculation(100)
const applyDiscount = calculatePrice(20)
const applyTax = applyDiscount(5)
const finalPrice = applyTax(10)
console.log(finalPrice);
