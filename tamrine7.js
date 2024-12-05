const m = 80;
const n = 90;
function multiplesThree(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            console.log(i);

        }
    }
}

multiplesThree(m, n);
