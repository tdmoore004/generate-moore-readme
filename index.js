const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("./utils/generateMarkdown")

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
    
        if (err) {
          return console.log(err);
        }
      
        console.log("README Generated Successfully!");
      
      });
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
          },
        {
            type: "input",
            name: "description",
            message: "Describe your application?"
          },
        {
            type: "input",
            name: "installation",
            message: "Describe how to install your application?"
          },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage cases for your application?"
          },
        {
            type: "input",
            name: "contribution",
            message: "What are the guidelines for contributing to your application?"
          },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests in your code and how do you run them?"
          },
        {
            type: "list",
            message: "Choose a license for your project?",
            name: "license",
            choices: [
              "MIT", 
              "GNU GPLv3", 
              "Apache 2.0", 
              "ISC"
            ]
          },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username for questions?"
          },
        {
            type: "input",
            name: "email",
            message: "What is your email to be contacted at?"
          },
    ])
    .then(function(data) {
        console.log(data.title);
        writeToFile("README.md", generateMarkdown(data));
      });
}

// function call to initialize program
init();
