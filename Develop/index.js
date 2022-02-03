// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the project name?',

    },
    {
        type: 'input',
        name:'description',
        message:'Give a short project description',
    },
    {
        type: 'input',
        name:'installation',
        message:'Describe any installation instructions.',
    },
    {
        type: 'input',
        name:'usage',
        message:'Describe usage of this project.',
    },
    {
        type: 'list',
        name:'license',
        message:'Under what license is this project covered?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name:'contribution',
        message:'Give any contribution instructions for this project',
    },
    {
        type: 'input',
        name:'testing',
        message:'Give any testing instructions for this project',
    },
    {
        type: 'input',
        name:'github',
        message:'Enter your Github username.',
    },
    {
        type: 'input',
        name:'email',
        message:'Enter your email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success! Your README file has been created.')
    )};

// TODO: Create a function to initialize app
function init() {
    inquirer   
    .prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    })
}

// Function call to initialize app
init();
