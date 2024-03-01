// *********************** Inputs from the HTML File *****************************//
const displayValue = document.querySelector(".displayValue");
const inputValue = document.querySelectorAll("input");
const specialCharacters = ["+", "-", "*", "/", "=", "%"];
let output = "";
// *********************** Inputs from the HTML File *****************************//

const calculateValue = (value) => {
  displayValue.focus();
  if (value === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (value === "AC") {
    output = "";
  } else if ((value = "DEL")) {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialCharacters.includes(value)) return;
    output += value;
  }
  displayValue.value = output;
};

const clearScreen = () => {
  displayValue.value = "";
};

const display = (value) => {
  displayValue.value += value;
};

const calculate = () => {
    displayValue.value = eval(displayValue.value);
  };
  
  const deleteValue = () => {
    displayValue.value = displayValue.value.toString().slice(0, -1);
  };
  
  document.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      event.preventDefault();
      calculate();
    }
  });