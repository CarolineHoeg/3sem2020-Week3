let display = document.getElementById("display")
let equalWasPressed = false;

document.getElementById("buttons").onclick = clickedBtn
document.getElementById("calculate").onclick = calculate

function clickedBtn(evt) {
    if (evt.target.id !== "calculate" && evt.target.id !== "buttons") {
        if (equalWasPressed) {
            display.innerHTML = evt.target.innerText;
            equalWasPressed = false;
        } else {
            display.innerHTML += evt.target.innerText;
        }
    }
}

//It only works with two numbers and one numeral operator
function calculate() {
    let equation, numbers;
    equation = display.innerHTML
    if (equation.indexOf("*") > 0) {
        numbers = equation.split("*")
        display.innerHTML = Number(numbers[0]) * Number(numbers[1]);
    }
    if (equation.indexOf("/") > 0) {
        numbers = equation.split("/")
        display.innerHTML = Number(numbers[0]) / Number(numbers[1]);
    }
    if (equation.indexOf("+") > 0) {
        numbers = equation.split("+")
        display.innerHTML = Number(numbers[0]) + Number(numbers[1]);
    }
    if (equation.indexOf("-") > 0) {
        numbers = equation.split("-")
        display.innerHTML = Number(numbers[0]) - Number(numbers[1]);
    }
    equalWasPressed = true;
}

