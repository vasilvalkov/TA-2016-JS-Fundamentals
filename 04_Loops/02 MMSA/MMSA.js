function solve(args) {
    var len = args.length ,
        min = 10000,
        max = -10000,
        sum = 0,
        number;

    for (var i = 0; i < len; i += 1) {
        number = +args[i];

        if (min > number) {
            min = number;
        }
        if (max < number) {
            max = number;
        }

        sum += number;
    }

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + (sum / len).toFixed(2));
}