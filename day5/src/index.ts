let age: number = 20;

if (age<50)
    age+=10;

console.log(age);


let sales : number = 1234;
let digits : number = 123_456_789;  //if there is any large digit then we can add _ to break it and make more readable
let course : String = 'TyepScript';
let isValid : boolean = true;


//we can also remove the annotations whilw decalring the variables
//as TypeScript Automatically detects its type according to values provided

let salary = 5000;
let fullname = 'pratik balkrishna lagad';
let isEmployee = true;


//if we havor on each variable we will see its type

//and what if we do not declare the value and its type?

let notebook;
//this wii give the type Any to variable notebook
//i.e if you declare a variable and dont initialse it then it will assign it to any

notebook = 1;
notebook = "tyepescript";
// so if we declare the varible and dont assign any values to it then it gets treated as any type
//later we gave values of different type to the variable notebook which is agaist the whole concept that we learned till now for the Statically typed

// so we essentially loose the property of dynamically typed feature, so it is a good practice to avoid the Any type

/*function printinfo(document){
    console.log(document);
}*/
// --> this will thorow an error as we are not defining the type of the parameter

//Arrays in TS

let arr = [1,2,3,'4'] // -> this is fine in js as arrays are dynamic in size

let numbers : number[] = [1,2,3]   
 // let arr1 : number[]=[1,2,3,4,5,'a'] --> it will throw an error as we are explicitly defining the number[]type to variable


 //and if we are maintaining the type of the elements then no need to define t expilcitly

 let arr1 = [4,5,6,7,8,9];

 //what if we have empty array
 let arr2 = [];
 //--> it will have its type as any

 //so if we are declaring an empty array then we ahve to mention its type
 let arr3 : number[] = [];

 //numbers.forEach(n=>n.)
 //-->code completion feature after the dot we can access to any of the metho which is auto generated

 //tuples
 //tuples are arrays with predefined lengths were each array has its particular type
 //we often use them as pair of values

 let student : [number, string] = [11,'Pratik'];

 // --> js  internally store our tuple as an array let student = [11, 'Pratik'];

 /*let employee : [number , string] = [123, 'das', true]

 this will immediatly throw an erroras Type '[number, string, boolean]' is not assignable to type '[number, string]'.
 Source has 3 element(s) but target allows only 2.ts(2322)*/
 
 //can access any property to the specific elemnts in the tuple
 student[1].slice
 student.push(1); // issue that can be solved in future in the TypeScript
  
 //suppose

 let product : [number,string,boolean,number]=[1,'a',true,11];

 //we cannot recognize what are these numbers actually represent
 //so tuple are only useful if we only have two values in it 

 //Enums
 //--> they are list of related constants 

 //suppose we define size of tshirts then thre are two ways to define it
 /*const small =1;
 const medium =2;
 const large = 3;*/

 enum Size {Small = 1, Medium, Large}
 let mySize : Size = Size.Medium;
 console.log(mySize);


 /* this is generated js code in index.js file
 var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
 */

function rateOfInterest( income : number){

}

//if we havor on our function we see return type as void as we are not returning any value

function rateOfInterest1( income : number){
   return 0;
}

//we can see return type as number

function rateOfInterest2( income : number) : number{
    return 11;
 }
 //here we are explicitly mentioning the return type of function

 //here we'll get warning like income is declared but its value is never changed

 /*function rateOfInterest3 (income : number) :number{
    if(income<50000)
        return income*2;
 }*/

 //if this condition becomes true then it will rwtuen the value as per the function else it will return Undefined
//to remove this bug in configuration file we have to explicitly make noImplicitReturn = true;

function rateOfInterest4 (income : number) :number{
    if(income<50000)
        return income*2;
       return income*3;
 }

 function useValue(){
    let x;
 }

 //for this unused value we have to uncommrnt noUnsedLocals = true;
 function rateOfInterest5 (income : number, taxYear : number) :number{
    if(taxYear<2025)
        return income*2;
       return income*3;
 }
rateOfInterest5(10000,2024);


//objects

let user = {id:1};

//user.name='pratik'; this is completetly valid in js but in TS we can't do it

//so if you havor to the user we got to knoe its shape

let user1 : {
    id : number, 
    userid : string
} = {id :1, userid:'pratik'};


let user2: {
    id : number, 
    userid : string
} = {id :1, userid:'pratik'};
user2.id = 2;   //here we can change the properties so to overcome this we have readonly feature


let user3 : {
    readonly id : number, 
    userid : string
} = {id :1, userid:'pratik'};
// user3.id=2;  --> we cannot modify the userId



let user4 : {
    id : number, 
    userid : string;
    retire : (date : Date) => void
} = {id :1, 
    userid:'pratik',
     retire: (date : Date) =>{
        console.log(date);
     }};



