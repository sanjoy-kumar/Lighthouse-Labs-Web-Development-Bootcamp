const repeatNumbers = function(data) {
  // Put your solution here
  let newString = [];
  for(let i=0; i<data.length; i++){
      let repeatString = "";
      for(let j=0; j<data[i][1]; j++){
          repeatString += data[i][0];
      }

      newString.push(repeatString);
  }
  return newString.join(", ");

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

