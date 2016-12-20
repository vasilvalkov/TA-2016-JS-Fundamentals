function solve(args) {
    var input = +args[0],
        row = '';

    for (var i = 1, j = 1; i <= (input * 2) - 1; i++, j++) {
        if (j <= input) {
            row += i + ' ';
        } 
        else {
            i -= input;
            j = 0;
            console.log(row);
            row = '';
        }
    }
    
    console.log(row);    
}