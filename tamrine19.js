function countDigits(n) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0 ;
    
    const digits = n.toString();
    for (let digit of digits) {
        if (digit === '0') {
            zeroCount++;
        }else if (digit % 2 === 0){
            evenCount++;
        }else {
            oddCount++;
        }
        
    }
    return {
        evenCount:evenCount,
        oddCount : oddCount,
        zeroCount : zeroCount

    };
}

const n = 102347620095;
const counts = countDigits(n);
console.log(`event:${counts.evenCount}, odd:${counts.oddCount},zero:${counts.zeroCount}`);
