//reads input
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

//part1
let passwordValidator = function(input){
  let passwordList = input.trim().split('\n');
  let validPasswordsNum = 0;
  for(let i=0; i < passwordList.length; i++){
    let currLine = passwordList[i]
    let policyMin = parseInt(currLine.split(" ")[0].split("-")[0])
    let policyMax = parseInt(currLine.split(" ")[0].split("-")[1])
    let letter = currLine.split(" ")[1][0]
    let password = currLine.split(" ")[2]
    const re = new RegExp(letter,'g')
    if(password.match(re)){
      if(password.match(re).length >=  policyMin && password.match(re).length <=  policyMax){
        validPasswordsNum+=1
      }
    }
  }
  return validPasswordsNum 
}


let passwordValidator2 = function(input){
  let passwordList = input.trim().split('\n');
  let validPasswordsNum = 0;
  for(let i=0; i < passwordList.length; i++){
    let currLine = passwordList[i]
    let pos1 = parseInt(currLine.split(" ")[0].split("-")[0])
    let pos2 = parseInt(currLine.split(" ")[0].split("-")[1])
    let letter = currLine.split(" ")[1][0]
    let passwordChars = (currLine.split(" ")[2]).split("")
    if(passwordChars[pos1-1] == letter && passwordChars[pos2-1] != letter ||
       passwordChars[pos1-1] != letter && passwordChars[pos2-1] == letter){
      validPasswordsNum+=1;
    }
  }
  return validPasswordsNum 
}
console.log(passwordValidator2(data));