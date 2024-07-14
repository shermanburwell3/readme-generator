// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch (license) {
  case "Apache 2.0":
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    break;
  case "Artistic License":
    badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
    break;


  }

  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Set up variables to determine usage
  const {title, description, howToInstall, usage, credits, license, features, contributionGuidelines, contact, test} = data;


  // TODO: Pass the license into each of the license functions in string literal here
  return `# ${title}
  ${renderLicenseBadge(license)}



  

`;
}

module.exports = generateMarkdown;
