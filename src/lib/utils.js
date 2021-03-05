const _ = require("lodash");  

function sort(array){
  return _.sortBy(array);
}

function customSort(array){
  for(let b=0; b<array.length;b++){
    for(let s=0; s< array.length-b-1; s++){
      if(array[s]> array[s+1]){
        let temporal=array[s];
        array[s]=array[s+1];
        array[s+1]=temporal;
      }
    }
  }
  return array;
}

function log(obj){
  console.log(obj);
}

export { sort,customSort,log };