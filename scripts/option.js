const fontSelector = document.getElementById('fontSelector');
const themeSelector = document.getElementById('themeSelector');
const body = document.querySelector('body');
const textInput = document.getElementById('textInput');

const savedFont = localStorage.getItem('Font');
const savedTheme = localStorage.getItem('Theme');


/*------Font------*/
function changeFont() {
    const font = fontSelector.value;
    document.body.style.fontFamily = font;
    textInput.style.fontFamily = font;
    localStorage.setItem('Font', font);
}

if (savedFont !== null) {
    fontSelector.value = savedFont;
    changeFont();
}

fontSelector.addEventListener('change', changeFont);


/*------Theme------*/
function changeTheme() {
    const theme = themeSelector.value;
    body.className = theme;
    localStorage.setItem('Theme', theme);
}

if (savedTheme !== null) {
    themeSelector.value = savedTheme;
    changeTheme();
}

themeSelector.addEventListener('change', changeTheme);