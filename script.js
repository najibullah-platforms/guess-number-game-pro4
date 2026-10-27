let secretNumber = Math.floor(Math.random() * 100) + 1;


// Number of guesses
let attempts = 0;


// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");



//guessBtn

guessBtn.addEventListener("click" , function(){
    const guessUser = Number(guessInput.value);

    if(guessUser < 1 || guessUser > 100){
        message.textContent = "please enter number between 1 and 100";
        return;
    }

    // attempt
    attempts++;

    attemptsText.textContent = attempts;

    // compure two number secret numban and ugergues

    if(guessUser === secretNumber){
        message.textContent = `correct! you find the number ${secretNumber}`;

        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else if(guessUser < secretNumber){
        message.textContent = "too low try higher number!";
    } else {
        message.textContent = "too high try lower number!";
    }

    // clear inputs 

    guessInput.value = "";
    guessInput.focus();

});


// fix reset btton

resetBtn.addEventListener("click" , function(){
    attempts = 0;
    message.textContent = "Make your first guess!";
    attemptsText.textContent = 0;


     guessInput.value = "";
    guessInput.focus();

})


