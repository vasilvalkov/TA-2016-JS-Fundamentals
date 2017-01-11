function solve(args) {
  var len = args.length;
  var point1 = { x: 0, y: 0 },
      point2 = { x: 0, y: 0 },
      lines = [],
      lineLength;

  for (var i = 0; i < len; i += 4) {
    point1.x = +args[i];
    point1.y = +args[i + 1];
    point2.x = +args[i + 2];
    point2.y = +args[i + 3];

    lineLength = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    lines.push(lineLength);
  }

  for (var i = 0; i < lines.length; i += 1) {
    console.log(lines[i].toFixed(2));    
  }
  lines.forEach(line => console.log(line.toFixed(2)));

  console.log((lines[0] + lines[1] > lines[2]) && 
              (lines[0] + lines[2] > lines[1]) &&
              (lines[1] + lines[2] > lines[0]) 
              ? 'Triangle can be built'
              : 'Triangle can not be built'); 
}
solve([
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
]);