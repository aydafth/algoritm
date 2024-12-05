function findFour(n) {
    let count = 0;
    let sum = 0;

    for (let i = 4; i <= n; i+=4) {
        if(n% i === 0){
            console.log(i);
            count++;
            sum+= i;
        }
        
    }
    console.log(`total count of 4: ${count}`);
    console.log(`sum: ${sum}`);
      
}

let n = 1000
findFour(n)