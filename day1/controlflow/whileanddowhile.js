// in for loop we have initialization , condition, and iteration
// in while loop we have initialization at the start of the block then condition followed by while keyword and then iterartion inside the block
var i = 1;
while (i <= 10) {
    console.log('hello!');
    i++;
}

console.log('   ')

//do while loop
var i = 1;
do {
    console.log('hello!');
    i++;
} while (i <= 10)

//while running the code you could find out that both the loops print hello! 10 times
//only difference is suppose if you set the value of var = 11 in the do while loop then it still prints the hello! once and which is agaist the condition
//so the major difference is do while loop is excecuted at least once 