
function init() {
    const x = document.getElementById("number1");
    const y = document.getElementById("number2");
    const add_button = document.getElementById("add_button");
    const subtract_button = document.getElementById("subtract_button");
    const multiply_button = document.getElementById("multiply_button");
    const divide_button = document.getElementById("divide_button");
    add_button.onclick = add_buttonClicked;
    subtract_button.onclick = subtract_buttonClicked;
    multiply_button.onclick = multiply_buttonClicked;
    divide_button.onclick = divide_buttonClicked;

    function add_buttonClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) + Number(y.value)
        answer.value = result;

    }
    function subtract_buttonClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) - Number(y.value);
        answer.value = result;

    }
    function multiply_buttonClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) *  Number(y.value);
        answer.value = result;

    }
    function divide_buttonClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) / Number(y.value)
        answer.value = result;

    }

}
window.onload = init;
























