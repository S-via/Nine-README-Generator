// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = inquirer.prompt([

    { type: 'input', name: 'title', message: 'project title' },
    { type: 'input', name: 'motivation', message: 'What was your motivation?' },
    { type: 'input', name: 'why', message: 'Why did you build this project?' },
    { type: 'input', name: 'problem', message: 'What problem does it solve?' },
    { type: 'input', name: 'learnd', message: 'What did you learn?' },
    { type: 'input', name: 'pro', message: 'What makes your project stand out?' },
    { type: 'input', name: 'installation', message: 'Please explain the installation instructions ' },
    { type: 'input', name: 'usage', message: 'What is the usage for this project? ' },
    // this is an options list 
    {
        type: 'list', name: 'license', message: "Chose license for your project: ",
        choices: [
            "",
            "",
            "",
            "",
        ]
    },

    { type: 'input', name: 'contributes', message: 'Who contribute to this project' },
    { type: 'input', name: 'test', message: 'Please enter test instructions' },
    { type: 'input', name: 'questions', message: '' },
    { type: 'input', name: 'usergit', message: 'Please enter your Github username: ' },
    { type: 'input', name: 'email', message: 'Pleae enter your email: ' }
]);

questions.then(answers => {
    console.log(answers);

}
);
// .catch
// append answers into readmeTemplet

function 
const readmeTemplet =

    `# ${answers.title}
        
        ## Description << 
        * ${answers.motivation}
        * ${answers.why}
        *${answers.problem}
        * ${answers.learned}
        * ${answers.pro}
        //* array of questions goes here  */
        
        ## Table of Contents 
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributes](#contributes)
        * [Test](#test)
        * [Questions](#questions)
        
        
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
        * ${answers.questions}
        - Email me ${answers.email} 
        - GitHub [${answers.usergit}](http://github.com/${answers.usetgit})`


// TODO: Create a function to write README file

/* define fileName an data */

/* function writeToFile (fileName , data) {
    
    fs.writeFile('README.md',fileName,data)}; */


/*  // TODO: Create a function to initialize app //
function init=()=> { 
    .then(() => console.log('thank you!))
    .catch ((err) => console.error(err));
    };

//Function call to initialize app(())
init();   */
