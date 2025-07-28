
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

function updateDisplay(value) {
    display.textContent = value || '0';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } else if (value === '⌫') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else {
            if (currentInput === 'Error') currentInput = '';
            currentInput += value;
        }

        updateDisplay(currentInput);
    });
});

// Keyboard support
document.addEventListener('keydown', e => {
    const key = e.key;
    if ('0123456789.+-*/'.includes(key)) {
        currentInput += key;
    } else if (key === 'Enter') {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
    } else if (key === 'Escape') {
        currentInput = '';
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay(currentInput);
});
