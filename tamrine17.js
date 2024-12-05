function getDate(n, year) {
    let date = new Date(year, 0);
    date.setDate(n);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let formatted = `${year}-${month}-${day}`;

    return formatted;
}

let n = 365;
const year = 2024
let result = getDate(n, year);
console.log(`the date of day ${n} of the year${year} is: ${result}`);
