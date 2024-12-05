function calculate(x) {
    let tex = 0;
    if(x > 100000){
        tex =(x - 100000)* 0.15 +(5000*0.01);
    }else if (x > 50000) {
        tex = (x - 50000)*0.10;
    }
    return tex;
}
function processIncomes(incomes) {
    incomes.forEach((income,index) => {
        const tex = calculate(income);
        console.log(`person ${index + 1}: Income =${income}, tex: ${tex}`);
    });
     let maxIncome = Math.max(... incomes);
     let maxIndex = incomes.indexOf(maxIncome);
     console.log(`person ${maxIndex + 1}`);
}
let numberPeople = 3;
let incomes = [45000,7500000,210000]

processIncomes(incomes)