// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const prompt = inquirer.prompt();
const questions = [
    { type: 'input', name: 'title', message: 'project title' },
    { type: 'input', name: 'motivation', message: 'What was your motivation?' },
    { type: 'input', name: 'why', message: 'Why did you build this project?' },
    { type: 'input', name: 'problem', message: 'What problem does it solve?' },
    { type: 'input', name: 'learnd', message: 'What did you learn?' },
    { type: 'input', name: 'pro', message: 'What makes your project stand out?' },
    { type: 'input', name: 'tableofcontent', message: '' },
    { type: 'input', name: 'installation', message: '' },
    { type: 'input', name: 'usage', message: '' },
    { type: 'input', name: 'license', message: '' },
    { type: 'input', name: 'contributes', message: '' },
    { type: 'input', name: 'test', message: '' },
    { type: 'input', name: 'questions', message: '' }];
    // append answers into fileName 

    prompt(questions).then((fileName.answers), => {
        console.log('answers')});

const fileName = 

`# ${title}

## Description << 
* ${answers.motivation}
* ${answers.why}
*${answers.problem}
* ${answers.learned}
* ${answers.pro}
//* array of questions goes here  */

## Table of Contents 
* ${answers.tableofcontent}

## Installation <<
* ${answers.installation}

## Usage <<
* ${answers.usage}

## License
* ${answers.license}

## Contributes <<
* ${answers.contributes}

## Test <<
* ${answers.test}

## Questions
* ${answers.questions}` ;


     
// TODO: Create a function to write README file

/* // define fileName an data
function writeToFile(fileName, data) {

    fs.writeFile(
        'README.md'

        (err) => err ? console.log(err) : console.log('Thank you !'));

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init(); */
