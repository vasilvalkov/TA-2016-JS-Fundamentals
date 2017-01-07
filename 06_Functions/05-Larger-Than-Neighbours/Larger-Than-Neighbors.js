function solve(args) {
    let numbers = args[1].split(' ').map(Number);

    function findLargerThanNeghbors(array) {
        let count = 0;
        const len = array.length;

        for (let i = 1; i < len - 1; i += 1) {
            if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
                count += 1;
            }
        }
        return count;
    }
    console.log(findLargerThanNeghbors(numbers));
}
solve(['6', '-26 -25 -28 31 2 27']);