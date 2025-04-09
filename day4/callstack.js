let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2);

console.log(result1);
console.log(result2);


//code to understand how call stack works in js

function one(){
    console.log('method one');
}
function two (){
    console.log("method two");
}
function three (){
    console.log('method three');
}

one();
two();
three();


console.log('   ')

function first(){
    console.log('first method');
    second();
}
function second (){
    console.log("second method");
    third();
}
function third (){
    console.log('third method');
}

first(); 

/* output -->
first method
second method
third method
*/


//




