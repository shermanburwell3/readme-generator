// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

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
  ${renderLicenseBadge}



  

`;
}

module.exports = generateMarkdown;
