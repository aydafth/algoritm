const randomNumber = Math.floor(Math.random()*1000) + 1;
let guess = 0;
let attempts = 0;

console.log("number 1 between 1000");

function guessNumber() {
        guess = parseInt(prompt('entre guess:') , 10);
        attempts++;

        if (guess< randomNumber) {
            console.log('kamtar');
           guessNumber(); 
        }else if (guess > randomNumber) {
            console.log('bishtar');
        guessNumber();
        }else if (feedback === 'L') {
            high = guess-1;
        }else{
            console.log(`shoma add ${randomNumber} ra dar ${attempts} hads zadid`);
            
        }
}
guessNumber();