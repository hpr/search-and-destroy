'use strict';

// Complete this algo
const minJumps = arr => {
  let jumper = 0;
  let jumps = 0;
  while (jumper < arr.length - 1) {
    let max = arr[jumper];
    for (let i = jumper; i < jumper + arr[jumper]; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }
    jumper = max;
    jumps++;
    if (jumper >= arr.length - 1) return jumps;
    jumper += arr[max];
    jumps++;
  }
  return jumps;
};

module.exports = minJumps;
