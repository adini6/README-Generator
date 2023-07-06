//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown");


// an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use the project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv2', 'Other', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Explain how others can contribute to the project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions for running tests:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address for further inquiries:',
    },
  ];
  

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`README.md generated successfully as ${fileName}`);
    }
  });
}
// function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();



