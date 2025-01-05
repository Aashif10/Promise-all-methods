//! 1. Promise.all
//^ Resoles  only all promise in the iterable resoles, but if any promise rejects,
//^ the retured reject promise immediately with the reason of the first rejected promise.

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.reject("An Error Occurred!");
// const promise3 = Promise.resolve(20);

// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//     console.log(result)
//     }).catch((error) => {
//     console.log("Error:",error)
// })

// ! 2. Promise.allSetlled
//^ Resoles all promise in the iterable are setlled(either resoled or rejected)
//^ does not short - curcuit on rejected.
//^ when you want all the result all promise regardless of whether they succed or fails.

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.reject("An Error Occurred!");
// const promise3 = Promise.resolve(20);

// Promise.allSettled([promise1, promise2, promise3])
//     .then((result) => {
//     console.log(result)
//     }).catch((error) => {
//     console.log("Error:",error)
// })

//! 3.Promise.any
//^ Promise.any used to resolves iterable promise if any one promise resolves
//^ after that all promise ignored.only the first iterable resolves promise
//^ considered.

// const promise1 = Promise.reject(10);
// const promise2 = Promise.reject("An Error Occurred!");
// const promise3 = Promise.resolve(20);

// Promise.any([promise1, promise2, promise3])
//     .then((result) => {
//     console.log(result)
//     }).catch((error) => {
//     console.log("Error:",error)
// })


//! 4.Promise.race
//^  promise.race is static method of the promise object that takes an iterable promise
//^  and returns a single promise this promise reject or resolves as soon as the first promise
//^  in the  setlleds (either rejected or resolves).

const promise1 = Promise.reject("Reject first promise")
const promise2 = Promise.reject("An Error Occurred!");
const promise3 = Promise.resolve(20);

Promise.race([promise1, promise2, promise3])
    .then((result) => {
    console.log(result)
    }).catch((error) => {
    console.log("Error:",error)
})