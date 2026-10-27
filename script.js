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
// Функция для вычисления результата при нажатии на "="
function calculate() {
    const screen = document.getElementById('calculator-screen');
    if (operation === null || previousInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Ошибка' : prev / current;
            break;
        default:
            return;
    }
    
    screen.innerText = result;
    currentInput = result.toString();
    previousInput = '';
    operation = null;
}
// Функция для удаления последнего введенного символа
function deleteChar() {
    const screen = document.getElementById('calculator-screen');
    currentInput = currentInput.toString().slice(0, -1);
    screen.innerText = currentInput === '' ? '0' : currentInput;
}


