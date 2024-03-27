/*-------------------------------- Constants --------------------------------*/

const numbers = document.querySelectorAll(".button")
let screen = document.querySelector(".display")


/*-------------------------------- Variables --------------------------------*/

let numberOne = null;
let numberTwo = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        // console.log(event.target.innerText);
      
        let pressed = event.target.innerText
        screen.innerText = pressed;

        // Future logic to capture the button's value goes here...)


/*-------------------------------- Functions --------------------------------*/

const doMath = (num1, num2, operator) => { 

    // let total = eval(`${num1}${operator}${num2}`)
    // screen.innerText = (`${num1} ${operator} ${num2} =` , total)

    switch (operator) {
        case '+':
            screen.innerText = (num1 * num2);
            break;
    
        case '-':
            screen.innerText = (num1 - num2);
            break;
        case '/':
            screen.innerText = (num1 / num2);
            break;
        case '+':
            screen.innerText = (num1 + num2);
            break;
        default: 
            screen.innerText = 'Awkward..'
    }


}