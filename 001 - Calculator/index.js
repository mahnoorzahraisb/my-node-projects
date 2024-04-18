import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: 'number',
        name: 'firstNumber',
        message: 'Please enter the first number:',
        validate: (input) => {
            if (isNaN(input)) {
                console.log('\n  Please enter a valid number.');
                return false;
            }
            return true;
        },
    },
    {
        type: 'number',
        name: 'secondNumber',
        message: 'Please enter the second number:',
        validate: (input) => {
            if (isNaN(input)) {
                console.log('\n  Please enter a valid number.');
                return false;
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select the mathematical operation you want to perform:',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
let result;
switch (userInput.operation) {
    case 'Addition':
        result = userInput.firstNumber + userInput.secondNumber;
        console.log("The result of addition is: " + result);
        break;
    case 'Subtraction':
        result = userInput.firstNumber - userInput.secondNumber;
        console.log("The result of subtraction is: " + result);
        break;
    case 'Multiplication':
        result = userInput.firstNumber * userInput.secondNumber;
        console.log("The result of multiplication is: " + result);
        break;
    case 'Division':
        result = userInput.firstNumber / userInput.secondNumber;
        console.log("The result of division is: " + result);
        break;
}
