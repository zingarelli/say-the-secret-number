# Say the secret number

[Veja esta página em português](#detalhes-do-projeto).

Learning how to use the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) in a game to guess a random number.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Fale o número secreto**
| :label: Tecnologias | HTML, CSS, JavaScript
| :rocket: URL         | https://zingarelli.github.io/say-the-secret-number/
| :fire: Course     | https://www.alura.com.br/curso-online-javascript-validacoes-reconhecimento-voz

![](https://user-images.githubusercontent.com/19349339/206858034-98d89b76-e5e0-44be-a835-69807d0aaf15.png#vitrinedev)

## Project details
Every time the game loads, a random number between 1 and 1000 is picked and is treated as the "secret number" (min and max values can be changed in the `randomNumber.js` file). When the player clicks on the button "Click/Touch here to start the microphone" and allows microphone to be used, s/he can then say something. Voice data is validated and if a number is recognized, it is compared to the secret number. If the number said matches the secret number, the player wins and the game is over; otherwise, voice recognition restarts and the player can say another number. If the player says "Game Over", the game stops and the secret number is revealed.

The game was configured to recognize English words. This can be changed in the `speechRecognition.js` file, setting a different language to the `recognition.lang` property (settings for Brazilian Portuguese is included in a commented code).

**Warning:** unfortunatelly, Web Speech API is **not** fully supported yet by all browsers. You can check a list of browser compatibility [in this link](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility). This project works on Google Chrome and Microsoft Edge; it *doesn't work* on Opera.

## Credits

This project was developed in a course from [Alura](https://www.alura.com.br) called "JavaScript: validações e reconhecimento de voz" (JavaScript: validation and speech recognition), where we learn the basics of Web Speech API, which enables working with voice data using JavaScript. 

**Instructor:** [**Guilherme Lima**](https://www.linkedin.com/in/guilherme-lima-458925178/)

## What we learned
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

## Screenshots

- Screen showing the number said by the player and a hint that the secret number is less than that.

![screenshot showing a number said by the player](https://user-images.githubusercontent.com/19349339/190652978-124d7db5-7ce6-4451-b11c-07d42c06c1e5.png)

- When the player doesn't say a number, the game will show what has been said and ask for a number:

![screenshot showing that a sentence has been said, instead of a number](https://user-images.githubusercontent.com/19349339/190653885-d25b542e-b8c3-4a82-95f3-903e427b5279.png)

- Game Over screen

![screenshot of the "game over" screen](https://user-images.githubusercontent.com/19349339/190653470-97e1bf01-75f0-4c69-a00f-a74da86046de.png)

---

## Detalhes do projeto

Aprendendo a usar a [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) em um jogo de adivinhar um número aleatório.

Toda vez que o jogo é carregado, um número aleatório entre 1 e 1000 é selecionado e denominado "número secreto". O intervalo mínimo e máximo do número aleatório pode ser modificado no arquivo `randomNumber.js`. 

Quando a pessoa clica no botão "Click/Touch here to start the microphone" e permite que o microfone seja usado, é iniciado o reconhecimento de voz e ela pode falar. Se um número é reconhecido, ele é comparado com o número secreto. Caso seja o número secreto, a pessoa vence e o jogo termina; caso contrário, o reconhecimento de voz reinicia e a pessoa pode falar outro número. Caso seja falado "Game Over", o jogo finaliza e o número secreto é revelado.

O jogo foi configurado para reconhecer palavras em inglês. Isso pode ser mudado, alterando o arquivo `speechRecognition.js` e atribuindo um idioma diferente à propriedade `recognition.lang` (no código, já está comentada a atribuição para mudar para português).

**Atenção:** Infelizmente a Web Speech API ainda **não** é totalmente compatível com todos os navegadores. Você pode ver a lista de navegadores compatíveis [neste link](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility). Este projeto foi testado e funciona no Google Chrome e no Microsoft Edge, mas *não funciona* no Opera.

## Créditos

Este projeto foi desenvolvido em um curso de JavaScript da [Alura](https://www.alura.com.br) chamado "JavaScript: validações e reconhecimento de voz", em que aprendemos o básico da Web Speech API, a qual possibilita trabalhar com dados de voz utilizando o JavaScript. 

**Instrutor:** [**Guilherme Lima**](https://www.linkedin.com/in/guilherme-lima-458925178/)

## O que aprendemos

- Usamos `Math.random() * maxValue + 1` para selecionar um número pseudo-aleatório entre 1 e maxValue (ambos inclusos);

- Aprendemos o básico da interface `SpeechRecognition` da Web Speech API:
    - uso da propriedade `lang` para escolher o idioma a ser reconhecido;
    - adicionar um evento de `click` para começar o reconhecimento de voz por meio do método `start()`;
    - utilizar o evento de `end` e uma variável de controle para decidir parar ou reiniciar o reconhecimento de voz;
    - utilizar o evento de `result` para manipular os dados de voz.

- Nós criamos três arquivos JavaScript para dividir partes da lógica em módulos diferentes: reconhecimento de voz (`speechRecognition.js`), validação de voz/número (`validation.js`) e geração de número aleatório (`randomNumber.js`);

- Nós acessamos o site [Color Hunt](https://colorhunt.co) para selecionar uma paleta de cores legal para o projeto, que foi então atribuída para variáveis CSS;

- Nós [baixamos a biblioteca font-awesome do cdnjs](https://cdnjs.com/libraries/font-awesome) e então entramos no site da [Font Awesome](https://fontawesome.com/icons) para procurar ícones para adicionar ao projeto;

- Nos acessamos o [Google Fonts](https://fonts.google.com) para escolher fontes de texto diferentes para o projeto, que foram então atribuídas para variáveis CSS.

## Screenshots

- Tela mostrando o número falado pelo jogador/jogadora (436) e uma dica de que o número secreto é menor que o número falado:

![screenshot mostrando o número falado pelo jogador/jogadora](https://user-images.githubusercontent.com/19349339/190652978-124d7db5-7ce6-4451-b11c-07d42c06c1e5.png)

- Quando, ao invés de um número, é falada uma frase ou palavra, o jogo mostra o que foi dito e solicita que seja falado um número:

![screenshot mostrando que foi dita uma frase ao invés de um número](https://user-images.githubusercontent.com/19349339/190653885-d25b542e-b8c3-4a82-95f3-903e427b5279.png)


- Tela de fim de jogo que aparece quando se é falado "Game Over". O número secreto também é mostrado:

![screenshot da tela de fim de jogo](https://user-images.githubusercontent.com/19349339/190653470-97e1bf01-75f0-4c69-a00f-a74da86046de.png)
