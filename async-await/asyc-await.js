//todo ----------Async/await--------------------

//^ async and await are syntactic sugar introduced in ES2017 (ES8) to make working with Promises easier.
//^ They allow you to write asynchronous code that looks synchronous.
//^ Under the hood, they still use Promises.

//^ async and await are modern JavaScript keywords used to handle asynchronous operations more cleanly than using .then() or .catch() chains with Promises.

//^ 🔑 Why use async / await?
//! Makes asynchronous code look like synchronous code
//! Easier to read and maintain
//! Better error handling using try/catch
//! Avoids callback hell and complex Promise chains

//~ Example 1

// async function fetchUser() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/2")
        // console.log(response);
//         const user = await response.json()
//         console.log(user);
//     }catch (error)
//     {
//         console.log(error.message);
//     }
// }
// fetchUser()

//~ Example 2 

// async function getData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log("Data:", data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getData()

//~ Example 3

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// delay(1000).then(()=> {
//     console.log("1 second passed");
//     return delay(1000)
// }).then(() => {
//     console.log("2 seconds passed");
// })

//? with async/await

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function waitSteps(){
//     await delay(1000)
//     console.log("1 second passed")
//     await delay(1000)
//     console.log("2 seconds passed")
// }
// waitSteps()

//~ Example 4 - Mupltiple api calls in parallel

// function fetchData() {
//     Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/posts"),
//         fetch("https://jsonplaceholder.typicode.com/users")
//     ])
//     .then(([postsRes, usersRes])=> Promise.all([postsRes.json(), usersRes.json()]))
//     .then(([posts, users]) => {
//         console.log("Posts: ", posts);
//         console.log("Users: ", users);
//     }).catch(err => console.error("Error: ", err))
// }
// fetchData()

async function fetchData() {
    try{
    const [postres, userRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ])
    const[posts, users] = await Promise.all([postres.json(), userRes.json()])
    console.log("Post: ", posts);
    console.log('users: ', users);
} catch(error){
    console.error("Error: ", error);
}
}
fetchData()