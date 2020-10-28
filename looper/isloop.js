'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let firstRunner = linkedlist.head.next;
    let secondRunner = linkedlist.head;
    let loop = false;
    let counter = 1;

    while (!loop) {
        if (firstRunner.next !== null) {
            if (firstRunner === secondRunner) {
                return true;
            } else {
                firstRunner = firstRunner.next;
                if (counter % 2 === 0) {
                    secondRunner = secondRunner.next
                }
                counter++;
            }
        } else {
            return loop;
        }
    };
    // let current = linkedlist.head;
    // let valueStore = [];
    // while (current !== linkedlist.tail) {
    //     if (!valueStore.includes(current.value)) {
    //         valueStore.push(current.value);
    //     } else {
    //         return true
    //     }
    //     current = current.next;
    // }
    // return false
}


/*
EXTRA CREDIT:
 
Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!
 
*/
module.exports = isLoop