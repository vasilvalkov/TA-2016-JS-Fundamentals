function solve(args) {
    var input = args[0],
        mask = 1 << 3;
        bit = input & mask;

console.log(bit == 0 ? 0 : 1);
}