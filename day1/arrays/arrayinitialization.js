/*
arrays follow zero based indexing 
it can store digits,strings,characters,null,boolean and also contains duplicates 
arrays in js are dynamic in size
*/

//ways to declare an array


let arr = new Array();

let arr1 = new Array(10);

let arr2 = new Array(1, 2, 3, 4, 6, 5, 8, 7, 9);

let arr3 = new Array('A', 'B', 'C');

let arr4 = new Array('ram', 'sham', 'ganesh');


// you can also ommit the new keyword

let arr5 = Array();

/*
The more preferred way to create an array is to use the array literal notation:
let arrayName = [element1, element2, element3];
The array literal form uses the square brackets [] to wrap a comma-separated list of elements. */

let arr6 = [1, 2, 3, 6, 4];

let days = ['sunday', 'monday', 'thusday'];

console.log(days[1]);

