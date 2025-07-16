//todo ---------------Callback------------------

//^ A callback is a function passed as an argument to another function to be executed later, usually after an operation completes.

//~ Example 1

function greet(name, callback){
    console.log(`Hello ${name}`);
    callback()
}

function sayBi() {
    console.log("Bye for today");
}
greet("Pooja", sayBi)

//~ Example 2

function getUserDetails(id, callback){
    setTimeout(()=> {
      console.log("Hello Pooja");
      const user = {id, name: "Pooja"}
      callback(user)
    }, 1000)
}
function displayUser(user){
    console.log(`${user.name} are you busy today?`);
}
getUserDetails(1, displayUser)

//~ Example 3

function fetchAndThen(api, onSuccess, onError) {
  setTimeout(() => {
    const fakeData = { name: "Pooja" };
    const success = true;
    if (success) {
      onSuccess(fakeData);
    } else {
      onError("Error fetching data");
    }
  }, 1000);
}

fetchAndThen(
  "https://api.example.com",
  (data) => console.log("✅ Got data:", data),
  (err) => console.error("❌ Failed:", err)
);
