//A function that is passed to the other function as an argument
/*what is the use of callback -->
Used to handle asynchronous operations
1.Interacting with the databases the database
2.Network request
3.Reading a file*/

helloMethod();
byeMethod();

function helloMethod(){
    setTimeout(function(){
        console.log("Hello!");
    },5000);
}


function byeMethod(){
    console.log('GoodBye!');
}

//in the above code i have written two separate function and used function hoisting to both of them and used setTimeOut Function in the hello Function
// --> this will result the output as Bye! follwed by Hello!

//so how can we overcome this order

// we can use callbacks

hello(wait)

function hello(callback){
    console.log("hello");
    callback();
}

function leave(){
    console.log('leave');
}

function wait(){
    console.log('wait');
}

function bye(){
    console.log("bye");
}

// this is callback function  output --> hello wait
//here thing to note how callback parameter is passed in the hello method without the braces while it is invoked in the function itself


//example

sum(1,2,displayResult);

function sum(x,y,callback){
    let result = x+y;
    callback(result);
}

function displayResult(result){
    console.log(result);
}