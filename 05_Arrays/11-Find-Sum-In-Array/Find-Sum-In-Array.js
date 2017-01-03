"use strict";

function solve(sum, args) {
    let numbers = args.slice(),
        sequence = [],
        currentSum = 0,
        sumReachedAtIndex = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        currentSum += numbers[i];

        if (currentSum > sum) {
            currentSum = numbers[i];
        }
        if (currentSum === sum) {
            currentSum = 0;
            sumReachedAtIndex = i;
            break;
        }
    }

    while (currentSum < sum) {
        currentSum += numbers[sumReachedAtIndex];
        sequence.push(numbers[sumReachedAtIndex]);
        sumReachedAtIndex -= 1;
    }

    sequence.reverse();

    console.log(sequence);    
}
solve(11, [4, 3, 1, 4, 2, 5, 8]);