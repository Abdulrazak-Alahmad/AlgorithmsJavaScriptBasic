function largestOfFour(arr) {
    largestOfFourresult = [];
    for (let index = 0; index < arr.length; index++) {
        var max = Math.max(...arr[index]);
        largestOfFourresult.push(max)
    }
    return largestOfFourresult
}
arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
console.log(largestOfFour(arr))