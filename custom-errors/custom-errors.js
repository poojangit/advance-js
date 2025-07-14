//todo -----------Custom Errors----------------------

//^ Custom errors are user-defined error classes that extend the built-in Error class

//~ Example 1

// class ValidationError extends Error {
//     constructor(message){
//         super(message)
//         this.name = "ValidationError"
//     }
// }
// throw new ValidationError("Invalid email format")

//~ Example 2

class APIError extends Error {
    constructor(status, message){
        super(message)
        this.name = "APIError"
        this.status = status
    }
}
async function fetchUser(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        throw new APIError(res.status, "Failed to fetch user")
    }
    return await res.json()
}
fetchUser(288)
.then((user)=> console.log("User", user))
.catch((err) => {
    if(err instanceof APIError){
        console.error(`API error ${err.status}: `, err.message);
    } else {
        console.error("Unkown Error: " , err);
        
    }
})