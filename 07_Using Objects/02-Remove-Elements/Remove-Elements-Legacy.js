function solve(args) {
    var arr = args.slice(),
        i;
    Array.prototype.remove = function (item) {
        for (i = 0; i < this.length; i += 1) {
            if (this[i] === item) {
                this.splice(i, 1);
                i -= 1;
            }
        }
        return this;
    }

    arr.remove(args[0]);

    for (i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);        
    }
}
solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);