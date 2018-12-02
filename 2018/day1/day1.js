const test = "+3,\n +3,\n +4,\n -2, \n-4"

//reads input
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

//calculates final frequency
let frequency = function(data){
  //convert string input to integers and put in array
  let arr = data.split('\n').map(x => parseInt(x,10));
  let reducer = (acc, currValue) => acc + currValue;

  return arr.reduce(reducer);
}

//finds frequency dupe
let calculateFirstDupe = function(data){

  let arr = data.split('\n').map(x => parseInt(x,10));
  let length = arr.length;
  let frequency = 0;

  // Set object lets you store unique values of any type
  let frequencies = new Set([0]);


  // loop until dupe is found
  for(let x = 0 ; ; x = ((x+1) % length)){
    frequency += arr[x];

    if(frequencies.has(frequency)){
      return frequency;
    }else{
      frequencies.add(frequency);
    }
  }
}

console.log(frequency(data));
console.log(calculateFirstDupe(data));