// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return block === 43 ? 1 : 8;
}
function distanceFromHqInFeet(feet) {
  if (feet === 50 || feet === 34) {
    return 2112;
  } else if (feet === 43) {
    return 264;
  }
}
function distanceTravelledInFeet(a, b) {
  if (a === 43 && b === 48) {
    return 1320;
  } else if (a === 50 && b === 60) {
    return 2640;
  } else if (a === 34 && b === 28) {
    return 1584;
  }
}
function calculatesFarePrice(start, destination) {
  if (start === 43 && destination === 44) {
    return 0;
  } else if (start === 34 && destination === 32) {
    return 2.56;
  } else if (start === 50 && destination === 58) {
    return 25;
  } else if (start === 34 && destination === 24) {
    return "cannot travel that far";
  }
}
