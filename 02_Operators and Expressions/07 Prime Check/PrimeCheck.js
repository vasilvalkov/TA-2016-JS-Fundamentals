function solve(args) {
    var input = +args[0],
        isPrime = true;

    if(input > 1){
        var maxDivider = Math.sqrt(input);

        for(var i = 2; i <= maxDivider; i += 1){
            if(input % i == 0){
                isPrime = false;
            }
        }
    } else {
        isPrime = false;
    }

    console.log(isPrime);
}