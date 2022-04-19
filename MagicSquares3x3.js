function sequares(array) {
    for (let i = 0; i < array.length; i++) {
        if (i < 3) {
            if ((array[i] + array[i + 3] + array[i + 6]) != 15) {
                return false
            }
        }
        if (i == 0 || i == 3 || i == 6) {
            if ((array[i] + array[i + 1] + array[i + 2]) != 15) {
                return false
            }
        }
        if (i == 0) {
            if ((array[i] + array[i + 4] + array[i + 8]) != 15) {
                return false
            }
        }
        if (i == 2) {
            if ((array[i] + array[i + 2] + array[i + 4]) != 15) {
                return false
            }
        }
        else {
            return true
        }
    }
}


console.log(sequares([8, 1, 6, 3, 5, 7, 4, 9, 2])) //true
console.log(sequares([2, 7, 6, 9, 5, 1, 4, 3, 8])) //true
console.log(sequares([3, 5, 7, 8, 1, 6, 4, 9, 2])) //false
console.log(sequares([8, 1, 6, 7, 5, 3, 4, 9, 2])) //false
