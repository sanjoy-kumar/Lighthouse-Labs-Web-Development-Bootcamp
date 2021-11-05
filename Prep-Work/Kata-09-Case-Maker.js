const camelCase = function(input) {
  return str.split(' ').map((word, ind) => {
    if (ind === 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  }).join('');
  
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
