const operators = Array.from(document.querySelectorAll(".operator"));
let numbers = Array.from(document.querySelectorAll(".number"));
const output = document.querySelector(".output")
const clearBtn = document.querySelector("#AC");
const equalsBtn = document.querySelector("#equals");
const periodBtn = document.querySelector('#decimal');
const negationBtn = document.querySelector('#pos-neg');

numbers = [...numbers, periodBtn];

let firstNum = '';
let secondNum = '';
let operator = '';

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if(operator == '') {
            firstNum += e.target.textContent;
            output.textContent = firstNum;
        } else {
            secondNum += e.target.textContent;
            output.textContent = secondNum;
        }
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
    output.textContent = firstNum;
}

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        if(operator != '') {
            operation();
        }
        operator = e.currentTarget.id;
    });
    
});

equalsBtn.onclick = () => {
    operation();
};

negationBtn.addEventListener('click', () => {
    if(operator == '') {
        firstNum = '-' + firstNum;
        output.textContent = firstNum;
    } else {
        secondNum = '-' + secondNum;
        output.textContent = secondNum;
    }
});
