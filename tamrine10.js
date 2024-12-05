function Prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }

    }
    return true;
}
function printPrime(min, max) {
    for (let i = min + 1; i < max; i++) {
        if (Prime(i)) {
            console.log(i);


        }

    }

}

printPrime(2, 1000);