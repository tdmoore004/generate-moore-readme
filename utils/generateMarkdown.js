// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  let licenseInfo = "";

  if(data.license === "MIT") {
    licenseBadge = "MIT-yellow";
    licenseInfo = "mit";
  } else if (data.license === "GNU GPLv3") {
    licenseBadge = "GPLv3-blue";
    licenseInfo = "gpl-3.0";
  } else if (data.license === "Apache 2.0") {
    licenseBadge = "Apache%202.0-blue";
    licenseInfo = "apache-2.0";
  } else if (data.license === "ISC") {
    licenseBadge = "ISC-blue";
    licenseInfo = "isc";
  }
  
  return `[![License: ${data.license}](https://img.shields.io/badge/License-${licenseBadge}.svg)](https://choosealicense.com/licenses/${licenseInfo}/)
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

[${data.license}](https://choosealicense.com/licenses/${licenseInfo}/)

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
