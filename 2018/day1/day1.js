const test = "+3,\n +3,\n +4,\n -2, \n-4"

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
  let arr = data.split('\n').map(x => parseInt(x,10));

  //continue to process data until duplicate frequency is found

  //find all the frquencies first time
  const findFreq = (accumulator, currentValue, currentIndex, array) => {
    frequencies.push(accumulator);
    return accumulator + currentValue
  };

  arr.reduce(findFreq);
  return frequencies;

 }

console.log(frequency(test));
console.log(calculateFirstDuplicateFreq(test));