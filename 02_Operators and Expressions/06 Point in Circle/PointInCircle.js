function solve(args) {
    var x = +args[0],
        y = +args[1],
        dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    console.log(dist > 2 ? "no " + dist.toFixed(2) 
                         : "yes " + dist.toFixed(2));
}