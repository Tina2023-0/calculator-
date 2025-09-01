 let currentInput = '';
        let currentOperation = '';
        let previousInput = '';

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function appendDecimal() {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                updateDisplay();
            }
        }

        function appendOperation(operation) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            currentOperation = operation;
            previousInput = currentInput;
            currentInput = '';
            updateDisplay();
        }

        function calculate() {
            if (previousInput === '' || currentInput === '') return;
            let result;
            let prev = parseFloat(previousInput);
            let current = parseFloat(currentInput);

            switch (currentOperation) {
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
                    if (current === 0) {
                        alert("Cannot divide by zero");
                        return;
                    }
                    result = prev / current;
                    break;
                case '%':
                    result = prev % current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            currentOperation = '';
            previousInput = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            currentOperation = '';
            document.getElementById('display').value = '';
        }

        function backspace() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        function toggleSign() {
            if (currentInput !== '') {
                currentInput = (parseFloat(currentInput) * -1).toString();
                updateDisplay();
            }
        }

        function updateDisplay() {
            document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
        }
    
