//reads input
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

//part1
let treeCounter = function(map,right,down){
  let mapArray = map.trim().split('\n');
  let treesNum = 0;
  let mapHeight = mapArray.length
  let mapWidth = mapArray[0].length
  let x = 0


  for(let y = 0; y < mapHeight;){
    //if tree
    if (mapArray[y][x] == "#") treesNum ++

    //x stays smaller than width
    x =(x+right) % mapWidth
    y = y+down

  }
  return treesNum 
}

let treePart2 = function(map){
  return treeCounter(map,3,1) 
         * treeCounter(map,1,1) 
         * treeCounter(map,5,1) 
         * treeCounter(map,7,1)
         * treeCounter(map,1,2)
}

console.log(treePart2(data))