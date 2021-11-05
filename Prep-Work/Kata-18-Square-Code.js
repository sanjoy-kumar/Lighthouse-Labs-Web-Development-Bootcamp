const squareCode = function(message) {
  
  let output = '';
  let line = '';
  let lineArr = [];

  message = message.replace(/ /g, '');

  for (let i = 0; i < message.length; i++) {

    if (line.length === Math.ceil(Math.sqrt(message.length))) {
      lineArr.push(line);
      line = '';
    }

    line += message[i];
  }
  
  lineArr.push(line);

  for (let j = 0; j < lineArr[0].length; j++) {

    for (let k = 0; k < lineArr.length; k++) {

      if (lineArr[k].length > j) {
        output += lineArr[k][j];
      }

    }

    output += ' ';
  }

  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

