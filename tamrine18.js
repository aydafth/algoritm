function findLine(m, n) {
    const [x1, y1] = m;
    const [x2, y2] = n;

    const a = y2 - y1;
    const b = x1 - x2;
    const c = a * x1 + b * y1;

    return { a, b, c };

}
const m = [2, 3];
const n = [5, 10];
const { a, b, c } = findLine(m, n);
console.log(`: ${a}x + ${b}y = ${c}`);
