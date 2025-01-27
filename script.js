let display = document.getElementById("result");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

// Hide the welcome screen after 3 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('welcomeScreen').style.display = 'none';
    }, 3000);
}
