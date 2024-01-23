// requirements
const inquirer = require("inquirer");
// const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require("fs").promises;

// questions that are prompted
const questions = () => {
    return inquirer.prompt([
        // For Title
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },

        // For Description
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation?"
        },

        {
            type: "input",
            name: "purpose",
            message: "Why did you build this project?"
        },

        {
            type: "input",
            name: "problemSolved",
            message: "What problem does it solve?"
        },

        {
            type: "input",
            name: "learn",
            message: "What did you learn?"
        },

        // For Intallation
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },

        // For Usage
        {
            type: "input",
            name: "usage",
            message: "Provide instructions for how to use your instructions"
        },

        // For Contributing
        {
            type: "input",
            name: "contribute",
            message: "If you would like other developers to contribute, include how to do so."
        },

        //For License
        {
            type: "list",
            name: "license",
            choices: ["Apache license 2.0", "BSD 2-clause &quot;Simplified&quot; license", "BSD 3-clause &quot;New&quot; or &quot;Revised&quot; license","Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",  "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License v2.1", "MIT License", "Mozilla Public License 2.0", "The Unlicense"],
            message: "Choose a license if any apply"
        },

        //For Test
        {
           type: "input",
           name: "test",
           message: "Write tests for your application and provide examples on how to run them" 
        },

        // For questions
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },

        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
    ])
}

// const generateMarkDown

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()

    .then((answers) => writeFile("README.MD", JSON.stringify(generateMarkdown(answers))))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
