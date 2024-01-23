// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
//  console.log(data.usage);
//  return `# ${data.title}`;

  `# ${data.title}

  ## Description

  - ${data.motivation}
  - ${data.purpose}
  - ${data.problemSolved}
  - ${data.learn}

  ## Table of Contents

  ## Installation

  - ${data.installation}

  ## Usage

  - ${data.usage}

  ## License

  ## Contributing

  - ${data.contribute}

  ## Tests

  - ${data.test}

  ## Questions

  - ${data.github}
  - ${data.email}`
}
  

module.exports = generateMarkdown;
