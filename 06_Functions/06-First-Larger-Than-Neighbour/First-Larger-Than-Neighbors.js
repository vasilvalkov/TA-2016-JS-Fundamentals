function solve(args) {
    let numbers = args[1].split(' ').map(x => +x),
        len = numbers.length,
        index = -1;

    for (let i = 1; i < len - 1; i += 1) {
        if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
            index = i;
            break;
        }
    }

    return index;
}
solve(['6', '-26 -25 -28 31 2 27']);