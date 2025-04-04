let a = 1;
let b = 2;

setTimeout(function(){
    console.log('Asynchronous code')
},100)    //setTimeOut is a asynchronous function which sets the delay time here we have set it ana 100ms

fetch('/').then(function(){
    console.log("Fetch");
})

console.log("Synchronous");
console.log(a);
console.log(b);