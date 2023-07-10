const operators = Array.from(document.querySelectorAll(".operator"));
const numbers = Array.from(document.querySelectorAll(".number"));
const output = document.querySelector(".output")
const clearBtn = document.querySelector("#AC");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const powerBtn = document.querySelector("#power");
const percentBtn = document.querySelector("#percent");
const equalsBtn = document.querySelector("#equals");

let firstNum = '';
let secondNum = '';
let operator = '';

const displayNum = () => {
    output.textContent = firstNum;
}

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if(operator == '') {
            firstNum += e.target.textContent;
            output.textContent = firstNum;
        } else {
            secondNum += e.target.textContent;
            output.textContent = secondNum;
        }
        console.log(firstNum, operator, secondNum);
    });
});

clearBtn.onclick = () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    output.textContent = '';
}

const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    console.log(num2);
    if(num2 == 0) {
        return 'CANNOT DIVIDE BY 0';
    }
    return num1 / num2;
}
const plus = (num1, num2) => Number(num1) + Number(num2);
const minus = (num1, num2) => num1 - num2;
const percent = (num) => num / 100;
const power = (num1, num2) => Math.pow(num1, num2);

const operation = () => {
    console.log(firstNum, operator, secondNum);
    switch(operator) {
        case 'divide':
            firstNum = divide(firstNum, secondNum);
            break;
        case 'multiply':
            firstNum = multiply(firstNum, secondNum);
            break;
        case 'minus':
            firstNum = minus(firstNum, secondNum);
            break;
        case 'plus':
            firstNum = plus(firstNum, secondNum);
            break;
        case 'percent':
            firstNum = percent(output.textContent);
            break;
        case 'power':
            firstNum = power(firstNum, secondNum);
            break;
    }
    secondNum = '';
    displayNum();
}

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        if(operator != '') {
            operator = e.currentTarget.id;
            operation();
        }

        operator = e.currentTarget.id;
    });
    
});

equalsBtn.onclick = () => {
    operation();
};
