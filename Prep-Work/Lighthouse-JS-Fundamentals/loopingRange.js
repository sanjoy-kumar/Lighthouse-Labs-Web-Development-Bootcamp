function range(start, end, step){
  let arr = [];
  if(start > end || step <= 0){
    return [];
  } else {
    for(let i = start; i <= end; i = i + step ){
      arr.push(i);   
    }
  }

  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, -6, 3));
console.log(range(-5, 2, 0));
console.log(range(-5, 2, -1));

