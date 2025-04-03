
//break statement terminates the loop if the condition is met
var num = 10;
for (let i = 0; i <= num; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}


//continue statement skips the certain condition

var num = 5;
for (let i = 0; i <= num; i++) {

    if (i == 2) {
        continue;
    }
    console.log(i);
}

