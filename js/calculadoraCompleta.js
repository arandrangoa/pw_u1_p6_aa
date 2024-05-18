function limpiarDisplay() {
    document.getElementById('display').innerText = '';
}

function borrarUlitmo() {
    var display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function agregarNumero(number) {
    var display = document.getElementById('display');
    display.innerText += number;
}

function agregarOperador(operator) {
    var display = document.getElementById('display');
    var currentValue = display.innerText;
    if (currentValue !== '' && !isNaN(currentValue.slice(-1))) {
        display.innerText += operator;
    }
}

function agregarPunto() {
    var display = document.getElementById('display');
    var currentValue = display.innerText;
    if (!currentValue.includes('.')) {
        display.innerText += '.';
    }
}

function cakcularResultado() {
    var display = document.getElementById('display').innerText;
    var operator;

    if (display.includes('+')) {
        operator = '+';
    } else if (display.includes('-')) {
        operator = '-';
    } else if (display.includes('*')) {
        operator = '*';
    } else if (display.includes('/')) {
        operator = '/';
    } else {
        return;
    }

    var operands = display.split(operator);
    var num1 = parseFloat(operands[0]);
    var num2 = parseFloat(operands[1]);

    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Error';
    }

    document.getElementById('display').innerText = result;
}
