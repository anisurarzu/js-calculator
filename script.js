// capture the button value & show it in display
let display = document.getElementById("display-input");
const buttons = document.querySelectorAll("button");
let displayValue = "";
for (let button of buttons) {
  button.addEventListener("click", (event) => {
    let buttonText = event.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      displayValue += buttonText;
      display.innerText = displayValue;
    } else if (buttonText == "c") {
      displayValue = "";
      display.innerText = displayValue;
    } else if (buttonText == "=") {
      display.innerText = eval(displayValue);
    } else {
      displayValue += buttonText;
      display.innerText = displayValue;
    }
  });
}
