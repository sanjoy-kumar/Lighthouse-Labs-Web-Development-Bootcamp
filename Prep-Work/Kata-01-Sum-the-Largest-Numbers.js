const sumLargestNumbers = function(data) {
  // Put your solution here
  const sum = 0.0;
  let done = false; 
  while (!done) { 
      done = true; 
      for (let i=1; i<data.length; i++)
      {
          if(data[i - 1] > data[i]){
              done = false; 
              let tmp = data[i - 1]; 
              data[i - 1] = data[i]; 
              data[i] = tmp;
          }
      }
}
let count = data.length;
sum = data[count-2] + data[count-1];
return sum; 
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

