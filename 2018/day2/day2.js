//reads input
const fs = require('fs');

const data = fs.readFileSync('test.txt', 'utf8');


let checkSum = function(data){
  let countTwo = 0;
  let countThree = 0;

  //convert string input to array
  let arr = data.split('\n');
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    //checks if we should bother checking string for doubles or triples
    let dupeexists = new RegExp(/(.).*?\1/g);
    let str = arr[i];
    if(str.match(dupeexists)){
      let letters = str.split('');
      letters.some(checkdouble)
    }
  }

}


//takes in an array returns true if double letters are found
var checkdouble = function(element, idx, array){

  let lastIndex = array.lastIndexOf(element);
  let secondIndex = array.indexOf(element, idx + 1);

  return (lastIndex,secondIndex);
}

var test = ['a','b','c','d','e'];

// console.log(test.some(checkdouble));
console.log(checkSum(data));