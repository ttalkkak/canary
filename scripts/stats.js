const textInput = document.querySelector('.textInput');
const best = document.querySelector('#best');
const current = document.querySelector('#current');
const accuracy = document.querySelector('#accuracy');

let currentPhraseParsed;
let inputParsed;

function parseText(text) {
    const textArray = [];
    for (let i = 0; i < text.length; i++) {
        textArray.push(Hangul.disassemble(text[i]));
    }
    return textArray;
}

textInput.addEventListener('input', function () {
    inputParsed = parseText(textInput.value);
    let correct = 0;
    let length = 0;
    for (let i = 0; i < inputParsed.length; i++) {
        for (let j = 0; j < inputParsed[i].length && j < currentPhraseParsed[i].length; j++) {
            length++;
            if (currentPhraseParsed[i] && inputParsed[i][j] === currentPhraseParsed[i][j]) {
                correct++;
            }
        }
    }
    if (textInput.value.length === 0) {
        accuracy.innerHTML = '100';
    }
    else {
        accuracy.innerHTML = Math.floor(((correct / length)) * 100);
    }
});

textInput.addEventListener('keydown', function (e) {
    if (e.key === 'pageDown') {
        e.preventDefault();
        changePhrase();
    }
});

textInput.addEventListener('keypress', function (e) {
    if (currentPhraseParsed && inputParsed && inputParsed.length >= currentPhraseParsed.length) {
        e.preventDefault();
        changePhrase();
    }
});

textInput.addEventListener('paste', function (e) {
    e.preventDefault();
});