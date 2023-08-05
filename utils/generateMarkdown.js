// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = data.license !== 'None' ? `This application is covered under the ${data.license} license. Click [License](#license) for more details.` : 'This project is not licensed.';

  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
To run tests, use the following command:

\`\`\`
${data.test}
\`\`\`

## Questions
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;