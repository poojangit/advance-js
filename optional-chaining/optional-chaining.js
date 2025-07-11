//todo ---------Optional Chaining-------------------

//^ optional chaining is a feature introduced in ES2020
//^ it allows to safely access deeply nested object properties without having to check if each reference in the chain is null/undefined
//^ The ?. operator short-circuits and returns undefined if any part of the chain is null or undefined, instead of throwing a runtime error.

//^ When to use? 
//! Accessing deeply nested objects
//! Working with dynamic or Api data

//^ Why to use? 
//! Avoid runtime error
//! clean and readable code 

//~ Without optional chaining

// const user = {}
// const street = user.address.street
// console.log(street);

//~ With optional chaining

// const user = {}
// const street = user?.address?.street
// console.log(street);

//~ Access object properties

const bike ={
    brand : "Honda"
}
console.log(bike.brand);
console.log(bike?.model?.name);

//~ Access array elements

// const users = null
// console.log(user?.[0]);

//~ Dynamic Property access

const key = "info"
const data = null
console.log(data?.key[0]);

//~ Example 1 

// const res = {
//   data: {
//     user: {
//       address: null
//     }
//   }
// };

// console.log(res?.data?.user?.address?.city); // ✅ undefined

//~ Example 2 

const user = {
    profile : {
        name : null
    }
}
const name = user?.profile?.name ?? "Guest"
console.log(name);

//~ Example 3

async function fetchUserDetails() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        console.log(response);
        const data = await response.json()
        console.log(data);
        const name = data?.name ?? "No name available"
        const userName = data?.username ?? "No username"
        const email = data?.email ?? "no email"
        const address = data?.address?.city ?? "No address"
        console.log(`Name: ${name}`);
        console.log(`Username : ${userName}`);
        console.log(`Email : ${email}`);
        console.log(`Address : ${address}`);

    } catch(error) {
        console.error("Failed to fetch : " + error);
        
    }
}
fetchUserDetails()