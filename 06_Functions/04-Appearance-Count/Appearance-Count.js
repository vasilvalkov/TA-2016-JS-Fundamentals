function solve(args) {
    let numbers = args[1].split(' ').map(x => +x),
        numberToFind = +args[2],
        occurrencesCount = 0;

    for(let num of numbers) {
        if (num === numberToFind) {
            occurrencesCount += 1;
        }
    }

    console.log(occurrencesCount);
}
solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);