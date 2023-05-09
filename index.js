
// import modules 
import inquirer from 'inquirer';
import fs from 'fs/promises';

// define questions for user input 
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines for your project:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Enter instructions for your project:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Enter credits for your project:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: (value) => (value ? true : 'I need a value to continue'),
  },
];

// function to write readme file 
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md file created!')
  );
}

// function to initialize the app 
function init() {
  inquirer.prompt(questions).then((answers) => {
    const {
      title,
      installation,
      usage,
      contributing,
      instructions,
      credits,
      license,
      username,
      email,
    } = answers;

    const template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contribution
${contributing}

## Instructions
${instructions}

## Credits
${credits}

## License
${license}

## Contact
* Github: ${username}
* Email: ${email}`;

    writeToFile('README.md', template);
  });
}

// call the init function to run 
init();
