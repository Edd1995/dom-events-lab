/*-------------------------------- Constants --------------------------------*/

const numbers = document.querySelectorAll(".button")

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

        // Future logic to capture the button's value goes here...)
        if (pressed === 'C') {
            numberOne = null;
            numberTwo = null;
            operator = null;
            console.log('RESET')
        }
        else if (pressed !== 'C') {
      
            if (numberOne === null && !operator) {
                numberOne = pressed;
            }
          
            if (numberOne !== null && !operator && (pressed === '/' || pressed === '*' || pressed === '-' || pressed === '+')) {
                operator = pressed;
            }
            if (numberOne !== null && operator) {
                numberTwo = pressed
            }
            if (numberOne !== null && numberTwo !== null && operator !== null) {
                doMath(numberOne, numberTwo, operator);
            }
        }
    })


});

/*-------------------------------- Functions --------------------------------*/

const doMath = (num1, num2, operator) => { 

    let total = eval(`${num1}${operator}${num2}`);
    console.log(`${num1} ${operator} ${num2} = ${total}`)

}