'use strict';

// Complete this algo


const binarySearch = (array,target) => {
	console.log
	let lowIndex = 0;
	let highIndex = array.length-1;
	while ((highIndex-lowIndex > 1)) {
		let middleIndex = Math.floor((lowIndex + highIndex)/2)
		if(target === array[middleIndex]) {
			return true;
		} 
		else if (target > array[middleIndex]) {
			lowIndex = middleIndex;
		} else {
			highIndex = middleIndex
		}
	}
	if(target === array[highIndex] || target === array[lowIndex]) {
		return true;
	}
	return false;
}








// const binarySearch = (array, target) => {
// 	let halfLength = Math.floor(array.length/2)
// 	if(target === array[halfLength]) {
// 		return true;
// 	}
// 	else if (target > array[halfLength]) {
// 		let newArray = array.splice(halfLength,array.length-1)
// 		newIndex = (halfLength + array.length)/2
// 		if(newArray.length >= 1) {
// 			return binarySearch(newArray,target)
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		let newArray = array.splice(0,halfLength)
// 		if (newArray.length >= 1) {
// 			return binarySearch(newArray,target)
// 		} else {
// 			return false;
// 		}
// 	}
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch