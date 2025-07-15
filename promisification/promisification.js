//todo -----------Promisification------------------

//^ Promisification is the process of converting a function that uses callbacks into one that returns a Promise, making it easier to work with using async/await or .then() chaining.

//~ Example 1 

function delayPromise(duration) {
    return new Promise((resolve, reject) => {
        delayCallback(duration,(err, result)=> {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

function delayCallback(duration, callback){
    setTimeout(()=> {
        callback(null, `waited for ${duration}ms`)
    }, duration)
}
delayPromise(1000).then(console.log).catch(console.error)

//~ Example 2 

function wait(ms, callback) {
    setTimeout(()=> {
        callback(null, `Waited for ${ms}ms`)
    },ms)
}
function waitPromise(ms){
    return new Promise((resolve, reject) => {
        wait(ms, (err, result)=> {
            if(err){
                return reject(err)
            } else {
                resolve(result)
            }
        })
    })
}
// waitPromise(2000).then(console.log)
(async() => {
    const result = await waitPromise(2000)
    console.log(result);
})()

//~ Example 3

function saveToStorage(data, callback) {
  try {
    localStorage.setItem("cart", JSON.stringify(data));
    callback(null, "Saved");
  } catch (e) {
    callback(e);
  }
}

// 🔁 Promisify
function saveToStoragePromise(data) {
  return new Promise((resolve, reject) => {
    saveToStorage(data, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

// ✅ Usage
(async () => {
  const cart = [{ id: 1, name: "Phone", qty: 2 }];
  await saveToStoragePromise(cart);
  console.log("Cart saved successfully!");
})();
