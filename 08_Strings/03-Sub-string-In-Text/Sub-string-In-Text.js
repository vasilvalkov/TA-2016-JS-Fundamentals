function solve(args) {
    const str = args[0].toLowerCase(),
        text = args[1].toLowerCase(),
        len = text.length;
    let found,
        count = 0,
        i;

    for (i = 0; i < len; i += 1) {
        found = text.indexOf(str, i);
        if (found < 0) {
            return count;
        }
        count += 1;
        i = found;
    }    
}
solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);