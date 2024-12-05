const stores = [
    { storeNumber: 1, monthSales: [4000, 450, 700, 1100, 3600, 320] },
    { storeNumber: 2, monthSales: [670, 4500, 250, 1100, 2600, 500] },
    { storeNumber: 3, monthSales: [400, 490, 1005, 3200, 4800, 690] },
    { storeNumber: 4, monthSales: [860, 450, 900, 237, 3600, 765] },
];
function shopping(stores) {
    let maxSales = 0;
    let maxSalesShoppingNumber = null;
    const results = stores.map(store => {
        const { storeNumber, monthSales } = store;
        const totalSales = monthSales.reduce((acc, sales) => acc + sales, 0);
        let payment;
        if (totalSales <= 500000) {
            payment = totalSales * 0.03;

        } else if (sales, 700000) {
            payment = totalSales * 0.05
        } else {
            return 0;
        }

        if (totalSales > maxSales) {
            maxSales = totalSales;
            maxSalesShoppingNumber = storeNumber;

        }
        return {
            storeNumber,
            totalSales,
            payment
        };
    });
    results.forEach(result => {
        console.log(`storeNumber: ${result.storeNumber} , sales: ${result.totalSales} , payment: ${result.payment}`);
    });
    console.log(`maxSales:${maxSalesShoppingNumber}`);

}
shopping(stores);