function Fibonacci(number) {
    let previousN1 = null;
    let previousN2 = null;
    let result = 0;
    for (let i = 0; i < number; i++) {
        if (i < 2) {
            previousN1 = previousN2 = 1
        }
        else {
            result = previousN1 + previousN2
            previousN2 = previousN1
            previousN1 = result
        }
    }
    return result;
}

console.log( Fibonacci(10));