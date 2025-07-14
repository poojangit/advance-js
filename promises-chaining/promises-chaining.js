//todo ---------Promise Chaining------------

//^ Promise chaining allows you to perform a series of asynchronous operations, one after another, in a clean and readable way.
//^ Promise chaining means calling .then() on a promise and returning another promise or value from it.
//^ This allows running async tasks in sequence.

//~ Syntax

// function doSomething() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve({ id: 1, name: "Pooja" }), 1000);
//   });
// }

// function doSomethingElse(user) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 1 complete:", user);
//       resolve({ ...user, email: "pooja@example.com" });
//     }, 1000);
//   });
// }

// function doThirdThing(updatedUser) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 2 complete:", updatedUser);
//       resolve(`Welcome ${updatedUser.name} (${updatedUser.email})`);
//     }, 1000);
//   });
// }

// Chaining Promises
// doSomething()
//   .then(result => doSomethingElse(result))
//   .then(newResult => doThirdThing(newResult))
//   .then(finalResult => {
//     console.log("Final:", finalResult);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


//~ Example 2

// function fetchUser(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("user fetched");
//             resolve({id: userId, name : "Pooja"})
//         }, 1000);
//     })
// }
// function fetchPostsByUser(userId){
//     return new Promise((resolve) => {
//         setTimeout(()=> {
//             console.log("Posts fetched");
//              resolve([
//         { id: 101, title: "Post 1" },
//         { id: 102, title: "Post 2" },
//       ]);
//         })
//     })
// }

// function fetchCommentsByPost(postId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(" Comments fetched");
//       resolve([
//         { id: 1, comment: "Nice post!" },
//         { id: 2, comment: "Thanks for sharing!" },
//       ]);
//     }, 1000);
//   });
// }

// Promise chaining starts here
// fetchUser(1)
//   .then((user) => {
//     console.log("User:", user);
//     return fetchPostsByUser(user.id);
//   })
//   .then((posts) => {
//     console.log("Posts:", posts);
//     const firstPost = posts[0];
//     return fetchCommentsByPost(firstPost.id);
//   })
//   .then((comments) => {
//     console.log("Comments:", comments);
//   })
//   .catch((error) => {
//     console.error(" Error occurred:", error);
//   })
//   .finally(() => {
//     console.log("All operations complete");
//   });

//~ Example 3 :

const promiseChain = new Promise((resolve, reject)=> {
  resolve(10)
})
promiseChain.then((number) => {
  console.log(`fisrt - ${number}`)
  return number*2 ;
}).then((number)=> {
  console.log(`second - ${number}`);
}).catch((error) => {
  console.log(error);
})