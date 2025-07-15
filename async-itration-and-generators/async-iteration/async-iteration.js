//todo ----------Async Iteration -------------------

//^ Async iteration allows looping over data that is asynchronously fetched, using for await...of.

//~ Example 1 

// const arr = [1,2,3,4,5]
// for(const item of arr) {
//     console.log(item);
// }
//~ Internally it works like - for...of
// const iterator = arr[Symbol.iterator](); // Get the built-in iterator
// console.log(iterator);
// console.log(iterator.next());
// let result = iterator.next();             // { value: 1, done: false }
// while (!result.done) {
//   console.log(result.value);             // Print value
//   result = iterator.next();              // Move to next
// }

//^ Async Iterable 

//* Is an object that implements the method [Symbol.asyncIterator]()
//* Returns an async iterator with a .next() that returns a Promise

const asyncIteable = {
    [Symbol.asyncIterator]() {
        let i=0
        return {
            async next() {
                if(i<3){
                    return new Promise(resolve => {
                        setTimeout(()=> resolve({value: i++, done: false}), 1000)
                    })
                }
                return {done: true}
            }
        }
    }
};
(async()=> {
    for await(const val of asyncIteable){
        console.log(val);
    }
})()

//^ Async Iteration 
//! Async iteration allows you to iterate over data that comes asynchronously, like reading chunks from a server or processing delayed user inputs.