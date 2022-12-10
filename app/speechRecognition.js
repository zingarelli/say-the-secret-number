const guessElement = document.getElementById('guess');
const buttonToSpeak = document.getElementById('buttonToSpeak');

try {
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    //uncomment the language you want to be recognized
    recognition.lang = 'en-US';
    // recognition.lang = 'pt-Br';

    //-- recognition start when button is clicked 
    buttonToSpeak.addEventListener('click', () => {
        try {
            recognition.start();
            buttonToSpeak.value = 'Say the number';
        }
        catch (err) {
            console.log(err);
            guessElement.innerHTML = 
                `
                <p>Error: microphone is blocked.</p>
                <p>Please allow your browser to use the microfone.</p>
                `
        }
    })

    //get the result after speech
    recognition.addEventListener('result', validateGuess);

    //keep listening for next guess if the game is not over yet
    recognition.addEventListener('end', () => {
        if(continuePlaying){
            recognition.start()
        }
    });

    //check if the guess is valid and correct and display appropriated message
    function validateGuess(e) {
        const guess = e.results[0][0].transcript;
        showGuessedNumber(guess);
        checkGuessedNumber(guess);
        
        buttonToSpeak.style.display = 'none';
        guessElement.innerHTML += 
            `
            <div class='helper-message'> 
                <p>Say another number.</p>
                <p class='stop-game'>(or say 'Game Over' to stop)</p>
            </div>
            `
    }

    //display the number said by the user
    function showGuessedNumber(number) {
        guessElement.innerHTML =
            `
            <div>You said:</div>
            <span class="box">${number}</span>
            `
    }
}
catch (err) {
    console.log (err);
    document.body.innerHTML = `<h1>Please, use Google Chrome in order to play this game.</h1>`
}