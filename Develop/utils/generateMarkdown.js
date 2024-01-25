// Function to render in the license badge based on what license the user chose
// This badge includes a link to the license documentation
const renderLicenseBadge = (license) => {
  if(license === "Apache license 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license === "BSD 2-clause &quot;Simplified&quot; license"){
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if(license === "BSD 3-clause &quot;New&quot; or &quot;Revised&quot; license"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if(license === "Boost Software License 1.0"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license === "Creative Commons Zero v1.0 Universal"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if(license === "Eclipse Public License 2.0"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if(license === "GNU Affero General Public License v3.0"){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
  else if(license === "GNU General Public License v2.0"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if(license === "GNU General Public License v3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if(license === "GNU Lesser General Public License v2.1"){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  else if(license === "MIT License"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license === "Mozilla Public License 2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if(license === "The Unlicense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  else {
    return "";
  }
}

// Renders the license section based on what licese the user chose
// The section includes a link to the license documentation
const renderLicenseSection = (license) => {
  if(license === "MIT License"){
    return "This repository is covered under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) for more details"
  }
  else if(license === "Apache license 2.0"){
    return "This repository is covered under the Apache license 2.0 License. See the [LICENSE](https://choosealicense.com/licenses/apache-2.0/) for more details"
  }
  else if(license === "BSD 2-clause &quot;Simplified&quot; license"){
    return "This repository is covered under the 2-Clause BSD License. See the [LICENSE](https://opensource.org/license/bsd-2-clause/) for more details"
  }  
  else if(license === "BSD 3-clause &quot;New&quot; or &quot;Revised&quot; license"){
    return "This repository is covered under the 3-Clause BSD License. See the [LICENSE](https://opensource.org/license/bsd-3-clause/) for more details"
  }  

  else if(license === "Boost Software License 1.0"){
    return "This repository is covered under the Boost Software License 1.0. See the [LICENSE](https://www.boost.org/users/license.html) for more details"
  }  
  else if(license === "Creative Commons Zero v1.0 Universal"){
    return "This repository is covered under the Creative Commons Zero v1.0 Universal License. See the [LICENSE](https://creativecommons.org/publicdomain/zero/1.0/deed.en) for more details"
  }  
  else if(license === "Eclipse Public License 2.0"){
    return "This repository is covered under the Eclipse Public License 2.0. See the [LICENSE](https://www.eclipse.org/legal/epl-2.0/) for more details"
  }  
  else if(license === "GNU Affero General Public License v3.0"){
    return "This repository is covered under the GNU Affero General Public License v3.0. See the [LICENSE](https://www.gnu.org/licenses/agpl-3.0.en.html) for more details"
  }  
  else if(license === "GNU General Public License v2.0"){
    return "This repository is covered under the GNU General Public License v2.0. See the [LICENSE](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) for more details"
  }  
  else if(license === "GNU General Public License v3.0"){
    return "This repository is covered under the GNU General Public License v3.0. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) for more details"
  }  
  else if(license === "GNU Lesser General Public License v2.1"){
    return "This repository is covered under the GNU Lesser General Public License v2.1. See the [LICENSE](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html) for more details"
  }  
  else if(license === "Mozilla Public License 2.0"){
    return "This repository is covered under the Mozilla Public License 2.0. See the [LICENSE](https://www.mozilla.org/en-US/MPL/2.0/) for more details"
  }  
  else if(license === "The Unlicense"){
    return "This repository is covered under The Unlicense License. See the [LICENSE](https://choosealicense.com/licenses/unlicense/) for more details"
  }
  else {
    return ""
  }  
}

// Function to generate the markdown based on the users answers
const generateMarkdown = (data) => {

const licenseBadge = renderLicenseBadge(data.license);  
const licenseInfo = renderLicenseSection(data.license);

return `# ${data.title}


${licenseBadge}
## Description

- ${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- ${data.installation}

## Usage

- ${data.usage}

## License

- ${licenseInfo}

## Contributing

- ${data.contribute}

## Tests

- ${data.test}

## Questions

- My [github](https://github.com/${data.github})
- My email: ${data.email}`;
}
  

module.exports = generateMarkdown;
