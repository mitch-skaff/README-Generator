// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License](https://img.shields.io/badge/License-MIT-yellow)";

    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-green)";

    case "GPL 3.0":
      return "![License](https://img.shields.io/badge/License-GPL%203.0-red)";

    case "BSD 3":
      return "![License](https://img.shields.io/badge/License-BSD%203-blue)";

    case "None":
      return;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";
    
    case "Apache 2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";

    case "GPL 3.0":
      return "https://choosealicense.com/licenses/gpl-3.0/";
    
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    
    case "None":
      return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    let licenseContent = `## License\nThis project is licensed under [${license}](${renderLicenseLink(license)})`;

    return licenseContent;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
          ${renderLicenseBadge(data.license)}

          ## Demo
          ![demo]()

          ## Table of Contents
          * [Description](#Description)
          * [Installation](#Installation)
          * [License](#License)
          * [Usage](#Usage)
          * [Tests](#Tests)
          * [Contributing](#Contributing)
          * [Questions](#Questions)
          
          ## Description
          ${data.describe}

          ## Installation
          ${data.install}

          ${renderLicenseSection(data.license)}

          ## Usage
          ${data.usage}

          ## Tests
          ${data.test}

          ## Contributing
          ${data.contribute}

          ## Questions
          For any further questions regarding this project please contact me through either my GitHub, https://github.com/${data.github}, or my email, ${data.email}!
`;
};

module.exports = generateMarkdown;
