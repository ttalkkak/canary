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
        if (currentPhraseParsed && currentPhraseParsed[i]) {
            for (let j = 0; j < inputParsed[i].length && j < currentPhraseParsed[i].length; j++) {
                length++;
                if (currentPhraseParsed[i] && inputParsed[i][j] === currentPhraseParsed[i][j]) {
                    correct++;
                }
            }
            // 현재 입력 중인 글자 제외
            if (i < inputParsed.length - 1) {
                // 받침이 추가로 입력되었을 때
                if (inputParsed[i].length > currentPhraseParsed[i].length) {
                    length += inputParsed[i].length - currentPhraseParsed[i].length;
                }
                // 받침이 빠졌을 때
                if (inputParsed[i].length < currentPhraseParsed[i].length) {
                    length += currentPhraseParsed[i].length - inputParsed[i].length;
                }
            }
        }
        else {
            if (inputParsed.length > currentPhraseParsed.length) {
                length += inputParsed[i].length;
            } // overflow
        }
    }
    console.log(correct, length);
    if (textInput.value.length === 0) {
        accuracy.innerHTML = '100';
    }
    else {
        accuracy.innerHTML = Math.floor(((correct / length)) * 100);
    }

    if (inputParsed.length >= currentPhraseParsed.length) {
        textInput.setSelectionRange(currentPhrase.innerHTML.length, currentPhrase.innerHTML.length);
    }
});

textInput.addEventListener('keydown', function (e) {
    if (e.key === 'PageDown') {
        e.preventDefault();
        changePhrase();
    }
    if ((e.key === ' ' || e.key === 'Spacebar') && inputParsed.length >= currentPhraseParsed.length) {
        e.preventDefault();
    } // 마지막 글자 입력 후 스페이스바 입력 방지
});

textInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        if (currentPhraseParsed && inputParsed && inputParsed.length >= currentPhraseParsed.length) {
            e.preventDefault();
            changePhrase();
        }
    }
});

// Disable paste
textInput.addEventListener('paste', function (e) {
    e.preventDefault();
});