//todo -----------Promises--------------

//^ Promises is an Object that represent eventual completion or failure of an asynchrous operation
//^ promise utility methods 
//^ These are the static methods on the Promise constructor used to handle the multiple promises in parallel
//! Promise.all()
//! Promise.allSettled
//! Promise.race()
//! Promise.any()

//~ Example 

const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task Complete!")
        reject("Something went wrong")
    }, 1000)
})
task.then((result) => console.log(result)).catch((err)=> console.log(err)).finally(() => console.log("done"))

//~ Example 2 - Promise all
//^ Waits for all suceed - If one fails whole thing fails
const p1 = Promise.resolve("First resolved")
// const p2 = Promise.resolve("Second resolved")
const p2 = Promise.reject("Second resolved")
const p3 = Promise.resolve("third resolved")

Promise.all([p1,p2,p3])
 .then((results) => {
    console.log("All done: ", results)
 }).catch((err) => {
    console.error("One failed: ", err);
 })

 //~ Example 3 - Promise.race
 //^ The first settled wins (success or failure)

const fast = new Promise((res, reject) => setTimeout(()=> reject("Fast"), 1000))
const slow = new Promise((res) => setTimeout(()=> res("Slow"), 1000))

Promise.race([fast,slow]).then((result) => console.log("Winner: " + result))

//~ Example 4 - Promise.allSettled
//^ Wait for all, regardless of pass/fail

const p4 = Promise.resolve("✅ A");
const p5 = Promise.reject("❌ B failed");
const p6 = Promise.resolve("✅ C");

Promise.allSettled([p4, p5, p6])
  .then((results) => {
    console.log("📦 All Settled:");
    results.forEach((r) => console.log(r.status, r.value || r.reason));
  });

//~ Example 4 - Promise.any()

//^ Wait for the first fulfilled

const p8 = Promise.reject("❌ Fail A");
const p9 = new Promise((res) => setTimeout(() => res("✅ B"), 1000));
const p10 = new Promise((res) => setTimeout(() => res("✅ C"), 2000));

Promise.any([p8, p9, p10])
  .then((result) => {
    console.log("🎯 First success:", result); // ✅ B
  })
  .catch((err) => {
    console.error("❌ All failed:", err.errors);
  });
