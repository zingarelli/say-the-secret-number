# Say the secret number

Learning how to use the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) in a game to guess a random number.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Say the secret number**
| :label: Tecnologias | html, css, javascript 
| :rocket: URL         | https://zingarelli.github.io/say-the-secret-number/
| :fire: Course     | https://www.alura.com.br/curso-online-javascript-validacoes-reconhecimento-voz

![](https://user-images.githubusercontent.com/19349339/190654207-7ed2994f-8a18-487d-be98-4fbe6cc107b6.png#vitrinedev)

## Project details
Every time the game loads, a random number between 1 and 1000 is picked and is treated as the "secret number" (min and max values can be changed in the `randomNumber.js` file). When the player clicks on the button "Click/Touch here to start the microphone" and allows microphone to be used, s/he can then say something. Voice data is validated and if a number is recognized, it is compared to the secret number. If the number said matches the secret number, the player wins and the game is over; otherwise, voice recognition restarts and the player can say another number. If the player says "Game Over", the game stops and the secret number is revealed.

The game was configured to recognize English words. This can be changed in the `speechRecognition.js` file, setting a different language to the `recognition.lang` property (settings for Brazilian Portuguese is included in a commented code).

**Warning:** unfortunatelly, Web Speech API is **not** fully supported yet by all browsers. You can check a list of browser compatibility [in this link](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility). This project works on Google Chrome and Microsoft Edge; it *doesn't work* on Opera.

### Credits

This project was developed in a course from [Alura](https://www.alura.com.br) called "JavaScript: validações e reconhecimento de voz" (JavaScript: validation and speech recognition), where we learn the basics of Web Speech API, which enables working with voice data using JavaScript. 

Instructor: [Guilherme Lima](https://www.linkedin.com/in/guilherme-lima-458925178/)

### What we learned
- We used `Math.random() * maxValue + 1` to pick a pseudo-random number between 1 and maxValue (both included);
- We learned the basics of the SpeechRecognition interface of the Web Speech API:
    - use the `lang` property to choose which language to be recognized;
    - link a `click` event to start the speech recognition, by using the `start()` method;
    - use the `end` event and a flag to decide whether to stop or restart the speech recognition;
    - use the `result` event to manipulate voice data.
- We created three JavaScript files to divide parts of the logic into different modules (speech recognition, voice/number validation and random number generation);
- We accessed [Color Hunt](https://colorhunt.co) website to pick nice color palletes for the project, which were then added to CSS variables;
- We [downloaded font-awesome from cdnjs](https://cdnjs.com/libraries/font-awesome) and then accessed [Font Awesome](https://fontawesome.com/icons) website to search for icons to add to the project;
- We accessed [Google Fonts](https://fonts.google.com) website to pick different fonts to use in the project, which were then added to CSS variables.

### Screenshots

- Screen showing the number said by the player and a hint that the secret number is less than that.

![screenshot showing a number said by the player](https://user-images.githubusercontent.com/19349339/190652978-124d7db5-7ce6-4451-b11c-07d42c06c1e5.png)

- When the player doesn't say a number, the game will show what has been said and ask for a number:

![image](https://user-images.githubusercontent.com/19349339/190653885-d25b542e-b8c3-4a82-95f3-903e427b5279.png)


- Game Over screen

![screenshot of the "game over" screen](https://user-images.githubusercontent.com/19349339/190653470-97e1bf01-75f0-4c69-a00f-a74da86046de.png)