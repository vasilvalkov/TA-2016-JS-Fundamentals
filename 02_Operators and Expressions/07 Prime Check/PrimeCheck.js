function solve(args) {
    var input = +args[0],
        isPrime = true;

    if (input === 1 ||
        (input != 2 && input % 2 === 0) ||
        (input != 3 && input % 3 === 0) ||
        (input != 5 && input % 5 === 0) ||
        (input != 7 && input % 7 === 0)) {
        isPrime = false;
    }
    
    return isPrime;
}