function manyDoors(passes) {
  var doors = [];
  for(var i = 0; i < 100; ++i) {
    doors.push(false);
  }
  for (var i = 0; i <= passes; ++i) {
    if(i > 0) {
      for(var j = i - 1; j < 100; j += i) {
        doors[j] = toggleDoor(doors[j]);
      }
    }
  }
  return doors;
}

console.log(manyDoors(100));

function toggleDoor(door) {
  if(door === false) {
    return true;
  } else {return false;}
}
// for(var j = 0; j < passes; ++j) {
//   for (var k = j; k < 100; k += j) {
//     if(doors[i] === true) {
//       doors[i] === false;
//     } else {
//       doors[i] === true;
//     }
//   }
//
// }
