function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        biggest = a;

    if (biggest < b) {
        biggest = b;
        if (biggest < c) {
            biggest = c;            
        }
    }
    if (biggest < c) {
        biggest = c;
    }

    console.log(biggest);    
}