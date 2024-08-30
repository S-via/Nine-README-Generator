/* const licenseBadge= {
Apache : '(https://img.shields.io/badge/Apache-License-pink)',
Mozilla_2.0: '(https://img.shields.io/badge/Mozilla_p2.0-License-blue)',
GNU v3: '(https://img.shields.io/badge/GNU_v3-License-purple)',} */

/* let badge =''
if (license ==='Apache'){
    badge = `(https://img.shields.io/badge/Apache-License-pink)`
}
else if (license === 'mOZILLA_2.0'){
    badge = `(https://img.shields.io/badge/Mozilla_p2.0-License-blue)`
}
else if (license === 'GNU v3'){
    badge = `(https://img.shields.io/badge/GNU_v3-License-purple)`
   
}
else{badge = ''}
return badge ;
 */
// TODO: Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string

function renderLicenseBadge(license) {
   /*  if there is no (!license) */
 if (!license)
 return ''; 
}
renderLicenseBadge()




// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// const licenseLink = {
//Apache: 'https://www.apache.org/licenses/LICENSE-2.0'
// Mozilla_2.0: 'https://www.mozilla.org/en-US/MPL/2.0/'
//GNU v3: 'https://www.gnu.org/licenses/licenses.html'}

function renderLicenseLink(license) { 

    // if there is no license License return ''
    
    if (!license)
 return '';


}
renderLicenseLink();

// const licenseSection {
// Apache : '' 
//Mozilla_2.0 : '' 
//GNU v3 : ''

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
   
    if (!license)
        return '';
    
}
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return`# ${data.title}
## ![badge](https://img.shields.io/badge/${data.license}-License-pink) 
## Description << 
* ${data.motivation}
* ${data.why}
*${data.problem}
* ${data.learned}
* ${data.pro}

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

This application is covered under ![badge](https://img.shields.io/badge/${data.license}-License-pink) 
<br> 

## Contributes <<
* ${data.contributes}
## Test <<
* ${data.test}
## Questions
* ${data.questions}
- Email me for questions: ${data.email} 
- My GitHub:[${data.usergit}](http://github.com/${data.usetgit})`;



}

module.exports = generateMarkdown;
