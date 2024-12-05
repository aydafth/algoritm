function Cbalanc(person) {
    let blance = person.initialBalance;
    person.transactions.forEach(transaction => {
        if (transaction.type === 1) {
            blance += transaction.amount;
        }else if (transaction.type === 2){
            blance -=transaction.amount;
        }
    });
    return blance;
}
const person = {
    Name :'ayda',
    initialBalance:2000,
    transactions:[
        {type: 1, amount: 500},
        {type: 2, amount: 200},
        {type: 1, amount: 300},
        {type: 2, amount: 100},
    ]
};
const finalBalance = Cbalanc(person);
console.log(`name: ${person.Name}, final Balance: ${finalBalance}`);
