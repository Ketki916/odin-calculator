var num1 = '';
var num2 = '';
var operation = '';


var displayScreen = document.querySelector('.display-text');

let digitButtons = document.querySelectorAll('.digit');
let clearButton = document.querySelector('.clear');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let timesButton = document.querySelector('.times');
let divideButton = document.querySelector('.divide');
let equalsButton = document.querySelector('.equals');

function calculate(param1, param2, operator) {  // output should be string
    if (operator == '+') {
        let output = Number(parseFloat(Math.round((Number(param1) + Number(param2)) * 100000000000000000)/100000000000000000));
        console.log(output);
        num1 = '';
        num2 = '';
        operation = '';
        return output.toString();
    }
    if (operator == "-") {
        let output = Number(parseFloat(Math.round((Number(param1) - Number(param2)) * 100000000000000000)/100000000000000000));
        num1 = '';
        num2 = '';
        operation = '';
        return output.toString();
    }
    if (operator == '*') {
        let output = Number(parseFloat(Math.round((Number(param1) * Number(param2)) * 100000000000000000)/100000000000000000));
        console.log(output);
        num1 = '';
        num2 = '';
        operation = '';
        return output.toString();
    }
    if (operator == "/") {
        if (num2 == "0") {
            num1 = '';
            num2 = '';
            operation = '';
            return "ERROR: Cannot divide by 0";
        }
        else {
            let output = Number(parseFloat(Math.round((Number(param1) / Number(param2)) * 100000000000000000)/100000000000000000));
            num1 = '';
            num2 = '';
            operation = '';
            return output.toString();
        }
    }

};

digitButtons.forEach((digitButton) => {digitButton.addEventListener("click", () => {
    if (operation == '') {
        if (displayScreen.textContent.length < 17) {
            num1 = num1 + digitButton.textContent;
            displayScreen.textContent = num1;
        }
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = '';
        }
        if (displayScreen.textContent.length < 17) {
            num2 = num2 + digitButton.textContent;
            displayScreen.textContent = num2;
        }
    }
})});

plusButton.addEventListener('click', () => {
    if (operation == '') {
        operation = '+';
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = 'ERROR: Press C to restart';
        }
        else {
            let output = calculate(num1, num2, operation);
            if (output == "ERROR: Cannot divide by 0") { // Make sure that this is exact output for divide by 0 in calculate function
                displayScreen.textContent = output;
            }
            else {
                num1 = output; // Make sure output is string
            }


            if (num1.length > 17) {
                displayScreen.textContent = "ERROR: Output is too large";
            }
            else {
                displayScreen.textContent = num1;
                num2 = '';
                operation = '+';
            }
            
        }
    }
});

minusButton.addEventListener('click', () => {
    if (operation == '') {
        operation = '-';
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = 'ERROR: Press C to restart';
        }
        else {
            let output = calculate(num1, num2, operation);
            if (output == "ERROR: Cannot divide by 0") { // Make sure that this is exact output for divide by 0 in calculate function
                displayScreen.textContent = output;
            }
            else {
                num1 = output; // Make sure output is string
            }

            if (num1.length > 17) {
                displayScreen.textContent = "ERROR: Output is too large";
            }
            else {
                displayScreen.textContent = num1;
                num2 = '';
                operation = '-'; 
            }
        }
    }
});

timesButton.addEventListener('click', () => {
    if (operation == '') {
        operation = '*';
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = 'ERROR: Press C to restart';
        }
        else {
            let output = calculate(num1, num2, operation);
            if (output == "ERROR: Cannot divide by 0") { // Make sure that this is exact output for divide by 0 in calculate function
                displayScreen.textContent = output;
            }
            else {
                num1 = output; // Make sure output is string
            }

            if (num1.length > 17) {
                displayScreen.textContent = "ERROR: Output is too large";
            }
            else {
                displayScreen.textContent = num1;
                num2 = '';
                operation = '*'; 
            }
        }
    }
});

divideButton.addEventListener('click', () => {
    if (operation == '') {
        operation = '/';
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = 'ERROR: Press C to restart';
        }
        else {
            let output = calculate(num1, num2, operation);
            if (output == "ERROR: Cannot divide by 0") { // Make sure that this is exact output for divide by 0 in calculate function
                displayScreen.textContent = output;
            }
            else {
                num1 = output; // Make sure output is string
            }

            if (num1.length > 17) {
                displayScreen.textContent = "ERROR: Output is too large";
            }
            else {
                displayScreen.textContent = num1;
                num2 = '';
                operation = '/'; 
            }
        }
    }
});

clearButton.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operation = '';
    displayScreen.textContent = '';
});

equalsButton.addEventListener('click', () => {
    let output = calculate(num1, num2, operation);
    if (output.length > 17 && output != "ERROR: Cannot divide by 0") {
        displayScreen.textContent = "ERROR: Output is too large";
    }
    else {
        num1 = output;
        displayScreen.textContent = output;
    }
});