function appendToResult(value) {
  const resultField = document.getElementById('result');
  resultField.value += value; // Append the clicked value to the input
}

function clearResult() {
  document.getElementById('result').value = ''; // Clear the input
}

function calculateResult() {
  const resultField = document.getElementById('result');
  try {
      // Evaluate the expression in the input field
      resultField.value = eval(resultField.value);
  } catch (error) {
      resultField.value = 'Error'; // Display error for invalid expressions
  }
}
