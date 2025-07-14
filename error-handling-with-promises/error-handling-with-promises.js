//todo --------Error handling with promises-------------

fetch("https://jsonplaceholder.typicode.com/users/invalid")
.then((res)=> {
  if(!res.ok) 
    throw new Error("Http error : " + res.status)
    return res.json()
})
.then((data) => {
    console.log("Data: " , data);
}).catch((error)=> {
    console.log(error.message);
})

//~ Example 2 

  const dataFetch =  new Promise((resolve, reject) => {
 fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => reject(err))
})
dataFetch.then((users) => console.log(users)).catch((err) => console.log("Error fetching users", err))

//~ Eaxmple 3

Promise.resolve("Start")
  .then((value) => {
    throw new Error("💥 Something broke inside .then()");
  })
  .catch((err) => {
    console.error("❌ Caught:", err.message); // 💥 Something broke...
  });
