const display = document.querySelector('#display');
const buttons = Array.from(document.querySelectorAll('button'))

let num1 = 0;
let operator = '';
let num2 = 0;

buttons.map(button =>
    button.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case '+':
            case '-':
            case '*':
            case '/':
                num1 = parseInt(display.textContent);
                operator = e.target.textContent;
                display.textContent = '\u00A0';
                break;
            case '=':
                num2 = parseInt(display.textContent);
                display.textContent = operate(num1, operator, num2);
                num1 = 0;
                operator = '';
                num2 = 0;
                break;

            case 'C':
                display.textContent = '';
                num1 = 0;
                operator = '';
                num2 = 0;
                break;
            case '←':
                display.textContent = display.textContent.slice(0, -1);
                break;
            default: display.textContent += e.target.textContent;
            }
        }
    )
)

function operate(num1, operator, num2){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return null;
    }
}