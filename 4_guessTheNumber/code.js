let guesses = 10  ; 
let lastResult = document.querySelector('.lastResult') ; 
const lowHi  =document.getElementById('lowOrHi') 
const form = document.querySelector('form')
let prev = document.querySelector('.guesses') 
let guessesArray = [];
const randomNum = Math.floor(Math.random() * 100) + 1;
form.addEventListener('submit' , function(e){
    e.preventDefault() ; 
    const num = parseInt(document.getElementById('guessField').value)
    console.log("event isidentified ") ; 
    console.log(`num is ${num}`) ; 
    console.log(`randomnum is ${randomNum}`) ; 
    if (isNaN(num)) {
        alert('Please enter a valid number!');
        return;
    }
    if(guesses===8){
        lowHi.innerHTML = `better luck next time `
        setTimeout(function() {
            location.reload();
        }, 1000* 5);
    }

    if(num===randomNum){
        lowHi.innerHTML = `Yay ! you guessed the number right in ${guesses} guesses  remaining`
        setTimeout(function() {
            location.reload();
        }, 1000* 5);
    }
    else if (num > randomNum) {
        lowHi.innerHTML = 'Your guess is high!';
        guesses--;
    } else if (num < randomNum) {
        lowHi.innerHTML = 'Your guess is  low!';
        guesses--;
    }
    console.log(lastResult.textContent) ; 
    lastResult.textContent = guesses 
    prev.textContent = guessesArray.join(', '); // Join the array with commas

    guessesArray.push(num) 
    console.log(guessesArray) 
    console.log(guesses) 



})