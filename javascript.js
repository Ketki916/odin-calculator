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
let negativeButton = document.querySelector('.negative');
let decimalButton = document.querySelector('.decimal');

function calculate(param1, param2, operator) {  // output should be string
    if (operator == '+') {
        let output = Number(parseFloat(Math.round((Number(param1) + Number(param2)) * 1000000000000000)/1000000000000000));
        num1 = '';
        num2 = '';
        operation = '';
        output = output.toString();
        if (output.includes(".") && !(output.includes("e")) && output.length > 17)  {
            if (Number(output[17]) >= 5 ) {
                if (output[16] == "9") {
                    output = output.slice(0, 15) + (Number(output[15]) + 1).toString() + "0";
                }
                else {
                    output = output.slice(0, 16) + (Number(output[16]) + 1).toString();
                }
            }
            else {
                output = output.slice(0,17);
            }
        }
        return output;
    }
    if (operator == "-") {
        let output = Number(parseFloat(Math.round((Number(param1) - Number(param2)) * 1000000000000000)/1000000000000000));
        num1 = '';
        num2 = '';
        operation = '';
        output = output.toString();
        if (output.includes(".") && !(output.includes("e")) && output.length > 17)  {
            if (Number(output[17]) >= 5 ) {
                if (output[16] == "9") {
                    output = output.slice(0, 15) + (Number(output[15]) + 1).toString() + "0";
                }
                else {
                    output = output.slice(0, 16) + (Number(output[16]) + 1).toString();
                }
            }
            else {
                output = output.slice(0,17);
            }
        }
        return output;
    }
    if (operator == '*') {
        let output = Number(parseFloat(Math.round((Number(param1) * Number(param2)) * 1000000000000000)/1000000000000000));
        console.log(output);
        num1 = '';
        num2 = '';
        operation = '';
        output = output.toString();
        if (output.includes(".") && !(output.includes("e")) && output.length > 17) {
            if (Number(output[17]) >= 5 ) {
                if (output[16] == "9") {
                    output = output.slice(0, 15) + (Number(output[15]) + 1).toString() + "0";
                }
                else {
                    output = output.slice(0, 16) + (Number(output[16]) + 1).toString();
                }
            }
            else {
                output = output.slice(0,17);
            }
        }
        return output;
    }
    if (operator == "/") {
        if (num2 == "0") {
            num1 = '';
            num2 = '';
            operation = '';
            return "ERROR: Cannot divide by 0";
        }
        else {
            let output = Number(parseFloat(Math.round((Number(param1) / Number(param2)) * 1000000000000000)/1000000000000000));
            num1 = '';
            num2 = '';
            operation = '';
            output = output.toString();
            if (output.includes(".") && !(output.includes("e")) && output.length > 17)  {
                if (Number(output[17]) >= 5 ) {
                    if (output[16] == "9") {
                        output = output.slice(0, 15) + (Number(output[15]) + 1).toString() + "0";
                    }
                    else {
                        output = output.slice(0, 16) + (Number(output[16]) + 1).toString();
                    }
                }
                else {
                    output = output.slice(0,17);
                }
            }
            return output;
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

negativeButton.addEventListener('click', () => {
    if (operation == '') {
        if (displayScreen.textContent.length < 17) {
            if (num1.includes('-')) {
                num1 = num1.slice(1);
                displayScreen.textContent = num1;
            }
            else {
                num1 = "-" + num1;
                displayScreen.textContent = num1;
            }
        }
        else {
            if (num1.includes('-')) {
                num1 = num1.slice(1);
                displayScreen.textContent = num1;
            }
        }
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = '';
        }
        if (displayScreen.textContent.length < 17) {
            if (num2.includes('-')) {
                num2 = num2.slice(1);
                displayScreen.textContent = num2;
            }
            else {
                num2 = "-" + num2;
                displayScreen.textContent = num2;
            }
        }
        else {
            if (num2.includes('-')) {
                num2 = num2.slice(1);
                displayScreen.textContent = num2;
            }
        }
    }
})

decimalButton.addEventListener('click', () => {
    if (operation == '') {
        if (displayScreen.textContent.length < 17) {
            num1 = num1 + ".";
            displayScreen.textContent = num1;
        }
    }
    else {
        if (num2 == '') {
            displayScreen.textContent = '';
        }
        if (displayScreen.textContent.length < 17) {
            num2 = num2 + ".";
            displayScreen.textContent = num2;
        }
    }
})

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


            if (num1.length > 17 || num1.includes('e')) {
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

            if (num1.length > 17 || num1.includes('e')) {
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

            if (num1.length > 17 || num1.includes('e')) {
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

            if (num1.length > 17 || num1.includes('e')) {
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
    if ((output.length > 17 && output != "ERROR: Cannot divide by 0") || output.includes("e")) {
        displayScreen.textContent = "ERROR: Output is too large";
    }
    else {
        num1 = output;
        displayScreen.textContent = output;
    }
});