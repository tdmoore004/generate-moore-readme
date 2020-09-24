// function to generate markdown for README
function generateMarkdown(data) {
  return `[![License: ${data.license}](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
# ${data.title}

## Description

${data.description}

## Table of Contents

[Installation](##installation)
[Usage](##usage)
[License](##license)
[Contributing](##contributing)
[Tests](##tests)
[Questions](##questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

[${data.license}](https://choosealicense.com/licenses/${data.license}/)

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})
Email: [${data.email}](mailto:${data.email})
`;
  
}

module.exports = generateMarkdown;
