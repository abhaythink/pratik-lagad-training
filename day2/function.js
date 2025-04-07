//function declaration
function functionName(){

}



//function statement --> the whole declaratio
function a(){
    console.log("a is called");
}
let b = a();

//function expression
//we can assign a value to a function 
var c = function(){
   console.log('c is called');
}

//then what will be the difference between satetement and expression 
// --> hoisting 
//we cannot use function expression in  hoisting

//parameterized functions
function sayHello(name) {
    console.log('hello ! ' + name);
}
sayHello('Pratik');

//function declaration --> it is nothing but function statement



//Anonymous functions
// the following code will result as an syntax error
/*then what is the use of anonymous functions 
i.e. it can be used as value for another function

function () {

}
*/
a();
c(); //-> will throw an error

//named function expression
//same as the function expression but uses named function instead of the anonymous function

var d = function e(){
    console.log('e is called');
}


//first class functions
// the ability of the function to be used as a argument for the other function

var f = function(param1,param2){
   console.log(param1);
}
f(function(){

}, function g(){
    
})


//return function
function addSum(a,b){
    return a+b;
}
let ans = addSum(1,2);
console.log(ans);


