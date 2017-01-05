function solve(args) {
    let inputNum = args[0],
        len = inputNum.length,
        num = +inputNum[len - 1];
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    
    return words[num];    
}
solve(['42']);