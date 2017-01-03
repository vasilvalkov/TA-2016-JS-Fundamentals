"use strict";
function solve(args) {
    let firstArr = new Array(...args[0]),
        secondArr = new Array(...args[1]),
        len = firstArr.length < secondArr.length ? firstArr.length : secondArr.length;

    for (let i = 0; i < len; i += 1) {
        if ((i === (len - 1)) && (firstArr[i] === secondArr[i])) {
            if (firstArr.length < secondArr.length) {
                console.log('<');
                break;
            }
            if (firstArr.length > secondArr.length) {
                console.log('>');
                break;
            }
            console.log('=');
            break;
        } else if (firstArr[i] > secondArr[i]) {
            console.log('>');
            break;
        } else if (firstArr[i] < secondArr[i]) {
            console.log('<');
            break;
        }
    }
}