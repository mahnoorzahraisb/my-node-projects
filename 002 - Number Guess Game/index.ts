import inquirer from "inquirer";

let isGameRunning = true;

while (isGameRunning) {
    const secretNumber = Math.floor(Math.random() * (100)) + 1;
    let guessedCorrectly = false;

    console.log(`\n------------- Welcome to the Number Guessing Game -------------\n`);

    for (let attempts = 1; attempts <= 5; attempts++) {
        const { guessedNumber } = await inquirer.prompt([
            {
                type: "number",
                name: "guessedNumber",
                message: "Guess the number (between 1 and 100 inclusive):",
            }
        ]);

        if (guessedNumber === secretNumber) {
            console.log(`Congratulations! You guessed it right!`);
            guessedCorrectly = true;
            break;
        } else {
            console.log(`Oops! Wrong guess. Try again!`);
        }
    }

    if (!guessedCorrectly) {
        console.log(`You lost the game! The correct number was ${secretNumber}`);
    }

    console.log(`\n--------------------------------------------------------------\n`);

    const { playAgain } = await inquirer.prompt([
        {
            type: "list",
            name: "playAgain",
            message: `Would you like to play again?`,
            choices: ["Yes", "No"],
        }
    ]);

    if (playAgain === "No") {
        isGameRunning = false;
        console.log(`\n------------------------ Game Over ----------------------------\n`);
    }
}