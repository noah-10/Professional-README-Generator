// requirements
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
            name: "description",
            message: "Please give your project a description."
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
            message: "Provide instructions for how to use your instructions."
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
            choices: ["Apache license 2.0", "BSD 2-clause &quot;Simplified&quot; license", "BSD 3-clause &quot;New&quot; or &quot;Revised&quot; license","Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",  "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License v2.1", "MIT License", "Mozilla Public License 2.0", "The Unlicense", "No License"],
            message: "Choose a license if any apply."
        },

        //For Test
        {
           type: "input",
           name: "test",
           message: "Write tests for your application and provide examples on how to run them." 
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

// function is called when application is opened
const init = () => {
    //Runs the function to prompt questions
    questions()

    .then((answers) => {
        
        // takes the answers and runs the function to create the markdown with the users answers and stores it to a variable
        const markdownContent = generateMarkdown(answers);

        //function to write the file called "README.md" and uses the variable containing the markdown as the data
        fs.writeFile("README.md", markdownContent, (err) => {
            // logs error if there was an error or success if it was successfuly created
            err ? console.error("Error writing to file:", err) : console.log('Success! Readme written')
         })
        
    })
    .catch((err) => console.error("Error during questions:", err))
    
}

// Function call to initialize app
init();
