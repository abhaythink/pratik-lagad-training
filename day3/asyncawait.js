//async function always returns a promise
//await pauses its surrounding async functions untill the promise is setteled

//syntax -->
async function hello() {
  console.log("Hello");
}

//await (it can be only can be used with async functions)
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("whether data");
      resolve("success");
    }, 2000);
  });
}

//we have to write the await in 
async function getWhetherData(){
    await api(); //1
    await api(); //2
}

getWhetherData();

function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data", dataId);
        resolve("success");
      }, 2000);
    });
  }
  
 async function getAllData(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
    console.log("getting data6...");
    await getData(6);
  }

  getAllData();
 