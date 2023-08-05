const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md has been generated successfully!');
    }
  });
}

// Function to initialize app
async function init() {
  try {
    console.log('Answer the following questions to generate README.md');
    const inquirerResponses = await inquirer.prompt(questions);
    const markdown = generateMarkdown(inquirerResponses);
    writeToFile('README.md', markdown);
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

init();