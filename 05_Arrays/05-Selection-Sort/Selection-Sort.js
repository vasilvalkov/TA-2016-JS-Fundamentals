"use strict";
function solve(args) {
    let len = +args[0],
        sortedArr = args.slice(1),
        iMin;

    for (let i = 0; i < len; i += 1){
        // define selection start
        iMin = i;
        // find index of the smallest element int the selection from i to end
        for (let j = i + 1; j < len; j += 1){
            if (+sortedArr[iMin] > +sortedArr[j]) {
                iMin = j;
            }
        }
        // swap element i with smallest element in selection
        if (iMin != i) {
            let temp = sortedArr[i];
            sortedArr[i] = sortedArr[iMin];
            sortedArr[iMin] = temp;
        }
    }

    for (let num of sortedArr) {
        console.log(num);
    }
}