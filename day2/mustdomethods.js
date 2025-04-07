//filter method
const fruits = [
    { name: "Apple", price: 1.50 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 1.25 },
    { name: "Grapes", price: 2.00 },
    { name: "Strawberry", price: 3.50 },
    { name: "Mango", price: 2.75 },
    { name: "Watermelon", price: 4.00 },
    { name: "Pineapple", price: 3.25 },
    { name: "Kiwi", price: 2.50 },
    { name: "Blueberry", price: 4.50 }
  ]

  const filteredItems = fruits.filter((fruits)=>{
    return fruits.price>=1
  })
  
  console.log(fruits);
  console.log(filteredItems);

  //here filter method gives the additional feature of not modifying the original array.


  //map() method
 //map() does not modify the original array. It always returns a new array.
  const students = [
    { name: "Aarav", age: 20 },
    { name: "Rohan", age: 24 },
    { name: "Sneha", age: 21 },
    { name: "Vikram", age: 20 },
    { name: "Priya", age: 23 },
  ]

  const studentsName = students.map((students)=>{
    return students.name;
  })

  console.log(students);
  console.log(studentsName);


  //find() method 

  const foundName = students.find((students)=>{
    return students.name === "Vikram"
  })

  console.log(foundName);

  //forEach()

  students.forEach((students)=>{
    console.log(students.name);
  })


// some()

const underAge = students.some((students)=>{
    return students.age>=20;
})
console.log(underAge);

//every()

const adult = students.every((student)=>{
    return students.age>18;
})
console.log(adult);


