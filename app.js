#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan.bold("=".repeat(50)));
console.log(chalk.magentaBright.bold("\n     -Welcome to Haya Sikander's Word Counter-     \n"));
console.log(chalk.cyan.bold("=".repeat(50)));
let input = await inquirer.prompt([{
        type: "input",
        name: "paragraph",
        message: chalk.blueBright.bold("\n -Enter an English sentence or paragraph: ")
    }]);
let words = input.paragraph.trim().split(" ");
console.log(chalk.cyan.bold("\n" + "=".repeat(50)));
console.log(chalk.greenBright.bold(`\n - Number of Words: `) + chalk.yellow.bold(`${words.length}`) + "\n");
console.log(chalk.cyan.bold("=".repeat(50) + "\n"));
