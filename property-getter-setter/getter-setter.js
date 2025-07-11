//todo ----------Property getter and setter-------------

//^ Getters (get) and Setters (set) are special functions that allow you to define:
//^ Custom behavior when a property is read or written
//^ Instead of just storing a value, the property is calculated or validated
//^ get - triggers a function when property is read
//^ set - triggers a function when property is written

//~ Eaxmple 1 

const obj = {
    firstName : "Pooja",
    lastName : "N G",
    get fullName() {
        return this.firstName + " " + this.lastName
    },
    set fullName(value){
        const parts = value.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}
console.log(obj.fullName);
obj.fullName = "Preethi zinta"
console.log(obj.fullName);

//~ Example 2 

const user = {
    firstName : "Pooja",
    lastName : "Ganapathi"
}
Object.defineProperty(user, "fullName", {
    get() {
        return this.firstName + " " + this.lastName
    },
    set(value){
        const parts = value.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
})
console.log(user.fullName);
