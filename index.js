#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
console.log(chalk.magentaBright.bold('\tWelcome to Anila Iqbal Currency converter'));
console.log(chalk.cyanBright("\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n"));
const currency_value = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.magentaBright.bold("Enter from currency,which you have?"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: chalk.blueBright.bold("Enter to currency,which you convert."),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: chalk.magentaBright.bold("Enter your amount."),
        type: "number"
    }
]);
//store data in variable
let fromAmount = currency_value[user_answer.from];
let toAmount = currency_value[user_answer.to];
let amount = user_answer.amount;
//use formula
//apki amount divide by (fromAmount) me uska 1 rupe ya 1 dollr likhy
//apni base amount ko * kry to amount(converted wali sy)
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//print 
console.log(Math.round(convertedAmount));
