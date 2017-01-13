function solve(args) {
    let opening = 0,
        closing = 0;

    for (let symbol of args[0]) {
        if (symbol === '(') {
            opening += 1;
        }
        if (symbol === ')') {
            closing += 1;
        }
    }

    console.log(opening === closing ? 'Correct' : 'Incorrect');
}
solve(['((a+b)/5-d)']);
solve([')(a+b))']);