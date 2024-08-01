// map  and multiply *2 ?
// const arr = [1, 2, 3, 4, 5];
// const double = arr.map(function(elem){
//     return elem * 2;
// })
// console.log(double)


// use filter methhod to filter data 
// const A = [1, 2, 3, 4, 5];
// const b = A.filter(function(elem){
//     if (elem % 2 === 0 ){
//         return elem ;
//     }
// })
// console.log(b)


// use reducing method 
// Get user input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by semicolons: ', (userInput) => {
  const numbers = userInput.split(';').map(Number);

  const sum = numbers.reduce((acc, current) => acc + current, 0);

  console.log(`The sum is: ${sum}`);

  rl.close();
});


