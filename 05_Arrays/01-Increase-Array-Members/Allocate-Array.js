function solve(args) {
    let elemCount = +args[0],
        multiplier = 5,
        arr = [];

    for (let i = 0; i < elemCount; i += 1) {
        arr[i] = i * multiplier;
    }

    for (let number of arr) {
        console.log(number);
    }
}