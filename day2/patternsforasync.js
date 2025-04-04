/*
console.log("before");
getMessage();
console.log('after');

function getMessage(){
    setTimeout(function(){
        console.log("printing the statement")
    },2000);
}
*/


// --> output: 
/*
before 
after
printing the statements
*/


console.log("before");
const message = getMessage();
console.log(message);
console.log('after');

function getMessage(){
    setTimeout(function(){
        console.log("printing the statement")
    },2000);
}

/*
output -->
before
undefined
after
printing the statement
*/


//callback
//promises
//async