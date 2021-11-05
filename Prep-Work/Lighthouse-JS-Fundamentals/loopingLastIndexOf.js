function lastIndexOf(arr,val){
  if(arr.length <= 0){
    return -1;
  } else {
    let index = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === val){
        index = i;
      }else if(arr[i] !== val && index === 0 && i === (arr.length - 1)){
        index = -1;
      }       
    }
    return index;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

