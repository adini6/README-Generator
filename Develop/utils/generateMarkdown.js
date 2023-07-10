// function for license badge
function renderLicenseBadge(license) {
  if (license !== "none") {
    if (license === "MIT") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache 2.0") {
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "GPLv2") {
      return "![License: GPLv2](https://img.shields.io/badge/License-GPLv2-blue.svg)";
    } else if (license === "Other") {
      return "![License: Other](https://img.shields.io/badge/License-Other-lightgrey.svg)";
    }
  }
  return "";
}

// function for license section of the README
function renderLicenseSection(license) {
  if (license !== "None") {
    if (license === "MIT") {
      return "- [License](#license)";
    } else {
      return "";
    }
  }
}

// function for license link 
function renderLicenseLink(license) {
  if (license !== "None") {
    if (license === "MIT") {
      return "[License](LICENSE-MIT)";
    } else {
      return "";
    }
  }
  return "";
}

//function to generate markdown for README
function generateMarkdown(data) {
  const starterCodeSource = 'https://github.com/coding-boot-camp/potential-enigma.git'; 

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
- [Starter Code Source](#starter-code-source)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

## Starter Code Source
The starter code for this project is sourced from [Potential-enigma](${starterCodeSource}).

`;
}

module.exports = generateMarkdown;



