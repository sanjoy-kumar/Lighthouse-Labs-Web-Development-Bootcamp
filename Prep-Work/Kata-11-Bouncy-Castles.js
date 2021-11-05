// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  let volume1 =0.0;
  volume1 = (4/3)*PI*radius*radius*radius;
  return volume1;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let volume2 = 0.0;
  volume2 = PI*radius*radius*(height/3);
  return volume2;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let volume3 = 0.0;
  volume3 = height*width*depth;
  return volume3;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total = 0.0;
  for(let i=0; i<solids.length; i++){
      if(solids[i].type === "sphere"){
        total += sphereVolume(solids[i].radius);        
      }else if(solids[i] === "cone"){
        total += sphereVolume(solids[i].radius,solids[i].height);          
      }else{

      }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

