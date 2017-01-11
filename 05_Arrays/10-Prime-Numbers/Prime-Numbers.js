"use strict";

function solve(args) {
    let num = +args[0],
        boolArr = [],
        // boolArr = Array(num + 1).fill(true),
        x = 1,
        sqrt = ~~Math.sqrt(num);

    boolArr.length = num + 1;

    for (let i = 0; i <= num; i += 1) {
        boolArr[i] = true;
    }
    // find all prime indices using sieve of Eratosthenes algo
    for (let i = 2; i <= sqrt; i += 1) {
        if (boolArr[i]) {
            let iSquare = i * i;

            for (let j = iSquare; j <= num; j = iSquare + x * i) {
                boolArr[j] = false;
                x += 1;
            }

            x = 1;
        }
    }
    // find lasgert prime which is smaller than num    
    console.log(boolArr.lastIndexOf(true));
}