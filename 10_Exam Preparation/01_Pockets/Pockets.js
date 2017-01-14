function solve(args) {
    let heights = args[0].slice().split(' ').map(x => +x),
        sum = 0;
    const len = heights.length;

    function isPeak(array, i) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            return true;
        }
        return false;
    }

    for (let i = 1; i < len - 2; i += 1) {
        if (isPeak(heights, i) && isPeak(heights, i + 2)) {
            sum += heights[i + 1];
        }
    }

    console.log(sum);
}
solve(["53 20 1 30 2 40 3 10 1"]);