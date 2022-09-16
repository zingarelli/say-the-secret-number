//TODO: how to prevent this variable from being modified via console??
let continuePlaying = true; //flag to stop voice recognition if the game is over

//validate the number and check if the guess was right
function checkGuessedNumber(guess) {
    const number = +guess; //shortcut to transform a string into integer value

    if (isNotANumber(number)) {
        //Microsoft Edge adds a period in every sentence
        if((guess.toUpperCase() === 'GAME OVER') || (guess.toUpperCase() === 'GAME OVER.')) {
            showGameOverScreen();
            continuePlaying = false;
        }
        else{
            guessElement.innerHTML += `<div>"${guess}" is not a number! Try again.</div>`;
            return;
        }
    }

    if (isOutOfBoundary(number)) {
        guessElement.innerHTML += `<div>${number} is out of bounds. Please say a number between ${minValue} and ${maxValue}.`;
        return;
    }

    compareWithSecretNumber(number)
}

//compare guess with secret number and show appropriated message
function compareWithSecretNumber(number) {
    if (number === secret) {
        showCongratsMessage();
        continuePlaying = false;
    }
    else if (number < secret) {
        showGreaterThanMessage(number);
    }
    else {
        showLessThanMessage(number);
    }
}

//verify in user said a number
function isNotANumber(number) {
    return Number.isNaN(number);
}

//verify if number is between min and max values
function isOutOfBoundary(number) {
    return (number > maxValue || number < minValue)
}

//-- Messages to be shown, depending on which number was guessed

function showCongratsMessage() {
    document.body.innerHTML =
        `
        <h2>CONGRATS!</h2>
        <h3>The secret number was:</h3>
        <span class="box">${secret}</span>
        <a href='index.html'>New Game</a>
        `
}

function showGreaterThanMessage(number) {
    guessElement.innerHTML += `<div>Secret number is greater than ${number} <i class="fa-solid fa-arrow-up"></i></div>`
}

function showLessThanMessage(number) {
    guessElement.innerHTML += `<div>Secret number is less than ${number} <i class="fa-solid fa-arrow-down"></i></div>`
}

// change page when the user says "game over"
function showGameOverScreen(){
    document.body.style.background = '#000';
    document.body.innerHTML = 
        `
        <div class="game-over">
            <i class="fa-regular fa-face-frown"></i>
            <h2>Game Over</h2>
            <p>The secret number was: ${secret}</p>
            <a href='index.html'>New Game</a>
        </div>
        `;
}