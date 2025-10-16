let currentInput = '';
let history = [];

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearInput() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function allClear() {
    currentInput = '';
    history = [];
    document.getElementById('display').value = currentInput;
    document.getElementById('history').innerHTML = '';
}

function calculate() {
    try {
        const result = eval(currentInput.replace('×', '*').replace('÷', '/'));
        history.push(`${currentInput} = ${result}`);
        document.getElementById('history').innerHTML = history.map(item => `<li>${item}</li>`).join('');
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        alert('Invalid calculation!');
        clearInput();
    }
}