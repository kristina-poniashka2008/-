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
// Переменные для хранения текущего числа, предыдущего и выбранного оператора
let currentInput = '0';
let previousInput = '';
let operation = null;

// Функция, которая выводит текст на экран калькулятора
function appendToScreen(value) {
    const screen = document.getElementById('calculator-screen');
    if (screen.innerText === '0' || currentInput === '0') {
        screen.innerText = value;
        currentInput = value;
    } else {
        screen.innerText += value;
        currentInput += value;
    }
}

// Функция, которая очищает экран и сбрасывает все значения
function clearScreen() {
    const screen = document.getElementById('calculator-screen');
    screen.innerText = '0';
    currentInput = '0';
    previousInput = '';
    operation = null;
}

// Функция для обработки нажатия на операторы (+, -, *, /)
function setOperation(op) {
    const screen = document.getElementById('calculator-screen');
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    currentInput = '0';
}
