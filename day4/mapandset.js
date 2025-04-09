//Set in JS
const arr = [1,2,3,4,5,2,1,3,4];
const myset = new Set(arr);
console.log(arr);
console.log(myset);

const uniquearray = [...myset];    // ---> called as spead syntax property
console.log(uniquearray);

//methods for a set 
//add method
//(it can add number, string, an object, an array)
myset.add(6);
console.log(myset);

myset.add('6');
console.log(myset);

myset.add({name : 'Pratik'});
console.log(myset);

myset.add([1,2,3]);
console.log(myset);

//delete method
myset.delete('6');
console.log(myset);

//has method
console.log(myset.has(5));
console.log(myset.has('6'));

//size method
console.log(myset.size);

//clear method
myset.clear();
console.log(myset);


//Map in JS 

//declaration

const mymap = new Map([ ['name','Pratik'],['middle name','Balkrishna'],['surname','Lagad'] ]);
console.log(mymap);

//problem arised
const myobject = {};

const a = {};
const b = {};
 
myobject[a]='a';
console.log(myobject); // -->{ '[object Object]': 'a' }

myobject[b]='b';
console.log(myobject); // --> { '[object Object]': 'b' }   --> so from the output you can see that value of a is completely overwritten by b



//how it can be resolved with the help of map
const map2 = new Map([[a, 'a'],[b , 'b']]);
console.log(map2);    // ->Map(2) { {} => 'a', {} => 'b' }  here map keeps track of both key objects


//different methods that Map offers

const map3 = new Map([[1,'A'],[2,'B']]);

console.log(map3);

//map has set method to add an key value pair
map3.set(3,'C');
console.log(map3);


