/*
JavaScript has the primitive data types:
null
undefined
boolean
number
string
symbol
bigint

complex data type  --> object.
*/

let value = 120;
value = true;
value = [1, 2, 3];
value = "Pratik";

console.log(value);

console.log(typeof (value));

//undefined type
let value1;
console.log(value1);
console.log(typeof (value1));

let value2 = null;
console.log(value2);
console.log(typeof (value2));

//floating point numbers
let price = 12.5;
let discount = 0.05;

// to get the range of the number type
console.log(Number.MAX_VALUE); // --> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // --> 5e-324


//symbol finction creates the value every time you call it
let s1 = Symbol();
console.log(Symbol() == Symbol()); 