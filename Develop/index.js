// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = ({
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  licenseType,
  userName,
  emailAddress,
}) =>

  `# ${title}

## Project Description:

${description}

## Table of Contents:
* [Project Description](#project-description)
* [Installation](#installation)
* [Usage Information](#usage-information)
* [Contributor Guidelines](#contributor-guidelines)
* [Testing Information](#testing-information)
* [License Type](#license-type)
* [Questions](#questions)

## Installation:

${installation}

## Usage Information: 

${usage}

## Contributor Guidelines:

${contributing}

## Testing Information: 

${tests}

## License Type:
${licenseType}

## Questions:
Contact: ${userName} 

GitHub: https://github.com/${userName}

If you have further questions please reach me at: ${emailAddress}
`;

const theQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter intended usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter any contributor guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Plese enter any testing information:",
  },
  {
    type: "list",
    name: "licenseType",
    choices: [
      "Apache License 2.0",
      "GNU General Public Licence v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
    ],
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What email can people reach you at?",
  },
];

function init() {
  inquirer.prompt(theQuestions).then((data) => {
    const readMeContent = generateReadme(data);
    fs.writeFile("ReadMe.md", readMeContent, (err) =>
      err ? console.log(err) : console.log(data)
    );
  });
}

init();
