const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
const finalPosition = function (moves) {
  // North Direction => y = +1;
  // South Direction => y = -1;
  // East Direction  => x = +1;
  // West Direction  => x = -1;
  let x = 0;
  let y = 0;
  for(const move of moves){
    if(move === 'north'){
      y += 1;
    } else if(move === 'south'){
      y += -1;
    } else if(move === 'west'){
      x += -1;
    } else if(move === 'east'){
      x += 1;
    }
  }
  return [x,y];

}

console.log(finalPosition(moves));
