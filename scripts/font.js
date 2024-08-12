const fontSelector = document.getElementById('fontSelector');
const body = document.querySelector('body');
const textInput = document.getElementById('textInput');

function changeFont() {
    const font = fontSelector.value;
    document.body.style.fontFamily = font;
    textInput.style.fontFamily = font;
}

fontSelector.addEventListener('change', changeFont);