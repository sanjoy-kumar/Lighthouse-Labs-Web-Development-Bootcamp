const blocksAway = function(directions) {
  
  let drivingAngle;
  let currentLocation = {east: 0, north: 0};

  for (let i = 0; i < directions.length; i += 2) {

    // determine drivingAngle
    if (drivingAngle === undefined) {
      if (directions[i] === 'right') drivingAngle = 0;
      else drivingAngle = 90;

    } else if (directions[i] === 'right') {
      drivingAngle -= 90;

    } else if (directions[i] === 'left') {
      drivingAngle += 90;
    }

    // adjust drivingAngle if it's not within 0-359 degrees
    if (drivingAngle < 0) {
      drivingAngle += 360;
    } else if (drivingAngle > 359) {
      drivingAngle -= 360;
    }

    // set currentLocation
    if (drivingAngle === 0) {
      currentLocation.east += directions[i + 1];

    } else if (drivingAngle === 90) {
      currentLocation.north += directions[i + 1];

    } else if (drivingAngle === 180) {
      currentLocation.east -= directions[i + 1];

    } else if (drivingAngle === 270) {
      currentLocation.north -= directions[i + 1];

    }

  }

  return currentLocation;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


