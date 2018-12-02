//reads input
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

//initialize frequency
let freq = 0;

let calculateFreq = function(data){
  //convert string input to integers and put in array
  const arr = data.split('\n').map(x => parseInt(x,10));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let frequency = arr.reduce(reducer);
  return frequency;
}
console.log(calculateFreq(data));