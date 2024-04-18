import inquirer from "inquirer";
const currencies = [
    { name: "US Dollar", code: "USD", rate: 1 },
    { name: "Pakistani Rupee", code: "PKR", rate: 277 },
    { name: "Euro", code: "EUR", rate: 0.85 },
    { name: "British Pound", code: "GBP", rate: 0.72 }
];
console.log("=== Currency Converter ===\n");
const fromCurrencyChoice = await inquirer.prompt({
    type: "list",
    name: "fromCurrency",
    message: "Choose the currency you are converting from:",
    choices: currencies.map(currency => currency.name)
});
const toCurrencyChoice = await inquirer.prompt({
    type: "list",
    name: "toCurrency",
    message: "Choose the currency you want to convert to:",
    choices: currencies
        .filter(currency => currency.code !== fromCurrencyChoice.fromCurrency)
        .map(currency => currency.name)
});
const amountInput = await inquirer.prompt({
    type: "number",
    name: "amount",
    message: "Enter the amount to convert:",
    filter: input => parseInt(input),
    validate: input => !isNaN(parseFloat(input))
});
let fromCurrency = currencies.find(currency => currency.name === fromCurrencyChoice.fromCurrency);
let toCurrency = currencies.find(currency => currency.name === toCurrencyChoice.toCurrency);
if (!fromCurrency || !toCurrency) {
    console.log("Error: Invalid currency selection!");
}
if (fromCurrency != undefined && toCurrency != undefined) {
    const convertedAmount = amountInput.amount * (toCurrency.rate / fromCurrency.rate);
    console.log(`\nThe converted amount is: ${convertedAmount.toFixed(2)} ${toCurrency.code}\n`);
}
