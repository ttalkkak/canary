const fontSelector = document.getElementById('fontSelector');
const themeSelector = document.getElementById('themeSelector');
const body = document.querySelector('body');
const textInput = document.getElementById('textInput');

const savedFont = localStorage.getItem('Font');
const savedTheme = localStorage.getItem('Theme');

function changeFont() {
    const font = fontSelector.value;
    document.body.style.fontFamily = font;
    textInput.style.fontFamily = font;
    localStorage.setItem('Font', font);
}

function changeTheme() {
    const theme = themeSelector.value;
    localStorage.setItem('Theme', theme);
}

if (savedFont !== null) {
    fontSelector.value = savedFont;
    changeFont();
}

if (savedTheme !== null) {
    themeSelector.value = savedTheme;
    changeTheme();
}

fontSelector.addEventListener('change', changeFont);
themeSelector.addEventListener('change', changeTheme);