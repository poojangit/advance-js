// import _ from 'lodash';
//todo --------------Object References and copying (Deep and shallow copy)

//^ Object references 
//* In javascript non-primitive values are stored and passed by reference

//~ Example 1

const obj1 = {name : "Pooja"}
const obj2 = obj1
obj2.name = "Preethi"
console.log(obj1);
console.log(obj1===obj2);


//^ Object copying ----
//* Object copying means creating a new object with a same content
//*  Types 2 - Shallow copy and deep copy
//^ Shallow copy --
//* copying only the first level of objects and nested objects stays linked
//^ deep copy --
//* copies entire object structure recursively including nested objects

//^ Shallow copy - dublicates only the top level properties of an object
//^ methods used -
//* Spread operator : {...obj}
//* object.assign({}, obj)

const original = {a : 10, b: {
    c : 20
}}
const shallow = {...original}
console.log(shallow);
shallow.b.c = 1000
console.log(original.b.c)

//^ Deep copy - deep copy dublicates everything inclusing the nested objects, without the shared references
//^ Methods used -
//* structuredclone()
//* JSON.parse(JSON.stringify(obj))
//* Libraries like Lodash - _.cloneDeep(obj)

const deep = structuredClone(original)
deep.b.c = 100
console.log(original.b.c);
console.log(deep.b.c);

//~ Example 1 

const user = {
    name : "Pooja",
    age : 20
}
const shallow1 = {...user}
shallow1.age = 30
console.log(shallow1.age);
console.log(user.age);

//~ Example 2 

const person2 = {
    name : "Pachu",
    address : {
        city : "Bengaluru", 
        pincode : 576124
    }
}
const shallow2 = {...person2}
// shallow2.address.city = "perdoor"
// console.log(shallow2.address.city);
// console.log(person2.address.city); //! Shallow copy fails because address is still a shared reference 
const deep2 = structuredClone(person2)
deep2.address.city = "perdoor"
console.log(deep2.address.city);
console.log(person2.address.city);

//~ Example 3 

const obj = {
    name : "Pooja",
    createdAt : new Date(),
    greet : function () {
        console.log('Hi');
    }
}
const jsonCopy = JSON.parse(JSON.stringify(obj))
console.log(obj);
console.log(jsonCopy);
console.log(jsonCopy.createdAt); //! becomes a string
console.log(jsonCopy.greet) //! Undefined

//~ Example 4

const config = {darkMode : true}
const configShallow = Object.assign({}, config)
console.log(config);
console.log(configShallow);

//~ Example 5 using lodash

function deepCloneWithFunctions(obj){
    if (obj === null || typeof obj !== "object"){
        return obj
    }
    const clone = Array.isArray(obj) ? [] : {}
    for(const key in obj){
        const value = obj[key]
        clone[key] = typeof value === "object"
         ? deepCloneWithFunctions(value) 
         : value
    }
    return clone
}


const car = {
    carName : "Alto",
    vehicleDetails : function() {
       const carNumber = "KA252"
       const  ownerName = "Pooja"
        return carNumber + "Owner Name : " + ownerName
    }
}
// const carDeepcopy = structuredClone(car)
// const carDeepcopy = JSON.parse(JSON.stringify(car))
// carDeepcopy.vehicleDetails.ownerName = "Vinay"

const carDeepcopy = deepCloneWithFunctions(car)
console.log(carDeepcopy);

// const carDeepcopy1 = _.cloneDeepWith(car, (value) => {
//     if(typeof value === "function")
//         return value
// })
// console.log(carDeepcopy1.vehicleDetails());
