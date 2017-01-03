"use strict";
function solve(args) {
    let len = +args[0],
        numbersArr = args.slice(1),
        freqNum,
        times = 0,
        maxTimes = 0;

    for (let i = 0; i < len; i += 1){
        for (let num of numbersArr) {
            if (+numbersArr[i] === +num) {
                times += 1;
                if (maxTimes < times) {
                    maxTimes = times;
                    freqNum = +numbersArr[i];
                }
            }
        }

        times = 0;
    }

    console.log(`${freqNum} (${maxTimes} times)`);    
}