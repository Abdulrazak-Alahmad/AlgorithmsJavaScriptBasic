function sumAll(arr) {
    let sum = null
    if (arr[0] > arr[1]) {
        sum = arr[0]
        arr[0] = arr[1]
        arr[1] = sum
        sum = null
    }
    for (let index = arr[0]; index <= arr[1]; index++) {
        sum += index
    }
    return sum
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));