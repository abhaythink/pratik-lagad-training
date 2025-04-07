function getData(dataId) {
  setTimeout(() => {
    console.log("Data", dataId);
  }, 5000);
}
getData(1);
getData(2);
getData(3);

//so we have set timer of 5 sec to the above code
// and one thing to understand here is all the ouput lines will print exactly after five seconds one by one

//so if we wanted to print the lines one after another but there should be dalay of five seconds after each function call then how will do it.

// --> CALLBACK HELL

function getData(dataId , getNextData) {
  setTimeout(() => {
    console.log("Data", dataId);
    if (getNextData){
      getNextData();
    }
  }, 5000);
}
getData(1, ()=>{
  console.log('getting data 2 ...');
  getData(2, ()=>{
    console.log('getting data 3 ...');
    getData(3, ()=>{
      console.log('getting data 4 ...');
      getData(4)
    })
  })
})

//here we acheived the solution to the problem that we disscussed inthe above comments
//but there lot of complex code 
//ie nested callbacks stacked below one another forming a pyramis is callback hell
//this style of programming is difficult to understand and manage
// and to overcome these difficulties we have promises