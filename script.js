const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    if (display.value.trim() === '') return;
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(() => clearDisplay(), 1500);
  }
}

// Bonus Feature: Keyboard Support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculateResult();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});