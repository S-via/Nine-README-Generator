// TODO: Include packages needed for this application
const fs = require ('fs');
const inquire = require('inquire');

// TODO: Create an array of questions for user input
const questions = [
    inquire.prompt([
        {type:'',
            name:'',
        message:'', },
    ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',(err) => err? console.log(err):console.log('Thank you !'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
