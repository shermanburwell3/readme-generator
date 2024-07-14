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
  case "Creative Commons":
    badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    break;
  case "MIT":
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    break;
  case "The Unlicense":
    badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    break;
  case "None":
    badge = ``;
  default:
    badge = '';
  }

  return `${badge}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case "Apache 2.0":
      link = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Artistic License":
      link = `[${license}](https://opensource.org/licenses/Artistic-2.0)`;
      break;
    case "Creative Commons":
      link = `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "MIT":
      link = `[${license}](https://opensource.org/licenses/MIT)`;
      break;
    case "The Unlicense":
      link = `[${license}](http://unlicense.org/)`;
      break;
    default:
      link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license === "None") {
    return '';
  }
  else {
    return `## License
    
Distributed under the ${license} license. See \`license.txt\` for more information`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Set up variables to determine usage
  let {title, description, howToInstall, usage, credits, license, features, contributionGuidelines, contact, test} = data;
  let tableOfContents = "";
  if (description.length > 0) {
    tableOfContents += `\n${description}`;
    description = `## Description
    
    ${description}`;
  }
  if (howToInstall.length > 0) {
    tableOfContents += `\n${howToInstall}`;
    howToInstall = `## How To Install
    
    ${howToInstall}`;
  }
  if (usage.length > 0) {
    tableOfContents += `\n${usage}`;
    usage = `## Usage
    
    ${usage}`;
  }
  if (credits.length > 0) {
    credits = `## Credits
    
    ${credits}`;
  }
  if (features.length > 0) {
    features = `## Features
    
    ${features}`;
  }
  if (contributionGuidelines.length > 0) {
    usage = `## Contribution Guidelines
    
    ${contributionGuidelines}`;
  }
  if (constact.length > 0) {
    contact = `## Usage
    
    ${contact}`;
  }
  if (test.length > 0) {
    test = `## Usage
    
    ${test}`;
  }
}

  // TODO: Pass the license into each of the license functions in string literal here
  return `# ${title}
  ${renderLicenseBadge(license)}

  ${tableOfContents}

  ${description}

  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}



  

`;
}

module.exports = generateMarkdown;
