//sum all primes


function sumPrimes(num) {
    let sum = 0;

    // check if 1 is prime or not
    if (num === 1) {
        return "1 is neither prime nor composite number."
    }

    for (let i = 0; i <= num; i++) {
        if (prime(i) == true) { sum = sum + i }
    }
    return sum
}

function prime(number) {
    let isPrime = true;
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return true
        }
    }
}


console.log(sumPrimes(10))

