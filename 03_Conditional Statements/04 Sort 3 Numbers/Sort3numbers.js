function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        biggest = a,
        bigger,
        smallest;

    if (a >= b && a >= c) {
        biggest = a;
        if (b >= c) {
            bigger = b;
            smallest = c;
        } else {
            bigger = c;
            smallest = b;
        }
    }
    if (b >= a && b >= c) {
        biggest = b;
        if (a >= c) {
            bigger = a;
            smallest = c;
        } else {
            bigger = c;
            smallest = a;
        }
    }
    if (c >= a && c >= b) {
        biggest = c;
        if (a >= b) {
            bigger = a;
            smallest = b;
        } else {
            bigger = b;
            smallest = a;
        }
    }

    console.log(biggest + ' ' + bigger + ' ' + smallest);    
}