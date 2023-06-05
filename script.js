var result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  try {
    var calculation = eval(result.value);
    result.value = calculation;
  } catch (error) {
    result.value = "Error";
  }
}
