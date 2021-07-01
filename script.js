var displayDiv = document.querySelector("#display");
var tempNum1 = 0;
var tempNum2 = 0;
var operator = "";

function press(element) {
  console.log(element);
  if (displayDiv.innerHTML == "0") {
    displayDiv.innerHTML = element;
  } else if (displayDiv.innerHTML != "0") {
    displayDiv.innerHTML += element;
  }
}

function clr(element) {
  displayDiv.innerHTML = 0;
  tempNum1 = 0;
  tempNum2 = 0;
  operator = "";
}

function setOP(element) {
  console.log(displayDiv.innerHTML);
  tempNum1 = parseFloat(displayDiv.innerHTML);
  operator = element;
  displayDiv.innerHTML = 0;
}

function calculate() {
  console.log(displayDiv.innerHTML);
  tempNum2 = parseFloat(displayDiv.innerHTML);
  console.log(tempNum1, tempNum2);
  if (operator == "+") {
    displayDiv.innerHTML = tempNum1 + tempNum2;
  } else if (operator == "-") {
    displayDiv.innerHTML = tempNum1 - tempNum2;
  } else if (operator == "*") {
    displayDiv.innerHTML = tempNum1 * tempNum2;
  } else if (operator == "/") {
    displayDiv.innerHTML = tempNum1 / tempNum2;
  }
}
