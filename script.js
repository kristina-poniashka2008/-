// Функция, которая выводит текст на экран калькулятора
function appendToScreen(value) {
    const screen = document.getElementById('calculator-screen');
    if (screen.innerText === '0') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

// Функция, которая очищает экран и сбрасывает значение до 0
function clearScreen() {
    const screen = document.getElementById('calculator-screen');
    screen.innerText = '0';
}
