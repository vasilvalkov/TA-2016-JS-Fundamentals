function solve(args) {
    var number = +args[0],
        numbers = '';

    for (var i = 1; i <= number; i += 1){
        numbers += i + ' ';
    }

    return numbers;
}