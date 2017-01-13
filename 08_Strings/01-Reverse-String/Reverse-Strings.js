function solve(args) {
    const len = args[0].length;
    let strArr = [];    
    
for (let i = 0; i < len; i += 1){
    strArr.push(args[0][i]);
}
    console.log(rev = strArr.reduce((x, y) => y.concat(x)));
}
solve(['sample']);