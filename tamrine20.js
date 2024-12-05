function specialNumber() {
    let Numbers = [];
    for (let i = 1000; i < 10000; i++) {
        let thousands = Math.floor(i / 1000);
        let hundreds = Math.floor((i%1000) /100);
        let tens = Math.floor((i %100)/10);
        let units = i % 10
        if (thousands % 2 !== 0 &&
            hundreds % 2 === 0 &&
            tens % 2 !== 0 &&
            units % 2 === 0) {
            Numbers.push(i);
        }
    }
    return  Numbers ;
}
const SNumbers = specialNumber();
console.log(SNumbers);
