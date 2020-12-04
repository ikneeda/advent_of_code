//reads input
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

let twoSum = function(input, target){
  let dataNumsArr = input.split('\n').map(Number);
  let result;
  for(let i=0; i<dataNumsArr.length; i++){
    let currentNum = dataNumsArr[i]
    let diff = (target - currentNum)
    if(dataNumsArr.includes(diff)){
      return result = (diff * currentNum)   
    }
  }
}

let threeSum = function(input,target){

  let dataNumsArr = input.split('\n').map(Number);
  let result;

  for(let i=0; i<dataNumsArr.length; i++){
    let currentNum = dataNumsArr[i]
    let diff = (2020 - currentNum)

    if(twoSum(data,diff)){
      return result = currentNum * twoSum(data,diff)
    }
  }
}


console.log(threeSum(data,2020));