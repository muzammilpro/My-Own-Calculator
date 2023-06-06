


document.addEventListener('DOMContentLoaded', function() {
  // Get the input element
  const inputText = document.getElementById('inputText');

  // Get all the calculator buttons
  const buttons = document.querySelectorAll('.buttons button');

  // Attach click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonText = this.innerText;

      if (buttonText === '=') {
        // Evaluate the expression and display the result
        try {
          const result = eval(inputText.value);
          inputText.value = result;
        } catch (error) {
          inputText.value = 'Error';
        }
      } else if (buttonText === 'C') {
        // Clear the input field
        inputText.value = '';
      } else {
        // Append the clicked button's value to the input field
        inputText.value += buttonText;
      }
    });
  });
});
