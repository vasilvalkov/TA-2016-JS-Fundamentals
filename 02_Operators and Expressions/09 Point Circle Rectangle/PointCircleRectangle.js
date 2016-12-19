function solve(args) {
    var x = +args[0],
        y = +args[1],
        dist = Math.sqrt(Math.pow((x - 1), 2) + Math.pow((y - 1), 2)),
        circle = dist <= 1.5 ? 'inside circle' : 'outside circle',
        rect = x >= -1 && x <= 5 && y >= -1 && y <= 1 
                 ? 'inside rectangle'
                 : 'outside rectangle';

    console.log(circle + ' ' + rect)
}