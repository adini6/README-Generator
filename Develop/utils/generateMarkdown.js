// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;



