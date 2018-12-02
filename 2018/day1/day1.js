const test = "+3, +3, +4, -2, -4"

//reads input
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

//initialize frequency
let freq = 0;

let frequency = function(data){
  //convert string input to integers and put in array
  const arr = data.split('\n').map(x => parseInt(x,10));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return arr.reduce(reducer);
}

let calculateFirstDuplicateFreq = function(data){

  let frequencies = [];
  const arr = data.split('\n').map(x => parseInt(x,10));

  //pushes unique frequencies to list 
  const pushFreq = (accumulator, currentValue) => {
    frequencies.push(accumulator);
    console.log(frequencies);
    return accumulator + currentValue;
  }
 }

console.log(frequency(test));
console.log(calculateFirstDuplicateFreq(test));