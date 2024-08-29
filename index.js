// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input

const questions = [

    { type: 'input', name: 'title', message: ' What is your project title? ' },
    { type: 'input', name: 'motivation', message: 'What was your motivation?' },
    { type: 'input', name: 'why', message: 'Why did you build this project?' },
    { type: 'input', name: 'problem', message: 'What problem does it solve?' },
    { type: 'input', name: 'learned', message: 'What did you learn?' },
    { type: 'input', name: 'pro', message: 'What makes your project stand out?' },
    { type: 'input', name: 'installation', message: 'Please explain the installation instructions ' },
    { type: 'input', name: 'usage', message: 'What is the usage for this project? ' },
    // this is an options list 
    {
        type: 'list', name: 'license', message: "Chose license for your project: ",
        choices: [
            "Apache",
            "Mozilla_p2.0",
            "GNU_v3",
            
        ]
    },

    { type: 'input', name: 'contributes', message: 'Who contribute to this project? ' },
    { type: 'input', name: 'test', message: 'Please enter test instructions? ' },
    { name: 'questions', message: 'If you have any questions, please reach out' },
    { type: 'input', name: 'usergit', message: 'Please enter your Github username: ' },
    { type: 'input', name: 'email', message: 'Pleae enter your email: ' }
];
// TODO: Create a function to write README file

/* define fileName an data */
 function writeToFile (fileName, data){
    // the fs.writeFile is to write inside new folder  
    fs.writeFile('./utils/new/' + fileName, data, (err)  =>{
        
        if (err) {
            console.error(err);
        } 
        console.log('readme was generated');
        
    })};        
      

    // inside this function writeToFile we will created and README.md inside folder new 

 // TODO: Create a function to initialize app //
function init() { 
    inquirer.prompt(questions)
    .then ((data) => {
        console.log('thank you')
        const markDown = generateMarkDown(data)
        writeToFile('README.md',markDown) // calling function to write file
    })
    .catch ((err) => console.error(err));
};

//Function call to initialize app(())
init();     

