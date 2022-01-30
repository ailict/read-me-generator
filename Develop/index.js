// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    'What is the project name?',
    'Give a short description of the project.',
    'Describe any installation instructions.',
    'Describe usage of this project.',
    'Under what license is this project covered?',
    'Give any contribution instructions for this project',
    'Give any testing instructions for this project',
    'Enter your Github username.',
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success! Your README file has been created.')
    )};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
