const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("./utils/generateMarkdown")

// array of questions for user
const questions = [

];

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
    ])
    .then(function(data) {
        console.log(data.title);
        writeToFile("README.md", generateMarkdown(data));
      });
}

// function call to initialize program
init();
