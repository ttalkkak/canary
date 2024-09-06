const jsonPath = './scripts/phrase.json';
const currentPhrase = document.getElementById('currentPhrase');
const nextPhrase = document.getElementById('nextPhrase');

let currentIndex = 0;
let nextIndex = 0;

function changePhrase() {
    currentPhrase.innerHTML = nextPhrase.innerHTML;
    currentIndex = nextIndex;
    currentPhraseParsed = parseText(currentPhrase.innerHTML);
    fetch(jsonPath).then(response => response.json()).then(data => {
        nextIndex = Math.floor(Math.random() * (data.quotes.length - 1));
        if (nextIndex >= currentIndex) {
            nextIndex++;
        }
        nextPhrase.innerHTML = data.quotes[nextIndex];
    });

    best.innerHTML = Math.max(best.innerHTML, current.innerHTML);
    current.innerHTML = 0;
    accuracy.innerHTML = '100';

    textInput.value = '';
    inputParsed = parseText(textInput.value);
    textInput.setSelectionRange(0, 0);
    textInput.focus();
}

/* first fetch */
function firstPhrase() {
    fetch(jsonPath).then(response => response.json()).then(data => {
        currentIndex = Math.floor(Math.random() * data.quotes.length);
        nextIndex = Math.floor(Math.random() * (data.quotes.length - 1));
        if (nextIndex >= currentIndex) {
            nextIndex++;
        }
        currentPhrase.innerHTML = data.quotes[currentIndex];
        currentPhraseParsed = parseText(currentPhrase.innerHTML);
        nextPhrase.innerHTML = data.quotes[nextIndex];

        current.innerHTML = 0;
        accuracy.innerHTML = '100';

        textInput.value = '';
        inputParsed = parseText(textInput.value);
        textInput.setSelectionRange(0, 0);
        textInput.focus();
    });
}

firstPhrase();

//document.querySelector('.textInput').addEventListener('click', changePhrase());