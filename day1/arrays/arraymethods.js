//supoose you want to find length of a declared array then 

let arr = [1, 2, 3, 4, 5, 6, 9, 8, 7];
console.log(arr.length);

//if you want to add the element at the end of the array
arr.push(10);
console.log(arr);

//if you wnat to add the element at start of the array
arr.unshift(0);
console.log(arr);


// to remove the character from the end of the array
let arr1 = ['a', 'b', 'c', 'd'];
const removedChar = arr1.pop();
console.log(arr1);
console.log(removedChar);

// to remove the character from the start of the array
let arr2 = ['a', 'b', 'c', 'd'];
const removedChar2 = arr1.shift();
console.log(arr1);
console.log(removedChar2);


//to find index of the particular element from the array
let index = arr.indexOf('c');
console.log(index);


//to remove the elements between the certain indices
let fruits = ['banana', 'kiwi', 'apple'];
fruits.splice(1, 2);
console.log(fruits);

//to sort the array
let digits = [1, 5, 3, 4, 6, 2];
digits.sort();
console.log(digits);

//to reverse an array
let digits1 = [1, 2, 3, 4, 5];
digits1.reverse();
console.log(digits1);


//to concat the two array
let number = [1, 2, 3];
let combinednumbers = number.concat([4, 5]);
console.log(number)
console.log(combinednumbers);

//to slice the array(excludes the last index)
let slicedarray = number.slice(1, 2);
console.log(slicedarray);

//to join every element with certain char
let joinedstring = number.join('-');
console.log(joinedstring);

//array destructuring 
let numbers = [1, 2, 3, 4];
let [a, b, c, d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//does it contain the specific element or not
let list = [1, 2, 5, 9, 3];
list.includes(7);

//notice that the methods like push pop shift unshift changes the given array while proceding


//Multidimensional Arrays 
//You can have arrays within the arrays

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = [7, 8, 9];
//this will convert the array into mulltidimensional array
var e = [x, y, z];
console.log(e[0]);
console.log(e[1][2]);
