function addDecimal() {
    let screen = document.getElementById('screen');

    if (!screen.value.includes('.')) {
        screen.value += '.';
    }
}

/**
 * displayNumber
 * display the number when a user click the button number
 * @param number
 */
function displayNumber(number) {
    // Test if the value of the screen equals 0. If it is, the replace the value with the number
    if (document.getElementById('screen').value === '0') {
        document.getElementById('screen').value = number;
    }
    // If the value of the screen is not 0, concatenate the number to the existing value
    else {
        document.getElementById('screen').value += number;
    }
}

/**
 * performOperation
 * perform the operation
 * @param operation
 */
function performOperation(operation) {
    let screen = document.getElementById('screen');
    let value = screen.value.trim();

    // Si le dernier caractère est un opérateur, ne pas en ajouter un autre
    if (['+', '-', '*', '/', '%'].includes(value.slice(-1)) && ['+', '-', '*', '/', '%'].includes(operation)) {
        return;
    }

    // Effacer si c'est 'C', sinon ajouter l'opération
    if (operation === 'C') {
        screen.value = '';
    } else {
        screen.value += ' ' + operation + ' ';
    }
}


/**
 * displayResult
 * display the result of the expression when a user click the equal (=) button
 */
function displayResult() {
    // Evaluate the expression in the screen value, and update the screen value with the result
    try {
        let expression = document.getElementById('screen').value.replace(/\s+/g, '');
        let result = eval(expression);
        document.getElementById('screen').value = '';
        document.getElementById('screen').value = result;
    }
    // If the expression is invalid, display an error message
    catch (error) {
        alert('Invalid expression');
    }
}