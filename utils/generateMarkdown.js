// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return`# ${data.title}
## ${data.license} // the option of license they choose will be in here <<<
## Description << 
* ${data.motivation}
* ${data.why}
*${data.problem}
* ${data.learned}
* ${data.pro}
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
* ${data.installation}

## Usage <<
* ${data.usage}

## License
* ${data.license}
## Contributes <<
* ${data.contributes}
## Test <<
* ${data.test}
## Questions
* ${data.questions}
- Email me for questions ${data.email} 
- My GitHub [${data.usergit}](http://github.com/${data.usetgit})`;
}

module.exports = generateMarkdown;
