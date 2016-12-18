function solve(args) {
    var input = +args[0],
        sub = Math.floor(input / 100),
        thirdDigit = sub % 10;

    if(args[0].length >= 3){
        console.log(thirdDigit == '7' 
                    ? 'true' 
                    : 'false ' + thirdDigit.toFixed(0));
    } else {
        console.log('false 0');
    }
}