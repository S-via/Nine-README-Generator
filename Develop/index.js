// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    inquire.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Enter your Project Title',
        },

        {
            type: 'input',
            name: 'description',
            message: '',
        },

        {
            type: 'input',
            name: 'table of contents',
            message: '',
        },

        {
            type: 'input',
            name: 'installation',
            message: '',
        },

        {
            type: 'input',
            name: 'usage',
            message: '',
        },

        {
            type: 'input',
            name: 'license',
            message: '',
        },

        {
            type: 'input',
            name: 'contributes',
            message: '',
        },


        {
            type: 'input',
            name: 'test',
            message: '',
        },

        {
            type: 'input',
            name: 'questions',
            message: '',
        },])
    ];





// append the users input from varibable question into the function to write README file

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `# ${questions.Title}
    ## Description 
    ${description}
    //* / questions?? array // */

    ## Table of Contents 
    ${tableofcontents}

    ##Installation
    ${installation}

    ## Usage
    ${usage}

    ##License
    ${license}

    ## Contributes
    ${contributes}

    ## Test
    ${test}

    ## Questions
    ${questions}
    
   


    `

    fs.writeFile('README.md', questions,fileName, data,
        (err) => err ? console.log(err) : console.log('Thank you !'));
};
writeToFile();

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
