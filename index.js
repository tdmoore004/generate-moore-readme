const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("./utils/generateMarkdown")

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", generateMarkdown(), function(err) {
    
        if (err) {
          return console.log(err);
        }
      
        console.log("README Generated Successfully!");
      
      });
}

// function to initialize program
function init() {
    writeToFile();
}

// function call to initialize program
init();
