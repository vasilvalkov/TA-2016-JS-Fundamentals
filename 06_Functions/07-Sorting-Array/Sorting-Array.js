function solve(args) {
    let numbers = args[1].split(' ').map(x => +x);

    Array.prototype.swapValues = function (currentIndex, targetIndex) {
        let temp = this[currentIndex];
        this[currentIndex] = this[targetIndex];
        this[targetIndex] = temp;
    }
    // returns the index of the maximal value in Array
    Array.prototype.maxValue = function (startIndex, endIndex) {
        let maxVal = this[0],
            maxIndex = 0;
        for (let i = startIndex; i < endIndex; i += 1) {
            let max = Math.max(this[i], this[i + 1]);
            if (maxVal < max) {
                maxVal = max;
                maxIndex = this[i] === maxVal ? i : i + 1;
            }
        }
        return maxIndex;
    }

    function sortAscending(array) {
        let sortedArr = [];
        const len = array.length;

        for (let i = len - 1; i >= 0; i -= 1) {
            let maxValIndex = array.maxValue(0, i);

            sortedArr[i] = array[maxValIndex];
            if (i !== maxValIndex) {
                array.swapValues(i, maxValIndex);
            }
        }
        return sortedArr;
    }

    function sortDescending(array) {
        let sortedArr = [];
        const len = array.length;

        for (let i = len - 1; i >= 0; i += 1) {
            let maxValIndex = array.maxValue(0, i);

            sortedArr[len - 1 - i] = array[maxValIndex];
            if (i !== maxValIndex) {
                array.swapValues(i, maxValIndex);
            }
        }
        return sortedArr;
    }
    console.log(sortAscending(numbers).join(' '));
}
solve(['6', '3 4 1 5 2 6']);