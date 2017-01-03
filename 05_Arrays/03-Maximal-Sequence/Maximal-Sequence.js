"use strict";
function solve(args) {
    let len = +args[0],
    currentLen = 1,
    maxLen = 1;

    for (let i = 1; i < len; i += 1){
        if (+args[i] === +args[i + 1]) {
            currentLen += 1;
            if (maxLen < currentLen) {
                maxLen = currentLen;
            }
        } else {
            currentLen = 1;
        }
    }
    console.log(maxLen); 
}