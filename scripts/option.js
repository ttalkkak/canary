const fontSelector = document.getElementById('fontSelector');
const themeSelector = document.getElementById('themeSelector');
const tabColor = document.getElementById('theme-color');
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
    changeTabColor();
    localStorage.setItem('Theme', theme);
}

function changeTabColor() {
    // Change tab color based on theme 
    // (for Safari, Mobile Browsers, etc.)
    const theme = themeSelector.value;
    if (theme === 'dark') {
        tabColor.setAttribute('content', '#343434');
    } else if (theme === 'light') {
        tabColor.setAttribute('content', '#f3f5f7');
    } else if (theme === 'system') {
        tabColor.setAttribute('content', 'auto');
    }
}

if (savedTheme !== null) {
    themeSelector.value = savedTheme;
    changeTheme();
}

themeSelector.addEventListener('change', changeTheme);