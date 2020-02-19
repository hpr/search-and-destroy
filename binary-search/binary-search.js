'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((end - start) / 2 + start);
  while (end - start > 2) {
    if (target < array[mid]) {
      end = mid;
    } else {
      start = mid;
    }
    mid = Math.floor((end - start) / 2 + start);
  }
  return array[mid] === target || array[mid+1] === target || array[mid-1] === target;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
