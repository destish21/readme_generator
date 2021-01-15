// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//license badge 
var licenseBadge = license => {
  if (license !== "None") {
    return `[![License:${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }else {
    return `This application does not have licence`
  }
}
//link to the license
var licenseLink = license => {
  if (license) {
    return ( 
      `\n* [License](#license)\n`
      )
  }
}
//license section
var displayLicense = license => {
  if (license !== "None") {
    return (`## License
    ### This application is licensed under ${licenseBadge(license)}.`)
  } else {
    return (`## License
    ### This application is not licensed.`)
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation Instructions](#installation-instructions)
  
  * [Usage Instructions](#usage-instructions)
  
  * [Contribution](#Contribution)
  
  * [Developers Contact Information](#Developers-Contact-Information)
  * [favfoods](#favfoods)
  * [your address](#your address)
  * [PrefferedMethod](#PrefferedMethod of Communication)
    ${licenseLink(data.license)}
  ##Installation Instructions
  ${data.installation}
  ## Usage Instructions
  ${data.usage}
  ##Contributiion
  ${data.contribution}
  ##favfoods
  ${data.favfoods}
  ##your address
  ${data.address}
  ##PrefferedMethod of Communications
  ${data.PrefferedMethos}
  
  ## Developers Contact Information
   * LinkdIn Profile: ${data.linkdin}
   * URL : ${data.url}
   * Email: ${data.email}
  ${displayLicense(data.license)}
`;
}
module.exports = generateMarkdown;
