//there are two ways to declare an object
//1.as a literal //2.as a constructor
//singleton --> it is a single object of its own type
//if we declare the object as a literal then it is NOT registered as singleton (singleton objects are only created when declared with the help of cinstructor )

/*
In JavaScript, an object is an unordered collection of key-value pairs. 
Each key-value pair is called a property.

The value of a property can be any value, e.g., a string, a number, an array, and even a function.
*/

//Types of object creation
//singlton -->
//Object.create

//literal --> how to declate objects using string literal

let employee = {};

let oder = {
  name: "order1",
  id: 123,
};

//how to declare a symbol
const mySym = Symbol("key1");
const mySym1 = Symbol("key2");

let user = {
  name: "Pratik",
  "full name": "Pratik Balkrishna Lagad",
  mySym: "mykey1",
  [mySym1]: "mykey2",
  age: 24,
  organizatin: "Thinkitive",
  email: "pratik.lagad@thinkitive.com",
};

//How to access the object
console.log(user.name);
console.log(user["name"]); //new property to learn (we can access the keys or values with [" xyz"])
console.log(user["email"]);

//what is the purpose of this
//see in the user object that we have declared full name as a string thus there is no point of accessing it with the . property
// console.log(user.full name) -->
console.log(user["full name"]);
console.log(user.mySym);
console.log(typeof user.mySym); //it will return string as an output instead of returnning a symbil
console.log(user[mySym1]);
console.log(typeof mySym1); // this syntax will return the ouptput as a Symbol

//how to overwrite values

user.email = "pratiklagad@gmail.com";
console.log(user); // here you will see the updated user email in console

//suppose you want to terminate the object and it wont modify in the future then
//Object.freeze(user);
user.email = "pratiklagadfirst@gmail.com";
console.log(user);
// here in the output you wont see the modified email

user.sayHello = function () {
  console.log("hello from user");
};

user.sayHello1 = function () {
  console.log(`hello from user, ${this.email}`);
};

console.log(user.sayHello); // --> it will print [Function (anonymous)]
console.log(user.sayHello()); // --> it will print -  hello from user
// undefined

console.log(user.sayHello());
console.log(user.sayHello1());

//const instaUser = new Object();

const instaUser = {};
instaUser.name = "pratik";
instaUser.password = "123456";
instaUser.isLoggedIn = false;

console.log(instaUser);

const regularUser = {
  email: "anyuser@gmail.com",
  fullname: {
    userfullname: {
      firstName: "Pratik",
      lastName: "Lagad",
    },
  },
};

console.log(regularUser.fullname); // --> { userfullname: { firstName: 'Pratik', lastName: 'Lagad' } }
console.log(regularUser.fullname.userfullname.firstName); // --> Pratik

//console.log(regularUser.fullname?.userfullname.firstName);   --> there is concept of optional chaining with ? which will ease our work of adding if else

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = {obj1 , obj2};
//const obj3 = Object.assign({},obj1,obj2);   // --> this is an optional parameter but recommended syntax to be followed
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// --> { obj1: { '1{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
