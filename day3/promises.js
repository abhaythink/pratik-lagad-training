//promises are "eventual" completion of task
//it is an object in JS
//they are solution to the Callback Hell

//defination-->
/*promises are a way to handle asynchronous operations. 
A promise represents a value that might not be available yet but will be resolved 
in the future—either successfully or with an error.
Think of a promise like a contract that you make with the program: "I promise to give you a result later." Here's how it works:
*/

//Syntax

let promise = new Promise((resolve, reject) => {});

//resolve and reject are callbacks provided by js

let promise1 = new Promise((resolve, reject) => {
  console.log("i am a promise");
  resolve("success!");
  console.log(promise);
});

//there are three states of promises
//1.Pending 2.Fulfilled(rejected) 3.Rejected
//if we run the code then we will see the output as --> Promise { <pending> }

let promise2 = new Promise((resolve, reject) => {
  resolve("success");
});
console.log(promise2);

//here we know that the resolve is the callback provided by the JS so th o/p will be i am a promise
/*Promise { <pending> }
Promise { 'success' }*/

/*let promise3 = new Promise((resolve,reject)=>{
    reject("some error");
})
console.log(promise3);*/

function getData(dataId, getNextData) {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

//js promise objects can be
/*pending: the result is undefined 
resolved: the result is a value fulfilled    resolve(result)
rejected: the result is an error object   reject(error)*/

//how to use promises
/*
syntax
.then()
promise.then((res)=>{...})
.catch()
promise.catch((res)=>{...})*/

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("success!");
  });
};

const getPromise1 = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    reject("error");
  });
};

let promise4 = getPromise();
promise4
  .then(() => {
    console.log("promise fulfilled");
  })
  .catch(() => {
    console.log("promise rejected");
  });

let promise5 = getPromise1();
promise5
  .then(() => {
    console.log("promise fulfilled");
  })
  .catch(() => {
    console.log("rejected");
  });

//promises chaining
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("fetching data2...");
  return asyncFunc2();
})
  .then((res) => {
    console.log("Both data fetching is done.");
  })
  .catch((err) => {
    console.log("An error occurred: ", err);
  });


//example 2
//promises chaining
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});
myPromise
  .then((result) => {
    console.log(result); // if resolved --> "Operation was successful!"
  })
  .catch((error) => {
    console.log(error); // if rejected --> "Operation failed!"
  });



  let myPromise1 = new Promise((resolve, reject) => {
    let success = true; 
    if(success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed.");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result);  
    })
    .catch(error => {
      console.log(error); 
    })
    .finally(() => {
      console.log("Promise has been handled.");  // This will run no matter the outcome.
    });
  
