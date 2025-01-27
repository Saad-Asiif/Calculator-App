let display = document.getElementById("result");

// Append number to display
function appendNumber(number) {
    display.value += number;
}

// Append operator to display
function appendOperator(operator) {
    display.value += operator;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

// Map keyboard input to calculator buttons
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Allow numbers and operators
    if (!isNaN(key) || ["+", "-", "*", "/", "(", ")", "."].includes(key)) {
        appendNumber(key);
    }

    // Enter key for "="
    if (key === "Enter") {
        calculateResult();
    }

    // Backspace for deleting last character
    if (key === "Backspace") {
        deleteLast();
    }

    // Escape key for clearing the display
    if (key === "Escape") {
        clearDisplay();
    }
});

// Hide the welcome screen after 3 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById("welcomeScreen").style.display = "none";
    }, 3000);
};
