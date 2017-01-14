function solve(args) {
    const text = args[0];
    const nbsp = '&nbsp;';

    console.log(text.replace(/[ ]/g, nbsp));    
}
solve([ 'This text contains 4 spaces!!' ]);