function solve(args) {
    let text = '';
    for (let line of args) {
        text += line.trim().replace(/<.+?>/ig, '').trim();
    }
    console.log(text);
}
solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);