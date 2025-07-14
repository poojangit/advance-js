//todo -----------Extending errors ---------------------

//^ Turning regular errors into powerful, custom exceptions that make your application easier to debug and maintain.

// class CustomError extends Error{
//     constructor(message){
//         super(message)
//         this.name = "CustomError"
//     }
// }

//~ Example 2

// class ValidationError extends Error {
//   constructor(field, message) {
//     super(message);
//     this.name = "ValidationError";
//     this.field = field;
//   }
// }

// // Usage
// function validateUser(user) {
//   if (!user.email.includes("@")) {
//     throw new ValidationError("email", "Email format is invalid");
//   }
// }

// try {
//   validateUser({ email: "invalidemail" });
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.error(`❌ Validation failed on ${err.field}: ${err.message}`);
//   } else {
//     console.error("Unknown error:", err);
//   }
// }

//~ Example 3

// class ValidationError extends Error {
//     constructor(message){
//         super(message)
//         this.name = "ValidationError"
//     }
// }
// try {
//     throw new ValidationError("Invalid input data")
// } catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

//~ Example 4 

function login(user){
    if(!user.email){
        throw new ValidationError("Email is required")
    }
    if(user.email !== "admin@example.com"){
        throw new AuthError("User not authorized")
    }
    return "Login successfull"
}

class AuthError extends Error {
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

class AuthError extends Error {
    constructor(message){
        super(message)
        this.name = "AuthError"
    }
}
try{
    login({email: "pooja@gmail.com"})
}catch(e) {
    if(e instanceof ValidationError){
        console.log("Validation Failed: " , e.message);
    } else if(e instanceof AuthError){
        console.log("Auth error: " , e.message); 
    } else {
        console.log("Unknown error : " , e);
    }
}