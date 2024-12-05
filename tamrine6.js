function sumDigits(n) {
    let sum = 0
    let tempNumber = n
    while (tempNumber >0) {
        sum += tempNumber% 10;
        tempNumber = Math.floor(tempNumber / 10);
    }
    return n % sum === 0;
}
let n  = 12
let result = sumDigits(n);
console.log(`number ${n} is sum: ${result}`);
