function solve(args) {
    var len = args.length,
        currentNumberIndex = 0,
        min = 10000,
        max = -10000,
        sum = 0,
        number;

    do {
        number = +args[currentNumberIndex];

        if (min > number) {
            min = number;
        }
        if (max < number) {
            max = number;
        }

        sum += number;
        currentNumberIndex += 1;
    } while (currentNumberIndex != len);

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + (sum / len).toFixed(2));
}