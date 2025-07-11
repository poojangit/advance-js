//todo --- Property flags and descriptors----

//^ Every property in a JavaScript object has hidden metadata, called property descriptors or flags, that control:
//! Can it be changed? - writable
//! Can it be seen in a loop? - enumerable
//! Can it be deleted? - configurable

//~ View Property Descriptor

const user1 = {
    name : "Pooja"
}
console.log(Object.getOwnPropertyDescriptor(user1, "name"));

//~ Change Property Desciptors

const user = {}
Object.defineProperty(user, "name", {
    value : "Pooja",
    writable : false,
    enumerable : false,
    configurable : false
})
console.log(user.name);
user.name = "Preethi"
console.log(user.name);

for(let key in user) {
    console.log(key);
}
delete user.name