//todo ------Inheritance------------

//^ Inheritance is when one object or class gets access to the properties and methods of another.
//^ JavaScript supports prototype-based inheritance — meaning objects inherit from other objects via a chain called the prototype chain.

//~ Prototype based inheritance - pre-ES6 

function Animal(name) {
    this.name = name
}
Animal.prototype.speak = function() {
    console.log(`${this.name} is Speaking`);
}
function Dog(name){
    Animal.call(this, name)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function() {
    console.log(`${this.name} barks`)
}
const d = new Dog("Brownie")
d.speak()
d.bark()

//~ class based 

class Animal1 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog1 extends Animal1 {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog1("Bruno");
dog.speak(); // Bruno makes a noise
dog.bark();  // Bruno barks

//~ Example 2 

class User {
    constructor(name, email){
        this.name = name 
        this.email = email
    }
    login() {
        return `${this.name} logged in with the email ${this.email}`
    }
    logout() {
        return `${this.name} logged out`
    }
}
class Admin extends User {
    constructor(name, email, role){
        super(name, email)
        this.role = role
    }
    //ovreriding
    login() {
        return `Admin ${super.login()} (Role: ${this.role})`
    }
    logout() {
        return `Admin ${super.logout()} (Role: ${this.role})`
    }
}
const user = new User("Pooja", "pooja@gmail.com")
console.log(user.login());
console.log(user.logout());

const admin = new Admin("Deepika", "deepa@gmail.com", "superadmin")
console.log(admin.login());
console.log(admin.logout());

