'use strict';

// Complete this algo
const minJumps = arr => {
    let currentIdx = 0;
    let currentNumber = arr[currentIdx]
    let counter = 0;

    if (currentNumber >= arr.length) {
        return 1
    } else {
        while (currentIdx + currentNumber < arr.length) {
            for (let i = currentIdx + 1; i < currentIdx + currentNumber-1; i++) {
                let maxNumber = 0;
                if (arr[i] > maxNumber) {
                    maxNumber = arr[i];
                    currentIdx = maxNumber;
                }
            }
            currentIdx += currentNumber;
            counter +=1;
        }
    }
    return counter;
};

module.exports = minJumps