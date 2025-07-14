//todo --------------Promise API---------------

//^ An API (Application Programming Interface) is a set of rules and protocols that allow two software applications to communicate with each other.
//^ API (Application Programming Interface) is a way for two programs or systems to talk to each other and share data or functionality.

//^ The Promise API in JavaScript provides a powerful toolkit to handle asynchronous operations in a clean, structured way. 
//^ This includes creating, resolving, rejecting, chaining, and combining promises.

//^🔍 Real-Life Examples
//! API calls with error handling
//! Parallel loading of assets
//! Timeout logic using Promise.race
//! Retry mechanism using chained .catch()
//! Dashboard showing success/failure status of each API call using Promise.allSettled()

//~ Example - Promise api

// const userAPI = fetch("https://jsonplaceholder.typicode.com/users/1")
// Promise.all([userAPI])  
//  .then(([userRes])=> {
//     const user = userRes.json()
//     return user
//  .then((user) => {
//     console.log("User: " , user);
//  })
// }).catch((err) => console.log(err))

//~ Exampple 2 -- Promise.all

// const userAPI = fetch("https://jsonplaceholder.typicode.com/users/1")
// const postsAPI = fetch("https://jsonplaceholder.typicode.com/posts?userId=1")

// Promise.all([userAPI, postsAPI])
//  .then(async([userRes, postsRes])=> {
//     const user = await userRes.json()
//     const posts = await postsRes.json()
//     console.log("User: ", user);
//     console.log("Posts: " ,posts);
//  })
//   .catch((error) => {
//     console.error(" One of the APIs failed:", error);
//   });

//~ Example 3 -- Promise.any

// const mirror1 = fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
// const mirror2 = fetch("https://jsonplaceholder.typicode.com/404").then(res => res.json());

// Promise.any([mirror1, mirror2])
//   .then(data => console.log("🎯 First successful result:", data))
//   .catch(err => console.error("❌ All failed:", err.errors));

//~ Example 4 

// const goodAPI = fetch("https://jsonplaceholder.typicode.com/users/1");
// const badAPI = fetch("https://jsonplaceholder.typicode.com/404"); // invalid

// Promise.any([
//   goodAPI.then((res) => res.json()),
//   badAPI.then((res) => res.json()),
// ])
//   .then((data) => {
//     console.log("🎉 First success:", data);
//   })
//   .catch((error) => {
//     console.error("❌ All failed:", error);
//   });

//~ Example 5 - promise.allsettled

const validAPI = fetch("https://jsonplaceholder.typicode.com/users/1");
const invalidAPI = fetch("https://jsonplaceholder.typicode.com/invalid-url");

Promise.allSettled([
  validAPI.then((res) => res.json()),
  invalidAPI.then((res) => res.json()),
])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`✅ API ${index + 1} Success:`, result.value);
      } else {
        console.log(`❌ API ${index + 1} Failed:`, result.reason);
      }
    });
  });
