//closure = {function + reqd data}
//reqd data canm be called as lexical scope and surrounding

//let us understand closure with following code snippet

function outerFunction(){
    let name = "pratik";
    function innerFunction(){
        console.log(name);
    }
    innerFunction();
}
outerFunction();

//this function will print --> pratik

//so can i say if the given outerFunction() executes then it will free up the memory for variable name 

//we can understand the closure with idea 
//suppose the memory is being freed after execution inside the functionand we are calling that function only then will it work or it will give the respective output

function one(){
    let value = 5;
    function two(){
        console.log(value);
    }
    return two;
}
let inner = one();
inner();

//this will print 5 
//so what we are thinking earlier will conflict from it 

//thats were closure comes into the picture

//we can address colure as whenever there is a scenario of the nested functions the function is binds together to its required data or lexical scope
//and due to this we get our reqd output