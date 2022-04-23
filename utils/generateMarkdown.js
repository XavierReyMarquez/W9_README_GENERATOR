// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else {
    return `![license](https://img.shields.io/badge/License-${license}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  } else if (license == "MIT") {
    return "https://mit-license.org/";
  } else if (license == "BSD 2") {
    return `https://opensource.org/licenses/BSD-2-Clause`;
  } else if (license == "BSD 3") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  } else if (license == "Boost Software") {
    return `https://www.boost.org/users/license.html`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   renderLicenseBadge(data.license);
//   renderLicenseLink(data.license);
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

  # ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions

  contact me here:

 - Email: ${data.email}
 - GitHub [${data.username}](https://github.com/${data.username})`;
}

module.exports = generateMarkdown;
