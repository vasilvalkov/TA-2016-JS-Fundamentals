"use strict";
function solve(args) {
    let len = +args[0],
        x = +args[len + 1],
        inputArr = args.slice(1, len + 1),
        index = -1,
        left = 0,
        right = inputArr.length - 1,
        mid;
    // sort array
    for (let i = 0; i < len - 1; i += 1){
        for (let j = 1; j < len; j += 1){
            if (+inputArr[i] < +inputArr[i - 1]) {
                let temp = inputArr[i];
                inputArr[i] = inputArr[i - 1];
                inputArr[i - 1] = temp;
            }
        }
    }   
    // binary search
    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (+inputArr[mid] === x) {
            index = mid; break;
        } else {
            if (+inputArr[mid] < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }  
        }
    }

    console.log(index);
}