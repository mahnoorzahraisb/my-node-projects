import inquirer from "inquirer";

const input = await inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text: '
    }
]);

const words = input.text.split(" ");
const wordCount = words.length;
const characterCount = input.text.length;

console.log("The word count is: " + wordCount+". The character count is: "+characterCount);